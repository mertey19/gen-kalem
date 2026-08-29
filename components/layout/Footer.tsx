import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { business, maps, socialLinks } from "@/data/business";
import { footerNavItems } from "@/data/navigation";
import { programs } from "@/data/programs";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-200">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-leaf-500/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo size={52} tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200/80">
              Mersin Akdeniz&apos;de öğrencilere düzenli bir çalışma ortamı,
              planlı bir eğitim süreci ve akademik gelişimlerinde sürekli takip
              sunuyoruz.
            </p>

            {socialLinks.length > 0 ? (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-400">
                  Bizi Takip Edin
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {socialLinks.map((item) => {
                    const Icon = socialIconMap[item.key];
                    return (
                      <a
                        key={item.key}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.ariaLabel}
                        className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/5 text-white transition-all duration-200 hover:border-leaf-400/60 hover:bg-leaf-500/15 hover:text-leaf-400"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>

          <nav aria-label="Alt menü" className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Menü
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-200/80 transition-colors hover:text-leaf-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Eğitimlerimiz
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/mersin-dershane"
                  className="text-sm text-navy-200/80 transition-colors hover:text-leaf-400"
                >
                  Mersin Dershane
                </Link>
              </li>
              {programs.slice(0, 5).map((program) => (
                <li key={program.slug}>
                  <Link
                    href={program.href ?? "/#egitimlerimiz"}
                    className="text-sm text-navy-200/80 transition-colors hover:text-leaf-400"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              İletişim
            </h2>

            <address className="mt-4 space-y-4 not-italic">
              <a
                href={maps.search}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 text-sm text-navy-200/80 transition-colors hover:text-leaf-400"
              >
                <MapPin
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-leaf-500"
                />
                <span>
                  <span className="block font-semibold text-white group-hover:text-leaf-400">
                    {business.district} / {business.city}
                  </span>
                  <span className="mt-1 block leading-relaxed">
                    {business.address}
                  </span>
                </span>
              </a>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-leaf-500"
                />
                <ul className="space-y-1">
                  {business.phones.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="text-sm text-navy-200/80 transition-colors hover:text-leaf-400"
                      >
                        {phone.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-leaf-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-leaf-700"
                aria-label="WhatsApp'tan yazın — yeni sekmede açılır"
              >
                <WhatsAppIcon size={17} />
                WhatsApp&apos;tan Yazın
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-navy-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Tüm hakları saklıdır.
          </p>
          <p>
            {business.district} / {business.city}
          </p>
        </div>
      </Container>
    </footer>
  );
}
