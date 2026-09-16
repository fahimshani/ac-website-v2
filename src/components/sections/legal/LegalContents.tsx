import { SectionLabel } from "@/components/ui/SectionHeading";

export function LegalContents({
  sections,
}: {
  sections: { id: string; title: string }[];
}) {
  return (
    <nav className="sticky top-24">
      <SectionLabel>Contents</SectionLabel>
      <ul className="space-y-2.5 text-sm">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-muted transition-colors hover:text-brand-700"
            >
              {i + 1}. {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
