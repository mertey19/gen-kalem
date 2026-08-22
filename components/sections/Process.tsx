import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/why-us";

export function Process() {
  return (
    <section
      id="egitim-sureci"
      aria-labelledby="egitim-sureci-baslik"
      className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-leaf-500/10 blur-3xl"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="Eğitim Süreci"
          title="Tanışmadan gelişime uzanan altı adım"
          description="Süreç, öğrenciyi tanımakla başlar ve düzenli değerlendirmeyle devam eder. Her adımın karşılığı somut bir çalışmadır."
          tone="dark"
          align="center"
        />

        <ol className="relative mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {/* Masaüstünde adımları birleştiren yatay çizgi */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
          />

          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.07}
              className="relative flex gap-4 lg:flex-col lg:gap-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-navy-800 font-display text-base font-bold text-leaf-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* Mobil/tablet dikey bağlantı çizgisi */}
                {index < processSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-px flex-1 bg-white/12 lg:hidden"
                  />
                ) : null}
              </div>

              <div className="pb-2 lg:mt-5 lg:pb-0">
                <h3 className="font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-200/80">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
