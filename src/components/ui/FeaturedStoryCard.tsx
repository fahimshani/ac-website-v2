import { LucideIcon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Tone = "red" | "purple" | "teal" | "amber";

const toneClasses: Record<Tone, string> = {
  red: "from-brand-900 via-brand-800 to-brand-700",
  purple: "from-violet-950 via-violet-800 to-fuchsia-800",
  teal: "from-slate-900 via-teal-900 to-teal-700",
  amber: "from-amber-900 via-amber-800 to-amber-600",
};

export function FeaturedStoryCard({
  category,
  icon: Icon,
  tone = "red",
  date,
  readTime,
  title,
  paragraphs,
  href,
}: {
  category: string;
  icon: LucideIcon;
  tone?: Tone;
  date: string;
  readTime: string;
  title: string;
  paragraphs: string[];
  href: string;
}) {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] md:grid-cols-2">
      <div
        className={cn(
          "flex min-h-[220px] flex-col items-center justify-center gap-4 bg-gradient-to-br p-8",
          toneClasses[tone]
        )}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
          <Icon className="h-7 w-7" />
        </span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-col justify-center p-8">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-700">
            {category}
          </span>
          {date}
        </div>

        <h2 className="mt-3 text-2xl font-bold leading-snug text-ink">{title}</h2>

        <div className="mt-3 space-y-3">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <Button href={href} trailingIcon={<ChevronRight className="h-4 w-4" />}>
            Read More
          </Button>
          <span className="text-sm text-muted">{readTime}</span>
        </div>
      </div>
    </div>
  );
}
