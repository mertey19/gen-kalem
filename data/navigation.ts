export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/#anasayfa" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Eğitimlerimiz", href: "/#egitimlerimiz" },
  { label: "Neden Genç Kalem?", href: "/#neden-genc-kalem" },
  { label: "Blog", href: "/blog" },
  { label: "Galeri", href: "/#galeri" },
  { label: "SSS", href: "/#sss" },
  { label: "İletişim", href: "/#iletisim" },
];

/**
 * Masaüstü menüsü. "Ana Sayfa" bilinçli olarak yok: logo zaten ana sayfaya
 * gidiyor ve kalıcı Ön Kayıt butonuna yer açmak gerekiyor. Mobil menüde ve
 * alt menüde madde korunur.
 */
export const desktopNavItems: NavItem[] = navItems.filter(
  (item) => item.href !== "/#anasayfa",
);

/**
 * Başlıktaki üst yardımcı çubukta ve mobil menüde görünen ikincil eylemler.
 * WhatsApp birincil dönüşüm olmaya devam ettiği için bunlar görsel olarak
 * daha sakin tutulur.
 */
export const utilityLinks = [
  {
    label: "Ön Kayıt Formu",
    href: "/on-kayit",
    icon: "clipboard" as const,
    ariaLabel: "Ön kayıt formunu doldurun",
  },
  {
    label: "İş Başvurusu",
    href: "/is-basvurusu",
    icon: "briefcase" as const,
    ariaLabel: "İş başvurusu formunu doldurun",
  },
];

export const footerNavItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/#anasayfa" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Eğitimlerimiz", href: "/#egitimlerimiz" },
  { label: "Blog", href: "/blog" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Ön Kayıt Formu", href: "/on-kayit" },
  { label: "İş Başvurusu", href: "/is-basvurusu" },
  { label: "İletişim", href: "/#iletisim" },
];
