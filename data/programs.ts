/**
 * Eğitim programları. Kurumdan doğrulanan bilgiye göre düzenlenir.
 * Sınıf düzeyi, ücret, kontenjan gibi doğrulanmamış ayrıntılar bilinçli olarak yoktur.
 *
 * `href` alanı, o program için ayrıntılı bir sayfa varsa doldurulur; boşsa
 * kart yalnızca WhatsApp CTA'sı gösterir.
 */
export type ProgramIcon =
  | "target"
  | "graduationCap"
  | "bookOpen"
  | "userCheck"
  | "penLine"
  | "compass"
  | "users";

export type Program = {
  slug: string;
  title: string;
  /** Kartta başlığın altında görünen kısa etiket. */
  audience: string;
  description: string;
  icon: ProgramIcon;
  highlights: string[];
  /** Varsa program ayrıntı sayfası. */
  href?: string;
};

export const programs: Program[] = [
  {
    slug: "yks-hazirlik",
    title: "YKS Hazırlık (TYT–AYT)",
    audience: "Lise öğrencileri ve mezunlar",
    description:
      "TYT ve AYT dengesini öğrencinin hedef alanına göre kuran, konu çalışması ile soru çözümünü birlikte yürüten hazırlık programı.",
    icon: "graduationCap",
    highlights: ["TYT ağırlıklı başlangıç", "Alan bazlı AYT planı", "Deneme analizi"],
    href: "/yks-kursu-mersin",
  },
  {
    slug: "lgs-hazirlik",
    title: "LGS Hazırlık",
    audience: "7 ve 8. sınıf öğrencileri",
    description:
      "Okul müfredatıyla uyumlu ilerleyen, yeni nesil sorulara alıştıran ve deneme takibiyle desteklenen LGS hazırlık çalışmaları.",
    icon: "target",
    highlights: ["Müfredatla uyumlu", "Yeni nesil sorular", "Düzenli deneme"],
    href: "/lgs-kursu-mersin",
  },
  {
    slug: "okula-destek",
    title: "Okula Destek Programları",
    audience: "Ortaokul ve lise öğrencileri",
    description:
      "Okul derslerinde geride kalmamak, konuları zamanında tamamlamak ve sınav öncesi tekrar yapmak için yürütülen destek çalışmaları.",
    icon: "bookOpen",
    highlights: ["Konu tamamlama", "Sınav öncesi tekrar", "Müfredat takibi"],
  },
  {
    slug: "bireysel-akademik-destek",
    title: "Bireysel Akademik Destek",
    audience: "Eksik odaklı çalışmak isteyenler",
    description:
      "Öğrencinin eksik olduğu konulara odaklanan, bireysel ihtiyaca göre planlanan birebir çalışma desteği.",
    icon: "userCheck",
    highlights: ["Birebir çalışma", "Eksik odaklı plan", "Esnek program"],
    href: "/bireysel-ders-mersin",
  },
  {
    slug: "etut-ve-soru-cozum",
    title: "Etüt ve Soru Çözümü",
    audience: "Tüm düzeyler",
    description:
      "Öğrencinin takıldığı soruyu aynı gün sorabildiği, ders çalışmayı sürdürülebilir kılan etüt ve soru çözüm saatleri.",
    icon: "penLine",
    highlights: ["Aynı gün soru sorma", "Düzenli etüt", "Uygulama ağırlıklı"],
    href: "/mersin-etut-merkezi",
  },
  {
    slug: "rehberlik-ve-yonlendirme",
    title: "Rehberlik ve Yönlendirme",
    audience: "Hedef belirleyen öğrenciler",
    description:
      "Öğrencinin hedefine uygun çalışma planı oluşturması ve süreç boyunca yönlendirilmesi için yapılan görüşmeler.",
    icon: "compass",
    highlights: ["Hedef belirleme", "Çalışma planı", "Süreç görüşmeleri"],
  },
  {
    slug: "veli-bilgilendirme",
    title: "Veli Bilgilendirme",
    audience: "Veliler",
    description:
      "Öğrencinin devam durumu ve akademik gelişimi hakkında veliyle düzenli iletişim kurulmasını esas alan bilgilendirme yaklaşımı.",
    icon: "users",
    highlights: ["Düzenli iletişim", "Gelişim paylaşımı", "Ortak takip"],
  },
];

export const getProgramBySlug = (slug: string): Program | undefined =>
  programs.find((program) => program.slug === slug);
