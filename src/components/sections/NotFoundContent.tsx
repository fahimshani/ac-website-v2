import { Home, Info, Users, CreditCard, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DestinationRow } from "@/components/ui/DestinationRow";
import { LogoMark } from "@/components/ui/LogoMark";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

const destinations = [
  {
    icon: Home,
    title: "Homepage",
    description: "Our services and how we can help",
    href: "/",
  },
  {
    icon: Info,
    title: "About Us",
    description: "Our story, approach and values",
    href: "/about",
  },
  {
    icon: Users,
    title: "Who we are",
    description: "Meet our team and practitioners",
    href: "/about/who-we-are",
  },
  {
    icon: CreditCard,
    title: "Direct Debit setup",
    description: "Manage your IVA payments securely",
    href: "/direct-debit",
  },
];

export function NotFoundContent() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-50 via-brand-50 to-white">
      <LogoMark
        className="pointer-events-none absolute -right-16 -top-6 hidden h-[480px] w-[480px] text-brand-700/[0.06] lg:block"
      />

      <Container className="relative flex min-h-screen items-center py-16">
        <StaggerGroup className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <StaggerItem>
              <SectionLabel>Error 404 — page not found</SectionLabel>
            </StaggerItem>

            <StaggerItem>
              <p className="text-8xl font-bold leading-none tracking-tight text-brand-700 sm:text-9xl">
                404
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                This page has drifted off course.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                The page you&apos;re looking for may have moved or no longer
                exists. Nothing to worry about — let&apos;s get you back to
                safe harbour.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-8 flex flex-wrap gap-3">
              <Button href="/" icon={<Home className="h-4 w-4" />}>
                Back to homepage
              </Button>
              <Button href="/contact" variant="secondary" icon={<MessageCircle className="h-4 w-4" />}>
                Contact support
              </Button>
            </StaggerItem>

            <StaggerItem className="mt-9 flex items-center gap-2 text-sm text-muted">
              <Phone className="h-4 w-4 text-brand-700" />
              Need help now? Call{" "}
              <a href="tel:0800XXXXXX" className="font-semibold text-ink">
                0800 XXX XXXX
              </a>{" "}
              — Mon-Fri 9am-5pm
            </StaggerItem>
          </div>

          <StaggerItem className="rounded-2xl bg-white p-6 shadow-xl shadow-brand-950/10 sm:p-7">
            <h2 className="text-xl font-bold text-ink">Popular destinations</h2>
            <p className="mt-1 text-sm text-muted">
              These are the pages most people are looking for.
            </p>

            <div className="mt-5 space-y-3">
              {destinations.map((destination) => (
                <DestinationRow key={destination.title} {...destination} />
              ))}
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
