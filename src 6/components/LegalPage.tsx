import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { AlertTriangle } from "lucide-react";

export default function LegalPage({
  eyebrow,
  title,
  sections,
}: {
  eyebrow: string;
  title: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <Reveal className="mb-10 flex gap-3 rounded-2xl border border-accent/25 bg-accent-tint px-5 py-4 text-sm text-accent-hover">
            <AlertTriangle size={18} className="mt-0.5 shrink-0" />
            <p>
              Bu sayfa taslak niteliğindedir. Klinik tarafından onaylanmış
              nihai metinler iletildiğinde bu içerik güncellenecektir.
            </p>
          </Reveal>
          <div className="space-y-8">
            {sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="text-xl font-display font-semibold text-foreground">
                  {s.heading}
                </h2>
                <p className="mt-2 text-foreground-muted leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
