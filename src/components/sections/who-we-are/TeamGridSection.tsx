import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TeamGrid } from "@/components/ui/TeamGrid";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { infoCards } from "@/lib/who-we-are-data";

export function TeamGridSection() {
  return (
    <section id="team" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionLabel>Key team members</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The team behind every case
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            From Salford to Islamabad to Durban — our people work across time
            zones to ensure every client gets the support they need.
          </p>
        </Reveal>

        <Reveal className="mt-8" delay={0.1}>
          <TeamGrid />
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {infoCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <FeatureCard {...card} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
