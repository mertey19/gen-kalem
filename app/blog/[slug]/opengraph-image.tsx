import { ImageResponse } from "next/og";

import { OgCard, ogContentType, ogSize } from "@/components/og/OgCard";
import { getPostBySlug, posts } from "@/data/blog";

export const alt = "Genç Kalem Blog yazısı";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <OgCard
        eyebrow={post?.category ?? "Genç Kalem Blog"}
        title={post?.title ?? "Genç Kalem Blog"}
      />
    ),
    size,
  );
}
