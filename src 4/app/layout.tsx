import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import CookieConsent from "@/components/CookieConsent";
import { clinicSchema } from "@/lib/seo";

const siteUrl = "https://dishekimimeliscakan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melis Çakan Diş Kliniği | Sakarya Adapazarı",
    template: "%s | Melis Çakan Diş Kliniği",
  },
  description:
    "Sakarya Adapazarı'nda 2003'ten bu yana Dr. Melis Çakan ve ekibinden kozmetik diş hekimliği, implant, kanal tedavisi ve daha fazlası. Randevu alın.",
  keywords: [
    "sakarya diş hekimi",
    "adapazarı diş hekimi",
    "sakarya diş kliniği",
    "sakarya implant tedavisi",
    "sakarya estetik diş hekimliği",
    "sakarya kanal tedavisi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Melis Çakan Diş Kliniği",
    title: "Melis Çakan Diş Kliniği | Sakarya Adapazarı",
    description:
      "Sakarya Adapazarı'nda 2003'ten bu yana güvenilir diş hekimliği hizmetleri. Online randevu alın.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melis Çakan Diş Kliniği | Sakarya Adapazarı",
    description:
      "Sakarya Adapazarı'nda 2003'ten bu yana güvenilir diş hekimliği hizmetleri.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* App Router root layout is the correct place for global font
            links (unlike Pages Router's _document.js), so this rule
            does not apply here. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          İçeriğe geç
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
        <CookieConsent />
      </body>
    </html>
  );
}
