"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialCard({
  quote,
  name,
  role,
  index = 0,
}: {
  quote: string;
  name: string;
  role: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="flex h-full flex-col rounded-2xl bg-paper border border-black/5 p-6 card-shadow"
    >
      <Quote className="text-brand" size={26} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft line-clamp-6">
        {quote}
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-dark font-semibold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">{name}</div>
          <div className="text-xs text-ink-soft">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
