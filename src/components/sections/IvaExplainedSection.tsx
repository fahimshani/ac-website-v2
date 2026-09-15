import { Clock, Users, PoundSterling, Repeat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MiniStatCard } from "@/components/ui/MiniStatCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { ivaSteps, ivaStats } from "@/lib/data";

const icons = [Clock, Users, PoundSterling, Repeat];

export function IvaExplainedSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <StaggerItem>
              <SectionLabel>IVA Explained</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                All About IVAs
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                An Individual Voluntary Arrangement (IVA) is a formal,
                legally binding agreement between you and your creditors to
                repay part of your debts over a set period. It&apos;s a
                powerful alternative to bankruptcy that lets you keep your
                assets while clearing unmanageable debt.
              </p>
            </StaggerItem>

            <ol className="mt-8 space-y-6">
              {ivaSteps.map((step) => (
                <StaggerItem key={step.number} as="li" className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    {step.number}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </ol>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {ivaStats.map((stat, i) => (
                <StaggerItem key={stat.label}>
                  <MiniStatCard icon={icons[i]} {...stat} />
                </StaggerItem>
              ))}
            </div>

            <StaggerItem className="mt-6 flex flex-wrap gap-3">
              <Button href="/services/iva/faqs">IVA FAQs</Button>
              <Button href="/get-help" variant="secondary">
                Get Free Advice
              </Button>
            </StaggerItem>
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
