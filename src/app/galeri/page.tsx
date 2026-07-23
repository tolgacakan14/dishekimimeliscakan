import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import { breadcrumbSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Melis Çakan Diş Kliniği'nden ve uzman ekibimizden görüntüler.",
  alternates: { canonical: "/galeri" },
  openGraph: { url: `${siteUrl}/galeri`, title: "Galeri | Melis Çakan Diş Kliniği" },
};

export default function GalleryPage() {
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "Galeri", path: "/galeri" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <PageHero
        eyebrow="Galeri"
        title="Kliniğimizden kareler"
        description="Uzman ekibimiz ve klinik ortamımızdan görüntüler."
      />
      <section className="section-pad">
        <div className="container-x">
          <Gallery />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
