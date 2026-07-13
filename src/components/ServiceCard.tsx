"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import type { Service } from "@/lib/content";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      id={service.slug}
      className="group relative rounded-2xl bg-paper border border-black/5 p-6 card-shadow scroll-mt-28"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand-dark transition-colors group-hover:bg-brand group-hover:text-white">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.short}</p>
      <Link
        href={`/hizmetler#${service.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark"
      >
        Detaylı Bilgi
        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
