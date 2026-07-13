import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBanner from "@/components/CtaBanner";
import { testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referanslar | Melis Çakan Diş Kliniği",
  description: "Hastalarımızın Melis Çakan Diş Kliniği hakkındaki gerçek yorumları.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslar"
        title="Hastalarımız ne diyor?"
        description="Yıllar içinde kazandığımız güvenin en güzel kanıtı, hastalarımızın yorumları."
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
