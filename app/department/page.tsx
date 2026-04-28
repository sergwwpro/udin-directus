import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { DepartmentHero } from "@/components/sections/department/DepartmentHero";
import { DepartmentProblem } from "@/components/sections/department/DepartmentProblem";
import { DepartmentAudience } from "@/components/sections/department/DepartmentAudience";
import { DepartmentIncluded } from "@/components/sections/department/DepartmentIncluded";
import { DepartmentPricing } from "@/components/sections/department/DepartmentPricing";
import { DepartmentCrossLinks } from "@/components/sections/department/DepartmentCrossLinks";
import { getDepartmentContent } from "@/lib/content/department";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getDepartmentContent();
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      locale: "uk_UA",
      type: "website",
    },
  };
}

export default async function DepartmentPage() {
  const content = await getDepartmentContent();

  return (
    <>
      <Header />
      <main id="main">
        <DepartmentHero content={content} />
        <DepartmentProblem content={content} />
        <DepartmentAudience content={content} />
        <DepartmentIncluded content={content} />
        <DepartmentPricing content={content} />
        <DepartmentCrossLinks content={content} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
