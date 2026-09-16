import { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { LegalContents } from "@/components/sections/legal/LegalContents";
import { LegalSections, type LegalSection } from "@/components/sections/legal/LegalSections";

interface Crumb {
  label: string;
  href?: string;
}

export function LegalPageLayout({
  crumbs,
  label,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  crumbs: Crumb[];
  label: string;
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        label={label}
        title={title}
        description={`Last updated: ${lastUpdated}`}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="rounded-2xl border border-brand-100 bg-brand-50 p-5 text-sm leading-relaxed text-ink/80 sm:p-6">
            {intro}
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
            <LegalContents sections={sections} />
            <LegalSections sections={sections} />
          </div>
        </Container>
      </section>
    </>
  );
}
