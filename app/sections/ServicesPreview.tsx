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
      "Comprehensive collection of all types of electronic waste from your location with proper documentation.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "hover:border-green-200",
  },
  {
    icon: Truck,
    title: "Bulk Pickup Service",
    description:
      "Free bulk doorstep pickup for large quantities. Perfect for office clearances and IT infrastructure upgrades.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "hover:border-blue-200",
  },
  {
    icon: Monitor,
    title: "Electronic Waste Recycling",
    description:
      "End-to-end certified recycling of computers, laptops, servers, and all electronic devices.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "hover:border-emerald-200",
  },
  {
    icon: HardDrive,
    title: "IT Asset Disposal",
    description:
      "Secure and compliant disposal of IT assets with full audit trail and asset tracking certificates.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "hover:border-orange-200",
  },
  {
    icon: ShieldCheck,
    title: "Data Destruction",
    description:
      "DoD-standard data erasure and physical destruction of storage devices with certificates of destruction.",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "hover:border-red-200",
  },
  {
    icon: RefreshCw,
    title: "Asset Refurbishment",
    description:
      "Quality refurbishment of usable assets for re-deployment or responsible donation to educational institutions.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "hover:border-purple-200",
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
              className={`border border-gray-100 ${service.border} rounded-2xl p-6 hover:shadow-lg transition-all card-hover group`}
            >
              <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 text-sm font-semibold ${service.color} hover:gap-2 transition-all`}
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
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
