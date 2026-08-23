"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { business } from "@/data/business";
import { trackEvent } from "@/lib/analytics";
import { createWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Sağ altta sabit duran WhatsApp butonu.
 * Mobilde alt iletişim çubuğu devreye girdiği için gizlenir.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.9, y: 12 }}
          transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-5 z-40 hidden md:block"
        >
          <a
            href={createWhatsAppUrl(business.whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("whatsapp_click", { source: "floating_button" })
            }
            aria-label="WhatsApp'tan yazın — yeni sekmede açılır"
            className="group inline-flex items-center gap-3 rounded-full bg-leaf-600 py-3.5 pl-4 pr-5 text-white shadow-float transition-all duration-200 hover:scale-[1.03] hover:bg-leaf-700 hover:shadow-[0_16px_40px_-10px_rgba(70,128,26,0.7)]"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
              <WhatsAppIcon size={20} />
            </span>
            <span className="text-[0.95rem] font-semibold">
              WhatsApp&apos;tan Yazın
            </span>
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
