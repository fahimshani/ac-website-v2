"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

interface AccordionItemData {
  question: string;
  answer: string;
}

export function Accordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: AccordionItemData[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 px-5 py-4 text-left sm:px-6"
            >
              {isOpen ? (
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-700 text-[11px] font-bold text-white">
                  ?
                </span>
              ) : (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700/40" />
              )}
              <span
                className={cn(
                  "flex-1 text-sm font-semibold",
                  isOpen ? "text-brand-700" : "text-ink"
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-muted transition-transform",
                  isOpen && "rotate-180 text-brand-700"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-4 pl-13 pr-5 text-sm leading-relaxed text-muted sm:pl-14 sm:pr-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
