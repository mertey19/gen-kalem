import { business } from "@/data/business";
import { absoluteUrl, siteUrl } from "@/lib/site";

/**
 * Yalnızca doğrulanmış bilgiler eklenir.
 * Puan, yorum, öğrenci sayısı, kuruluş yılı gibi alanlar bilinçli olarak yoktur.
 */
export function organizationJsonLd() {
  const sameAs = Object.values(business.social).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: siteUrl,
    telephone: business.phones.map((phone) => phone.href.replace("tel:", "")),
    // Google Organization logosu için raster sürüm (en az 112x112 olmalı,
    // burada 1024x1024) ve beyaz zeminde düzgün görünmeli.
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(business.logo.png),
      width: 1024,
      height: 1024,
    },
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.district,
      addressRegion: business.city,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    areaServed: {
      "@type": "City",
      name: business.city,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

type ArticleInput = {
  title: string;
  description: string;
  slug: string;
  date: string;
  updatedAt: string;
  image: string;
};

export function blogPostingJsonLd(post: ArticleInput) {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [absoluteUrl(post.image)],
    datePublished: post.date,
    dateModified: post.updatedAt,
    inLanguage: "tr-TR",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    publisher: {
      "@type": "EducationalOrganization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(business.logo.png),
      },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

/** JSON-LD script etiketi için güvenli serileştirme. */
export const jsonLdScript = (data: unknown) => ({
  __html: JSON.stringify(data).replace(/</g, "\\u003c"),
});
