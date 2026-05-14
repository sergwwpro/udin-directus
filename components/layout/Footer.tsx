import { Container } from "@/components/ui/Container";
import { ua } from "@/content/ua";

export function Footer() {
  const { footer, contact } = ua;

  return (
    <footer className="border-t border-hairline bg-paper">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <a href="/">
              <img src="/logo-udin.svg" alt={footer.brand.name} className="h-10 w-auto" />
            </a>
            <p className="mt-6 max-w-sm text-sm text-muted leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          <div className="md:col-span-4">
            <span className="eyebrow">Контакти</span>
            <ul className="mt-4 flex flex-col gap-2">
              {contact.phones.map((p) => (
                <li key={p.value}>
                  <a href={p.href} className="text-sm hover:text-accent transition-colors">
                    {p.value}
                  </a>
                </li>
              ))}
              <li>
                <a href={contact.email.href} className="text-sm hover:text-accent transition-colors">
                  {contact.email.value}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="eyebrow">Правова інформація</span>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a
                  href={footer.policy.href}
                  className="text-sm text-muted hover:text-ink transition-colors"
                >
                  {footer.policy.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-hairline">
          <p className="text-xs text-muted">{footer.copyright}</p>
          <p className="text-xs text-muted/70">
            Сайт — студія сучасного дизайну, {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
