import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryLink } from "@/components/ui/CategoryLink";
import { FeaturedStorySection } from "@/components/sections/news/FeaturedStorySection";
import { MoreStoriesSection } from "@/components/sections/news/MoreStoriesSection";
import { newsCategories } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "News & Insights | Anchorage Chambers",
  description:
    "Stay up to date with company announcements, IVA industry updates, debt advice, and press coverage from Anchorage Chambers.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
        label="News & Insights"
        title="Latest from Anchorage Chambers"
        description="Stay up to date with company announcements, IVA industry updates, debt advice, and press coverage from Anchorage Chambers."
        aside={newsCategories.map((category) => (
          <CategoryLink key={category.label} {...category} />
        ))}
      />
      <FeaturedStorySection />
      <MoreStoriesSection />
    </>
  );
}
