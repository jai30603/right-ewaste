"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const impacts = [
  {
    emoji: "🌍",
    value: 500,
    suffix: "+",
    unit: "Tons",
    label: "E-Waste Recycled",
    description: "Tons of electronic waste responsibly processed and recycled",
    bg: "from-green-500 to-emerald-600",
    glow: "shadow-green-200",
  },
  {
    emoji: "♻️",
    value: 50000,
    suffix: "+",
    unit: "",
    label: "Devices Recycled",
    description: "Individual electronic devices safely dismantled and recycled",
    bg: "from-blue-500 to-blue-600",
    glow: "shadow-blue-200",
  },
  {
    emoji: "🌱",
    value: 250,
    suffix: "+",
    unit: "Tons",
    label: "CO₂ Emissions Reduced",
    description: "Estimated carbon emissions avoided through responsible recycling",
    bg: "from-teal-500 to-teal-600",
    glow: "shadow-teal-200",
  },
  {
    emoji: "⚡",
    value: 150,
    suffix: "+",
    unit: "Tons",
    label: "Materials Recovered",
    description: "Precious metals and recoverable materials saved from landfills",
    bg: "from-emerald-500 to-green-700",
    glow: "shadow-emerald-200",
  },
];

export default function EnvironmentalImpact() {
  return (
    <section className="py-16 lg:py-24 bg-white">
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
            Our Environmental Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Making a Real{" "}
            <span className="text-green-600">Difference for the Planet</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Every piece of e-waste we recycle is a step toward a cleaner environment. Here's the positive impact we've created together.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg ${item.glow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className={`bg-gradient-to-br ${item.bg} p-6 text-white h-full`}>
                {/* Decorative circle */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -bottom-8 -left-4 w-20 h-20 bg-white/10 rounded-full" />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <div className="text-3xl sm:text-4xl font-bold mb-0.5">
                    <AnimatedCounter target={item.value} suffix={item.suffix} />
                    {item.unit && (
                      <span className="text-lg font-semibold ml-1">{item.unit}</span>
                    )}
                  </div>
                  <div className="font-bold text-base mb-2">{item.label}</div>
                  <p className="text-white/80 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-green-50 border border-green-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-bold text-gray-900 text-lg">Join thousands of organizations making a difference.</p>
            <p className="text-gray-500 text-sm mt-0.5">Your e-waste has value — let us help you recycle it responsibly.</p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md transition-all whitespace-nowrap"
          >
            Start Recycling Today →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
