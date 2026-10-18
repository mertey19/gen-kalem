import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Mezitli",
  focus: "Haftalık yol yükü, dinlenme ve etüt saatlerini birlikte planlama",
  slug: "mezitli-dershane-secimi",
  title: "Mezitli Dershane Seçimi: Ulaşım, Etüt ve Haftalık Plan",
  description: "Mezitli'de dershane ararken haftalık ulaşım yükünü, YKS–LGS derslerini, etüt saatlerini ve toplam bütçeyi birlikte değerlendirme rehberi.",
  image: "/images/blog/calisma-programi.jpg",
  body: [
    { type: "p", text: "Mezitli'de dershane seçiminin önemli bir parçası, öğrencinin hafta boyunca ne kadar zamanını yolda geçireceğidir. Mezitli içindeki bir kurum da başka ilçedeki bir kurs da ancak öğrencinin kendi çıkış noktasına göre değerlendirilebilir. Akdeniz'de bulunan bir programı düşünüyorsanız ders saatini beğenmekle yetinmeyin; okul çıkışını, etüdü ve eve dönüşü aynı çizelgede görün." },
    { type: "h2", text: "Bir haftalık yol hesabını nasıl yaparsınız?" },
    { type: "p", text: "Evden çıkış, durakta bekleme, aktarma varsa aktarma ve bina girişinden sınıfa ulaşmayı ayrı not edin. Gidiş ve dönüşü farklı saatlerde ölçün. Sonra bu toplamı haftada kaç kez kuruma gidileceğiyle çarpın. Deneme sınavı veya soru çözümü için yapılan ek ziyaretleri de hesaba katın; yalnızca ders günlerine bakmak gerçek yükü eksik gösterebilir." },
    { type: "callout", title: "Örnek hesap, gerçek yol süresi değildir", text: "Varsayımsal olarak bir gidiş-dönüş 70 dakika ve haftada 4 ziyaret ise toplam 280 dakika yol oluşur. Bu sayı Mezitli–Akdeniz için verilmiş bir süre değildir. Kendi ölçümünüzü kullanıp bu zamanın uyku, yemek ve tekrarla nasıl paylaşılacağını değerlendirin." },
    { type: "h2", text: "Mezitli'de YKS dershanesi ararken ders yoğunluğunu okuyun" },
    { type: "p", text: "YKS hazırlığında ders dinlemek ile tek başına soru çözmek birbirini tamamlar. Programda TYT ve AYT dersleri bulunması yeterli olmayabilir; öğrencinin kurstan sonra öğrendiğini uygulamaya zamanı kalmalıdır. Dersler, denemeler ve ulaşım bütün haftayı dolduruyorsa çalışma takvimini kurumla yeniden konuşun. Hedef alana göre [YKS hazırlık planının](/yks-kursu-mersin) nasıl kurulduğunu öğrenin." },
    { type: "p", text: "Mezun aday daha geniş gündüz zamanına sahip olabilir; okul öğrencisi ise yazılılar ve ödevlerle ilerler. Bu iki duruma aynı takvim önerildiğinde ayrıntı isteyin. Özellikle zorlanılan ders için ek destek gerekiyorsa bunun mevcut günlere yerleşip yerleşmediğini, yoksa yeni bir yolculuk gerektirip gerektirmediğini sorun." },
    { type: "h2", text: "Etüt saatleri ulaşımınıza uyuyor mu?" },
    { type: "ul", items: ["Soru çözümü için belirli saat veya randevu gerekiyor mu?", "Öğrencinin ihtiyacı olan branş öğretmeni hangi gün bulunuyor?", "Ders ile etüt arasındaki boşlukta nerede çalışılabiliyor?", "Kaçırılan etüt için yeni bir gün ayarlanması gerektiğinde ulaşım planı sürdürülebiliyor mu?"] },
    { type: "p", text: "Bu sorular [etüdün öğrenciye ne kazandıracağını](/blog/etut-nedir-ogrenciye-ne-kazandirir) somutlaştırır. Sınırsız gibi görünen bir imkan, öğrencinin ulaşabildiği saatlerde kullanılamıyorsa karar üzerindeki değeri azalır. Görüşmede kendi okul takviminizi açıp erişebileceğiniz saatleri işaretleyin." },
    { type: "h2", text: "LGS ve aile bütçesi için son kontrol" },
    { type: "p", text: "LGS öğrencisi için akşam dönüşü ve dinlenme ayrıca konuşulmalı. Velinin bırakıp alacağı günler varsa bu düzenin tüm dönem sürüp sürmeyeceğini planlayın. Ücret karşılaştırmasına kaynak ve deneme bedelleriyle birlikte yol masrafını da ekleyin. Servis sağlandığını varsaymayın; varsa güzergahını ve koşullarını doğrudan kurumdan teyit edin. Son karar, fiyatın yanında öğrencinin haftayı sürdürebilmesine dayanmalı." },
  ],
});
