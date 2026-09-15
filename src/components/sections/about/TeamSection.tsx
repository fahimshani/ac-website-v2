import { Container } from "@/components/ui/Container";
import { CenteredHeading } from "@/components/ui/CenteredHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { teamCards } from "@/lib/about-data";

export function TeamSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <CenteredHeading
              label="Our People"
              title="The team behind Anchorage Chambers"
              description="Our Insolvency Practitioners and support team bring decades of combined experience — all united by a commitment to empathetic, client-first guidance."
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {teamCards.map((card) => (
              <StaggerItem key={card.title} className="h-full">
                <FeatureCard {...card} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
