import type { BlogPost } from "@/content/types";

export const post: BlogPost = {
  slug: "deneme-sinavi-sonuclari-nasil-degerlendirilmeli",
  title: "Deneme Sınavı Sonuçları Nasıl Değerlendirilmeli?",
  description:
    "Deneme sınavlarını yalnızca net sayısına bakarak değil, eksikleri belirlemek ve çalışma planını geliştirmek için nasıl değerlendirebileceğinizi keşfedin.",
  category: "Sınav",
  date: "2026-08-14",
  updatedAt: "2026-08-14",
  image: "/images/blog/deneme-analizi.svg",
  imageAlt:
    "Deneme sınavı sonuçlarının konu bazlı analiz edildiği grafik ve optik form çizimi",
  body: [
    {
      type: "p",
      text: "Deneme sınavı bittikten sonra çoğu öğrencinin yaptığı ilk şey aynıdır: cevap anahtarını açmak, netleri hesaplamak ve sonuca göre günü iyi ya da kötü ilan etmek. Bu noktada denemenin işi bitmiş sayılır ve kâğıt bir kenara kaldırılır.",
    },
    {
      type: "p",
      text: "Oysa denemenin asıl değeri tam olarak burada başlar. Net sayısı yalnızca bir ölçüdür; hangi konularda, hangi sebeple kaybettiğinizi söylemez. Bu yazıda, bir denemeyi çalışma planınızı geliştirecek şekilde nasıl analiz edebileceğinizi anlatıyoruz.",
    },
    {
      type: "callout",
      title: "Temel ilke",
      text: "Deneme sınavının amacı yalnızca puanı görmek değil, eksikleri tespit etmektir. Puan bir sonuçtur; analiz ise o sonucu değiştirecek tek adımdır.",
    },

    { type: "h2", text: "Analize ne zaman başlamalı?" },
    {
      type: "p",
      text: "İdeal olan, denemeyi çözdükten sonra kısa bir ara verip aynı gün içinde analize başlamaktır. Sorular hâlâ zihninizde tazeyken “bunu neden yanlış yaptım” sorusuna daha doğru cevap verirsiniz. Bir hafta sonra bakıldığında çoğu yanlış, “dikkatsizlik” gibi görünür; oysa gerçek sebep farklı olabilir.",
    },

    { type: "h2", text: "Yanlış yaptığınız soruları sınıflandırın" },
    {
      type: "p",
      text: "Her yanlışın sebebi aynı değildir ve her sebebin çözümü de farklıdır. Yanlışlarınızı şu dört gruba ayırın:",
    },
    {
      type: "ul",
      items: [
        "**Bilgi eksiği:** Konuyu bilmiyordunuz veya yarım biliyordunuz.",
        "**Dikkat hatası:** Konuyu biliyordunuz ama soruyu yanlış okudunuz, işlem hatası yaptınız.",
        "**Süre baskısı:** Doğru yaklaşımı biliyordunuz ama acele ettiniz.",
        "**Soru tipi tanımama:** Konuyu biliyordunuz ama sorunun sorulma biçimine yabancıydınız.",
      ],
    },
    {
      type: "p",
      text: "Bu ayrımı yapmadan çalışmak, yanlış ilaç kullanmak gibidir. Dikkat hatalarından kaynaklanan kayıplar için konuyu baştan çalışmak zaman kaybıdır; bilgi eksiğinden kaynaklanan kayıplar için ise “daha dikkatli olacağım” demek işe yaramaz.",
    },

    { type: "h2", text: "Boş bıraktığınız soruları ayrı değerlendirin" },
    {
      type: "p",
      text: "Boş sorular genellikle en az incelenen kısımdır, oysa en çok bilgi veren kısımdır. Bir soruyu neden boş bıraktığınızı sorun:",
    },
    {
      type: "ol",
      items: [
        "Konuyu hiç bilmiyordum.",
        "Biliyordum ama emin olamadım.",
        "Zaman kalmadı, soruya bakamadım bile.",
      ],
    },
    {
      type: "p",
      text: "İkinci gruptaki sorular önemlidir: buradaki eksik bilgi değil, güvendir. Aynı konudan birkaç soru daha çözerek bu boşlar doğruya dönüşebilir. Üçüncü grup ise bir bilgi sorunu değil, süre yönetimi sorunudur.",
    },

    { type: "h2", text: "Süreyi nasıl kullandığınıza bakın" },
    {
      type: "p",
      text: "Sınav bitiminde son soruları görmeden bıraktıysanız, sorun büyük ihtimalle tek bir soruda fazla oyalanmaktır. Deneme sırasında şu alışkanlığı kazanmaya çalışın: bir soruda belirlediğiniz süreyi aştıysanız işaretleyip geçin, zaman kalırsa dönün.",
    },
    {
      type: "p",
      text: "Analiz sırasında da şunu not edin: hangi bölümde beklediğinizden fazla zaman harcadınız? Bu bilgi, bir sonraki denemede bilinçli bir tercih yapmanızı sağlar.",
    },

    { type: "h2", text: "Konu bazlı bir tablo tutun" },
    {
      type: "p",
      text: "Tek bir denemenin sonucu dalgalanabilir; asıl bilgi denemeler arasındaki eğilimdedir. Basit bir tablo bu eğilimi görünür kılar. Her deneme sonrası şu sütunları doldurmanız yeterlidir:",
    },
    {
      type: "ul",
      items: [
        "Konu adı",
        "Çıkan soru sayısı",
        "Doğru / yanlış / boş",
        "Yanlışın sebebi (bilgi, dikkat, süre, soru tipi)",
      ],
    },
    {
      type: "p",
      text: "Üç dört deneme sonunda tablo size çok net bir şey söyleyecektir: bazı konularda sürekli kaybediyorsunuzdur. Çalışma planınızın bir sonraki haftası büyük ölçüde bu satırlara göre şekillenmelidir.",
    },

    { type: "h2", text: "Yanlışları defterine yazmak işe yarıyor mu?" },
    {
      type: "p",
      text: "Yanlış defteri tutmak faydalıdır, ancak yalnızca geri dönülüyorsa. Soruyu olduğu gibi kopyalamak zaman alır ve çoğu zaman bir daha açılmaz. Daha pratik bir yöntem:",
    },
    {
      type: "ul",
      items: [
        "Soruyu yeniden yazmak yerine kaynağını ve numarasını not edin.",
        "Yanına tek cümleyle “neyi kaçırdım” yazın.",
        "Haftada bir kez bu notları okuyup benzer sorulardan birkaç tane çözün.",
      ],
    },
    {
      type: "p",
      text: "Buradaki amaç arşiv oluşturmak değil, aynı hatayı ikinci kez yapmamaktır.",
    },

    { type: "h2", text: "Analizden sonraki haftayı planlayın" },
    {
      type: "p",
      text: "Analiz, bir sonraki haftanın planına dönüşmediği sürece yarım kalır. Denemeyi inceledikten sonra en fazla üç madde belirleyin. Üçten fazlası uygulanmaz.",
    },
    {
      type: "p",
      text: "Örnek bir çıktı şöyle görünebilir: “Bu hafta üslü sayılar konusunu baştan çalışacağım, paragrafta süre tutarak 3 set çözeceğim, fizikte hareket konusundan 30 soru çözüp yanlışlarımı sınıflandıracağım.” Bu üç madde, denemenin size verdiği bilginin somut karşılığıdır.",
    },

    { type: "h2", text: "Ne sıklıkla deneme çözmeli?" },
    {
      type: "p",
      text: "Bu sorunun tek bir doğru cevabı yok; kalan süreye ve hazırlık aşamasına göre değişir. Ancak genel bir ilke vardır: analiz edemeyeceğiniz kadar çok deneme çözmenin faydası yoktur.",
    },
    {
      type: "p",
      text: "Konu eksiği fazla olan bir öğrencinin her gün deneme çözmesi genellikle işe yaramaz; çünkü eksik konular kapanmadığı sürece aynı yanlışlar tekrar eder ve her deneme aynı sonucu verir. Bu dönemde deneme, ilerlemeyi ölçmek için seyrek aralıklarla kullanılır.",
    },
    {
      type: "p",
      text: "Konuların büyük kısmı tamamlandığında ise deneme sıklığı artırılabilir. Bu aşamada amaç yalnızca bilgi ölçmek değil, süre yönetimi ve sınav temposuna alışmaktır.",
    },

    { type: "h2", text: "Analize ne kadar zaman ayırmalı?" },
    {
      type: "p",
      text: "Pratik bir ölçüt: denemeyi çözmek için harcadığınız sürenin en az yarısı kadar zamanı analize ayırın. Üç saat süren bir denemenin ardından bir buçuk saatlik bir analiz uzun gelebilir, ancak bu sürenin büyük kısmı zaten yanlış soruları yeniden çözmekle geçer.",
    },
    {
      type: "ul",
      items: [
        "Önce yanlışları sınıflandırın (yaklaşık 15–20 dakika).",
        "Bilgi eksiğinden kaynaklanan soruları yeniden çözmeyi deneyin.",
        "Anlamadığınız soruları not edip öğretmeninize sorun.",
        "Son olarak, çıkan sonucu haftalık planınıza yansıtın.",
      ],
    },
    {
      type: "p",
      text: "Bu adımların hiçbiri tek başına uzun değildir; atlanan adım genellikle sonuncusudur. Oysa analizin çalışma planına dönüşmediği bir deneme, yalnızca geçirilmiş bir sınav saatidir.",
    },

    { type: "h2", text: "Puana takılmamak için" },
    {
      type: "p",
      text: "Denemeler arasında puan dalgalanması normaldir. Sınavın zorluk düzeyi, o günkü konsantrasyonunuz, uykunuz ve hatta sınavın yapıldığı ortam sonucu etkiler. Tek bir düşük deneme, hazırlığınızın kötü gittiği anlamına gelmez.",
    },
    {
      type: "p",
      text: "Bakılması gereken şey birkaç deneme boyunca yönün ne olduğudur. Yanlış sayınız azalıyor, boşlarınız doğruya dönüşüyor ve süreniz yetmeye başlıyorsa süreç doğru işliyordur. Bu bakış açısını korumak, [motivasyonu uzun süreçte ayakta tutmanın](/blog/ders-calisirken-motivasyonu-korumak) da en sağlam yollarından biridir.",
    },
    {
      type: "p",
      text: "Deneme analizlerinizi birlikte değerlendirmek ve eksiklerinize göre plan çıkarmak isterseniz [bize ulaşabilirsiniz](/#iletisim).",
    },
  ],
};
