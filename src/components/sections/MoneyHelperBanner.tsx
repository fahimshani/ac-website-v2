import { Landmark } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function MoneyHelperBanner() {
  return (
    <section className="border-y border-black/5 bg-white py-8">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex shrink-0 items-center gap-2 text-lg font-bold text-ink">
            <Landmark className="h-5 w-5 text-brand-700" />
            MoneyHelper
          </div>
          <p className="text-sm leading-relaxed text-muted">
            MoneyHelper joins up money and pensions guidance to make it
            quicker and easier to find the right help. MoneyHelper brings
            together the support and services of three government-backed
            financial guidance providers: the Money Advice Service, the
            Pensions Advisory Service and Pension Wise.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
