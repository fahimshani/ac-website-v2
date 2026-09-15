import Link from "next/link";
import { Anchor } from "lucide-react";
import { Fredoka } from "next/font/google";
import { cn } from "@/lib/cn";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600", "700"] });

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Anchor
        className={cn(
          "h-7 w-7 shrink-0",
          tone === "dark" ? "text-brand-700" : "text-white"
        )}
        strokeWidth={2.2}
      />
      <span
        aria-hidden
        className={cn(
          "h-6 w-px shrink-0",
          tone === "dark" ? "bg-ink/15" : "bg-white/25"
        )}
      />
      <span
        className={cn(
          fredoka.className,
          "text-xl leading-none tracking-wide",
          tone === "dark" ? "text-brand-700" : "text-white"
        )}
      >
        ANCHORAGE CHAMBERS
      </span>
    </Link>
  );
}
