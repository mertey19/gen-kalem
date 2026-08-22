import { ArrowUpRight, GraduationCap, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { business, maps } from "@/data/business";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const items = [
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    description: "Hızlı bilgi alın.",
    detail: "Mesajınıza en kısa sürede dönüş yapıyoruz.",
    href: createWhatsAppUrl(),
    external: true,
    accent: true,
    ariaLabel: "WhatsApp'tan bilgi alın — yeni sekmede açılır",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: business.phones[0].label,
    detail: `Ayrıca ${business.phones[1].label} numarasından da ulaşabilirsiniz.`,
    href: business.phones[0].href,
    external: false,
    accent: false,
    ariaLabel: `Telefonla arayın: ${business.phones[0].label}`,
    isTel: true,
  },
  {
    icon: MapPin,
    title: "Konum",
    description: `${business.district} / ${business.city}`,
    detail: business.addressShort,
    href: maps.search,
    external: true,
    accent: false,
    ariaLabel: "Konumumuzu Google Haritalar'da görün — yeni sekmede açılır",
  },
  {
    icon: GraduationCap,
    title: "Eğitim Bilgisi",
    description: "Programlarımızı inceleyin.",
    detail: "Hangi programın uygun olduğunu birlikte belirleyelim.",
    href: "/#egitimlerimiz",
    external: false,
    accent: false,
    ariaLabel: "Eğitim programlarımızı inceleyin",
  },
];

const cardClass =
  "group flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-[0_1px_2px_rgba(13,21,56,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-leaf-300 hover:shadow-lift";

export function QuickContact() {
  return (
    <section
      aria-label="Hızlı iletişim"
      className="relative bg-mist py-14 sm:py-16"
    >
      <Container>
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            const inner = (
              <>
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${
                    item.accent
                      ? "bg-leaf-600 text-white"
                      : "bg-navy-50 text-navy-700 group-hover:bg-navy-700 group-hover:text-white"
                  }`}
                >
                  <Icon size={22} aria-hidden="true" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span className="font-display text-base font-bold text-navy-900">
                      {item.title}
                    </span>
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                      className="text-navy-700/35 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-leaf-600"
                    />
                  </span>
                  <span className="mt-1 block text-sm font-medium text-navy-800">
                    {item.description}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-navy-700/70">
                    {item.detail}
                  </span>
                </span>
              </>
            );

            return (
              <Reveal as="li" key={item.title} delay={(index % 4) * 0.06}>
                {item.external || item.isTel ? (
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={item.ariaLabel}
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className={cardClass}
                  >
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
