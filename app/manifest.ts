import type { MetadataRoute } from "next";

import { business } from "@/data/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: business.shortName,
    description:
      "Mersin Akdeniz'de öğrencilere planlı bir eğitim süreci ve düzenli takip sunan Genç Kalem Eğitim Kurumları.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#17235B",
    lang: "tr",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
