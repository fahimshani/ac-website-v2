import { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function CenteredHeading({
  label,
  title,
  description,
  tone = "brand",
  className,
}: {
  label: string;
  title: ReactNode;
  description?: string;
  tone?: "brand" | "light";
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <div className="flex justify-center">
        <SectionLabel tone={tone}>{label}</SectionLabel>
      </div>
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "brand" ? "text-ink" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "brand" ? "text-muted" : "text-white/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
