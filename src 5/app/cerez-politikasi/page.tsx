import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Web sitesi çerez kullanım politikası.",
  robots: { index: false, follow: true },
};

// TODO: Klinik onaylı nihai çerez politikası metni ile değiştirilecek.
const sections = [
  {
    heading: "Çerez Kullanımı",
    body: "Sitemiz, tercihinizi hatırlamak için temel bir çerez onay kaydı tutar. Google Maps ve online randevu takvimi gibi gömülü üçüncü taraf içerikler kendi çerezlerini kullanabilir.",
  },
  {
    heading: "Tercihlerinizi Yönetme",
    body: "Sayfanın altında beliren çerez onay şeridinden tercihinizi belirleyebilir, tarayıcı ayarlarınızdan çerezleri istediğiniz zaman silebilirsiniz.",
  },
];

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="Yasal" title="Çerez Politikası" sections={sections} />;
}
