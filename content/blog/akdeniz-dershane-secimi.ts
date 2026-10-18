import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Akdeniz",
  focus: "Cami Şerif'te kurum ziyareti, etüt ve okul sonrası program",
  slug: "akdeniz-dershane-secimi",
  title: "Akdeniz Dershane Seçimi: Cami Şerif'te Kurs ve Etüt Rehberi",
  description: "Mersin Akdeniz'de dershane arayanlar için Cami Şerif konumu, YKS–LGS programları, etüt düzeni ve kurum ziyaretinde sorulacak sorular.",
  body: [
    { type: "p", text: "Akdeniz'de dershane ararken aynı ilçedeki bütün kurumları eşit derecede yakın kabul etmek kolaydır. Oysa öğrencinin okuldan çıkıp kursa geçmesi, yemek yemesi ve akşam eve dönmesi ayrı ayrı planlanmalıdır. Adresin Akdeniz'de olması tek başına haftalık düzenin işleyeceğini göstermez. Bu rehber, özellikle Cami Şerif çevresindeki bir kurumu ziyaret etmeden önce hangi bilgileri toplamanız gerektiğini anlatıyor." },
    { type: "h2", text: "Cami Şerif'teki bir kursu nasıl ziyaret etmeli?" },
    { type: "p", text: "Genç Kalem'in adresi Cami Şerif Mahallesi'nde, Vakıf İşhanı'nın dördüncü katındadır. Ziyareti öğrencinin gerçekten gelebileceği saate denk getirin. Haritada yalnızca bina girişine bakmak yerine kapıdan sınıfa kadar olan geçişi, ders arası bekleme alanını ve öğrencinin yanında taşıyacağı kitapları da düşünün. Bina içi erişim ihtiyaçlarınız varsa görüşmeden önce kurumdan ayrıntı isteyin." },
    { type: "ol", items: ["Okul çıkışından kurumun kapısına kadar geçen süreyi ölçün; bekleme ve yürümeyi dahil edin.", "Öğrenciyle birlikte sınıfı ve çalışma ortamını görün; dersin yapıldığı bir saat için randevu isteyin.", "Ders bitişinde eve dönüşü ayrıca deneyin; gündüz geliş ile akşam dönüş aynı koşullarda olmayabilir."] },
    { type: "h2", text: "Akdeniz'de YKS, LGS ve etüt ihtiyacını ayırın" },
    { type: "p", text: "Lise öğrencisi veya mezun aday için [YKS hazırlığı](/yks-kursu-mersin), TYT ve hedef alana uygun AYT çalışmasının birlikte ele alınmasını gerektirir. Yalnızca haftalık ders sayısını sormayın: yanlış yapılan konunun nasıl tespit edildiğini ve sonraki haftaya nasıl taşındığını da öğrenin. Öğrencinin okul sınavları varsa planın bu dönemlere uyumunu konuşun." },
    { type: "p", text: "7–8. sınıf için [LGS programında](/lgs-kursu-mersin) okul ödevleri, okuduğunu anlama ve soru değerlendirmesi birlikte düşünülmeli. Öğrenci konuyu biliyor ama sorusunu soracak düzen bulamıyorsa tam bir sınav programı yerine [etüt ve soru çözümü](/mersin-etut-merkezi) seçeneğini değerlendirin. Program isimlerinden önce öğrencinin hangi desteğe ihtiyaç duyduğunu yazın." },
    { type: "h2", text: "Kurum görüşmesine götürülecek üç örnek" },
    { type: "ul", items: ["Son denemeden anlaşılamayan birkaç soru: öğretmenin geri bildiriminin nasıl olacağını konuşmak için.", "Öğrencinin gerçek haftalık çizelgesi: okul, yol, yemek, dinlenme ve ev çalışmasını birlikte görmek için.", "Tamamlanamayan ödevlerden bir örnek: bilgi eksiği ile çalışma düzeni sorununu ayırt etmek için."] },
    { type: "p", text: "Görüşmenin sonunda yalnızca bir tanıtım broşürüyle ayrılmayın. İlk haftada hangi konulara bakılacağını, soru çözümüne ne zaman katılınabileceğini ve veliye hangi bilgilerle dönüş yapılacağını not alın. Öğrencinin kendisine de söz verin; çalışırken hangi noktada zorlandığını onun anlatması programı daha somut hale getirir." },
    { type: "h2", text: "Akdeniz dershane ücretlerini karşılaştırırken" },
    { type: "p", text: "Teklifleri aynı süre ve aynı kapsam üzerinden yan yana koyun. Kaynaklar, deneme sınavları, etüt, bireysel destek ve ödeme takvimi ayrı kalemler olarak açıklanmalı. Burada doğrulanmış güncel bir fiyat listesi yayımlamıyoruz; öğrencinin sınıfı ve seçilen destek tutarı değiştirebilir. Kayıt koşullarını ve program değişirse nasıl ilerleyeceğinizi yazılı olarak netleştirin." },
    { type: "callout", title: "Akdeniz için karar ölçütü", text: "Yakın adresi; öğrencinin soru sorabildiği, okuldan sonra sürdürebildiği ve ailesinin takip edebildiği bir programla birlikte değerlendirin. Ziyaret sonrasında bir haftalık örnek takvim oluşturabiliyorsanız karşılaştırmanız somutlaşmış demektir." },
  ],
});
