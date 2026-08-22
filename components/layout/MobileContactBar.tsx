"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navigation, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { business, maps } from "@/data/business";
import { createWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Mobilde hero geçildikten sonra beliren alt iletişim çubuğu.
 * WhatsApp birincil eylem olduğu için tek geniş ve renkli buton odur;
 * arama ve yol tarifi ikon butonlarıdır.
 */
export function MobileContactBar() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={reduce ? false : { y: 80 }}
          animate={{ y: 0 }}
          exit={reduce ? undefined : { y: 80 }}
          transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 backdrop-blur md:hidden"
        >
          <div className="flex items-center gap-2 px-3 py-2.5">
            <a
              href={business.phones[0].href}
              aria-label={`Telefonla arayın: ${business.phones[0].label}`}
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-navy-100 bg-white text-navy-800"
            >
              <Phone size={19} aria-hidden="true" />
            </a>

            <a
              href={maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yol tarifi al — Google Haritalar yeni sekmede açılır"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-navy-100 bg-white text-navy-800"
            >
              <Navigation size={19} aria-hidden="true" />
            </a>

            <a
              href={createWhatsAppUrl(business.whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp'tan bilgi al — yeni sekmede açılır"
              className="inline-flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-leaf-600 px-3 text-[0.95rem] font-semibold text-white"
            >
              <WhatsAppIcon size={18} />
              WhatsApp&apos;tan Bilgi Al
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
