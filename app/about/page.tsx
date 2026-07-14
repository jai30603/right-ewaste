"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Recycle,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Building2,
  ArrowRight,
  Leaf,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Globe,
  AlertTriangle,
  ChevronRight,
  Phone,
  Truck,
  Package,
  Settings,
  Layers,
  BadgeCheck,
  Wrench,
  Zap,
  BarChart3,
  FileText,
  Star,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";

// ─── Config (edit here to update content) ────────────────────────────────────

const story = {
  heading: "Our Story",
  subheading: "Born from a Vision of a Cleaner, Greener India",
  paragraphs: [
    "Every electronic device has a lifecycle. When that lifecycle ends, responsible disposal becomes just as important as responsible manufacturing. Right Ewaste Recycle Private Limited was established with a simple vision — to ensure that obsolete electronics never become an environmental burden.",
    "As technology continues to evolve at an unprecedented pace, millions of electronic devices are discarded every year across India. Improper disposal of these devices leaches toxic materials like lead, mercury, and cadmium into our soil, water, and air — harming communities and ecosystems for decades.",
    "Through responsible collection, certified recycling, and resource recovery, we aim to bridge the gap between technological progress and environmental responsibility — contributing to a cleaner India and a more circular economy.",
  ],
  cta: "Discover Our Journey",
};

const missionVision = [
  {
    icon: Target,
    label: "Our Mission",
    color: "from-green-600 to-emerald-700",
    text: "Our mission is to provide secure, transparent and environmentally responsible e-waste recycling solutions for individuals, businesses and institutions across India — ensuring every device is handled safely, every data asset is destroyed securely, and every material is recovered responsibly.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    color: "from-blue-600 to-blue-800",
    text: "Our vision is to become one of India's most trusted and sustainable e-waste recycling organizations — building a future where every electronic device is responsibly recycled, natural resources are conserved, and the environment is protected for generations to come.",
  },
];

const values = [
  { icon: Leaf, label: "Sustainability", desc: "We believe every electronic device deserves a responsible end-of-life — not a landfill.", color: "bg-green-600", border: "hover:border-green-200" },
  { icon: ShieldCheck, label: "Integrity", desc: "We operate with full transparency, ethical practices, and accountability at every step.", color: "bg-blue-600", border: "hover:border-blue-200" },
  { icon: Lightbulb, label: "Innovation", desc: "We continuously improve our recycling processes through modern technologies and methods.", color: "bg-yellow-500", border: "hover:border-yellow-200" },
  { icon: BadgeCheck, label: "Compliance", desc: "We adhere strictly to all government regulations, PCB authorizations, and environmental standards.", color: "bg-purple-600", border: "hover:border-purple-200" },
  { icon: Heart, label: "Customer Commitment", desc: "We deliver reliable, professional, and responsive service to every client we serve.", color: "bg-red-500", border: "hover:border-red-200" },
];

const whyChoose = [
  { icon: ShieldCheck, label: "Government Compliant", desc: "CPCB & State PCB authorized recycler with all required certifications." },
  { icon: Recycle, label: "Responsible Recycling", desc: "Zero landfill policy with maximum material recovery at every stage." },
  { icon: Cpu, label: "Secure Data Handling", desc: "DoD-standard erasure and physical destruction with certificates." },
  { icon: FileText, label: "Transparent Documentation", desc: "Complete audit trail — weight slips, receipts, and recycling certificates." },
  { icon: Truck, label: "Professional Pickup", desc: "Free bulk doorstep pickup across 25+ cities with trained personnel." },
  { icon: Globe, label: "Environment First", desc: "Every decision we make is guided by its impact on the environment." },
];

const techFeatures = [
  { icon: Wrench, label: "Safe Dismantling", desc: "Component-level disassembly by trained technicians using specialized tools in safe conditions." },
  { icon: Layers, label: "Material Recovery", desc: "Advanced separation of metals, plastics, glass, and rare earth materials for maximum recovery." },
  { icon: Zap, label: "Resource Optimisation", desc: "Recovered materials are channelled back into manufacturing supply chains efficiently." },
  { icon: BarChart3, label: "Environmental Compliance", desc: "All processes monitored and documented to meet Central and State environmental norms." },
];

const processSteps = [
  { icon: Phone, step: "01", label: "Collection", desc: "Doorstep pickup or drop-off" },
  { icon: Truck, step: "02", label: "Transportation", desc: "Secure transit to facility" },
  { icon: Package, step: "03", label: "Sorting", desc: "Category-wise classification" },
  { icon: Wrench, step: "04", label: "Dismantling", desc: "Safe component separation" },
  { icon: Layers, step: "05", label: "Material Recovery", desc: "Metals, plastics, rare earths" },
  { icon: Recycle, step: "06", label: "Recycling", desc: "Eco-compliant processing" },
  { icon: Award, step: "07", label: "Certification", desc: "Official recycling certificate" },
];

const impactStats = [
  { value: 250, suffix: "+", unit: "Tons", label: "Tons Recycled", icon: Recycle, color: "bg-green-600", light: "bg-green-50", text: "text-green-700" },
  { value: 500, suffix: "+", unit: "", label: "Happy Customers", icon: Users, color: "bg-blue-600", light: "bg-blue-50", text: "text-blue-700" },
  { value: 50000, suffix: "+", unit: "", label: "Devices Processed", icon: Cpu, color: "bg-purple-600", light: "bg-purple-50", text: "text-purple-700" },
  { value: 95, suffix: "%", unit: "", label: "Material Recovery", icon: TrendingUp, color: "bg-orange-500", light: "bg-orange-50", text: "text-orange-700" },
  { value: 100, suffix: "%", unit: "", label: "Responsible Disposal", icon: ShieldCheck, color: "bg-teal-600", light: "bg-teal-50", text: "text-teal-700" },
];

const facilities = [
  { label: "Main Recycling Warehouse", category: "Warehouse", gradient: "from-green-700 to-emerald-900", size: "lg" },
  { label: "Collection Center", category: "Collection", gradient: "from-blue-700 to-blue-900", size: "sm" },
  { label: "Sorting & Segregation Area", category: "Sorting", gradient: "from-teal-700 to-teal-900", size: "sm" },
  { label: "Recycling Equipment Floor", category: "Equipment", gradient: "from-gray-700 to-gray-900", size: "md" },
  { label: "Corporate Office", category: "Office", gradient: "from-purple-700 to-purple-900", size: "md" },
  { label: "Collection Vehicles Fleet", category: "Transport", gradient: "from-orange-700 to-orange-900", size: "sm" },
];

const certifications = [
  { icon: BadgeCheck, label: "GST Registration", number: "27XXXXX1234Z1Z5", color: "bg-blue-600", light: "bg-blue-50", border: "border-blue-100" },
  { icon: FileText, label: "Company Registration", number: "CIN: U90000MHXXXXPTC", color: "bg-green-600", light: "bg-green-50", border: "border-green-100" },
  { icon: ShieldCheck, label: "Pollution Control Board", number: "PCB Auth. No.: XXXXXX", color: "bg-emerald-600", light: "bg-emerald-50", border: "border-emerald-100" },
  { icon: Star, label: "ISO Certification", number: "ISO 14001:2015", color: "bg-purple-600", light: "bg-purple-50", border: "border-purple-100" },
  { icon: Award, label: "Government Compliance", number: "E-Waste Reg. No.: XXXXX", color: "bg-orange-500", light: "bg-orange-50", border: "border-orange-100" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* ── 1. Hero ── */}
      <section className="relative hero-gradient overflow-hidden py-24 lg:py-36">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-green-400 font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              About Us
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-7">
              Building a Cleaner Tomorrow Through{" "}
              <span className="text-green-400">Responsible E-Waste Recycling</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
              Right Ewaste Recycle Private Limited is a responsible electronic waste recycling company dedicated to sustainability, innovation, and environmental compliance — helping businesses and individuals safely dispose of electronics while protecting our planet.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5">
                Our Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
            <path d="M0 70H1440V35C1440 35 1200 0 720 0C240 0 0 35 0 35V70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── 2. Our Story ── */}
      <section className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-800 to-emerald-950 aspect-[4/3] shadow-2xl group">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/15">
                  <Recycle className="w-36 h-36 mb-3" />
                  <p className="text-sm tracking-wider">E-Waste Recycling Facility</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                    <p className="text-white font-semibold text-sm">📍 State-of-the-Art Processing Facility</p>
                    <p className="text-green-300 text-xs mt-0.5">Zero Landfill • Fully Certified • Pan-India</p>
                  </div>
                </div>
                <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 opacity-0" />
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 z-10">
                <div className="text-3xl font-bold text-green-600">10+</div>
                <div className="text-xs text-gray-500 font-medium">Years in Service</div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 z-10">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-xs text-gray-500 font-medium">Happy Customers</div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {story.heading}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {story.subheading.split("Cleaner, Greener India")[0]}
                <span className="text-green-600">Cleaner, Greener India</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {story.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="grid grid-cols-2 gap-3 my-7">
                {[
                  { icon: ShieldCheck, label: "PCB Authorized" },
                  { icon: Leaf, label: "Zero Landfill Policy" },
                  { icon: Award, label: "Data Destruction Cert." },
                  { icon: Building2, label: "Pan-India Operations" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/process"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                {story.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Purpose ── */}
      <section className="py-16 lg:py-24 subtle-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Why We Exist
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Electronic Waste is a{" "}
                <span className="text-green-600">Growing Crisis</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Electronic devices contain precious recoverable materials — gold, silver, copper, palladium, and rare earth elements — that are simply lost when devices are thrown into landfills. At the same time, improper disposal releases toxic substances into our environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Right Ewaste Recycle exists to solve this problem. We ensure that every device we collect has its valuable materials responsibly recovered and its hazardous components safely managed — turning what was a waste problem into a resource opportunity.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: "3.2M+", label: "Tonnes of e-waste generated in India annually", color: "text-red-500" },
                  { stat: "Only 17%", label: "Of global e-waste formally recycled each year", color: "text-orange-500" },
                  { stat: "70%", label: "Of toxic landfill waste comes from electronics", color: "text-purple-600" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.stat}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-800 to-teal-950 aspect-[4/3] shadow-2xl group">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/15">
                  <Globe className="w-32 h-32 mb-3" />
                  <p className="text-sm tracking-wider">Environmental Impact Visualization</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                    <p className="text-green-300 text-xs font-semibold uppercase tracking-wider mb-1">Our Contribution</p>
                    <p className="text-white text-sm font-medium">Recovering valuable materials and reducing India's e-waste landfill burden, one device at a time.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Mission & Vision (glass cards) ── */}
      <section className="py-16 lg:py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Mission & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our Purpose &{" "}
              <span className="text-green-400">Direction</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missionVision.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.label}</h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Core Values ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Values"
            title="The Principles That"
            titleHighlight="Guide Everything We Do"
            description="Our values are not just words on a wall — they shape how we operate, how we treat clients, and how we care for the environment."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${v.border} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 ${v.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{v.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Why Choose Right Ewaste ── */}
      <section className="py-16 lg:py-24 subtle-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Why Choose <span className="text-green-600">Right Ewaste?</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We combine regulatory compliance, security, and genuine environmental care to deliver e-waste recycling that organizations and individuals can fully trust.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChoose.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group"
                  >
                    <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <f.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{f.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-950 aspect-square shadow-2xl group">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/15">
                  <ShieldCheck className="w-32 h-32 mb-3" />
                  <p className="text-sm tracking-wider">Professional Team at Work</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                    <p className="text-white font-semibold text-sm">✓ CPCB & State PCB Authorized Recycler</p>
                    <p className="text-blue-300 text-xs mt-0.5">All authorizations renewed and compliant</p>
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -left-5 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-500">Compliance Rate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. Technology & Innovation ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image — left on this section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950 aspect-[4/3] shadow-2xl group">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(45deg,rgba(255,255,255,0.05) 25%,transparent 25%,transparent 75%,rgba(255,255,255,0.05) 75%),linear-gradient(45deg,rgba(255,255,255,0.05) 25%,transparent 25%,transparent 75%,rgba(255,255,255,0.05) 75%)", backgroundSize: "30px 30px", backgroundPosition: "0 0,15px 15px" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/15">
                  <Cpu className="w-32 h-32 mb-3" />
                  <p className="text-sm tracking-wider">Advanced Recycling Technology</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                    <p className="text-white font-semibold text-sm">⚙️ Modern Processing Equipment</p>
                    <p className="text-gray-300 text-xs mt-0.5">Maximising material recovery at every stage</p>
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 z-10">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-xs text-gray-500 font-medium">Material Recovery</div>
              </motion.div>
            </motion.div>

            {/* Text — right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                Technology & Innovation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Modern Technology for{" "}
                <span className="text-purple-600">Maximum Impact</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We leverage modern recycling technologies and processes to ensure every device we handle contributes the maximum possible environmental and material recovery benefit.
              </p>
              <div className="space-y-4">
                {techFeatures.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all group bg-white"
                  >
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <f.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-0.5">{f.label}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. Our Process (horizontal) ── */}
      <section className="py-16 lg:py-24 subtle-green-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Process"
            title="How We Handle"
            titleHighlight="Your E-Waste"
            description="A transparent, documented, 7-step process from your doorstep to a recycling certificate."
          />

          {/* Desktop horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-10 left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 z-0" />
              <div className="grid grid-cols-7 gap-2">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative z-10 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 bg-white border-4 border-green-100 rounded-2xl flex items-center justify-center mb-4 shadow-lg hover:border-green-400 hover:shadow-xl hover:-translate-y-1 transition-all group">
                      <step.icon className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-bold text-green-600 mb-1">STEP {step.step}</span>
                    <h4 className="font-bold text-gray-900 text-xs mb-1">{step.label}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="lg:hidden space-y-3">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-green-600">STEP {step.step}</span>
                  <h4 className="font-bold text-gray-900 text-sm">{step.label}</h4>
                  <p className="text-gray-500 text-xs">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/process"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
              View Detailed Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. Environmental Impact ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Environmental Impact"
            title="Our Impact"
            titleHighlight="in Numbers"
            description="Real results from years of committed, responsible e-waste recycling."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {impactStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${s.light} rounded-2xl p-5 text-center border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold ${s.text} leading-tight`}>
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                  {s.unit && <span className="text-base font-semibold ml-0.5">{s.unit}</span>}
                </div>
                <div className="text-gray-700 font-semibold text-xs mt-1.5 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Our Facilities ── */}
      <section className="py-16 lg:py-24 subtle-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Facilities"
            title="Infrastructure Built for"
            titleHighlight="Responsible Recycling"
            description="A look at the facilities and infrastructure that power our certified e-waste recycling operations."
          />

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${
                  f.size === "lg" ? "row-span-2 min-h-[320px]" : f.size === "md" ? "min-h-[200px]" : "min-h-[160px]"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient}`} />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "25px 25px" }} />
                {/* Zoom on hover */}
                <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-600" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-semibold text-sm">{f.label}</p>
                  <p className="text-white/60 text-xs">{f.category}</p>
                </div>
                {/* Hover zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white rotate-[-45deg]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery"
              className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 11. Certifications & Compliance ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Certifications"
            title="Certified, Authorized &"
            titleHighlight="Fully Compliant"
            description="Our authorizations, registrations, and certifications reflect our commitment to operating legally and responsibly."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${cert.light} border ${cert.border} rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group`}
              >
                {/* Certificate placeholder */}
                <div className={`w-14 h-14 ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <cert.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{cert.label}</h3>
                <p className="text-gray-400 text-xs font-mono">{cert.number}</p>
                <div className="mt-3 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-green-600 text-xs font-semibold">Valid</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/certificates"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors">
              View All Certificates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. Our Commitment ── */}
      <section className="py-16 lg:py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Our Commitment Towards a{" "}
                <span className="text-green-400">Greener Future</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Every electronic device we receive represents an opportunity to reduce environmental impact. We are committed to ensuring that electronic waste is handled responsibly, valuable resources are recovered efficiently, and hazardous materials are disposed of in accordance with the strictest environmental standards.
                </p>
                <p>
                  Our commitment extends beyond recycling — we aim to build awareness, encourage sustainable consumption habits, and contribute to a cleaner and greener future for all communities across India.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {["Zero Landfill Policy", "100% Authorized Operations", "Full Audit Trail", "Pan-India Coverage", "Free Bulk Pickup", "Same-Day Response"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Leaf className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Environmental Progress</h3>
                    <p className="text-gray-300 text-sm">Our positive impact, by the numbers</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "E-Waste Safely Processed", value: "250+ Tons", pct: 75 },
                    { label: "Devices Responsibly Recycled", value: "50,000+", pct: 85 },
                    { label: "CO₂ Emissions Avoided", value: "125+ Tons", pct: 60 },
                    { label: "Materials Recovered", value: "80+ Tons", pct: 70 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-green-400 font-semibold">{item.value}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-300 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 13. Final CTA ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden hero-gradient rounded-3xl px-8 py-16 sm:px-16 text-center"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Let's Collaborate
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Let's Build a Sustainable Future Together
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                Whether you're an individual, educational institution, corporation or government organization, Right Ewaste Recycle Private Limited is ready to help you recycle electronic waste responsibly.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5">
                  Explore Services
                </Link>
                <a href="tel:+919999999999"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href="https://wa.me/919999999999?text=Hello!%20I%27d%20like%20to%20know%20more%20about%20your%20e-waste%20recycling%20services."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
