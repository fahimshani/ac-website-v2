import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { IconTile } from "@/components/ui/IconTile";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { values } from "@/lib/about-data";

export function ValuesSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionHeading
              label="Our Values"
              title="Our Values"
              action={
                <Badge variant="outlineDark" className="font-semibold tracking-wide">
                  ANCHORAGE
                </Badge>
              }
            />
          </StaggerItem>

          <div className="mt-8 divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5">
            {values.map((value) => (
              <StaggerItem
                key={value.name}
                className="flex items-center gap-4 bg-white p-5 sm:gap-6 sm:p-6"
              >
                <span className="w-8 shrink-0 text-3xl font-bold text-brand-50 sm:w-12 sm:text-4xl">
                  {value.letter}
                </span>
                <span className="w-28 shrink-0 text-sm font-semibold text-brand-700 sm:w-40">
                  {value.name}
                </span>
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
                <IconTile icon={value.icon} tone="light" size="sm" className="hidden sm:flex" />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
