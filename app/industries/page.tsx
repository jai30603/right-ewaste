"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  Hospital,
  Landmark,
  Factory,
  Home,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/sections/CTASection";

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    subtitle: "Enterprise & SME",
    description:
      "We help corporate offices responsibly retire their IT assets, ensuring data security and regulatory compliance. Our corporate recycling programs include dedicated account managers, regular pickup schedules, and detailed CSR documentation.",
    benefits: [
      "Bulk IT asset disposal with audit trail",
      "Certified data destruction for all storage devices",
      "Annual CSR sustainability reports",
      "Dedicated corporate account management",
      "Flexible pickup scheduling",
    ],
    color: "from-blue-500 to-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    subtitle: "Schools & Colleges",
    description:
      "Schools, colleges, and universities accumulate significant quantities of outdated electronics. We provide convenient, safe, and properly documented e-waste collection that supports educational institutions' sustainability goals.",
    benefits: [
      "Free campus collection drives",
      "E-waste awareness workshops (on request)",
      "Responsible disposal of lab equipment",
      "Official receipts for school records",
      "Support for Green Campus initiatives",
    ],
    color: "from-green-500 to-green-600",
    badge: "bg-green-50 text-green-700 border-green-200",
  },
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    subtitle: "Medical & Diagnostic",
    description:
      "Hospitals handle sensitive patient data and specialized medical electronics that require particularly secure and compliant disposal. Our healthcare-sector specialists ensure full regulatory compliance for all medical electronics.",
    benefits: [
      "HIPAA-aligned data destruction",
      "Secure disposal of medical devices",
      "Complete chain-of-custody documentation",
      "Compliant with biomedical waste guidelines",
      "Emergency pickup available",
    ],
    color: "from-red-500 to-red-600",
    badge: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: Landmark,
    title: "Banks & Financial Institutions",
    subtitle: "Banking & NBFC",
    description:
      "Financial institutions are governed by strict data security regulations. We offer industry-compliant data destruction and IT asset disposal that meets RBI guidelines and internal audit requirements.",
    benefits: [
      "RBI-compliant data destruction",
      "Certified destruction for sensitive financial data",
      "Full documentation for internal audits",
      "Branch-wise pickup and reporting",
      "Vendor compliance certification available",
    ],
    color: "from-purple-500 to-purple-600",
    badge: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    icon: Landmark,
    title: "Government Organizations",
    subtitle: "PSU & Government",
    description:
      "We are an authorized e-waste recycler with all necessary certifications to serve central and state government organizations, PSUs, and defense establishments with full compliance and transparent documentation.",
    benefits: [
      "GFR-compliant disposal process",
      "Official certificates for government records",
      "Support for tendering & procurement processes",
      "Transparent pricing with detailed invoices",
      "Pan-India service network",
    ],
    color: "from-teal-500 to-teal-600",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    subtitle: "Factories & Plants",
    description:
      "Manufacturing plants and industrial facilities accumulate large quantities of machinery electronics, control systems, and industrial IT equipment. We handle bulk industrial e-waste with specialized equipment and trained teams.",
    benefits: [
      "Industrial equipment recycling",
      "On-site collection from factory floor",
      "Bulk weighment certificates",
      "Hazardous component handling",
      "Compliance with factory act regulations",
    ],
    color: "from-orange-500 to-orange-600",
    badge: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    icon: Home,
    title: "Residential Customers",
    subtitle: "Home & Individual",
    description:
      "Households can also contribute to a cleaner environment by properly disposing of old electronics. We offer convenient home pickup services for individual households, housing societies, and residential complexes.",
    benefits: [
      "Free home pickup for bulk items",
      "Society and apartment block drives",
      "Easy scheduling via WhatsApp or phone",
      "Receipt provided for every pickup",
      "Awareness resources for residents",
    ],
    color: "from-emerald-500 to-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Industries We Serve
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Serving Every{" "}
            <span className="text-green-400">Industry & Sector</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            From corporates to schools, hospitals to government — we provide
            specialized e-waste solutions tailored to every sector.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border border-gray-100 hover:border-green-200 rounded-3xl p-8 lg:p-10 hover:shadow-lg transition-all"
              >
                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                        <industry.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className={`text-xs font-semibold border px-2.5 py-0.5 rounded-full ${industry.badge}`}>
                          {industry.subtitle}
                        </span>
                        <h2 className="text-xl font-bold text-gray-900 mt-1">{industry.title}</h2>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-5">{industry.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                    >
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Benefits</p>
                    <ul className="space-y-3">
                      {industry.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{b}</span>
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
