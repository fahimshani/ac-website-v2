import { CreditCard, Wallet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CenteredHeading } from "@/components/ui/CenteredHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { SetUpDirectDebitButton } from "@/components/direct-debit-setup/SetUpDirectDebitButton";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { comparisonRows } from "@/lib/direct-debit-data";

export function CompareCardsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <CenteredHeading
              label="Variant A · Overlay Cards"
              title="Direct Debit vs card payment"
              description="See why Direct Debit is the better choice for your monthly IVA payments."
            />
          </StaggerItem>

          <div className="relative mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 sm:items-stretch">
            <StaggerItem className="h-full">
              <Card className="flex h-full flex-col border-2 border-brand-700 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white">
                    <CreditCard className="h-5 w-5" />
                    <span className="font-bold">Direct Debit</span>
                  </div>
                  <Badge variant="solidLight" className="text-[10px]">
                    Recommended
                  </Badge>
                </div>

                <ul className="mt-5 flex-1 space-y-3">
                  {comparisonRows.map((row) => (
                    <CheckListItem key={row.label} tone="dark">
                      {row.label}
                    </CheckListItem>
                  ))}
                </ul>

                <SetUpDirectDebitButton variant="inverse" className="mt-6 w-full" />
              </Card>
            </StaggerItem>

            <span className="absolute left-1/2 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white text-xs font-bold text-muted shadow-sm sm:flex">
              VS
            </span>

            <StaggerItem className="h-full">
              <Card className="flex h-full flex-col p-6">
                <div className="flex items-center gap-2 text-ink">
                  <Wallet className="h-5 w-5 text-muted" />
                  <span className="font-bold">Card Payment</span>
                </div>

                <ul className="mt-5 flex-1 space-y-3">
                  {comparisonRows.map((row) => (
                    <CheckListItem key={row.label} state={row.card ? "yes" : "no"}>
                      {row.label}
                    </CheckListItem>
                  ))}
                </ul>

                <Button href="/online-payment" variant="secondary" className="mt-6 w-full">
                  Continue paying by card
                </Button>
              </Card>
            </StaggerItem>
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
