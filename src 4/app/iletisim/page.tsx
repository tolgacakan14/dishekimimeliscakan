import type { Metadata } from "next";
import { MapPin, Phone, Clock, CalendarCheck, Navigation, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
        description="DoktorTakvimi üzerinden online randevu alabilir, WhatsApp'tan yazabilir ya da doğrudan arayabilirsiniz."
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
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
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
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={clinicInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle size={16} aria-hidden />
                  WhatsApp&apos;tan Yaz
                </a>
                <a
                  href={clinicInfo.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  <Phone size={16} aria-hidden />
                  {clinicInfo.phone}
                </a>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${clinicInfo.coords.lat},${clinicInfo.coords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-white/70 transition-colors hover:text-accent-tint"
              >
                <Navigation size={14} aria-hidden />
                Yol Tarifi Al
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-[var(--radius-large)] card-shadow min-h-[320px] lg:min-h-full">
            <iframe
              title="Klinik Konumu — Melis Çakan Diş Kliniği"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${clinicInfo.coords.lat},${clinicInfo.coords.lng}&z=17&output=embed`}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
