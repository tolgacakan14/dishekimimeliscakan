import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export const metadata: Metadata = {
  title: "Melis Çakan Diş Kliniği | Sakarya",
  description:
    "Sakarya Adapazarı'nda 2003'ten bu yana kozmetik diş hekimliği, implant, kanal tedavisi ve daha fazlası. Dr. Melis Çakan Diş Kliniği ile sağlıklı gülüşe randevu alın.",
  keywords: [
    "sakarya diş hekimi",
    "adapazarı diş kliniği",
    "melis çakan",
    "implant sakarya",
    "diş beyazlatma sakarya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCall />
      </body>
    </html>
  );
}
