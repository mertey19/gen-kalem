import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { formatDate, type PostSummary } from "@/data/blog";

type BlogCardProps = {
  post: PostSummary;
  /** İlk ekranda görünen kartlarda görseli öncelikli yükler. */
  priority?: boolean;
  featured?: boolean;
};

export function BlogCard({
  post,
  priority = false,
  featured = false,
}: BlogCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-leaf-300 hover:shadow-lift ${
        featured ? "sm:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-mist ${
          featured ? "aspect-[16/10] sm:aspect-auto sm:w-1/2" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={
            featured
              ? "(max-width: 640px) 92vw, 45vw"
              : "(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={`flex flex-1 flex-col p-5 sm:p-6 ${
          featured ? "sm:justify-center" : ""
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
          <span className="text-leaf-700">{post.category}</span>
          <span aria-hidden="true" className="text-navy-300">
            •
          </span>
          <span className="text-navy-700/70">{post.readingTime} dk okuma</span>
        </div>

        <h3
          className={`mt-3 font-display font-bold leading-snug text-navy-900 ${
            featured ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 text-[0.92rem] leading-relaxed text-navy-700/70">
          {post.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 pt-1">
          <time
            dateTime={post.date}
            className="text-xs font-medium text-navy-700/70"
          >
            {formatDate(post.date)}
          </time>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-700">
            Yazıyı Oku
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
