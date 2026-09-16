"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { DirectDebitSetupModal } from "@/components/direct-debit-setup/DirectDebitSetupModal";

interface DirectDebitSetupContextValue {
  open: () => void;
}

const DirectDebitSetupContext = createContext<DirectDebitSetupContextValue | null>(null);

export function DirectDebitSetupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <DirectDebitSetupContext.Provider value={{ open }}>
      {children}
      {isOpen && <DirectDebitSetupModal onClose={close} />}
    </DirectDebitSetupContext.Provider>
  );
}

export function useDirectDebitSetup() {
  const ctx = useContext(DirectDebitSetupContext);
  if (!ctx) {
    throw new Error("useDirectDebitSetup must be used within a DirectDebitSetupProvider");
  }
  return ctx;
}
