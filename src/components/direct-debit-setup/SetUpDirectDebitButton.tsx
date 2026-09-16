"use client";

import { Button, type ButtonAsButton } from "@/components/ui/Button";
import { useDirectDebitSetup } from "@/components/direct-debit-setup/DirectDebitSetupProvider";

type TriggerProps = Omit<ButtonAsButton, "href" | "onClick" | "children" | "type"> & {
  children?: React.ReactNode;
};

export function SetUpDirectDebitButton({ children, ...props }: TriggerProps) {
  const { open } = useDirectDebitSetup();

  return (
    <Button type="button" onClick={open} {...props}>
      {children ?? "Set Up Direct Debit"}
    </Button>
  );
}
