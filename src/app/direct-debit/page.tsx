import type { Metadata } from "next";
import { DirectDebitHero } from "@/components/sections/direct-debit/DirectDebitHero";
import { GoCardlessBanner } from "@/components/sections/direct-debit/GoCardlessBanner";
import { BenefitsSection } from "@/components/sections/direct-debit/BenefitsSection";
import { ComparisonTableSection } from "@/components/sections/direct-debit/ComparisonTableSection";
import { CompareCardsSection } from "@/components/sections/direct-debit/CompareCardsSection";
import { SetupProcessSection } from "@/components/sections/direct-debit/SetupProcessSection";
import { SecuritySection } from "@/components/sections/direct-debit/SecuritySection";
import { DDTestimonialsSection } from "@/components/sections/direct-debit/DDTestimonialsSection";
import { FaqSection } from "@/components/sections/direct-debit/FaqSection";

export const metadata: Metadata = {
  title: "Direct Debit | Anchorage Chambers",
  description:
    "Set up a secure monthly Direct Debit for your IVA payments in minutes. Nothing changes in your arrangement — just the way you pay.",
};

export default function DirectDebitPage() {
  return (
    <>
      <DirectDebitHero />
      <GoCardlessBanner />
      <BenefitsSection />
      <ComparisonTableSection />
      <CompareCardsSection />
      <SetupProcessSection />
      <SecuritySection />
      <DDTestimonialsSection />
      <FaqSection />
    </>
  );
}
