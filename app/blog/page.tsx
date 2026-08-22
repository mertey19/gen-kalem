import type { Metadata } from "next";

import { BlogList } from "@/components/blog/BlogList";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getAllSummaries, getCategories } from "@/data/blog";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Genç Kalem Blog | Öğrenciler İçin Rehberler" },
  description:
    "Ders çalışma yöntemleri, sınav süreci, motivasyon ve akademik gelişim üzerine öğrencilere ve velilere yönelik içerikler.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Genç Kalem Blog | Öğrenciler İçin Rehberler",
    description:
      "Ders çalışma yöntemleri, sınav süreci, motivasyon ve akademik gelişim üzerine öğrencilere ve velilere yönelik içerikler.",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genç Kalem Blog | Öğrenciler İçin Rehberler",
    description:
      "Ders çalışma yöntemleri, sınav süreci, motivasyon ve akademik gelişim üzerine içerikler.",
  },
};

export default function BlogIndexPage() {
  const summaries = getAllSummaries();
  const categories = getCategories();
  const [featured] = summaries;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: "/" },
            { name: "Blog", url: "/blog" },
          ]),
        )}
      />

      {/* Blog hero */}
      <section className="relative overflow-hidden bg-white pt-28 pb-14 sm:pt-32 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-leaf-100/60 blur-3xl"
        />

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 rounded-full bg-leaf-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-700">
                  Genç Kalem Blog
                </span>
              </div>

              <h1 className="mt-4 text-[2.15rem] font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.25rem]">
                Daha verimli öğrenmek için rehberler
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-700/75 sm:text-lg">
                Öğrencilerin daha verimli çalışmasına, sınav süreçlerini daha
                bilinçli yönetmesine ve akademik hedeflerine daha sağlam
                adımlarla ilerlemesine yardımcı olacak içerikler.
              </p>

              <div className="mt-7">
                <WhatsAppButton
                  variant="outline"
                  message="Merhaba, eğitim programlarınız hakkında bilgi almak istiyorum."
                />
              </div>
            </Reveal>

            {featured ? (
              <Reveal delay={0.1}>
                <BlogCard post={featured} featured priority />
              </Reveal>
            ) : null}
          </div>
        </Container>
      </section>

      {/* Yazı listesi */}
      <section
        aria-label="Blog yazıları"
        className="bg-mist py-14 sm:py-16"
      >
        <Container>
          <BlogList
            posts={summaries}
            categories={categories}
            excludeSlug={summaries.length > 3 ? featured?.slug : undefined}
          />
        </Container>
      </section>
    </>
  );
}
