import { Quote, Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { googleRating, testimonials, trustMetrics } from "@/data/trust";

/**
 * Güven bölümü. data/trust.ts boş olduğu sürece HİÇ render edilmez —
 * yer tutucu sayı veya örnek yorum yayına çıkmaz.
 */
export function TrustSignals() {
  const rating = googleRating;
  const hasMetrics = trustMetrics.length > 0;
  const hasTestimonials = testimonials.length > 0;

  if (!hasMetrics && !hasTestimonials && !rating) return null;

  return (
    <section
      id="guven"
      aria-labelledby="guven-baslik"
      className="relative bg-white py-20 sm:py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="Bizi Tercih Edenler"
          title="Genç Kalem hakkında"
          align="center"
        />

        {rating ? (
          <Reveal className="mt-10 flex justify-center">
            <a
              href={rating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-navy-100 bg-white px-5 py-4 shadow-card transition-colors hover:border-leaf-300"
            >
              <span
                className="flex items-center gap-0.5 text-leaf-600"
                aria-hidden="true"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill={index < Math.round(rating.value) ? "currentColor" : "none"}
                  />
                ))}
              </span>
              <span className="text-sm text-navy-800">
                <strong className="font-display text-base font-bold">
                  {rating.value.toLocaleString("tr-TR", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}
                </strong>{" "}
                / 5 — {rating.count} Google değerlendirmesi
              </span>
            </a>
          </Reveal>
        ) : null}

        {hasMetrics ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustMetrics.map((metric, index) => (
              <Reveal
                as="li"
                key={metric.label}
                delay={(index % 4) * 0.06}
                className="rounded-2xl border border-navy-100 bg-white p-6 text-center"
              >
                <p className="font-display text-3xl font-extrabold text-navy-900">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-navy-800">
                  {metric.label}
                </p>
                {metric.note ? (
                  <p className="mt-1 text-xs leading-relaxed text-navy-700/70">
                    {metric.note}
                  </p>
                ) : null}
              </Reveal>
            ))}
          </ul>
        ) : null}

        {hasTestimonials ? (
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                as="li"
                key={`${item.author}-${index}`}
                delay={(index % 3) * 0.06}
                className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6"
              >
                <Quote
                  size={22}
                  aria-hidden="true"
                  className="shrink-0 text-leaf-600"
                />
                <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy-800/85">
                  {item.text}
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-navy-900">
                    {item.author}
                  </span>
                  {item.relation ? (
                    <span className="text-navy-700/70"> · {item.relation}</span>
                  ) : null}
                </figcaption>
              </Reveal>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}
