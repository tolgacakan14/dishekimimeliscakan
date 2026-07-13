"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  RotateCcw,
  Frown,
  Smile,
  ShieldAlert,
  Stethoscope,
  CircleHelp,
  Sparkles,
} from "lucide-react";

type Option = {
  label: string;
  icon: typeof Frown;
  href: string;
  ctaLabel: string;
  note: string;
};

const options: Option[] = [
  {
    label: "Diş ağrısı veya hassasiyet",
    icon: Frown,
    href: "/hizmetler/kanal-tedavisi",
    ctaLabel: "Kanal Tedavisi hakkında bilgi al",
    note: "Ağrı ve hassasiyet birçok farklı nedenden kaynaklanabilir; en doğru değerlendirme muayenededir.",
  },
  {
    label: "Eksik diş",
    icon: ShieldAlert,
    href: "/hizmetler/dis-implanti",
    ctaLabel: "Diş İmplantı hakkında bilgi al",
    note: "Eksik diş için uygunluğunuz klinik muayene ve görüntüleme sonrası netleşir.",
  },
  {
    label: "Gülüş görünümü",
    icon: Smile,
    href: "/hizmetler/kozmetik-dis-hekimligi",
    ctaLabel: "Kozmetik Diş Hekimliği hakkında bilgi al",
    note: "Estetik hedefleriniz doğrultusunda size özel bir plan birlikte oluşturulur.",
  },
  {
    label: "Diş eti problemi",
    icon: Stethoscope,
    href: "/hizmetler/periodontoloji-tedavisi",
    ctaLabel: "Periodontoloji Tedavisi hakkında bilgi al",
    note: "Diş eti sağlığı erken teşhisle büyük ölçüde korunabilir.",
  },
  {
    label: "Rutin kontrol",
    icon: Sparkles,
    href: "/iletisim#randevu",
    ctaLabel: "Kontrol randevusu al",
    note: "Düzenli kontroller, olası sorunları erken aşamada fark etmemizi sağlar.",
  },
  {
    label: "Emin değilim",
    icon: CircleHelp,
    href: "/iletisim#randevu",
    ctaLabel: "Bizimle iletişime geçin",
    note: "Sorun değil — durumu birlikte değerlendirmek için bir randevu yeterli.",
  },
];

export default function GuideFinder() {
  const [selected, setSelected] = useState<Option | null>(null);

  return (
    <div className="rounded-[var(--radius-large)] border border-border bg-surface p-6 sm:p-10 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-hover">
            <Sparkles size={12} />
            Size Uygun Başlangıç Noktası
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
            Sizi en çok rahatsız eden konu nedir?
          </h3>
        </div>
        {selected && (
          <button
            onClick={() => setSelected(null)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium text-foreground-muted transition-colors hover:bg-surface-muted"
          >
            <RotateCcw size={13} />
            Yeniden başlat
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="options"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setSelected(opt)}
                className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-surface-muted px-4 py-6 text-center transition-colors hover:border-accent hover:bg-accent-tint"
              >
                <opt.icon
                  size={22}
                  className="text-accent-hover transition-transform group-hover:-translate-y-0.5"
                />
                <span className="text-sm font-medium text-foreground">{opt.label}</span>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 rounded-2xl bg-ink p-6 sm:p-8 text-white"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
              <selected.icon size={20} className="text-accent-tint" />
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">{selected.note}</p>
            <p className="mt-3 text-xs text-white/45 leading-relaxed">
              Bu seçim bir teşhis değildir. Size uygun değerlendirme için
              kliniğimizle iletişime geçebilirsiniz.
            </p>
            <Link
              href={selected.href}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              {selected.ctaLabel}
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
