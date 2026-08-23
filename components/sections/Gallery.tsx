"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryItems } from "@/data/gallery";

const SWIPE_THRESHOLD = 48;

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  /** Lightbox kapanınca odağın geri döneceği tetikleyici. */
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const count = galleryItems.length;

  const close = useCallback(() => setActive(null), []);
  const showPrev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + count) % count)),
    [count],
  );
  const showNext = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % count)),
    [count],
  );

  const openAt = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    triggerRef.current = event.currentTarget;
    setActive(index);
  };

  const isOpen = active !== null;

  /**
   * Kaydırma kilidi ve odak yönetimi YALNIZCA açılış/kapanışta çalışmalı.
   * Bu efekt `active` değerine bağlansaydı her ok tuşunda yeniden çalışır,
   * "önceki overflow" değeri olarak "hidden" kaydedilir ve lightbox
   * kapandığında sayfa kaydırması kilitli kalırdı.
   */
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  /** Klavye: Esc kapatır, oklar gezinir, Tab odağı diyalog içinde tutar. */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, showPrev, showNext]);

  if (count === 0) return null;

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

        <ul className="mt-12 grid auto-rows-[170px] grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-[200px] lg:grid-cols-3 lg:gap-4">
          {galleryItems.map((item, index) => (
            <Reveal
              as="li"
              key={item.src}
              delay={(index % 3) * 0.05}
              className={`min-w-0 ${item.tall ? "lg:row-span-2" : ""} ${
                item.wide ? "lg:col-span-2" : ""
              }`}
            >
              <button
                type="button"
                onClick={(event) => openAt(index, event)}
                aria-haspopup="dialog"
                aria-label={`${item.caption} — görseli büyüt`}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-navy-100 bg-white"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes={
                    item.wide
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 66vw"
                      : "(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent px-4 pb-3 pt-10 text-left text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {item.caption}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 grid h-9 w-9 -translate-y-2 place-items-center rounded-xl bg-white/95 text-navy-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ZoomIn size={17} />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </Container>

      <AnimatePresence>
        {activeItem && active !== null ? (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/85 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${activeItem.caption} — ${active + 1} / ${count}`}
              className="relative flex w-full max-w-3xl flex-col"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0].clientX;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const delta =
                  event.changedTouches[0].clientX - touchStartX.current;
                if (delta > SWIPE_THRESHOLD) showPrev();
                else if (delta < -SWIPE_THRESHOLD) showNext();
                touchStartX.current = null;
              }}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-white/90">
                  {active + 1} / {count}
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  aria-label="Görseli kapat"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20"
                >
                  <X size={20} />
                </button>
              </div>

              <motion.div
                key={activeItem.src}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="overflow-hidden rounded-2xl bg-white"
              >
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  width={activeItem.width}
                  height={activeItem.height}
                  sizes="(max-width: 768px) 92vw, 768px"
                  className="h-auto max-h-[68vh] w-full object-contain"
                />
                <p className="border-t border-navy-100 px-5 py-3.5 text-sm font-medium text-navy-800">
                  {activeItem.caption}
                </p>
              </motion.div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Önceki görsel"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                  Önceki
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Sonraki görsel"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20"
                >
                  Sonraki
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
