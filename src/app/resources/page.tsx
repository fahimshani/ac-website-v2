import type { Metadata } from "next";
import { Phone, ListChecks } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ResourcesExplorer } from "@/components/sections/resources/ResourcesExplorer";
import { CtaSection } from "@/components/ui/CtaSection";
import { MoneyHelperBanner } from "@/components/sections/MoneyHelperBanner";

export const metadata: Metadata = {
  title: "Resources & Policies | Anchorage Chambers",
  description:
    "Access guides, regulatory documents, policies, and important customer information — all in one place.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources & Policies" }]}
        label="Resource Hub"
        title="Resources & Policies"
        description="Access guides, regulatory documents, policies, and important customer information — all in one place."
      />
      <ResourcesExplorer />
      <CtaSection
        eyebrow="Need Guidance?"
        title="Need help understanding these documents?"
        description="Our experienced team of insolvency practitioners can walk you through any of these guides and explain what they mean for your specific situation."
        align="split"
        primaryLabel="Contact Us"
        primaryHref="/contact"
        primaryIcon={<Phone className="h-4 w-4" />}
        secondaryLabel="Browse Help Centre"
        secondaryHref="/get-help"
        secondaryIcon={<ListChecks className="h-4 w-4" />}
      />
      <MoneyHelperBanner />
    </>
  );
}
