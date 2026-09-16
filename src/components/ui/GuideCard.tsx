import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { LinkArrow } from "@/components/ui/LinkArrow";
import type { GuideResource } from "@/lib/resources-data";

export function GuideCard({ resource }: { resource: GuideResource }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-brand-700 px-2 py-0.5 text-[10px] font-bold text-white">
            PDF
          </span>
          <span className="text-xs text-muted">{resource.pages} pages</span>
        </div>
        <Badge variant="tag">{resource.category}</Badge>
      </div>

      <h3 className="mt-3 text-base font-bold text-ink">{resource.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {resource.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
        <span className="text-xs text-muted">Updated {resource.updatedLabel}</span>
        <LinkArrow href={resource.href}>View PDF</LinkArrow>
      </div>
    </Card>
  );
}
