import { directusFetch } from "@/lib/directus";
import { departmentUa } from "@/content/department-ua";

type DirectusDepartment = {
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
  problem_eyebrow: string;
  problem_title: string;
  problem_body: string;
  problem_conclusion: string;
  problem_reasons: Array<{ text: string }>;
  audience_eyebrow: string;
  audience_title: string;
  audience_lead: string;
  audience_items: Array<{ title: string; description: string }>;
  included_eyebrow: string;
  included_title: string;
  included_lead: string;
  included_items: Array<{ sort: number; text: string }>;
  pricing_eyebrow: string;
  pricing_title: string;
  pricing_lead: string;
  pricing_tier_badge: string;
  pricing_tier_name: string;
  pricing_tier_price: string;
  pricing_tier_price_unit: string;
  pricing_tier_per_doctor: string;
  pricing_tier_per_doctor_unit: string;
  pricing_tier_payment_note: string;
  pricing_tier_cta: string;
  pricing_benefits: Array<{ text: string }>;
  pricing_note: string;
  pricing_closing: string;
  crosslinks_eyebrow: string;
  crosslinks_title: string;
  crosslinks_back_label: string;
  crosslinks_back_href: string;
  crosslinks_items: Array<{ sort: number; mark: string; title: string; description: string; href: string }>;
};

const bySort = <T extends { sort: number }>(arr: T[]) =>
  [...arr].sort((a, b) => a.sort - b.sort);

export async function getDepartmentContent() {
  try {
    const dept = await directusFetch<DirectusDepartment>(
      "/items/a_department/1?fields=*,problem_reasons.*,audience_items.*,included_items.*,pricing_benefits.*,crosslinks_items.*",
    );

    return {
      meta: { title: dept.meta_title, description: dept.meta_description },
      hero: {
        eyebrow: dept.hero_eyebrow,
        title: dept.hero_title,
        subtitle: dept.hero_subtitle,
        tagline: dept.hero_tagline,
        taglineSupport: dept.hero_tagline_support,
        body: dept.hero_body,
        cta: dept.hero_cta,
        ctaSecondary: dept.hero_cta_secondary,
      },
      problem: {
        eyebrow: dept.problem_eyebrow,
        title: dept.problem_title,
        body: dept.problem_body,
        reasons: dept.problem_reasons.map((r) => r.text),
        conclusion: dept.problem_conclusion,
      },
      audience: {
        eyebrow: dept.audience_eyebrow,
        title: dept.audience_title,
        lead: dept.audience_lead,
        items: dept.audience_items.map((a) => ({
          title: a.title,
          description: a.description,
        })),
      },
      included: {
        eyebrow: dept.included_eyebrow,
        title: dept.included_title,
        lead: dept.included_lead,
        items: bySort(dept.included_items).map((i) => i.text),
      },
      pricing: {
        eyebrow: dept.pricing_eyebrow,
        title: dept.pricing_title,
        lead: dept.pricing_lead,
        tier: {
          badge: dept.pricing_tier_badge,
          name: dept.pricing_tier_name,
          price: dept.pricing_tier_price,
          priceUnit: dept.pricing_tier_price_unit,
          perDoctor: dept.pricing_tier_per_doctor,
          perDoctorUnit: dept.pricing_tier_per_doctor_unit,
          paymentNote: dept.pricing_tier_payment_note,
          cta: dept.pricing_tier_cta,
          benefits: dept.pricing_benefits.map((b) => b.text),
        },
        note: dept.pricing_note,
        closing: dept.pricing_closing,
      },
      crosslinks: {
        eyebrow: dept.crosslinks_eyebrow,
        title: dept.crosslinks_title,
        items: bySort(dept.crosslinks_items).map((c) => ({
          mark: c.mark,
          title: c.title,
          description: c.description,
          href: c.href,
        })),
        backToHome: { label: dept.crosslinks_back_label, href: dept.crosslinks_back_href },
      },
    };
  } catch {
    return departmentUa;
  }
}

export type DepartmentContent = Awaited<ReturnType<typeof getDepartmentContent>>;
