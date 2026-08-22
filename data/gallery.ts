export type GalleryItem = {
  src: string;
  /** Ekran okuyucular için görselin içeriği. */
  alt: string;
  /** Kartın üzerinde ve büyütülmüş görünümde gösterilen kısa açıklama. */
  caption: string;
  width: number;
  height: number;
  /** Dikey fotoğraflar ızgarada iki satır kaplar. */
  tall?: boolean;
  /** Geniş kompozisyonlar iki sütun kaplar; ızgaranın boşluksuz kapanmasını sağlar. */
  wide?: boolean;
};

/**
 * Kurumdan gelen gerçek fotoğraflar.
 * Kaynak dosyalar web için yeniden boyutlandırılmış (uzun kenar 1600 px),
 * EXIF ve konum verisi temizlenmiş JPEG olarak public/images/gallery/ altındadır.
 *
 * Yeni fotoğraf eklemek için: dosyayı klasöre koyun ve buraya bir satır ekleyin.
 * Liste boşaltılırsa galeri bölümü hiç render edilmez.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/g1.jpg",
    alt: "Genç Kalem öğrencileri bir üniversite kampüsünde grup hâlinde yürürken",
    caption: "Üniversite kampüsü gezisi",
    width: 1200,
    height: 1600,
    tall: true,
  },
  {
    src: "/images/gallery/g2.jpg",
    alt: "Genç Kalem öğrencileri sınıfta yapılan bir sunumu dinlerken",
    caption: "Sınıfta bilgilendirme sunumu",
    width: 1600,
    height: 1201,
  },
  {
    src: "/images/gallery/g6.jpg",
    alt: "Genç Kalem öğrencileri Anıtkabir'de topluca çekilmiş fotoğrafta",
    caption: "Anıtkabir ziyareti",
    width: 1600,
    height: 1200,
    wide: true,
  },
  {
    src: "/images/gallery/g5.jpg",
    alt: "Öğrenciler kurumun sınıfında sıralarda deneme sınavı çözerken",
    caption: "Deneme sınavı saati",
    width: 1200,
    height: 1600,
    tall: true,
  },
  {
    src: "/images/gallery/g3.jpg",
    alt: "Öğrenciler ve öğretmenler kurum terasındaki kutlamada pastanın başında",
    caption: "Dönem sonu kutlaması",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/gallery/g4.jpg",
    alt: "Öğrenciler ve öğretmenler kurum içindeki kutlamada bir arada",
    caption: "Kurumda kutlama",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/gallery/g8.jpg",
    alt: "Öğrenciler ve öğretmenlerin kurum terasında çekilmiş grup fotoğrafı",
    caption: "Grup fotoğrafı",
    width: 1200,
    height: 1600,
    tall: true,
  },
  {
    src: "/images/gallery/g7.jpg",
    alt: "Genç Kalem öğrencileri gezi otobüsünde yolculuk ederken",
    caption: "Gezi yolculuğu",
    width: 1600,
    height: 1200,
  },
];
