import { ImageResponse } from "next/og";

import { OgCard, ogContentType, ogSize } from "@/components/og/OgCard";

export const alt = "Genç Kalem Blog — öğrenciler için rehberler";
export const size = ogSize;
export const contentType = ogContentType;

export default function BlogIndexOpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Genç Kalem Blog"
        title="Daha verimli öğrenmek için rehberler"
      />
    ),
    size,
  );
}
