import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { clinicInfo, navLinks, services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white/80">
      <div className="container-x py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-semibold">
              MÇ
            </span>
            <span className="text-white font-semibold">{clinicInfo.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            2003&apos;ten bu yana Sakarya&apos;da güvenilir, modern ve kişiye özel
            diş hekimliği hizmeti.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Sayfalar
          </h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Hizmetler
          </h4>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler#${s.slug}`}
                  className="hover:text-brand transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            İletişim
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={17} className="shrink-0 text-brand mt-0.5" />
              <span>{clinicInfo.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={17} className="shrink-0 text-brand mt-0.5" />
              <a href={clinicInfo.phoneHref} className="hover:text-brand transition-colors">
                {clinicInfo.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={17} className="shrink-0 text-brand mt-0.5" />
              <a href={`mailto:${clinicInfo.email}`} className="hover:text-brand transition-colors">
                {clinicInfo.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock size={17} className="shrink-0 text-brand mt-0.5" />
              <span>Pzt - Cmt: 09:00 - 19:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/40 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} {clinicInfo.name}. Tüm hakları saklıdır.</span>
          <span>Sakarya, Türkiye</span>
        </div>
      </div>
    </footer>
  );
}
