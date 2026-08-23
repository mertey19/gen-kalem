import type { MetadataRoute } from "next";

import { getPublishedPosts } from "@/data/blog";
import { landingPages } from "@/data/landing-pages";
import { absoluteUrl } from "@/lib/site";

/**
 * Zamanlanmış yazılar tarihi geldiğinde site yeniden dağıtılmadan da
 * sitemap'e girsin diye sayfa periyodik olarak yenilenir.
 */
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();
  const lastBlogUpdate = posts.reduce(
    (latest, post) => (post.updatedAt > latest ? post.updatedAt : latest),
    posts[0]?.updatedAt ?? "2026-01-01",
  );

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(lastBlogUpdate),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Yerel arama niyetine yönelik program sayfaları
    ...landingPages.map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified: new Date(lastBlogUpdate),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: absoluteUrl("/on-kayit"),
      lastModified: new Date(lastBlogUpdate),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/is-basvurusu"),
      lastModified: new Date(lastBlogUpdate),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: new Date(lastBlogUpdate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Blog yazıları veriden otomatik üretilir; elle liste tutulmaz.
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
