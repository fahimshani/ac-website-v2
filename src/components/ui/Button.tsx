import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 shadow-sm shadow-brand-900/10",
  secondary:
    "bg-white text-brand-700 border border-brand-100 hover:bg-brand-50",
  inverse: "bg-white text-brand-700 hover:bg-brand-50",
  outlineLight:
    "bg-transparent text-white border border-white/60 hover:bg-white/10",
  ghost: "bg-transparent text-brand-700 hover:bg-brand-50",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-5 py-3 gap-2",
  lg: "text-base px-6 py-3.5 gap-2",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors whitespace-nowrap";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  children: ReactNode;
}

export type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  icon,
  trailingIcon,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon}
        {children}
        {trailingIcon}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      {children}
      {trailingIcon}
    </button>
  );
}
