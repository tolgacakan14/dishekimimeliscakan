"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/content";

// Form gönderimi Formspree üzerinden yapılır (kod gerektirmez, ücretsiz).
const FORMSPREE_ID = "mojgqkjk";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-large)] bg-surface border border-border p-7 sm:p-9 card-shadow"
    >
      <h3 className="text-xl font-display font-semibold text-foreground">
        Randevu / Bilgi Talebi
      </h3>
      <p className="mt-1.5 text-sm text-foreground-muted">
        Formu doldurun, en kısa sürede size dönüş yapalım.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-medium text-foreground-muted mb-1.5">
            Ad Soyad
          </label>
          <input id="cf-name" required name="name" type="text" className={inputClass} placeholder="Adınız Soyadınız" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="block text-xs font-medium text-foreground-muted mb-1.5">
            Telefon
          </label>
          <input id="cf-phone" required name="phone" type="tel" className={inputClass} placeholder="05xx xxx xx xx" />
        </div>
        <div>
          <label htmlFor="cf-service" className="block text-xs font-medium text-foreground-muted mb-1.5">
            İlgilenilen Hizmet
          </label>
          <select id="cf-service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Seçiniz
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Emin değilim">Emin değilim</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-contact" className="block text-xs font-medium text-foreground-muted mb-1.5">
            Tercih Edilen İletişim Yöntemi
          </label>
          <select id="cf-contact" name="preferred_contact" className={inputClass} defaultValue="Telefon">
            <option value="Telefon">Telefon</option>
            <option value="E-posta">E-posta</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="block text-xs font-medium text-foreground-muted mb-1.5">
            Kısa Not <span className="text-foreground-muted/60">(opsiyonel)</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="Eklemek istediğiniz bir şey varsa yazabilirsiniz..."
          />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-foreground-muted">
        <input
          required
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
        />
        <span>
          <Link href="/kvkk" className="font-medium text-accent-hover underline underline-offset-2">
            KVKK Aydınlatma Metni
          </Link>
          &apos;ni okudum, kişisel verilerimin bu talep kapsamında işlenmesini kabul ediyorum.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending" || !consent}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <Send size={16} />
            Gönder
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600">
            <CheckCircle2 size={16} />
            Talebiniz alındı, en kısa sürede dönüş yapacağız.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-red-600">
            <AlertCircle size={16} />
            Gönderim başarısız oldu, lütfen bizi telefonla arayın.
          </p>
        )}
      </div>
    </motion.form>
  );
}
