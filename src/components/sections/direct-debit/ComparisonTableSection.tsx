import { CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CenteredHeading } from "@/components/ui/CenteredHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { comparisonRows } from "@/lib/direct-debit-data";

export function ComparisonTableSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <CenteredHeading
              label="Compare Your Options"
              title="Direct Debit vs card payment"
              description="See why Direct Debit is the better choice for your monthly IVA payments."
            />
          </StaggerItem>

          <StaggerItem className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-black/5">
                    <th className="w-1/2 p-5 text-left font-medium text-muted" />
                    <th className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="font-bold text-brand-700">Direct Debit</span>
                        <Badge variant="outlineDark" className="text-[10px]">
                          Recommended
                        </Badge>
                      </div>
                    </th>
                    <th className="p-5 text-center font-bold text-muted">
                      Card payment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 1 ? "bg-brand-50/40" : undefined}
                    >
                      <td className="p-5 text-ink/80">{row.label}</td>
                      <td className="p-5 text-center">
                        {row.dd ? (
                          <CheckCircle2 className="mx-auto h-5 w-5 text-brand-700" />
                        ) : (
                          <XCircle className="mx-auto h-5 w-5 text-muted/40" />
                        )}
                      </td>
                      <td className="p-5 text-center">
                        {row.card ? (
                          <CheckCircle2 className="mx-auto h-5 w-5 text-muted" />
                        ) : (
                          <XCircle className="mx-auto h-5 w-5 text-muted/40" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </StaggerItem>

          <StaggerItem className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-6 text-center sm:flex-row sm:text-left">
            <p className="text-sm leading-relaxed text-muted">
              You can continue making payments online as normal. For a
              simpler, more reliable monthly experience, we recommend
              switching to Direct Debit via GoCardless.
            </p>
            <Button href="/direct-debit/setup" className="shrink-0">
              Set Up Direct Debit
            </Button>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
