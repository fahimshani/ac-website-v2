import { Container } from "@/components/ui/Container";
import { CenteredHeading } from "@/components/ui/CenteredHeading";
import { StepCard } from "@/components/ui/StepCard";
import { Button } from "@/components/ui/Button";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { ivaProcessSteps, ivaKeyFacts } from "@/lib/services-data";

export function IvaProcessSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <CenteredHeading
              label="Our most popular service"
              title="How an IVA works"
              description="An Individual Voluntary Arrangement is the most widely used debt solution for people with unmanageable unsecured debt. Here's what to expect."
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ivaProcessSteps.map((step) => (
              <StaggerItem key={step.number} className="h-full">
                <StepCard {...step} />
              </StaggerItem>
            ))}
          </div>

          <StaggerItem className="mt-6 rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-100">
                  Key facts about IVAs
                </p>
                <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-4">
                  {ivaKeyFacts.map((fact) => (
                    <div key={fact.label}>
                      <p className="text-xl font-bold text-white">{fact.value}</p>
                      <p className="text-xs text-white/60">{fact.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:w-64">
                <Button href="/get-help" variant="inverse">
                  Start free consultation
                </Button>
                <Button href="/services/iva/faqs" variant="outlineLight">
                  IVA FAQs
                </Button>
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
