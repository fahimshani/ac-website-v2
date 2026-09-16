import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { faqJumpLinks } from "@/lib/get-help-data";

export function FaqJumpNav() {
  return (
    <div className="border-b border-black/5 bg-white py-4">
      <Container className="flex flex-wrap gap-6">
        {faqJumpLinks.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-2 text-sm font-semibold text-ink/80 transition-colors hover:text-brand-700"
          >
            <Icon className="h-4 w-4 text-brand-700" />
            {label}
          </Link>
        ))}
      </Container>
    </div>
  );
}
