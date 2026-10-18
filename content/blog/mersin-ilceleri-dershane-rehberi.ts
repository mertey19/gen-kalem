import type { BlogPost } from "@/content/types";
import { districtHubSlug, districtPublicationDate } from "@/content/district-guide";
import { business } from "@/data/business";
import { districtGuides } from "@/data/district-guides";

export const post: BlogPost = {
  slug: districtHubSlug,
  title: "Mersin Dershane Rehberi: 13 İlçe İçin Blog Listesi",
  description: "Mersin'in 13 ilçesinde dershane arayanlar için ilçe rehberleri. YKS, LGS, etüt, ulaşım ve kurs seçimini öğrenci ihtiyacına göre karşılaştırın.",
  category: "Mersin İlçe Rehberleri",
  date: districtPublicationDate,
  updatedAt: districtPublicationDate,
  image: "/images/blog/kurs-secimi.jpg",
  imageAlt: "Genç Kalem Eğitim Kurumları'nın Akdeniz'deki eğitim ortamı",
  body: [
    { type: "p", text: "Mersin'de dershane ararken yaşadığınız ilçe, öğrencinin okulu ve hazırlanacağı sınav birlikte değerlendirilmelidir. Akdeniz'de okul çıkışı etüde katılmak ile Anamur'dan Mersin merkezde bir programı düşünmek aynı karar değildir. Bu blog listesi, Mersin'in 13 ilçesinde yaşayan öğrenci ve velilerin kendi koşullarına uygun soruları bulabilmesi için hazırlandı." },
    { type: "p", text: "Aşağıdaki yazılar kurum sıralaması veya bütün ilçelerde şube listesi değildir. Her rehber, bulunduğunuz yerdeki seçenekleri ve gerektiğinde ilçe dışındaki desteği karşılaştırmanız için ayrı bir karar noktasını ele alır. Genç Kalem'in sitede belirtilen konumu Akdeniz/Cami Şerif'tir; uzaktaki ilçelerde günlük ulaşımın uygunluğu ayrıca değerlendirilmelidir." },
    { type: "h2", text: "Mersin'in tüm ilçeleri için dershane blog listesi" },
    { type: "ul", items: districtGuides.map((guide) => `[${guide.district} dershane seçim rehberi](/blog/${guide.slug}): ${guide.focus}.`) },
    { type: "p", text: "İlçe kapsamı [Mersin Valiliği'nin kent özeti](https://mersin.gov.tr/mersin-kent-ozeti) ile kontrol edildi. Burada sabit yol süresi, güncel kurs fiyatı veya kurum başarı sıralaması verilmez. Bu bilgiler öğrencinin çıkış noktasına ve görüştüğü programın güncel koşullarına göre doğrulanmalıdır." },
    { type: "h2", text: "Hangi rehberle başlamalısınız?" },
    { type: "p", text: "Akdeniz, Yenişehir, Mezitli ve Toroslar'da arama yapıyorsanız okuldan kursa ve kurstan eve geçişi ölçerek başlayın. Sadece evinize en yakın seçenekleri listelemek okul çıkışındaki gerçek ihtiyacı gözden kaçırabilir. Etüt ve soru çözümü için ek ziyaret gerekip gerekmediğini de haftaya ekleyin. Merkezde olmak her başlangıç noktası için aynı ulaşım koşulunu sağlamaz." },
    { type: "p", text: "Tarsus ve Erdemli'de ilçe içindeki seçeneklerle Mersin merkezdeki bir kursu karşılaştırırken ders kapsamının yanında toplam zaman ve bütçeyi yazın. Silifke, Anamur, Mut, Gülnar, Bozyazı ve Aydıncık'ta önce yerelde düzenli kullanılabilen desteği belirleyin. Çamlıyayla'da ise dönem içi konumunuzu, okulunuzu ve hangi yöndeki programa erişebileceğinizi birlikte düşünün." },
    { type: "h2", text: "YKS, LGS veya etüt: ihtiyacınızı ayrı tanımlayın" },
    { type: "ul", items: ["**YKS hazırlığı:** TYT ve hedef alandaki AYT konularını, deneme analizi ve bağımsız çalışma takvimiyle değerlendirin. [Mersin YKS programını inceleyin](/yks-kursu-mersin).", "**LGS hazırlığı:** okul konuları, soru yorumlama, ödev yükü ve veli geri bildiriminin nasıl birleştiğini sorun. [LGS programına bakın](/lgs-kursu-mersin).", "**Etüt ve soru çözümü:** konu öğrenmekten çok takıldığı soruyu soracak düzen arayan öğrenci için erişilebilen öğretmen ve saatler önemlidir. [Etüt kapsamını inceleyin](/mersin-etut-merkezi).", "**Belirli bir derste destek:** bütün dersleri içeren bir paketten önce öğrencinin eksik konusunu tarif edin. [Bireysel akademik destek hakkında bilgi alın](/bireysel-ders-mersin)."] },
    { type: "h2", text: "Her ilçede kullanılabilecek kurs görüşmesi kontrol listesi" },
    { type: "ol", items: ["Öğrencinin sınıfını, hedefini ve son çalışmalarındaki tekrar eden hataları görüşmeye götürün.", "Seviye değerlendirmesinden sonra ilk haftada ne yapılacağını ve kimin kontrol edeceğini öğrenin.", "Ders, deneme ve etüt için ayrı ayrı ulaşımı; yemek, dinlenme ve ev çalışmasıyla birlikte planlayın.", "Ücrette kaynak, deneme, ek ders ve etüt kapsamını; ödeme ve program değişikliği koşullarını yazılı isteyin.", "Devam, ödev ve deneme sonuçlarının öğrenci ve veliyle nasıl paylaşılacağını sorun.", "Öğrencinin ortamı görmesini sağlayın; örnek haftanın sürdürülebilirliğini onunla da konuşun."] },
    { type: "h2", text: "Dershane fiyatı ve en iyi kurum araması nasıl değerlendirilmeli?" },
    { type: "p", text: "Tek bir 'en iyi dershane' veya bütün öğrenciler için doğru bir fiyat yoktur. Toplam maliyet; seçilen program, kaynaklar, ek destek ve ulaşımla birlikte anlaşılır. İnternette gördüğünüz ücret veya yorumların güncelliğini kontrol edin. Başarı oranı ya da sıralama iddiası varsa nasıl hesaplandığını sorun; başka öğrencinin sonucu kendi ihtiyacınıza uygunluğun yerini tutmaz." },
    { type: "p", text: "Ayrıntılı bir karşılaştırma için [Mersin dershane araması rehberini](/blog/mersin-dershane-aramasi), programların genel kapsamı için [Mersin dershane sayfasını](/mersin-dershane) kullanabilirsiniz. İlçe rehberinizdeki soruları ve aynı deneme sonucunu iki farklı görüşmeye götürmek, cevapları daha kolay karşılaştırmanızı sağlar." },
    { type: "h2", text: "Genç Kalem nerede, hangi bilgiyle iletişime geçmeli?" },
    { type: "p", text: `${business.name}'nın adresi **${business.address}**. Diğer ilçeler için hazırlanmış yazılarımız o ilçelerde ayrı bir şube, servis veya uzaktan program bulunduğu anlamına gelmez. Görüşmede öğrencinin sınıfını, hedef sınavını, hangi konularda desteğe ihtiyaç duyduğunu ve nereden ulaşacağını paylaşın.` },
    { type: "p", text: "Güncel ders saatleri, ücret kapsamı ve uygun program için [iletişim bölümünden bize ulaşın](/#iletisim). Programı ve ulaşımı birlikte değerlendirdikten sonra [ön kayıt formuyla](/on-kayit) talebinizi iletebilirsiniz. Formda bilgi paylaşmak, tek başına kesin kayıt veya kontenjan garantisi oluşturmaz." },
  ],
};
