"use client";

import { useEffect, useState, type FormEvent } from "react";
import { X, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { useDirectDebitSetup } from "@/components/direct-debit-setup/DirectDebitSetupProvider";

const DEFAULT_AMOUNT = "185.00";

const upsellChecks = [
  "No need to remember monthly payments",
  "Protected by the Direct Debit Guarantee",
  "Avoid issues caused by expired cards",
  "Secure and reliable monthly collections",
];

interface FormState {
  clientReference: string;
  email: string;
  amount: string;
}

const initialForm: FormState = {
  clientReference: "",
  email: "",
  amount: DEFAULT_AMOUNT,
};

export function OnlinePaymentModal({ onClose }: { onClose: () => void }) {
  const [screen, setScreen] = useState<"form" | "success">("form");
  const [form, setForm] = useState<FormState>(initialForm);
  const [switchToDD, setSwitchToDD] = useState(false);
  const { open: openDirectDebitSetup } = useDirectDebitSetup();

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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (switchToDD) {
      onClose();
      openDirectDebitSetup();
      return;
    }
    setScreen("success");
  }

  function handleSetUpDirectDebit() {
    onClose();
    openDirectDebitSetup();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={screen === "form" ? "Make a Payment" : "Payment Received"}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-7"
      >
        {screen === "form" ? (
          <>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-ink">Make a Payment</h2>
                <p className="mt-1 text-sm text-muted">Secure card payment via WorldPay.</p>
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

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
              <TextField
                label="Client reference"
                name="clientReference"
                placeholder="AC-123456"
                required
                value={form.clientReference}
                onChange={(e) => updateField("clientReference", e.target.value)}
              />
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
                label="Amount (£)"
                name="amount"
                type="number"
                step="0.01"
                min="0"
                required
                value={form.amount}
                onChange={(e) => updateField("amount", e.target.value)}
              />

              <div>
                <p className="text-sm text-muted">
                  Prefer an easier way to manage future payments?
                </p>
                <label className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-brand-700">
                  <input
                    type="checkbox"
                    checked={switchToDD}
                    onChange={(e) => setSwitchToDD(e.target.checked)}
                    className="h-4 w-4 rounded border-black/20 text-brand-700 focus:ring-brand-700"
                  />
                  Switch to Direct Debit after today&apos;s payment.
                </label>
              </div>

              <Button type="submit" className="w-full">
                Continue to WorldPay
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
                <Lock className="h-3.5 w-3.5" /> Secure via WorldPay
              </p>
            </form>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold text-ink">Payment Received</h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="text-muted transition-colors hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 flex flex-col items-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <ShieldCheck className="h-7 w-7" />
              </span>
              <p className="text-sm leading-relaxed text-muted">
                Payment received. Receipt sent to{" "}
                <strong className="font-semibold text-ink">
                  {form.email || "your email"}
                </strong>
                .
              </p>

              <div className="w-full rounded-xl bg-brand-50 p-4 text-left">
                <p className="text-sm font-bold text-ink">Make Future IVA Payments Easier</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/70">
                  To help avoid missed payments caused by expired cards or banking
                  changes, Anchorage Chambers is moving customers to a secure Direct
                  Debit system powered by GoCardless.
                </p>
                <ul className="mt-3 space-y-1.5">
                  {upsellChecks.map((item) => (
                    <CheckListItem key={item}>{item}</CheckListItem>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted">
                  Your IVA arrangement remains exactly the same.
                </p>
              </div>

              <Button onClick={handleSetUpDirectDebit} className="w-full">
                Set Up Direct Debit
              </Button>
              <Button href="/contact" variant="secondary" className="w-full">
                Speak to Our Team
              </Button>
              <button
                type="button"
                onClick={onClose}
                className="text-sm text-muted transition-colors hover:text-brand-700"
              >
                No thanks, I&apos;ll continue paying by card
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
