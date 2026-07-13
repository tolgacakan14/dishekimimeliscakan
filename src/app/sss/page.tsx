import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Melis Çakan Diş Kliniği",
  description:
    "Diş beyazlatma, implant, kanal tedavisi ve daha fazlası hakkında merak edilenler.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="S.S.S"
        title="Sıkça sorulan sorular"
        description="Diş tedavileri hakkında hastalarımızın en çok merak ettiği sorular ve yanıtları."
      />
      <section className="section-pad">
        <div className="container-x">
          <FaqAccordion />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
