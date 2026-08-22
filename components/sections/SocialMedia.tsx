import { ExternalLink } from "lucide-react";

import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { socialLinks } from "@/data/business";

const iconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

const ctaMap = {
  instagram: "Instagram'da Takip Et",
  facebook: "Facebook'u Ziyaret Et",
} as const;

const descriptionMap = {
  instagram:
    "Duyurularımızı ve kurumdan güncel paylaşımları Instagram hesabımızdan takip edebilirsiniz.",
  facebook:
    "Sayfamızdan paylaşımlarımıza ulaşabilir, güncel gelişmeleri takip edebilirsiniz.",
} as const;

export function SocialMedia() {
  if (socialLinks.length === 0) return null;

  return (
    <section
      id="sosyal-medya"
      aria-labelledby="sosyal-medya-baslik"
      className="relative bg-mist py-20 sm:py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="Sosyal Medya"
          title="Genç Kalem'i sosyal medyada takip edin"
          description="Duyurularımızı, eğitim içeriklerimizi ve Genç Kalem'den güncel paylaşımları sosyal medya hesaplarımızdan takip edebilirsiniz."
          align="center"
        />

        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {socialLinks.map((item, index) => {
            const Icon = iconMap[item.key];
            return (
              <Reveal as="li" key={item.key} delay={index * 0.08} className="h-full">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.ariaLabel} — yeni sekmede açılır`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-50 text-navy-700 transition-colors duration-200 group-hover:bg-navy-700 group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <ExternalLink
                      size={16}
                      aria-hidden="true"
                      className="mt-1 text-navy-700/30 transition-colors group-hover:text-leaf-600"
                    />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-leaf-700">
                    {item.handle}
                  </p>
                  <p className="mt-3 flex-1 text-[0.93rem] leading-relaxed text-navy-700/70">
                    {descriptionMap[item.key]}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 self-start rounded-xl border border-navy-100 px-4 py-2.5 text-sm font-semibold text-navy-800 transition-all duration-200 group-hover:border-leaf-500 group-hover:bg-leaf-600 group-hover:text-white">
                    {ctaMap[item.key]}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
