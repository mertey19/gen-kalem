import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Aydıncık",
  focus: "Haftalık hazırlığı bölmeden kurs ve ilçe dışı destek seçimi",
  slug: "aydincik-dershane-secimi",
  title: "Aydıncık Dershane Seçimi: Ulaşım ve Haftalık Hazırlık",
  description: "Mersin Aydıncık'ta dershane arayanlar için yerel destek, ilçe dışı ulaşım, hafta sonu yoğunluğu ve YKS–LGS hazırlığını karşılaştırma rehberi.",
  image: "/images/blog/zaman-yonetimi.jpg",
  body: [
    { type: "p", text: "Aydıncık'ta dershane arayan öğrenciler için bir programın değeri, ders saatlerinin yanında bütün haftaya nasıl dağıldığıyla anlaşılır. İlçe içindeki destek veya ilçe dışındaki kurs için karar verirken öğrencinin iki ziyaret arasında ne çalışacağını da konuşun. Haftada bir yoğun ders günü, aradaki çalışmayı yönlendiren açık bir plan yoksa tek başına yeterli olmayabilir." },
    { type: "h2", text: "Aydıncık'ta önce mevcut çalışma imkanını belirleyin" },
    { type: "p", text: "Öğrencinin okuldan aldığı destek, evdeki çalışma ortamı ve öğretmene sorabildiği saatleri yazın. Ardından eksik kalan ihtiyacı tarif edin: konu anlatımı, ödev takibi, belirli bir branş veya deneme analizi. Yerelde görüşeceğiniz kurum veya öğretmenden bu ihtiyaca nasıl cevap vereceğini öğrenin. Güncel bir kurum envanteri bulunmadan 'seçenek yok' ya da 'hepsi aynı' gibi varsayımlarla hareket etmeyin." },
    { type: "h2", text: "İlçe dışındaki program için ziyaretler arası plan" },
    { type: "p", text: "Bir kursa yalnızca belirli günlerde ulaşabiliyorsanız ders sonrasındaki görevlerin nasıl kontrol edileceğini sorun. Takılan sorular, yeniden çalışılacak konular ve sonraki denemeye kadar yapılacak uygulama belli olmalı. Kursun uzaktan destek sunduğunu varsaymadan, yüz yüze ziyaretler arasında gerçekten hangi iletişim yönteminin bulunduğunu öğrenin. Her ek kontrol için yeni yolculuk gerekip gerekmediğini not alın." },
    { type: "ol", items: ["Ders gününün sonunda tamamlanacak konuyu ve soru çalışmasını yazılı olarak netleştirin.", "Öğrencinin kendi başına çözemediklerini biriktireceği düzenli bir soru listesi oluşturun.", "Bir sonraki görüşmede yalnızca yeni konuya geçilmeyip bu listenin de değerlendirilmesini konuşun.", "Görev yetişmezse bütün haftayı sıkıştırmak yerine önceliğin nasıl değişeceğini öğrenin."] },
    { type: "h2", text: "Hafta sonu yoğunluğu ve yolculuk bütçesi" },
    { type: "p", text: "Dersleri bir güne toplamak yolculuk sayısını azaltabilir; fakat çok uzun bir günün sonundaki öğrenme ve eve dönüş de hesaba katılmalı. Gerçek gün ve saatte kapıdan kapıya süreyi ölçün. Bekleme, yemek, kaynak taşıma ve sonrasında dinlenmeye ayrılacak zamanı plana ekleyin. [Zaman yönetimi rehberini](/blog/sinav-doneminde-zaman-yonetimi) kendi haftanıza uyarlayabilirsiniz." },
    { type: "p", text: "Dönem bütçesini kurs, kaynak, deneme ve ulaşım olarak ayrı yazın. Sadece kayıt fiyatının düşük olması, toplam yükün daha düşük olduğu anlamına gelmez. Güncel seferleri ulaşım sağlayıcısından ve güncel programı kurumdan kontrol edin. Burada Aydıncık'tan Akdeniz'e günlük ulaşım için süre, servis veya uygunluk vaadi verilmiyor." },
    { type: "h2", text: "YKS ve LGS için kararın son kontrolü" },
    { type: "p", text: "YKS adayında TYT ve alan derslerinin tekrarını, LGS öğrencisinde okul ödevi ve veli iletişimini ayrı konuşun. [YKS](/yks-kursu-mersin) veya [LGS programının](/lgs-kursu-mersin) başlığına değil; öğrencinin seviyesine, ulaşabildiği günlere ve kullanılabilir desteğe bakın. Örnek bir haftayı öğrenciyle değerlendirdikten sonra anlaşılmayan koşulları kuruma yazılı olarak sorun." },
  ],
});
