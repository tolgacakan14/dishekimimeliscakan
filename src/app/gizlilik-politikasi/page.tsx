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
    body: "İletişim formunu doldurduğunuzda ad, telefon, e-posta ve mesaj içeriğiniz tarafımıza iletilir. Sitede gezinme sırasında başka kişisel veri toplanmaz.",
  },
  {
    heading: "Üçüncü Taraf Hizmetler",
    body: "Randevu formu Formspree, online randevu takvimi DoktorTakvimi (DocPlanner) ve konum gösterimi Google Maps altyapısı üzerinden çalışır. Bu hizmetler kendi gizlilik politikalarına tabidir.",
  },
  {
    heading: "İletişim",
    body: `Gizlilikle ilgili sorularınız için ${clinicInfo.email} adresinden bize ulaşabilirsiniz.`,
  },
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="Yasal" title="Gizlilik Politikası" sections={sections} />;
}
