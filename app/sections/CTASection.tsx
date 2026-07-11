"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden hero-gradient rounded-3xl px-8 py-16 sm:px-16 text-center"
        >
          {/* Background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Ready to Recycle?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Let's Build a Cleaner India
              <br />
              <span className="text-green-400">Together</span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation, bulk pickup scheduling, or to learn
              more about our certified e-waste recycling services. One call is all it takes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-green-500/30 transition-all"
              >
                Contact Us Today <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base backdrop-blur-sm transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                "Free Bulk Pickup",
                "Same-Day Response",
                "Certified & Compliant",
                "Pan-India Service",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 fill-white">
                      <path d="M13.5 3.5L6 11 2.5 7.5l-1 1L6 13l8.5-8.5-1-1z" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
