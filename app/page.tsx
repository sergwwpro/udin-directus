import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { About } from "@/components/sections/About";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { getHomeContent } from "@/lib/content/home";

export default async function Home() {
  const content = await getHomeContent();
  return (
    <>
      <Header />
      <main id="main">
        <Hero content={content.hero} />
        <Manifesto content={content.manifesto} />
        <About content={content.about} />
        <TrustSignals content={content.trust} />
        <Services content={content.services} />
        <Contact content={content.contact} />
      </main>
      <Footer />
    </>
  );
}
