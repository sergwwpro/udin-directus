"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type FieldProps = {
  label: string;
  error?: string;
  className?: string;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, className, id, ...rest },
  ref,
) {
  const fieldId = id ?? rest.name;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={fieldId}
        className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={fieldId}
        className={cn(
          "w-full border-0 border-b border-hairline bg-transparent py-3 text-base text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none transition-colors",
          error && "border-danger focus:border-danger",
        )}
        {...rest}
      />
      {error && <span className="text-xs text-danger">{error}</span>}
    </div>
  );
});

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & FieldProps;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, className, id, ...rest },
  ref,
) {
  const fieldId = id ?? rest.name;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={fieldId}
        className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted"
      >
        {label}
      </label>
      <textarea
        ref={ref}
        id={fieldId}
        rows={4}
        className={cn(
          "w-full resize-none border-0 border-b border-hairline bg-transparent py-3 text-base text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none transition-colors",
          error && "border-danger focus:border-danger",
        )}
        {...rest}
      />
      {error && <span className="text-xs text-danger">{error}</span>}
    </div>
  );
});
