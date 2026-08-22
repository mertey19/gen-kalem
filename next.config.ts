import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    /**
     * Sitedeki tüm SVG'ler birinci taraftır (logo, kapak görselleri, galeri).
     * Yine de optimizer üzerinden gelen SVG'ler katı bir CSP ile sunulur.
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox; style-src 'unsafe-inline';",
  },
};

export default nextConfig;
