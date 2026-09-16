import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Badge } from "@/components/ui/Badge";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function ContactMethodCard({
  icon,
  badge,
  title,
  description,
  linkLabel,
  href,
}: {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between">
        <IconTile icon={icon} tone="light" />
        <Badge variant="outlineDark" className="text-[10px]">
          {badge}
        </Badge>
      </div>
      <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      <LinkArrow href={href} className="mt-4">
        {linkLabel}
      </LinkArrow>
    </Card>
  );
}
