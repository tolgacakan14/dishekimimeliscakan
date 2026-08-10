"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/content";

export default function Timeline() {
  return (
    <div className="relative max-w-2xl">
      <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border" aria-hidden />
      <div className="space-y-10">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex gap-6"
          >
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-soft">
              {i + 1}
            </span>
            <div className="pt-1">
              <div className="font-display text-2xl font-semibold text-accent-hover">
                {item.year}
              </div>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
