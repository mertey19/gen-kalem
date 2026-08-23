# Genç Kalem Eğitim Kurumları — Kurumsal Web Sitesi

Mersin / Akdeniz'de faaliyet gösteren **Genç Kalem Eğitim Kurumları** için
Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 ile geliştirilmiş,
Vercel'e hazır kurumsal site ve blog.

Sitedeki birincil dönüşüm hedefi **WhatsApp üzerinden iletişim**tir.

---

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
npm run start    # derlenmiş sürümü çalıştırır
npm run lint
```

---

## Yayına almadan önce yapılması gerekenler

### 1. Orijinal logoyu ekleyin (ÖNEMLİ)

Şu an `public/logo/genc-kalem-logo.svg` içinde, orijinal rozetin geometrisine
sadık kalınarak hazırlanmış **geçici bir SVG** kullanılıyor (lacivert daire,
yeşil halka, kavisli kurum adı, GK monogramı, yeşil yaprak, kalem ucu).

Orijinal dosyayı eklemek için:

1. Logoyu `public/logo/` klasörüne kopyalayın (ör. `genc-kalem-logo.png`).
2. `data/business.ts` içindeki tek satırı güncelleyin:

```ts
logo: {
  src: "/logo/genc-kalem-logo.png",
  ...
}
```

Logo kare (1:1) oranlıdır ve tüm bileşenlerde en/boy eşit verilir; bu yüzden
oranı bozulmaz. Header, mobil menü, footer, hero rozeti, blog CTA'sı ve
favicon bu tek değerden beslenir.

### 2. Görseller

Galeri ve "Hakkımızda" bölümü **kurumun gerçek fotoğraflarını** kullanır
(`public/images/gallery/*.jpg`). Fotoğraflar web için yeniden boyutlandırılmış
(uzun kenar 1600 px), EXIF ve konum verisi temizlenmiş JPEG'lerdir.

Yeni fotoğraf eklemek için dosyayı `public/images/gallery/` içine koyup
`data/gallery.ts` listesine bir satır ekleyin. `tall` (dikey) ve `wide` (geniş)
alanları masaüstü ızgarasındaki yerleşimi belirler. Liste boşaltılırsa galeri
bölümü hiç render edilmez:

```ts
export const galleryItems: GalleryItem[] = [];
```

Hero de gerçek fotoğraf kullanıyor (`public/images/hero-ogrenciler.jpg`).
Hâlâ **geçici** olan tek görsel grubu blog kapaklarıdır
(`public/images/blog/*.svg`); istenirse gerçek fotoğraflarla değiştirilebilir.

> Fotoğraflarda tanınabilir kişiler var; yayına almadan önce KVKK açısından
> gerekli açık rızaların alınmış olduğundan emin olun.

### 3. Alan adını tanımlayın

Canonical URL, OpenGraph, `sitemap.xml` ve `robots.txt` bu değerden üretilir.
Vercel'de ortam değişkeni olarak tanımlayın:

```
NEXT_PUBLIC_SITE_URL=https://www.genckalem.com.tr
```

Değişkeni **boş bırakmayın**; ya gerçek adresi yazın ya da hiç tanımlamayın.
`lib/site.ts` boş/geçersiz değeri yok sayar ve sırasıyla Vercel'in üretim
alan adına, önizleme adresine, en son da dosyadaki varsayılana düşer.
Protokolsüz yazılan değerlerin (`gen-kalem.vercel.app`) başına `https://`
eklenir, sondaki `/` temizlenir.

### 4. Google Search Console doğrulaması

`public/googlef1d5a46ab1e079ef.html` dosyası Google'ın verdiği doğrulama
dosyasıdır ve `https://www.genckalem.com.tr/googlef1d5a46ab1e079ef.html`
adresinden yayınlanır. **Doğrulama başarılı olduktan sonra bile silmeyin;**
Google periyodik olarak yeniden kontrol eder ve dosya yoksa doğrulama düşer.

Search Console'da site doğrulandıktan sonra `sitemap.xml` adresini de
göndermeniz önerilir.

### 5. Logo / favicon

Simgeler `public/logo/genc-kalem-logo.svg` dosyasından üretilmiştir:

| Dosya | Kullanım |
| --- | --- |
| `public/logo/genc-kalem-logo.svg` | Tam rozet — başlık, footer, hero rozeti |
| `public/logo/genc-kalem-logo.png` | Tam rozet 1024×1024; `Organization` yapısal verisindeki `logo` |
| `public/logo/genc-kalem-mark.svg` | Sade marka: yeşil halka + lacivert gövde + GK |
| `public/favicon.ico` | Sade markadan; 16–128 px çok boyutlu |
| `public/icons/icon-192.png` · `icon-512.png` | Sade marka; PWA / Android, `manifest.webmanifest` |
| `public/icons/apple-touch-icon.png` | Sade marka, beyaz zeminli (iOS saydamlığı siyaha çeviriyor) |

**Neden iki ayrı görsel?** Tam rozetteki kavisli "GENÇ KALEM / EĞİTİM
KURUMLARI" yazısı 16–32 px'te okunmuyor. Bu yüzden simgeler logonun
çekirdeğinden (aynı renkler, aynı GK monogramı) üretilir; kurum logosunun
kendisi ise her yerde tam rozettir.

Logo değişirse ilgili SVG'yi güncelleyip raster sürümleri yeniden üretmek
gerekir (1024 px'e render edilip dairesel alfa maskesiyle kırpılıyorlar).

Google'ın arama sonucunda favicon göstermesi için ana sayfada taranabilir bir
`<link rel="icon">` bulunması yeterlidir; bu etiketler `app/layout.tsx`
içindeki `metadata.icons` alanından üretilir. Google'ın bunu ne zaman
göstereceği kendi kararıdır ve taramadan sonra günler sürebilir.

### 6. WhatsApp numarasını doğrulayın

`data/business.ts` içinde WhatsApp hattı olarak kurumun **ilk** numarası
tanımlıdır (`0507 712 40 04`). WhatsApp başka bir hatta bağlıysa yalnızca
şu satırı değiştirin:

```ts
whatsapp: "905077124004",
```

Sitedeki **tüm** WhatsApp bağlantıları bu tek değerden ve
`lib/whatsapp.ts` içindeki `createWhatsAppUrl()` yardımcısından üretilir.

---

## İçerik nereden düzenlenir?

Hiçbir kurum bilgisi bileşenlerin içine sabit yazılmamıştır.

| Dosya | İçerik |
| --- | --- |
| `data/business.ts` | Kurum adı, adres, telefonlar, WhatsApp, sosyal medya, logo |
| `data/programs.ts` | Eğitim programları |
| `data/why-us.ts` | "Neden Genç Kalem?" kartları ve eğitim süreci adımları |
| `data/faq.ts` | Sıkça sorulan sorular |
| `data/gallery.ts` | Galeri görselleri |
| `data/navigation.ts` | Menü, üst yardımcı çubuk butonları ve alt menü |
| `data/blog.ts` | Blog yazılarının toplandığı yer (slug tekrarını derlemede yakalar) |
| `content/blog/*.ts` | Blog yazılarının kendisi |

### Yeni blog yazısı eklemek

1. `content/blog/<slug>.ts` dosyasını oluşturun ve `BlogPost` tipinde bir
   `post` nesnesi dışa aktarın.
2. `data/blog.ts` içindeki `rawPosts` dizisine ekleyin.

Gerisi otomatiktir: liste sayfası, kategori filtresi, ilgili yazılar,
`sitemap.xml`, metadata, OpenGraph görseli ve `BlogPosting` JSON-LD.

Yazı gövdesi yapısal bloklarla tutulur (`p`, `h2`, `h3`, `ul`, `ol`,
`callout`). Paragraf ve liste metinlerinde iki satır içi işaret desteklenir:

```
**kalın metin**
[bağlantı metni](/hedef)
```

---

## Mimari

```
app/
  layout.tsx              kök metadata, JSON-LD, header/footer, yüzen CTA'lar
  page.tsx                ana sayfa bölümlerinin birleştirildiği yer
  globals.css             Tailwind v4 tema jetonları ve marka paleti
  blog/page.tsx           blog listesi
  blog/[slug]/page.tsx    yazı sayfası (SSG)
  on-kayit/page.tsx       ön kayıt formu
  is-basvurusu/page.tsx   iş başvurusu formu
  opengraph-image.tsx     OG görselleri (next/og ile üretilir)
  sitemap.ts / robots.ts

components/
  layout/     Header, Footer, FloatingWhatsApp, MobileContactBar
  sections/   Hero, QuickContact, WhyUs, Programs, Process, About,
              Gallery, BlogPreview, SocialMedia, FAQ, Location, FinalCTA
  ui/         Container, SectionHeader, WhatsAppButton, LinkButton,
              ProgramCard, BlogCard, Logo, PageHero, Reveal, BrandIcons
  blog/       Prose, BlogList, ArticleCTA
  forms/      Field, PreRegistrationForm, JobApplicationForm
  og/         OgCard

lib/
  whatsapp.ts   tek WhatsApp URL üreticisi
  jsonld.ts     yapısal veri
  inline.ts(x)  yazı gövdesindeki satır içi işaretler
  site.ts       alan adı
```

---

## Formlar (ön kayıt / iş başvurusu)

Başlıktaki üst çubukta **Ön Kayıt Formu** ve **İş Başvurusu** butonları yer alır
ve gerçek sayfalara gider: `/on-kayit`, `/is-basvurusu`.

Sitede backend olmadığı için formlar veri **saklamaz ve sunucuya göndermez**.
Gönder'e basıldığında girilen bilgiler düzenli bir metne çevrilir ve
`createWhatsAppUrl()` ile kullanıcının WhatsApp'ında açılır; kişi mesajı
göndermeden önce görebilir. İş başvurusunda CV, aynı sohbetten dosya olarak
iletilir. Bu davranış her iki formun altında kullanıcıya açıkça yazılıdır.

İleride gerçek bir form altyapısı (e-posta / veritabanı) istenirse yalnızca
`components/forms/*` içindeki `handleSubmit` fonksiyonlarının değişmesi yeterlidir.

## Teknik notlar

- **Hero animasyonu CSS ile yapılır**, Framer Motion ile değil. Framer Motion
  kullanıldığında başlık hydrate olana kadar `opacity: 0` kaldığı için LCP
  1127 ms'ye çıkıyordu; CSS'e taşındıktan sonra 296 ms'ye düştü. Hero bu
  sayede sunucu bileşenidir.
- Ekrana girince beliren animasyonlar (`components/ui/Reveal.tsx`) yalnızca
  ilk ekranın altındaki bölümlerde kullanılır ve `prefers-reduced-motion`
  açıkken tamamen devre dışı kalır.
- Yeşilin 600/700/800 tonları, üzerlerinde beyaz metin taşıyan dolu butonlarda
  WCAG AA'yı (4.5:1) geçecek şekilde koyulaştırılmıştır. Logodaki açık yeşil
  (`leaf-500`) vurgu çizgileri, ikon zeminleri ve kenarlıklar için korunur.
- Tüm SVG'ler birinci taraftır; `next.config.ts` içinde optimizer'a katı bir
  CSP ile izin verilmiştir.
- Harita, API anahtarı gerektirmeyen Google Maps embed bağlantısıyla ve
  `loading="lazy"` ile yüklenir; arkasında iskelet bir yer tutucu vardır.

---

## Doğrulanan sonuçlar

Üretim derlemesi üzerinde (`next start`) ölçüldü:

- Lighthouse (ana sayfa, blog yazısı ve ön kayıt sayfası) — Erişilebilirlik
  **100**, En İyi Uygulamalar **100**, SEO **100**; denetimlerin tamamı geçti
- LCP **296 ms**, CLS **0.00**
- `npm run lint` ve `npm run build` hatasız
- 6 sayfa × 8 genişlik (320–1920 px) taramasında yatay taşma yok
- Ölü bağlantı yok, tüm `target="_blank"` bağlantılarında `rel="noopener noreferrer"`
- Her sayfada benzersiz `title`, `description`, canonical ve OpenGraph görseli
- Tüm blog yazıları `sitemap.xml` içinde

---

## Bilinçli olarak eklenmeyenler

Doğrulanmamış hiçbir bilgi siteye yazılmamıştır. Aşağıdakiler kurum
tarafından bilgi verilmediği için **yoktur** (uydurulmamıştır):

- Öğrenci sayısı, başarı oranı, sıralama, üniversite yerleştirme verisi
- Kuruluş yılı, deneyim süresi, öğretmen sayısı ve isimleri
- Veli/öğrenci yorumları ve puanlar
- Ücret bilgisi, kayıt tarihleri, burs oranları
- E-posta adresi (`data/business.ts` içinde boş; doldurulunca gösterilir)

Bu bilgiler kurumdan geldiğinde ilgili veri dosyasına eklenmesi yeterlidir.
