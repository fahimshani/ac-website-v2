"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { GuideCard } from "@/components/ui/GuideCard";
import { PolicyCard } from "@/components/ui/PolicyCard";
import { FeaturedResourcesSection } from "@/components/sections/resources/FeaturedResourcesSection";
import { cn } from "@/lib/cn";
import {
  allResources,
  resourceCategories,
  type ResourceCategory,
} from "@/lib/resources-data";

type SortOption = "popular" | "recent" | "az";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Most Popular" },
  { value: "recent", label: "Recently Updated" },
  { value: "az", label: "A-Z" },
];

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
        active
          ? "bg-brand-700 text-white"
          : "bg-white text-ink/70 hover:bg-brand-50 hover:text-brand-700"
      )}
    >
      {children}
    </button>
  );
}

export function ResourcesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ResourceCategory | "All">("All");
  const [sort, setSort] = useState<SortOption>("popular");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matches = allResources.filter((resource) => {
      const matchesCategory = category === "All" || resource.category === category;
      const matchesQuery =
        q.length === 0 ||
        resource.title.toLowerCase().includes(q) ||
        resource.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });

    const sorted = [...matches];
    if (sort === "recent") {
      sorted.sort((a, b) => (a.updatedDate < b.updatedDate ? 1 : -1));
    } else if (sort === "az") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sorted;
  }, [query, category, sort]);

  const filteredGuides = filtered.filter((r) => r.kind === "guide");
  const filteredPolicies = filtered.filter((r) => r.kind === "policy");

  return (
    <>
      <div className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-brand-50 via-brand-50 to-white">
        <Container className="pb-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documents, guides, policies..."
              className="w-full rounded-xl border border-black/10 bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
            />
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs text-muted">
                {filtered.length} resource{filtered.length === 1 ? "" : "s"}
              </span>
              <Pill active={category === "All"} onClick={() => setCategory("All")}>
                All
              </Pill>
              {resourceCategories.map((cat) => (
                <Pill key={cat} active={category === cat} onClick={() => setCategory(cat)}>
                  {cat}
                </Pill>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted">Sort:</span>
              {sortOptions.map((option) => (
                <Pill
                  key={option.value}
                  active={sort === option.value}
                  onClick={() => setSort(option.value)}
                >
                  {option.label}
                </Pill>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <FeaturedResourcesSection />

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="flex items-center justify-between">
            <SectionLabel>Guides & Documents</SectionLabel>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-50 px-2 text-xs font-semibold text-brand-700">
              {filteredGuides.length}
            </span>
          </div>

          {filteredGuides.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((resource) => (
                <GuideCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">
              No guides match your search or filters.
            </p>
          )}
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="flex items-center justify-between">
            <SectionLabel>Policies & Compliance</SectionLabel>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-50 px-2 text-xs font-semibold text-brand-700">
              {filteredPolicies.length}
            </span>
          </div>

          {filteredPolicies.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredPolicies.map((resource) => (
                <PolicyCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">
              No policies match your search or filters.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
