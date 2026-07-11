"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Recycle,
  Truck,
  HardDrive,
  Monitor,
  ShieldCheck,
  RefreshCw,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/sections/CTASection";

const services = [
  {
    icon: Recycle,
    title: "E-Waste Collection",
    description:
      "Comprehensive collection of all types of electronic waste from your premises. We handle everything from single items to large industrial quantities, ensuring proper documentation and chain of custody throughout the process.",
    features: [
      "All types of electronic devices accepted",
      "Official Collection Receipt provided",
      "Scheduled or on-demand collection",
      "Eco-friendly transport and handling",
    ],
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Truck,
    title: "Bulk Pickup Service",
    description:
      "Free doorstep bulk pickup for large quantities of e-waste. Perfect for office relocations, IT infrastructure upgrades, or annual corporate IT asset retirement drives. We handle everything from scheduling to transportation.",
    features: [
      "Completely free bulk pickup",
      "Dedicated logistics team",
      "Office, warehouse & factory pickup",
      "Same-day or next-day scheduling",
    ],
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Monitor,
    title: "Electronic Waste Recycling",
    description:
      "End-to-end certified recycling of computers, laptops, servers, printers, mobile phones, and all electronic devices. Our processing facility meets the highest environmental and safety standards.",
    features: [
      "Certified zero-landfill processing",
      "Maximum material recovery",
      "Recycling Certificate issued",
      "Weight Certificate provided",
    ],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: HardDrive,
    title: "IT Asset Disposal (ITAD)",
    description:
      "Secure and fully compliant disposal of IT assets with complete audit trail, asset tracking, and certification. Ideal for organizations that need documented, compliant retirement of large IT inventories.",
    features: [
      "Complete asset tracking & inventory",
      "Asset Disposal Certificate",
      "Full audit trail documentation",
      "Compliant with IT security standards",
    ],
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: ShieldCheck,
    title: "Data Destruction",
    description:
      "Military-grade (DoD 5220.22-M) data erasure and physical destruction of hard drives, SSDs, and all storage media. We ensure your sensitive data is permanently and irreversibly destroyed.",
    features: [
      "DoD 5220.22-M standard erasure",
      "Physical shredding for high-security",
      "Certificate of Data Destruction",
      "Chain of custody maintained",
    ],
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    icon: RefreshCw,
    title: "Asset Refurbishment",
    description:
      "Quality refurbishment and reconditioning of usable electronic assets for re-deployment within your organization or responsible donation to educational institutions and NGOs.",
    features: [
      "Professional testing & grading",
      "OS reinstallation if required",
      "Donation certificates for NGOs",
      "Extended asset lifecycle",
    ],
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: Building2,
    title: "Corporate Recycling Solutions",
    description:
      "Tailored annual e-waste management programs for large enterprises, including dedicated account management, regular pickup schedules, CSR documentation, and compliance reporting.",
    features: [
      "Dedicated account manager",
      "Annual CSR documentation",
      "Custom pickup schedules",
      "Compliance & sustainability reports",
    ],
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Comprehensive{" "}
            <span className="text-green-400">E-Waste Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            From collection to certified recycling — end-to-end e-waste management
            tailored to your organization's needs.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`border ${service.border} rounded-3xl p-8 lg:p-10 hover:shadow-lg transition-all`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-5`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold text-sm ${service.bg} ${service.color} hover:opacity-80 transition-opacity`}
                    >
                      Get This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={`${service.bg} rounded-2xl p-6`}>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What's Included</p>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 ${service.color} shrink-0 mt-0.5`} />
                          <span className="text-gray-700 text-sm font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
