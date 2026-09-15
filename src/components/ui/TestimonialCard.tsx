import { Card } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";

export function TestimonialCard({
  quote,
  name,
  role,
  location,
  initials,
}: {
  quote: string;
  name: string;
  role?: string;
  location: string;
  initials?: string;
}) {
  return (
    <Card className="flex h-full flex-col">
      <Rating />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
        <div className="flex items-center gap-3">
          {initials && <Avatar initials={initials} size="sm" />}
          <div>
            <p className="text-sm font-semibold text-ink">{name}</p>
            <p className="text-xs text-muted">{location}</p>
          </div>
        </div>
        {role && <span className="text-xs font-medium text-brand-700">{role}</span>}
      </div>
    </Card>
  );
}
