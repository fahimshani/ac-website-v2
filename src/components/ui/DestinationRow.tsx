import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";

export function DestinationRow({
  icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-brand-50"
    >
      <IconTile icon={icon} tone="light" />
      <div className="flex-1">
        <p className="font-bold text-ink">{title}</p>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-brand-700" />
    </Link>
  );
}
