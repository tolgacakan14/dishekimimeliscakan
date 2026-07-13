"use client";

import Link from "next/link";
import Image from "next/image";
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
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius-large)] border border-border shadow-soft transition-shadow hover:shadow-card focus-visible:shadow-card text-white"
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className={`pointer-events-none absolute inset-0 ${
                  featured
                    ? "bg-gradient-to-t from-ink via-ink/55 to-ink/10"
                    : "bg-gradient-to-t from-ink/90 via-ink/35 to-ink/5"
                }`}
              />

              <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-sm transition-colors ${
                    "bg-white/15 text-accent-tint group-hover:bg-accent group-hover:text-white"
                  }`}
                >
                  <ServiceIcon name={service.icon} size={featured ? 26 : 22} />
                </div>

                <div className="mt-6">
                  <h3 className={`font-display font-semibold ${featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed text-white/75 ${
                      featured ? "max-w-sm" : ""
                    }`}
                  >
                    {service.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-tint">
                    Detaylı bilgi
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
