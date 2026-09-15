import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "solid" | "light" | "onDark";
type Size = "sm" | "md" | "lg";

const toneClasses: Record<Tone, string> = {
  solid: "bg-brand-700 text-white",
  light: "bg-brand-50 text-brand-700",
  onDark: "bg-white/10 text-white",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 w-9 rounded-lg [&>svg]:h-4 [&>svg]:w-4",
  md: "h-12 w-12 rounded-xl [&>svg]:h-5 [&>svg]:w-5",
  lg: "h-14 w-14 rounded-2xl [&>svg]:h-6 [&>svg]:w-6",
};

export function IconTile({
  icon: Icon,
  tone = "light",
  size = "md",
  className,
}: {
  icon: LucideIcon;
  tone?: Tone;
  size?: Size;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        toneClasses[tone],
        sizeClasses[size],
        className
      )}
    >
      <Icon strokeWidth={2} />
    </div>
  );
}
