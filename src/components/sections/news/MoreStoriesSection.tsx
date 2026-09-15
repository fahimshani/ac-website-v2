import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { moreStories } from "@/lib/news-data";

export function MoreStoriesSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionLabel>More Stories</SectionLabel>
          </StaggerItem>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moreStories.map((story) => (
              <StaggerItem key={story.title} className="h-full">
                <NewsCard {...story} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
