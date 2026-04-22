import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ua } from "@/content/ua";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-serif",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: ua.meta.title,
  description: ua.meta.description,
  openGraph: {
    title: ua.meta.title,
    description: ua.meta.description,
    locale: ua.meta.locale,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
        >
          Перейти до основного вмісту
        </a>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--ink)",
              color: "var(--paper)",
              border: "none",
              borderRadius: "2px",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
