import type { BlogBlock } from "@/content/types";

/**
 * Yerel arama niyetine yönelik program sayfaları.
 *
 * Bunlar "doorway" sayfa DEĞİLDİR: her biri kendi hedef kitlesi, süreç
 * anlatımı ve SSS'i olan özgün içerik taşır. Gövde, blog ile aynı yapısal
 * blok sistemini kullanır; böylece tipografi tek yerden yönetilir.
 *
 * Doğrulanmamış hiçbir sonuç, oran veya kontenjan bilgisi yazılmamıştır.
 */
export type LandingFaq = { question: string; answer: string };

export type LandingPage = {
  slug: string;
  /** İlgili program kartının slug'ı. Hub sayfalarında boş bırakılabilir. */
  programSlug?: string;
  eyebrow: string;
  /** Sayfanın tek H1'i. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Giriş paragrafları. */
  intro: string[];
  audience: string[];
  body: BlogBlock[];
  faq: LandingFaq[];
  /** İlgili blog yazılarının slug'ları. */
  relatedPosts: string[];
  image: string;
  imageAlt: string;
};

export const landingPages: LandingPage[] = [
  {
    slug: "mersin-dershane",
    eyebrow: "Mersin Dershane",
    h1: "Mersin'de Dershane — YKS ve LGS Hazırlık",
    metaTitle: "Mersin Dershane | YKS ve LGS Kursu — Genç Kalem",
    metaDescription:
      "Mersin Akdeniz'de dershane arayan veliler için YKS (TYT–AYT), LGS, etüt ve bireysel destek. Cami Şerif'te Genç Kalem Eğitim Kurumları. WhatsApp'tan yazın.",
    intro: [
      "Mersin'de dershane arıyorsanız bakmanız gereken yer tabeladaki isim değil, öğrencinin haftalık düzeninin nasıl kurulduğudur. Genç Kalem Eğitim Kurumları, Akdeniz ilçesinde Cami Şerif'te YKS, LGS, okula destek, etüt ve bireysel akademik destek programları yürüten bir özel öğretim kursudur.",
      "Günlük dilde hâlâ dershane denir; resmi adımız Genç Kalem Özel Öğretim Kursu'dur. Velinin aradığı şey aynıdır: seviyeye göre plan, takıldığı yerde soru sorabilme, deneme analizi ve veliyle kopmayan iletişim.",
    ],
    audience: [
      "Mersin'de YKS (TYT–AYT) dershanesi arayan lise öğrencileri ve mezunlar",
      "LGS'ye hazırlanan 7 ve 8. sınıf öğrencileri",
      "Okul derslerinde eksiği birikmiş ortaokul ve lise öğrencileri",
      "Akdeniz, Yenişehir, Mezitli veya Toroslar'dan merkeze ulaşımı olan aileler",
    ],
    body: [
      { type: "h2", text: "Mersin dershane aramasında Genç Kalem ne sunuyor?" },
      {
        type: "p",
        text: "Kurumun çıkış noktası tek bir sorudur: öğrenci şu anda nerede duruyor ve hedefine ulaşmak için hangi sırayla ne çalışmalı? Bu yüzden herkese aynı takvimi uygulamıyoruz. Program, seviye tespitiyle başlar; deneme sonuçlarına göre güncellenir.",
      },
      {
        type: "ul",
        items: [
          "[YKS hazırlık](/yks-kursu-mersin): TYT ağırlıklı başlangıç, hedef alana göre AYT planı, konu bazlı deneme analizi.",
          "[LGS hazırlık](/lgs-kursu-mersin): okul müfredatıyla uyumlu ilerleyiş, yeni nesil soru çalışması, veli bilgilendirmesi.",
          "[Etüt ve soru çözümü](/mersin-etut-merkezi): takılan sorunun aynı gün sorulabildiği çalışma saatleri.",
          "[Bireysel akademik destek](/bireysel-ders-mersin): belirli bir derste eksiği birikmiş öğrenciler için birebir plan.",
        ],
      },

      { type: "h2", text: "Dershane seçimini neye göre yapıyoruz?" },
      {
        type: "p",
        text: "Mersin'de dershane arayan bir ailenin çoğu zaman elinde üç ölçüt vardır: yakınlık, fiyat ve ilk izlenim. Bunlar yok sayılamaz; ancak tek başına yeterli değildir. Asıl ayrım, öğrencinin eksiğinin görünür kılınıp kılınmadığıdır.",
      },
      {
        type: "ol",
        items: [
          "Seviye belirlenir: hangi konular tamam, hangileri eksik.",
          "Haftalık akış kurulur: konu, soru, tekrar ve deneme için ayrı bloklar.",
          "Deneme okunur: yanlışlar sebebine göre ayrılır, plan buna göre değişir.",
          "Veli bilgilendirilir: devam, uyum ve eğilim büyümeden paylaşılır.",
        ],
      },
      {
        type: "p",
        text: "Bu dört adım yoksa kurumun adı dershane olsa da süreç rastlantıya kalır. Ayrıntılı bir karşılaştırma listesi için [Mersin dershane araması rehberine](/blog/mersin-dershane-aramasi) bakabilirsiniz.",
      },

      { type: "h2", text: "Neden Akdeniz / Cami Şerif?" },
      {
        type: "p",
        text: "Yol süresi çalışma süresinden çalar. Merkezî bir konum, özellikle etüt için gün içinde tekrar gelmesi gereken öğrenciler açısından fark yaratır. Cami Şerif, Akdeniz'in yanı sıra Yenişehir, Mezitli ve Toroslar'dan gelen öğrenciler için de ulaşılabilir bir noktadır.",
      },
      {
        type: "p",
        text: "Adresimiz: Cami Şerif, 5228. Sk., Vakıf İşhanı No:4 Kat:4, Akdeniz / Mersin. Kurumu yerinde görmek isterseniz randevuyu mümkünse ders saatleri içinde alın; boş bir binayı gezmek yerine çalışırken görmek daha doğru bir fikir verir.",
      },

      { type: "h2", text: "Kimler için uygun değil?" },
      {
        type: "p",
        text: "Kesin sıralama veya net vaadi arayan aileler için doğru adres değiliz. Sınav sonucu öğrencinin çalışmasına, başlangıç seviyesine ve sürece bağlıdır. Bizim işimiz süreci görünür ve sürdürülebilir kılmaktır; sonucu garanti etmemektir.",
      },
      {
        type: "callout",
        title: "İlk adım",
        text: "Öğrencinin sınıfını ve hedefini WhatsApp'tan yazmanız yeterli. Size uygun program seçeneklerini iletelim; isterseniz tanışma görüşmesi planlayalım.",
      },
    ],
    faq: [
      {
        question: "Genç Kalem bir dershane mi?",
        answer:
          "Günlük dilde dershane olarak aranırız; resmi adımız Genç Kalem Özel Öğretim Kursu'dur. Mersin Akdeniz'de YKS, LGS, okula destek, etüt ve bireysel akademik destek programları yürütüyoruz.",
      },
      {
        question: "Yenişehir, Mezitli veya Toroslar'dan gelebilir miyiz?",
        answer:
          "Evet. Kurum Cami Şerif / Akdeniz'de, merkeze yakın bir noktadadır. Ulaşımın öğrencinin haftalık düzenine uyup uymadığını tanışma görüşmesinde birlikte değerlendiriyoruz.",
      },
      {
        question: "YKS ve LGS aynı kurumda mı yürütülüyor?",
        answer:
          "Evet, her iki sınav için de hazırlık programımız var. Planlar birbirinin kopyası değildir: LGS okul müfredatıyla uyumlu ilerler, YKS'de TYT–AYT dengesi öğrencinin hedef alanına göre kurulur.",
      },
      {
        question: "Kayıt için ne yapmam gerekiyor?",
        answer:
          "Öğrencinin sınıf düzeyini belirterek WhatsApp'tan yazmanız yeterli. Uygun programı konuşur, isterseniz kurum ziyareti ve ön kayıt adımlarını planlarız.",
      },
    ],
    relatedPosts: [
      "mersin-dershane-aramasi",
      "mersinde-kurs-secerken-dikkat-edilmesi-gerekenler",
      "etut-nedir-ogrenciye-ne-kazandirir",
    ],
    image: "/images/blog/kurs-secimi.jpg",
    imageAlt: "Genç Kalem Eğitim Kurumları'nda Mersin dershane ortamında öğrenciler ve öğretmenler",
  },

  {
    slug: "yks-kursu-mersin",
    programSlug: "yks-hazirlik",
    eyebrow: "YKS Hazırlık",
    h1: "Mersin'de YKS (TYT–AYT) Hazırlık Kursu",
    metaTitle: "Mersin YKS Kursu | TYT–AYT Hazırlık — Genç Kalem",
    metaDescription:
      "Mersin Akdeniz'de YKS (TYT–AYT) hazırlık programı. Seviye tespiti, haftalık plan, deneme analizi ve düzenli öğrenci takibi. Bilgi için WhatsApp'tan yazın.",
    intro: [
      "Genç Kalem Eğitim Kurumları, Mersin'in Akdeniz ilçesinde lise öğrencileri ve mezunlar için YKS hazırlık çalışmaları yürütüyor. Mersin'de dershane arayan ailelerin sık sorduğu soru şudur: öğrenci şu anda nerede duruyor ve hedefine ulaşmak için hangi sırayla ne çalışmalı?",
      "Bu yüzden herkese aynı takvimi uygulamıyoruz. TYT ve AYT dengesi, öğrencinin hedef alanına ve kalan süreye göre kuruluyor; plan süreç içinde deneme sonuçlarına bakılarak güncelleniyor.",
    ],
    audience: [
      "TYT ve AYT'ye ilk kez hazırlanan 11 ve 12. sınıf öğrencileri",
      "Bir önceki sınavdan sonra yeniden hazırlanan mezun öğrenciler",
      "Konu eksiği fazla olduğu için nereden başlayacağını bilemeyen öğrenciler",
      "Kendi başına çalışıp netlerini belirli bir noktadan öteye taşıyamayanlar",
    ],
    body: [
      { type: "h2", text: "Program nasıl kuruluyor?" },
      {
        type: "p",
        text: "Süreç, öğrencinin mevcut seviyesinin belirlenmesiyle başlar. Hangi derslerde eksik olduğu, hangi konuları bildiği ve hedeflediği alanın hangi derslere ağırlık verilmesini gerektirdiği netleştirilir.",
      },
      {
        type: "p",
        text: "Ardından haftalık bir akış kurulur. Bu akışın sabit olması önemlidir: öğrenci her hafta yeniden \"ne çalışsam\" sorusuyla uğraşmaz, hangi gün ne yapacağını bilir.",
      },
      {
        type: "ul",
        items: [
          "**Seviye tespiti:** hangi konular tamam, hangileri eksik.",
          "**Hedef alan:** sayısal, eşit ağırlık veya sözel; AYT dağılımı buna göre belirlenir.",
          "**Haftalık plan:** konu çalışması, soru çözümü, tekrar ve deneme için ayrı bloklar.",
          "**Deneme takibi:** her denemenin ardından konu bazlı analiz.",
          "**Eksik listesi:** kapanmayan konular kayıt altında tutulur ve takip edilir.",
        ],
      },

      { type: "h2", text: "TYT ve AYT dengesi" },
      {
        type: "p",
        text: "Hazırlığın ilk döneminde ağırlık genellikle TYT'dedir. TYT tüm adayların girdiği bölüm olduğu ve sıralamayı büyük ölçüde belirlediği için, buradaki netleri sağlamlaştırmadan AYT'ye ağırlık vermek çoğu öğrenci için verimli olmaz.",
      },
      {
        type: "p",
        text: "Konular ilerledikçe ve hedef alan netleştikçe denge AYT lehine kaydırılır. Bu geçişin ne zaman yapılacağı öğrenciye göre değişir; deneme sonuçları ve konu tamamlanma durumu birlikte değerlendirilir.",
      },

      { type: "h2", text: "Deneme sınavları nasıl kullanılıyor?" },
      {
        type: "p",
        text: "Deneme, yalnızca puan görmek için çözülen bir sınav değildir. Asıl işlevi eksiği görünür kılmaktır. Bu yüzden her denemenin ardından yanlışlar sebebine göre ayrılır: bilgi eksiği mi, dikkat hatası mı, süre baskısı mı, yoksa soru tipini tanımama mı?",
      },
      {
        type: "p",
        text: "Bu ayrım yapılmadan çalışmak, yanlış yere zaman harcamak anlamına gelir. Dikkat hatasından kaybedilen bir soru için konuyu baştan çalışmak gereksizdir; bilgi eksiğinden kaybedilen bir soru için ise \"daha dikkatli olacağım\" demek işe yaramaz.",
      },

      { type: "h2", text: "Etüt ve soru çözümü" },
      {
        type: "p",
        text: "Anlaşılmayan bir konunun aynı gün sorulabilmesi, uzun hazırlık süreçlerinde en çok fark yaratan alışkanlıklardan biridir. Etüt saatleri tam olarak bunun içindir: öğrenci takıldığı yeri biriktirmeden sorar, eksiği büyümeden kapanır.",
      },

      { type: "h2", text: "Veli bilgilendirmesi" },
      {
        type: "p",
        text: "Öğrencinin devam durumu, çalışma planına uyumu ve deneme sonuçlarındaki eğilim hakkında veliyle düzenli iletişim kurulur. Amaç, sorunları büyümeden fark etmek ve süreci öğrenci, öğretmen ve veli arasında ortak yürütmektir.",
      },
    ],
    faq: [
      {
        question: "YKS hazırlığına ne zaman başlamak gerekir?",
        answer:
          "Erken başlamak avantaj sağlar, ancak kalan süre ne olursa olsun plan buna göre kurulabilir. Önemli olan başlangıç tarihinden çok, kalan sürede gerçekçi bir öncelik sıralaması yapmaktır. Öğrencinin mevcut durumuna göre nasıl bir plan kurulabileceğini tanışma görüşmesinde birlikte değerlendiriyoruz.",
      },
      {
        question: "Mezun öğrenciler için program farklı mı ilerliyor?",
        answer:
          "Mezun öğrencilerde gün tamamen hazırlığa ayrılabildiği için haftalık akış daha yoğun kurulabilir. Buna karşılık okul düzeninin sağladığı yapı ortadan kalktığı için sabit çalışma saatleri ve düzenli takip daha kritik hâle gelir.",
      },
      {
        question: "Hangi alanlarda AYT desteği veriliyor?",
        answer:
          "Öğrencinin hedeflediği alana göre planlama yapılıyor. Güncel ders ve öğretmen dağılımı döneme göre değişebildiği için en doğru bilgiyi WhatsApp üzerinden paylaşıyoruz.",
      },
    ],
    relatedPosts: [
      "ykse-nereden-baslamali-tyt-ayt-yol-haritasi",
      "deneme-sinavi-sonuclari-nasil-degerlendirilmeli",
      "mersin-dershane-aramasi",
    ],
    image: "/images/blog/yks-yol-haritasi.jpg",
    imageAlt: "Genç Kalem öğrencileri üniversite kampüsünde",
  },

  {
    slug: "lgs-kursu-mersin",
    programSlug: "lgs-hazirlik",
    eyebrow: "LGS Hazırlık",
    h1: "Mersin'de LGS Hazırlık Kursu",
    metaTitle: "Mersin LGS Kursu | 7–8. Sınıf Hazırlık — Genç Kalem",
    metaDescription:
      "Mersin Akdeniz'de LGS hazırlık programı. Okul müfredatıyla uyumlu ilerleyiş, yeni nesil soru çalışması, deneme takibi ve veli bilgilendirmesi.",
    intro: [
      "Genç Kalem Eğitim Kurumları, Mersin Akdeniz'de 7 ve 8. sınıf öğrencileri için LGS hazırlık çalışmaları yürütüyor. Mersin dershane aramasında LGS'yi ayrı düşünmek gerekir: bu, birçok öğrencinin girdiği ilk büyük sınavdır ve süreç yalnızca konu çalışmakla ilgili değil; sınav düzenine, süre baskısına ve kendi hatalarını değerlendirmeye alışmakla da ilgilidir.",
      "Programın en belirgin özelliği okul müfredatıyla uyumlu ilerlemesi. Okulda işlenen konu aynı hafta içinde soru çözümüyle pekiştirildiğinde, öğrenci hem okul sınavına hem LGS'ye aynı çalışmayla hazırlanmış olur.",
    ],
    audience: [
      "LGS'ye hazırlanan 8. sınıf öğrencileri",
      "Sürece erken başlamak isteyen 7. sınıf öğrencileri",
      "Okul derslerini takip eden ama sınav sorularında zorlanan öğrenciler",
      "Çalışma düzenini tek başına kuramayan öğrenciler",
    ],
    body: [
      { type: "h2", text: "Okulla uyumlu bir akış" },
      {
        type: "p",
        text: "LGS konularının büyük kısmı 8. sınıf müfredatıyla örtüşür. Bu yüzden \"okul ayrı, kurs ayrı\" şeklinde iki bağımsız düzen kurmak öğrenciyi gereksiz yere yorar.",
      },
      {
        type: "p",
        text: "Bunun yerine okulda işlenen konu takip edilir, aynı hafta içinde soru çözümüyle desteklenir ve eksik kalan yerler ayrıca çalışılır. Böylece toplam çalışma süresi artmadan verim yükselir.",
      },

      { type: "h2", text: "Sözel ve sayısal dengesi" },
      {
        type: "p",
        text: "LGS'de sayısal bölüm kadar sözel bölüm de belirleyicidir. Yalnızca matematik ve fen çalışan bir öğrenci, Türkçe ve inkılap tarihi gibi derslerde hızla geride kalabilir.",
      },
      {
        type: "p",
        text: "Özellikle Türkçe, paragraf sorularındaki okuma hızı ve dikkat nedeniyle düzenli çalışma isteyen bir derstir; birkaç haftada telafi edilmesi zordur. Haftalık planda her iki bölüme de yer ayrılır.",
      },

      { type: "h2", text: "Yeni nesil sorulara alışmak" },
      {
        type: "p",
        text: "LGS sorularının önemli bir kısmı bilgiyi doğrudan sormak yerine bir metin, tablo veya grafik üzerinden yorumlamayı gerektirir. Konuyu bilen bir öğrenci bile bu soru tipine yabancıysa zorlanır.",
      },
      {
        type: "p",
        text: "Bunun tek çözümü, konu bittikçe bu tarz sorularla düzenli olarak karşılaşmaktır. Soru tipini tanımamak da bir tür eksikliktir ve çalışılarak kapatılabilir.",
      },

      { type: "h2", text: "Deneme takibi" },
      {
        type: "p",
        text: "Deneme sınavları, konuların bir kısmı tamamlandıktan sonra düzenli hâle gelir. Erken dönemde branş denemeleriyle başlanır; konular ilerledikçe genel denemeye geçilir.",
      },
      {
        type: "p",
        text: "Her denemeden sonra analiz yapılır. Yalnızca net sayısına bakmak yeterli değildir; hangi konuda, hangi sebeple kaybedildiği belirlenmezse aynı yanlışlar tekrar eder.",
      },

      { type: "h2", text: "Veliyle birlikte yürütülen bir süreç" },
      {
        type: "p",
        text: "Bu yaş grubunda velinin rolü belirleyicidir. Öğrencinin devam durumu, çalışma düzeni ve deneme sonuçlarındaki eğilim hakkında veliyle düzenli iletişim kurulur.",
      },
      {
        type: "callout",
        title: "Sürecin taşınabilir kalması",
        text: "LGS bir yıla yayılan bir süreç. Her haftanın aynı verimde geçmesi beklenmez; önemli olan verimsiz bir haftadan sonra düzene geri dönebilmektir.",
      },
    ],
    faq: [
      {
        question: "LGS hazırlığına 7. sınıfta başlamak gerekir mi?",
        answer:
          "Zorunlu değil, ancak erken başlamak 8. sınıftaki yükü belirgin şekilde azaltır. 7. sınıfta amaç yoğun sınav çalışması değil, çalışma düzenini oturtmak ve temel derslerde eksik bırakmamaktır.",
      },
      {
        question: "Okul derslerinden geri kalır mıyım?",
        answer:
          "Program okul müfredatıyla uyumlu ilerlediği için genellikle tersi olur. Okulda işlenen konunun aynı hafta soru çözümüyle pekiştirilmesi, okul sınavlarına da hazırlık sağlar.",
      },
      {
        question: "Deneme sınavları ne sıklıkla yapılıyor?",
        answer:
          "Sıklık, konuların tamamlanma durumuna göre değişir. Konu eksiği fazlayken sık deneme çözmek verimli olmadığı için erken dönemde daha seyrek, konular ilerledikçe daha düzenli bir takvim uygulanır. Güncel takvim için WhatsApp üzerinden bilgi alabilirsiniz.",
      },
    ],
    relatedPosts: [
      "lgs-hazirlik-surecinde-bilinmesi-gerekenler",
      "veliler-icin-sinav-doneminde-destek-rehberi",
      "mersin-dershane-aramasi",
    ],
    image: "/images/blog/lgs-hazirlik.jpg",
    imageAlt: "Genç Kalem öğrencileri bir gezide topluca",
  },

  {
    slug: "mersin-etut-merkezi",
    programSlug: "etut-ve-soru-cozum",
    eyebrow: "Etüt ve Soru Çözümü",
    h1: "Mersin'de Etüt ve Soru Çözüm Merkezi",
    metaTitle: "Mersin Etüt Merkezi | Soru Çözüm Saatleri — Genç Kalem",
    metaDescription:
      "Mersin Akdeniz'de etüt ve soru çözüm çalışmaları. Öğrenci takıldığı soruyu aynı gün sorar, eksik konu birikmeden kapanır. Bilgi için WhatsApp'tan yazın.",
    intro: [
      "Etüt, ders anlatımının dışında kalan ve öğrencinin kendi eksiğiyle çalıştığı zamandır. Genç Kalem'de etüt saatlerinin tek bir amacı var: öğrencinin takıldığı yeri, takıldığı gün çözebilmesi.",
      "Anlaşılmayan bir konu sorulmadan bırakıldığında büyümeye başlar. Üzerine yeni konular gelir ve bir hafta sonra öğrenci nereden başlayacağını bilemez hâle gelir. Etüt bu birikmeyi engeller.",
    ],
    audience: [
      "Evde çalışırken dikkati kolay dağılan öğrenciler",
      "Sınıf ortamında soru sormakta çekinen öğrenciler",
      "Belirli bir derste eksiği birikmiş olanlar",
      "Ne çalışacağına karar vermekte zorlanan öğrenciler",
    ],
    body: [
      { type: "h2", text: "Etüt saatinde ne oluyor?" },
      {
        type: "p",
        text: "Etüdün akışını öğretmen değil, öğrencinin ihtiyacı belirler. Herkes aynı konuyu değil, kendi eksiğini çalışır. Bu yönüyle ders saatinden çok daha kişisel bir zamandır.",
      },
      {
        type: "ol",
        items: [
          "**Gelmeden önce:** öğrenci o gün neyi çalışacağını ve neyi soracağını belirler.",
          "**Etüt sırasında:** önce kendi başına dener, takıldığı noktada sorar; cevabı değil yaklaşımı öğrenir.",
          "**Bitirmeden önce:** öğrendiği yöntemle benzer bir soruyu tek başına çözer.",
        ],
      },
      {
        type: "p",
        text: "Üçüncü adım en çok atlanan ama en belirleyici olanıdır. Birlikte çözülen bir soru anlaşılmış gibi hissettirir; asıl kontrol, aynı tipteki ikinci soruyu tek başına çözebilmektir.",
      },

      { type: "h2", text: "Evde çalışmakla farkı" },
      {
        type: "p",
        text: "Evde çalışmak gereklidir ve etüt onun yerine geçmez. İkisi farklı işler görür:",
      },
      {
        type: "ul",
        items: [
          "**Evde:** tekrar, kısa notların gözden geçirilmesi, bilinen konularda soru çözümü.",
          "**Etütte:** anlaşılmayan konular, çözülemeyen soru tipleri, nereden başlanacağı bilinmeyen dersler.",
        ],
      },
      {
        type: "p",
        text: "Bu ayrımı yapan öğrenci etüt saatini yalnızca orada yapabileceği işlere ayırır ve saatin verimi belirgin şekilde artar.",
      },

      { type: "h2", text: "Çalışma ortamı" },
      {
        type: "p",
        text: "Etüdün ikinci işlevi, çalışmayı kolaylaştıran bir ortam sağlamaktır. Evde dikkati dağılan ya da masaya oturmakta zorlanan öğrenciler için düzenli bir çalışma alanı, tek başına fark yaratabilir.",
      },

      { type: "h2", text: "Hangi derslerde destek alınabilir?" },
      {
        type: "p",
        text: "Etüt, öğrencinin o hafta zorlandığı derse göre şekillenir. İşlem ağırlıklı derslerde soru çözümü, bilgi ağırlıklı derslerde konu tamamlama öne çıkar. Güncel etüt saatleri ve hangi derslerde destek verildiği döneme göre değiştiği için en doğru bilgiyi WhatsApp üzerinden paylaşıyoruz.",
      },
    ],
    faq: [
      {
        question: "Etüde katılmak için kurumda kayıtlı olmak gerekiyor mu?",
        answer:
          "Etüt ve soru çözüm çalışmalarının hangi programlarla birlikte yürütüldüğü döneme göre değişebiliyor. Öğrencinin sınıf düzeyini belirterek WhatsApp üzerinden yazdığınızda güncel seçenekleri iletebiliriz.",
      },
      {
        question: "Etüde hazırlıksız gelmek sorun olur mu?",
        answer:
          "Sorun olmaz ama verimi düşürür. Gün içinde takıldığınız yerleri kısa bir listeye not edip getirmek, etüdün tamamını kendi eksiklerinize ayırmanızı sağlar.",
      },
      {
        question: "Etüt saatleri ne zaman?",
        answer:
          "Etüt saatleri döneme ve sınıf düzeyine göre planlandığı için güncel programı WhatsApp üzerinden paylaşıyoruz.",
      },
    ],
    relatedPosts: [
      "etut-nedir-ogrenciye-ne-kazandirir",
      "ogrenciler-icin-etkili-tekrar-yontemleri",
      "verimli-ders-calisma-programi-nasil-hazirlanir",
    ],
    image: "/images/blog/etut.jpg",
    imageAlt: "Öğrenciler sınıfta bireysel olarak çalışırken",
  },

  {
    slug: "bireysel-ders-mersin",
    programSlug: "bireysel-akademik-destek",
    eyebrow: "Bireysel Akademik Destek",
    h1: "Mersin'de Bireysel Akademik Destek",
    metaTitle: "Mersin Bireysel Ders ve Akademik Destek — Genç Kalem",
    metaDescription:
      "Mersin Akdeniz'de bireysel akademik destek. Öğrencinin eksik olduğu konulara odaklanan, seviyesine göre planlanan birebir çalışma desteği.",
    intro: [
      "Her öğrenci aynı hızda ilerlemez. Sınıf ortamında akış ortalamaya göre kurulduğu için, belirli bir konuda eksiği olan öğrenci geride kalabilir; konuyu zaten bilen öğrenci ise gereksiz tekrar yapar.",
      "Bireysel akademik destek, bu iki durumu da çözmek için var. Çalışma öğrencinin bulunduğu noktadan başlar ve yalnızca ihtiyacı olan konulara odaklanır.",
    ],
    audience: [
      "Belirli bir derste eksiği birikmiş öğrenciler",
      "Sınıf temposunu yakalamakta zorlananlar",
      "Kısa sürede belirli bir konuyu tamamlaması gereken öğrenciler",
      "Grup ortamında soru sormakta zorlanan öğrenciler",
    ],
    body: [
      { type: "h2", text: "Nasıl planlanıyor?" },
      {
        type: "p",
        text: "Süreç, eksiğin tam olarak nerede olduğunun belirlenmesiyle başlar. \"Matematiği kötü\" ifadesi bir plan kurmak için yeterli değildir; hangi konuda, hangi tür soruda ve hangi aşamada takıldığının netleşmesi gerekir.",
      },
      {
        type: "p",
        text: "Bu tespit yapıldıktan sonra çalışma sırası belirlenir. Birikimli ilerleyen derslerde önceki konudaki bir boşluk sonraki konuları da zorlaştırdığı için sıralama önemlidir.",
      },

      { type: "h2", text: "Grup dersinden farkı" },
      {
        type: "ul",
        items: [
          "Akış öğrencinin hızına göre ayarlanır; anlaşılmayan yerde durulur.",
          "Yalnızca eksik olunan konular çalışılır, bilinen konular tekrar edilmez.",
          "Öğrenci soru sormak için sırasını beklemez.",
          "Çalışma yöntemi de birlikte kurulur; öğrenci nasıl çalışacağını öğrenir.",
        ],
      },

      { type: "h2", text: "Ne kadar sürer?" },
      {
        type: "p",
        text: "Bu, eksiğin büyüklüğüne bağlıdır. Tek bir konudaki boşluk birkaç çalışmada kapanabilir; birikmiş bir eksik için daha uzun bir plan gerekir.",
      },
      {
        type: "p",
        text: "Bireysel desteğin amacı süresiz devam etmek değildir. Hedef, öğrencinin eksiğini kapatıp kendi başına ya da grup içinde ilerleyebilecek duruma gelmesidir.",
      },

      { type: "h2", text: "Diğer programlarla birlikte kullanımı" },
      {
        type: "p",
        text: "Bireysel destek çoğu zaman tek başına değil, mevcut hazırlık programının yanında kullanılır. Öğrenci genel akışı grup içinde sürdürürken, takıldığı belirli bir konuda ayrıca destek alır.",
      },
      {
        type: "p",
        text: "Hangi kombinasyonun uygun olduğu öğrencinin durumuna göre değişir; bunu tanışma görüşmesinde birlikte belirliyoruz.",
      },
    ],
    faq: [
      {
        question: "Bireysel destek hangi derslerde veriliyor?",
        answer:
          "Öğrencinin ihtiyacına göre planlanıyor. Hangi derslerde ve hangi saatlerde destek verilebileceği döneme göre değiştiği için güncel bilgiyi WhatsApp üzerinden paylaşıyoruz.",
      },
      {
        question: "Grup programına devam ederken bireysel destek alınabilir mi?",
        answer:
          "Evet, yaygın kullanım biçimi budur. Öğrenci genel akışı grup içinde sürdürürken yalnızca takıldığı konularda ayrıca çalışır.",
      },
      {
        question: "Öğrencinin seviyesi nasıl belirleniyor?",
        answer:
          "Tanışma görüşmesinde öğrencinin mevcut durumu, okul notları ve varsa deneme sonuçları birlikte değerlendirilir. Amaç, eksiğin tam olarak nerede olduğunu belirlemektir.",
      },
    ],
    relatedPosts: [
      "verimli-ders-calisma-programi-nasil-hazirlanir",
      "ogrenciler-icin-etkili-tekrar-yontemleri",
      "mersinde-kurs-secerken-dikkat-edilmesi-gerekenler",
    ],
    image: "/images/blog/calisma-programi.jpg",
    imageAlt: "Genç Kalem sınıfında çalışan öğrenciler",
  },
];

export const getLandingPage = (slug: string): LandingPage | undefined =>
  landingPages.find((page) => page.slug === slug);

export const landingSlugs = landingPages.map((page) => page.slug);
