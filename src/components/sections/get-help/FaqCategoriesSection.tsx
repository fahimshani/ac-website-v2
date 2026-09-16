import { Container } from "@/components/ui/Container";
import { FaqCategoryBlock } from "@/components/sections/get-help/FaqCategoryBlock";
import { ShieldCheck, BookOpen, RefreshCcw } from "lucide-react";
import { ivaFaqs, bankruptcyFaqs } from "@/lib/get-help-data";
import { ddFaqs } from "@/lib/direct-debit-data";

export function FaqCategoriesSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container className="space-y-14">
        <FaqCategoryBlock
          id="iva"
          icon={ShieldCheck}
          label="IVA"
          title="Individual Voluntary Arrangement — Frequently Asked Questions"
          faqs={ivaFaqs}
        />
        <FaqCategoryBlock
          id="bankruptcy"
          icon={BookOpen}
          label="Bankruptcy"
          title="Bankruptcy — Frequently Asked Questions"
          faqs={bankruptcyFaqs}
        />
        <FaqCategoryBlock
          id="direct-debit"
          icon={RefreshCcw}
          label="Direct Debit"
          title="Direct Debit — Frequently Asked Questions"
          faqs={ddFaqs}
        />
      </Container>
    </section>
  );
}
