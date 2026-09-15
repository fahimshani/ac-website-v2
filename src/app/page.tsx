import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutVision } from "@/components/sections/AboutVision";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IvaExplainedSection } from "@/components/sections/IvaExplainedSection";
import { TrainingPartnersSection } from "@/components/sections/TrainingPartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { MoneyHelperBanner } from "@/components/sections/MoneyHelperBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutVision />
      <ServicesSection />
      <IvaExplainedSection />
      <TrainingPartnersSection />
      <TestimonialsSection />
      <NewsSection />
      <MoneyHelperBanner />
    </>
  );
}
