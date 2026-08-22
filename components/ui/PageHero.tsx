import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Ana sayfa ve mevcut sayfa arasındaki ara adımlar. */
  breadcrumb: { label: string; href?: string }[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-32 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-4 h-80 w-80 rounded-full bg-leaf-100/60 blur-3xl"
      />

      <Container className="relative">
        <nav aria-label="Sayfa yolu">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-700/70">
            <li>
              <Link href="/" className="transition-colors hover:text-navy-900">
                Ana Sayfa
              </Link>
            </li>
            {breadcrumb.map((item, index) => (
              <li key={item.label} className="flex items-center gap-1">
                <ChevronRight
                  size={15}
                  aria-hidden="true"
                  className="text-navy-300"
                />
                {item.href && index < breadcrumb.length - 1 ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-navy-900"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-navy-800">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 max-w-2xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-7 rounded-full bg-leaf-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-700">
              {eyebrow}
            </span>
          </div>

          <h1 className="mt-4 text-[2.1rem] font-extrabold leading-[1.12] tracking-tight text-navy-900 sm:text-[2.75rem] lg:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-navy-700/75 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
