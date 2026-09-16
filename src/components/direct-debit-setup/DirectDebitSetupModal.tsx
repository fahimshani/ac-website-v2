"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ShieldCheck, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { cn } from "@/lib/cn";

const PLAN = {
  monthlyAmount: "£185.00",
  firstCollection: "1 July 2026",
};

const safeChecks = ["Payment amount unchanged", "Payment date unchanged", "IVA terms unchanged"];

const stepLabels = ["Your details", "Confirm payment", "Confirmation"];

interface FormState {
  fullName: string;
  clientReference: string;
  postcode: string;
  email: string;
  mobile: string;
}

const initialForm: FormState = {
  fullName: "",
  clientReference: "",
  postcode: "",
  email: "",
  mobile: "",
};

export function DirectDebitSetupModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormState>(initialForm);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleDetailsSubmit(e: FormEvent) {
    e.preventDefault();
    setStep(2);
  }

  function handleConfirmSubmit(e: FormEvent) {
    e.preventDefault();
    setStep(3);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Set Up Direct Debit"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-7"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-brand-700" />
            Secure setup · Powered by GoCardless
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-muted transition-colors hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <h2 className="mt-3 text-2xl font-bold text-ink">Set Up Direct Debit</h2>

        <div className="mt-4 flex gap-1.5">
          {[1, 2, 3].map((s) => (
            <span
              key={s}
              className={cn(
                "h-1.5 flex-1 rounded-full",
                s <= step ? "bg-brand-700" : "bg-brand-100"
              )}
            />
          ))}
        </div>
        <p className="mt-2 text-xs font-medium text-muted">
          Step {step} of 3 — {stepLabels[step - 1]}
        </p>

        {step === 1 && (
          <form onSubmit={handleDetailsSubmit} className="mt-5 flex flex-col gap-5">
            <div className="rounded-xl bg-brand-50 p-4">
              <p className="text-sm font-bold text-brand-700">Your arrangement is safe</p>
              <ul className="mt-2 space-y-1.5">
                {safeChecks.map((item) => (
                  <CheckListItem key={item}>{item}</CheckListItem>
                ))}
              </ul>
            </div>

            <TextField
              label="Full name"
              name="fullName"
              placeholder="Your full name"
              required
              value={form.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField
                label="Client reference"
                name="clientReference"
                placeholder="e.g. AC-123456"
                required
                value={form.clientReference}
                onChange={(e) => updateField("clientReference", e.target.value)}
              />
              <TextField
                label="Postcode"
                name="postcode"
                placeholder="e.g. SW1A 1AA"
                required
                value={form.postcode}
                onChange={(e) => updateField("postcode", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField
                label="Email address"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              <TextField
                label="Mobile number"
                name="mobile"
                type="tel"
                placeholder="07700 900000"
                value={form.mobile}
                onChange={(e) => updateField("mobile", e.target.value)}
              />
            </div>

            <Button type="submit" trailingIcon={<ArrowRight className="h-4 w-4" />} className="w-full">
              Review My Details
            </Button>

            <p className="text-center text-xs text-muted">Encrypted · Powered by GoCardless</p>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleConfirmSubmit} className="mt-5 flex flex-col gap-5">
            <p className="text-sm text-muted">
              Review your details before we send your secure setup link.
            </p>

            <dl className="overflow-hidden rounded-xl border border-black/5">
              {[
                ["Name", form.fullName || "—"],
                ["Reference", form.clientReference || "—"],
                ["Monthly amount", PLAN.monthlyAmount],
                ["First collection", PLAN.firstCollection],
                ["Setup link to", form.email || "—"],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 text-sm",
                    i % 2 === 1 && "bg-brand-50/50"
                  )}
                >
                  <dt className="text-muted">{label}</dt>
                  <dd className="font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex items-start gap-2.5 rounded-xl bg-brand-50 p-4 text-sm text-ink/80">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
              Protected by the UK Direct Debit Guarantee. Cancel any time. We will never ask
              for your banking login credentials.
            </div>

            <Button type="submit" trailingIcon={<ArrowRight className="h-4 w-4" />} className="w-full">
              Send my details to agent
            </Button>

            <p className="text-center text-xs text-muted">Encrypted · Powered by GoCardless</p>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-center text-sm text-muted transition-colors hover:text-brand-700"
            >
              ← Back to edit details
            </button>
          </form>
        )}

        {step === 3 && (
          <div className="mt-5 flex flex-col items-center gap-4 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <ShieldCheck className="h-7 w-7" />
            </span>
            <h3 className="text-lg font-bold text-ink">Setup link generated</h3>
            <p className="text-sm leading-relaxed text-muted">
              Once our team reviews your information, we&apos;ll send you a magic link.
              Please check your email for the secure GoCardless authorization.
            </p>

            <div className="w-full rounded-xl bg-brand-50 p-4 text-sm text-ink/80">
              First payment of {PLAN.monthlyAmount} collects {PLAN.firstCollection}. Your
              IVA continues exactly as before.
            </div>

            <Button href="/" className="w-full">
              Return to homepage
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
