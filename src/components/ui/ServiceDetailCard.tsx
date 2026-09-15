import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { cn } from "@/lib/cn";

export function ServiceDetailCard({
  abbr,
  tone = "red",
  title,
  description,
  checklist,
  metaLabel,
  metaText,
  href,
}: {
  abbr: string;
  tone?: "red" | "dark";
  title: string;
  description: string;
  checklist: string[];
  metaLabel: string;
  metaText: string;
  href: string;
}) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-white",
            tone === "dark" ? "bg-ink" : "bg-brand-700"
          )}
        >
          {abbr}
        </span>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

      <ul className="mt-4 space-y-2">
        {checklist.map((item) => (
          <CheckListItem key={item}>{item}</CheckListItem>
        ))}
      </ul>

      <div className="mt-4 flex-1 rounded-lg bg-slate-50 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
          {metaLabel}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-ink/70">{metaText}</p>
      </div>

      <Button
        href={href}
        variant="secondary"
        trailingIcon={<ChevronRight className="h-4 w-4" />}
        className="mt-4 w-full justify-between"
      >
        Learn more
      </Button>
    </Card>
  );
}
