import { Container } from "@/components/ui/Container";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { servicesStats } from "@/lib/services-data";

export function TrustStatsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <StaggerGroup className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <StaggerItem className="max-w-md">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              An international team you can trust
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Experienced professionals working nationwide to help you move
              forward.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap gap-x-10 gap-y-4">
            {servicesStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-brand-700">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
