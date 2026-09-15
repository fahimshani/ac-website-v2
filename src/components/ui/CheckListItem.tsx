import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export function CheckListItem({
  children,
  state = "yes",
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  state?: "yes" | "no";
  tone?: "light" | "dark";
  className?: string;
}) {
  const Icon = state === "yes" ? CheckCircle2 : XCircle;
  return (
    <li className={cn("flex items-start gap-2.5 text-sm", className)}>
      <Icon
        className={cn(
          "mt-0.5 h-4.5 w-4.5 shrink-0",
          state === "yes"
            ? tone === "dark"
              ? "text-white"
              : "text-brand-700"
            : "text-muted/50"
        )}
      />
      <span
        className={cn(
          tone === "dark" ? "text-white/90" : "text-ink/80",
          state === "no" && "text-muted"
        )}
      >
        {children}
      </span>
    </li>
  );
}
