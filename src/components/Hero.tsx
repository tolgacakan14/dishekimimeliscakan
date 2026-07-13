"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, CalendarCheck, UserRound, Sparkles, MapPin } from "lucide-react";
import { clinicInfo } from "@/lib/content";

const slides = [
  { src: "/images/home/slider1.jpg", alt: "Melis Çakan Diş Kliniği tedavi ünitesi" },
  { src: "/images/home/slider2.jpg", alt: "Kozmetik diş hekimliği uygulaması" },
  { src: "/images/home/slider4.jpg", alt: "Klinik iç mekan görünümü" },
  { src: "/images/home/slider3.jpg", alt: "Modern diş kliniği, Sakarya" },
];

const trustItems = [
  { icon: CalendarCheck, label: "20+ yıllık deneyim" },
  { icon: UserRound, label: "Kişiye özel tedavi planı" },
  { icon: Sparkles, label: "Modern klinik yaklaşımı" },
  { icon: MapPin, label: "Sakarya merkez" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/45 to-transparent" />
      </div>

      <div className="relative container-x pt-32 pb-16 sm:pt-40 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white/85 border border-white/15"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Sakarya&apos;da 2003&apos;ten beri
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="mt-6 max-w-2xl font-display font-semibold leading-[1.08] text-white"
          style={{ fontSize: "clamp(2.25rem, 5.4vw, 4rem)" }}
        >
          Sağlıklı bir gülüş,
          <br />
          <span className="text-gradient bg-gradient-to-r from-[#99f6e4] via-[#5eead4] to-[#2dd4bf] bg-clip-text text-transparent">
            kendinizi iyi hissetmekle
          </span>{" "}
          başlar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="mt-5 max-w-lg text-base sm:text-lg text-white/70 leading-relaxed"
        >
          Dr. Melis Çakan ve ekibinden; kozmetik diş hekimliği, implant ve
          kanal tedavisinden diş beyazlatmaya kadar, size özel planlanan
          modern bir tedavi deneyimi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.36 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/iletisim#randevu"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-black/20 transition-transform hover:scale-[1.03] hover:-translate-y-0.5"
          >
            Randevu Al
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Tedavileri İncele
          </Link>
          <a
            href={clinicInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-full px-3 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            <Phone size={16} />
            {clinicInfo.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.44 }}
          className="mt-11 flex flex-wrap gap-x-7 gap-y-3"
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs text-white/60">
              <item.icon size={15} className="text-gold" />
              {item.label}
            </div>
          ))}
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
