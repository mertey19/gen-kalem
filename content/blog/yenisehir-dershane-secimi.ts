import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Yenişehir",
  focus: "Okul çıkışı ulaşımı ile TYT–AYT çalışma dengesini karşılaştırma",
  slug: "yenisehir-dershane-secimi",
  title: "Yenişehir Dershane Seçimi: YKS ve LGS İçin Karşılaştırma",
  description: "Mersin Yenişehir'de dershane seçerken okul çıkışı ulaşımı, TYT–AYT dengesi, LGS takibi ve kurs görüşmelerini karşılaştırmak için pratik rehber.",
  image: "/images/blog/yks-yol-haritasi.jpg",
  body: [
    { type: "p", text: "Yenişehir'de dershane arayan bir aile için ilçe içindeki bir kurs ile Akdeniz'deki bir program arasında seçim yapmak yalnızca mesafe karşılaştırması değildir. Öğrencinin okulu, eve dönüş yönü ve hangi derste desteğe ihtiyaç duyduğu sonucu değiştirir. Önce 'hangi kurum daha popüler?' sorusunu değil, 'hangi haftalık düzen öğrencimin eksiğini kapatır?' sorusunu yanıtlayın." },
    { type: "h2", text: "Yenişehir'den okul sonrası geçişi ölçün" },
    { type: "p", text: "Ulaşımı evden kuruma tek bir çizgi olarak değerlendirmeyin. Hafta içi öğrenci okuldan çıkacaksa okul–kurs ve kurs–ev bölümlerini ayrı ölçün. Hafta sonu aynı program evden başlayabilir. Yenişehir'deki aday kurslar ve Cami Şerif/Akdeniz'deki bir seçenek için aynı gün ve saat koşullarında karşılaştırma yapın; burada sabit bir hat veya dakika vaadi vermek doğru olmaz." },
    { type: "ul", items: ["Okul çıkışı ile ilk ders arasına yemek ve dinlenme sığıyor mu?", "Son ders bittiğinde öğrencinin eve dönüşü ve ertesi güne hazırlığı nasıl olacak?", "Etüt ayrı bir günde ise haftalık toplam yol yükü ne kadar artıyor?", "Sınav haftasında ders ve etüt takviminde nasıl düzenleme yapılabiliyor?"] },
    { type: "h2", text: "Yenişehir'de YKS kursu arayanlar için TYT–AYT dengesi" },
    { type: "p", text: "11. sınıf, 12. sınıf ve mezun adayın kullanabileceği zaman aynı değildir. Dershaneden, öğrencinin son denemesindeki ders dağılımını okuyarak bir başlangıç planı önermesini isteyin. TYT çalışması sürerken hedef alandaki AYT konularının hangi sırayla ele alınacağını sorun. Sadece toplam nete göre sınıf veya program önerilmesi, hangi konunun neden aksadığını açıklamayabilir." },
    { type: "p", text: "Örneğin matematikte konu bilgisi eksik olan aday ile süreyi yetiştiremeyen adayın ödevi aynı olmamalı. Birinde konuya dönmek, diğerinde süreli uygulama ve hata değerlendirmesi gerekebilir. Kurumun [YKS programını](/yks-kursu-mersin) incelerken örnek haftalık planın bu ayrımı gösterip göstermediğine bakın." },
    { type: "h2", text: "LGS öğrencisinde velinin görebileceği takip" },
    { type: "p", text: "Yenişehir'de LGS dershanesi arıyorsanız deneme sıklığından önce sonuçların nasıl anlatıldığını öğrenin. Öğrenci yanlışını kendi cümlesiyle açıklayabiliyor mu? Aynı kazanımdaki hata sonraki haftalarda izleniyor mu? Veliye yalnızca sınav puanı gönderilmesi yerine devam, ödev ve yeniden çalışılacak konu bilgisinin paylaşılması kararınızı kolaylaştırır." },
    { type: "h2", text: "İki kurumun teklifini aynı sayfada değerlendirin" },
    { type: "ol", items: ["Her iki kuruma öğrencinin aynı deneme sonucunu ve haftalık okul takvimini gösterin.", "Ders, etüt, kaynak ve denemelerin hangilerinin ücrete dahil olduğunu yazın.", "Bir konu geride kalınca telafi sürecinin nasıl işleyeceğini sorun.", "Öğrenciyle ortamı gezdikten sonra ulaşım ve ev çalışmasını içeren bir hafta tasarlayın."] },
    { type: "p", text: "Kurumun adıyla karar vermeden önce bu çizelgeyi öğrenciyle konuşun. Haftalık ders sayısı yüksek olsa da evde tekrar için hiç alan bırakmayan planı yeniden değerlendirin. Daha ayrıntılı sorular için [Mersin'de kurs seçimi kontrol listesini](/blog/mersinde-kurs-secerken-dikkat-edilmesi-gerekenler) kullanabilirsiniz." },
  ],
});
