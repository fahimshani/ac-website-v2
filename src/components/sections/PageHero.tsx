import Link from "next/link";
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/ui/LogoMark";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

interface Crumb {
  label: string;
  href?: string;
}

interface Stat {
  value: string;
  label: string;
}

/**
 * Shared header block for interior pages (About, Services, News, Contact,
 * etc.) — breadcrumb, label, title, intro copy, an optional stats row, and
 * an optional `aside` slot (e.g. News' category links) that switches the
 * text block into a two-column layout. The dark gradient marketing Hero
 * (homepage, Direct Debit) is separate; this one is the light, reused-
 * everywhere page header.
 */
export function PageHero({
  crumbs,
  label,
  title,
  description,
  stats,
  aside,
}: {
  crumbs: Crumb[];
  label: string;
  title: ReactNode;
  description: string;
  stats?: Stat[];
  aside?: ReactNode;
}) {
  const textBlock = (
    <StaggerItem className={aside ? undefined : "max-w-2xl"}>
      <SectionLabel>{label}</SectionLabel>
      <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-balance text-ink sm:text-5xl sm:leading-[1.08]">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
    </StaggerItem>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-brand-50 to-white">
      <LogoMark
        className="pointer-events-none absolute -right-12 top-0 hidden h-[360px] w-[360px] text-brand-700/[0.06] md:block"
      />

      <StaggerGroup className="relative">
        <Container className="pt-8 pb-12 sm:pt-10 sm:pb-16">
          <StaggerItem>
            <nav className="flex items-center gap-1.5 text-xs text-muted">
              {crumbs.map((crumb, i) => {
                const isLast = i === crumbs.length - 1;
                return (
                  <span key={crumb.label} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="h-3 w-3" />}
                    {crumb.href && !isLast ? (
                      <Link href={crumb.href} className="hover:text-ink">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "font-medium text-brand-700" : undefined}>
                        {crumb.label}
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>
          </StaggerItem>

          {aside ? (
            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
              {textBlock}
              <StaggerItem className="flex flex-col gap-3">{aside}</StaggerItem>
            </div>
          ) : (
            <div className="mt-6">{textBlock}</div>
          )}

          {stats && stats.length > 0 && (
            <StaggerItem className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-brand-700/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </StaggerItem>
          )}
        </Container>
      </StaggerGroup>
    </section>
  );
}
