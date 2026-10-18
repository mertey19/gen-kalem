import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { districtHubSlug } from "@/content/district-guide";
import { getPostBySlug, isPublished } from "@/data/blog";
import { districtGuides } from "@/data/district-guides";

/** İlçe bağlantıları sunucu HTML'inde de bulunur; filtre etkileşimi gerekmez. */
export function DistrictGuides() {
  if (!getPostBySlug(districtHubSlug)) return null;
  const guides = districtGuides.filter((guide) => isPublished(guide));

  return (
    <section aria-labelledby="ilce-rehberleri-baslik" className="bg-white pb-14">
      <Container>
        <div className="rounded-2xl border border-leaf-200 bg-leaf-50/60 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-leaf-700">
            İlçenizden başlayın
          </p>
          <h2 id="ilce-rehberleri-baslik" className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Mersin&apos;in 13 ilçesi için dershane rehberleri
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-navy-700/80">
            YKS, LGS ve etüt seçeneklerini ulaşımınız ve haftalık çalışma düzeninizle
            birlikte değerlendirin. Kurumumuz Akdeniz / Cami Şerif&apos;tedir;
            rehberler her ilçedeki ailelerin seçim yapmasına yardımcı olur.
          </p>
          <nav aria-label="İlçeye göre dershane rehberleri" className="mt-6">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/blog/${guide.slug}`}
                    className="block h-full rounded-xl border border-leaf-200 bg-white p-4 transition-colors hover:border-leaf-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-leaf-700"
                  >
                    <span className="font-semibold text-navy-900">{guide.district} dershane rehberi</span>
                    <span className="mt-1 block text-sm leading-relaxed text-navy-700/75">{guide.focus}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href={`/blog/${districtHubSlug}`} className="mt-6 inline-block font-semibold text-leaf-800 underline underline-offset-4 hover:text-leaf-700">
            Tüm ilçe rehberlerini ve karşılaştırma listesini inceleyin
          </Link>
        </div>
      </Container>
    </section>
  );
}
