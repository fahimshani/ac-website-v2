import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { GetInTouchSection } from "@/components/sections/contact/GetInTouchSection";
import { OfficeLocationsSection } from "@/components/sections/contact/OfficeLocationsSection";

export const metadata: Metadata = {
  title: "Contact Us | Anchorage Chambers",
  description:
    "Get in touch with Anchorage Chambers. Our dedicated team is here to help — whether you're managing your IVA, a creditor with a query, or looking for financial guidance.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        label="Get in Touch"
        title="We'd Love to Hear From You"
        description="Our dedicated team is here to help — whether you're managing your IVA, a creditor with a query, or simply looking for financial guidance. Reach us through any channel."
      />
      <GetInTouchSection />
      <OfficeLocationsSection />
    </>
  );
}
