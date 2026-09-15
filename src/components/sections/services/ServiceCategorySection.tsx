import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { PillLink } from "@/components/ui/PillLink";
import { ServiceDetailCard } from "@/components/ui/ServiceDetailCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

interface ServiceItem {
  abbr: string;
  tone: "red" | "dark";
  title: string;
  description: string;
  checklist: string[];
  metaLabel: string;
  metaText: string;
  href: string;
}

export function ServiceCategorySection({
  id,
  bg = "white",
  label,
  title,
  description,
  pillLabel,
  pillHref,
  services,
}: {
  id?: string;
  bg?: "white" | "slate";
  label: string;
  title: string;
  description: string;
  pillLabel: string;
  pillHref: string;
  services: ServiceItem[];
}) {
  return (
    <section
      id={id}
      className={bg === "slate" ? "bg-slate-50 py-16 sm:py-24" : "py-16 sm:py-24"}
    >
      <Container>
        <StaggerGroup>
          <StaggerItem className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>{label}</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                {description}
              </p>
            </div>
            <PillLink href={pillHref}>{pillLabel}</PillLink>
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.abbr} className="h-full">
                <ServiceDetailCard {...service} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
