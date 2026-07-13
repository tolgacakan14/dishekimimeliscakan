"use client";

import Link from "next/link";
import { Phone, CalendarCheck, MapPin } from "lucide-react";
import { clinicInfo } from "@/lib/content";

// Mobile-only sticky action bar. Kept to a maximum of three real,
// verifiable actions (no fabricated WhatsApp number — add one in
// lib/content.ts as `whatsappNumber` once available and this bar
// can be extended).
export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="safe-bottom border-t border-border bg-surface/95 backdrop-blur-md shadow-[0_-8px_30px_-15px_rgba(33,31,28,0.25)]">
        <div className="grid grid-cols-3">
          <a
            href={clinicInfo.phoneHref}
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-foreground-muted transition-colors hover:text-accent-hover active:scale-95"
          >
            <Phone size={19} />
            Ara
          </a>
          <Link
            href="/iletisim#randevu"
            className="flex flex-col items-center justify-center gap-1 border-x border-border bg-accent py-2.5 text-[11px] font-semibold text-white active:scale-95"
          >
            <CalendarCheck size={19} />
            Randevu Al
          </Link>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              clinicInfo.mapsQuery
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-foreground-muted transition-colors hover:text-accent-hover active:scale-95"
          >
            <MapPin size={19} />
            Yol Tarifi
          </a>
        </div>
      </div>
    </div>
  );
}
