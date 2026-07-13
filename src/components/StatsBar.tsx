"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { stats } from "@/lib/content";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState("0");

  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const animatable = !reduceMotion && !Number.isNaN(numeric);

  useEffect(() => {
    if (!inView || !animatable) return;
    const controls = animate(0, numeric, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, animatable, numeric, suffix]);

  return (
    <div
      ref={ref}
      className="text-3xl sm:text-4xl font-display font-semibold text-gradient bg-gradient-to-r from-accent-hover to-accent bg-clip-text text-transparent"
    >
      {animatable ? display : value}
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="text-center sm:text-left"
        >
          <StatValue value={s.value} />
          <div className="mt-1 text-xs sm:text-sm text-foreground-muted">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
