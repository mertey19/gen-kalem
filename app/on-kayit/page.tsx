import { CalendarCheck, MessagesSquare, Route } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PreRegistrationForm } from "@/components/forms/PreRegistrationForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { business, maps } from "@/data/business";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Mersin Dershane Kayıt ve Ön Kayıt Formu",
  description:
    "Genç Kalem Mersin dershane ön kayıt formu. YKS, LGS, mezun hazırlığı ve etüt için sınıfınızı paylaşın; program, ücret kapsamı ve kayıt koşullarını görüşün.",
  alternates: { canonical: "/on-kayit" },
  openGraph: {
    type: "website",
    title: "Mersin Dershane Kayıt ve Ön Kayıt | Genç Kalem",
    description:
      "YKS, LGS, mezun hazırlığı ve etüt için sınıfınızı paylaşın; güncel program, ücret kapsamı ve kayıt koşullarını görüşün.",
    url: "/on-kayit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mersin Dershane Kayıt ve Ön Kayıt | Genç Kalem",
    description:
      "YKS, LGS, mezun hazırlığı ve etüt için sınıfınızı paylaşın; güncel program, ücret kapsamı ve kayıt koşullarını görüşün.",
  },
};

const steps = [
  {
    icon: CalendarCheck,
    title: "Formu iletin",
    description:
      "Öğrenci bilgilerini ve iletişim numaranızı paylaşın. Form, WhatsApp mesajı olarak hazırlanır.",
  },
  {
    icon: MessagesSquare,
    title: "Sizi arayalım",
    description:
      "Programlar, çalışma takvimi ve kayıt koşulları hakkında size dönüş yapalım.",
  },
  {
    icon: Route,
    title: "Tanışma görüşmesi",
    description:
      "Uygun bir zamanda kurumumuzda tanışalım ve öğrenciye uygun programı birlikte belirleyelim.",
  },
];

export default function PreRegistrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: "/" },
            { name: "Ön Kayıt Formu", url: "/on-kayit" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Ön Kayıt"
        title="Mersin dershane ön kayıt formu"
        description="Aşağıdaki formu doldurarak ön kayıt talebinizi iletebilirsiniz. Ön kayıt bir taahhüt değildir; amacı sizi tanımak ve doğru programı birlikte belirlemektir."
        breadcrumb={[{ label: "Ön Kayıt Formu" }]}
      />

      <section className="bg-mist py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12">
            <Reveal>
              <PreRegistrationForm />
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-4">
              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <h2 className="font-display text-lg font-bold text-navy-900">
                  Sonraki adımlar
                </h2>
                <ol className="mt-5 space-y-5">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.title} className="flex gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-700">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-display text-[0.95rem] font-bold text-navy-900">
                            {index + 1}. {step.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-navy-700/70">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <h2 className="font-display text-lg font-bold text-navy-900">
                  Doğrudan iletişim
                </h2>
                <ul className="mt-4 space-y-2">
                  {business.phones.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="text-[0.95rem] font-medium text-navy-800 underline-offset-4 transition-colors hover:text-leaf-700 hover:underline"
                      >
                        {phone.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-navy-700/70">
                  {business.address}
                </p>
                <a
                  href={maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border border-navy-100 px-4 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-200"
                  aria-label="Yol tarifi al — Google Haritalar yeni sekmede açılır"
                >
                  Yol Tarifi Al
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <section aria-labelledby="kayit-gorusmesi-baslik" className="bg-white py-14 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 id="kayit-gorusmesi-baslik" className="font-display text-2xl font-bold text-navy-900">
              Kayıt görüşmesinde neleri netleştirmeli?
            </h2>
            <p className="mt-4 leading-relaxed text-navy-700/80">
              Sınıfınızı, hedef sınavınızı, ihtiyaç duyduğunuz dersleri ve hangi
              ilçeden ulaşacağınızı paylaşın. Güncel ders günleri, etüt, deneme,
              kaynaklar ve ücret kapsamı görüşmede birlikte değerlendirilir.
              Ön kayıt talebi kesin kayıt veya kontenjan garantisi oluşturmaz.
            </p>
            <nav aria-label="Kayıt öncesi program bilgileri" className="mt-5">
              <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-leaf-800">
                {[
                  { href: "/yks-kursu-mersin", label: "YKS, TYT ve AYT" },
                  { href: "/lgs-kursu-mersin", label: "LGS ve 7–8. sınıf" },
                  { href: "/mersin-mezun-dershanesi", label: "Mezun hazırlığı" },
                  { href: "/mersin-etut-merkezi", label: "Etüt ve soru çözümü" },
                  { href: "/mersin-dershane-fiyatlari", label: "Ücret kapsamı" },
                ].map((item) => (
                  <li key={item.href}><Link href={item.href} className="underline underline-offset-4 hover:text-leaf-700">{item.label}</Link></li>
                ))}
              </ul>
            </nav>
            <p className="mt-5 text-sm leading-relaxed text-navy-700/75">
              Formdaki bilgiler önce bir mesaj önizlemesi olarak hazırlanır.
              Kontrol ettikten sonra WhatsApp&apos;ta açabilir ve gönderebilirsiniz.
              Kurum adresimiz: {business.address}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
