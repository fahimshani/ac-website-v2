import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";

export function MiniStatCard({
  icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <Card className="p-5 sm:p-5">
      <IconTile icon={icon} tone="light" size="sm" />
      <p className="mt-3 text-xl font-bold text-ink">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </Card>
  );
}
