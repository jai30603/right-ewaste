"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Recycle,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/sections/CTASection";

const values = [
  {
    icon: Heart,
    title: "Environmental Responsibility",
    description:
      "We are committed to minimizing environmental harm through every process we undertake.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: ShieldCheck_,
    title: "Integrity & Compliance",
    description:
      "We operate with full transparency and adhere to every government regulation and standard.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Customer-First",
    description:
      "Your satisfaction and trust are at the center of every service we deliver.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Award,
    title: "Quality & Excellence",
    description:
      "We set the highest standards in recycling quality, documentation, and service delivery.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

function ShieldCheck_({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const timeline = [
  { year: "2014", title: "Company Founded", desc: "Right Ewaste Recycle Pvt. Ltd. was established with a mission to solve India's growing e-waste problem." },
  { year: "2016", title: "First Certification", desc: "Received Pollution Control Board authorization and registered as an authorized e-waste recycler." },
  { year: "2018", title: "Expanded Operations", desc: "Expanded our processing facility and added IT Asset Disposal and Data Destruction services." },
  { year: "2020", title: "100+ Corporate Clients", desc: "Crossed the milestone of 100 corporate clients and 200 tons of e-waste processed annually." },
  { year: "2022", title: "Pan-India Coverage", desc: "Extended pickup and collection services to 25+ cities across India." },
  { year: "2024", title: "500+ Tons Milestone", desc: "Achieved the landmark of 500 tons of e-waste recycled with zero-landfill commitment." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            A Decade of{" "}
            <span className="text-green-400">Responsible Recycling</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            Founded on the belief that technology and sustainability can coexist,
            Right Ewaste Recycle has been India's trusted partner in responsible
            electronic waste management since 2014.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-green-600 text-sm font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Born from a Vision of a <span className="text-green-600">Cleaner India</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Right Ewaste Recycle Private Limited was founded in 2014 by a team of environmentally
                conscious entrepreneurs who witnessed the rapid growth of electronic waste in India
                and the lack of organized, certified recycling solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Starting from a small collection center in Mumbai, we have grown into one of India's
                most trusted e-waste management companies with a state-of-the-art processing facility,
                serving over 200 corporate clients, hospitals, educational institutions, and government
                organizations across 25+ cities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every kilogram of e-waste we process is a step towards a cleaner, healthier environment.
                We are fully authorized by the Pollution Control Board and operate in compliance with all
                government regulations and international environmental standards.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "E-Waste Recycled", value: "500+ Tons", icon: Recycle, color: "bg-green-50 border-green-100", iconColor: "text-green-600", iconBg: "bg-green-100" },
                { label: "Corporate Clients", value: "200+", icon: Building2, color: "bg-blue-50 border-blue-100", iconColor: "text-blue-600", iconBg: "bg-blue-100" },
                { label: "Cities Covered", value: "25+", icon: Target, color: "bg-orange-50 border-orange-100", iconColor: "text-orange-600", iconBg: "bg-orange-100" },
                { label: "Years of Trust", value: "10+", icon: Award, color: "bg-purple-50 border-purple-100", iconColor: "text-purple-600", iconBg: "bg-purple-100" },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.color} border rounded-2xl p-6 text-center`}>
                  <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-16 lg:py-24 subtle-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "border-green-500",
                iconBg: "bg-green-600",
                text: "To provide responsible, certified, and environmentally compliant e-waste management solutions that protect our planet and empower organizations to dispose of their electronic waste safely, securely, and sustainably.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "border-blue-500",
                iconBg: "bg-blue-600",
                text: "To be India's most trusted and impactful e-waste recycling company — building a future where every electronic device is responsibly recycled, data is securely destroyed, and the environment is preserved for future generations.",
              },
              {
                icon: Heart,
                title: "Our Purpose",
                color: "border-red-400",
                iconBg: "bg-red-500",
                text: "To bridge the gap between technology consumption and environmental responsibility — creating a circular economy where electronic waste becomes a resource, not a pollutant.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-white rounded-2xl p-8 shadow-sm border-t-4 ${item.color}`}
              >
                <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title="A Decade of"
            titleHighlight="Milestones"
            description="From a small collection center to a pan-India operation — our journey of growth and impact."
          />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-green-200 md:-translate-x-px" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-green-500 border-4 border-white rounded-full shadow-md md:-translate-x-2 translate-y-1 z-10" />
                  <div className={`md:w-1/2 pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white border border-gray-100 hover:border-green-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all">
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {item.year}
                      </span>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 subtle-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Values"
            title="The Principles That"
            titleHighlight="Guide Us"
            description="Our values define who we are and how we deliver every service."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all card-hover"
              >
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
