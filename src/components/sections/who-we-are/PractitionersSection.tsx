import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { PractitionerCard } from "@/components/ui/PractitionerCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { practitioners } from "@/lib/who-we-are-data";

export function PractitionersSection() {
  return (
    <section id="practitioners" className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionLabel>Insolvency practitioners</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Licensed practitioners
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              Every IVA and formal insolvency case at Anchorage is supervised
              by a Licensed Insolvency Practitioner regulated by ICAEW.
            </p>
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {practitioners.map((practitioner) => (
              <StaggerItem key={practitioner.name} className="h-full">
                <PractitionerCard {...practitioner} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
