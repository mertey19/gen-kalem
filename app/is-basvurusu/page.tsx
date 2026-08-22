import { FileText, MessagesSquare, UserCheck } from "lucide-react";
import type { Metadata } from "next";

import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { business, maps } from "@/data/business";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "İş Başvurusu",
  description:
    "Genç Kalem Eğitim Kurumları iş başvurusu formu. Başvurunuzu iletin, uygun bir pozisyon olduğunda sizinle iletişime geçelim.",
  alternates: { canonical: "/is-basvurusu" },
  openGraph: {
    type: "website",
    title: "İş Başvurusu | Genç Kalem",
    description:
      "Başvurunuzu iletin, uygun bir pozisyon olduğunda sizinle iletişime geçelim.",
    url: "/is-basvurusu",
  },
  twitter: {
    card: "summary_large_image",
    title: "İş Başvurusu | Genç Kalem",
    description:
      "Başvurunuzu iletin, uygun bir pozisyon olduğunda sizinle iletişime geçelim.",
  },
};

const steps = [
  {
    icon: FileText,
    title: "Formu iletin",
    description:
      "Pozisyon ve deneyim bilgilerinizi paylaşın. Form, WhatsApp mesajı olarak hazırlanır.",
  },
  {
    icon: MessagesSquare,
    title: "CV'nizi gönderin",
    description:
      "Aynı WhatsApp sohbetinden özgeçmişinizi dosya olarak iletebilirsiniz.",
  },
  {
    icon: UserCheck,
    title: "Değerlendirme",
    description:
      "Başvurunuz incelenir; uygun bir pozisyon olduğunda sizinle iletişime geçilir.",
  },
];

export default function JobApplicationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: "/" },
            { name: "İş Başvurusu", url: "/is-basvurusu" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Kariyer"
        title="İş başvurusu"
        description="Genç Kalem Eğitim Kurumları'nda çalışmak isteyen adaylar başvurularını aşağıdaki formla iletebilir. Açık pozisyonlar döneme göre değiştiği için başvurunuz değerlendirilmek üzere kaydedilir."
        breadcrumb={[{ label: "İş Başvurusu" }]}
      />

      <section className="bg-mist py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12">
            <Reveal>
              <JobApplicationForm />
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-4">
              <div className="rounded-2xl border border-navy-100 bg-white p-6">
                <h2 className="font-display text-lg font-bold text-navy-900">
                  Başvuru süreci
                </h2>
                <ol className="mt-5 space-y-5">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.title} className="flex gap-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
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
                  İletişim
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
    </>
  );
}
