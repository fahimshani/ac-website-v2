import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TextField({ label, id, className, ...props }: TextFieldProps) {
  const fieldId = id ?? props.name;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={fieldId} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={fieldId}
        className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
        {...props}
      />
    </div>
  );
}
