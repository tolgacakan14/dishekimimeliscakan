import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/content";
import { breadcrumbSchema, serviceSchema, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/hizmetler/${slug}` },
    openGraph: {
      url: `${siteUrl}/hizmetler/${slug}`,
      title: `${service.title} | Melis Çakan Diş Kliniği`,
      description: service.short,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const related = services.filter((_, i) => i !== index).slice(0, 3);

  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: service.title, path: `/hizmetler/${slug}` },
  ]);
  const schema = serviceSchema(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <PageHero eyebrow="Hizmetlerimiz" title={service.title} description={service.short} />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-foreground-muted">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-accent-hover">
                    Anasayfa
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/hizmetler" className="hover:text-accent-hover">
                    Hizmetler
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground">{service.title}</li>
              </ol>
            </nav>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-tint text-accent-hover">
              <ServiceIcon name={service.icon} size={26} />
            </div>
            <h2 className="mt-6 text-2xl font-display font-semibold text-foreground">
              Tedavi hakkında
            </h2>
            <p className="mt-3 text-foreground-muted leading-relaxed">{service.description}</p>

            <p className="mt-6 text-sm text-foreground-muted leading-relaxed border-l-2 border-accent/40 pl-4">
              Bu bilgiler genel bilgilendirme amaçlıdır ve tanı veya kesin tedavi
              önerisi yerine geçmez. Size özel uygun tedavi yaklaşımı, klinikte
              yapılacak muayene sonrasında birlikte belirlenir.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/iletisim#randevu"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Randevu Al
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground-muted transition-colors hover:bg-surface-muted"
              >
                <ArrowLeft size={16} />
                Tüm Tedaviler
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-large)] border border-border bg-surface-muted p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                İlgili Tedaviler
              </h3>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/hizmetler/${r.slug}`}
                      className="group flex items-center justify-between rounded-xl bg-surface px-4 py-3 text-sm font-medium text-foreground shadow-soft transition-colors hover:text-accent-hover"
                    >
                      {r.title}
                      <ArrowRight
                        size={14}
                        className="text-foreground-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent-hover"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
