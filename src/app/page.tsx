import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesBento from "@/components/ServicesBento";
import GuideFinder from "@/components/GuideFinder";
import TestimonialCard from "@/components/TestimonialCard";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { services, testimonials, aboutContent } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section-pad">
        <div className="container-x">
          <StatsBar />
        </div>
      </section>

      <section className="section-pad bg-surface-muted">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-large)] card-shadow">
                <Image
                  src="/images/team/IMG_2217.jpg"
                  alt="Melis Çakan Diş Kliniği tedavi ünitesi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-accent px-6 py-5 text-white shadow-xl">
                <div className="font-display text-3xl font-semibold">20+</div>
                <div className="text-xs text-white/80">Yıllık Deneyim</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
              Hakkımızda
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
              Sakarya&apos;da güvenle tercih edilen bir diş kliniği
            </h2>
            <p className="mt-5 text-foreground-muted leading-relaxed">
              {aboutContent.intro}
            </p>
            <Link
              href="/hakkimizda"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Daha Fazla Bilgi
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <GuideFinder />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface-muted">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
              Hizmetlerimiz
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
              Tek çatı altında kapsamlı diş tedavileri
            </h2>
          </Reveal>

          <div className="mt-12">
            <ServicesBento items={services.slice(0, 6)} />
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-tint px-6 py-3 text-sm font-semibold text-accent-hover transition-colors hover:bg-accent hover:text-white"
            >
              Tüm Hizmetleri Gör
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-hover">
              Hasta Deneyimleri
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
              Hastalarımız ne diyor?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
