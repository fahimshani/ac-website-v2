import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { NewsCard } from "@/components/ui/NewsCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { newsPosts } from "@/lib/data";

export function NewsSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionHeading
              label="Latest"
              title="News & Insights"
              action={<LinkArrow href="/news">View All</LinkArrow>}
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {newsPosts.map((post) => (
              <StaggerItem key={post.title} className="h-full">
                <NewsCard {...post} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
