"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { clinicInfo } from "@/lib/content";

export default function CtaBanner() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 sm:px-16 sm:py-16 text-center"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <h2 className="relative text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            Gülüşünüze kavuşmak için bir adım uzaktasınız
          </h2>
          <p className="relative mt-4 text-sm sm:text-base text-white/60 max-w-lg mx-auto">
            Muayene ve tedavi planlaması için hemen bize ulaşın, size en uygun
            randevu saatini birlikte belirleyelim.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/iletisim#randevu"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-transform hover:scale-[1.03]"
            >
              Randevu Al
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={clinicInfo.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} />
              {clinicInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
