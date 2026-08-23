export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Cevaplar bilinçli olarak "kesin bilgi vermeyen" bir dille yazılmıştır.
 * Kurumdan doğrulanmış bilgi geldikçe burası güncellenebilir.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Eğitim programları hakkında nasıl bilgi alabilirim?",
    answer:
      "Programlarımızın içeriği, sınıf düzeyleri ve güncel çalışma takvimi hakkında en doğru bilgiyi WhatsApp üzerinden bizimle iletişime geçerek alabilirsiniz. Mesajlarınıza en kısa sürede dönüş yapıyoruz.",
  },
  {
    question: "Hangi sınavlara ve sınıf düzeylerine hazırlık yapılıyor?",
    answer:
      "Genç Kalem Eğitim Kurumları'nda YKS (TYT–AYT) ve LGS hazırlık çalışmalarının yanı sıra ortaokul ve lise öğrencilerine yönelik okula destek programları yürütülmektedir. Öğrencinin sınıf düzeyine uygun güncel program seçenekleri için WhatsApp üzerinden bilgi alabilirsiniz.",
  },
  {
    question: "Kayıt süreci nasıl ilerliyor?",
    answer:
      "Kayıt süreci, öğrenciyle ve veliyle yapılan bir tanışma görüşmesiyle başlar. Öğrencinin hedefi ve mevcut durumu değerlendirildikten sonra uygun program birlikte belirlenir. Güncel kayıt koşulları için WhatsApp üzerinden bilgi alabilirsiniz.",
  },
  {
    question: "Kuruma nasıl ulaşabilirim?",
    answer:
      "Cami Şerif, 5228. Sk., Vakıf İşhanı, No:4 Kat:4, Akdeniz / Mersin adresindeyiz. Sitedeki “Yol Tarifi Al” bağlantısı sizi doğrudan Google Haritalar üzerinden konumumuza yönlendirir.",
  },
  {
    question: "Ders programları hakkında nasıl bilgi alabilirim?",
    answer:
      "Ders ve etüt saatleri döneme göre değişebildiği için güncel programı WhatsApp üzerinden paylaşıyoruz. Öğrencinin sınıf düzeyini belirttiğinizde size uygun seçenekleri iletebiliriz.",
  },
  {
    question: "Öğrenci takibi nasıl yapılıyor?",
    answer:
      "Öğrencinin devam durumu, çalışma planına uyumu ve akademik gelişimi süreç boyunca takip edilir. Gelişim hakkında veliyle düzenli iletişim kurulması yaklaşımımızın temel parçasıdır.",
  },
  {
    question: "Yüz yüze görüşme yapabilir miyiz?",
    answer:
      "Elbette. Kurumumuzu yerinde görmek ve programlar hakkında ayrıntılı konuşmak için randevu oluşturabiliriz. Uygun gün ve saati belirlemek için WhatsApp üzerinden yazmanız yeterli.",
  },
  {
    question: "Sosyal medyadan güncel paylaşımları takip edebilir miyim?",
    answer:
      "Evet. Duyurularımızı ve kurumdan güncel paylaşımları Instagram ve Facebook hesaplarımızdan takip edebilirsiniz.",
  },
];
