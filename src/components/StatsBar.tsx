"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="text-center sm:text-left"
        >
          <div className="text-3xl sm:text-4xl font-extrabold text-gradient bg-gradient-to-r from-brand-dark to-brand bg-clip-text text-transparent">
            {s.value}
          </div>
          <div className="mt-1 text-xs sm:text-sm text-ink-soft">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
