import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface LinkArrowProps {
  href: string;
  children: React.ReactNode;
  tone?: "brand" | "light";
  className?: string;
}

export function LinkArrow({
  href,
  children,
  tone = "brand",
  className,
}: LinkArrowProps) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-1 text-sm font-semibold transition-colors",
        tone === "brand"
          ? "text-brand-700 hover:text-brand-800"
          : "text-white hover:text-white/80",
        className
      )}
    >
      {children}
      <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
    </Link>
  );
}
