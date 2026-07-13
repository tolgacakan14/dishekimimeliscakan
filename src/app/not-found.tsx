import Link from "next/link";
import { ArrowRight, SmilePlus } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-x flex flex-col items-center text-center py-16">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-tint text-accent-hover">
          <SmilePlus size={28} />
        </span>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl font-semibold text-foreground">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mt-3 max-w-md text-foreground-muted leading-relaxed">
          Bağlantı eskimiş ya da adres yanlış yazılmış olabilir. Anasayfaya
          dönerek aradığınızı bulabilirsiniz.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          Anasayfaya Dön
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
