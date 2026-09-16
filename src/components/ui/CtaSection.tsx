import { Container } from "@/components/ui/Container";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function CtaSection({
  eyebrow,
  title,
  description,
  align = "center",
  primaryLabel,
  primaryHref,
  primaryIcon,
  secondaryLabel,
  secondaryHref,
  secondaryIcon,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "center" | "split";
  primaryLabel: string;
  primaryHref: string;
  primaryIcon?: ButtonProps["icon"];
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryIcon?: ButtonProps["icon"];
}) {
  const buttons = (
    <>
      <Button href={primaryHref} variant="inverse" icon={primaryIcon}>
        {primaryLabel}
      </Button>
      {secondaryLabel && secondaryHref && (
        <Button href={secondaryHref} variant="outlineLight" icon={secondaryIcon}>
          {secondaryLabel}
        </Button>
      )}
    </>
  );

  return (
    <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-16 sm:py-20">
      <Container>
        {align === "split" ? (
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {eyebrow && <SectionLabel tone="light">{eyebrow}</SectionLabel>}
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                {description}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">{buttons}</div>
          </Reveal>
        ) : (
          <Reveal className={cn("mx-auto max-w-xl text-center")}>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-100">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">{description}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">{buttons}</div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
