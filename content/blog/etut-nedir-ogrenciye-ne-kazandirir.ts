import type { BlogPost } from "@/content/types";

export const post: BlogPost = {
  slug: "etut-nedir-ogrenciye-ne-kazandirir",
  title: "Etüt Nedir, Öğrenciye Ne Kazandırır?",
  description:
    "Etüt saatlerinin ne işe yaradığını, verimli bir etüdün nasıl geçtiğini ve öğrencinin etütten en çok faydayı nasıl sağlayacağını anlatıyoruz.",
  category: "Öğrenci Rehberi",
  date: "2026-08-23",
  updatedAt: "2026-08-23",
  image: "/images/blog/etut.jpg",
  imageAlt: "Öğrenciler sınıfta sıralarında bireysel olarak çalışırken",
  body: [
    {
      type: "p",
      text: "Etüt, çoğu öğrencinin adını bildiği ama tam olarak ne işe yaradığını çözemediği bir kavram. Bazıları için ders çalışmak üzere sessiz bir oda, bazıları için öğretmene soru sorulan bir saat, bazıları içinse zorunlu olarak kalınan bir zaman dilimi.",
    },
    {
      type: "p",
      text: "Oysa etüdün asıl işlevi çok net: **öğrencinin takıldığı yeri, takıldığı gün çözmesini sağlamak.** Bu yazıda etüdün ne olduğunu, verimli bir etüdün nasıl geçtiğini ve ondan en çok faydayı nasıl sağlayacağınızı anlatıyoruz.",
    },

    { type: "h2", text: "Etüt tam olarak nedir?" },
    {
      type: "p",
      text: "Etüt, ders anlatımının dışında kalan, öğrencinin kendi çalışmasını yaptığı ve gerektiğinde öğretmene danışabildiği çalışma saatidir. Konu anlatımından iki temel farkı vardır:",
    },
    {
      type: "ul",
      items: [
        "Akışı öğretmen değil, öğrencinin ihtiyacı belirler.",
        "Herkes aynı konuyu değil, kendi eksiğini çalışır.",
      ],
    },
    {
      type: "p",
      text: "Bu iki fark, etüdü ders saatinden çok daha kişisel bir zaman hâline getirir. İyi kullanıldığında öğrencinin en hızlı ilerlediği saatler genellikle etüt saatleridir.",
    },

    { type: "h2", text: "Neden bu kadar önemli?" },
    {
      type: "p",
      text: "Ders sırasında anlaşılmayan bir konu, o gün sorulmazsa büyümeye başlar. Üzerine yeni konular gelir, bir hafta sonra öğrenci nereden başlayacağını bilemez hâle gelir.",
    },
    {
      type: "p",
      text: "Etüt bu birikmeyi engeller. Anlaşılmayan bir soruyu aynı gün sormak beş dakika sürerken, iki hafta sonra aynı eksiği kapatmak bir saat alabilir — çünkü artık tek bir soru değil, üstüne binen konular da vardır.",
    },
    {
      type: "callout",
      title: "En kritik cümle",
      text: "Etüdün değeri, öğrencinin \"anlamadım\" diyebildiği bir zaman ve zemin yaratmasıdır. Sınıf ortamında bunu söylemekte zorlanan öğrenciler için etüt, süreci değiştiren tek şey olabilir.",
    },

    { type: "h2", text: "Verimli bir etüt nasıl geçer?" },
    {
      type: "p",
      text: "Etüde \"bir şeyler çalışırım\" diyerek gelmek, o saati genellikle boşa çıkarır. Verimli bir etüdün üç aşaması vardır:",
    },
    {
      type: "ol",
      items: [
        "**Gelmeden önce:** o gün neyi çalışacağınızı ve neyi soracağınızı belirleyin. En az iki soru yazılı olarak hazır olsun.",
        "**Etüt sırasında:** önce kendi başınıza deneyin. Takıldığınız noktada sorun; cevabı değil, yaklaşımı isteyin.",
        "**Bitirmeden önce:** öğrendiğiniz yöntemi kullanarak benzer bir soruyu tek başınıza çözün.",
      ],
    },
    {
      type: "p",
      text: "Üçüncü adım en çok atlanan ama en belirleyici olanıdır. Öğretmenle birlikte çözülen bir soru anlaşılmış gibi hissettirir; asıl kontrol, aynı tipteki ikinci soruyu tek başınıza çözebilmenizdir.",
    },

    { type: "h2", text: "Etüde nasıl hazırlanmalı?" },
    {
      type: "p",
      text: "En basit yöntem, gün içinde takıldığınız her yeri küçük bir listeye not etmektir. Ders sırasında anlamadığınız bir kavram, soru çözerken çıkamadığınız bir adım, tekrar ederken hatırlayamadığınız bir formül…",
    },
    {
      type: "p",
      text: "Etüde bu listeyle gelen öğrenci, saatin tamamını kendi eksiklerine harcar. Listesiz gelen öğrenci ise çoğu zaman rastgele soru çözerek vakit geçirir.",
    },

    { type: "h2", text: "Sık yapılan üç hata" },
    {
      type: "ol",
      items: [
        "**Yalnızca sevdiğiniz dersi çalışmak:** etüt, rahat hissettiğiniz değil, zorlandığınız ders içindir.",
        "**Cevabı istemek:** çözümü not almak öğrenmek değildir. Yaklaşımı anlayıp soruyu yeniden çözmek gerekir.",
        "**Soru biriktirip tek seferde sormak:** on soruyu aynı anda sormak, hiçbirini tam anlamamakla sonuçlanır.",
      ],
    },

    { type: "h2", text: "Etüt kimler için daha çok işe yarar?" },
    {
      type: "p",
      text: "Etütten en çok fayda sağlayan öğrenciler genellikle şu durumda olanlardır:",
    },
    {
      type: "ul",
      items: [
        "Evde çalışırken dikkati kolay dağılanlar.",
        "Sınıf ortamında soru sormakta çekinenler.",
        "Belirli bir derste eksiği birikmiş olanlar.",
        "Ne çalışacağına karar vermekte zorlananlar.",
      ],
    },
    {
      type: "p",
      text: "Son madde özellikle yaygındır. Masaya oturan ama neyle başlayacağını bilemeyen bir öğrenci için etüt, hem çalışma ortamı hem de yönlendirme sağlar.",
    },

    { type: "h2", text: "Evde çalışmakla etüdün farkı ne?" },
    {
      type: "p",
      text: "Evde çalışmak elbette gereklidir; etüt onun yerine geçmez. Ancak iki ortamın sağladığı şeyler farklıdır ve bu farkı bilmek, hangisinde ne yapacağınızı netleştirir.",
    },
    {
      type: "ul",
      items: [
        "**Evde:** tekrar, kısa notların gözden geçirilmesi, bildiğiniz konularda soru çözümü gibi tek başınıza yürütebileceğiniz işler.",
        "**Etütte:** anlamadığınız konular, çözemediğiniz soru tipleri ve nereden başlayacağınızı bilemediğiniz dersler.",
      ],
    },
    {
      type: "p",
      text: "Bu ayrımı yapan bir öğrenci etüde \"zaten evde de yapabileceğim\" işlerle gelmez. Etüt saatini, yalnızca orada yapabileceği işlere ayırır.",
    },

    { type: "h2", text: "Etüt saatini nasıl planlamalı?" },
    {
      type: "p",
      text: "Etüdü haftalık programın rastgele bir boşluğu değil, sabit bir parçası olarak düşünün. Sabit bir yeri olduğunda öğrenci gün içinde takıldığı soruları \"etütte sorarım\" diyerek biriktirebilir ve bu birikim yönetilebilir kalır.",
    },
    {
      type: "p",
      text: "Uygulanabilir bir düzen şudur: haftada en az iki etüt saati belirleyin, bunlardan birini en zorlandığınız derse ayırın. Diğerini ise o hafta hangi derste sıkışırsanız ona bırakın. Böylece hem düzenli bir plan olur hem de esneklik korunur.",
    },
    {
      type: "callout",
      title: "Küçük bir alışkanlık",
      text: "Telefonunuzda ya da defterinizin son sayfasında \"etütte soracaklarım\" başlıklı bir liste tutun. Gün içinde takıldığınız her şeyi oraya tek satırla yazın. Bu liste, etüdün verimini tek başına ikiye katlar.",
    },

    { type: "h2", text: "Etüt ve tekrar birlikte çalışır" },
    {
      type: "p",
      text: "Etüt, eksiği kapatmanın yoludur; tekrar ise kapanan eksiğin tekrar açılmasını engeller. İkisi birlikte kullanıldığında süreç kalıcı hâle gelir.",
    },
    {
      type: "p",
      text: "Etütte öğrendiğiniz bir konuyu birkaç gün sonra yeniden gözden geçirin. Bunun için işe yarayan yöntemleri [etkili tekrar yöntemleri](/blog/ogrenciler-icin-etkili-tekrar-yontemleri) yazımızda topladık.",
    },

    { type: "h2", text: "Özetle" },
    {
      type: "p",
      text: "Etüt, ekstra bir ders saati değil; öğrencinin kendi eksiğiyle baş başa kaldığı ve gerektiğinde destek alabildiği bir çalışma zamanıdır. Hazırlıklı gelindiğinde haftanın en verimli saatleri buradan çıkar.",
    },
    {
      type: "p",
      text: "Genç Kalem Eğitim Kurumları'nda etüt ve soru çözüm çalışmaları, öğrencinin takıldığı konuyu biriktirmeden sorabilmesi üzerine kuruludur. Güncel etüt saatleri ve programlar için [bizimle iletişime geçebilirsiniz](/#iletisim).",
    },
  ],
};
