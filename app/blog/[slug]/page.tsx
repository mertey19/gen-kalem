import { ChevronRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleCTA } from "@/components/blog/ArticleCTA";
import { Prose } from "@/components/blog/Prose";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  estimateReadingTime,
  formatDate,
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
  toSummary,
} from "@/data/blog";
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  jsonLdScript,
} from "@/lib/jsonld";

type PageProps = { params: Promise<{ slug: string }> };

/** Zamanlanmış yazılar tarihi geldiğinde otomatik yayına girsin diye. */
export const revalidate = 3600;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    // Henüz yayınlanmamış ya da var olmayan yazı; dizine eklenmesin.
    return { title: "Yazı bulunamadı", robots: { index: false, follow: false } };
  }

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${post.title} | Genç Kalem`,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Genç Kalem`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const minutes = estimateReadingTime(post);
  const related = getRelatedPosts(post.slug, 3).map(toSummary);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(blogPostingJsonLd(post))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
        )}
      />

      <article className="bg-white pt-28 sm:pt-32 lg:pt-40">
        <Container>
          <div className="mx-auto max-w-[760px]">
            {/* Kırıntı yolu */}
            <nav aria-label="Sayfa yolu">
              <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-700/70">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-navy-900"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li aria-hidden="true" className="flex items-center">
                  <ChevronRight size={15} className="text-navy-300" />
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-navy-900"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true" className="flex items-center">
                  <ChevronRight size={15} className="text-navy-300" />
                </li>
                <li aria-current="page" className="truncate font-medium text-navy-800">
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="mt-8">
              <span className="inline-flex items-center rounded-lg bg-leaf-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-leaf-700">
                {post.category}
              </span>

              <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-navy-900 sm:text-[2.6rem]">
                {post.title}
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-navy-700/75">
                {post.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-navy-100 pt-5 text-sm text-navy-700/70">
                <time dateTime={post.date} className="font-medium">
                  {formatDate(post.date)}
                </time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} aria-hidden="true" />
                  {minutes} dakikalık okuma
                </span>
                <span className="font-medium text-navy-700/70">
                  Genç Kalem Eğitim Kurumları
                </span>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100 bg-mist">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={1200}
                height={675}
                priority
                sizes="(max-width: 800px) 92vw, 760px"
                className="h-auto w-full"
              />
            </div>

            <TableOfContents blocks={post.body} />

            <Prose blocks={post.body} />

            <ArticleCTA />
          </div>
        </Container>
      </article>

      {related.length > 0 ? (
        <section
          aria-labelledby="ilgili-yazilar-baslik"
          className="mt-16 bg-mist py-16 sm:py-20"
        >
          <Container>
            <h2
              id="ilgili-yazilar-baslik"
              className="font-display text-2xl font-bold text-navy-900 sm:text-3xl"
            >
              Bunlar da ilginizi çekebilir
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
