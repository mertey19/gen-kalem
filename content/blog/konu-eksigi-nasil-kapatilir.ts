import type { BlogPost } from "@/content/types";

export const post: BlogPost = {
  slug: "konu-eksigi-nasil-kapatilir",
  title: "Konu Eksiği Nasıl Kapatılır?",
  description:
    "Birikmiş konu eksiklerini tespit etmek, önceliklendirmek ve kalıcı olarak kapatmak için izlenebilecek pratik bir yöntem.",
  category: "Ders Çalışma",
  date: "2026-08-23",
  updatedAt: "2026-08-23",
  image: "/images/blog/konu-eksigi.jpg",
  imageAlt: "Sıraların üzerinde çalışma kâğıtları ve kalemler",
  body: [
    {
      type: "p",
      text: "Hazırlık sürecinde en çok tekrarlanan cümlelerden biri şudur: \"Eksiğim çok, nereden başlayacağımı bilmiyorum.\" Bu cümle bir yetersizlik göstergesi değil; yalnızca eksiklerin listelenmemiş olduğunun göstergesidir.",
    },
    {
      type: "p",
      text: "Listelenmemiş bir eksik, olduğundan büyük görünür. Bu yazıda eksikleri görünür hâle getirmek, sıraya koymak ve kalıcı olarak kapatmak için izlenebilecek bir yöntem var.",
    },

    { type: "h2", text: "Önce eksiği tanımlayın" },
    {
      type: "p",
      text: "\"Matematiğim kötü\" bir eksik tanımı değildir; üzerine plan kurulamaz. Kullanılabilir bir tanım konu düzeyinde olur: \"üslü sayılarda köklü ifadelere geçişte takılıyorum\" gibi.",
    },
    {
      type: "p",
      text: "Eksiği bu düzeyde tanımlamanın en pratik yolu, ders bazında konu başlıklarını çıkarıp her birine üç işaretten birini koymaktır:",
    },
    {
      type: "ul",
      items: [
        "**Tamam:** soruyu görünce ne yapacağımı biliyorum.",
        "**Yarım:** konuyu hatırlıyorum ama soruda takılıyorum.",
        "**Yok:** konuyu hiç çalışmadım ya da tamamen unuttum.",
      ],
    },
    {
      type: "p",
      text: "Bu liste bir kez çıkarıldığında, belirsiz bir kaygı yerine üzerinde çalışılabilir somut bir tablo elde edersiniz.",
    },

    { type: "h2", text: "Sırayı doğru kurun" },
    {
      type: "p",
      text: "Bütün eksikler eşit önemde değildir. Sıralama yaparken üç ölçüt işe yarar:",
    },
    {
      type: "ol",
      items: [
        "**Birikimlilik:** sonraki konuların üzerine kurulduğu konular önce gelir. Üslü sayılar eksikken logaritmaya geçmenin anlamı yoktur.",
        "**Sınavdaki ağırlık:** sık çıkan konular, nadir çıkanlardan önce gelir.",
        "**Kapanma süresi:** kısa sürede kapanacak eksikler listeden erken düşer ve ilerleme hissi verir.",
      ],
    },
    {
      type: "p",
      text: "İlk ölçüt en önemlisidir. Birikimli derslerde alt basamak eksikken üst basamağa çalışmak, harcanan zamanın büyük kısmını boşa çıkarır.",
    },

    { type: "h2", text: "\"Yarım\" olanlarla başlayın" },
    {
      type: "p",
      text: "Sezgisel olarak hiç bilinmeyen konulardan başlamak doğru gibi görünür. Oysa pratikte \"yarım\" işaretli konular çok daha hızlı kapanır ve daha çabuk net kazandırır.",
    },
    {
      type: "p",
      text: "Bu konularda temel zaten vardır; eksik olan genellikle birkaç soru tipi ya da bir ara adımdır. Bir iki saatlik çalışmayla kapanan bir konu, listeyi hızla kısaltır ve devam etme isteğini artırır.",
    },
    {
      type: "callout",
      title: "Neden bu sıra?",
      text: "Uzun listelerde en büyük risk, ilerleme görülmediği için listenin tamamen bırakılmasıdır. Hızlı kapanan maddelerle başlamak, listeyi yönetilebilir hissettirir.",
    },

    { type: "h2", text: "Bir konuyu kapatmak ne demek?" },
    {
      type: "p",
      text: "Konu anlatımını okumak veya videoyu izlemek konuyu kapatmaz; yalnızca tanıdık hâle getirir. Bir konunun gerçekten kapandığını anlamanın tek yolu vardır: o konudan karışık soruları tek başınıza çözebilmek.",
    },
    {
      type: "p",
      text: "İşe yarayan üç adımlı bir akış şudur:",
    },
    {
      type: "ol",
      items: [
        "Konuyu çalışın, ardından kapalı kitapla kısa bir not çıkarın.",
        "Aynı gün kolay sorularla başlayın; mantığı oturtun.",
        "Birkaç gün sonra aynı konudan karışık sorulara dönün.",
      ],
    },
    {
      type: "p",
      text: "Üçüncü adım atlandığında konu kısa sürede yeniden açılır. Bilginin kalıcı olması için gereken tekrar yöntemlerini [etkili tekrar yöntemleri](/blog/ogrenciler-icin-etkili-tekrar-yontemleri) yazımızda topladık.",
    },

    { type: "h2", text: "Yeni konu ile eksik kapatmayı dengeleyin" },
    {
      type: "p",
      text: "Yalnızca eksik kapatmaya odaklanmak, güncel müfredattan geri kalmaya yol açar. Yalnızca yeni konu işlemek ise eksik listesini büyütür.",
    },
    {
      type: "p",
      text: "Uygulanabilir bir denge şudur: haftanın bir gününü tamamen eksik kapatmaya ayırın, kalan günlerde güncel konuları takip edin. Böylece liste her hafta bir miktar kısalır ve müfredat da aksamaz.",
    },

    { type: "h2", text: "Bir eksik ne kadar sürede kapanır?" },
    {
      type: "p",
      text: "Bu sorunun tek cevabı yok, ama beklentiyi doğru kurmak listeyi bırakmamak için önemli. Kabaca üç kategori vardır:",
    },
    {
      type: "ul",
      items: [
        "**Yarım bilinen konular:** genellikle bir-iki çalışma seansında kapanır. Eksik olan bilgi değil, birkaç soru tipidir.",
        "**Hiç çalışılmamış tek konular:** konu anlatımı, soru çözümü ve birkaç gün sonraki tekrar ile bir hafta içinde oturur.",
        "**Birbirine bağlı konu zincirleri:** üslü sayılar → köklü ifadeler → logaritma gibi. Bunlar tek tek değil sırayla çalışılmalı ve birkaç hafta sürebilir.",
      ],
    },
    {
      type: "p",
      text: "Üçüncü kategoriyi tek bir madde olarak listelemek moral bozar. Zinciri alt basamaklara bölüp her birini ayrı madde yapmak, ilerlemeyi görünür kılar.",
    },

    { type: "h2", text: "Eksikleri tek bir yerde tutun" },
    {
      type: "p",
      text: "Eksik listesi defterin farklı sayfalarına dağıldığında takip edilemez hâle gelir. Tek bir liste tutun ve çalışma masanızda görünür bir yerde bulundurun.",
    },
    {
      type: "p",
      text: "Kapanan maddenin üzerini çizmek küçük bir hareket gibi görünür ama ilerlemeyi somut kılar. İki ay sonra listeye baktığınızda ne kadar yol aldığınızı görürsünüz.",
    },

    { type: "h2", text: "Eksik kapatırken sık yapılan iki hata" },
    {
      type: "ol",
      items: [
        "**Listeyi çıkarıp uygulamaya geçmemek.** Liste kendi başına ilerleme sağlamaz; haftada kaç madde kapatılacağı baştan belirlenmezse liste yalnızca kaygı kaynağına dönüşür.",
        "**Kapanan konuyu bir daha hiç açmamak.** Kapatılan bir eksik, birkaç hafta sonra tekrar edilmezse yeniden açılır. Listeden düşen maddeleri ayrı bir \"tekrar edilecekler\" başlığına taşımak bunu önler.",
      ],
    },
    {
      type: "p",
      text: "İkinci madde özellikle uzun hazırlık süreçlerinde belirleyicidir. Şubat ayında kapatılan bir konu, hiç dönülmezse Haziran'da yeniden eksik hâline gelir.",
    },

    { type: "h2", text: "Takıldığınız yeri biriktirmeyin" },
    {
      type: "p",
      text: "Eksiklerin büyümesinin en yaygın sebebi, anlaşılmayan bir konunun sorulmadan bırakılmasıdır. Aynı gün sorulan bir soru beş dakika alırken, iki hafta sonra aynı eksiği kapatmak çok daha uzun sürer.",
    },
    {
      type: "p",
      text: "Bu yüzden gün içinde takıldığınız yerleri kısa bir listeye not edin ve düzenli olarak sorun. Etüdün tam olarak ne işe yaradığını [etüt nedir](/blog/etut-nedir-ogrenciye-ne-kazandirir) yazımızda anlattık.",
    },

    { type: "h2", text: "Yalnız yapmak zorunda değilsiniz" },
    {
      type: "p",
      text: "Eksik listesi çıkarmak, sıralamak ve kapatma planı kurmak ilk kez yapılıyorsa zaman alır. Bu noktada dışarıdan bir değerlendirme, hangi konunun gerçekten öncelikli olduğunu görmeyi kolaylaştırır.",
    },
    {
      type: "p",
      text: "Genç Kalem'de bireysel akademik destek tam olarak bunun üzerine kuruludur: eksiğin nerede olduğunu belirlemek ve çalışmayı yalnızca oraya odaklamak. Ayrıntılar için [bireysel akademik destek](/bireysel-ders-mersin) sayfamıza bakabilirsiniz.",
    },
  ],
};
