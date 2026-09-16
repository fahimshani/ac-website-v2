"use client";

import { ReactNode } from "react";
import { useOnlinePayment } from "@/components/online-payment/OnlinePaymentProvider";

export function OnlinePaymentNavTrigger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { open } = useOnlinePayment();

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
