"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-white">
            Privacy Policy
          </motion.h1>
          <p className="text-gray-300 mt-3">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>When you use our contact form, we collect your name, company name, email address, phone number, city, and message. This information is used solely to respond to your enquiry.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p>We use the information you provide to: respond to your contact enquiries; schedule pickup and collection services; send service-related communications; and comply with legal obligations.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We do not store sensitive payment information on our servers.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Sharing</h2>
              <p>We do not sell, trade, or transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting business, subject to confidentiality agreements.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at info@rightewasterecycle.com.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
              <p>For privacy-related queries: <a href="mailto:info@rightewasterecycle.com" className="text-green-600 hover:underline">info@rightewasterecycle.com</a></p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/" className="text-green-600 hover:underline font-semibold">← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
