import { Navigation } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business, maps } from "@/data/business";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-baslik"
      className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[38rem] -translate-x-1/2 rounded-full bg-leaf-500/12 blur-3xl"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Image
            src={business.logo.src}
            alt=""
            aria-hidden="true"
            width={64}
            height={64}
            className="mx-auto h-16 w-16"
          />

          <h2
            id="final-cta-baslik"
            className="mt-7 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.9rem]"
          >
            Çocuğunuzun eğitim yolculuğu için ilk adımı atın.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            Programlarımız ve eğitim sürecimiz hakkında bilgi almak için
            bizimle WhatsApp üzerinden iletişime geçebilirsiniz.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              size="lg"
              className="w-full sm:w-auto"
              message="Merhaba, kayıt ve eğitim programları hakkında bilgi almak istiyorum."
            />
            <LinkButton
              href={maps.directions}
              external
              variant="onDark"
              size="lg"
              className="w-full sm:w-auto"
              ariaLabel="Yol tarifi al — Google Haritalar yeni sekmede açılır"
            >
              <Navigation size={18} aria-hidden="true" />
              Yol Tarifi Al
            </LinkButton>
          </div>

          <p className="mt-7 text-sm text-navy-200/70">
            {business.address}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
