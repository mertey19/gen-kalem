/**
 * GÜVEN VERİLERİ — HEPSİ BİLİNÇLİ OLARAK BOŞ.
 *
 * Bu dosyadaki yapılar, kurumdan DOĞRULANMIŞ veri geldiğinde doldurulmak
 * üzere hazırlanmıştır. Boş kaldıkları sürece ilgili bölümler hiç render
 * edilmez ve yapısal veriye hiçbir puan/yorum eklenmez.
 *
 * ASLA tahmini, örnek ya da "şimdilik böyle dursun" değeri yazmayın.
 * Uydurma puan ve yorum hem ziyaretçiyi yanıltır hem de Google'ın yapısal
 * veri politikalarını ihlal eder.
 */

export type TrustMetric = {
  /** Görünen değer. Örn. "12" veya "%94". */
  value: string;
  label: string;
  /** İsteğe bağlı açıklama; verinin neyi ölçtüğünü netleştirir. */
  note?: string;
};

export type Testimonial = {
  /** Yorumu yazan kişinin paylaşımına izin verdiği ad. */
  author: string;
  /** "Veli" / "Öğrenci" gibi ilişki bilgisi. */
  relation?: string;
  text: string;
  /** YYYY-MM-DD */
  date?: string;
};

export type GoogleRating = {
  /** 1–5 arası gerçek ortalama. */
  value: number;
  /** Gerçek yorum sayısı. */
  count: number;
  /** Google işletme profilinin herkese açık adresi. */
  url: string;
};

/** Kurum istatistikleri. Doğrulanana kadar boş kalır. */
export const trustMetrics: TrustMetric[] = [];

/** Yalnızca paylaşım izni alınmış, gerçek yorumlar eklenir. */
export const testimonials: Testimonial[] = [];

/**
 * Google puanı. Yalnızca gerçek değerle doldurulur.
 * null olduğu sürece ne arayüzde ne de JSON-LD'de puan görünür.
 */
export const googleRating: GoogleRating | null = null;

export const hasTrustContent =
  trustMetrics.length > 0 || testimonials.length > 0 || googleRating !== null;
