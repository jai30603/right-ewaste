import HeroSection from "@/sections/HeroSection";
import TrustBadges from "@/sections/TrustBadges";
import StatsSection from "@/sections/StatsSection";
import AboutPreview from "@/sections/AboutPreview";
import ServicesPreview from "@/sections/ServicesPreview";
import IndustriesPreview from "@/sections/IndustriesPreview";
import EnvironmentalImpact from "@/sections/EnvironmentalImpact";
import ProcessPreview from "@/sections/ProcessPreview";
import NewsPreview from "@/sections/NewsPreview";
import GalleryPreview from "@/sections/GalleryPreview";
import DidYouKnow from "@/sections/DidYouKnow";
import Testimonials from "@/sections/Testimonials";
import CTASection from "@/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Right Ewaste Recycle | Certified E-Waste Recycling India",
  description:
    "India's trusted certified e-waste recycling company. Responsible recycling, secure data destruction, bulk pickup, and IT asset disposal for corporates, schools, hospitals, and government.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Trust Badges */}
      <TrustBadges />
      {/* 3. Statistics */}
      <StatsSection />
      {/* 4. About Preview */}
      <AboutPreview />
      {/* 5. Services */}
      <ServicesPreview />
      {/* 6. Industries */}
      <IndustriesPreview />
      {/* 7. Environmental Impact */}
      <EnvironmentalImpact />
      {/* 8. How We Work */}
      <ProcessPreview />
      {/* 9. Latest News */}
      <NewsPreview />
      {/* 10. Gallery */}
      <GalleryPreview />
      {/* 11. Did You Know */}
      <DidYouKnow />
      {/* 12. Testimonials */}
      <Testimonials />
      {/* 13. Contact CTA */}
      <CTASection />
    </>
  );
}
