"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Hospital,
  Landmark,
  Factory,
  Home,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Bulk IT asset disposal and data destruction for offices and enterprises.",
    color: "text-blue-600",
    bg: "from-blue-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Schools & Colleges",
    description: "Responsible e-waste pickup from educational institutions with proper documentation.",
    color: "text-green-600",
    bg: "from-green-500 to-green-600",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    description: "Secure disposal of medical electronics and IT equipment with full compliance.",
    color: "text-red-600",
    bg: "from-red-500 to-red-600",
  },
  {
    icon: Landmark,
    title: "Banks & Finance",
    description: "Certified data destruction and compliant disposal for the banking sector.",
    color: "text-purple-600",
    bg: "from-purple-500 to-purple-600",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial e-waste management for factories and production units.",
    color: "text-orange-600",
    bg: "from-orange-500 to-orange-600",
  },
  {
    icon: Landmark,
    title: "Government Offices",
    description: "Trusted partner for government e-waste disposal with official certificates.",
    color: "text-teal-600",
    bg: "from-teal-500 to-teal-600",
  },
  {
    icon: Home,
    title: "Residential",
    description: "Easy household e-waste collection with scheduled pickup from home.",
    color: "text-emerald-600",
    bg: "from-emerald-500 to-emerald-600",
  },
];

export default function IndustriesPreview() {
  return (
    <section className="py-16 lg:py-24 subtle-green-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industries We Serve"
          title="Trusted Across"
          titleHighlight="Every Sector"
          description="We provide specialized e-waste solutions for organizations of all sizes and across all industries."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all card-hover group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${industry.bg} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-sm`}
              >
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">{industry.title}</h3>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">
                {industry.description}
              </p>
            </motion.div>
          ))}
          {/* View All card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.56 }}
          >
            <Link
              href="/industries"
              className="h-full min-h-[140px] bg-green-600 hover:bg-green-700 rounded-2xl p-5 text-center flex flex-col items-center justify-center gap-2 transition-colors group shadow-sm"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-white text-sm">View All Industries</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
