import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Badge } from "@/components/ui/Badge";
import { TrainingPartnerCard } from "@/components/ui/TrainingPartnerCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { trainingPartners, trainingProgramme } from "@/lib/data";

export function TrainingPartnersSection() {
  return (
    <section className="bg-brand-50 py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionHeading
              label="Our Training Partners"
              title="Our Training Consultants"
              action={<LinkArrow href="/about/training">All Training</LinkArrow>}
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {trainingPartners.map((partner) => (
              <StaggerItem key={partner.name} className="h-full">
                <TrainingPartnerCard {...partner} />
              </StaggerItem>
            ))}

            <StaggerItem className="h-full rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-6 sm:p-8">
              <Badge variant="solidLight">{trainingProgramme.eyebrow}</Badge>
              <h3 className="mt-3 text-lg font-bold text-white">
                {trainingProgramme.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {trainingProgramme.description}
              </p>

              <dl className="mt-6 space-y-3 border-t border-white/15 pt-5">
                {trainingProgramme.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between text-xs">
                    <dt className="text-white/60">{stat.label}</dt>
                    <dd className="font-semibold text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
