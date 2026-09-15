import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import {
  storyParagraphs,
  approachParagraphs,
  approachHighlights,
} from "@/lib/about-data";

export function OriginSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StaggerItem className="h-full">
            <Card className="h-full">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                From a small Salford office to a global operation.
              </h2>

              <div className="mt-4 space-y-4">
                {storyParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Badge variant="outlineDark" icon={<MapPin className="h-3.5 w-3.5" />} className="mt-6">
                Salford Quays, Greater Manchester
              </Badge>
            </Card>
          </StaggerItem>

          <StaggerItem className="h-full">
            <Card className="h-full">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                Multi-solution. Tailored. Human.
              </h2>

              <div className="mt-4 space-y-4">
                {approachParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="mt-6 space-y-2.5 rounded-xl bg-brand-50 p-4">
                {approachHighlights.map((item) => (
                  <CheckListItem key={item}>{item}</CheckListItem>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
