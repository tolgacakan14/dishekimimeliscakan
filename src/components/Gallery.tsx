"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const images = [
  { src: "/images/gallery/gal-1.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/gallery/gal-2.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/gallery/gal-3.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/gallery/gal-4.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/gallery/gal-5.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/gallery/gal-6.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/gallery/gal-7.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/gallery/gal-8.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/gallery/gal-9.jpg", alt: "Klinikten tedavi sonrası çalışma örneği" },
  { src: "/images/team/IMG_2217.jpg", alt: "Klinik tedavi ünitesi iç mekan görünümü" },
  { src: "/images/team/IMG_2266.jpg", alt: "Klinik bekleme ve tedavi alanı" },
  { src: "/images/team/hakki2.JPG", alt: "Klinik ekibinden bir görüntü" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((a) => (a === null ? null : (a + 1) % images.length));
  const prev = () =>
    setActive((a) => (a === null ? null : (a - 1 + images.length) % images.length));

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 6) * 0.05}>
            <button
              onClick={() => setActive(i)}
              className="group relative block w-full aspect-square overflow-hidden rounded-[var(--radius-medium)] card-shadow"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/15" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Görsel önizleme"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Kapat"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Önceki görsel"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative h-[70vh] w-[90vw] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Sonraki görsel"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
