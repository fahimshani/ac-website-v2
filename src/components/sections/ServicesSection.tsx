import { User, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { services } from "@/lib/data";

const icons = [User, Building2];

export function ServicesSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionHeading
              label="What We Do"
              title="Insolvency Services"
              action={<LinkArrow href="/services">All Services</LinkArrow>}
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <StaggerItem key={service.title} className="h-full">
                <ServiceCard icon={icons[i]} {...service} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
