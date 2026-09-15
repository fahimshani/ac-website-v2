import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { securityFeatures } from "@/lib/direct-debit-data";

const assurances = [
  "Powered by GoCardless",
  "FCA & ICAEW Regulated",
  "2,000+ customers protected",
];

export function SecuritySection() {
  return (
    <section className="bg-brand-50 py-16 sm:py-24">
      <Container>
        <StaggerGroup className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <StaggerItem>
            <SectionLabel>Your Security</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Safe. Secure. Protected.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We take the security of your payments and personal data
              seriously. Here&apos;s how we keep you safe.
            </p>

            <ul className="mt-6 space-y-2.5">
              {assurances.map((item) => (
                <CheckListItem key={item}>{item}</CheckListItem>
              ))}
            </ul>
          </StaggerItem>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {securityFeatures.map((feature) => (
              <StaggerItem key={feature.title} className="h-full">
                <FeatureCard {...feature} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
