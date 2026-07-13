"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import type { Service } from "@/lib/content";

const spanClasses = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-1",
];

export default function ServicesBento({ items }: { items: Service[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 auto-rows-[minmax(180px,auto)]">
      {items.map((service, i) => {
        const featured = i === 0;
        return (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            className={spanClasses[i % spanClasses.length]}
          >
            <Link
              href={`/hizmetler/${service.slug}`}
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius-large)] border border-border p-6 sm:p-7 shadow-soft transition-shadow hover:shadow-card focus-visible:shadow-card ${
                featured ? "bg-ink text-white" : "bg-surface text-foreground"
              }`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-80" />

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                  featured
                    ? "bg-white/10 text-accent-tint"
                    : "bg-accent-tint text-accent-hover group-hover:bg-accent group-hover:text-white"
                }`}
              >
                <ServiceIcon name={service.icon} size={featured ? 26 : 22} />
              </div>

              <div className="relative mt-6">
                <h3 className={`font-display font-semibold ${featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                  {service.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    featured ? "text-white/65 max-w-sm" : "text-foreground-muted"
                  }`}
                >
                  {service.short}
                </p>
                <span
                  className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${
                    featured ? "text-accent-tint" : "text-accent-hover"
                  }`}
                >
                  Detaylı bilgi
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
