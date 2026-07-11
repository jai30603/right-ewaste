"use client";

import { motion } from "framer-motion";
import { Award, Shield, FileText, Building2, Leaf, Upload } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/sections/CTASection";

const certificates = [
  {
    icon: Building2,
    title: "GST Registration Certificate",
    issuer: "Government of India — GST Portal",
    description:
      "Goods & Services Tax registration confirming our compliance with India's indirect taxation framework. All our transactions are GST-compliant with proper invoicing.",
    status: "Active",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    placeholder: true,
  },
  {
    icon: FileText,
    title: "Company Registration Certificate",
    issuer: "Ministry of Corporate Affairs (MCA)",
    description:
      "Certificate of Incorporation issued by the Registrar of Companies confirming the legal formation of Right Ewaste Recycle Private Limited.",
    status: "Active",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    placeholder: true,
  },
  {
    icon: Leaf,
    title: "Pollution Control Board Authorization",
    issuer: "Maharashtra Pollution Control Board (MPCB)",
    description:
      "Official authorization from the State Pollution Control Board permitting us to collect, store, transport, and process electronic waste as per E-Waste (Management) Rules, 2022.",
    status: "Active",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    placeholder: true,
  },
  {
    icon: Award,
    title: "ISO 14001:2015 Certification",
    issuer: "Bureau Veritas / TÜV SÜD",
    description:
      "ISO 14001 Environmental Management System certification confirming our commitment to minimizing environmental impact through systematic, managed processes.",
    status: "Active",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    placeholder: true,
  },
  {
    icon: Shield,
    title: "ISO 9001:2015 Certification",
    issuer: "Bureau Veritas",
    description:
      "ISO 9001 Quality Management System certification ensuring our services consistently meet customer and regulatory requirements.",
    status: "Active",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    placeholder: true,
  },
  {
    icon: Shield,
    title: "ISO 27001:2022 Certification",
    issuer: "Bureau Veritas",
    description:
      "Information Security Management System certification validating our secure data destruction and IT asset handling practices meet the highest information security standards.",
    status: "Active",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    placeholder: true,
  },
  {
    icon: Building2,
    title: "MoEFCC Registration",
    issuer: "Ministry of Environment, Forest and Climate Change",
    description:
      "E-Waste Producer Responsibility Organization (PRO) registration under the Ministry of Environment, Forest and Climate Change — enabling us to fulfill EPR obligations.",
    status: "Active",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    placeholder: true,
  },
  {
    icon: Award,
    title: "CPCB Authorization",
    issuer: "Central Pollution Control Board",
    description:
      "Central Pollution Control Board authorization for hazardous waste management including data destruction, battery recycling, and other regulated e-waste processing activities.",
    status: "Active",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700",
    placeholder: true,
  },
];

export default function CertificatesPage() {
  return (
    <div className="pt-20">
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Certificates & Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Certified,{" "}
            <span className="text-green-400">Authorized & Compliant</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Every certificate and authorization that backs our operations —
            because compliance isn't optional, it's our foundation.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Credentials"
            title="Licenses, Certifications &"
            titleHighlight="Authorizations"
            description="We operate with full legal compliance, holding all required certificates from government and international bodies."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`border ${cert.border} rounded-2xl overflow-hidden hover:shadow-lg transition-all card-hover`}
              >
                {/* Certificate placeholder */}
                <div
                  className={`${cert.bg} border-b ${cert.border} p-6 flex items-center justify-center min-h-36 relative`}
                >
                  <cert.icon className={`w-16 h-16 ${cert.color} opacity-20`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className={`w-16 h-16 ${cert.bg} border-2 ${cert.border} rounded-2xl flex items-center justify-center shadow-sm`}>
                      <cert.icon className={`w-8 h-8 ${cert.color}`} />
                    </div>
                  </div>
                  {cert.placeholder && (
                    <div className="absolute bottom-2 right-2">
                      <span className="bg-white/80 text-gray-500 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Upload className="w-3 h-3" />
                        Placeholder
                      </span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <span className={`${cert.badge} text-xs font-bold px-2 py-0.5 rounded-full`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
                    {cert.title}
                  </h3>
                  <p className={`text-xs font-semibold ${cert.color} mb-2`}>{cert.issuer}</p>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center"
          >
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> Actual certificate images will be displayed once uploaded. Placeholder cards show certificate categories and details. Contact us to verify any certificate authenticity.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
