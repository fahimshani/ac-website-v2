import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { FeaturedStoryCard } from "@/components/ui/FeaturedStoryCard";
import { Reveal } from "@/components/motion/Reveal";
import { featuredStory } from "@/lib/news-data";

export function FeaturedStorySection() {
  return (
    <section className="py-16">
      <Container>
        <Reveal>
          <SectionLabel>Featured Story</SectionLabel>
          <FeaturedStoryCard {...featuredStory} />
        </Reveal>
      </Container>
    </section>
  );
}
