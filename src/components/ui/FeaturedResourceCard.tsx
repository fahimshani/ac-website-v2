import { FileText, Star } from "lucide-react";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { cn } from "@/lib/cn";
import type { GuideResource } from "@/lib/resources-data";

export function FeaturedResourceCard({
  resource,
  variant = "light",
  mostDownloaded = false,
}: {
  resource: GuideResource;
  variant?: "dark" | "light";
  mostDownloaded?: boolean;
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl p-6",
        isDark
          ? "bg-gradient-to-br from-ink via-brand-900 to-brand-700"
          : "border border-black/5 bg-white bg-gradient-to-b from-amber-300/15 to-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide",
            isDark ? "bg-white/15 text-white" : "bg-amber-100 text-amber-700"
          )}
        >
          <Star className="h-3 w-3 fill-current" />
          Featured
        </span>
        {mostDownloaded && (
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-[10px] font-semibold",
              isDark ? "bg-white/15 text-white" : "bg-brand-50 text-brand-700"
            )}
          >
            Most Downloaded
          </span>
        )}
      </div>

      <span
        className={cn(
          "mt-4 flex h-10 w-10 items-center justify-center rounded-xl",
          isDark ? "bg-white/15 text-white" : "bg-brand-50 text-brand-700"
        )}
      >
        <FileText className="h-5 w-5" />
      </span>

      <p
        className={cn(
          "mt-3 text-xs",
          isDark ? "text-white/60" : "text-muted"
        )}
      >
        {resource.category} · {resource.pages} pages
      </p>
      <h3
        className={cn(
          "mt-1 text-lg font-bold",
          isDark ? "text-white" : "text-ink"
        )}
      >
        {resource.title}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 text-sm leading-relaxed",
          isDark ? "text-white/70" : "text-muted"
        )}
      >
        {resource.description}
      </p>

      <LinkArrow href={resource.href} tone={isDark ? "light" : "brand"} className="mt-4">
        View PDF
      </LinkArrow>
    </div>
  );
}
