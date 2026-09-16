import { Phone, ShieldCheck, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { OnlinePaymentNavTrigger } from "@/components/online-payment/OnlinePaymentNavTrigger";
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
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <span className="flex cursor-default items-center gap-1 text-sm font-medium text-ink/80 transition-colors group-hover:text-brand-700">
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </span>

                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-black/5 bg-white py-2 shadow-lg shadow-black/5">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink/80 transition-colors hover:text-brand-700"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-5">
            <OnlinePaymentNavTrigger className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:block">
              Online payment
            </OnlinePaymentNavTrigger>
            <Button href="/direct-debit" size="sm">
              Direct Debit
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
