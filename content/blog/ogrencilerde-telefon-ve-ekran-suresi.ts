import type { BlogPost } from "@/content/types";

export const post: BlogPost = {
  slug: "ogrencilerde-telefon-ve-ekran-suresi",
  title: "Öğrencilerde Telefon ve Ekran Süresi: Veliler İçin Rehber",
  description:
    "Ders çalışırken telefonun neden bu kadar bölücü olduğu ve ekran süresini yasak koymadan yönetmek için evde uygulanabilecek yöntemler.",
  category: "Veli Rehberi",
  date: "2026-08-23",
  updatedAt: "2026-08-23",
  image: "/images/blog/ekran-suresi.jpg",
  imageAlt: "Genç Kalem öğrencileri ve öğretmenleri bir arada",
  body: [
    {
      type: "p",
      text: "Telefon, sınav hazırlığındaki öğrencilerin en çok tartışılan konusu. Evde çoğu tartışma aynı yerde tıkanır: veli süreyi kısıtlamak ister, öğrenci kısıtlamayı haksız bulur ve konu her hafta yeniden açılır.",
    },
    {
      type: "p",
      text: "Bu yazının amacı telefonu düşman ilan etmek değil. Amaç, asıl sorunun ne olduğunu netleştirmek ve yasak koymadan işleyen bir düzen kurmak.",
    },

    { type: "h2", text: "Asıl sorun toplam süre değil, bölünme" },
    {
      type: "p",
      text: "Günde iki saat telefon kullanan bir öğrenci, bu iki saati akşam tek seferde geçiriyorsa çalışması büyük ölçüde korunur. Aynı iki saat gün içine yayılmış hâldeyse — her on dakikada bir bakılıyorsa — çalışmanın tamamı zarar görür.",
    },
    {
      type: "p",
      text: "Sebep basit: dikkat, kesildikten sonra hemen geri gelmez. Bölünen bir çalışma bloğunda geçen sürenin önemli kısmı, kaldığınız yere geri dönmekle geçer. Bu yüzden **bölünmüş 45 dakika, kesintisiz 25 dakikadan daha az iş görür.**",
    },
    {
      type: "callout",
      title: "Doğru soru",
      text: "\"Günde kaç saat telefon kullanıyor?\" yerine \"çalışırken kaç kez bölünüyor?\" diye sormak, sorunu çok daha doğru tarif eder.",
    },

    { type: "h2", text: "Neden \"sessize almak\" yetmiyor?" },
    {
      type: "p",
      text: "Telefon sessizde bile masada durduğu sürece dikkat bir kısmını ona ayırmaya devam eder. Bildirim gelmese de \"acaba geldi mi\" düşüncesi bölünme yaratır.",
    },
    {
      type: "p",
      text: "İşe yarayan tek yöntem fiziksel mesafedir: telefon çalışma bloğu boyunca başka bir odada olmalı. Bu, cezalandırıcı bir kural değil; öğrencinin kendi lehine kurduğu bir düzendir.",
    },

    { type: "h2", text: "Yasak neden genellikle işe yaramıyor?" },
    {
      type: "p",
      text: "Tam yasak kısa vadede işe yarar gibi görünür ama üç sorunu vardır: öğrenci telefonu gizlice kullanmaya başlar, konu güven meselesine dönüşür ve yasak kalktığı anda kullanım eskisinden de artar.",
    },
    {
      type: "p",
      text: "Daha sürdürülebilir yaklaşım, süreyi tamamen kaldırmak yerine **ne zaman kullanılacağını belirlemektir.** Öğrenci telefonun ne zaman elinde olacağını bildiğinde, çalışma sırasında ona yönelme ihtiyacı belirgin şekilde azalır.",
    },

    { type: "h2", text: "Evde uygulanabilir bir düzen" },
    {
      type: "ol",
      items: [
        "**Çalışma bloğu boyunca telefon başka odada.** Blok bitince serbest.",
        "**Molada kullanım serbest ama süresi baştan belli.** 10 dakikalık molaya alarm kurmak, molanın 40 dakikaya çıkmasını engeller.",
        "**Yemek saatleri ekransız.** Bu kural evdeki herkes için geçerli olduğunda çok daha kolay yerleşir.",
        "**Uyumadan önceki son yarım saat ekransız.** Uyku kalitesi doğrudan ertesi günün dikkatini etkiler.",
      ],
    },
    {
      type: "p",
      text: "Bu maddelerin ortak noktası, hepsinin öğrenciyle birlikte kararlaştırılabilir olması. Dayatılan bir kural yerine üzerinde anlaşılan bir kural çok daha uzun ömürlü olur.",
    },

    { type: "h2", text: "Telefonu çalışma aracı olarak kullanmak" },
    {
      type: "p",
      text: "Telefonun tamamen dışlanması her zaman gerçekçi değil; birçok öğrenci konu anlatımı izlemek veya soru çözümü için kullanıyor. Bu durumda ayrım şöyle kurulabilir:",
    },
    {
      type: "ul",
      items: [
        "Konu izlenecekse mümkünse bilgisayar veya tablet tercih edilsin; bildirim yoğunluğu daha düşüktür.",
        "Telefon kullanılacaksa yalnızca o iş için açılsın ve iş bitince kaldırılsın.",
        "Soru çözümü sırasında telefon masada bulunmasın; takılan soru not edilip sonra bakılsın.",
      ],
    },

    { type: "h2", text: "Her ekran süresi aynı değil" },
    {
      type: "p",
      text: "Toplam süreyi tek bir sayı olarak görmek yanıltıcıdır. Aynı bir saat, ne yapıldığına göre çok farklı sonuçlar doğurur:",
    },
    {
      type: "ul",
      items: [
        "**Arkadaşla mesajlaşmak:** sosyal bağı sürdürür, kısa sürer ve genellikle sorun yaratmaz.",
        "**Video izlemek:** başı ve sonu belli olduğu için kontrol edilebilir.",
        "**Sonsuz akış (kısa video, keşfet):** doğal bir bitiş noktası olmadığı için süre farkında olmadan uzar. En çok zaman kaybettiren biçim budur.",
      ],
    },
    {
      type: "p",
      text: "Bu ayrım, konuşmayı da kolaylaştırır. \"Telefonu bırak\" yerine \"akışta ne kadar kaldığını fark ediyor musun\" sorusu, öğrencinin kendi kullanımını gözlemlemesini sağlar. Birçok telefonda uygulama bazlı süre raporu bulunur; bu raporu birlikte incelemek tartışmadan çok daha etkilidir.",
    },

    { type: "h2", text: "Kuralı koyan kişi de uygulamalı" },
    {
      type: "p",
      text: "Bu konudaki en yaygın çatışma sebebi tutarsızlıktır. Yemekte telefona bakan bir velinin koyduğu \"yemekte telefon yok\" kuralı uzun sürmez.",
    },
    {
      type: "p",
      text: "Ev genelinde geçerli birkaç ortak kural, yalnızca öğrenciye uygulanan çok sayıda kuraldan daha etkilidir ve tartışma yaratmaz.",
    },

    { type: "h2", text: "Ne zaman endişelenmeli?" },
    {
      type: "p",
      text: "Ekran süresi tek başına bir sorun göstergesi değildir. Dikkat edilmesi gereken, kullanımın diğer alanları belirgin şekilde etkilemesidir:",
    },
    {
      type: "ul",
      items: [
        "Uyku süresi düzenli olarak kısalıyorsa,",
        "Daha önce sevdiği etkinliklere ilgisi tamamen kaybolduysa,",
        "Telefon elinden alındığında öfke tepkisi belirgin şekilde büyüyorsa,",
        "Sosyal ilişkiler yerini tamamen çevrimiçi etkileşime bıraktıysa.",
      ],
    },
    {
      type: "p",
      text: "Bu belirtiler süreklilik kazandıysa, konuyu kural tartışması olarak ele almak yerine okul rehberlik servisiyle görüşmek daha doğru bir adımdır.",
    },

    { type: "h2", text: "Konuşmayı nasıl kurmalı?" },
    {
      type: "p",
      text: "\"Sürekli telefondasın\" cümlesi savunmaya yol açar ve konuşmayı kapatır. Somut ve süreç odaklı bir giriş daha işe yarar: \"çalışırken bölünüyor musun, nasıl bir düzen kurabiliriz?\"",
    },
    {
      type: "p",
      text: "Bu yaklaşım kuralı ortak karara dönüştürür. Sınav dönemindeki iletişimi genel olarak nasıl kuracağınıza dair öneriler için [veliler için destek rehberimize](/blog/veliler-icin-sinav-doneminde-destek-rehberi) göz atabilirsiniz.",
    },

    { type: "h2", text: "Evde odaklanmak zorsa" },
    {
      type: "p",
      text: "Bazı öğrenciler için ev, hangi kural konulursa konulsun odaklanmaya uygun bir ortam olmuyor. Bu bir irade sorunu değil; ortamın kendisiyle ilgili.",
    },
    {
      type: "p",
      text: "Böyle durumlarda çalışmayı düzenli bir ortama taşımak, evde kurulmaya çalışılan onlarca kuraldan daha hızlı sonuç verir. Genç Kalem'deki [etüt ve soru çözüm çalışmaları](/mersin-etut-merkezi) tam olarak bu ihtiyacı karşılıyor.",
    },
  ],
};
