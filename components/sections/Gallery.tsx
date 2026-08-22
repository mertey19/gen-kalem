"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryItems } from "@/data/gallery";

/** Masonry hissi için değişken yükseklikler (masaüstü). */
const spans = [
  "lg:row-span-2",
  "",
  "",
  "",
  "lg:row-span-2",
  "",
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  if (galleryItems.length === 0) return null;

  const activeItem = active === null ? null : galleryItems[active];

  return (
    <section
      id="galeri"
      aria-labelledby="galeri-baslik"
      className="relative bg-mist py-20 sm:py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="Galeri"
          title="Genç Kalem'den kareler"
          description="Kurumumuzdan görüntüler. Güncel paylaşımlarımıza sosyal medya hesaplarımızdan da ulaşabilirsiniz."
        />

        <ul className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[210px] lg:grid-cols-3 lg:gap-4">
          {galleryItems.map((item, index) => (
            <Reveal
              as="li"
              key={item.src}
              delay={(index % 3) * 0.05}
              className={`${spans[index % spans.length]} min-w-0`}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`${item.alt} — büyüt`}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-navy-100 bg-white"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/25"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center rounded-xl bg-white/95 text-navy-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ZoomIn size={17} />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </Container>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.alt}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Görseli kapat"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={reduce ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={reduce ? undefined : { scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                width={activeItem.width}
                height={activeItem.height}
                sizes="(max-width: 768px) 92vw, 768px"
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
