"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, Truck, Package, Settings, Recycle, Award, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Contact Us",
    description: "Reach out via call, WhatsApp, or our contact form. We respond within a few hours.",
    color: "bg-blue-600",
    light: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Schedule Pickup",
    description: "We schedule a convenient free doorstep pickup at your preferred date and time.",
    color: "bg-green-600",
    light: "bg-green-50",
    text: "text-green-600",
  },
  {
    icon: Truck,
    step: "03",
    title: "Collection",
    description: "Our trained team arrives with proper equipment, safety gear, and documentation.",
    color: "bg-emerald-600",
    light: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    icon: Package,
    step: "04",
    title: "Transportation",
    description: "All waste is securely packed and transported to our certified processing facility.",
    color: "bg-teal-600",
    light: "bg-teal-50",
    text: "text-teal-600",
  },
  {
    icon: Settings,
    step: "05",
    title: "Sorting & Processing",
    description: "Expert dismantling, sorting by material type, and preparation for recycling.",
    color: "bg-orange-500",
    light: "bg-orange-50",
    text: "text-orange-600",
  },
  {
    icon: Recycle,
    step: "06",
    title: "Responsible Recycling",
    description: "Materials are processed using eco-friendly methods with zero landfill policy.",
    color: "bg-purple-600",
    light: "bg-purple-50",
    text: "text-purple-600",
  },
  {
    icon: Award,
    step: "07",
    title: "Certificate Issued",
    description: "You receive official recycling certificate and weight slips for your CSR records.",
    color: "bg-rose-600",
    light: "bg-rose-50",
    text: "text-rose-600",
  },
];

export default function ProcessPreview() {
  return (
    <section className="py-16 lg:py-24 subtle-green-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Our Simple{" "}
            <span className="text-green-600">7-Step Process</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From your first call to the final recycling certificate — every step is transparent, traceable, and fully documented.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Row 1 — steps 1-4 */}
          <div className="relative grid grid-cols-4 gap-0 mb-8">
            {/* Connector line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-300 via-green-300 to-teal-300 z-0" />
            {steps.slice(0, 4).map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className={`text-xs font-bold ${step.text} mb-1`}>STEP {step.step}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
          {/* Row 2 — steps 5-7 */}
          <div className="relative grid grid-cols-4 gap-0">
            <div className="absolute top-8 left-[12.5%] right-[37.5%] h-0.5 bg-gradient-to-r from-orange-300 via-purple-300 to-rose-300 z-0" />
            {steps.slice(4).map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className={`text-xs font-bold ${step.text} mb-1`}>STEP {step.step}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical list */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className={`text-xs font-bold ${step.text}`}>STEP {step.step}</span>
                <h3 className="font-bold text-gray-900 text-sm mt-0.5 mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
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
            href="/process"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
          >
            View Detailed Process <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
