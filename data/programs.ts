/**
 * Eğitim programları. Kurumdan gelen kesin bilgiye göre düzenlenmelidir.
 * Buradaki başlıklar genel program başlıklarıdır; sınıf düzeyi, süre, ücret gibi
 * doğrulanmamış bilgiler bilinçli olarak eklenmemiştir.
 */
export type ProgramIcon =
  | "target"
  | "bookOpen"
  | "userCheck"
  | "penLine"
  | "compass"
  | "users";

export type Program = {
  slug: string;
  title: string;
  description: string;
  icon: ProgramIcon;
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "sinav-hazirlik",
    title: "Sınav Hazırlık Programları",
    description:
      "YKS (TYT–AYT) ve LGS'ye hazırlanan öğrenciler için konu çalışması, soru çözümü ve düzenli tekrarı bir arada yürüten program yapısı.",
    icon: "target",
    highlights: ["YKS (TYT–AYT)", "LGS", "Konu anlatımı", "Soru çözümü"],
  },
  {
    slug: "okula-destek",
    title: "Okula Destek Programları",
    description:
      "Ortaokul ve lise öğrencileri için okul müfredatını takip eden, derslerde geride kalmamayı ve konuları zamanında tamamlamayı hedefleyen destek çalışmaları.",
    icon: "bookOpen",
    highlights: ["Ortaokul", "Lise", "Müfredat takibi", "Konu tamamlama"],
  },
  {
    slug: "bireysel-akademik-destek",
    title: "Bireysel Akademik Destek",
    description:
      "Öğrencinin eksik olduğu konulara odaklanan, bireysel ihtiyaca göre planlanan birebir çalışma desteği.",
    icon: "userCheck",
    highlights: ["Eksik odaklı çalışma", "Bireysel plan", "Birebir takip"],
  },
  {
    slug: "etut-ve-soru-cozum",
    title: "Etüt ve Soru Çözüm Programları",
    description:
      "Öğrencinin anlamadığı soruları sorabildiği, ders çalışmayı sürdürülebilir hâle getiren etüt ve soru çözüm saatleri.",
    icon: "penLine",
    highlights: ["Etüt saatleri", "Soru sorma imkânı", "Uygulama ağırlıklı"],
  },
  {
    slug: "rehberlik-ve-yonlendirme",
    title: "Rehberlik ve Yönlendirme",
    description:
      "Öğrencinin hedeflerine uygun çalışma planı oluşturması ve süreç boyunca yönlendirilmesi için yapılan görüşmeler.",
    icon: "compass",
    highlights: ["Hedef belirleme", "Çalışma planı", "Süreç görüşmeleri"],
  },
  {
    slug: "veli-bilgilendirme",
    title: "Veli Bilgilendirme Süreci",
    description:
      "Öğrencinin gelişimi hakkında veliyle düzenli iletişim kurulmasını esas alan bilgilendirme yaklaşımı.",
    icon: "users",
    highlights: ["Düzenli iletişim", "Gelişim paylaşımı", "Ortak takip"],
  },
];
