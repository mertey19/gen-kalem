import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getLatestPosts, toSummary } from "@/data/blog";

export function BlogPreview() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      aria-labelledby="blog-baslik"
      className="relative bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Genç Kalem Blog"
            title="Öğrenciler için faydalı içerikler"
            description="Ders çalışma yöntemleri, sınav süreci, motivasyon ve akademik gelişim hakkında öğrenci ve velilere yönelik içerikler."
          />

          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-xl border border-navy-700/15 bg-white px-5 py-3 text-[0.95rem] font-semibold text-navy-800 transition-all duration-200 hover:border-navy-700/35 hover:shadow-card"
            >
              Tüm Yazıları Gör
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal as="li" key={post.slug} delay={index * 0.07} className="h-full">
              <BlogCard post={toSummary(post)} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
