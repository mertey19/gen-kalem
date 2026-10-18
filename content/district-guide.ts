import type { BlogPost } from "@/content/types";
import { business, maps } from "@/data/business";

export const districtHubSlug = "mersin-ilceleri-dershane-rehberi";
export const districtPublicationDate = "2026-10-18";

export type DistrictGuide = BlogPost & { district: string; focus: string };

type DistrictGuideInput = Pick<
  DistrictGuide,
  "district" | "focus" | "slug" | "title" | "description" | "body"
> & { image?: string };

/** İlçe yazılarının ortak yayın bilgisi ve kurumun gerçek konumu. */
export function createDistrictGuide(input: DistrictGuideInput): DistrictGuide {
  return {
    ...input,
    category: "Mersin İlçe Rehberleri",
    date: districtPublicationDate,
    updatedAt: districtPublicationDate,
    image: input.image ?? "/images/blog/kurs-secimi.jpg",
    imageAlt: "Genç Kalem öğrencilerinin eğitim çalışmalarından bir fotoğraf",
    body: [
      ...input.body,
      { type: "h2", text: "Genç Kalem'in konumu ve görüşme bilgisi" },
      {
        type: "p",
        text: `Bu rehber ${input.district} ilçesinde dershane arayan aileler için hazırlanmıştır. ${business.name}'nın sitede belirtilen adresi **${business.address}**. İlçe rehberleri, başka adreslerde şube, servis veya uzaktan eğitim hizmeti bulunduğu anlamına gelmez. Programın kapsamını ve ulaşımın uygunluğunu kayıt öncesinde kurumla görüşün.`,
      },
      {
        type: "p",
        text: `[Kurumun yol tarifini açın](${maps.directions}) veya [iletişim bölümünden](/#iletisim) sınıfınızı, hedef sınavınızı ve çıkış noktanızı paylaşın. Güncel ücret, ders saatleri ve kontenjan için doğrudan bilgi alın. Diğer ilçelerle karşılaştırmak için [Mersin'in tüm ilçeleri için dershane rehberine](/blog/${districtHubSlug}) dönebilirsiniz.`,
      },
    ],
  };
}
