export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Kurumdan gelen gerçek fotoğraflar public/images/gallery/ içine konulup
 * bu liste güncellenmelidir. Liste boşaltılırsa galeri bölümü hiç render edilmez.
 * Şu an marka grafiklerinden oluşan geçici görseller kullanılmaktadır.
 */
export const galleryItems: GalleryItem[] = [
  { src: "/images/gallery/g1.svg", alt: "Genç Kalem Eğitim Kurumları görseli 1", width: 640, height: 480 },
  { src: "/images/gallery/g2.svg", alt: "Genç Kalem Eğitim Kurumları görseli 2", width: 640, height: 480 },
  { src: "/images/gallery/g3.svg", alt: "Genç Kalem Eğitim Kurumları görseli 3", width: 640, height: 480 },
  { src: "/images/gallery/g4.svg", alt: "Genç Kalem Eğitim Kurumları görseli 4", width: 640, height: 480 },
  { src: "/images/gallery/g5.svg", alt: "Genç Kalem Eğitim Kurumları görseli 5", width: 640, height: 480 },
  { src: "/images/gallery/g6.svg", alt: "Genç Kalem Eğitim Kurumları görseli 6", width: 640, height: 480 },
];
