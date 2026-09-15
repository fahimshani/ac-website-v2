import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "light";
}) {
  return (
    <div
      className={cn(
        "mb-3 flex items-center gap-2 text-sm font-semibold",
        tone === "brand" ? "text-brand-700" : "text-brand-100"
      )}
    >
      <span
        className={cn(
          "inline-block h-3.5 w-1 rounded-full",
          tone === "brand" ? "bg-brand-700" : "bg-brand-100"
        )}
      />
      {children}
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  action,
  tone = "brand",
  className,
}: {
  label: string;
  title: ReactNode;
  action?: ReactNode;
  tone?: "brand" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div>
        <SectionLabel tone={tone}>{label}</SectionLabel>
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            tone === "brand" ? "text-ink" : "text-white"
          )}
        >
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
