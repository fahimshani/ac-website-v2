import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Badge } from "@/components/ui/Badge";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function ServiceCard({
  icon,
  title,
  tags,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  tags: string[];
  description: string;
  href: string;
}) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start gap-4">
        <IconTile icon={icon} tone="light" />
        <div>
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge key={tag} variant="tag">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>

      <LinkArrow href={href} className="mt-5">
        Find Out More
      </LinkArrow>
    </Card>
  );
}
