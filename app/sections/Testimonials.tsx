"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehra",
    company: "Mehra Technologies Pvt. Ltd.",
    role: "IT Manager",
    review:
      "Right Ewaste handled our entire server room decommissioning professionally. The data destruction certificates gave us complete peace of mind. Highly recommended for any corporate IT asset disposal.",
    initials: "RM",
    color: "bg-blue-600",
  },
  {
    name: "Priya Sharma",
    company: "Orchid International School",
    role: "Administrative Director",
    review:
      "We had over 200 old computers and monitors to dispose of. Right Ewaste provided doorstep pickup, proper documentation, and a recycling certificate for our CSR reports. Excellent service!",
    initials: "PS",
    color: "bg-green-600",
  },
  {
    name: "Anand Kulkarni",
    company: "Global Finance Bank",
    role: "Operations Head",
    review:
      "As a bank, data security is paramount. Right Ewaste's DoD-standard data destruction service and their thorough documentation process made our compliance audit completely stress-free.",
    initials: "AK",
    color: "bg-purple-600",
  },
  {
    name: "Dr. Sunita Reddy",
    company: "Apollo Specialty Hospital",
    role: "Facility Manager",
    review:
      "They managed the disposal of our old medical equipment and IT devices with great care. The team was professional, punctual, and provided all required compliance documentation.",
    initials: "SR",
    color: "bg-teal-600",
  },
  {
    name: "Vikram Patel",
    company: "Patel Manufacturing Ltd.",
    role: "General Manager",
    review:
      "Our factory upgrade generated over 5 tons of e-waste. Right Ewaste managed the entire process efficiently — pickup, transportation, and certified recycling. Will use them again.",
    initials: "VP",
    color: "bg-orange-600",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

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
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Trusted by{" "}
            <span className="text-green-600">500+ Organizations</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Hear from corporates, schools, hospitals, and government bodies who trust us for responsible e-waste management.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-50 to-green-50 border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm overflow-hidden">
            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-green-200 text-8xl font-serif leading-none select-none">"</div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                  "{t.review}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-base shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all ${
                    i === current ? "w-6 h-2.5 bg-green-600" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-all shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-all shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
