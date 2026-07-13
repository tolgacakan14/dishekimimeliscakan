"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const images = [
  "/images/gallery/gal-1.jpg",
  "/images/gallery/gal-2.jpg",
  "/images/gallery/gal-3.jpg",
  "/images/gallery/gal-4.jpg",
  "/images/gallery/gal-5.jpg",
  "/images/gallery/gal-6.jpg",
  "/images/gallery/gal-7.jpg",
  "/images/gallery/gal-8.jpg",
  "/images/gallery/gal-9.jpg",
  "/images/team/IMG_2217.jpg",
  "/images/team/IMG_2266.jpg",
  "/images/team/hakki2.JPG",
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((a) => (a === null ? null : (a + 1) % images.length));
  const prev = () =>
    setActive((a) => (a === null ? null : (a - 1 + images.length) % images.length));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
        {images.map((src, i) => (
          <Reveal key={src} delay={(i % 6) * 0.05}>
            <button
              onClick={() => setActive(i)}
              className="group relative block w-full aspect-square overflow-hidden rounded-2xl card-shadow"
            >
              <Image
                src={src}
                alt={`Klinik galeri görseli ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
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
              aria-label="Önceki"
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
                src={images[active]}
                alt={`Klinik galeri görseli ${active + 1}`}
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
              aria-label="Sonraki"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
