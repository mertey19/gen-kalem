import { ImageResponse } from "next/og";

import { OgCard, ogContentType, ogSize } from "@/components/og/OgCard";

export const alt = "Genç Kalem Eğitim Kurumları ön kayıt formu";
export const size = ogSize;
export const contentType = ogContentType;

export default function PreRegistrationOpengraphImage() {
  return new ImageResponse(
    <OgCard eyebrow="Ön Kayıt" title="Ön kayıt formu" />,
    size,
  );
}
