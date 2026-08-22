/** Yayın adresi. Vercel'de NEXT_PUBLIC_SITE_URL tanımlayarak override edilebilir. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://genckalemegitim.com"
).replace(/\/$/, "");

export const absoluteUrl = (path: string): string =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
