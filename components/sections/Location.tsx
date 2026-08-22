import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business, maps } from "@/data/business";

export function Location() {
  return (
    <section
      id="iletisim"
      aria-labelledby="iletisim-baslik"
      className="relative bg-mist py-20 sm:py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="İletişim"
          title="Bize ulaşın"
          description="Mersin Akdeniz'de, Cami Şerif'te yer alıyoruz. Uğramak isterseniz önceden haber vermeniz yeterli."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-2xl border border-navy-100 bg-white p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-navy-900">
                    Adres
                  </h3>
                  <address className="mt-1.5 text-[0.95rem] leading-relaxed text-navy-700/75 not-italic">
                    {business.address}
                  </address>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4 border-t border-navy-100 pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-navy-900">
                    Telefon
                  </h3>
                  <ul className="mt-1.5 space-y-1">
                    {business.phones.map((phone) => (
                      <li key={phone.href}>
                        <a
                          href={phone.href}
                          className="text-[0.95rem] font-medium text-navy-800 underline-offset-4 transition-colors hover:text-leaf-700 hover:underline"
                        >
                          {phone.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4 border-t border-navy-100 pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-700">
                  <Clock size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-navy-900">
                    Görüşme
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-navy-700/75">
                    Kurumumuzu yerinde görmek ve programlar hakkında ayrıntılı
                    konuşmak için WhatsApp üzerinden randevu oluşturabiliriz.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  href={maps.directions}
                  external
                  variant="solid"
                  className="w-full sm:w-auto"
                  ariaLabel="Yol tarifi al — Google Haritalar yeni sekmede açılır"
                >
                  <Navigation size={17} aria-hidden="true" />
                  Yol Tarifi Al
                </LinkButton>
                <WhatsAppButton
                  label="WhatsApp'tan Yaz"
                  message="Merhaba, kurumunuzu ziyaret etmek için randevu oluşturmak istiyorum."
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-navy-100 bg-navy-50 sm:h-[420px] lg:h-full lg:min-h-[420px]">
              {/* Harita yüklenene kadar görünen iskelet */}
              <div
                aria-hidden="true"
                className="absolute inset-0 animate-pulse bg-gradient-to-br from-navy-50 to-navy-100"
              />
              <iframe
                src={maps.embed}
                title={`${business.name} konumu — Google Haritalar`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="relative h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
