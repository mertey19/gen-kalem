"use client";

import { CheckCircle2, Pencil, ShieldCheck } from "lucide-react";
import { useId, useRef, useState } from "react";

import { Field, Select, TextArea, TextInput } from "@/components/forms/Field";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { trackEvent } from "@/lib/analytics";
import { formatTrMobile, isValidTrMobile } from "@/lib/phone";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const experienceOptions = [
  "1 yıldan az",
  "1-3 yıl",
  "3-5 yıl",
  "5-10 yıl",
  "10 yıldan fazla",
];

type Errors = Partial<Record<"name" | "phone" | "position", string>>;

/**
 * İş başvurusu formu. Ön kayıt formuyla aynı ilkeyle çalışır:
 * bilgiler önce sayfada gösterilir, kullanıcı onaylamadan WhatsApp açılmaz
 * ve hiçbir veri saklanmaz.
 */
export function JobApplicationForm() {
  const id = useId();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [note, setNote] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [preview, setPreview] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const validate = (): Errors => {
    const next: Errors = {};
    if (fullName.trim().length < 3) next.name = "Adınızı ve soyadınızı yazın.";
    if (!isValidTrMobile(phone)) {
      next.phone = "Geçerli bir cep telefonu girin. Örnek: 0532 111 22 33";
    }
    if (position.trim().length < 2) {
      next.position = "Başvurduğunuz pozisyonu veya branşı yazın.";
    }
    return next;
  };

  const buildMessage = () =>
    [
      "Merhaba, iş başvurusu yapmak istiyorum.",
      "",
      `Ad Soyad: ${fullName.trim()}`,
      `Başvurulan pozisyon / branş: ${position.trim()}`,
      experience ? `Deneyim: ${experience}` : null,
      `Telefon: ${formatTrMobile(phone)}`,
      note.trim() ? `Kısa özgeçmiş: ${note.trim()}` : null,
      "",
      "CV'mi bu sohbetten iletebilirim.",
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);

    if (Object.keys(found).length > 0) {
      document.getElementById(`${id}-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    setPreview(buildMessage());
    window.setTimeout(
      () => previewRef.current?.scrollIntoView({ block: "nearest" }),
      0,
    );
  };

  const openWhatsApp = () => {
    trackEvent("job_application_completed", { source: "is_basvurusu" });
    window.open(
      createWhatsAppUrl(preview ?? buildMessage()),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8"
    >
      <p className="mb-5 text-xs text-navy-700/70">
        <span className="text-leaf-700">*</span> işaretli alanlar zorunludur.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Ad Soyad"
          htmlFor={`${id}-name`}
          required
          error={errors.name}
        >
          <TextInput
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            enterKeyHint="next"
            placeholder="Örn. Elif Demir"
            value={fullName}
            invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            onChange={(event) => {
              setFullName(event.target.value);
              if (errors.name) setErrors((e) => ({ ...e, name: undefined }));
            }}
          />
        </Field>

        <Field
          label="Telefon"
          htmlFor={`${id}-phone`}
          required
          error={errors.phone}
        >
          <TextInput
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="0532 111 22 33"
            value={phone}
            invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
            onChange={(event) => {
              setPhone(formatTrMobile(event.target.value));
              if (errors.phone) setErrors((e) => ({ ...e, phone: undefined }));
            }}
          />
        </Field>

        <Field
          label="Başvurduğunuz Pozisyon / Branş"
          htmlFor={`${id}-position`}
          required
          error={errors.position}
          hint="Örn. Matematik öğretmeni, rehber öğretmen, ofis görevlisi."
        >
          <TextInput
            id={`${id}-position`}
            name="position"
            placeholder="Örn. Matematik Öğretmeni"
            value={position}
            invalid={Boolean(errors.position)}
            aria-describedby={
              errors.position ? `${id}-position-error` : `${id}-position-hint`
            }
            onChange={(event) => {
              setPosition(event.target.value);
              if (errors.position) {
                setErrors((e) => ({ ...e, position: undefined }));
              }
            }}
          />
        </Field>

        <Field label="Deneyim Süresi" htmlFor={`${id}-experience`}>
          <Select
            id={`${id}-experience`}
            name="experience"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          >
            <option value="">Seçiniz</option>
            {experienceOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Kısa Özgeçmiş"
          htmlFor={`${id}-note`}
          className="sm:col-span-2"
          hint="Mezuniyet, çalıştığınız kurumlar ve deneyiminizi birkaç cümleyle özetleyebilirsiniz."
        >
          <TextArea
            id={`${id}-note`}
            name="note"
            rows={5}
            aria-describedby={`${id}-note-hint`}
            placeholder="Mezuniyetiniz, deneyiminiz ve eklemek istedikleriniz."
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </Field>
      </div>

      {preview === null ? (
        <button
          type="submit"
          className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-leaf-600 px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_-10px_rgba(70,128,26,0.9)] transition-colors duration-200 hover:bg-leaf-700 active:translate-y-px sm:w-auto"
        >
          Başvuruyu Hazırla
        </button>
      ) : (
        <div
          ref={previewRef}
          role="status"
          aria-live="polite"
          className="mt-7 rounded-2xl border border-leaf-200 bg-leaf-50/70 p-5"
        >
          <p className="flex items-center gap-2 font-display text-sm font-bold text-leaf-800">
            <CheckCircle2 size={17} aria-hidden="true" />
            Başvurunuz hazır — göndermeden önce kontrol edin
          </p>

          <pre className="mt-3 max-h-56 overflow-auto whitespace-pre-wrap rounded-xl border border-leaf-200 bg-white p-4 font-sans text-[0.9rem] leading-relaxed text-navy-800">
            {preview}
          </pre>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-leaf-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-leaf-700"
            >
              <WhatsAppIcon size={19} />
              WhatsApp&apos;ta Aç ve Gönder
            </button>
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-200 px-5 py-3.5 text-[0.95rem] font-semibold text-navy-800 transition-colors hover:bg-white"
            >
              <Pencil size={16} aria-hidden="true" />
              Bilgileri Düzenle
            </button>
          </div>
        </div>
      )}

      <p className="mt-5 flex gap-2.5 text-xs leading-relaxed text-navy-700/70">
        <ShieldCheck
          size={16}
          aria-hidden="true"
          className="mt-px shrink-0 text-leaf-600"
        />
        <span>
          Girdiğiniz bilgiler sitede saklanmaz ve bir sunucuya gönderilmez.
          Bilgiler yalnızca bir WhatsApp mesajına dönüştürülür; CV dosyanızı da
          aynı sohbetten iletebilirsiniz.
        </span>
      </p>
    </form>
  );
}
