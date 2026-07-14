"use client";

import { motion } from "framer-motion";

const facts = [
  {
    stat: "53.6M",
    label: "Tonnes",
    detail: "of e-waste generated globally every year — the world's fastest-growing waste stream",
    icon: "🌍",
  },
  {
    stat: "Only 17%",
    label: "Recycled",
    detail: "of global e-waste is formally collected and responsibly recycled each year",
    icon: "♻️",
  },
  {
    stat: "3.2M",
    label: "Tonnes",
    detail: "of e-waste generated in India annually — making it the world's 3rd largest e-waste producer",
    icon: "📱",
  },
  {
    stat: "70%",
    label: "of Toxic Waste",
    detail: "of all hazardous waste in landfills comes from discarded electronic devices",
    icon: "⚠️",
  },
];

export default function DidYouKnow() {
  return (
    <section className="py-16 lg:py-24 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Did You Know?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The E-Waste Crisis is{" "}
            <span className="text-green-400">Real & Growing</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Millions of tonnes of electronic waste are generated every year. Understanding the scale of the problem is the first step toward responsible action.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((fact, index) => (
            <motion.div
              key={`${fact.label}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4">{fact.icon}</div>
              <div className="text-3xl font-bold text-white mb-0.5">{fact.stat}</div>
              <div className="text-green-400 font-semibold text-sm mb-3">{fact.label}</div>
              <p className="text-gray-300 text-sm leading-relaxed">{fact.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 text-lg mb-6">
            You can be part of the solution. Every device you recycle responsibly makes a difference.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all"
          >
            Recycle Your E-Waste Today →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
