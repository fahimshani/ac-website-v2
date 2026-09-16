import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactMethodCard } from "@/components/ui/ContactMethodCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { contactMethods } from "@/lib/get-help-data";

export function OtherWaysSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionHeading
              label="Still Need Help?"
              title="Other ways to reach us"
              action={
                <p className="max-w-xs text-sm text-muted sm:text-right">
                  Can&apos;t find what you&apos;re looking for? Our team is
                  ready to help you directly.
                </p>
              }
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <StaggerItem key={method.title} className="h-full">
                <ContactMethodCard {...method} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
