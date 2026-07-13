import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { breadcrumbSchema, faqSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Diş beyazlatma, implant, kanal tedavisi ve daha fazlası hakkında merak edilenler.",
  alternates: { canonical: "/sss" },
  openGraph: { url: `${siteUrl}/sss`, title: "Sıkça Sorulan Sorular | Melis Çakan Diş Kliniği" },
};

export default function FaqPage() {
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "S.S.S", path: "/sss" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <PageHero
        eyebrow="S.S.S"
        title="Sıkça sorulan sorular"
        description="Diş tedavileri hakkında hastalarımızın en çok merak ettiği sorular ve yanıtları. Yanıtlar genel bilgi amaçlıdır, kişiye göre değişebilir."
      />
      <section className="section-pad">
        <div className="container-x">
          <FaqAccordion />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
