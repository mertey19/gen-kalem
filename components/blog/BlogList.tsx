"use client";

import { useMemo, useState } from "react";

import { BlogCard } from "@/components/ui/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import type { BlogCategory, PostSummary } from "@/data/blog";

type BlogListProps = {
  posts: PostSummary[];
  categories: BlogCategory[];
  /** Sayfa başında öne çıkarılan yazı; yalnızca "Tümü" görünümünde tekrarlanmaz. */
  excludeSlug?: string;
};

export function BlogList({ posts, categories, excludeSlug }: BlogListProps) {
  const [active, setActive] = useState<BlogCategory | "Tümü">("Tümü");

  const filtered = useMemo(() => {
    if (active === "Tümü") {
      return excludeSlug
        ? posts.filter((post) => post.slug !== excludeSlug)
        : posts;
    }
    return posts.filter((post) => post.category === active);
  }, [posts, active, excludeSlug]);

  const options: (BlogCategory | "Tümü")[] = ["Tümü", ...categories];

  return (
    <div>
      <div
        role="group"
        aria-label="Kategoriye göre filtrele"
        className="-mx-1 flex flex-wrap gap-2 px-1"
      >
        {options.map((option) => {
          const isActive = option === active;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setActive(option)}
              aria-pressed={isActive}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border-navy-700 bg-navy-700 text-white"
                  : "border-navy-100 bg-white text-navy-700/80 hover:border-navy-200 hover:text-navy-900"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-navy-700/70">
        {filtered.length} yazı listeleniyor.
      </p>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, index) => (
          <Reveal
            as="li"
            key={post.slug}
            delay={Math.min(index, 5) * 0.05}
            className="h-full"
          >
            <BlogCard post={post} priority={index < 3} />
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
