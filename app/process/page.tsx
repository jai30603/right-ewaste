"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Truck,
  ArrowRight,
  Package,
  Layers,
  Recycle,
  Trash2,
  Award,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/sections/CTASection";
import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Contact Us",
    description:
      "Reach out via phone, WhatsApp, or our online contact form. Our team will respond within a few hours to understand your e-waste requirements and schedule a convenient pickup time.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    line: "bg-blue-200",
  },
  {
    step: "02",
    icon: Truck,
    title: "Collection & Pickup",
    description:
      "Our trained logistics team arrives at your location on the scheduled date. We bring all necessary equipment for safe loading and provide a preliminary collection acknowledgment on the spot.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    line: "bg-green-200",
  },
  {
    step: "03",
    icon: Package,
    title: "Transportation",
    description:
      "All collected e-waste is transported in GPS-tracked, specialized vehicles to our certified processing facility. We maintain a complete chain of custody throughout transportation.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    line: "bg-orange-200",
  },
  {
    step: "04",
    icon: Layers,
    title: "Sorting & Assessment",
    description:
      "At our facility, equipment is professionally sorted by type, material, and condition. Usable components are identified for refurbishment, and data-bearing devices are flagged for secure destruction.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    line: "bg-purple-200",
  },
  {
    step: "05",
    icon: Recycle,
    title: "Recycling & Processing",
    description:
      "Materials are dismantled and processed using environmentally responsible methods. Valuable materials like copper, aluminum, gold, and plastics are recovered and sent to certified downstream processors.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    line: "bg-emerald-200",
  },
  {
    step: "06",
    icon: Trash2,
    title: "Safe Disposal",
    description:
      "Hazardous materials — batteries, capacitors, CRT phosphors, mercury — are isolated and disposed of through authorized hazardous waste facilities in full compliance with all government regulations.",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    line: "bg-red-200",
  },
  {
    step: "07",
    icon: Award,
    title: "Recycling Certificate",
    description:
      "Once processing is complete, we issue an official Recycling Certificate with weight details, a Data Destruction Certificate (where applicable), and all supporting documentation for your CSR and compliance records.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    line: "bg-teal-200",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-20">
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Our Process
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            How We{" "}
            <span className="text-green-400">Handle Your E-Waste</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            A transparent, certified 7-step process from contact to recycling certificate —
            every step traceable and documented.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Step-by-Step"
            title="Our 7-Step"
            titleHighlight="Recycling Process"
            description="Every piece of e-waste goes through our rigorous 7-step process, ensuring responsible handling from collection to certification."
          />

          {/* Desktop horizontal steps */}
          <div className="hidden lg:block mb-16">
            <div className="flex items-start justify-between gap-2 mb-8">
              {steps.map((step, i) => (
                <div key={step.step} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`w-14 h-14 ${step.bg} border-2 ${step.border} rounded-2xl flex items-center justify-center z-10 mb-2`}
                  >
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="hidden" />
                  )}
                  <span className={`text-xs font-bold ${step.color}`}>{step.step}</span>
                  <span className="text-xs text-gray-600 font-semibold text-center mt-1 leading-tight">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="relative h-1 bg-gray-100 rounded-full mb-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-full green-gradient rounded-full"
              />
            </div>
          </div>

          {/* Detailed steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex gap-6 ${step.bg} border ${step.border} rounded-2xl p-6`}
              >
                <div className={`w-14 h-14 bg-white border ${step.border} rounded-2xl flex items-center justify-center shrink-0`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold ${step.color} uppercase tracking-widest`}>
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md transition-all"
            >
              Start the Process Today <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
