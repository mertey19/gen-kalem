import Image from "next/image";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business } from "@/data/business";

export function ArticleCTA() {
  return (
    <aside
      aria-label="İletişim daveti"
      className="mt-14 overflow-hidden rounded-2xl border border-navy-100 bg-mist p-6 sm:p-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <Image
          src={business.logo.src}
          alt=""
          aria-hidden="true"
          width={56}
          height={56}
          className="h-14 w-14 shrink-0"
        />

        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg font-bold text-navy-900 sm:text-xl">
            Eğitim programlarımız hakkında bilgi alın
          </h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-700/75">
            Genç Kalem Eğitim Kurumları&apos;nın eğitim programları hakkında
            detaylı bilgi almak için WhatsApp üzerinden bizimle iletişime
            geçebilirsiniz.
          </p>
        </div>

        <WhatsAppButton
          size="md"
          className="w-full shrink-0 sm:w-auto"
          message="Merhaba, Genç Kalem Eğitim Kurumları'nın eğitim programları hakkında bilgi almak istiyorum."
        />
      </div>
    </aside>
  );
}
