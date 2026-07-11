# Right Ewaste Recycle — Corporate Website

## Project Overview

This is the official public-facing corporate website for **Right Ewaste Recycle Private Limited**, a certified e-waste recycling company based in India.

### Tech Stack
- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer (for contact form)
- **Runtime**: Node.js 24

### Pages
| Route | Description |
|-------|-------------|
| `/` | Home page (Hero, Stats, Why Choose Us, Services, Industries, CTA) |
| `/about` | About Us (Story, Mission, Vision, Timeline, Values) |
| `/services` | Detailed service cards |
| `/what-we-recycle` | Grid of accepted electronics |
| `/industries` | Industries served |
| `/process` | 7-step recycling process |
| `/gallery` | Photo gallery with lightbox |
| `/certificates` | Certification cards |
| `/news` | Live e-waste news from RSS feeds |
| `/contact` | Contact form + company info |
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms & Conditions |

### API Routes
| Route | Description |
|-------|-------------|
| `POST /api/contact` | Sends contact form email via SMTP |
| `GET /api/news` | Fetches e-waste RSS news feeds |

## Running the Project

```bash
npm run dev   # development server on port 3000
npm run build # production build
npm start     # production server
```

## Environment Variables Required

For the **contact form** to send emails, set these in Replit Secrets:

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server hostname (e.g., `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (default `587` for TLS, `465` for SSL) |
| `SMTP_USER` | SMTP username / email address |
| `SMTP_PASS` | SMTP password or app password |
| `CONTACT_EMAIL` | Destination email for contact form submissions |

`SESSION_SECRET` is already set in the environment.

> In development mode, if SMTP credentials are not set, the contact form logs submissions to console instead of failing.

## Placeholder Content to Replace

- Company address, phone numbers, email in `Footer.tsx` and `ContactPage`
- WhatsApp number in `WhatsAppButton.tsx` and `ContactPage` (`WHATSAPP_NUMBER`)
- Social media URLs in `Footer.tsx`
- Gallery images (currently gradient placeholders)
- Certificate images (currently icon placeholders)
- Google Maps embed in `ContactPage`
- `next.config.ts` canonical URL

## User Preferences

- Keep the existing component structure (`/app/components`, `/app/sections`, `/app/page(s)`)
- No authentication, ERP, or admin modules — public website only
- Use placeholder content where company-specific information is not available
- Maintain Tailwind v4 CSS-first configuration (no `tailwind.config.js`)
