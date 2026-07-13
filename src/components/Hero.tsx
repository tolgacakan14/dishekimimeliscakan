"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { clinicInfo } from "@/lib/content";

const slides = [
  { src: "/images/home/slider1.jpg", alt: "Sağlıklı Dişler Mutlu Gülüşler" },
  { src: "/images/home/slider2.jpg", alt: "Kozmetik Diş Hekimliği ile Gülüşünüzü Tasarlayın" },
  { src: "/images/home/slider4.jpg", alt: "Güzel ve Sağlıklı Dişler İçin En İyi Çözüm" },
  { src: "/images/home/slider3.jpg", alt: "Modern Diş Kliniği Sakarya" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="relative container-x pt-32 pb-28 sm:pt-40 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white/90 border border-white/15"
        >
          <Sparkles size={13} className="text-gold" />
          Sakarya&apos;da 2003&apos;ten beri güvenilir gülüşler
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-6 max-w-2xl text-4xl sm:text-6xl font-extrabold leading-[1.08] text-white tracking-tight"
        >
          Sağlıklı Dişler,
          <br />
          <span className="text-gradient bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
            Mutlu Gülüşler
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="mt-5 max-w-lg text-base sm:text-lg text-white/70 leading-relaxed"
        >
          Dr. Melis Çakan ve ekibinden; kozmetik diş hekimliği, implant ve
          kanal tedavisinden diş beyazlatmaya kadar tüm tedavilerde modern ve
          ağrısız yaklaşım.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-transform hover:scale-[1.03]"
          >
            Randevu Al
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={clinicInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone size={16} />
            {clinicInfo.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="mt-10 flex items-center gap-2 text-xs text-white/60"
        >
          <ShieldCheck size={15} className="text-emerald-300" />
          T.C. Sağlık Bakanlığı onaylı klinik &middot; 20+ yıllık tecrübe
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slayt ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-7 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
