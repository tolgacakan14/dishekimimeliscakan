"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "melis-dental-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage is only available client-side; reading it here (after
    // mount) rather than during render avoids a server/client hydration
    // mismatch, so this synchronous setState is intentional.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!stored);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-live="polite"
          aria-label="Çerez onayı"
          className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-md rounded-2xl border border-border bg-surface p-5 shadow-card sm:inset-x-auto sm:right-6 sm:bottom-6 lg:bottom-6"
        >
          <p className="text-sm leading-relaxed text-foreground-muted">
            Sitemizde deneyiminizi iyileştirmek için temel çerezler
            kullanıyoruz. Detaylar için{" "}
            <Link href="/cerez-politikasi" className="font-medium text-accent-hover underline underline-offset-2">
              Çerez Politikası
            </Link>
            &apos;nı inceleyebilirsiniz.
          </p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={accept}
              className="flex-1 rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            >
              Kabul Et
            </button>
            <button
              onClick={decline}
              className="flex-1 rounded-full border border-border px-4 py-2.5 text-xs font-semibold text-foreground-muted transition-colors hover:bg-surface-muted"
            >
              Reddet
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
