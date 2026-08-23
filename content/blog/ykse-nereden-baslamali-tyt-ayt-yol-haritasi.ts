import type { BlogPost } from "@/content/types";

export const post: BlogPost = {
  slug: "ykse-nereden-baslamali-tyt-ayt-yol-haritasi",
  title: "YKS'ye Nereden Başlamalı? TYT ve AYT İçin Yol Haritası",
  description:
    "YKS hazırlığına başlarken TYT ve AYT dengesini nasıl kuracağınız, hangi derslerden başlayacağınız ve deneme düzenini nasıl oturtacağınız üzerine pratik bir yol haritası.",
  category: "Sınav",
  date: "2026-08-25",
  updatedAt: "2026-08-25",
  image: "/images/blog/yks-yol-haritasi.jpg",
  imageAlt: "Öğrenciler üniversite kampüsünde binaların önünde",
  body: [
    {
      type: "p",
      text: "YKS hazırlığında en çok vakit kaybettiren aşama, çalışmaya başlamadan önceki karar aşamasıdır. Hangi dersten başlanmalı, TYT mi AYT mi öncelikli, kaç deneme çözülmeli… Bu sorular netleşmeden geçen her hafta, sonradan telafi edilmesi gereken bir boşluk bırakır.",
    },
    {
      type: "p",
      text: "Aşağıda, hazırlığa yeni başlayan bir öğrencinin ilk aylarda izleyebileceği sade bir yol haritası var. Herkesin durumu farklı olduğu için bunu bir şablon değil, kendi planınızı kurarken kullanacağınız bir çerçeve olarak okuyun.",
    },

    { type: "h2", text: "Önce TYT'yi oturtun" },
    {
      type: "p",
      text: "TYT, tüm adayların girdiği ve sıralamayı büyük ölçüde belirleyen bölümdür. AYT'de güçlü olup TYT'de kaybeden bir öğrenci, hedeflediği sıralamaya çoğu zaman ulaşamaz.",
    },
    {
      type: "p",
      text: "Bu yüzden hazırlığın ilk döneminde ağırlık TYT'de olmalıdır. Özellikle Türkçe ve Temel Matematik, hem soru sayısı hem de netlerdeki oynaklık açısından en belirleyici iki bölümdür. Bu iki dersi düzenli çalışmaya erken başlamak, sonraki aylarda AYT için alan açar.",
    },
    {
      type: "callout",
      title: "Pratik denge",
      text: "Hazırlığın ilk aylarında kabaca üçte iki TYT, üçte bir AYT dengesi çoğu öğrenci için işe yarar. Sınav yaklaştıkça bu oran, hedeflenen bölüme göre AYT lehine kaydırılır.",
    },

    { type: "h2", text: "Hedef bölümü baştan netleştirin" },
    {
      type: "p",
      text: "AYT'de hangi derslere ağırlık vereceğiniz, hedeflediğiniz alana bağlıdır. Sayısal, eşit ağırlık ve sözel için çalışma dağılımı tamamen farklıdır. Alanınız netleşmeden AYT çalışmaya başlamak, gereksiz konulara zaman ayırmak anlamına gelir.",
    },
    {
      type: "p",
      text: "Hedefiniz henüz net değilse bunu bir eksiklik olarak görmeyin, ama karar için bir tarih belirleyin. Bu süre boyunca TYT'ye ağırlık verin; TYT çalışması hangi alanı seçerseniz seçin işinize yarar.",
    },

    { type: "h2", text: "Konu çalışmasını soru çözümünden ayırmayın" },
    {
      type: "p",
      text: "Yaygın bir hata, \"önce tüm konuları bitireyim, sonra soru çözerim\" yaklaşımıdır. Bu yöntemde konular bitene kadar aylar geçer ve ilk çalışılan konular unutulmuş olur.",
    },
    {
      type: "p",
      text: "Daha işe yarar bir düzen şudur: bir konuyu bitirdiğiniz gün o konudan kolay sorular çözün, birkaç gün sonra aynı konuya karışık sorularla dönün. Böylece konu hem pekişir hem de eksiğiniz erken ortaya çıkar.",
    },

    { type: "h2", text: "Haftalık akışı sabitleyin" },
    {
      type: "p",
      text: "Hazırlık sürecinin uzunluğu düşünüldüğünde, her hafta yeniden plan yapmak yorucudur. Sabit bir haftalık iskelet kurmak bu yükü ortadan kaldırır. Örnek bir iskelet:",
    },
    {
      type: "ul",
      items: [
        "**Hafta içi dört gün:** iki blok yeni konu (TYT ağırlıklı), bir blok soru çözümü.",
        "**Hafta içi bir gün:** yalnızca eksik konu çalışması; yeni konu yok.",
        "**Cumartesi:** deneme sınavı ve ardından analiz.",
        "**Pazar:** haftanın tekrarı ve gelecek haftanın planı.",
      ],
    },
    {
      type: "p",
      text: "Zamanı bloklara bölerken ve molayı planlarken nelere dikkat edeceğinizi [sınav döneminde zaman yönetimi](/blog/sinav-doneminde-zaman-yonetimi) yazımızda ayrıntılı anlattık.",
    },

    { type: "h2", text: "Deneme sıklığını aşamaya göre ayarlayın" },
    {
      type: "p",
      text: "Deneme, hazırlığın her aşamasında aynı işi görmez. Konu eksiği fazlayken sık deneme çözmek genellikle motivasyonu düşürür ve yeni bilgi vermez; aynı eksikler her denemede tekrar eder.",
    },
    {
      type: "ol",
      items: [
        "**Başlangıç dönemi:** seyrek deneme, ağırlık konu çalışmasında.",
        "**Orta dönem:** haftada bir TYT denemesi, konu bazlı analiz.",
        "**Son dönem:** TYT ve AYT denemeleri dönüşümlü, gerçek sınav saatine yakın ve kesintisiz.",
      ],
    },
    {
      type: "p",
      text: "Hangi aşamada olursanız olun kural aynı: analiz edemeyeceğiniz kadar çok deneme çözmeyin. Denemeyi nasıl analiz edeceğiniz konusunda [deneme sınavı sonuçlarını değerlendirme](/blog/deneme-sinavi-sonuclari-nasil-degerlendirilmeli) yazımız yol gösterir.",
    },

    { type: "h2", text: "Eksik listesini görünür tutun" },
    {
      type: "p",
      text: "YKS hazırlığı uzun bir süreç olduğu için eksikler kolayca birikir. Denemelerden ve soru çözümlerinden çıkan eksikleri tek bir listede toplayın ve bu listeyi çalışma masanızda görünür bir yerde tutun.",
    },
    {
      type: "p",
      text: "Haftada en az iki maddeyi kapatma hedefi koymak, listeyi yönetilebilir tutar. Kapanan maddenin üzerini çizmek, ilerlemeyi somut olarak görmenizi sağlar.",
    },

    { type: "h2", text: "Okul ile hazırlığı nasıl dengelersiniz?" },
    {
      type: "p",
      text: "12. sınıf öğrencileri için en yorucu kısım, okul dersleriyle YKS hazırlığını aynı anda yürütmektir. İkisini birbirinden tamamen ayrı iki iş gibi görmek, günü olduğundan uzun göstermeye başlar.",
    },
    {
      type: "p",
      text: "Oysa örtüşen kısım sanıldığından fazladır. Okulda işlenen bir konu aynı hafta içinde soru çözümüyle desteklendiğinde, hem okul sınavına hem YKS'ye hazırlanmış olursunuz. Ayrım yalnızca okulda işlenmeyen ya da çok yüzeysel geçilen konularda gerekir; onları da eksik listesine ekleyip ayrıca çalışmak yeterlidir.",
    },
    {
      type: "p",
      text: "Mezun öğrenciler içinse durum tersine döner: gün tamamen serbesttir ve asıl risk, yapı eksikliğidir. Bu grupta sabit bir günlük başlangıç saati belirlemek, kaç saat çalışıldığından daha belirleyicidir.",
    },

    { type: "h2", text: "Kaynak seçiminde azı çoğa tercih edin" },
    {
      type: "p",
      text: "Hazırlık sürecinde sık görülen bir hata, her ders için birden fazla kaynak edinip hiçbirini bitirememektir. Yarım kalmış beş kitap, bitirilmiş bir kitaptan daha az işe yarar.",
    },
    {
      type: "ul",
      items: [
        "Her ders için bir konu anlatımı, bir soru bankası yeterlidir.",
        "Kaynağı bitirmeden yenisine geçmeyin; zorlandığınız yer kaynağın değil, konunun sorunudur.",
        "Deneme kitaplarını ayrı tutun ve düzenli olarak aynı yayından çözmek yerine çeşitlendirin.",
      ],
    },
    {
      type: "p",
      text: "Kaynak seçiminde kararsız kaldığınızda, o kaynağı kullanan birine sormak internetteki listelere bakmaktan daha faydalıdır; çünkü size uygun olup olmadığı seviyenize bağlıdır.",
    },

    { type: "h2", text: "İlk üç ayda beklenmesi gereken" },
    {
      type: "p",
      text: "Hazırlığın ilk aylarında net sayısında büyük sıçramalar beklemeyin. Bu dönemde asıl kazanım, düzenin oturmasıdır: her gün aynı saatte masaya oturabilmek, haftalık planı büyük ölçüde uygulayabilmek, eksik listesini takip edebilmek.",
    },
    {
      type: "p",
      text: "Netlerdeki asıl değişim, bu düzen oturduktan sonra gelir. Uzun süreçte motivasyonu korumak için de aynı şey geçerli; bu konuda [motivasyonu korumak](/blog/ders-calisirken-motivasyonu-korumak) yazımızdaki yöntemler işinize yarayabilir.",
    },

    { type: "h2", text: "Yalnız planlamak zorunda değilsiniz" },
    {
      type: "p",
      text: "Bu yazıdaki çerçeve genel bir başlangıç noktası. Sizin için doğru dengeyi belirleyen şey, mevcut seviyeniz, hedef bölümünüz ve kalan süredir.",
    },
    {
      type: "p",
      text: "Genç Kalem Eğitim Kurumları'nda YKS (TYT–AYT) hazırlık çalışmaları, öğrencinin bulunduğu seviyeye göre planlanır ve süreç boyunca takip edilir. Kendi planınızı birlikte oluşturmak için [eğitim programlarımıza](/#egitimlerimiz) göz atabilir veya [bize ulaşabilirsiniz](/#iletisim).",
    },
  ],
};
