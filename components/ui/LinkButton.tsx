import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "onDark" | "onDarkSolid";
type Size = "sm" | "md" | "lg";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all duration-200 active:translate-y-px";

const variants: Record<Variant, string> = {
  solid: "bg-navy-700 text-white hover:bg-navy-600 shadow-card",
  outline:
    "border border-navy-700/15 bg-white text-navy-800 hover:border-navy-700/35 hover:shadow-card",
  onDark:
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40",
  onDarkSolid: "bg-white text-navy-800 hover:bg-navy-50 shadow-lift",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
};

export function LinkButton({
  href,
  children,
  variant = "outline",
  size = "md",
  className = "",
  external = false,
  ariaLabel,
}: LinkButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
