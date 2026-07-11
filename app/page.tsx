import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import ServicesPreview from "@/sections/ServicesPreview";
import IndustriesPreview from "@/sections/IndustriesPreview";
import CTASection from "@/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Right Ewaste Recycle | Certified E-Waste Recycling India",
  description:
    "India's trusted certified e-waste recycling company. Responsible recycling, secure data destruction, bulk pickup, and IT asset disposal.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <ServicesPreview />
      <IndustriesPreview />
      <CTASection />
    </>
  );
}
