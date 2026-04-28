import { directusFetch } from "@/lib/directus";
import { doctorUa } from "@/content/doctor-ua";

type DirectusDoctor = {
  meta_title: string;
  meta_description: string;
  hero_eyebrow: string;
  hero_title: string;
  hero_subtitle: string;
  hero_tagline: string;
  hero_tagline_support: string;
  hero_body: string;
  hero_cta: string;
  hero_cta_secondary: string;
  problems_eyebrow: string;
  problems_title: string;
  problems_intro: string;
  problems_body: string;
  problems_tip: string;
  problems_items: Array<{ sort: number; text: string }>;
  guarantees_eyebrow: string;
  guarantees_title: string;
  guarantees_items: Array<{ sort: number; mark: string; title: string; text: string }>;
  pricing_eyebrow: string;
  pricing_title: string;
  pricing_lead: string;
  pricing_note: string;
  pricing_core_features: Array<{ sort: number; text: string }>;
  pricing_tiers: Array<{
    id: number;
    sort: number;
    mark: string;
    name: string;
    price: string;
    price_unit: string;
    cta: string;
    recommended: boolean;
    recommended_label: string | null;
    extras: Array<{ sort: number; text: string }>;
  }>;
  economics_eyebrow: string;
  economics_title: string;
  economics_stat: string;
  economics_stat_label: string;
  economics_body: string;
  economics_cta: string;
  crosslinks_eyebrow: string;
  crosslinks_title: string;
  crosslinks_back_label: string;
  crosslinks_back_href: string;
  crosslinks_items: Array<{ sort: number; mark: string; title: string; description: string; href: string }>;
};

const bySort = <T extends { sort: number }>(arr: T[]) =>
  [...arr].sort((a, b) => a.sort - b.sort);

export async function getDoctorContent() {
  try {
    const doctor = await directusFetch<DirectusDoctor>(
      "/items/a_doctor/4?fields=*,problems_items.*,guarantees_items.*,pricing_core_features.*,pricing_tiers.*,pricing_tiers.extras.*,crosslinks_items.*",
    );

    return {
      meta: { title: doctor.meta_title, description: doctor.meta_description },
      hero: {
        eyebrow: doctor.hero_eyebrow,
        titleLine1: doctor.hero_title.split("\n")[0] ?? "",
        titleLine2: doctor.hero_title.split("\n")[1] ?? "",
        subtitle: doctor.hero_subtitle,
        tagline: doctor.hero_tagline,
        taglineSupport: doctor.hero_tagline_support,
        body: doctor.hero_body,
        cta: doctor.hero_cta,
        ctaSecondary: doctor.hero_cta_secondary,
      },
      problems: {
        eyebrow: doctor.problems_eyebrow,
        title: doctor.problems_title,
        intro: doctor.problems_intro,
        cases: bySort(doctor.problems_items).map((p) => p.text),
        body: doctor.problems_body,
        tip: doctor.problems_tip,
      },
      guarantees: {
        eyebrow: doctor.guarantees_eyebrow,
        title: doctor.guarantees_title,
        items: bySort(doctor.guarantees_items).map((g) => ({
          mark: g.mark,
          title: g.title,
          text: g.text,
        })),
      },
      pricing: {
        eyebrow: doctor.pricing_eyebrow,
        title: doctor.pricing_title,
        lead: doctor.pricing_lead,
        coreFeatures: bySort(doctor.pricing_core_features).map((f) => f.text),
        tiers: bySort(doctor.pricing_tiers).map((t) => ({
          mark: t.mark,
          name: t.name,
          price: t.price,
          priceUnit: t.price_unit,
          cta: t.cta,
          recommended: t.recommended,
          recommendedLabel: t.recommended_label ?? "",
          extras: bySort(t.extras ?? []).map((e) => e.text),
        })),
        note: doctor.pricing_note,
      },
      economics: {
        eyebrow: doctor.economics_eyebrow,
        titleLine1: doctor.economics_title.split("\n")[0] ?? "",
        titleLine2: doctor.economics_title.split("\n")[1] ?? "",
        stat: doctor.economics_stat,
        statLabel: doctor.economics_stat_label,
        body: doctor.economics_body,
        cta: doctor.economics_cta,
      },
      crosslinks: {
        eyebrow: doctor.crosslinks_eyebrow,
        title: doctor.crosslinks_title,
        items: bySort(doctor.crosslinks_items).map((c) => ({
          mark: c.mark,
          title: c.title,
          description: c.description,
          href: c.href,
        })),
        backToHome: { label: doctor.crosslinks_back_label, href: doctor.crosslinks_back_href },
      },
    };
  } catch {
    return doctorUa;
  }
}

export type DoctorContent = Awaited<ReturnType<typeof getDoctorContent>>;
