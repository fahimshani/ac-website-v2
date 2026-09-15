import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function TrainingPartnerCard({
  name,
  tags,
  description,
}: {
  name: string;
  tags: string[];
  description: string;
}) {
  return (
    <Card className="h-full">
      <Badge variant="outlineDark" className="font-semibold">
        {name}
      </Badge>
      <h3 className="mt-3 text-lg font-bold text-ink">{name}</h3>

      {description.split("\n\n").map((paragraph, i) => (
        <p key={i} className="mt-3 text-sm leading-relaxed text-muted">
          {paragraph}
        </p>
      ))}

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
