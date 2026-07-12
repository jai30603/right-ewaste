"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Leaf, Building2 } from "lucide-react";

const pillars = [
  { icon: Award, label: "Certified & Authorized", color: "bg-blue-500" },
  { icon: Leaf, label: "Zero Landfill Policy", color: "bg-green-500" },
  { icon: Users, label: "Pan-India Presence", color: "bg-emerald-500" },
  { icon: Building2, label: "Corporate-Grade Service", color: "bg-teal-500" },
];

export default function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
              A Decade of{" "}
              <span className="text-green-600">Responsible Recycling</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              Founded in 2014, Right Ewaste Recycle Pvt. Ltd. is one of India's most trusted certified e-waste management companies. We work with corporates, government bodies, hospitals, schools, and individuals to ensure electronic waste is handled responsibly.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Our state-of-the-art processing facility follows strict environmental norms with zero landfill policy — maximizing material recovery while minimizing environmental impact.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${p.color} rounded-lg flex items-center justify-center shrink-0`}>
                    <p.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{p.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right — visual cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Main image placeholder with gradient */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-800 to-emerald-950 aspect-[4/3] shadow-2xl">
              {/* SVG illustration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 200 200" className="w-72 h-72 text-green-300 fill-current">
                  <path d="M100 20C57.8 20 24 53.8 24 96s33.8 76 76 76 76-33.8 76-76S142.2 20 100 20zm35 105l-14 14-21-21-21 21-14-14 21-21-21-21 14-14 21 21 21-21 14 14-21 21 21 21z"/>
                </svg>
              </div>
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />
              {/* Content overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                  <p className="text-green-300 text-xs font-semibold uppercase tracking-wider mb-1">Our Mission</p>
                  <p className="text-white text-base font-semibold leading-snug">
                    "Making responsible e-waste disposal accessible to every business and individual in India."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 bg-white shadow-xl rounded-2xl p-4 border border-gray-100"
            >
              <div className="text-3xl font-bold text-green-600">10+</div>
              <div className="text-xs text-gray-500 font-medium">Years of Trust</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 bg-white shadow-xl rounded-2xl p-4 border border-gray-100"
            >
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-xs text-gray-500 font-medium">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
