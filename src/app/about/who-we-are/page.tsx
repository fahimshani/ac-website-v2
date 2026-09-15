import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { LeadershipSection } from "@/components/sections/who-we-are/LeadershipSection";
import { PractitionersSection } from "@/components/sections/who-we-are/PractitionersSection";
import { TeamGridSection } from "@/components/sections/who-we-are/TeamGridSection";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = {
  title: "Who We Are | Anchorage Chambers",
  description:
    "Meet the leadership team, licensed insolvency practitioners and support staff behind Anchorage Chambers, working across the UK, Asia and Southern Africa.",
};

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Who We Are" }]}
        label="About Anchorage Chambers"
        title="The people behind the work."
        description="Anchorage Chambers is built on a team of experienced insolvency practitioners, compliance specialists and support professionals — united by a shared commitment to treating every client with dignity and expertise."
      />
      <LeadershipSection />
      <PractitionersSection />
      <TeamGridSection />
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
