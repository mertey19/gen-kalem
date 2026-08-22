import { CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business, maps } from "@/data/business";

const points = [
  "Öğrencinin seviyesine göre planlanan çalışma programı",
  "Derse odaklanmayı kolaylaştıran düzenli bir çalışma ortamı",
  "Süreç boyunca öğrenci ve veliyle açık iletişim",
  "Eksiklerin biriktirilmeden takip edildiği bir çalışma düzeni",
];

export function About() {
  return (
    <section
      id="hakkimizda"
      aria-labelledby="hakkimizda-baslik"
      className="relative bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-last lg:order-first">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 shadow-lift">
              <Image
                src="/images/gallery/g5.jpg"
                alt="Genç Kalem Eğitim Kurumları'nda öğrenciler sınıfta çalışırken"
                width={1200}
                height={1600}
                sizes="(max-width: 1024px) 92vw, 45vw"
                className="h-auto w-full"
              />
            </div>

            {/* Adres kartı */}
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-card sm:absolute sm:-bottom-7 sm:right-5 sm:mt-0 sm:max-w-xs">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-700">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-bold text-navy-900">
                  {business.district} / {business.city}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-navy-700/70">
                  {business.address}
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeader
              eyebrow="Hakkımızda"
              title="Genç Kalem'i yakından tanıyın"
              description="Genç Kalem Eğitim Kurumları, Mersin'in Akdeniz ilçesinde öğrencilere düzenli bir eğitim ortamı sunmak üzere çalışmaktadır."
            />

            <Reveal delay={0.08}>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-navy-700/75">
                Çalışma anlayışımızın merkezinde öğrencinin süreci
                sahiplenmesi vardır. Bir öğrencinin ilerlemesi yalnızca
                masa başında geçirdiği süreyle değil; hedefinin netliği,
                planının gerçekçiliği ve eksiklerinin zamanında fark
                edilmesiyle mümkün olur. Bu nedenle programlarımızı
                öğrencinin bulunduğu noktadan başlatır, ilerlemesini
                süreç boyunca birlikte takip ederiz.
              </p>

              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2
                      size={19}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-leaf-600"
                    />
                    <span className="text-[0.95rem] leading-relaxed text-navy-800">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  message="Merhaba, Genç Kalem Eğitim Kurumları hakkında bilgi almak istiyorum."
                  className="w-full sm:w-auto"
                />
                <LinkButton
                  href={maps.directions}
                  external
                  variant="outline"
                  className="w-full sm:w-auto"
                  ariaLabel="Yol tarifi al — Google Haritalar yeni sekmede açılır"
                >
                  Yol Tarifi Al
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
