"use client";

import { motion } from "framer-motion";
import { Recycle, Users, Building2, Clock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  {
    icon: Recycle,
    value: 500,
    suffix: "+",
    unit: "Tons",
    label: "E-Waste Recycled",
    description: "Responsibly processed and recycled",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    unit: "",
    label: "Happy Clients",
    description: "Trusted by leading organizations",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Building2,
    value: 150,
    suffix: "+",
    unit: "",
    label: "Corporate Partners",
    description: "Pan-India corporate network",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    unit: "Years",
    label: "Years of Experience",
    description: "Decade of sustainable service",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`${stat.bg} border ${stat.border} rounded-2xl p-5 sm:p-7 card-hover`}
            >
              <div className={`w-11 h-11 ${stat.bg} border ${stat.border} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className={`text-3xl sm:text-4xl font-bold ${stat.color} leading-tight`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                {stat.unit && (
                  <span className="text-lg font-semibold ml-1">{stat.unit}</span>
                )}
              </div>
              <div className="text-gray-900 font-semibold text-sm sm:text-base mt-1">
                {stat.label}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
