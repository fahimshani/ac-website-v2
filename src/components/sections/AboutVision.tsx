import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { offices } from "@/lib/data";

export function AboutVision() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <StaggerItem>
            <SectionLabel>About Anchorage Chambers</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Our Vision
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted">
              Our mission is to provide a helping hand to those in financial
              distress, offering them practical and ethical solutions to
              regain control of their financial lives. We believe in treating
              every client with respect and dignity, ensuring fairness and
              equity for all.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              With an international presence and a team of experienced
              professionals, we are dedicated to delivering exceptional
              services. We aim to exceed expectations, making a positive
              impact on the lives of overburdened individuals. At Anchorage
              Chambers, we guide our clients toward brighter financial
              futures, helping them navigate the stormy seas of debt with
              integrity and expertise.
            </p>

            <LinkArrow href="/about" className="mt-6">
              Learn More About Us
            </LinkArrow>
          </StaggerItem>

          <StaggerItem className="rounded-2xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-8 sm:p-10">
            <SectionLabel tone="light">Our Reach</SectionLabel>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Global. Local. Personal.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Offices in the UK, Pakistan and South Africa — making expert
              insolvency support accessible wherever you are.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-xl border border-white/15 bg-white/5 p-4 text-center"
                >
                  <p className="text-2xl">{office.flag}</p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {office.country}
                  </p>
                  <p className="text-xs text-white/60">{office.city}</p>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
