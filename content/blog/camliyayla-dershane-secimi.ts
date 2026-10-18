import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Çamlıyayla",
  focus: "Dönem içi konum, Tarsus seçeneği ve değişen ulaşım takvimi",
  slug: "camliyayla-dershane-secimi",
  title: "Çamlıyayla Dershane Seçimi: Konum ve Sınav Hazırlık Planı",
  description: "Çamlıyayla'da dershane arayan aileler için dönem içi konum, Tarsus ve Mersin merkez seçenekleri, ulaşım takvimi ve YKS–LGS çalışma düzeni.",
  image: "/images/blog/yeni-donem.jpg",
  body: [
    { type: "p", text: "Çamlıyayla'da dershane ararken öğrencinin eğitim dönemi boyunca nerede bulunacağı ilk sorulardan biri olmalı. Ailenin yaz ve okul dönemi adresi farklıysa, yazın uygun görünen bir ulaşım planı bütün yıl için aynı şekilde işlemeyebilir. Yerel destek, Tarsus'taki seçenekler ve Mersin merkezdeki bir programı öğrencinin gerçek dönem takvimine göre karşılaştırın." },
    { type: "h2", text: "Çamlıyayla için dönem takvimini adresle birlikte yazın" },
    { type: "p", text: "Öğrenci okul açıldığında hangi evden çıkacak, okulu nerede ve hafta sonu nerede bulunacak? Bu üç cevabı aynı çizelgede görün. Adres değişikliği ihtimali yoksa bile hafta içi ve hafta sonu çıkış noktaları farklı olabilir. Bir kursa kaydolmadan önce takvimin hangi dönemi kapsadığını ve sonradan değişiklik gerektiğinde nasıl ilerlenebileceğini öğrenin." },
    { type: "ul", items: ["Okul döneminde gerçek başlangıç noktanızdan ders saatine yetişebiliyor musunuz?", "Hafta sonu denemesi için aynı ulaşım düzeni kullanılabiliyor mu?", "Ailenin bırakıp alma desteği bütün dönem sürdürülebilecek mi?", "Konum değişirse ders, kaynak ve ödeme koşullarında ne yapılacak?"] },
    { type: "h2", text: "Tarsus seçeneğiyle merkezi aynı ölçütle değerlendirin" },
    { type: "p", text: "Tarsus'ta bir kurs düşünülüyorsa [Tarsus dershane seçim rehberindeki](/blog/tarsus-dershane-secimi) kapıdan kapıya karşılaştırmayı kullanın. Mersin merkezdeki bir program için de aynı yöntemi uygulayın. Yalnızca ilçe merkezleri arasındaki mesafe yerine ev, durak, bekleme, kuruma yürüyüş ve dönüşü hesaplayın. Hangi seçeneğin daha kolay olduğu öğrencinin kendi çıkış noktasına bağlıdır." },
    { type: "h2", text: "Ulaşım takvimi aksarsa çalışma nasıl sürer?" },
    { type: "p", text: "Dersin kaçırılması durumunda konunun hangi materyalle çalışılacağını ve ne zaman kontrol edileceğini sorun. Sadece yeni telafi tarihi vermek, öğrencinin o tarihe kadar ne yapacağını açıklamayabilir. Güncel sefer ve güzergahları ilgili ulaşım sağlayıcısından kontrol edin. Kurumun servis veya uzaktan ders sağladığını varsaymadan gerçekten sunulan çözümü öğrenin." },
    { type: "p", text: "Öğrencinin elinde, bir gün aksadığında uygulanabilecek kısa bir görev listesi bulunması yararlı olur. Bu liste öğretmenin yerini almaz; çalışmanın tamamen durmasını önlemeye yardımcı olur. [Etkili tekrar yöntemlerini](/blog/ogrenciler-icin-etkili-tekrar-yontemleri) kullanarak tamamlanan konuyu hatırlama ve kısa uygulama bloklarını programınıza ekleyebilirsiniz." },
    { type: "h2", text: "LGS ve YKS takibini ayrı konuşun" },
    { type: "p", text: "LGS için okul konuları, ödevlerin yetişmesi ve veli bilgilendirmesi öne çıkar. YKS için hedef alanın ders dağılımı, deneme analizi ve bağımsız çalışma takvimi ayrıca görünmeli. Bir aday kurumun her iki programa sahip olması, öğrenciniz için aynı düzenin uygun olacağı anlamına gelmez. Seviyeye ve erişilebilen saatlere göre neyin değiştiğini sorun." },
    { type: "h2", text: "Kayıt öncesi netleştirilecek çıktı" },
    { type: "p", text: "Dönem içi adresinizi esas alan bir hafta, kapsamı açık ücret teklifi ve kaçırılan dersler için somut bir telafi açıklaması alın. Kaynak ve deneme bedellerini de bütçeye ekleyin. Öğrenci bu haftayı sürdürebileceğini düşünmüyorsa programı yeniden konuşun; ulaşım ve çalışma takvimi birlikte kurulmadan sadece kurs adıyla karar vermeyin." },
  ],
});
