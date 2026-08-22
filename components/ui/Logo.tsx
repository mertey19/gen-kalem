import Image from "next/image";
import Link from "next/link";

import { business } from "@/data/business";

type LogoProps = {
  /** Rozet boyutu (px). Logo kare oranlıdır, en/boy daima eşit verilir. */
  size?: number;
  /** Yanındaki kurum adı yazısı gösterilsin mi? */
  withWordmark?: boolean;
  tone?: "light" | "dark";
  href?: string | null;
  className?: string;
  priority?: boolean;
};

export function Logo({
  size = 44,
  withWordmark = true,
  tone = "light",
  href = "/",
  className = "",
  priority = false,
}: LogoProps) {
  const isDark = tone === "dark";

  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src={business.logo.src}
        alt={business.logo.alt}
        width={size}
        height={size}
        priority={priority}
        className="shrink-0"
        style={{ width: size, height: size }}
      />
      {withWordmark ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={`whitespace-nowrap font-display text-[0.98rem] font-extrabold tracking-tight sm:text-[1.05rem] ${
              isDark ? "text-white" : "text-navy-900"
            }`}
          >
            Genç Kalem
          </span>
          <span
            className={`mt-1 whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.16em] ${
              isDark ? "text-navy-200" : "text-navy-700/70"
            }`}
          >
            Eğitim Kurumları
          </span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      /**
       * Yazı görünürken erişilebilir ad zaten bağlantı metninden gelir.
       * Ayrıca aria-label vermek "görünen metin / erişilebilir ad" uyuşmazlığı
       * yaratıyor (Türkçe büyük İ harfinin küçültülmesi nedeniyle).
       */
      aria-label={withWordmark ? undefined : `${business.name} — ana sayfa`}
      className="inline-flex rounded-lg"
    >
      {content}
    </Link>
  );
}
