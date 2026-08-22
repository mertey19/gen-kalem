import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";

import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { business } from "@/data/business";
import {
  jsonLdScript,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";
import { siteUrl } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | ${business.city} ${business.district}`,
    template: `%s | Genç Kalem`,
  },
  description:
    "Mersin Akdeniz'de bulunan Genç Kalem Eğitim Kurumları'nın eğitim programları hakkında bilgi alın. Detaylı bilgi ve kayıt süreci için WhatsApp üzerinden iletişime geçin.",
  keywords: [
    "Genç Kalem Eğitim Kurumları",
    "Mersin eğitim kurumu",
    "Akdeniz eğitim kurumu",
    "Mersin kurs merkezi",
    "Mersin öğrenci eğitim merkezi",
    "Mersin sınav hazırlık",
  ],
  applicationName: business.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} | ${business.city} ${business.district}`,
    description:
      "Mersin Akdeniz'de öğrencilere planlı bir eğitim süreci ve düzenli takip sunan Genç Kalem Eğitim Kurumları. Programlarımız hakkında WhatsApp'tan bilgi alın.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.city} ${business.district}`,
    description:
      "Mersin Akdeniz'de öğrencilere planlı bir eğitim süreci ve düzenli takip sunan Genç Kalem Eğitim Kurumları.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: business.logo.src, type: "image/svg+xml" }],
    apple: business.logo.src,
  },
};

export const viewport: Viewport = {
  themeColor: "#17235B",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd())}
        />

        <Header />
        <main id="icerik">{children}</main>
        <Footer />

        <FloatingWhatsApp />
        <MobileContactBar />

        {/* Mobil alt iletişim çubuğunun içeriği kapatmaması için boşluk */}
        <div aria-hidden="true" className="safe-bottom h-[4.25rem] md:hidden" />
      </body>
    </html>
  );
}
