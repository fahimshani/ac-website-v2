import { ShieldCheck, CreditCard, ArrowRight, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { LogoMark } from "@/components/ui/LogoMark";
import { SetUpDirectDebitButton } from "@/components/direct-debit-setup/SetUpDirectDebitButton";
import { MakePaymentButton } from "@/components/online-payment/MakePaymentButton";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

const safeChecks = [
  "Your IVA remains exactly the same",
  "Your payment amount is the same",
  "Your collection date stays the same",
  "Your Insolvency Practitioner is the same",
  "Your IVA terms remain the same",
];

export function DirectDebitHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
      <LogoMark
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-white/5 md:block"
      />

      <StaggerGroup amount={0.1} className="relative">
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <StaggerItem className="flex flex-wrap gap-2">
              <Badge variant="solidLight" icon={<ShieldCheck className="h-3.5 w-3.5" />}>
                FCA Regulated
              </Badge>
              <Badge variant="solidLight" icon={<BadgeCheck className="h-3.5 w-3.5" />}>
                ICAEW Licensed
              </Badge>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Make your IVA payments{" "}
                <span className="text-brand-100">simpler and stress-free.</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Set up a secure monthly Direct Debit in minutes. Nothing
                changes in your IVA — just the way you pay.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-8 flex flex-wrap gap-3">
              <SetUpDirectDebitButton variant="inverse" icon={<CreditCard className="h-4 w-4" />} />
              <MakePaymentButton variant="outlineLight" icon={<ArrowRight className="h-4 w-4" />}>
                Continue to online payment
              </MakePaymentButton>
            </StaggerItem>

            <StaggerItem className="mt-9 flex flex-wrap items-center gap-4">
              <Rating />
              <div className="flex items-center">
                <Avatar initials="SM" size="sm" className="border-2 border-brand-800" />
                <Avatar initials="JT" size="sm" className="-ml-2 border-2 border-brand-800" />
                <Avatar initials="PL" size="sm" className="-ml-2 border-2 border-brand-800" />
              </div>
              <span className="text-sm text-white/70">
                2,000+ customers · Takes under 3 minutes
              </span>
            </StaggerItem>
          </div>

          <StaggerItem className="rounded-2xl bg-white p-6 shadow-xl shadow-brand-950/30 sm:p-7">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-ink">Your Arrangement Is Safe</p>
                <p className="text-sm text-muted">
                  Switching changes nothing about your IVA terms.
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3 border-t border-black/5 pt-5">
              {safeChecks.map((item) => (
                <CheckListItem key={item}>{item}</CheckListItem>
              ))}
            </ul>

            <p className="mt-5 rounded-xl bg-brand-50 px-4 py-3 text-xs leading-relaxed text-brand-700">
              We&apos;re simply making your payments simpler — nothing else
              changes.
            </p>
          </StaggerItem>
        </Container>
      </StaggerGroup>
    </section>
  );
}
