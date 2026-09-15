import { Phone, ShieldCheck, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-950 text-white/85">
        <Container className="flex h-9 items-center justify-between text-xs">
          <a href="tel:0800XXXXXX" className="flex items-center gap-1.5 hover:text-white">
            <Phone className="h-3.5 w-3.5" />
            0800 XXX XXXX — Mon-Fri 8am-6pm
          </a>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" />
            ICAEW Licensed
          </div>
        </Container>
      </div>

      <div className="border-b border-black/5 bg-white">
        <Container className="flex h-18 items-center justify-between py-3">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-ink/80 transition-colors hover:text-brand-700"
              >
                {link.label}
                {link.label === "Get Help" && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="/online-payment"
              className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:block"
            >
              Online payment
            </a>
            <Button href="/direct-debit" size="sm">
              Direct Debit
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
