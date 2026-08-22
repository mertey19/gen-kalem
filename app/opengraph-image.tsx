import { ImageResponse } from "next/og";

import { OgCard, ogContentType, ogSize } from "@/components/og/OgCard";

export const alt = "Genç Kalem Eğitim Kurumları — Mersin Akdeniz";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Eğitim Kurumları"
        title="Başarıya giden yolda yanınızdayız."
      />
    ),
    size,
  );
}
