import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import Timeline from "@/components/Timeline";
import { aboutContent, clinicValues } from "@/lib/content";
import { breadcrumbSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "2003 yılından bu yana Sakarya'da hizmet veren Melis Çakan Diş Kliniği'nin hikayesi, klinik yaklaşımı ve Dr. Melis Çakan'ın özgeçmişi.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: { url: `${siteUrl}/hakkimizda`, title: "Hakkımızda | Melis Çakan Diş Kliniği" },
};

const teamPhotos = [
  { src: "/images/team/IMG_2217.jpg", alt: "Klinik tedavi ünitesi iç mekan görünümü" },
  { src: "/images/team/IMG_2266.jpg", alt: "Klinik bekleme ve tedavi alanı" },
  { src: "/images/team/hakki2.JPG", alt: "Klinik ekibinden bir görüntü" },
];

export default function AboutPage() {
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <PageHero
        eyebrow="Hakkımızda"
        title="2003'ten bu yana Sakarya'da"
        description="Klinik hikayemiz, yaklaşımımız ve Dr. Melis Çakan'ın özgeçmişi."
      />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-large)] card-shadow mx-auto lg:mx-0">
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
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
              Klinik Hikayemiz
            </span>
            <h2 className="mt-3 text-3xl font-display font-semibold text-foreground leading-tight">
              {aboutContent.doctor.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-accent-hover">
              {aboutContent.doctor.title}
            </p>
            <p className="mt-5 text-foreground-muted leading-relaxed">{aboutContent.intro}</p>
            <p className="mt-4 text-foreground-muted leading-relaxed">{aboutContent.doctor.bio}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-foreground-muted">Eğitim</dt>
                <dd className="mt-1 text-foreground">
                  {aboutContent.doctor.education.map((e) => (
                    <span key={e} className="block leading-snug">
                      {e}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-foreground-muted">Diller</dt>
                <dd className="mt-1 text-foreground">{aboutContent.doctor.languages.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface-muted">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
              Yolculuğumuz
            </span>
            <h2 className="mt-3 text-3xl font-display font-semibold text-foreground leading-tight">
              Zaman içinde büyüyen bir klinik
            </h2>
            <div className="mt-10">
              <Timeline />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground">Misyonumuz</h3>
              <p className="mt-2 text-foreground-muted leading-relaxed">{aboutContent.mission}</p>
            </div>
            <div className="rounded-[var(--radius-large)] bg-ink p-7 text-white">
              <h3 className="text-xl font-display font-semibold">Vizyonumuz</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{aboutContent.vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
              Klinik Yaklaşımımız
            </span>
            <h2 className="mt-3 text-3xl font-display font-semibold text-foreground leading-tight">
              Bizi farklı kılan üç ilke
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {clinicValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-[var(--radius-large)] border border-border bg-surface p-7 shadow-soft">
                  <span className="font-display text-3xl text-accent">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Tedavilerimizi İnceleyin
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface-muted">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
              Kliniğimiz
            </span>
            <h2 className="mt-3 text-3xl font-display font-semibold text-foreground leading-tight">
              Modern altyapı, güven veren ortam
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {teamPhotos.map((p, i) => (
              <Reveal key={p.src} delay={i * 0.08}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-large)] card-shadow">
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
