import { Container } from "@/components/ui/Container";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section
      id="egitimlerimiz"
      aria-labelledby="egitimlerimiz-baslik"
      className="relative overflow-hidden bg-mist py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-leaf-100/50 blur-3xl"
      />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Eğitimlerimiz"
            title="Öğrencinin ihtiyacına göre şekillenen programlar"
            description="Her öğrencinin başlangıç noktası ve hedefi farklıdır. Programlarımızın hangisinin uygun olduğunu tanışma görüşmesinde birlikte belirliyoruz."
          />

          <Reveal delay={0.1} className="shrink-0">
            <WhatsAppButton
              variant="outline"
              size="md"
              label="Hangi program uygun?"
              message="Merhaba, hangi eğitim programının uygun olduğunu öğrenmek istiyorum."
            />
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {programs.map((program, index) => (
            <Reveal
              as="li"
              key={program.slug}
              delay={(index % 3) * 0.06}
              className="h-full"
            >
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
