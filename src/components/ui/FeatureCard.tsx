import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function FeatureCard({
  icon,
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Learn more",
}: {
  icon: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <Card className="flex h-full flex-col p-6">
      <IconTile icon={icon} tone="light" />
      {eyebrow && (
        <p className="mt-4 text-xs font-semibold text-brand-700">{eyebrow}</p>
      )}
      <h3 className={eyebrow ? "mt-1 text-base font-bold text-ink" : "mt-4 text-base font-bold text-ink"}>
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      {href && (
        <LinkArrow href={href} className="mt-4">
          {linkLabel}
        </LinkArrow>
      )}
    </Card>
  );
}
