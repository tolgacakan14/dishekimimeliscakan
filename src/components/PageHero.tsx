"use client";

import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -top-24 -right-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative container-x pt-28 pb-16 sm:pt-36 sm:pb-20">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-light/90"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-3 text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-2xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 max-w-xl text-white/60 text-sm sm:text-base leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
