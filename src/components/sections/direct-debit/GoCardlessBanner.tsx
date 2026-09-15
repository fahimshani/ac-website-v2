import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function GoCardlessBanner() {
  return (
    <section className="bg-amber-300 py-3">
      <Container>
        <Reveal className="flex flex-wrap items-center justify-center gap-3 text-center text-sm">
          <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
            Introducing
          </span>
          <span className="font-semibold text-ink">
            A new way to pay by bank
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-ink/70">
            Powered by{" "}
            <span className="font-bold tracking-tight text-ink">
              GoCardless
            </span>
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
