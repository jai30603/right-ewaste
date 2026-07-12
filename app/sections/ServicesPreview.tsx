"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Recycle,
  Truck,
  HardDrive,
  Monitor,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Recycle,
    title: "E-Waste Collection",
    description:
      "Comprehensive collection of all types of electronic waste from your location with proper documentation and weight slips.",
    color: "text-green-600",
    iconBg: "bg-green-600",
    cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
    border: "border-green-100 hover:border-green-300",
    glow: "hover:shadow-green-100",
    link: "/services",
  },
  {
    icon: Truck,
    title: "Bulk Pickup Service",
    description:
      "Free bulk doorstep pickup for large quantities. Perfect for office clearances, IT upgrades, and corporate decommissioning.",
    color: "text-blue-600",
    iconBg: "bg-blue-600",
    cardBg: "bg-gradient-to-br from-blue-50 to-sky-50",
    border: "border-blue-100 hover:border-blue-300",
    glow: "hover:shadow-blue-100",
    link: "/services",
  },
  {
    icon: Monitor,
    title: "Electronic Waste Recycling",
    description:
      "End-to-end certified recycling of computers, laptops, servers, and all electronic devices following strict environmental norms.",
    color: "text-emerald-600",
    iconBg: "bg-emerald-600",
    cardBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    border: "border-emerald-100 hover:border-emerald-300",
    glow: "hover:shadow-emerald-100",
    link: "/services",
  },
  {
    icon: HardDrive,
    title: "IT Asset Disposal",
    description:
      "Secure and compliant disposal of IT assets with full audit trail, asset tracking certificates, and liability removal.",
    color: "text-orange-600",
    iconBg: "bg-orange-500",
    cardBg: "bg-gradient-to-br from-orange-50 to-amber-50",
    border: "border-orange-100 hover:border-orange-300",
    glow: "hover:shadow-orange-100",
    link: "/services",
  },
  {
    icon: ShieldCheck,
    title: "Data Destruction",
    description:
      "DoD-standard data erasure and physical destruction of storage devices with certificates of destruction for compliance.",
    color: "text-red-600",
    iconBg: "bg-red-600",
    cardBg: "bg-gradient-to-br from-red-50 to-rose-50",
    border: "border-red-100 hover:border-red-300",
    glow: "hover:shadow-red-100",
    link: "/services",
  },
  {
    icon: RefreshCw,
    title: "Asset Refurbishment",
    description:
      "Quality refurbishment of usable assets for re-deployment or responsible donation to NGOs and educational institutions.",
    color: "text-purple-600",
    iconBg: "bg-purple-600",
    cardBg: "bg-gradient-to-br from-purple-50 to-violet-50",
    border: "border-purple-100 hover:border-purple-300",
    glow: "hover:shadow-purple-100",
    link: "/services",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive"
          titleHighlight="E-Waste Solutions"
          description="From bulk collection to certified data destruction — we offer end-to-end e-waste management tailored to your organization."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.cardBg} border ${service.border} rounded-2xl p-6 hover:shadow-xl ${service.glow} hover:-translate-y-2 transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <Link
                href={service.link}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.color} hover:gap-3 transition-all`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
