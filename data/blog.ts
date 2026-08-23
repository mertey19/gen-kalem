import type { BlogBlock, BlogCategory, BlogPost } from "@/content/types";

import { post as calismaProgrami } from "@/content/blog/verimli-ders-calisma-programi-nasil-hazirlanir";
import { post as zamanYonetimi } from "@/content/blog/sinav-doneminde-zaman-yonetimi";
import { post as denemeAnalizi } from "@/content/blog/deneme-sinavi-sonuclari-nasil-degerlendirilmeli";
import { post as motivasyon } from "@/content/blog/ders-calisirken-motivasyonu-korumak";
import { post as tekrarYontemleri } from "@/content/blog/ogrenciler-icin-etkili-tekrar-yontemleri";
import { post as veliRehberi } from "@/content/blog/veliler-icin-sinav-doneminde-destek-rehberi";
import { post as kursSecimi } from "@/content/blog/mersinde-kurs-secerken-dikkat-edilmesi-gerekenler";
import { post as yksYolHaritasi } from "@/content/blog/ykse-nereden-baslamali-tyt-ayt-yol-haritasi";
import { post as lgsHazirlik } from "@/content/blog/lgs-hazirlik-surecinde-bilinmesi-gerekenler";
import { post as etut } from "@/content/blog/etut-nedir-ogrenciye-ne-kazandirir";

export type { BlogBlock, BlogCategory, BlogPost };

const rawPosts: BlogPost[] = [
  calismaProgrami,
  zamanYonetimi,
  denemeAnalizi,
  motivasyon,
  tekrarYontemleri,
  veliRehberi,
  kursSecimi,
  yksYolHaritasi,
  lgsHazirlik,
  etut,
];

/** Aynı slug'ın iki kez tanımlanmasını derleme/çalışma anında yakalar. */
const seen = new Set<string>();
for (const post of rawPosts) {
  if (seen.has(post.slug)) {
    throw new Error(`Blog yazılarında yinelenen slug: "${post.slug}"`);
  }
  seen.add(post.slug);
}

// Türkçe metinler için ortalama okuma hızı
const WORDS_PER_MINUTE = 180;

function blockText(block: BlogBlock): string {
  switch (block.type) {
    case "ul":
    case "ol":
      return block.items.join(" ");
    case "callout":
      return `${block.title ?? ""} ${block.text}`;
    default:
      return block.text;
  }
}

export function estimateReadingTime(post: BlogPost): number {
  if (post.readingTime) return post.readingTime;
  const words = post.body
    .map(blockText)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/**
 * Tarihe göre yeniden eskiye sıralı TÜM yazılar — yayınlanmamışlar dahil.
 * Doğrudan kullanmayın; herkese açık listeler için getPublishedPosts() kullanın.
 */
const allPosts: BlogPost[] = [...rawPosts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

/**
 * Kurumun bulunduğu saat diliminde "bugün"ün YYYY-MM-DD karşılığı.
 * ISO tarihler sözlüksel olarak da doğru sıralandığı için string karşılaştırma yeterli;
 * böylece saat dilimi ve yaz saati kaynaklı kaymalar oluşmaz.
 */
const PUBLICATION_TIME_ZONE = "Europe/Istanbul";

export function todayInTimeZone(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PUBLICATION_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** İleri tarihli yazılar, tarihi gelene kadar herkese açık listelerde görünmez. */
export function isPublished(post: BlogPost, today = todayInTimeZone()): boolean {
  return post.date <= today;
}

/**
 * Yayınlanmış yazılar. "Bugün" modül yüklenirken değil, her çağrıda hesaplanır;
 * böylece uzun ömürlü bir sunucu süreci tarihi donduramaz.
 * Sayfaların da güncellenmesi için blog rotalarında `revalidate` tanımlıdır.
 */
export function getPublishedPosts(): BlogPost[] {
  const today = todayInTimeZone();
  return allPosts.filter((post) => isPublished(post, today));
}

/** Yalnızca derleme/denetim amaçlı: yayınlanmamışlar dahil her şey. */
export const getAllPostsIncludingScheduled = (): BlogPost[] => allPosts;

export const getAllPosts = (): BlogPost[] => getPublishedPosts();

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  getPublishedPosts().find((post) => post.slug === slug);

export const getLatestPosts = (count = 3): BlogPost[] =>
  getPublishedPosts().slice(0, count);

/** Yalnızca yayınlanmış yazısı bulunan kategoriler döner; boş filtre butonu oluşmaz. */
export const getCategories = (): BlogCategory[] =>
  Array.from(new Set(getPublishedPosts().map((post) => post.category)));

/** Önce aynı kategoriden, yetmezse en yeni yazılardan tamamlar. Kendisini asla döndürmez. */
export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return getLatestPosts(count);

  const others = getPublishedPosts().filter((post) => post.slug !== slug);
  const sameCategory = others.filter(
    (post) => post.category === current.category,
  );
  const rest = others.filter((post) => post.category !== current.category);

  return [...sameCategory, ...rest].slice(0, count);
}

/** Kart/liste görünümleri için gövdesiz, hafif veri. İstemciye yalnızca bu gider. */
export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  image: string;
  imageAlt: string;
  readingTime: number;
};

export const toSummary = (post: BlogPost): PostSummary => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  category: post.category,
  date: post.date,
  image: post.image,
  imageAlt: post.imageAlt,
  readingTime: estimateReadingTime(post),
});

export const getAllSummaries = (): PostSummary[] =>
  getPublishedPosts().map(toSummary);

export const formatDate = (iso: string): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
