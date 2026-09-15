import { BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

export function PractitionerCard({
  initials,
  name,
  credential,
  bio,
  tags,
}: {
  initials: string;
  name: string;
  credential: string;
  bio: string;
  tags: string[];
}) {
  return (
    <Card className="h-full">
      <div className="flex items-start gap-4">
        <Avatar initials={initials} shape="square" size="lg" />
        <div>
          <h3 className="text-lg font-bold text-ink">{name}</h3>
          <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-brand-700">
            <BadgeCheck className="h-3.5 w-3.5" />
            {credential}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{bio}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag} variant="tag">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
