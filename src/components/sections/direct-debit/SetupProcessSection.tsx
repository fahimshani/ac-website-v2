import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CenteredHeading } from "@/components/ui/CenteredHeading";
import { StepCard } from "@/components/ui/StepCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { setupSteps } from "@/lib/direct-debit-data";

export function SetupProcessSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <CenteredHeading
              label="Setup Process"
              title="How it works"
              description="Setting up your Direct Debit takes less than 3 minutes — we guide you through every step."
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {setupSteps.map((step) => (
              <StaggerItem key={step.number} className="h-full">
                <StepCard {...step} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>

      <div className="mt-10">
        <CtaBanner
          title="Ready to set up your Direct Debit?"
          description="Takes less than 3 minutes. Nothing about your IVA changes."
          meta={
            <>
              <ShieldCheck className="h-3.5 w-3.5" /> Secured by GoCardless
            </>
          }
          buttonLabel="Set Up Direct Debit"
          buttonHref="/direct-debit/setup"
        />
      </div>
    </section>
  );
}
