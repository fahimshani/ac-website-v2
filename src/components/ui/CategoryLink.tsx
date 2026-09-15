import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";

export function CategoryLink({
  icon,
  label,
  href,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-3 font-semibold text-ink transition-colors hover:border-brand-700/30 hover:bg-brand-50"
    >
      <IconTile icon={icon} tone="light" size="sm" />
      {label}
    </Link>
  );
}
