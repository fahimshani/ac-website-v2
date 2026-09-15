import { cn } from "@/lib/cn";

const sizeClasses = {
  sm: "h-7 w-7 text-[11px]",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-lg",
};

const toneClasses = {
  light: "bg-brand-100 text-brand-700 ring-2 ring-white",
  onDark: "bg-white/15 text-white ring-2 ring-white/20",
};

export function Avatar({
  initials,
  size = "md",
  shape = "circle",
  tone = "light",
  className,
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
  tone?: "light" | "onDark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center font-semibold",
        shape === "circle" ? "rounded-full" : "rounded-xl",
        sizeClasses[size],
        toneClasses[tone],
        className
      )}
    >
      {initials}
    </span>
  );
}
