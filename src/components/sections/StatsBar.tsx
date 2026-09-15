import { Users, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { stats } from "@/lib/data";

const icons = [Users, Users, MapPin];

export function StatsBar() {
  return (
    <section className="bg-brand-50">
      <Container>
        <StaggerGroup className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={stat.label} className="flex items-center gap-4">
                <IconTile icon={Icon} tone="solid" />
                <div>
                  <p className="text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
