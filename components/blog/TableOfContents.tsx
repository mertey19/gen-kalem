import type { BlogBlock } from "@/content/types";
import { slugifyTr } from "@/lib/slug";

/**
 * Uzun yazılarda içindekiler. Gövdedeki h2 başlıklarından üretilir;
 * dört başlıktan azsa hiç gösterilmez (kısa yazıda gereksiz gürültü olur).
 */
export function TableOfContents({ blocks }: { blocks: BlogBlock[] }) {
  const headings = blocks
    .filter((block) => block.type === "h2")
    .map((block) => (block as { text: string }).text);

  if (headings.length < 4) return null;

  return (
    <nav
      aria-labelledby="icindekiler-baslik"
      className="mt-10 rounded-2xl border border-navy-100 bg-mist p-5 sm:p-6"
    >
      <h2
        id="icindekiler-baslik"
        className="font-display text-sm font-bold uppercase tracking-[0.12em] text-navy-700"
      >
        İçindekiler
      </h2>
      <ol className="mt-3 space-y-1.5">
        {headings.map((heading, index) => (
          <li key={heading} className="flex gap-2.5 text-[0.93rem]">
            <span aria-hidden="true" className="font-semibold text-navy-700/50">
              {index + 1}.
            </span>
            <a
              href={`#${slugifyTr(heading)}`}
              className="text-navy-800 underline-offset-4 transition-colors hover:text-leaf-700 hover:underline"
            >
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
