import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServicesBento from "@/components/ServicesBento";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/content";
import { breadcrumbSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Dolgu, implant, kanal tedavisi, kozmetik diş hekimliği, zirkonyum ve porselen kaplama dahil Sakarya'daki kliniğimizde sunduğumuz tüm diş tedavileri.",
  alternates: { canonical: "/hizmetler" },
  openGraph: { url: `${siteUrl}/hizmetler`, title: "Hizmetlerimiz | Melis Çakan Diş Kliniği" },
};

export default function ServicesPage() {
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Tek çatı altında kapsamlı diş tedavileri"
        description="İhtiyacınıza uygun tedaviyi belirlemek için önce detaylı bir muayene ile başlıyoruz. Detaylı bilgi için bir tedaviye tıklayın."
      />

      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <ServicesBento items={services} />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
