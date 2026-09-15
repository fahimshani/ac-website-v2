import { Container } from "@/components/ui/Container";
import { CenteredHeading } from "@/components/ui/CenteredHeading";
import { Rating } from "@/components/ui/Rating";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { ddTestimonials } from "@/lib/direct-debit-data";

export function DDTestimonialsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <CenteredHeading label="Customer Stories" title="What our customers say" />
            <div className="mt-3 flex items-center justify-center gap-2">
              <Rating />
              <span className="text-sm text-muted">
                4.9 out of 5 · 2,000+ verified reviews on Trustpilot
              </span>
            </div>
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ddTestimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name} className="h-full">
                <TestimonialCard {...testimonial} />
              </StaggerItem>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}
