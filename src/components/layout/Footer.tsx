import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { OnlinePaymentNavTrigger } from "@/components/online-payment/OnlinePaymentNavTrigger";
import { footerColumns } from "@/lib/data";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2H21.5l-7.51 8.59L22.75 22h-6.9l-5.4-6.63L4.2 22H1l8.03-9.19L1.5 2h7.08l4.88 6.06L18.24 2Zm-1.21 18h1.83L7.06 3.9H5.1L17.03 20Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white/70">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-8">
          <Logo tone="light" />
          <p className="mt-4 text-sm leading-relaxed">
            Supporting people through financial difficulty since 2010. FCA and
            ICAEW licensed.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
            >
              <XIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-white">{column.title}</h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) =>
                link.href === "/online-payment" ? (
                  <li key={link.href}>
                    <OnlinePaymentNavTrigger className="text-sm transition-colors hover:text-white">
                      {link.label}
                    </OnlinePaymentNavTrigger>
                  </li>
                ) : (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Anchorage Chambers Limited. All rights reserved.</p>
          <p>Registered in England &amp; Wales · Company No: 12345678 · ICO Ref: ZA123456</p>
        </Container>
      </div>
    </footer>
  );
}
