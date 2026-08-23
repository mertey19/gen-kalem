"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { trackEvent, type ConversionEvent } from "@/lib/analytics";

/**
 * Dönüşüm olayı gönderen küçük bağlantı sarmalayıcıları.
 * Yalnızca bunlar istemci bileşenidir; içinde bulundukları kart ve bölümler
 * sunucuda render edilmeye devam eder.
 */

type Common = {
  event: ConversionEvent;
  source?: string;
  item?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

/** Site içi bağlantı. */
export function TrackedLink({
  href,
  event,
  source,
  item,
  className,
  children,
  ariaLabel,
}: Common & { href: string }) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent(event, { source, item })}
    >
      {children}
    </Link>
  );
}

/** Dış bağlantı: WhatsApp, harita, telefon. */
export function TrackedExternalLink({
  href,
  event,
  source,
  item,
  className,
  children,
  ariaLabel,
  newTab = true,
}: Common & { href: string; newTab?: boolean }) {
  return (
    <a
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent(event, { source, item })}
    >
      {children}
    </a>
  );
}
