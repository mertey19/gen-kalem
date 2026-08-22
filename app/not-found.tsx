import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="bg-white pt-36 pb-24 lg:pt-44">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf-700">
            404
          </p>
          <h1 className="mt-4 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Aradığınız sayfa bulunamadı
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-700/75">
            Bağlantı değişmiş ya da sayfa kaldırılmış olabilir. Ana sayfaya
            dönebilir veya blog yazılarımıza göz atabilirsiniz.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl bg-navy-700 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-600 sm:w-auto"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/blog"
              className="inline-flex w-full items-center justify-center rounded-xl border border-navy-700/15 px-6 py-3.5 text-base font-semibold text-navy-800 transition-colors hover:border-navy-700/35 sm:w-auto"
            >
              Blog Yazıları
            </Link>
          </div>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton variant="ghost" size="sm" label="WhatsApp'tan bilgi alın" />
          </div>
        </div>
      </Container>
    </section>
  );
}
