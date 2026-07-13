import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Galeri | Melis Çakan Diş Kliniği",
  description: "Kliniğimizden ve tedavi süreçlerimizden görüntüler.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Kliniğimizden kareler"
        description="Modern tedavi ünitelerimiz ve çalışma ortamımızdan görüntüler."
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
