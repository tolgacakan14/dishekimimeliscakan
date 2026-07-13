import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { clinicInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "İletişim | Melis Çakan Diş Kliniği",
  description: "Sakarya Adapazarı'ndaki kliniğimizle iletişime geçin, randevu alın.",
};

const infoItems = [
  { icon: MapPin, label: "Adres", value: clinicInfo.address },
  { icon: Phone, label: "Telefon", value: clinicInfo.phone, href: clinicInfo.phoneHref },
  { icon: Mail, label: "E-posta", value: clinicInfo.email, href: `mailto:${clinicInfo.email}` },
  { icon: Clock, label: "Çalışma Saatleri", value: "Pazartesi - Cumartesi: 09:00 - 19:00" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize ulaşın"
        description="Sorularınız ve randevu talepleriniz için formu doldurun ya da doğrudan arayın."
      />

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl bg-ink p-7 sm:p-9 text-white">
              <h3 className="text-lg font-bold">İletişim Bilgileri</h3>
              <ul className="mt-6 space-y-5">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-light">
                      <item.icon size={18} />
                    </span>
                    <div>
                      <div className="text-xs text-white/50">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium hover:text-brand-light">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium">{item.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl card-shadow h-64">
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
