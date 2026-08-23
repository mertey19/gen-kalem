"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export type FaqAccordionItem = { question: string; answer: string };

/**
 * Erişilebilir akordeon.
 *
 * - Başlık gerçek bir <button>; Enter/Space ve Tab yerleşik olarak çalışır.
 * - aria-expanded / aria-controls ile panel ilişkilendirilir.
 * - Panel role="region" ve aria-labelledby ile başlığa bağlanır.
 * - prefers-reduced-motion açıkken yükseklik animasyonu devre dışı kalır.
 *
 * Hem ana sayfadaki SSS hem de program sayfaları bu bileşeni kullanır.
 */
export function FaqAccordion({
  items,
  idPrefix,
  defaultOpen = 0,
}: {
  items: FaqAccordionItem[];
  idPrefix?: string;
  /** Başlangıçta açık olan madde; null ise hepsi kapalı. */
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const generatedId = useId();
  const baseId = idPrefix ?? generatedId;
  const reduce = useReducedMotion();

  if (items.length === 0) return null;

  return (
    <ul className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-navy-50/60 sm:px-6"
              >
                <span
                  className={`font-display text-[1.02rem] font-semibold leading-snug transition-colors ${
                    isOpen ? "text-navy-900" : "text-navy-800"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg transition-all duration-200 ${
                    isOpen
                      ? "rotate-180 bg-leaf-600 text-white"
                      : "bg-navy-50 text-navy-700"
                  }`}
                >
                  <ChevronDown size={16} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.26,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[0.95rem] leading-relaxed text-navy-700/75 sm:px-6">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
