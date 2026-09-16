import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Badge } from "@/components/ui/Badge";
import { LinkArrow } from "@/components/ui/LinkArrow";
import type { PolicyResource } from "@/lib/resources-data";

export function PolicyCard({ resource }: { resource: PolicyResource }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <IconTile icon={resource.icon} tone="light" />
      <Badge variant="tag" className="mt-3 self-start">
        {resource.category}
      </Badge>

      <h3 className="mt-2 text-base font-bold text-ink">{resource.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {resource.description}
      </p>

      <LinkArrow href={resource.href} className="mt-4">
        Read Policy
      </LinkArrow>
    </Card>
  );
}
