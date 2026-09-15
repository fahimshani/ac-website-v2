import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCategorySection } from "@/components/sections/services/ServiceCategorySection";
import { IvaProcessSection } from "@/components/sections/services/IvaProcessSection";
import { TrustStatsSection } from "@/components/sections/services/TrustStatsSection";
import { CtaSection } from "@/components/ui/CtaSection";
import { personalServices, corporateServices } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services | Anchorage Chambers",
  description:
    "Practical, ethical insolvency solutions for individuals and businesses — from Individual Voluntary Arrangements to Company Voluntary Arrangements and formal liquidation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
        label="Insolvency Specialists"
        title="The right solution for your situation."
        description="Whether you're an individual overwhelmed by debt or a business facing insolvency, we provide practical, ethical routes forward — without judgement."
      />

      <ServiceCategorySection
        id="personal"
        label="Personal Insolvency"
        title="For individuals & sole traders"
        description="When personal debt becomes unmanageable, we help you understand your options and find the right formal route forward."
        pillLabel="Free advice"
        pillHref="/get-help"
        services={personalServices}
      />

      <ServiceCategorySection
        id="corporate"
        bg="slate"
        label="Corporate Insolvency"
        title="For companies & businesses"
        description="From restructuring to an orderly wind-down, we guide directors through every formal insolvency process."
        pillLabel="Talk to an IP"
        pillHref="/contact"
        services={corporateServices}
      />

      <IvaProcessSection />
      <TrustStatsSection />

      <CtaSection
        eyebrow="Work with us"
        title="Ready to speak to our team?"
        description="Our advisors are available Monday to Friday, 9am-5pm. Free, confidential and without judgement."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        primaryIcon={<MessageCircle className="h-4 w-4" />}
        secondaryLabel="0800 XXX XXXX"
        secondaryHref="tel:0800XXXXXX"
        secondaryIcon={<Phone className="h-4 w-4" />}
      />
    </>
  );
}
