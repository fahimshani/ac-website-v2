import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { FeaturedResourceCard } from "@/components/ui/FeaturedResourceCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { guides, featuredResources } from "@/lib/resources-data";

export function FeaturedResourcesSection() {
  return (
    <section className="py-16">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionLabel>Featured Resources</SectionLabel>
          </StaggerItem>

          <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredResources.map((featured) => {
              const resource = guides.find((g) => g.id === featured.id);
              if (!resource) return null;
              return (
                <StaggerItem key={featured.id} className="h-full">
                  <FeaturedResourceCard
                    resource={resource}
                    variant={featured.variant}
                    mostDownloaded={featured.mostDownloaded}
                  />
                </StaggerItem>
              );
            })}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
