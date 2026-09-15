import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { OfficeMap } from "@/components/ui/OfficeMap";
import { Reveal } from "@/components/motion/Reveal";
import { offices } from "@/lib/contact-data";

export function OfficeLocationsSection() {
  return (
    <section id="offices" className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionLabel>Global Presence</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Our Office Locations
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            Our offices offer a global presence, nationwide scope, and local
            expertise through our offices across the UK, Asia, and Southern
            Africa.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <OfficeMap offices={offices} />
        </Reveal>
      </Container>
    </section>
  );
}
