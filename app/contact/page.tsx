"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  message: string;
}

const subjects = [
  "E-Waste Collection",
  "Bulk Pickup Request",
  "IT Asset Disposal",
  "Data Destruction",
  "Corporate Partnership",
  "Get a Quote",
  "Certificate Request",
  "Other",
];

const WHATSAPP_NUMBER = "919999999999";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", city: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Let's Talk About{" "}
            <span className="text-green-400">Your E-Waste</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            Reach out for a free consultation, bulk pickup scheduling, or any enquiry.
            We respond within a few hours.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our team is ready to assist you with any e-waste recycling needs. Reach out via form, phone, or WhatsApp.
                </p>
              </div>

              {[
                {
                  icon: MapPin,
                  title: "Office Address",
                  content: "123, Industrial Area, Phase II,\nMumbai, Maharashtra – 400001",
                  color: "bg-green-50 text-green-600",
                },
                {
                  icon: Phone,
                  title: "Phone Numbers",
                  content: "+91 99999 99999\n+91 88888 88888",
                  color: "bg-blue-50 text-blue-600",
                  href: "tel:+919999999999",
                },
                {
                  icon: Mail,
                  title: "Email Address",
                  content: "info@rightewasterecycle.com",
                  color: "bg-orange-50 text-orange-600",
                  href: "mailto:info@rightewasterecycle.com",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content: "Monday – Saturday: 9:00 AM – 6:00 PM\nSunday: Closed",
                  color: "bg-purple-50 text-purple-600",
                },
              ].map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className={`w-10 h-10 ${info.color} rounded-xl flex items-center justify-center shrink-0`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} className="text-gray-500 text-sm hover:text-green-600 transition-colors whitespace-pre-line">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp Card */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">WhatsApp Chat</p>
                    <p className="text-green-600 text-xs">Typically replies within an hour</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Chat with us directly on WhatsApp for quick questions, bulk pickup requests, or quotes.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to know more about your e-waste recycling services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Google Maps placeholder */}
              <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <MapPin className="w-10 h-10 mx-auto mb-2 opacity-40" />
                  <p className="text-sm font-medium">Google Maps</p>
                  <p className="text-xs">Map embed placeholder</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for reaching out. Our team will get back to you within a few hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company (optional)"
                          className="w-full border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 99999 99999"
                          className="w-full border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          City <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          required
                          placeholder="Your city"
                          className="w-full border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-3 text-sm outline-none transition-all bg-white"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your e-waste requirements, quantity, location, or any specific needs..."
                        className="w-full border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{errorMsg}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-70 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-gray-400 text-xs text-center">
                      By submitting, you agree to our{" "}
                      <a href="/privacy-policy" className="underline hover:text-green-600">Privacy Policy</a>.
                      We never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
