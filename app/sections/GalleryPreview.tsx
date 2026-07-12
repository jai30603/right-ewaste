"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ZoomIn } from "lucide-react";

const categories = ["All", "Collection", "Warehouse", "Office", "Transportation", "CSR Activities"];

const galleryItems = [
  { id: 1, category: "Collection", label: "Corporate Bulk Collection", gradient: "from-blue-600 to-blue-800", col: "col-span-2 row-span-2" },
  { id: 2, category: "Warehouse", label: "Sorting Facility", gradient: "from-green-600 to-emerald-800", col: "" },
  { id: 3, category: "Office", label: "IT Asset Disposal", gradient: "from-teal-600 to-teal-800", col: "" },
  { id: 4, category: "Transportation", label: "Secure Transport", gradient: "from-emerald-600 to-green-900", col: "" },
  { id: 5, category: "CSR Activities", label: "School Awareness Drive", gradient: "from-purple-600 to-purple-900", col: "" },
  { id: 6, category: "Collection", label: "Residential Pickup", gradient: "from-orange-600 to-orange-800", col: "" },
  { id: 7, category: "Warehouse", label: "Recycling Process", gradient: "from-rose-600 to-rose-800", col: "" },
  { id: 8, category: "CSR Activities", label: "Community Drive", gradient: "from-indigo-600 to-indigo-800", col: "" },
];

export default function GalleryPreview() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 subtle-green-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Our Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Our Work in{" "}
              <span className="text-green-600">Action</span>
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
              href="/gallery"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.col}`}
                style={{ minHeight: item.col ? "220px" : "150px" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }} />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Scale on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-100 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: "inherit" }} />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-white text-xs font-semibold">{item.label}</span>
                  <span className="ml-2 text-white/60 text-xs">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
          >
            See Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
