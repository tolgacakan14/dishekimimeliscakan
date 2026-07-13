"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Form gönderimi Formspree üzerinden yapılır (kod gerektirmez, ücretsiz).
// Kurulum: formspree.io üzerinden ücretsiz hesap açıp yeni bir form oluşturun,
// size verilen "Form ID" değerini aşağıdaki satıra yapıştırın.
const FORMSPREE_ID = "mojgqkjk";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      className="rounded-3xl bg-paper border border-black/5 p-7 sm:p-9 card-shadow"
    >
      <h3 className="text-xl font-bold text-ink">Randevu / Bilgi Talebi</h3>
      <p className="mt-1.5 text-sm text-ink-soft">
        Formu doldurun, en kısa sürede size dönüş yapalım.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="block text-xs font-medium text-ink-soft mb-1.5">
            Ad Soyad
          </label>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="block text-xs font-medium text-ink-soft mb-1.5">
            Telefon
          </label>
          <input
            required
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            placeholder="05xx xxx xx xx"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-ink-soft mb-1.5">
            E-posta
          </label>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            placeholder="ornek@eposta.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-ink-soft mb-1.5">
            Mesajınız
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand resize-none"
            placeholder="Talebinizi kısaca yazın..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
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
    </motion.form>
  );
}
