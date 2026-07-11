"use client";

import { motion } from "framer-motion";
import {
  Recycle,
  ShieldCheck,
  HardDrive,
  Truck,
  Leaf,
  HeadphonesIcon,
  Award,
  Clock,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const reasons = [
  {
    icon: Recycle,
    title: "Responsible Recycling",
    description:
      "We follow strict environmental protocols ensuring zero landfill waste. Every component is responsibly processed.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: ShieldCheck,
    title: "Government Compliance",
    description:
      "Fully authorized by Pollution Control Board with all required certifications, licenses, and government approvals.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: HardDrive,
    title: "Secure Data Destruction",
    description:
      "Military-grade data destruction with certificates of destruction provided for every disposed asset.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: Truck,
    title: "Doorstep Bulk Pickup",
    description:
      "Free bulk pickup service from your premises — offices, warehouses, or institutions anywhere in India.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Processing",
    description:
      "State-of-the-art eco-friendly processing facility ensuring maximum material recovery and zero pollution.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Professional Support",
    description:
      "Dedicated account managers and customer support to assist you throughout the entire recycling process.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Recycling Certificate",
    description:
      "Receive an official Recycling Certificate and Weight Certificate for your CSR documentation and audits.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Quick collection, processing, and documentation. We respect your timelines and ensure timely delivery.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 subtle-green-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="The Right Choice for"
          titleHighlight="Responsible Recycling"
          description="We combine technology, compliance, and environmental responsibility to deliver trusted e-waste management solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all card-hover group"
            >
              <div className={`w-12 h-12 ${reason.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
