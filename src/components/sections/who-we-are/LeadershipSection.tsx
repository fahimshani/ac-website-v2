import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { LeadershipCard } from "@/components/ui/LeadershipCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { leadership } from "@/lib/who-we-are-data";

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionLabel>Corporate leadership</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              The leadership team
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
              Our directors and leads bring decades of combined experience in
              insolvency, compliance and financial services.
            </p>
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {leadership.map((leader) => (
              <StaggerItem key={leader.name} className="h-full">
                <LeadershipCard {...leader} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
