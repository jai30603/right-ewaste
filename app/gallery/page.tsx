"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/sections/CTASection";

const categories = ["All", "Office", "Warehouse", "Collection", "Transportation", "Recycling", "CSR Activities"];

const galleryItems = [
  { id: 1, category: "Office", title: "Corporate Office Collection Drive", desc: "Annual IT asset retirement drive at a Mumbai corporate office.", aspect: "landscape" },
  { id: 2, category: "Warehouse", title: "Processing Facility", desc: "Our state-of-the-art e-waste processing facility.", aspect: "portrait" },
  { id: 3, category: "Collection", title: "Bulk Collection Event", desc: "Large-scale e-waste collection from a tech company.", aspect: "landscape" },
  { id: 4, category: "Transportation", title: "GPS-Tracked Fleet", desc: "Our specialized e-waste transport vehicles.", aspect: "square" },
  { id: 5, category: "Recycling", title: "Material Sorting Process", desc: "Manual sorting of electronic components at the facility.", aspect: "landscape" },
  { id: 6, category: "CSR Activities", title: "School Awareness Drive", desc: "E-waste awareness campaign at a Pune school.", aspect: "portrait" },
  { id: 7, category: "Office", title: "Hospital IT Disposal", desc: "Secure IT asset collection from a major hospital.", aspect: "square" },
  { id: 8, category: "Warehouse", title: "Component Recycling", desc: "Extracting valuable metals from PCBs.", aspect: "landscape" },
  { id: 9, category: "Collection", title: "Residential Complex Drive", desc: "Household e-waste collection at a housing society.", aspect: "portrait" },
  { id: 10, category: "Transportation", title: "Safe Loading", desc: "Trained team loading e-waste for transport.", aspect: "square" },
  { id: 11, category: "Recycling", title: "Data Destruction", desc: "Certified hard drive shredding at our facility.", aspect: "landscape" },
  { id: 12, category: "CSR Activities", title: "Government Partnership", desc: "Collaboration with municipal corporation for e-waste drive.", aspect: "portrait" },
  { id: 13, category: "Office", title: "Bank IT Disposal", desc: "Secure disposal of ATM and server equipment.", aspect: "landscape" },
  { id: 14, category: "Warehouse", title: "Machinery Line", desc: "Advanced recycling machinery at work.", aspect: "square" },
  { id: 15, category: "Collection", title: "Factory Clearance", desc: "Industrial e-waste collection from a manufacturing plant.", aspect: "landscape" },
  { id: 16, category: "CSR Activities", title: "Community Drive", desc: "Community e-waste awareness and collection event.", aspect: "portrait" },
];

// Placeholder gradient colors for each item
const gradients = [
  "from-green-400 to-emerald-600",
  "from-blue-400 to-blue-600",
  "from-teal-400 to-green-600",
  "from-emerald-400 to-teal-600",
  "from-green-500 to-blue-500",
  "from-blue-500 to-indigo-600",
  "from-teal-500 to-blue-600",
  "from-green-400 to-teal-500",
  "from-emerald-500 to-green-700",
  "from-blue-400 to-teal-500",
  "from-indigo-400 to-blue-600",
  "from-green-600 to-emerald-700",
  "from-teal-400 to-emerald-600",
  "from-blue-500 to-teal-600",
  "from-green-500 to-teal-700",
  "from-emerald-400 to-blue-500",
];

const heightMap: Record<string, string> = {
  landscape: "h-48",
  portrait: "h-72",
  square: "h-56",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Our Work in{" "}
            <span className="text-green-400">Action</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            A glimpse into our facilities, collection drives, and CSR activities
            across India.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Photo Gallery"
            title="Our Impact in"
            titleHighlight="Pictures"
            description="From corporate collection drives to community awareness programs — witness our work across the country."
          />

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="break-inside-avoid"
                >
                  <div
                    onClick={() => setLightbox(item)}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                  >
                    <div
                      className={`w-full ${heightMap[item.aspect]} bg-gradient-to-br ${
                        gradients[item.id % gradients.length]
                      } flex items-center justify-center`}
                    >
                      {/* Placeholder — real images can replace this div */}
                      <div className="text-center text-white/60">
                        <div className="w-12 h-12 border-2 border-white/30 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        </div>
                        <p className="text-xs font-medium px-4 text-center leading-tight">{item.title}</p>
                      </div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-300 text-xs">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            * Placeholder images shown. Actual photos will be displayed when uploaded.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
            >
              <div
                className={`w-full h-72 bg-gradient-to-br ${
                  gradients[lightbox.id % gradients.length]
                } flex items-center justify-center`}
              >
                <div className="text-white/60 text-center">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                      {lightbox.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{lightbox.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{lightbox.desc}</p>
                  </div>
                  <button
                    onClick={() => setLightbox(null)}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors ml-4"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </div>
  );
}
