"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/sections/CTASection";
import {
  Laptop,
  Monitor,
  Printer,
  Smartphone,
  Server,
  HardDrive,
  Wifi,
  Battery,
  Keyboard,
  Mouse,
  Cable,
  Cpu,
} from "lucide-react";

const categories = [
  {
    title: "Computers & Laptops",
    items: [
      { icon: Laptop, label: "Laptops", desc: "All brands, all conditions" },
      { icon: Monitor, label: "Desktops", desc: "Including tower units & mini PCs" },
      { icon: Monitor, label: "Monitors", desc: "LCD, LED, CRT monitors" },
      { icon: Server, label: "Servers", desc: "Rack-mount, blade & tower servers" },
    ],
    color: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-700",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    title: "Mobile & Portable",
    items: [
      { icon: Smartphone, label: "Mobile Phones", desc: "Smartphones & feature phones" },
      { icon: Laptop, label: "Tablets", desc: "iPads, Android tablets" },
      { icon: Laptop, label: "Laptops", desc: "Old & non-functional" },
      { icon: Battery, label: "Power Banks", desc: "Portable battery packs" },
    ],
    color: "bg-green-50 border-green-100",
    badge: "bg-green-100 text-green-700",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    title: "Networking & Storage",
    items: [
      { icon: Wifi, label: "Routers", desc: "Wired & wireless routers" },
      { icon: Server, label: "Network Switches", desc: "Managed & unmanaged" },
      { icon: HardDrive, label: "Hard Drives", desc: "HDD, SSD, NAS drives" },
      { icon: Server, label: "UPS Systems", desc: "All types of UPS & inverters" },
    ],
    color: "bg-orange-50 border-orange-100",
    badge: "bg-orange-100 text-orange-700",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
  },
  {
    title: "Peripherals & Accessories",
    items: [
      { icon: Keyboard, label: "Keyboards", desc: "Wired & wireless keyboards" },
      { icon: Mouse, label: "Mouse", desc: "All types of pointing devices" },
      { icon: Printer, label: "Printers", desc: "Inkjet, laser, multifunction" },
      { icon: Cable, label: "Cables & Wires", desc: "Power cables, data cables" },
    ],
    color: "bg-purple-50 border-purple-100",
    badge: "bg-purple-100 text-purple-700",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    title: "Components",
    items: [
      { icon: Cpu, label: "Motherboards", desc: "Desktop & laptop boards" },
      { icon: Cpu, label: "Processors", desc: "Intel, AMD, ARM chips" },
      { icon: HardDrive, label: "RAM Modules", desc: "DDR2, DDR3, DDR4, DDR5" },
      { icon: Monitor, label: "Graphics Cards", desc: "GPU cards, video cards" },
    ],
    color: "bg-teal-50 border-teal-100",
    badge: "bg-teal-100 text-teal-700",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-100",
  },
  {
    title: "Office Equipment",
    items: [
      { icon: Printer, label: "Fax Machines", desc: "All types of fax devices" },
      { icon: Monitor, label: "Scanners", desc: "Flatbed & document scanners" },
      { icon: Printer, label: "Photocopiers", desc: "Office copier machines" },
      { icon: Monitor, label: "Projectors", desc: "Business & home projectors" },
    ],
    color: "bg-red-50 border-red-100",
    badge: "bg-red-100 text-red-700",
    iconColor: "text-red-600",
    iconBg: "bg-red-100",
  },
];

export default function WhatWeRecyclePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            What We Recycle
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            We Recycle{" "}
            <span className="text-green-400">Everything Electronic</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            From the smallest cable to the largest server rack — if it uses electricity,
            we can responsibly recycle it.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Accepted Items"
            title="Electronics We"
            titleHighlight="Accept & Recycle"
            description="Our facility is equipped to handle all types of electronic waste. If you're unsure whether we accept your item, contact us — we almost certainly do."
          />
          <div className="space-y-8">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`border ${cat.color} rounded-3xl p-6 lg:p-8`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`${cat.badge} text-sm font-bold px-3 py-1 rounded-full`}>
                    {cat.title}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.label}
                      className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow card-hover"
                    >
                      <div className={`w-12 h-12 ${cat.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <item.icon className={`w-6 h-6 ${cat.iconColor}`} />
                      </div>
                      <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                      <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-green-50 border border-green-100 rounded-2xl p-6 text-center"
          >
            <p className="text-green-800 font-medium">
              Don't see your item listed? <strong>We likely still accept it.</strong>{" "}
              Contact us at{" "}
              <a href="mailto:info@rightewasterecycle.com" className="underline">
                info@rightewasterecycle.com
              </a>{" "}
              or call{" "}
              <a href="tel:+919999999999" className="underline">+91 99999 99999</a>
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
