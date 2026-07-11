"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, Shield, Leaf } from "lucide-react";

const floatingBadges = [
  { icon: Recycle, label: "Certified Recycler", color: "bg-green-500" },
  { icon: Shield, label: "Data Secure", color: "bg-blue-600" },
  { icon: Leaf, label: "Eco-Friendly", color: "bg-emerald-500" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              India's Trusted E-Waste Recycler
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Recycle{" "}
              <span className="text-green-400">Responsibly.</span>
              <br />
              Dispose{" "}
              <span className="text-green-400">Securely.</span>
              <br />
              <span className="text-gray-300">Build a Greener</span>
              <br />
              <span className="text-white">Future.</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Right Ewaste Recycle Pvt. Ltd. is a government-certified e-waste
              management company providing responsible recycling, secure data
              destruction, and bulk pickup services for corporates, institutions,
              and government organizations across India.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-base backdrop-blur-sm transition-all"
              >
                Our Services
              </Link>
            </div>

            {/* Floating badges */}
            <div className="flex flex-wrap gap-3">
              {floatingBadges.map((badge, i) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white font-medium"
                >
                  <div className={`w-5 h-5 ${badge.color} rounded-full flex items-center justify-center`}>
                    <badge.icon className="w-3 h-3 text-white" />
                  </div>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "E-Waste Collected", value: "500+ Tons", color: "bg-green-500" },
                    { label: "Corporate Clients", value: "200+", color: "bg-blue-500" },
                    { label: "Cities Covered", value: "25+", color: "bg-emerald-500" },
                    { label: "Years of Trust", value: "10+", color: "bg-teal-500" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/10 rounded-2xl p-4">
                      <div className={`w-8 h-1 ${stat.color} rounded-full mb-2`} />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-300 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <Recycle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Latest Collection</p>
                      <p className="text-green-300 text-xs">Mumbai Corporate Drive</p>
                    </div>
                    <span className="ml-auto bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full w-3/4" />
                    </div>
                    <span className="text-green-300 text-xs">75%</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">1,250 kg collected this month</p>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Leaf className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V40C1440 40 1200 0 720 0C240 0 0 40 0 40V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
