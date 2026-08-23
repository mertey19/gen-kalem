import { Sparkles } from "lucide-react";

import type { BlogBlock } from "@/content/types";
import { renderInline } from "@/lib/inline";
import { slugifyTr } from "@/lib/slug";

/** Yazı gövdesi. Ölçü tipografisi 760px genişlikte tutulur. */
export function Prose({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mt-10 space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                id={slugifyTr(block.text)}
                className="scroll-mt-28 pt-4 font-display text-[1.6rem] font-bold leading-snug text-navy-900 sm:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={index}
                className="pt-2 font-display text-xl font-bold leading-snug text-navy-900"
              >
                {block.text}
              </h3>
            );

          case "ul":
            return (
              <ul key={index} className="space-y-2.5">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500"
                    />
                    <span className="text-[1.02rem] leading-[1.75] text-navy-800/85">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={index} className="space-y-2.5">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-navy-50 text-xs font-bold text-navy-700"
                    >
                      {itemIndex + 1}
                    </span>
                    <span className="text-[1.02rem] leading-[1.75] text-navy-800/85">
                      {renderInline(item)}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "callout":
            return (
              <aside
                key={index}
                className="rounded-2xl border border-leaf-200 bg-leaf-50/70 p-5 sm:p-6"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles
                    size={17}
                    aria-hidden="true"
                    className="shrink-0 text-leaf-700"
                  />
                  <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-leaf-800">
                    {block.title ?? "Not"}
                  </p>
                </div>
                <p className="mt-2.5 text-[1.02rem] leading-[1.7] text-navy-800/90">
                  {renderInline(block.text)}
                </p>
              </aside>
            );

          default:
            return (
              <p
                key={index}
                className="text-[1.05rem] leading-[1.8] text-navy-800/85"
              >
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}
