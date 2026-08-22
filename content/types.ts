export type BlogCategory =
  | "Ders Çalışma"
  | "Sınav"
  | "Motivasyon"
  | "Öğrenci Rehberi"
  | "Veli Rehberi";

/**
 * Yazı gövdesi yapısal bloklarla tutulur. Böylece tipografi tüm yazılarda
 * tutarlı kalır ve MDX derleme zinciri eklemeye gerek kalmaz.
 * Paragraf ve liste metinlerinde iki satır içi işaret desteklenir:
 *   **kalın**   ve   [bağlantı metni](/hedef)
 */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  /** Dakika. Gövdeden otomatik hesaplanır, elle verilirse o değer kullanılır. */
  readingTime?: number;
  body: BlogBlock[];
};
