import { CheckCircle2, MapPin, Navigation, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Prose } from "@/components/blog/Prose";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedExternalLink, TrackedLink } from "@/components/ui/Tracked";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getPostBySlug, toSummary } from "@/data/blog";
import { business, maps } from "@/data/business";
import { getLandingPage, landingPages } from "@/data/landing-pages";
import { getProgramBySlug } from "@/data/programs";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { whatsAppMessageFor } from "@/lib/whatsapp";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    return {
      title: "Sayfa bulunamadı",
      robots: { index: false, follow: false },
    };
  }

  const url = `/${page.slug}`;

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: page.metaTitle,
      description: page.metaDescription,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function LandingPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) notFound();

  const program = page.programSlug
    ? getProgramBySlug(page.programSlug)
    : undefined;
  const related = page.relatedPosts
    .map((postSlug) => getPostBySlug(postSlug))
    .filter((post) => post !== undefined)
    .map(toSummary);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: "/" },
            { name: page.h1, url: `/${page.slug}` },
          ]),
        )}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.intro[0]}
        breadcrumb={[{ label: page.eyebrow }]}
      />

      <section className="bg-mist py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <Reveal className="overflow-hidden rounded-2xl border border-navy-100">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  width={1200}
                  height={675}
                  priority
                  sizes="(max-width: 1024px) 92vw, 60vw"
                  className="h-auto w-full"
                />
              </Reveal>

              {page.intro.slice(1).map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-6 text-[1.02rem] leading-[1.8] text-navy-800/85"
                >
                  {paragraph}
                </p>
              ))}

              <Prose blocks={page.body} />

              <h2 className="mt-12 font-display text-[1.6rem] font-bold text-navy-900">
                Sıkça sorulan sorular
              </h2>
              <div className="mt-5">
                <FaqAccordion items={page.faq} idPrefix={page.slug} />
              </div>
            </div>

            <aside className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <h2 className="font-display text-lg font-bold text-navy-900">
                  Kimler için uygun?
                </h2>
                <ul className="mt-4 space-y-3">
                  {page.audience.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-leaf-600"
                      />
                      <span className="text-[0.93rem] leading-relaxed text-navy-800">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <h2 className="font-display text-lg font-bold text-navy-900">
                  Bilgi alın
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/75">
                  Öğrencinin sınıf düzeyini belirtmeniz yeterli; size uygun
                  seçenekleri iletelim.
                </p>

                <div className="mt-5 flex flex-col gap-2.5">
                  <WhatsAppButton
                    className="w-full"
                    source={`landing_${page.slug}`}
                    message={whatsAppMessageFor(program?.title ?? page.h1)}
                  />
                  <TrackedLink
                    href="/on-kayit"
                    event="program_cta_click"
                    source={`landing_${page.slug}_on_kayit`}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-navy-700/15 px-5 py-3 text-[0.95rem] font-semibold text-navy-800 transition-colors hover:border-navy-700/35"
                  >
                    Ön Kayıt Formu
                  </TrackedLink>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-navy-100 pt-5 text-sm">
                  {business.phones.map((phone) => (
                    <li key={phone.href}>
                      <TrackedExternalLink
                        href={phone.href}
                        newTab={false}
                        event="phone_click"
                        source={`landing_${page.slug}`}
                        className="inline-flex items-center gap-2 font-medium text-navy-800 underline-offset-4 hover:text-leaf-700 hover:underline"
                      >
                        <Phone size={15} aria-hidden="true" />
                        {phone.label}
                      </TrackedExternalLink>
                    </li>
                  ))}
                  <li className="flex gap-2 text-navy-700/75">
                    <MapPin
                      size={15}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    <span className="leading-relaxed">{business.address}</span>
                  </li>
                  <li>
                    <TrackedExternalLink
                      href={maps.directions}
                      event="directions_click"
                      source={`landing_${page.slug}`}
                      ariaLabel="Yol tarifi al — Google Haritalar yeni sekmede açılır"
                      className="inline-flex items-center gap-2 font-medium text-navy-800 underline-offset-4 hover:text-leaf-700 hover:underline"
                    >
                      <Navigation size={15} aria-hidden="true" />
                      Yol Tarifi Al
                    </TrackedExternalLink>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section
          aria-labelledby="ilgili-yazilar-baslik"
          className="bg-white py-16 sm:py-20"
        >
          <Container>
            <h2
              id="ilgili-yazilar-baslik"
              className="font-display text-2xl font-bold text-navy-900 sm:text-3xl"
            >
              Bu konudaki yazılarımız
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.slug}
                  delay={index * 0.06}
                  className="h-full"
                >
                  <BlogCard post={item} />
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
