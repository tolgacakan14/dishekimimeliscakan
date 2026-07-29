import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBanner from "@/components/CtaBanner";
import { testimonials } from "@/lib/content";
import { breadcrumbSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hasta Deneyimleri",
  description: "Hastalarımızın Melis Çakan Diş Kliniği hakkındaki gerçek deneyimleri.",
  alternates: { canonical: "/referanslar" },
  openGraph: { url: `${siteUrl}/referanslar`, title: "Hasta Deneyimleri | Melis Çakan Diş Kliniği" },
};

export default function TestimonialsPage() {
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "Hasta Deneyimleri", path: "/referanslar" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <PageHero
        eyebrow="Hasta Deneyimleri"
        title="Hastalarımız ne diyor?"
        description="Yıllar içinde kazandığımız güvenin en güzel kanıtı, hastalarımızın gerçek deneyimleri."
      />
      <section className="section-pad">
        <div className="container-x grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
