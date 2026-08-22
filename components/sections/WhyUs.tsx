import {
  ClipboardCheck,
  GraduationCap,
  Library,
  MapPin,
  MessagesSquare,
  Target,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyUsItems, type WhyUsIcon } from "@/data/why-us";

const iconMap: Record<WhyUsIcon, typeof Target> = {
  graduationCap: GraduationCap,
  clipboardCheck: ClipboardCheck,
  target: Target,
  messagesSquare: MessagesSquare,
  library: Library,
  mapPin: MapPin,
};

export function WhyUs() {
  return (
    <section
      id="neden-genc-kalem"
      aria-labelledby="neden-genc-kalem-baslik"
      className="relative bg-white py-20 sm:py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="Neden Genç Kalem?"
          title="Öğrencinin gelişimini merkeze alan bir eğitim yaklaşımı"
          description="Çalışma yöntemimizi belirleyen temel ilkeler; öğrencinin süreci sahiplenmesini ve gelişimini düzenli olarak görebilmesini sağlar."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {whyUsItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 3) * 0.06}
                className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-leaf-500 transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-50 text-navy-700 transition-colors duration-200 group-hover:bg-leaf-50 group-hover:text-leaf-700">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-700/70">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
