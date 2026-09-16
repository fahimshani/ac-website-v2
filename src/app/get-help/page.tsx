import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FaqJumpNav } from "@/components/sections/get-help/FaqJumpNav";
import { FaqCategoriesSection } from "@/components/sections/get-help/FaqCategoriesSection";
import { OtherWaysSection } from "@/components/sections/get-help/OtherWaysSection";

export const metadata: Metadata = {
  title: "Help Center | Anchorage Chambers",
  description:
    "Browse answers to common questions about IVAs, bankruptcy, and Direct Debit payments — or reach out to our team directly.",
};

export default function GetHelpPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Get Help" }]}
        label="Help Centre"
        title="How can we help you?"
        description="Browse answers to common questions about IVAs, bankruptcy, and Direct Debit payments — or reach out to our team directly."
      />
      <FaqJumpNav />
      <FaqCategoriesSection />
      <OtherWaysSection />
    </>
  );
}
