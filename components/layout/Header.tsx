"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { ua } from "@/content/ua";

export function Header() {
  const { header } = ua;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container as="div" className="flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-3 group">
          <span
            aria-hidden
            className="font-display text-lg leading-none border border-ink w-9 h-9 flex items-center justify-center transition-colors group-hover:bg-ink group-hover:text-paper"
          >
            {header.brand.mark}
          </span>
          <span className="hidden sm:block text-sm font-medium tracking-wide">
            {header.brand.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={header.phoneHref}
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            <Phone size={14} strokeWidth={1.75} />
            {header.phone}
          </a>

          <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] font-medium">
            {header.languages.map((lang, i) => (
              <span key={lang.code} className="flex items-center gap-1">
                <button
                  className={cn(
                    "cursor-pointer transition-colors",
                    lang.active ? "text-ink" : "text-muted/60 hover:text-muted",
                  )}
                  aria-current={lang.active ? "true" : undefined}
                  disabled={!lang.active}
                >
                  {lang.label}
                </button>
                {i < header.languages.length - 1 && (
                  <span className="text-muted/40" aria-hidden>
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}
