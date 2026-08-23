"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Briefcase, ClipboardList, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { TrackedLink } from "@/components/ui/Tracked";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business, socialLinks } from "@/data/business";
import { desktopNavItems, navItems, utilityLinks } from "@/data/navigation";

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

const utilityIconMap = {
  clipboard: ClipboardList,
  briefcase: Briefcase,
} as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü açıkken arka planın kaymasını engelle + Esc ile kapat
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href.startsWith("/") && !href.includes("#") && pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#anasayfa"
        className="sr-only rounded-lg bg-navy-700 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50"
      >
        İçeriğe geç
      </a>

      {/* Üst yardımcı çubuk — sayfa kaydırılınca yer kazanmak için kapanır */}
      <div
        className={`hidden overflow-hidden bg-navy-900 text-navy-200 transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <Container>
          <div className="flex h-10 items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-xs">
              <span className="inline-flex items-center gap-2">
                <Phone size={13} aria-hidden="true" className="text-leaf-400" />
                {business.phones.map((phone, index) => (
                  <span key={phone.href} className="inline-flex items-center">
                    {index > 0 ? (
                      <span aria-hidden="true" className="mx-1.5 text-white/25">
                        /
                      </span>
                    ) : null}
                    <a
                      href={phone.href}
                      className="font-medium transition-colors hover:text-leaf-400"
                    >
                      {phone.label}
                    </a>
                  </span>
                ))}
              </span>
              <span aria-hidden="true" className="h-3.5 w-px bg-white/15" />
              <span className="hidden text-navy-200/70 xl:inline">
                {business.addressShort}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.key];
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="rounded-lg p-1.5 text-navy-200/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}

              <span aria-hidden="true" className="mx-1 h-3.5 w-px bg-white/15" />

              {utilityLinks.map((item) => {
                const Icon = utilityIconMap[item.icon];
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-label={item.ariaLabel}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-white text-navy-900"
                        : "text-white/85 ring-1 ring-inset ring-white/20 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon size={14} aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* Ana çubuk */}
      <div
        className={`transition-all duration-300 ${
          scrolled || open
            ? "border-b border-navy-100 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75"
            : "border-b border-navy-100/70 bg-white"
        }`}
      >
        <Container>
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${
              scrolled ? "h-16" : "h-[4.5rem] lg:h-[4.75rem]"
            }`}
          >
            <Logo size={scrolled ? 38 : 42} priority />

            <nav
              aria-label="Ana menü"
              className="hidden items-center xl:flex"
            >
              {desktopNavItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.875rem] font-medium transition-colors 2xl:px-3 2xl:text-[0.9rem] ${
                      active
                        ? "text-navy-900"
                        : "text-navy-700/80 hover:text-navy-900"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-leaf-500 transition-transform duration-200 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              {/* Ön Kayıt: kaydırıldığında da görünür kalan ikincil dönüşüm */}
              <TrackedLink
                href="/on-kayit"
                event="program_cta_click"
                source="navbar_on_kayit"
                className="hidden items-center gap-1.5 rounded-xl border border-navy-700/20 px-3.5 py-2 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-700/45 hover:bg-navy-50 md:inline-flex"
              >
                <ClipboardList size={16} aria-hidden="true" />
                Ön Kayıt
              </TrackedLink>

              <span className="hidden sm:block">
                <WhatsAppButton
                  size="sm"
                  label="WhatsApp'tan Bilgi Al"
                  source="navbar"
                  event="navbar_whatsapp_click"
                />
              </span>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobil-menu"
                aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
                className="rounded-lg border border-navy-100 bg-white p-2.5 text-navy-800 transition-colors hover:bg-navy-50 xl:hidden"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
              className="absolute inset-x-0 top-full z-0 h-screen cursor-default bg-navy-950/40 xl:hidden"
            />
            <motion.div
              id="mobil-menu"
              initial={reduce ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{
                duration: reduce ? 0 : 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-0 top-full z-10 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-navy-100 bg-white shadow-lift xl:hidden"
            >
              <Container>
                <nav aria-label="Mobil menü" className="py-4">
                  <ul className="flex flex-col">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-medium text-navy-800 transition-colors hover:bg-navy-50"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 grid gap-2 border-t border-navy-100 pt-4 sm:grid-cols-2">
                    {utilityLinks.map((item) => {
                      const Icon = utilityIconMap[item.icon];
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-navy-100 px-4 text-[0.95rem] font-semibold text-navy-800 transition-colors hover:border-navy-200 hover:bg-navy-50"
                        >
                          <Icon size={17} aria-hidden="true" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2">
                    <WhatsAppButton
                      size="lg"
                      className="w-full"
                      label="WhatsApp'tan Bilgi Al"
                      source="mobile_menu"
                      event="navbar_whatsapp_click"
                    />
                  </div>

                  <div className="mt-4 flex flex-col gap-3 border-t border-navy-100 pt-4">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <Phone
                        size={15}
                        aria-hidden="true"
                        className="text-leaf-600"
                      />
                      {business.phones.map((phone) => (
                        <a
                          key={phone.href}
                          href={phone.href}
                          className="text-sm font-medium text-navy-800"
                        >
                          {phone.label}
                        </a>
                      ))}
                    </div>

                    {socialLinks.length > 0 ? (
                      <div className="flex items-center gap-3 pb-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                          Bizi takip edin
                        </span>
                        <div className="flex items-center gap-2">
                          {socialLinks.map((item) => {
                            const Icon = socialIconMap[item.key];
                            return (
                              <a
                                key={item.key}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.ariaLabel}
                                className="rounded-xl border border-navy-100 p-2.5 text-navy-700 transition-colors hover:border-leaf-400 hover:text-leaf-700"
                              >
                                <Icon size={20} />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </nav>
              </Container>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
