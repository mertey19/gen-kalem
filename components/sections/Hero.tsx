import {
  ArrowRight,
  CalendarCheck,
  MapPin,
  MessagesSquare,
  Target,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { business } from "@/data/business";
import { programs } from "@/data/programs";

/**
 * Hero bilinçli olarak sunucu bileşenidir ve giriş animasyonu CSS ile yapılır.
 * Framer Motion kullanılsaydı başlık, JS yüklenip hydrate olana kadar
 * opacity:0 kalır ve LCP belirgin şekilde gecikirdi.
 * prefers-reduced-motion kuralı globals.css içinde animasyonları kapatır.
 */

const trustItems = [
  { icon: UserCheck, label: "Bireysel öğrenci takibi" },
  { icon: CalendarCheck, label: "Planlı çalışma programı" },
  { icon: MessagesSquare, label: "Düzenli veli bilgilendirmesi" },
  { icon: MapPin, label: "Akdeniz / Mersin merkez" },
];

/** Hero'daki hızlı program girişleri; ayrıntı sayfası olanlar öne alınır. */
const heroPrograms = programs.filter((program) => program.href).slice(0, 4);

const floatingCards = [
  { icon: CalendarCheck, title: "Planlı Çalışma", detail: "Haftalık program" },
  { icon: UserCheck, title: "Bireysel Takip", detail: "Düzenli değerlendirme" },
  { icon: Target, title: "Hedef Odaklı Eğitim", detail: "Öğrenciye göre plan" },
];

export function Hero() {
  return (
    <section
      id="anasayfa"
      aria-labelledby="hero-baslik"
      className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Arka plan dokusu — düşük opaklık, okunabilirliği bozmaz */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-leaf-100/60 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          {/* Sol: içerik */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-navy-100 bg-white px-3.5 py-1.5 shadow-[0_1px_2px_rgba(13,21,56,0.04)]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-leaf-500"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-700/70">
                {business.city} • {business.district}
              </span>
            </div>

            <h1
              id="hero-baslik"
              style={{ animationDelay: "60ms" }}
              className="animate-fade-up mt-6 text-[2.35rem] leading-[1.08] font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-[3.6rem] xl:text-[4rem]"
            >
              Mersin&apos;de başarıya giden yolda{" "}
              <span className="relative inline-block">
                <span className="relative z-10">yanınızdayız.</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 z-0 h-1.5 rounded-full bg-leaf-500/80 sm:h-2"
                />
              </span>
            </h1>

            <p
              style={{ animationDelay: "120ms" }}
              className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-navy-700/75 sm:text-lg"
            >
              Akdeniz&apos;deki dershanemizde <strong className="font-semibold text-navy-900">YKS (TYT–AYT)</strong>,{" "}
              <strong className="font-semibold text-navy-900">LGS</strong> ve okula destek
              programları yürütüyoruz. Her öğrenciye kendi seviyesine göre bir
              çalışma planı kurar, gelişimini düzenli olarak takip eder ve
              süreci veliyle birlikte yürütürüz.
            </p>

            <div
              style={{ animationDelay: "180ms" }}
              className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <WhatsAppButton
                size="lg"
                className="w-full sm:w-auto"
                source="hero"
              />
              <Link
                href="/#egitimlerimiz"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-navy-700/15 bg-white px-6 py-3.5 text-base font-semibold text-navy-800 transition-all duration-200 hover:border-navy-700/35 hover:shadow-card sm:w-auto"
              >
                Eğitimleri İncele
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Program hızlı girişleri — ziyaretçi ilk ekranda doğru sayfaya gidebilsin */}
            <nav
              aria-label="Programlara hızlı erişim"
              style={{ animationDelay: "210ms" }}
              className="animate-fade-up mt-7"
            >
              <ul className="flex flex-wrap gap-2">
                <li>
                  <Link
                    href="/mersin-dershane"
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-[0.82rem] font-semibold text-navy-800 transition-colors hover:border-leaf-500 hover:text-leaf-700"
                  >
                    Mersin Dershane
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </li>
                {heroPrograms.map((program) => (
                  <li key={program.slug}>
                    <Link
                      href={program.href!}
                      className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-[0.82rem] font-semibold text-navy-800 transition-colors hover:border-leaf-500 hover:text-leaf-700"
                    >
                      {program.title.replace(" Hazırlık", "").replace(" Programları", "")}
                      <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ul
              style={{ animationDelay: "260ms" }}
              className="animate-fade-up mt-7 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-navy-700/70"
                >
                  <Icon
                    size={16}
                    aria-hidden="true"
                    className="text-leaf-600"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ: görsel kompozisyon */}
          <div
            style={{ animationDelay: "100ms" }}
            className="animate-fade-in relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-navy-100 bg-navy-50 shadow-lift">
              <Image
                src="/images/hero-ogrenciler.jpg"
                alt="Genç Kalem öğrencileri üniversite kampüsünde düzenlenen gezide"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover object-[center_35%]"
              />

              {/* Alt kenarda yumuşak koyulaşma — yüzen kartlarla ayrışmayı sağlar */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/45 to-transparent"
              />

              {/* Logo rozeti — kompozisyon içinde ölçülü bir marka vurgusu */}
              <div className="absolute left-5 top-5 flex items-center gap-2.5 rounded-2xl bg-white/95 px-3 py-2 shadow-card backdrop-blur">
                <Image
                  src={business.logo.src}
                  alt=""
                  aria-hidden="true"
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px]"
                />
                <span className="font-display text-xs font-bold text-navy-900">
                  Genç Kalem
                </span>
              </div>
            </div>

            {/* Yüzen bilgi kartları */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:absolute lg:-bottom-7 lg:-left-10 lg:mt-0 lg:w-[calc(100%+2.5rem)] lg:grid-cols-3">
              {floatingCards.map(({ icon: Icon, title, detail }, index) => (
                <div
                  key={title}
                  style={{ animationDelay: `${350 + index * 80}ms` }}
                  className="animate-fade-up flex items-center gap-3 rounded-2xl border border-navy-100 bg-white/95 px-3.5 py-3 shadow-card backdrop-blur"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-700">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[0.82rem] font-bold leading-tight text-navy-900">
                      {title}
                    </span>
                    <span className="block truncate text-[0.72rem] text-navy-700/70">
                      {detail}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
