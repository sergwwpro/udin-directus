import { cn } from "@/lib/utils";

type Props = {
  monogram: string;
  caption?: string;
  subcaption?: string;
  className?: string;
  variant?: "hero" | "about";
};

export function PortraitPlaceholder({
  monogram,
  caption,
  subcaption,
  className,
  variant = "hero",
}: Props) {
  const isHero = variant === "hero";

  return (
    <figure className={cn("relative", className)}>
      <div
        className={cn(
          "relative aspect-[3/4] w-full overflow-hidden border border-hairline bg-paper-raised paper-grain",
          isHero ? "" : "aspect-[4/5]",
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display select-none text-ink/8"
            style={{ fontSize: "clamp(3rem, 22vw, 4rem)" }}
            aria-hidden
          >
            {monogram}
          </span>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            backgroundImage:
              "linear-gradient(to top, color-mix(in srgb, var(--ink) 6%, transparent), transparent)",
          }}
          aria-hidden
        />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Portrait · Forthcoming
          </span>
        </div>

        <div className="absolute bottom-4 right-4 font-display text-xs text-muted">
          {new Date().getFullYear()}
        </div>
      </div>

      {(caption || subcaption) && (
        <figcaption className="mt-5 flex flex-col gap-1">
          {caption && <span className="text-sm font-medium text-ink">{caption}</span>}
          {subcaption && <span className="text-sm text-muted">{subcaption}</span>}
        </figcaption>
      )}
    </figure>
  );
}
