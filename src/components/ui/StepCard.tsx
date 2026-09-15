import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";

export function StepCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Card className="relative h-full p-6">
      <span className="absolute right-5 top-5 text-2xl font-bold text-brand-100">
        {number}
      </span>
      <IconTile icon={icon} tone="light" />
      <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </Card>
  );
}
