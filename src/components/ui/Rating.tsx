import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

export function Rating({
  value = 5,
  className,
}: {
  value?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < value ? "fill-amber-400 text-amber-400" : "fill-brand-100 text-brand-100"
          )}
        />
      ))}
    </div>
  );
}
