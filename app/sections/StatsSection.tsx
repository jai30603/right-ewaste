"use client";

import { motion } from "framer-motion";
import { Recycle, Users, Leaf, Clock } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  {
    icon: Recycle,
    value: 250,
    suffix: "+",
    unit: "Tons",
    label: "E-Waste Recycled",
    description: "Responsibly processed & recycled",
    color: "text-green-600",
    iconColor: "bg-green-600",
    bg: "bg-gradient-to-br from-green-50 to-emerald-50",
    border: "border-green-100 hover:border-green-300",
    glow: "hover:shadow-green-100",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    unit: "",
    label: "Happy Customers",
    description: "Corporates, schools & individuals",
    color: "text-blue-600",
    iconColor: "bg-blue-600",
    bg: "bg-gradient-to-br from-blue-50 to-sky-50",
    border: "border-blue-100 hover:border-blue-300",
    glow: "hover:shadow-blue-100",
  },
  {
    icon: Leaf,
    value: 100,
    suffix: "%",
    unit: "",
    label: "Responsible Disposal",
    description: "Zero landfill, zero compromise",
    color: "text-emerald-600",
    iconColor: "bg-emerald-600",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    border: "border-emerald-100 hover:border-emerald-300",
    glow: "hover:shadow-emerald-100",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    unit: "Years",
    label: "Years of Experience",
    description: "A decade of sustainable service",
    color: "text-teal-600",
    iconColor: "bg-teal-600",
    bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
    border: "border-teal-100 hover:border-teal-300",
    glow: "hover:shadow-teal-100",
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
              className={`${stat.bg} border ${stat.border} rounded-2xl p-5 sm:p-7 hover:shadow-lg ${stat.glow} hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className={`w-11 h-11 ${stat.iconColor} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className={`text-3xl sm:text-4xl font-bold ${stat.color} leading-tight`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                {stat.unit && (
                  <span className="text-lg font-semibold ml-1">{stat.unit}</span>
                )}
              </div>
              <div className="text-gray-900 font-semibold text-sm sm:text-base mt-1.5">
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
