import { LucideIcon } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqCategoryBlock({
  id,
  icon,
  label,
  title,
  faqs,
}: {
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  faqs: FaqItem[];
}) {
  return (
    <Reveal id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <IconTile icon={icon} tone="light" />
        <div>
          <p className="text-xs font-semibold text-brand-700">{label}</p>
          <h2 className="text-xl font-bold text-ink sm:text-2xl">{title}</h2>
        </div>
      </div>

      <div className="mt-5">
        <Accordion items={faqs} />
      </div>
    </Reveal>
  );
}
