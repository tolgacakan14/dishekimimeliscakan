import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { clinicInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Web sitesi gizlilik politikası.",
  robots: { index: false, follow: true },
};

// TODO: Klinik onaylı nihai gizlilik politikası metni ile değiştirilecek.
const sections = [
  {
    heading: "Topladığımız Bilgiler",
    body: "WhatsApp üzerinden veya telefonla bizimle iletişime geçtiğinizde paylaştığınız ad, telefon ve mesaj içeriği tarafımıza iletilir. Sitede gezinme sırasında başka kişisel veri toplanmaz.",
  },
  {
    heading: "Üçüncü Taraf Hizmetler",
    body: "Online randevu takvimi DoktorTakvimi (DocPlanner), konum gösterimi Google Maps ve WhatsApp altyapısı üzerinden çalışır. Bu hizmetler kendi gizlilik politikalarına tabidir.",
  },
  {
    heading: "İletişim",
    body: `Gizlilikle ilgili sorularınız için ${clinicInfo.email} adresinden bize ulaşabilirsiniz.`,
  },
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="Yasal" title="Gizlilik Politikası" sections={sections} />;
}
