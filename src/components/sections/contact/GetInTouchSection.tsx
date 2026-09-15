import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { contactChannels } from "@/lib/contact-data";

function ChannelBlock({
  channel,
}: {
  channel: (typeof contactChannels)["customers"];
}) {
  return (
    <div>
      <h3 className="text-base font-bold text-ink">{channel.title}</h3>
      <div className="mt-3 space-y-2 text-sm leading-relaxed">
        <p>
          <span className="text-muted">Email: </span>
          <span className="font-semibold text-ink">{channel.email}</span>
        </p>
        <p>
          <span className="text-muted">Phone: </span>
          <span className="font-semibold text-ink">{channel.phone}</span>
        </p>
        <p>
          <span className="text-muted">Whatsapp: </span>
          <span className="font-semibold text-ink">{channel.whatsapp}</span>
        </p>
        <p>
          <span className="text-muted">Address: </span>
          <span className="font-semibold text-ink">{channel.address}</span>
        </p>
      </div>
    </div>
  );
}

export function GetInTouchSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <StaggerGroup>
          <StaggerItem>
            <SectionLabel>We&apos;d Love to Hear From You</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Contact Us
            </h2>
          </StaggerItem>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <StaggerItem>
              <ChannelBlock channel={contactChannels.customers} />
            </StaggerItem>
            <StaggerItem>
              <ChannelBlock channel={contactChannels.creditors} />
            </StaggerItem>
          </div>
        </StaggerGroup>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
