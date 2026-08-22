import { business } from "@/data/business";

/**
 * Tek WhatsApp bağlantı üreticisi. URL kodlaması burada yapılır,
 * bileşenlerde tekrar edilmez.
 */
export function createWhatsAppUrl(message?: string): string {
  const text = (message ?? business.whatsappDefaultMessage).trim();
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Program/yazı gibi bağlama özel mesajlar için yardımcı. */
export function whatsAppMessageFor(subject: string): string {
  return `Merhaba, ${subject} hakkında bilgi almak istiyorum.`;
}
