import { ImageResponse } from "next/og";

import { OgCard, ogContentType, ogSize } from "@/components/og/OgCard";

export const alt = "Genç Kalem Eğitim Kurumları iş başvurusu";
export const size = ogSize;
export const contentType = ogContentType;

export default function JobApplicationOpengraphImage() {
  return new ImageResponse(
    <OgCard eyebrow="Kariyer" title="İş başvurusu" />,
    size,
  );
}
