import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Rating } from "@/components/ui/Rating";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <StaggerGroup>
          <StaggerItem>
            <SectionHeading
              label="What Clients Say"
              title="Testimonials"
              action={
                <div className="flex items-center gap-2">
                  <Rating />
                  <span className="text-sm text-muted">4.9/5 from 200+ reviews</span>
                </div>
              }
            />
          </StaggerItem>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
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
