import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100"
    >
      {children}
      <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
    </Link>
  );
}
