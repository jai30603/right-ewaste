"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";

const newsPlaceholders = [
  {
    category: "Policy & Regulation",
    headline: "India's E-Waste Management Rules: What Businesses Need to Know in 2025",
    source: "Down To Earth",
    date: "June 2025",
    description:
      "Updated guidelines from the Ministry of Environment mandate stricter producer responsibility and expanded recycler authorization requirements for businesses generating e-waste.",
    categoryColor: "bg-blue-100 text-blue-700",
  },
  {
    category: "Sustainability",
    headline: "India Generated Over 3.2 Million Tonnes of E-Waste in 2024 — Most Still Unrecycled",
    source: "The Hindu",
    date: "May 2025",
    description:
      "A new report highlights that a significant portion of India's electronic waste still ends up in informal sectors, underscoring the need for certified recycling pathways.",
    categoryColor: "bg-green-100 text-green-700",
  },
  {
    category: "Technology",
    headline: "From Old Phones to Gold: How Urban Mining is Revolutionizing E-Waste in India",
    source: "Economic Times",
    date: "April 2025",
    description:
      "Advanced material recovery techniques are enabling recyclers to extract precious metals like gold, silver, and palladium from discarded electronics at scale.",
    categoryColor: "bg-purple-100 text-purple-700",
  },
];

export default function NewsPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Latest Industry News
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Stay Informed on{" "}
              <span className="text-green-600">E-Waste & Sustainability</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
            >
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsPlaceholders.map((article, index) => (
            <motion.div
              key={article.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col border border-gray-100 hover:border-green-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 80 80" className="w-20 h-20 text-white/10 fill-current">
                    <path d="M40 4C20.1 4 4 20.1 4 40s16.1 36 36 36 36-16.1 36-36S59.9 4 40 4zm0 8c15.4 0 28 12.6 28 28S55.4 68 40 68 12 55.4 12 40s12.6-28 28-28zm-4 12v16H20v8h16v16h8V48h16v-8H44V24h-8z"/>
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5" />
                    {article.source}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                  {article.headline}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {article.description}
                </p>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm mt-4 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
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
            href="/news"
            className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all"
          >
            View All Industry News <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
