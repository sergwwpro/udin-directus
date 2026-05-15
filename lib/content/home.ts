import { directusFetch } from "@/lib/directus";
import { ua } from "@/content/ua";

type DirectusHome = {
  meta_title: string;
  meta_description: string;
  hero_eyebrow: string;
  hero_title: string;
  hero_lead_statement: string;
  hero_body: string;
  hero_cta_primary_label: string;
  hero_cta_primary_href: string;
  hero_cta_secondary_label: string;
  hero_cta_secondary_href: string;
  hero_portrait_caption: string;
  hero_portrait_subcaption: string;
  hero_portrait: string | null;
  about_portrait: string | null;
  manifesto_eyebrow: string;
  manifesto_quote: string;
  manifesto_points: Array<{
    sort: number;
    number: string;
    title: string;
    text: string;
  }>;
  about_eyebrow: string;
  about_name: string;
  about_role: string;
  about_bio: string;
  credentials: Array<{ sort: number; text: string }>;
  trust_stats: Array<{ sort: number; value: string; label: string }>;
  services_eyebrow: string;
  services_title: string;
  services_lead: string;
  services_items: Array<{
    sort: number;
    title: string;
    description: string;
    meta_label: string;
    href: string;
    cta: string;
  }>;
  contact_eyebrow: string;
  contact_title: string;
  contact_lead: string;
};

type DirectusContacts = {
  phone_primary_label: string;
  phone_primary_value: string;
  phone_primary_tel: string;
  phone_secondary_label: string;
  phone_secondary_value: string;
  phone_secondary_tel: string;
  email: string;
};

const bySort = <T extends { sort: number }>(arr: T[]) =>
  [...arr].sort((a, b) => a.sort - b.sort);

export async function getHomeContent() {
  try {
  const [home, contacts] = await Promise.all([
    directusFetch<DirectusHome>(
      "/items/a_home?fields=*,manifesto_points.*,credentials.*,trust_stats.*,services_items.*",
    ),
    directusFetch<DirectusContacts>("/items/site_contacts"),
  ]);

  return {
    meta: {
      title: home.meta_title,
      description: home.meta_description,
      locale: "uk_UA" as const,
    },
    header: ua.header,
    hero: {
      eyebrow: home.hero_eyebrow,
      titleLines: home.hero_title
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      leadStatement: home.hero_lead_statement,
      body: home.hero_body,
      primaryCta: {
        label: home.hero_cta_primary_label,
        href: home.hero_cta_primary_href,
      },
      secondaryCta: {
        label: home.hero_cta_secondary_label,
        href: home.hero_cta_secondary_href,
      },
      portraitCaption: home.hero_portrait_caption,
      portraitSubcaption: home.hero_portrait_subcaption,
      portraitUrl: home.hero_portrait
        ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${home.hero_portrait}`
        : null,
    },
    manifesto: {
      eyebrow: home.manifesto_eyebrow,
      quote: home.manifesto_quote,
      points: bySort(home.manifesto_points).map((p) => ({
        number: p.number,
        title: p.title,
        text: p.text,
      })),
    },
    about: {
      eyebrow: home.about_eyebrow,
      name: home.about_name,
      role: home.about_role,
      portraitUrl: home.about_portrait
        ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${home.about_portrait}`
        : null,
      bio: home.about_bio
        .split(/\n\n+/)
        .map((s) => s.trim())
        .filter(Boolean),
      credentials: bySort(home.credentials).map((c) => c.text),
    },
    trust: bySort(home.trust_stats).map((s) => ({
      value: s.value,
      label: s.label,
    })),
    services: {
      eyebrow: home.services_eyebrow,
      title: home.services_title,
      lead: home.services_lead,
      items: bySort(home.services_items).map((s) => ({
        title: s.title,
        description: s.description,
        meta: s.meta_label,
        href: s.href,
        cta: s.cta,
      })),
    },
    contact: {
      eyebrow: home.contact_eyebrow,
      title: home.contact_title,
      lead: home.contact_lead,
      phones: [
        {
          label: contacts.phone_primary_label,
          value: contacts.phone_primary_value,
          href: `tel:${contacts.phone_primary_tel}`,
        },
        {
          label: contacts.phone_secondary_label,
          value: contacts.phone_secondary_value,
          href: `tel:${contacts.phone_secondary_tel}`,
        },
      ],
      email: {
        label: "Email",
        value: contacts.email,
        href: `mailto:${contacts.email}`,
      },
      form: ua.contact.form,
    },
    footer: ua.footer,
  };
  } catch {
    return ua;
  }
}

export type HomeContent = Awaited<ReturnType<typeof getHomeContent>>;
