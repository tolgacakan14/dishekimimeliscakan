"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { navLinks, clinicInfo } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/85 backdrop-blur-md shadow-[0_4px_30px_-15px_rgba(33,31,28,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 z-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-display font-semibold text-lg tracking-tight transition-transform hover:scale-105">
            MÇ
          </span>
          <span className="leading-tight">
            <span className="block font-display font-semibold text-foreground text-[15px] sm:text-base">
              {clinicInfo.shortName}
            </span>
            <span className="block text-[11px] sm:text-xs text-foreground-muted tracking-wide">
              Diş Kliniği
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                  active ? "text-accent-hover" : "text-foreground-muted hover:text-accent-hover"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent-tint"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={clinicInfo.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-accent-hover"
          >
            <Phone size={15} />
            {clinicInfo.phone}
          </a>
          <Link
            href="/iletisim#randevu"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03] hover:-translate-y-0.5"
          >
            <CalendarCheck size={15} />
            Randevu Al
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden z-10 flex h-10 w-10 items-center justify-center rounded-full bg-accent-tint text-accent-hover"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-surface/95 backdrop-blur-md border-t border-border"
          >
            <nav className="container-x flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium min-h-11 flex items-center ${
                    pathname === link.href
                      ? "bg-accent-tint text-accent-hover"
                      : "text-foreground-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={clinicInfo.phoneHref}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white min-h-11"
              >
                <Phone size={15} />
                {clinicInfo.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
