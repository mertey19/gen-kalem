"use client";

import { track } from "@vercel/analytics";

/**
 * Dönüşüm olayları. Vercel Analytics zaten kurulu olduğu için ek bir
 * üçüncü taraf script yüklenmez.
 *
 * KİŞİSEL VERİ GÖNDERİLMEZ. Olaylara yalnızca hangi bileşenin tetiklendiği
 * gibi bağlam bilgisi eklenir; öğrenci/veli adı, telefon veya form içeriği
 * hiçbir koşulda analitik yükünde yer almaz.
 */
export type ConversionEvent =
  | "whatsapp_click"
  | "navbar_whatsapp_click"
  | "sticky_whatsapp_click"
  | "phone_click"
  | "directions_click"
  | "program_view"
  | "program_cta_click"
  | "pre_registration_started"
  | "pre_registration_completed"
  | "job_application_completed"
  | "blog_to_program"
  | "blog_to_whatsapp";

/** Yalnızca kısa, kişisel olmayan etiketler. */
type EventContext = {
  /** Olayın tetiklendiği bölüm/bileşen. Örn. "hero", "program_card". */
  source?: string;
  /** İlgili program veya sayfa slug'ı. Örn. "yks-hazirlik". */
  item?: string;
};

const MAX_LEN = 64;

const clean = (value: string) =>
  value.trim().slice(0, MAX_LEN).replace(/\s+/g, "_").toLowerCase();

export function trackEvent(event: ConversionEvent, context: EventContext = {}) {
  try {
    const payload: Record<string, string> = {};
    if (context.source) payload.source = clean(context.source);
    if (context.item) payload.item = clean(context.item);
    track(event, payload);
  } catch {
    // Analitik hiçbir koşulda kullanıcı akışını bozmamalı.
  }
}
