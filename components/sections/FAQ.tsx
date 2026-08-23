import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { faqItems } from "@/data/faq";

/**
 * Bölümün kendisi sunucu bileşenidir; yalnızca akordeonun etkileşimli
 * kısmı istemcide çalışır (components/ui/FaqAccordion).
 */
export function FAQ() {
  return (
    <section
      id="sss"
      aria-labelledby="sss-baslik"
      className="relative bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="SSS"
              title="Sıkça sorulan sorular"
              description="Aradığınız cevabı bulamadıysanız WhatsApp üzerinden yazabilirsiniz; size en doğru bilgiyi doğrudan iletelim."
            />
            <Reveal delay={0.1} className="mt-7">
              <WhatsAppButton
                message="Merhaba, sitede yer almayan bir konuda bilgi almak istiyorum."
                label="Sorunuzu WhatsApp'tan Sorun"
                source="faq"
              />
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <FaqAccordion items={faqItems} idPrefix="sss" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
