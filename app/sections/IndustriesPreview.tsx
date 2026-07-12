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
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Bulk IT asset disposal and certified data destruction for enterprises of all sizes.",
    gradient: "from-blue-500 to-blue-700",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: GraduationCap,
    title: "Schools & Colleges",
    description: "Responsible e-waste pickup from educational institutions with proper documentation.",
    gradient: "from-green-500 to-green-700",
    badge: "CSR Ready",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    description: "Secure disposal of medical electronics and IT equipment with full compliance.",
    gradient: "from-red-500 to-red-700",
    badge: "Compliant",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    icon: Landmark,
    title: "Banks & Finance",
    description: "Certified data destruction and compliant disposal for the banking sector.",
    gradient: "from-purple-500 to-purple-700",
    badge: "Data Secure",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial e-waste management for factories and large-scale production units.",
    gradient: "from-orange-500 to-orange-700",
    badge: "Bulk Pickup",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    icon: ShieldCheck,
    title: "Government Offices",
    description: "Trusted partner for government e-waste disposal with official certificates.",
    gradient: "from-teal-500 to-teal-700",
    badge: "Authorized",
    badgeColor: "bg-teal-100 text-teal-700",
  },
  {
    icon: Home,
    title: "Residential",
    description: "Easy household e-waste collection with scheduled doorstep pickup.",
    gradient: "from-emerald-500 to-emerald-700",
    badge: "Free Pickup",
    badgeColor: "bg-emerald-100 text-emerald-700",
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Icon bar with gradient */}
              <div className={`bg-gradient-to-br ${industry.gradient} p-5 relative overflow-hidden`}>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${industry.badgeColor} bg-white/90`}>
                    {industry.badge}
                  </span>
                </div>
              </div>
              {/* Text */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1.5 group-hover:text-green-700 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {industry.description}
                </p>
              </div>
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
              className="h-full min-h-[160px] bg-gradient-to-br from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-all hover:-translate-y-1.5 group shadow-sm"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-7 h-7 text-white" />
              </div>
              <div className="text-center">
                <span className="font-bold text-white text-sm block">View All</span>
                <span className="text-white/70 text-xs">Industries</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
