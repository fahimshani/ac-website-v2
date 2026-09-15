import { LucideIcon } from "lucide-react";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { cn } from "@/lib/cn";

type Tone = "red" | "purple" | "teal" | "amber";

const toneClasses: Record<Tone, string> = {
  red: "from-brand-900 via-brand-800 to-brand-700",
  purple: "from-violet-950 via-violet-800 to-fuchsia-800",
  teal: "from-slate-900 via-teal-900 to-teal-700",
  amber: "from-amber-900 via-amber-800 to-amber-600",
};

export function NewsCard({
  category,
  icon: Icon,
  tone = "red",
  date,
  readTime,
  title,
  excerpt,
  href,
}: {
  category: string;
  icon?: LucideIcon;
  tone?: Tone;
  date: string;
  readTime?: string;
  title: string;
  excerpt: string;
  href: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white">
      <div
        className={cn(
          "flex h-36 flex-col items-center justify-center gap-2 bg-gradient-to-br",
          toneClasses[tone]
        )}
      >
        {Icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-muted">
          {date}
          {readTime && <> · {readTime}</>}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-ink">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {excerpt}
        </p>
        <LinkArrow href={href} className="mt-4">
          Read More
        </LinkArrow>
      </div>
    </article>
  );
}
