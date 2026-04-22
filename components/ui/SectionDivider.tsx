import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-hairline", className)} aria-hidden />;
}
