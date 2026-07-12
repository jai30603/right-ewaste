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
  HandshakeIcon,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Globe,
  AlertTriangle,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/sections/CTASection";
import type { Metadata } from "next";

// ─── Data (easy to edit later) ───────────────────────────────────────────────

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    desc: "Right Ewaste Recycle Pvt. Ltd. was established with a clear vision — to provide India with a certified, responsible e-waste recycling solution.",
    icon: "🌱",
  },
  {
    year: "2021",
    title: "First Corporate Partnership",
    desc: "Signed our first major corporate partnership, beginning bulk e-waste collection and IT asset disposal for enterprises.",
    icon: "🤝",
  },
  {
    year: "2022",
    title: "Expanded Recycling Operations",
    desc: "Expanded our processing facility and launched our secure data destruction service to meet growing enterprise demand.",
    icon: "🏭",
  },
  {
    year: "2023",
    title: "Introduced Secure Data Destruction",
    desc: "Launched DoD-standard data erasure and physical media destruction with full audit trail certificates for compliance.",
    icon: "🔒",
  },
  {
    year: "2024",
    title: "Expanded Collection Network",
    desc: "Extended our doorstep pickup network to 25+ cities and crossed 250 tons of e-waste responsibly recycled.",
    icon: "🚚",
  },
  {
    year: "2025",
    title: "Growing Towards a Sustainable Future",
    desc: "Scaling operations nationwide with a 100% zero-landfill commitment, new corporate partnerships, and renewed government authorizations.",
    icon: "🌍",
  },
];

const highlights = [
  { value: 10, suffix: "+", unit: "Years", label: "Years of Experience", color: "bg-green-600", light: "bg-green-50", text: "text-green-600" },
  { value: 500, suffix: "+", unit: "", label: "Happy Customers", color: "bg-blue-600", light: "bg-blue-50", text: "text-blue-600" },
  { value: 250, suffix: "+", unit: "Tons", label: "E-Waste Recycled", color: "bg-emerald-600", light: "bg-emerald-50", text: "text-emerald-600" },
  { value: 100, suffix: "%", unit: "", label: "Responsible Disposal", color: "bg-teal-600", light: "bg-teal-50", text: "text-teal-600" },
  { value: 25, suffix: "+", unit: "", label: "Corporate Partners", color: "bg-purple-600", light: "bg-purple-50", text: "text-purple-600" },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We believe every electronic device should be responsibly recycled — not discarded. Sustainability is at the heart of all our operations.",
    color: "text-green-600",
    bg: "bg-green-600",
    light: "bg-green-50",
    border: "hover:border-green-200",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We operate with full transparency and ethical business practices. Every process is documented, certified, and accountable.",
    color: "text-blue-600",
    bg: "bg-blue-600",
    light: "bg-blue-50",
    border: "hover:border-blue-200",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously improve our recycling processes through modern technologies to maximise material recovery and minimise waste.",
    color: "text-yellow-600",
    bg: "bg-yellow-500",
    light: "bg-yellow-50",
    border: "hover:border-yellow-200",
  },
  {
    icon: HandshakeIcon,
    title: "Customer Commitment",
    description: "We strive to provide reliable, professional, and responsive service to every client — from individuals to large enterprises.",
    color: "text-purple-600",
    bg: "bg-purple-600",
    light: "bg-purple-50",
    border: "hover:border-purple-200",
  },
  {
    icon: Globe,
    title: "Environmental Responsibility",
    description: "We are committed to protecting our planet for future generations through zero-landfill recycling and responsible material recovery.",
    color: "text-teal-600",
    bg: "bg-teal-600",
    light: "bg-teal-50",
    border: "hover:border-teal-200",
  },
];

const whyChooseFeatures = [
  { icon: ShieldCheck, label: "Government Compliant Recycling", desc: "Fully authorized by Central & State Pollution Control Boards." },
  { icon: Recycle, label: "Responsible Processing", desc: "Zero-landfill policy with maximum material recovery." },
  { icon: Cpu, label: "Secure Data Handling", desc: "DoD-standard erasure and physical destruction with certificates." },
  { icon: Users, label: "Professional Team", desc: "Trained personnel with expertise in e-waste management." },
  { icon: Award, label: "Transparent Documentation", desc: "Full audit trail — weight slips, collection receipts, and certificates." },
  { icon: Heart, label: "Customer-Focused Service", desc: "Responsive team, free bulk pickup, and same-day enquiry response." },
];

const whyMattersCards = [
  {
    icon: TrendingUp,
    title: "Growing Electronic Waste",
    description: "India generates over 3.2 million tonnes of e-waste annually — the 3rd largest globally. Certified recycling is the only responsible solution.",
    color: "bg-blue-600",
    light: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    icon: Recycle,
    title: "Recover Valuable Materials",
    description: "Electronics contain gold, silver, copper, and rare earth metals. Responsible recycling recovers these resources instead of mining new ones.",
    color: "bg-green-600",
    light: "bg-green-50",
    text: "text-green-700",
  },
  {
    icon: AlertTriangle,
    title: "Protect Human Health",
    description: "Improperly disposed e-waste releases lead, mercury, and cadmium into soil and water — posing severe health risks to communities.",
    color: "bg-orange-500",
    light: "bg-orange-50",
    text: "text-orange-700",
  },
  {
    icon: Globe,
    title: "Support Circular Economy",
    description: "Every recycled device keeps materials in use longer, reduces demand for raw material extraction, and cuts industrial carbon emissions.",
    color: "bg-teal-600",
    light: "bg-teal-50",
    text: "text-teal-700",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* ── 1. Hero ── */}
      <section className="relative hero-gradient overflow-hidden py-24 lg:py-32">
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-green-400 font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              About Right Ewaste
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building a Cleaner Future Through{" "}
              <span className="text-green-400">Responsible E-Waste Recycling</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Right Ewaste Recycle Private Limited is committed to providing environmentally responsible recycling solutions — helping businesses, institutions, and individuals safely dispose of electronic waste while protecting natural resources and complying with all regulatory requirements.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold backdrop-blur-sm transition-all hover:-translate-y-0.5">
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
            <path d="M0 60H1440V30C1440 30 1200 0 720 0C240 0 0 30 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── 2. Our Story ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-800 to-emerald-950 aspect-[4/3] shadow-2xl group">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/20">
                    <Recycle className="w-32 h-32 mx-auto mb-4" />
                    <p className="text-sm">E-Waste Recycling Warehouse</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                    <p className="text-white text-sm font-medium">📍 State-of-the-art processing facility</p>
                    <p className="text-green-300 text-xs mt-1">Operating since 2020 • Zero Landfill Policy</p>
                  </div>
                </div>
                {/* Hover zoom overlay */}
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-all duration-500 group-hover:scale-105" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-white shadow-xl rounded-2xl p-4 border border-gray-100"
              >
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-xs text-gray-500 font-medium">Years in Service</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-white shadow-xl rounded-2xl p-4 border border-gray-100"
              >
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-xs text-gray-500 font-medium">Happy Customers</div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Born from a Vision of a{" "}
                <span className="text-green-600">Cleaner, Greener India</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Every electronic device has a lifecycle. When that lifecycle ends, responsible disposal becomes just as important as responsible manufacturing. Right Ewaste Recycle Private Limited was established with a simple vision — to ensure that obsolete electronics never become an environmental burden.
                </p>
                <p>
                  As technology continues to evolve, millions of electronic devices are discarded every year. Our purpose is to bridge the gap between technological progress and environmental responsibility by providing safe, compliant, and sustainable recycling solutions.
                </p>
                <p>
                  Through responsible collection, certified recycling, and resource recovery, we aim to contribute towards a cleaner environment and a more circular economy — one device at a time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 my-7">
                {[
                  { icon: ShieldCheck, label: "PCB Authorized Recycler" },
                  { icon: Leaf, label: "Zero Landfill Policy" },
                  { icon: Award, label: "Certified Data Destruction" },
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

              <Link
                href="/process"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Discover Our Journey <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision ── */}
      <section className="py-16 lg:py-24 subtle-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Mission & Vision"
            title="Our Purpose &"
            titleHighlight="Direction"
            description="Two guiding principles that shape every decision we make and every service we deliver."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                borderColor: "border-green-500",
                iconBg: "bg-green-600",
                gradientLight: "from-green-50",
                text: "Our mission is to provide secure, transparent, and environmentally responsible e-waste recycling solutions that help individuals and organizations dispose of electronic waste safely while protecting natural resources and meeting all regulatory requirements.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                borderColor: "border-blue-500",
                iconBg: "bg-blue-600",
                gradientLight: "from-blue-50",
                text: "Our vision is to become one of India's most trusted e-waste recycling companies by promoting sustainable practices, innovation, and environmental awareness — ensuring no electronic device ends up harming our planet.",
              },
              {
                icon: Heart,
                title: "Our Purpose",
                borderColor: "border-red-400",
                iconBg: "bg-red-500",
                gradientLight: "from-red-50",
                text: "To bridge the gap between technology consumption and environmental responsibility — creating a circular economy where electronic waste becomes a valuable resource, not a pollutant damaging communities and ecosystems.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-white rounded-2xl p-8 shadow-sm border-t-4 ${item.borderColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-md`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Core Values ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Values"
            title="The Principles That"
            titleHighlight="Guide Us"
            description="Our values define who we are, how we deliver every service, and why clients trust us."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${v.border} hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 ${v.bg} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-bold text-gray-900 mb-2 group-hover:${v.color} transition-colors`}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose Right Ewaste ── */}
      <section className="py-16 lg:py-24 subtle-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text side */}
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
                Why Choose{" "}
                <span className="text-green-600">Right Ewaste?</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We combine regulatory compliance, security, and genuine environmental care to deliver e-waste recycling that businesses and individuals can trust completely.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseFeatures.map((f, i) => (
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

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-800 to-blue-950 aspect-square shadow-2xl group">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
                  <ShieldCheck className="w-28 h-28 mb-3" />
                  <p className="text-sm">Professional Team at Work</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                    <p className="text-white text-sm font-semibold">✓ Certified & Government Authorized</p>
                    <p className="text-blue-300 text-xs mt-1">CPCB & State PCB Authorized Recycler</p>
                  </div>
                </div>
              </div>

              {/* Decorative card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -left-5 bg-white shadow-xl rounded-2xl p-4 border border-gray-100"
              >
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

      {/* ── 6. Company Highlights ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Company Highlights"
            title="Our Impact"
            titleHighlight="in Numbers"
            description="A snapshot of the work we've done and the trust we've earned."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${h.light} rounded-2xl p-5 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className={`w-10 h-10 ${h.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <div className={`text-3xl font-bold ${h.text} leading-tight`}>
                  <AnimatedCounter target={h.value} suffix={h.suffix} />
                  {h.unit && <span className="text-base font-semibold ml-0.5">{h.unit}</span>}
                </div>
                <div className="text-gray-700 font-semibold text-xs mt-1.5">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Our Commitment ── */}
      <section className="py-16 lg:py-24 hero-gradient relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Committed to the{" "}
                <span className="text-green-400">Planet & Our Clients</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  At Right Ewaste Recycle Private Limited, every electronic device we receive represents an opportunity to reduce environmental impact. We are committed to ensuring that electronic waste is handled responsibly, valuable resources are recovered efficiently, and hazardous materials are disposed of in accordance with environmental standards.
                </p>
                <p>
                  Our commitment extends beyond recycling — we aim to build awareness, encourage sustainable practices, and contribute to a cleaner and greener future for all communities across India.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {[
                  "Zero Landfill Policy",
                  "Fully Government Authorized",
                  "Transparent Reporting",
                  "Pan-India Coverage",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Commitment visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Our Environmental Promise</h3>
                  <p className="text-gray-300 text-sm mt-2">Every device recycled counts.</p>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "E-Waste Safely Processed", value: "250+ Tons", bar: 75 },
                    { label: "Devices Responsibly Recycled", value: "50,000+", bar: 85 },
                    { label: "CO₂ Emissions Avoided", value: "125+ Tons", bar: 60 },
                    { label: "Materials Recovered", value: "80+ Tons", bar: 70 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="text-green-400 font-semibold">{item.value}</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.bar}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-green-400 rounded-full"
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

      {/* ── 8. Why Responsible Recycling Matters ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why It Matters"
            title="Why Responsible E-Waste"
            titleHighlight="Recycling Matters"
            description="Understanding the scale of the problem is the first step toward building a sustainable solution."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMattersCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${card.light} rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-bold ${card.text} text-base mb-3`}>{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Timeline ── */}
      <section className="py-16 lg:py-24 subtle-green-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title="From Startup to"
            titleHighlight="Industry Leader"
            description="Key milestones on our path from a small collection center to a pan-India certified recycling operation."
          />

          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-green-400 to-green-300 md:-translate-x-px" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-4 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[18px] md:left-1/2 w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-md md:-translate-x-2.5 translate-y-2 z-10 flex items-center justify-center" />

                  <div className={`md:w-1/2 pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all"
                    >
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-xl">{item.icon}</span>
                        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1.5">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>

                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. About Page CTA ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden hero-gradient rounded-3xl px-8 py-16 sm:px-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }} />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Let's Collaborate
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Let's Build a Sustainable Future Together
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                Whether you're an individual, business, educational institution, or government organization, Right Ewaste Recycle Private Limited is here to help you recycle electronic waste responsibly and compliantly.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all hover:-translate-y-0.5"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base backdrop-blur-sm transition-all hover:-translate-y-0.5"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
