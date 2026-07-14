import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageLoader from "@/components/PageLoader";

// Runs before hydration so the correct theme is applied with no flash of
// the wrong color scheme. Reads the saved preference, falling back to the
// visitor's OS-level preference.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Right Ewaste Recycle Private Limited | Certified E-Waste Recycling",
    template: "%s | Right Ewaste Recycle",
  },
  description:
    "Right Ewaste Recycle Private Limited — India's trusted certified e-waste recycling company. Responsible recycling, data destruction, bulk pickup, and IT asset disposal for corporates, schools, hospitals, and government.",
  keywords: [
    "e-waste recycling",
    "electronic waste",
    "IT asset disposal",
    "data destruction",
    "bulk pickup",
    "certified recycling",
    "Right Ewaste",
    "India e-waste",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rightewasterecycle.com",
    siteName: "Right Ewaste Recycle Private Limited",
    title: "Right Ewaste Recycle Private Limited | Certified E-Waste Recycling",
    description:
      "Responsible e-waste recycling solutions for businesses, institutions, and individuals across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Right Ewaste Recycle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Right Ewaste Recycle Private Limited",
    description: "Certified e-waste recycling solutions across India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <PageLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
