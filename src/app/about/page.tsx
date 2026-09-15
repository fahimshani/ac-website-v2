import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { OriginSection } from "@/components/sections/about/OriginSection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { aboutHeroStats } from "@/lib/about-data";

export const metadata: Metadata = {
  title: "About Us | Anchorage Chambers",
  description:
    "Supporting people through financial difficulty since 2014. From a small Salford office to a global team of 90+ professionals across three continents.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        label="About Anchorage Chambers"
        title="Supporting people since 2014."
        description="We began as a team of three in Salford Quays. A decade later, 90+ professionals across three continents share one mission — helping individuals navigate debt with clarity and dignity."
        stats={aboutHeroStats}
      />
      <OriginSection />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
