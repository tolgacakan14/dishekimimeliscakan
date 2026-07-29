import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { clinicInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Kişisel verilerin korunması hakkında aydınlatma metni.",
  robots: { index: false, follow: true },
};

// TODO: Bu metin klinik/hukuk danışmanı onayından geçmiş nihai KVKK
// aydınlatma metni ile değiştirilmelidir.
const sections = [
  {
    heading: "Veri Sorumlusu",
    body: `${clinicInfo.name}, iletişim formu ve randevu talepleri kapsamında paylaştığınız ad, telefon, e-posta ve mesaj içeriği gibi kişisel verileri, yalnızca talebinizi yanıtlamak amacıyla işler.`,
  },
  {
    heading: "İşlenen Veriler ve Amaç",
    body: "Form üzerinden ilettiğiniz bilgiler; randevu planlaması, size dönüş yapılması ve talebinizin değerlendirilmesi amacıyla kullanılır. Bu veriler pazarlama amacıyla üçüncü taraflarla paylaşılmaz.",
  },
  {
    heading: "Haklarınız",
    body: `6698 sayılı KVKK kapsamında; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme haklarına sahipsiniz. Talepleriniz için ${clinicInfo.email} adresinden bize ulaşabilirsiniz.`,
  },
];

export default function KvkkPage() {
  return <LegalPage eyebrow="Yasal" title="KVKK Aydınlatma Metni" sections={sections} />;
}
