import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
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

      <section className="section-pad bg-paper-alt">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl card-shadow">
                <Image
                  src="/images/team/IMG_2217.jpg"
                  alt="Melis Çakan Diş Kliniği"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-brand px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-extrabold">20+</div>
                <div className="text-xs text-white/80">Yıllık Deneyim</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark">
              Hakkımızda
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
              Sakarya&apos;da güvenle tercih edilen bir diş kliniği
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
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
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark">
              Hizmetlerimiz
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
              Tek çatı altında kapsamlı diş tedavileri
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-light px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand hover:text-white"
            >
              Tüm Hizmetleri Gör
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper-alt">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark">
              Referanslar
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
              Hastalarımız ne diyor?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
