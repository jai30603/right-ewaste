"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="hero-gradient py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-white">
            Terms & Conditions
          </motion.h1>
          <p className="text-gray-300 mt-3">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Right Ewaste Recycle Private Limited website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Services</h2>
              <p>Right Ewaste Recycle Pvt. Ltd. provides certified e-waste collection, recycling, data destruction, and IT asset disposal services. All services are subject to availability and our operational capacity.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes. You must not use the website in any way that may cause damage, disruption, or impairment to the website or servers.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Right Ewaste Recycle Pvt. Ltd. and is protected by applicable intellectual property laws.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
              <p>Right Ewaste Recycle Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services beyond what is required by applicable law.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
              <p>For any queries: <a href="mailto:info@rightewasterecycle.com" className="text-green-600 hover:underline">info@rightewasterecycle.com</a></p>
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
