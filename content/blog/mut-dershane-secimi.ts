import { createDistrictGuide } from "@/content/district-guide";

export const post = createDistrictGuide({
  district: "Mut",
  focus: "Konu eksiğine göre destek seçimi ve ilçe dışı yolculuk yükü",
  slug: "mut-dershane-secimi",
  title: "Mut Dershane Seçimi: Konu Eksiği ve YKS–LGS Hazırlığı",
  description: "Mut'ta dershane seçerken konu eksiğini belirleme, yerel kursları değerlendirme, deneme takibi ve ilçe dışı ulaşım için öğrenci ve veli rehberi.",
  image: "/images/blog/konu-eksigi.jpg",
  body: [
    { type: "p", text: "Mut'ta dershane aramaya başlarken öğrencinin ihtiyacını 'daha çok ders' diye tanımlamak yerine hangi konularda ve hangi aşamada zorlandığını yazın. Sıfırdan sınav hazırlığı, belirli bir derste destek ve düzenli çalışma ortamı birbirinden farklı ihtiyaçlardır. Yerel bir kursu veya ilçe dışındaki bir programı bu ayrımla değerlendirmek gereksiz zaman ve yol yükünü önleyebilir." },
    { type: "h2", text: "Mut'ta kurs görüşmesinden önce eksik haritası çıkarın" },
    { type: "p", text: "Son denemeden veya okul sınavından birkaç yanlış seçin. Öğrenci çözümün hangi adımında takıldığını anlatsın. Konu bilgisi eksikliği ile soruyu okuyamama ve işlem hatasını ayrı yazın. Aday kurumdan bu örneklere göre başlangıç çalışması önermesini isteyin. Her ihtiyaca aynı paket öneriliyorsa seviyeye göre neyin değişeceğini ayrıca sorun." },
    { type: "ol", items: ["İki veya üç denemede tekrar eden konu hatalarını işaretleyin.", "Bu konulardan hangilerinin diğer ders veya konular için ön koşul olduğunu öğretmenle konuşun.", "Bir haftada tamamlanabilecek küçük bir çalışma hedefi seçin.", "Konuya dönüldükten sonra benzer sorularla nasıl kontrol yapılacağını belirleyin."] },
    { type: "p", text: "Bu yaklaşım [konu eksiğini kapatma rehberinde](/blog/konu-eksigi-nasil-kapatilir) daha ayrıntılı anlatılıyor. Bir öğrencinin belirli bir eksik için desteğe ihtiyaç duyması, mutlaka bütün dersleri içeren yoğun bir programa girmesi gerektiği anlamına gelmez. Güncel ders seçeneklerini ve seviyeye uygunluğu kurumla görüşün." },
    { type: "h2", text: "YKS'de günlük çalışma, LGS'de okul uyumu" },
    { type: "p", text: "Mut'ta YKS kursu arayan lise öğrencisi için okul saatleri ve yazılılar planın içinde kalmalı. Mezun adayda ise sabit bir günlük ritim ve haftalık kontrol önem kazanır. Hedef alana uygun AYT dersleriyle TYT tekrarını nasıl dengeleyeceğinizi sorun. [YKS programının](/yks-kursu-mersin) size uygunluğu yalnızca ders sayısıyla anlaşılmaz." },
    { type: "p", text: "LGS öğrencisinde okulda görülen konu ile kurstaki çalışmanın ilişkisini öğrenin. Öğrenci hem ödevini hem kurs çalışmasını yetiştiremiyorsa görevleri önceliklendirmek gerekir. Veliye devam, tamamlanan ödev ve tekrar edilecek konu bilgisinin nasıl aktarılacağını baştan netleştirin. Daha yoğun bir takvim yerine daha açık bir takip düzeni gerekebilir." },
    { type: "h2", text: "Mut dışındaki bir kurum için yol ve devam hesabı" },
    { type: "p", text: "Mersin merkezdeki bir seçeneği değerlendirirken ilçe dışı yolculuğun haftaya etkisini ölçün. Kapıdan kapıya süre, bekleme, yemek ve dönüş bütçesini birlikte hesaplayın. Ders dışındaki soru çözümü veya deneme günleri ek yolculuk gerektirebilir. Yerelde düzenli kullanılabilen destekle uzakta ancak seyrek erişilebilen desteği eşdeğer saymayın." },
    { type: "h2", text: "Kayıt kararı için somut çıktı isteyin" },
    { type: "p", text: "Görüşmenin sonunda ilk dönemde hangi eksiklerin ele alınacağını, bu çalışmaların kim tarafından kontrol edileceğini ve gelişimin nasıl paylaşılacağını not alın. Kaynak, deneme ve ek ders kapsamını yazılı ücret teklifinde görün. Öğrencinin ulaşım nedeniyle programı aksatması ihtimalinde telafi yaklaşımını da öğrenin; hizmetin varlığından önce kullanılabilirliğini değerlendirin." },
  ],
});
