import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, CalendarCheck, Navigation } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";
import { clinicInfo } from "@/lib/content";
import { breadcrumbSchema, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Sakarya Adapazarı'ndaki kliniğimizle iletişime geçin, online randevu alın.",
  alternates: { canonical: "/iletisim" },
  openGraph: { url: `${siteUrl}/iletisim`, title: "İletişim | Melis Çakan Diş Kliniği" },
};

const infoItems = [
  { icon: MapPin, label: "Adres", value: clinicInfo.address },
  { icon: Phone, label: "Telefon", value: clinicInfo.phone, href: clinicInfo.phoneHref },
  { icon: Mail, label: "E-posta", value: clinicInfo.email, href: `mailto:${clinicInfo.email}` },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pazartesi - Cumartesi: 09:00 - 19:00" },
];

export default function ContactPage() {
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "İletişim", path: "/iletisim" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <PageHero
        eyebrow="İletişim"
        title="Bize ulaşın"
        description="Sorularınız ve randevu talepleriniz için formu doldurun ya da doğrudan arayın."
      />

      <section id="randevu" className="section-pad scroll-mt-24">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-hover">
              <CalendarCheck size={14} />
              Online Randevu
            </span>
            <h2 className="mt-3 text-3xl font-display font-semibold text-foreground leading-tight">
              Uygun saati seç, hemen randevunu al
            </h2>
            <p className="mt-3 text-foreground-muted leading-relaxed">
              Telefonla aramaya gerek kalmadan, DoktorTakvimi üzerinden gerçek
              zamanlı müsait saatlerden dilediğini seçebilirsin. Randevu
              onayını mesaj olarak alırsın.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-[var(--radius-large)] border border-border bg-surface p-2 card-shadow sm:p-4">
            <BookingWidget />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface-muted">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-6">
            <div className="rounded-[var(--radius-large)] bg-ink p-7 sm:p-9 text-white">
              <h3 className="text-lg font-display font-semibold">İletişim Bilgileri</h3>
              <ul className="mt-6 space-y-5">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-tint">
                      <item.icon size={18} aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs text-white/50">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium hover:text-accent-tint">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium">{item.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  clinicInfo.mapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-white/10"
              >
                <Navigation size={14} aria-hidden />
                Yol Tarifi Al
              </a>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-large)] card-shadow h-64">
              <iframe
                title="Klinik Konumu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  clinicInfo.mapsQuery
                )}&output=embed`}
              />
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
