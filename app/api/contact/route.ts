import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactForm {
  name: string;
  company?: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  message: string;
}

function validateForm(data: Partial<ContactForm>): string | null {
  if (!data.name || data.name.trim().length < 2) return "Full name is required (minimum 2 characters).";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "A valid email address is required.";
  if (!data.phone || data.phone.trim().length < 7) return "A valid phone number is required.";
  if (!data.city || data.city.trim().length < 2) return "City is required.";
  if (!data.subject || data.subject.trim().length < 2) return "Subject is required.";
  if (!data.message || data.message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
}

function buildEmailHtml(data: ContactForm): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f9fafb; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 20px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
    .header { background: linear-gradient(135deg, #16a34a, #065f46); padding: 28px 32px; }
    .header h1 { color: #fff; margin: 0; font-size: 22px; }
    .header p { color: #bbf7d0; margin: 6px 0 0; font-size: 14px; }
    .body { padding: 28px 32px; }
    .field { margin-bottom: 16px; padding: 14px 16px; background: #f0fdf4; border-left: 3px solid #16a34a; border-radius: 0 8px 8px 0; }
    .field .label { font-size: 11px; font-weight: bold; color: #15803d; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .field .value { font-size: 15px; color: #1f2937; }
    .message-block { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 8px; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap; }
    .footer { background: #f1f5f9; padding: 16px 32px; text-align: center; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 New Contact Form Submission</h1>
      <p>Right Ewaste Recycle Private Limited — Website Enquiry</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${escapeHtml(data.name)}</div>
      </div>
      ${data.company ? `<div class="field"><div class="label">Company Name</div><div class="value">${escapeHtml(data.company)}</div></div>` : ""}
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color:#16a34a">${escapeHtml(data.email)}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${escapeHtml(data.phone)}" style="color:#16a34a">${escapeHtml(data.phone)}</a></div>
      </div>
      <div class="field">
        <div class="label">City</div>
        <div class="value">${escapeHtml(data.city)}</div>
      </div>
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${escapeHtml(data.subject)}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-block">${escapeHtml(data.message)}</div>
      </div>
      <p style="font-size:12px;color:#94a3b8;margin-top:20px;">Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
    </div>
    <div class="footer">
      This email was sent via the contact form at rightewasterecycle.com
    </div>
  </div>
</body>
</html>
  `;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  let body: Partial<ContactForm>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validateForm(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const data = body as ContactForm;

  // SMTP configuration from environment variables
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactEmail = process.env.CONTACT_EMAIL || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass) {
    // Email not configured — log and return success in dev; fail explicitly in prod
    console.error("SMTP credentials not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT, CONTACT_EMAIL.");
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission (dev mode):", data);
      return NextResponse.json({ success: true, message: "Message logged (SMTP not configured)." });
    }
    return NextResponse.json(
      { error: "Email service is not configured. Please contact us directly." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    tls: { rejectUnauthorized: true },
  });

  try {
    await transporter.sendMail({
      from: `"Right Ewaste Website" <${smtpUser}>`,
      to: contactEmail,
      replyTo: data.email,
      subject: `[Website Enquiry] ${data.subject} — ${data.name}`,
      html: buildEmailHtml(data),
      text: `
New contact form submission from rightewasterecycle.com

Name: ${data.name}
Company: ${data.company || "N/A"}
Email: ${data.email}
Phone: ${data.phone}
City: ${data.city}
Subject: ${data.subject}

Message:
${data.message}

Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      `.trim(),
    });

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
