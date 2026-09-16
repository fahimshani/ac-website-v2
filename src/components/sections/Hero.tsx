import { Anchor, CreditCard, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SetUpDirectDebitButton } from "@/components/direct-debit-setup/SetUpDirectDebitButton";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

const trustBadges = ["FCA Regulated", "ICAEW Licensed", "IPA Member"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
      <svg
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-white/5 md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M50 10v80M25 25l25-15 25 15M20 68l30 17 30-17M50 34a16 16 0 100 32 16 16 0 000-32z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <StaggerGroup amount={0.1} className="relative">
        <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <StaggerItem>
              <Badge variant="solidLight" icon={<Anchor className="h-3.5 w-3.5" />}>
                Licensed Insolvency Practitioners
              </Badge>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Expert Debt Solutions, Tailored For You
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                We provide practical, ethical, and legally compliant routes
                out of debt — from Individual Voluntary Arrangements to
                corporate insolvency. Trusted by thousands across the UK,
                Asia and Southern Africa.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-8 flex flex-wrap gap-3">
              <Button href="/direct-debit" variant="inverse" icon={<CreditCard className="h-4 w-4" />}>
                Direct Debit Solutions
              </Button>
              <Button href="/online-payment" variant="outlineLight">
                Online Payment
              </Button>
            </StaggerItem>

            <StaggerItem className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {badge}
                </div>
              ))}
            </StaggerItem>
          </div>

          <StaggerItem className="rounded-2xl bg-white p-6 shadow-xl shadow-brand-950/30 sm:p-7">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-700">Direct Debit</p>
                <p className="text-lg font-bold text-ink">Set Up Payments</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Manage your IVA payments easily and securely. Set up or update
              your Direct Debit with Anchorage Chambers.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <SetUpDirectDebitButton className="w-full">
                Direct Debit Setup
              </SetUpDirectDebitButton>
              <Button href="/online-payment" variant="secondary" className="w-full">
                Online Payment
              </Button>
            </div>
          </StaggerItem>
        </Container>
      </StaggerGroup>
    </section>
  );
}
