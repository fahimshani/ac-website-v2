"use client";

import { Button, type ButtonAsButton } from "@/components/ui/Button";
import { useOnlinePayment } from "@/components/online-payment/OnlinePaymentProvider";

type TriggerProps = Omit<ButtonAsButton, "href" | "onClick" | "children" | "type"> & {
  children?: React.ReactNode;
};

export function MakePaymentButton({ children, ...props }: TriggerProps) {
  const { open } = useOnlinePayment();

  return (
    <Button type="button" onClick={open} {...props}>
      {children ?? "Make a Payment"}
    </Button>
  );
}
