"use client";

import { Button } from "@/components/ui/Button";

const fieldClasses =
  "w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700";

export function ContactForm() {
  return (
    <div>
      <p className="text-sm leading-relaxed text-muted">
        If you are having a difficult time financially our IVA advisors will
        explain how an IVA may help you sort out your debt problems. An IVA
        may not be suitable in all circumstances, fees applies if IVA is
        approved. Your credit rating may be affected. Fill in the form below.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-6 flex flex-col gap-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name..."
            className={fieldClasses}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone..."
            className={fieldClasses}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email..."
          className={fieldClasses}
        />

        <textarea
          name="message"
          rows={4}
          placeholder="What time of day is best for us to call you?"
          className={fieldClasses}
        />

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
