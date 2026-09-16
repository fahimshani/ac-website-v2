import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button, type ButtonProps } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

interface CtaBannerBaseProps {
  title: string;
  description: string;
  meta?: ReactNode;
}

type CtaBannerProps =
  | (CtaBannerBaseProps & {
      buttonLabel: string;
      buttonHref: string;
      buttonIcon?: ButtonProps["icon"];
      buttonSlot?: undefined;
    })
  | (CtaBannerBaseProps & {
      buttonLabel?: undefined;
      buttonHref?: undefined;
      buttonIcon?: undefined;
      buttonSlot: ReactNode;
    });

export function CtaBanner({
  title,
  description,
  meta,
  buttonLabel,
  buttonHref,
  buttonIcon,
  buttonSlot,
}: CtaBannerProps) {
  return (
    <Container>
      <Reveal className="flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-6 py-8 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{description}</p>
          {meta && (
            <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-white/60 sm:justify-start">
              {meta}
            </div>
          )}
        </div>
        {buttonSlot ?? (
          <Button href={buttonHref} variant="inverse" icon={buttonIcon} className="shrink-0">
            {buttonLabel}
          </Button>
        )}
      </Reveal>
    </Container>
  );
}
