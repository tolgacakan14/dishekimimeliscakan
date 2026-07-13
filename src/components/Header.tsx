"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, clinicInfo } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_30px_-15px_rgba(12,143,134,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5 z-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-semibold text-lg tracking-tight">
            MÇ
          </span>
          <span className="leading-tight">
            <span className="block font-semibold text-ink text-[15px] sm:text-base">
              {clinicInfo.shortName}
            </span>
            <span className="block text-[11px] sm:text-xs text-ink-soft tracking-wide">
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
                  active ? "text-brand-dark" : "text-ink-soft hover:text-brand-dark"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-brand-light"
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
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-[1.03]"
          >
            <Phone size={15} />
            {clinicInfo.phone}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-brand-dark"
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-brand-light"
          >
            <nav className="container-x flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    pathname === link.href
                      ? "bg-brand-light text-brand-dark"
                      : "text-ink-soft"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={clinicInfo.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white"
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
