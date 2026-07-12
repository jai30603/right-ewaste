"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Recycle, Truck } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Government Compliant",
    description:
      "Authorized by the Central & State Pollution Control Boards with all required licenses, registrations, and regulatory approvals.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100 hover:border-blue-300",
    iconBg: "bg-blue-600",
    checkColor: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Destruction",
    description:
      "DoD-standard data erasure and physical destruction of all storage media. Certificate of destruction provided for every asset.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100 hover:border-green-300",
    iconBg: "bg-green-600",
    checkColor: "text-green-600",
  },
  {
    icon: Truck,
    title: "Professional Pickup Services",
    description:
      "Free doorstep bulk pickup across India with proper documentation, weighment slips, and collection receipts.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100 hover:border-emerald-300",
    iconBg: "bg-emerald-600",
    checkColor: "text-emerald-600",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-5">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start gap-4 ${badge.bg} border ${badge.border} rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
            >
              <div className={`w-12 h-12 ${badge.iconBg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <badge.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg viewBox="0 0 20 20" className={`w-4 h-4 ${badge.checkColor} fill-current shrink-0`}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold text-gray-900 text-base">{badge.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
