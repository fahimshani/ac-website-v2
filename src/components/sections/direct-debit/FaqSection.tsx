import { Container } from "@/components/ui/Container";
import { CenteredHeading } from "@/components/ui/CenteredHeading";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { ddFaqs } from "@/lib/direct-debit-data";

export function FaqSection() {
  return (
    <section id="faq" className="bg-cream py-16 sm:py-24">
      <Container>
        <Reveal>
          <CenteredHeading label="Common Questions" title="Frequently asked questions" />
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl" delay={0.1}>
          <Accordion items={ddFaqs} />
        </Reveal>
      </Container>

      <div className="mt-10">
        <CtaBanner
          title="Still have questions?"
          description="Our support team is available Monday - Friday, 9am - 6pm."
          buttonLabel="Contact Support"
          buttonHref="/contact"
        />
      </div>
    </section>
  );
}
