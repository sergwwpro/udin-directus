"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  arrow?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, className, variant = "primary", arrow = false, ...rest },
  ref,
) {
  const base =
    "group inline-flex items-center gap-3 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<Variant, string> = {
    primary:
      "bg-ink text-paper px-7 py-4 hover:bg-ink-soft hover:-translate-y-[1px]",
    ghost:
      "text-ink px-0 py-2 underline underline-offset-[6px] decoration-1 decoration-hairline hover:decoration-ink",
    outline:
      "border border-ink text-ink px-7 py-4 hover:bg-ink hover:text-paper",
  };

  return (
    <button ref={ref} className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </button>
  );
});
