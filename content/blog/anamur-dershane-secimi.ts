import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Anamur",
  focus: "Yerelde düzenli hazırlık, uzun yol ve taşınma ihtimalini ayrı değerlendirme",
  slug: "anamur-dershane-secimi",
  title: "Anamur Dershane Seçimi: YKS ve LGS İçin Gerçekçi Plan",
  description: "Anamur'da dershane arayanlar için yerel YKS–LGS programı, mezun öğrenci düzeni, uzun yolculuk ve Mersin merkezde eğitim kararını değerlendirme.",
  image: "/images/blog/yks-yol-haritasi.jpg",
  body: [
    { type: "p", text: "Anamur'da dershane arayan bir aile için ilk karşılaştırma, öğrencinin yaşadığı yerde düzenli sürdürebileceği hazırlık seçenekleri arasında yapılmalı. Mersin merkezdeki bir kursa bakılması, her gün gidip gelmenin uygun olduğu anlamına gelmez. Anamur ile Akdeniz'deki kurumları aynı mahalledeymiş gibi değerlendirmek yerine eğitim, yolculuk ve gerekiyorsa yaşam düzenini ayrı başlıklarla planlayın." },
    { type: "h2", text: "Anamur'da YKS hazırlığında haftalık kontrol" },
    { type: "p", text: "Yerel bir programı değerlendirirken öğretmenin kaç saat ders anlattığından önce öğrencinin neyi tamamladığının nasıl izlendiğini sorun. Konu çalışması, soru uygulaması ve deneme analizi birbirine bağlanmalı. Öğrenci aynı konuyu tekrar tekrar dinliyor ama hatası değişmiyorsa sonraki adımın nasıl belirlendiğini öğrenin. [YKS yol haritası](/blog/ykse-nereden-baslamali-tyt-ayt-yol-haritasi) görüşmeye bir başlangıç listesi sağlayabilir." },
    { type: "ul", items: ["TYT ile hedef alandaki AYT derslerine ayrılan zaman öğrencinin seviyesine uyuyor mu?", "Haftalık görevler tamamlanmadığında nedenleri konuşuluyor mu?", "Takılan soruların çözümü için bekleme süresi ve öğretmene erişim nasıl?", "Deneme sonucundaki değişim, yeni haftanın planına nasıl yansıyor?"] },
    { type: "h2", text: "Mezun adayın günü nasıl kurulmalı?" },
    { type: "p", text: "Mezun öğrencinin okul takvimi olmaması, bütün gününün verimli geçeceğini garanti etmez. Sabit başlama saati, öğle arası, bağımsız çalışma ve gün sonu değerlendirmesi planlanmalı. Anamur'da hangi çalışma ortamını kullanacağını ve hangi gün öğretmen desteği alacağını belirleyin. Kursun dışında geçirilen saatlerde de uygulanabilir bir akış olması, yalnızca ders saatini artırmaktan daha yararlı olabilir." },
    { type: "h2", text: "Merkezde eğitim düşünülüyorsa kararı genişletin" },
    { type: "p", text: "Mersin merkezdeki bir program ancak ulaşımın ve yaşam düzeninin nasıl kurulacağı netse değerlendirilebilir. Gerçek yol koşullarını ve seferleri kontrol edin. Taşınma veya bir yakının yanında kalma düşünülüyorsa bunu kurs ücretinden ayrı bütçeleyin; barınma, yemek ve aile desteğini de konuşun. Kurumun konaklama veya servis sağladığını varsaymayın." },
    { type: "p", text: "Genç Kalem'in bu rehberde belirtilen konumu Akdeniz'dir. Anamur'da şube veya çevrim içi program bulunduğu iddiası sunulmuyor. Akdeniz'de bulunacağınız bir dönemde programı değerlendirmek isterseniz önce ders takvimini ve öğrencinin kabul edilebileceği güncel kapsamı doğrudan kurumla görüşün. Ulaşım netleşmeden yalnızca tanıtım metnine göre karar vermeyin." },
    { type: "h2", text: "LGS için okul ve aile desteğini koruyun" },
    { type: "p", text: "LGS öğrencisinde alışılmış okul düzeni, uyku ve aileyle iletişim karara dahil olmalı. Yerel kurslardan okul konularıyla nasıl ilerlediklerini ve veliye nasıl geri bildirim verdiklerini öğrenin. Öğrencinin yalnızca yanlış sayısını değil, soru karşısındaki düşünme biçimini de konuşabildiği bir ortam arayın. Uzun yolculuk gerektiren ek destekleri tüm hafta üzerindeki etkisiyle tartın." },
    { type: "callout", title: "Anamur için karar notu", text: "Önce yerelde kullanılabilir desteği belirleyin. Merkezdeki bir seçeneği değerlendirirken ders kapsamının yanına toplam yaşam ve yol maliyetini de yazın. Öğrencinin devam edemeyeceği bir programı, sunduğu saat sayısıyla karşılaştırmak yanıltıcı olabilir." },
  ],
});
