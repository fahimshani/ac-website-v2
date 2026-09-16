"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { OnlinePaymentModal } from "@/components/online-payment/OnlinePaymentModal";

interface OnlinePaymentContextValue {
  open: () => void;
}

const OnlinePaymentContext = createContext<OnlinePaymentContextValue | null>(null);

export function OnlinePaymentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <OnlinePaymentContext.Provider value={{ open }}>
      {children}
      {isOpen && <OnlinePaymentModal onClose={close} />}
    </OnlinePaymentContext.Provider>
  );
}

export function useOnlinePayment() {
  const ctx = useContext(OnlinePaymentContext);
  if (!ctx) {
    throw new Error("useOnlinePayment must be used within an OnlinePaymentProvider");
  }
  return ctx;
}
