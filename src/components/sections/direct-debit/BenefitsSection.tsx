import { Container } from "@/components/ui/Container";
import { CenteredHeading } from "@/components/ui/CenteredHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { ddBenefits } from "@/lib/direct-debit-data";

export function BenefitsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <CenteredHeading
              label="Direct Debit Benefits"
              title="Why pay by Direct Debit?"
              description="The simplest, most reliable way to keep your IVA on track."
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ddBenefits.map((benefit) => (
              <StaggerItem key={benefit.title} className="h-full">
                <FeatureCard {...benefit} href="#faq" />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
