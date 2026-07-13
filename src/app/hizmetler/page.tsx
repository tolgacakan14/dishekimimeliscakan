import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Melis Çakan Diş Kliniği",
  description:
    "Dolgu, implant, kanal tedavisi, kozmetik diş hekimliği, zirkonyum ve porselen kaplama dahil tüm diş tedavileri.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Tek çatı altında kapsamlı diş tedavileri"
        description="İhtiyacınıza uygun tedaviyi belirlemek için önce detaylı bir muayene ile başlıyoruz."
      />

      <section className="section-pad">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <div
                id={s.slug}
                className="scroll-mt-28 flex flex-col sm:flex-row gap-6 rounded-2xl bg-paper border border-black/5 p-7 sm:p-8 card-shadow"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                  <ServiceIcon name={s.icon} size={26} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-ink">{s.title}</h2>
                  <p className="mt-2.5 text-ink-soft leading-relaxed">{s.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
