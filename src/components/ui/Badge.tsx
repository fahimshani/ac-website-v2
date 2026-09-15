import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solidLight" | "outlineDark" | "tag" | "ribbon";

const variantClasses: Record<Variant, string> = {
  // small pill on a dark hero background
  solidLight: "bg-white/10 text-white border border-white/20",
  // small pill on a light background
  outlineDark: "bg-brand-50 text-brand-700 border border-brand-100",
  // tiny tag chip, e.g. IVA / DRO / Bankruptcy
  tag: "bg-brand-50 text-brand-700",
  // overlay label on an image/color block
  ribbon: "bg-white/15 text-white backdrop-blur-sm",
};

export function Badge({
  children,
  variant = "outlineDark",
  className,
  icon,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
