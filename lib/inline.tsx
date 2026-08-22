import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Yazı gövdesinde desteklenen iki satır içi işaret:
 *   **kalın**
 *   [bağlantı metni](/hedef)
 * Başka bir markdown özelliği bilinçli olarak desteklenmez; içerik yapısal
 * bloklarla tutulduğu için tam bir markdown ayrıştırıcısına gerek yoktur.
 */
const PATTERN = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)\s]+\))/g;

export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  PATTERN.lastIndex = 0;

  while ((match = PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`b-${key++}`} className="font-semibold text-navy-900">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      const split = token.indexOf("](");
      const label = token.slice(1, split);
      const href = token.slice(split + 2, -1);
      const isExternal = href.startsWith("http");

      nodes.push(
        isExternal ? (
          <a
            key={`l-${key++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-leaf-700 underline decoration-leaf-300 underline-offset-4 transition-colors hover:text-leaf-800 hover:decoration-leaf-600"
          >
            {label}
          </a>
        ) : (
          <Link
            key={`l-${key++}`}
            href={href}
            className="font-medium text-leaf-700 underline decoration-leaf-300 underline-offset-4 transition-colors hover:text-leaf-800 hover:decoration-leaf-600"
          >
            {label}
          </Link>
        ),
      );
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
