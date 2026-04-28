import { directusFetch } from "@/lib/directus";
import { clinicUa } from "@/content/clinic-ua";

type DirectusClinic = {
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
  problems_eyebrow: string;
  problems_title: string;
  problems_intro: string;
  problems_items: Array<{ sort: number; mark: string; title: string; text: string }>;
  solution_eyebrow: string;
  solution_title: string;
  solution_statement: string;
  solution_description: string;
  included_eyebrow: string;
  included_title: string;
  included_lead: string;
  included_items: Array<{ sort: number; text: string }>;
  included_guarantees: Array<{ sort: number; title: string; text: string }>;
  pricing_eyebrow: string;
  pricing_title: string;
  pricing_lead: string;
  pricing_note: string;
  pricing_tiers: Array<{
    sort: number;
    mark: string;
    name: string;
    hours_label: string;
    hours_caption: string;
    price: string;
    price_unit: string;
    extra: string;
    cta: string;
    recommended: boolean;
    recommended_label: string | null;
  }>;
  scenarios_eyebrow: string;
  scenarios_intro: string;
  scenarios_outro: string;
  scenarios_characters: Array<{ sort: number; text: string }>;
  crosslinks_eyebrow: string;
  crosslinks_title: string;
  crosslinks_back_label: string;
  crosslinks_back_href: string;
  crosslinks_items: Array<{ sort: number; mark: string; title: string; description: string; href: string }>;
};

const bySort = <T extends { sort: number }>(arr: T[]) =>
  [...arr].sort((a, b) => a.sort - b.sort);

export async function getClinicContent() {
  try {
    const clinic = await directusFetch<DirectusClinic>(
      "/items/a_clinic/1?fields=*,problems_items.*,included_items.*,included_guarantees.*,pricing_tiers.*,scenarios_characters.*,crosslinks_items.*",
    );

    return {
      meta: { title: clinic.meta_title, description: clinic.meta_description },
      hero: {
        eyebrow: clinic.hero_eyebrow,
        titleLines: clinic.hero_title.split("\n").map((s) => s.trim()).filter(Boolean),
        leadStatement: clinic.hero_lead_statement,
        body: clinic.hero_body,
        primaryCta: { label: clinic.hero_cta_primary_label, href: clinic.hero_cta_primary_href },
        secondaryCta: { label: clinic.hero_cta_secondary_label, href: clinic.hero_cta_secondary_href },
      },
      problems: {
        eyebrow: clinic.problems_eyebrow,
        title: clinic.problems_title,
        intro: clinic.problems_intro,
        items: bySort(clinic.problems_items).map((p) => ({ mark: p.mark, title: p.title, text: p.text })),
      },
      solution: {
        eyebrow: clinic.solution_eyebrow,
        title: clinic.solution_title,
        statement: clinic.solution_statement,
        description: clinic.solution_description,
      },
      included: {
        eyebrow: clinic.included_eyebrow,
        title: clinic.included_title,
        lead: clinic.included_lead,
        items: bySort(clinic.included_items).map((i) => i.text),
        guarantees: bySort(clinic.included_guarantees).map((g) => ({ title: g.title, text: g.text })),
      },
      pricing: {
        eyebrow: clinic.pricing_eyebrow,
        title: clinic.pricing_title,
        lead: clinic.pricing_lead,
        note: clinic.pricing_note,
        tiers: bySort(clinic.pricing_tiers).map((t) => ({
          mark: t.mark,
          name: t.name,
          hoursLabel: t.hours_label,
          hoursCaption: t.hours_caption,
          price: t.price,
          priceUnit: t.price_unit,
          extra: t.extra,
          cta: t.cta,
          recommended: t.recommended,
          ...(t.recommended_label ? { recommendedLabel: t.recommended_label } : {}),
        })),
      },
      scenarios: {
        eyebrow: clinic.scenarios_eyebrow,
        intro: clinic.scenarios_intro,
        outro: clinic.scenarios_outro,
        characters: bySort(clinic.scenarios_characters).map((c) => c.text),
      },
      crosslinks: {
        eyebrow: clinic.crosslinks_eyebrow,
        title: clinic.crosslinks_title,
        items: bySort(clinic.crosslinks_items).map((c) => ({
          mark: c.mark,
          title: c.title,
          description: c.description,
          href: c.href,
        })),
        backToHome: { label: clinic.crosslinks_back_label, href: clinic.crosslinks_back_href },
      },
    };
  } catch {
    return clinicUa;
  }
}

export type ClinicContent = Awaited<ReturnType<typeof getClinicContent>>;
