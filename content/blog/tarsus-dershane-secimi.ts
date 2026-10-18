import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Tarsus",
  focus: "Tarsus içindeki kurs ile Mersin merkez seçeneğinin toplam zamanını karşılaştırma",
  slug: "tarsus-dershane-secimi",
  title: "Tarsus Dershane Seçimi: İlçe İçi Kurs mu, Mersin Merkez mi?",
  description: "Tarsus'ta dershane seçerken ilçe içi kursları ve Mersin merkezdeki seçenekleri ulaşım, YKS–LGS programı, deneme ve toplam bütçeyle karşılaştırın.",
  body: [
    { type: "p", text: "Tarsus'ta dershane arayan öğrencinin önündeki seçeneklerden biri ilçe içinde düzenli bir program kurmak, diğeri Mersin merkezdeki kursları da değerlendirmektir. Bu iki seçeneğin karşılaştırması yalnızca kurumların tanıtımına göre yapılmamalı. Okul günü ile mezun adayın günü farklıdır; yolculuğun ardından gerçekten ne kadar çalışma yapılabildiği kararın önemli bir parçasıdır." },
    { type: "h2", text: "Tarsus–Mersin karşılaştırmasında kapıdan kapıya ölçüm" },
    { type: "p", text: "Şehirler arası veya ilçeler arası bir bağlantının süresi, evden sınıfa kadar geçen süre değildir. Başlangıç noktasına ulaşma, araç bekleme, indiğiniz yerden kuruma geçiş ve akşam dönüşünü ayrı ekleyin. Hangi ulaşım türünü kullanacaksanız güncel seferleri o sağlayıcıdan kontrol edin. Buradaki değerlendirme bir servis ya da belirli bir ulaşım hattı bulunduğu iddiası değildir." },
    { type: "ul", items: ["Hafta içi okuldan sonra ilk derse zamanında ve dinlenmiş ulaşılabiliyor mu?", "Deneme sınavının farklı saati için ek bir yolculuk gerekiyor mu?", "Akşam dönüşünde bekleme uzarsa uyku ve ertesi günün okulu etkileniyor mu?", "Ulaşım giderini dönem boyunca karşılayabilecek bir bütçe var mı?"] },
    { type: "h2", text: "12. sınıf ile mezun aday için aynı karar çıkmayabilir" },
    { type: "p", text: "12. sınıf öğrencisinin okul, yazılı ve ödevleri sürerken mezun adayın gündüz takvimi daha farklı kurulabilir. YKS programını bu ayrımla okuyun. Tarsus'taki bir seçenek daha az yol gerektiriyorsa açılan zamanın nasıl kullanılacağını da planlayın. Merkezdeki bir program belirli bir derste ihtiyaç duyulan desteği sunuyorsa bu desteğin haftalık yükü gerçekten dengeleyip dengelemediğine bakın." },
    { type: "p", text: "[TYT–AYT hazırlık programını](/yks-kursu-mersin) incelerken hedef alana uygun dersleri, soru çözümü erişimini ve deneme sonrası geri bildirimi ayrı ayrı sorun. Bir ders için destek ararken tüm haftayı kapsayan bir pakete yönelmeden önce [bireysel akademik desteğin](/bireysel-ders-mersin) uygun olup olmadığını görüşebilirsiniz. Güncel imkanları kurumdan teyit edin." },
    { type: "h2", text: "Tarsus'ta LGS dershanesi arayan aileler" },
    { type: "p", text: "LGS öğrencisi için gidiş geliş düzeni aileyle birlikte kurulmalı. Kimin bırakıp alacağı, ders aralarında nerede bekleneceği ve haftalık okul ödevlerinin ne zaman yapılacağı belli olmalı. Daha fazla dersin her durumda daha verimli olacağını varsaymayın. Öğrencinin dinlenmeye ve hatasını yeniden çalışmaya ayırdığı zaman da programın parçasıdır." },
    { type: "h2", text: "İlk görüşme sonunda elinizde ne olmalı?" },
    { type: "ol", items: ["Öğrencinin ihtiyacına göre hazırlanmış örnek bir hafta; ders, etüt ve ev çalışması ayrı gösterilmiş olmalı.", "Ders ve ek hizmetler için kapsamı açık bir ücret teklifi; yol gideri ayrıca hesaplanmalı.", "Ulaşım aksarsa veya ders kaçarsa telafi sürecinin açıklaması.", "Deneme sonucu sonrası kimin, hangi bilgiyle geri dönüş yapacağının net cevabı."] },
    { type: "callout", title: "Kararı öğrenciyle birlikte verin", text: "Tarsus'ta yakın bir kurs ile merkezdeki programı aynı ölçütlerle değerlendirin. Aday kurumun gerçek bir gününü deneyerek ulaşımın ve ev çalışmasının birlikte yürüyüp yürümediğini görün; yalnızca haritadaki mesafeye göre kayıt yaptırmayın." },
  ],
});
