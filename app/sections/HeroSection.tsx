"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, Shield, Leaf, ChevronDown } from "lucide-react";

const trustBadges = [
  { icon: Recycle, label: "Certified Recycler", color: "bg-green-500" },
  { icon: Shield, label: "Data Secure", color: "bg-blue-600" },
  { icon: Leaf, label: "Eco-Friendly", color: "bg-emerald-500" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center hero-gradient overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-24 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">

          {/* Left — content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs sm:text-sm font-medium px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
              India's Trusted Certified E-Waste Recycler
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] sm:leading-tight mb-5 sm:mb-6">
              Responsible E-Waste{" "}
              <span className="text-green-400">Recycling</span> for a{" "}
              <span className="text-green-400">Sustainable</span> Future
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-7 sm:mb-8 max-w-xl">
              Helping businesses, industries, and individuals safely recycle electronic waste while protecting the environment through compliant and responsible recycling practices.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base backdrop-blur-sm transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                Our Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-white font-medium"
                >
                  <div className={`w-5 h-5 ${badge.color} rounded-full flex items-center justify-center shrink-0`}>
                    <badge.icon className="w-3 h-3 text-white" />
                  </div>
                  {badge.label}
                </div>
              ))}
            </div>

            {/* Compact stats strip — mobile & tablet only, replaces the desktop card below lg */}
            <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
              {[
                { label: "E-Waste Collected", value: "500+ Tons" },
                { label: "Corporate Clients", value: "500+" },
                { label: "Cities Covered", value: "25+" },
                { label: "Years of Trust", value: "10+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-300 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "E-Waste Collected", value: "500+ Tons", color: "bg-green-500" },
                    { label: "Corporate Clients", value: "500+", color: "bg-blue-500" },
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
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <path d="M0 80H1440V40C1440 40 1200 0 720 0C240 0 0 40 0 40V80Z" fill="white" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
