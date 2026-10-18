import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Erdemli",
  focus: "Yerel kurs, merkeze ulaşım ve hafta sonu yoğunluğunu değerlendirme",
  slug: "erdemli-dershane-secimi",
  title: "Erdemli Dershane Seçimi: YKS, LGS ve Ulaşım Planı",
  description: "Erdemli'de dershane arayanlar için yerel kurs ve Mersin merkez karşılaştırması; hafta sonu programı, konu takibi, ulaşım ve kayıt soruları.",
  image: "/images/blog/deneme-analizi.jpg",
  body: [
    { type: "p", text: "Erdemli'de dershane ararken önce günlük başlangıç noktanızı belirleyin: ilçe merkezi, okul veya yaşadığınız mahalle. Erdemli'deki yerel bir kursla Mersin merkezdeki bir programın toplam zaman yükü aynı olmayabilir. Öğrencinin ihtiyacını açıkça tarif etmeden daha uzun yolculuğu veya daha yoğun ders takvimini otomatik olarak tercih etmek verimli bir karar vermeyi zorlaştırır." },
    { type: "h2", text: "Erdemli içindeki kursları hangi ihtiyaçla karşılaştırmalı?" },
    { type: "p", text: "Bir öğrenci bütün konularda düzenli anlatıma, diğeri yalnızca matematikte eksiklerini kapatmaya ihtiyaç duyabilir. Son denemeyi ders ve konu bazında açın. Sorun konu bilgisi mi, soru yorumlama mı, yoksa düzenli çalışamamak mı? Kurum görüşmesine bu ayrımla gidince tam sınav hazırlığı, etüt ve belirli ders desteğini aynı paketmiş gibi değerlendirmemiş olursunuz." },
    { type: "p", text: "YKS için [deneme sonuçlarını değerlendirme yöntemini](/blog/deneme-sinavi-sonuclari-nasil-degerlendirilmeli) kullanıp yanlışların nedenlerini not alın. LGS için [hazırlık programında](/lgs-kursu-mersin) okul konularıyla kurs takviminin nasıl eşleştiğini sorun. Ders anlatıldıktan sonra eksiğin kapandığını hangi çalışma veya kontrolün göstereceğini öğrenin." },
    { type: "h2", text: "Mersin merkez seçeneğinde haftalık yükü hesaplayın" },
    { type: "p", text: "Akdeniz'deki bir kurs düşünülüyorsa yalnızca araçta geçen süreyi değil; evden çıkışı, beklemeyi, son yürüyüşü ve dönüşü de hesaba katın. Dershanenin bulunduğu gün ve saatte deneme bir yolculuk yapın. Özellikle ders dışı soru çözümü için tekrar gidilmesi gerekip gerekmediğini öğrenin. Her ek ziyaret zaman ve bütçe planına dahil edilmeli." },
    { type: "h2", text: "Hafta sonuna bütün çalışmayı toplamak çözüm mü?" },
    { type: "p", text: "Hafta sonu yoğun bir program yolculuk sayısını azaltabilir; fakat uzun derslerin ardından öğrencinin tekrar yapabilmesi de gerekir. Hafta içindeki soruları bir sonraki ziyarete kadar biriktirmek konu eksiğini büyütebilir. Bu yüzden aday kursa, öğrencinin takıldığı sorulara hangi günlerde ve nasıl dönüş alabildiğini sorun. Uzaktan soru çözümü sunulduğunu varsaymadan güncel uygulamayı teyit edin." },
    { type: "ul", items: ["Cumartesi ve pazarın ikisi de doluysa okul ödevleri için hangi zaman kalıyor?", "Deneme ile ders aynı güne geldiğinde analiz ne zaman yapılıyor?", "Kaçırılan bir hafta sonu için hangi telafi seçenekleri bulunuyor?", "Ulaşım nedeniyle kullanılamayan etütler ücret teklifinde nasıl değerlendiriliyor?"] },
    { type: "h2", text: "Erdemli için kayıt öncesi bir hafta tasarlayın" },
    { type: "p", text: "Takvime önce okul, uyku ve yolculuğu yerleştirin. Ardından ders, bağımsız soru çözümü ve dinlenmeyi ekleyin. Boş alan kalmıyorsa programı hafifletme veya yerel seçenekleri yeniden değerlendirme ihtiyacınız olabilir. Karar görüşmesinde öğrenciye de bu haftayı nasıl yaşamak istediğini sorun; yalnızca yetişkinlerin uygun bulduğu bir çizelge yeterli değildir." },
    { type: "p", text: "Son olarak ücretin ders, kaynak, deneme ve ek destek kapsamını yazılı alın. Öğrencinin ihtiyacıyla kullanılan hizmetler eşleşiyorsa fiyat karşılaştırması anlamlı olur. Programın yoğunluğu değişirse hem yolculuk hem de ödeme planını yeniden konuşun; doğrulanmamış burs veya indirim varsayımlarını bütçenize eklemeyin." },
  ],
});
