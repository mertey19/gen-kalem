/**
 * TEK KAYNAK (single source of truth).
 * Kurum bilgileri yalnızca burada güncellenir; hiçbir bileşende sabit yazılmaz.
 *
 * whatsapp alanı, kurumun ilk numarasıdır. WhatsApp hattı diğer numaraysa
 * yalnızca bu satırı değiştirmek yeterlidir.
 */

export const business = {
  name: "Genç Kalem Eğitim Kurumları",
  shortName: "Genç Kalem",
  /** Instagram profilinde geçen resmi kurum adı. */
  legalName: "Genç Kalem Özel Öğretim Kursu",

  city: "Mersin",
  district: "Akdeniz",
  country: "TR",
  postalCode: "33060",

  address:
    "Cami Şerif, 5228. Sk., Vakıf İşhanı, No:4 Kat:4, Akdeniz/Mersin",
  addressShort: "Vakıf İşhanı Kat:4, Akdeniz / Mersin",
  streetAddress: "Cami Şerif Mah. 5228. Sk. Vakıf İşhanı No:4 Kat:4",

  /** Uluslararası format, yalnızca rakam (wa.me bağlantısı için). */
  whatsapp: "905077124004",

  whatsappDefaultMessage:
    "Merhaba, Genç Kalem Eğitim Kurumları hakkında bilgi almak istiyorum.",

  /** Görüntülenen telefon numaraları. Sıra önem sırasıdır. */
  phones: [
    { label: "0507 712 40 04", href: "tel:+905077124004" },
    { label: "0555 046 43 62", href: "tel:+905550464362" },
  ],

  /** Bilinmiyor; boş kaldığı sürece arayüzde hiç render edilmez. */
  email: "",

  social: {
    instagram: "https://www.instagram.com/genckalemkurs/",
    facebook: "https://www.facebook.com/genckalemkurs33/",
  },

  logo: {
    /** Sayfa içinde kullanılan vektör sürüm (her ölçekte net, küçük dosya). */
    src: "/logo/genc-kalem-logo.svg",
    /**
     * Raster sürüm. Favicon, Organization yapısal verisi ve paylaşım
     * görselleri gibi SVG'nin her yerde çalışmadığı yüzeyler bunu kullanır.
     * public/logo/genc-kalem-logo.svg dosyasından 1024x1024 üretilmiştir.
     */
    png: "/logo/genc-kalem-logo.png",
    /**
     * Küçük boyut markası: yeşil halka + lacivert gövde + GK monogramı.
     * Tam rozetteki kavisli yazı 16-32 px'te okunmadığı için favicon ve
     * uygulama simgeleri bundan üretilir. Kurum logosu (Organization
     * yapısal verisi, paylaşım görselleri) yine tam rozeti kullanır.
     */
    mark: "/logo/genc-kalem-mark.svg",
    alt: "Genç Kalem Eğitim Kurumları logosu",
    /** Logo kare oranlıdır; bozulmaması için en/boy daima eşit verilir. */
    width: 512,
    height: 512,
  },
} as const;

/** Google Haritalar arama/yol tarifi bağlantıları (API anahtarı gerektirmez). */
const mapQuery = encodeURIComponent(`${business.name}, ${business.address}`);

export const maps = {
  search: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  embed: `https://www.google.com/maps?q=${mapQuery}&hl=tr&z=17&output=embed`,
} as const;

export const socialLinks = [
  {
    key: "instagram" as const,
    label: "Instagram",
    handle: "@genckalemkurs",
    href: business.social.instagram,
    ariaLabel: "Genç Kalem Instagram",
  },
  {
    key: "facebook" as const,
    label: "Facebook",
    handle: "Genç Kalem Eğitim Kurumları",
    href: business.social.facebook,
    ariaLabel: "Genç Kalem Facebook",
  },
].filter((item) => item.href.length > 0);
