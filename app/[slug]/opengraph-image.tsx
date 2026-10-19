import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";

import { OgCard, ogContentType, ogSize } from "@/components/og/OgCard";
import { getLandingPage, landingPages } from "@/data/landing-pages";

export const alt = "Genç Kalem eğitim programı ve bilgi rehberi";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export default async function ProgramOpengraphImage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();
  return new ImageResponse(
    <OgCard eyebrow={page.eyebrow} title={page.h1} />,
    size,
  );
}
