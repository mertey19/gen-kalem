import type { BlogPost } from "@/content/types";

export const post: BlogPost = {
  slug: "mersin-matematik-ders-destegi",
  title: "Mersin Matematik Ders Desteği: Eksik Nasıl Belirlenir?",
  description: "Mersin'de matematik desteği veya birebir ders arayan öğrenciler için konu, işlem ve soru yorumlama eksiğini ayırma; etüt ve destek seçimi rehberi.",
  category: "Ders Çalışma",
  date: "2026-10-19",
  updatedAt: "2026-10-19",
  image: "/images/blog/konu-eksigi.jpg",
  imageAlt: "Genç Kalem'de öğrencilerin çalışma ortamı",
  body: [
    { type: "p", text: "Mersin'de matematik ders desteği veya birebir ders ararken 'matematiği yapamıyorum' ifadesini biraz açmak gerekir. İşlem yapamamak, denklem kuramamak ve sorunun ne istediğini anlayamamak farklı ihtiyaçlardır. Bir öğrencinin desteğe nereden başlayacağı, çözemediği sorunun hangi adımında takıldığı görüldüğünde daha netleşir." },
    { type: "h2", text: "Yanlışın adımını görünür hale getirin" },
    { type: "p", text: "Öğrenciden cevabı değil, soruya yaklaşırken ne düşündüğünü anlatmasını isteyin. Sorudaki bilgileri seçebiliyor fakat eşitlik kuramıyorsa kavram veya modelleme çalışması gerekebilir. Eşitliği kurup işlem sırasında hata yapıyorsa farklı bir uygulamaya dönmek gerekir. Soruyu başlatamayan öğrenciye yalnızca çözümü göstermek, başlangıçtaki eksiği gizleyebilir." },
    { type: "ul", items: ["**Konu bilgisi:** kullanılan kavramın ne olduğunu açıklayabiliyor mu?", "**İşlem:** doğru yöntemi seçtikten sonra adımları sürdürebiliyor mu?", "**Yorumlama:** verilenlerle isteneni ayırabiliyor mu?", "**Kontrol:** bulduğu sonucun sorunun koşullarına uyduğunu değerlendirebiliyor mu?"] },
    { type: "h2", text: "Kısa bir örnek: çözümü görmek ile uygulamak" },
    { type: "p", text: "'Bir sayının üç katının dört eksiği 20 ise sayı kaçtır?' sorusunda ilk adım, ifadeyi 3x − 4 = 20 biçiminde kurmaktır. Ardından 3x = 24 ve x = 8 bulunur. Öğrenci bu dönüşümü neden yaptığını açıklayamıyorsa doğru cevabı görmesi yeterli olmayabilir. 8'i yerine koyup 24 − 4 = 20 kontrolünü yapmak da çözümün parçasıdır." },
    { type: "p", text: "Kontrol için aynı soruyu ezberden tekrar ettirmek yerine 'Bir sayının iki katının beş fazlası 19' gibi benzer bir yapı deneyin. Burada 2x + 5 = 19, dolayısıyla x = 7 olur. Öğrencinin yeni ifadeyi kendi başına kurabilmesi, yöntemi kullanıp kullanamadığını daha iyi gösterir. Bu örnek belirli bir sınavın gerçek sorusu veya kapsam duyurusu değildir." },
    { type: "h2", text: "Etüt mü, birebir destek mi?" },
    { type: "p", text: "Konuyu takip eden ama birkaç soru tipinde takılan öğrenci için [etüt ve soru çözümü](/mersin-etut-merkezi) değerlendirilebilir. Ön koşullarda birikmiş boşluk varsa [bireysel akademik destek](/bireysel-ders-mersin) üzerine görüşülebilir. Mersin'de birebir ders araştırırken öğretmene erişim, seviyeye uygun çalışma ve bağımsız kontrolün nasıl yapıldığını sorun; yalnızca saat sayısını karşılaştırmayın." },
    { type: "h2", text: "Okul yazılısı, TYT–AYT ve LGS aynı ihtiyaç değil" },
    { type: "p", text: "Okul yazılısına hazırlanan öğrenci o dönemin konularını, YKS adayı ise hedef alanıyla birlikte temel ve ileri konuları değerlendirmelidir. LGS öğrencisinde okul konuları ile metin, tablo veya grafik yorumlamanın nasıl birleştiğine bakılır. [Okula destek](/mersin-okula-destek-kursu), [YKS](/yks-kursu-mersin) ve [LGS](/lgs-kursu-mersin) seçeneklerini bu amaç farkıyla inceleyin." },
    { type: "h2", text: "Destek görüşmesine ne götürmeli?" },
    { type: "ol", items: ["Son çalışmadan çözülemeyen birkaç soru ve denenen çözüm adımları.", "Öğrencinin sınıfı, hedef sınavı ve okulda işlenen konu.", "Kurs, okul ve ev çalışmasını gösteren gerçek haftalık takvim.", "Konu yeniden çalışıldıktan sonra nasıl kontrol yapılacağına ilişkin soru."] },
    { type: "p", text: "Genç Kalem'in adresi Akdeniz/Cami Şerif'tedir. Matematik veya başka bir branş için güncel öğretmen, saat ve destek uygunluğunu kurumdan öğrenin; bu yazı her düzey için sabit ders veya sonuç garantisi vermez. [Ücret rehberiyle](/mersin-dershane-fiyatlari) kapsamı netleştirebilir, [ön kayıt talebinde](/on-kayit) öğrencinin sınıfını ve zorlandığı konuyu paylaşabilirsiniz." },
  ],
};
