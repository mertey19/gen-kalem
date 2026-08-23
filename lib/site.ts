/**
 * Yayın adresi. Canonical URL, OpenGraph, sitemap.xml ve robots.txt buradan üretilir.
 *
 * Öncelik sırası:
 *   1. NEXT_PUBLIC_SITE_URL  (Vercel > Project Settings > Environment Variables)
 *   2. VERCEL_PROJECT_PRODUCTION_URL  (Vercel'in ürettiği üretim alan adı)
 *   3. VERCEL_URL  (önizleme dağıtımının adresi)
 *   4. Aşağıdaki varsayılan
 *
 * Değişken tanımlı ama BOŞ bırakıldığında da varsayılana düşülür; aksi hâlde
 * new URL("") derleme sırasında ERR_INVALID_URL ile build'i düşürüyor.
 *
 * Bu dosya yalnızca sunucu tarafında kullanılır (layout metadata, sitemap,
 * robots, JSON-LD); bu yüzden NEXT_PUBLIC_ öneki olmayan Vercel değişkenleri
 * de güvenle okunabilir.
 */
const FALLBACK_SITE_URL = "https://www.genckalem.com.tr";

function normalizeOrigin(value: string | undefined | null): string | null {
  if (!value) return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  // Vercel değişkenleri protokolsüz gelir (ör. "gen-kalem.vercel.app").
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return null;
  }
}

export const siteUrl =
  normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeOrigin(process.env.VERCEL_URL) ??
  FALLBACK_SITE_URL;

export const absoluteUrl = (path: string): string =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
