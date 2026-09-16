export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "term"; term: string; text: string }
  | { type: "address"; lines: string[] };

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "p") {
    return <p className="text-sm leading-relaxed text-muted">{block.text}</p>;
  }

  if (block.type === "term") {
    return (
      <p className="text-sm leading-relaxed text-muted">
        <strong className="font-semibold text-ink">{block.term}: </strong>
        {block.text}
      </p>
    );
  }

  return (
    <address className="text-sm not-italic leading-relaxed text-muted">
      {block.lines.map((line, i) => (
        <span key={line} className={i === 0 ? "block font-semibold text-ink" : "block"}>
          {line}
        </span>
      ))}
    </address>
  );
}

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="divide-y divide-black/5">
      {sections.map((section, i) => (
        <div key={section.id} id={section.id} className="scroll-mt-24 py-8 first:pt-0">
          <h2 className="text-xl font-bold text-ink sm:text-2xl">
            {i + 1}. {section.title}
          </h2>
          <div className="mt-4 space-y-3">
            {section.blocks.map((block, j) => (
              <Block key={j} block={block} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
