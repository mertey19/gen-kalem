import type { BlogPost } from "@/content/types";

export const post: BlogPost = {
  slug: "ogrenciler-icin-etkili-tekrar-yontemleri",
  title: "Öğrenciler İçin Etkili Tekrar Yöntemleri",
  description:
    "Öğrenilen bilgilerin kalıcılığını artırmak için uygulanabilecek aktif tekrar yöntemleri.",
  category: "Öğrenci Rehberi",
  date: "2026-08-06",
  updatedAt: "2026-08-06",
  image: "/images/blog/tekrar-yontemleri.jpg",
  imageAlt: "Genç Kalem sınıfında dersi takip eden öğrenciler",
  body: [
    {
      type: "p",
      text: "Bir konuyu ilk öğrendiğinizde her şey açık görünür. Öğretmen anlatmıştır, örnekleri takip etmişsinizdir, defterde de her şey yerli yerindedir. Üç hafta sonra aynı konudan bir soru geldiğinde ise “bunu görmüştüm ama hatırlamıyorum” dersiniz.",
    },
    {
      type: "p",
      text: "Bu tamamen normaldir. Bilgi tek seferde kalıcı olmaz; tekrar edildikçe yerleşir. Ama tekrarın nasıl yapıldığı, ne kadar yapıldığından daha önemlidir. Bu yazıda, gerçekten işe yarayan tekrar yöntemlerini sade bir şekilde anlatıyoruz.",
    },

    { type: "h2", text: "Pasif tekrar neden yetersiz kalıyor?" },
    {
      type: "p",
      text: "Çoğu öğrencinin tekrar dediği şey şudur: defteri veya kitabı açıp konuyu baştan sona okumak. Bu yöntem tanıdık bir his verir; okurken her şeyi bildiğinizi düşünürsünüz. Ancak bu his, hatırlamakla aynı şey değildir.",
    },
    {
      type: "p",
      text: "Okurken bilgi gözünüzün önündedir, siz yalnızca tanırsınız. Sınavda ise bilgi karşınızda olmaz; onu kendiniz çıkarmanız gerekir. Bu yüzden **tanımak** ile **hatırlamak** arasındaki farkı kapatan yöntemlere ihtiyaç vardır.",
    },

    { type: "h2", text: "1. Aktif hatırlama" },
    {
      type: "p",
      text: "En basit ve en etkili yöntem budur: kitabı kapatın ve konu hakkında ne hatırlıyorsanız boş bir kâğıda yazın. Sonra kaynağı açıp eksiklerinizi kontrol edin.",
    },
    {
      type: "p",
      text: "İlk denemede boş kalan yerler sizi rahatsız edebilir. Bu tam olarak yöntemin işe yaradığının göstergesidir; çünkü hatırlayamadığınız kısımlar, gerçekte eksik olan kısımlardır. Okuyarak tekrar etseydiniz bu eksikleri fark etmeyecektiniz.",
    },
    {
      type: "ul",
      items: [
        "Konu başlığını yazın, altına hatırladıklarınızı maddeleyin.",
        "Formülleri bakmadan yazmayı deneyin.",
        "Kontrol ederken eksikleri farklı renkle tamamlayın; bir sonraki tekrarda önce onlara bakın.",
      ],
    },

    { type: "h2", text: "2. Soru çözerek tekrar" },
    {
      type: "p",
      text: "Soru çözmek yalnızca ölçme aracı değil, aynı zamanda güçlü bir tekrar yöntemidir. Bir soruyu çözmek için bilgiyi hatırlamak, seçmek ve uygulamak zorunda kalırsınız; bu üç adım bilgiyi okumaktan çok daha fazla pekiştirir.",
    },
    {
      type: "p",
      text: "Konu bittikten hemen sonra kolay sorularla başlayın, birkaç gün sonra aynı konudan daha karışık sorulara geçin. Böylece hem konuyu tekrar etmiş hem de farklı soru tiplerini tanımış olursunuz.",
    },

    { type: "h2", text: "3. Aralıklı tekrar" },
    {
      type: "p",
      text: "Bilgi, unutulmaya başladığı anda tekrar edilirse daha uzun süre kalıcı olur. Bu yüzden tekrarları arka arkaya değil, araları açarak yapmak gerekir.",
    },
    {
      type: "p",
      text: "Yeni öğrenilen bir konu için işe yarayan basit bir düzen şudur:",
    },
    {
      type: "ol",
      items: [
        "Aynı gün: 10–15 dakikalık kısa bir gözden geçirme.",
        "Bir gün sonra: aktif hatırlama ile kısa tekrar.",
        "Bir hafta sonra: soru çözerek tekrar.",
        "Bir ay sonra: kısa notlar üzerinden hızlı tekrar.",
      ],
    },
    {
      type: "p",
      text: "Bu düzen kulağa fazla iş gibi gelebilir, ama her tekrar bir öncekinden kısa sürer. Toplamda harcadığınız zaman, sınav öncesi konuyu sıfırdan çalışmaktan çok daha azdır.",
    },

    { type: "h2", text: "4. Kısa not çıkarma" },
    {
      type: "p",
      text: "Not tutmanın amacı defteri güzelleştirmek değil, konuyu sıkıştırmaktır. Bir konuyu tek sayfaya sığdırmaya çalışırken neyin önemli olduğuna karar vermek zorunda kalırsınız; asıl öğrenme de burada gerçekleşir.",
    },
    {
      type: "ul",
      items: [
        "Notu konuyu çalışırken değil, çalıştıktan sonra kapalı kitapla çıkarın.",
        "Cümle yerine anahtar kelime ve şema kullanın.",
        "Sayfayı renk ve süslemeyle doldurmayın; not, hızlı okunabilir olmalıdır.",
      ],
    },
    {
      type: "p",
      text: "Bu kısa notlar, sınavdan önceki son haftada en çok işinize yarayacak materyaldir.",
    },

    { type: "h2", text: "5. Konuyu başkasına anlatma" },
    {
      type: "p",
      text: "Bir konuyu anlatmaya çalıştığınızda eksikleriniz anında ortaya çıkar. Cümlenin ortasında takılıyorsanız, o kısmı gerçekte bilmiyorsunuz demektir.",
    },
    {
      type: "p",
      text: "Anlatacak kimse yoksa kendinize yüksek sesle anlatın veya bir kâğıda anlatır gibi yazın. Yöntemin işe yaramasının sebebi dinleyici değil, bilgiyi baştan kurmak zorunda kalmanızdır.",
    },

    { type: "h2", text: "6. Yanlışlardan öğrenme" },
    {
      type: "p",
      text: "Yanlış yaptığınız sorular, doğru yaptıklarınızdan daha fazla bilgi taşır. Bir soruyu yanlış yaptığınızda doğru şıkkı görüp geçmek yerine şu iki soruyu cevaplayın: neyi bilmiyordum ve doğru yaklaşım neydi?",
    },
    {
      type: "p",
      text: "Bu iki cümlelik not, aynı hatayı tekrarlamanızı engeller. Deneme sınavlarında bu yaklaşımın nasıl sistemli hâle getirileceğini [deneme sonuçlarını değerlendirme](/blog/deneme-sinavi-sonuclari-nasil-degerlendirilmeli) yazımızda anlattık.",
    },

    { type: "h2", text: "Hangi yöntem hangi ders için daha uygun?" },
    {
      type: "p",
      text: "Bütün derslerde aynı yöntemi kullanmak zorunda değilsiniz. Dersin yapısı, hangi tekrar biçiminin daha çok işe yarayacağını belirler.",
    },
    {
      type: "ul",
      items: [
        "**Matematik, fizik gibi işlem ağırlıklı dersler:** ağırlık soru çözümünde olmalı. Formülü hatırlamak yetmez, uygulamak gerekir.",
        "**Tarih, coğrafya, biyoloji gibi bilgi ağırlıklı dersler:** aktif hatırlama ve kısa not çıkarma öne çıkar.",
        "**Türkçe ve dil dersleri:** düzenli okuma ve soru çözümü birlikte yürütülmelidir.",
        "**Ezber gerektiren konular:** aralıklı tekrar burada en belirgin farkı yaratır.",
      ],
    },
    {
      type: "p",
      text: "Bir dersi hangi yöntemle tekrar edeceğinizden emin değilseniz basit bir test yapın: kitabı kapatıp konuyu anlatmayı deneyin. Anlatabiliyorsanız soru çözümüne geçin; anlatamıyorsanız önce bilgiyi tamamlamanız gerekir.",
    },

    { type: "h2", text: "Tekrar ederken sık yapılan üç hata" },
    {
      type: "ol",
      items: [
        "**Her şeyi baştan çalışmak:** tekrar, konuyu sıfırdan işlemek değildir. Eksik olduğunuz kısımlara odaklanın.",
        "**Sadece bildiğiniz konuları tekrar etmek:** rahat hissettiren konular tekrar edilir, zor olanlar ertelenir. Oysa puan kaybı çoğunlukla ertelenen konulardan gelir.",
        "**Tekrarı sınav haftasına bırakmak:** son haftaya sıkıştırılan tekrar, kalıcılığı artırmaz; yalnızca kısa süreli bir tanıdıklık hissi verir.",
      ],
    },

    { type: "h2", text: "Tekrarı programa nasıl yerleştirirsiniz?" },
    {
      type: "p",
      text: "Tekrar, “zaman kalırsa yapılacak” bir iş olarak bırakıldığında hiç yapılmaz. Bu yüzden programda sabit bir yeri olmalıdır.",
    },
    {
      type: "ul",
      items: [
        "Her günün son 15–20 dakikası: o gün işlenen konuların kısa tekrarı.",
        "Hafta sonu 1–2 saat: o haftanın konularının aktif hatırlama ile tekrarı.",
        "Ayda bir: eski konulardan seçilmiş sorularla genel tekrar.",
      ],
    },
    {
      type: "callout",
      title: "Unutmayın",
      text: "Tekrar, yeni konu işlemek kadar ilerleme hissi vermez ama sınavda hatırladığınız bilgilerin büyük kısmını borçlu olduğunuz şey tekrardır.",
    },

    { type: "h2", text: "Kısaca" },
    {
      type: "p",
      text: "Etkili tekrarın ortak noktası şudur: bilgiyi okumak yerine, kendinizden çıkarmaya çalışmak. İster kâğıda yazın, ister soru çözün, ister anlatın — zorlandığınız her yöntem, kolay gelen yöntemden daha çok işe yarar.",
    },
    {
      type: "p",
      text: "Kendi tekrar düzeninizi oluştururken destek almak isterseniz [etüt ve soru çözüm çalışmalarımıza](/mersin-etut-merkezi) göz atabilir veya [bize ulaşabilirsiniz](/#iletisim).",
    },
  ],
};
