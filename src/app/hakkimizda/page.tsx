import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hakkımızda | Melis Çakan Diş Kliniği",
  description:
    "2003 yılından bu yana Sakarya'da hizmet veren Melis Çakan Diş Kliniği'nin hikayesi, misyonu ve vizyonu.",
};

const teamPhotos = [
  { src: "/images/team/IMG_2217.jpg", alt: "Klinik içi görünüm" },
  { src: "/images/team/IMG_2266.jpg", alt: "Klinik tedavi ünitesi" },
  { src: "/images/team/hakki2.JPG", alt: "Klinik ekibi" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="2003'ten bu yana Sakarya'da güvenilir gülüşler"
        description="Klinik hikayemiz, misyonumuz ve tedavi felsefemiz."
      />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl card-shadow mx-auto lg:mx-0">
              <Image
                src="/images/team/melis1.jpg"
                alt="Dr. Melis Çakan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark">
              Klinik Hikayemiz
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink leading-tight">
              {aboutContent.doctor.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-brand-dark">
              {aboutContent.doctor.title}
            </p>
            <p className="mt-5 text-ink-soft leading-relaxed">{aboutContent.intro}</p>
            <p className="mt-4 text-ink-soft leading-relaxed">{aboutContent.doctor.bio}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper-alt">
        <div className="container-x grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-paper border border-black/5 p-8 card-shadow">
              <h3 className="text-xl font-bold text-ink">Misyonumuz</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{aboutContent.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-ink p-8 text-white">
              <h3 className="text-xl font-bold">Vizyonumuz</h3>
              <p className="mt-3 text-white/70 leading-relaxed">{aboutContent.vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark">
              Kliniğimiz
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink leading-tight">
              Modern altyapı, güven veren ortam
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {teamPhotos.map((p, i) => (
              <Reveal key={p.src} delay={i * 0.08}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl card-shadow">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
