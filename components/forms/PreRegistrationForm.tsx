"use client";

import { CheckCircle2, Pencil, ShieldCheck } from "lucide-react";
import { useId, useRef, useState } from "react";

import { Field, Select, TextArea, TextInput } from "@/components/forms/Field";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { programs } from "@/data/programs";
import { trackEvent } from "@/lib/analytics";
import { formatTrMobile, isValidTrMobile } from "@/lib/phone";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const levels = ["Ortaokul (7–8. sınıf)", "Lise", "Mezun", "Diğer"];

type Errors = Partial<Record<"student" | "phone", string>>;

/**
 * Ön kayıt formu.
 *
 * Backend yoktur: bilgiler düzenli bir WhatsApp mesajına çevrilir.
 * Gönder'e basıldığında mesaj ÖNCE sayfada gösterilir; kullanıcı içeriği
 * görüp onaylamadan WhatsApp açılmaz. Hiçbir veri saklanmaz, bir sunucuya
 * gönderilmez ve analitiğe kişisel bilgi yazılmaz.
 */
export function PreRegistrationForm() {
  const id = useId();
  const [studentName, setStudentName] = useState("");
  const [level, setLevel] = useState("");
  const [program, setProgram] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [preview, setPreview] = useState<string | null>(null);
  const startedRef = useRef(false);
  const previewRef = useRef<HTMLDivElement>(null);

  /** İlk etkileşimde bir kez "form başladı" olayı gönderilir. */
  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("pre_registration_started", { source: "on_kayit" });
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (studentName.trim().length < 3) {
      next.student = "Öğrencinin adını ve soyadını yazın.";
    }
    if (!isValidTrMobile(phone)) {
      next.phone = "Geçerli bir cep telefonu girin. Örnek: 0532 111 22 33";
    }
    return next;
  };

  const buildMessage = () =>
    [
      "Merhaba, ön kayıt için bilgilerimi iletiyorum.",
      "",
      `Öğrenci: ${studentName.trim()}`,
      level ? `Düzey: ${level}` : null,
      program ? `İlgilendiği program: ${program}` : null,
      parentName.trim() ? `Veli: ${parentName.trim()}` : null,
      `Telefon: ${formatTrMobile(phone)}`,
      note.trim() ? `Not: ${note.trim()}` : null,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      document.getElementById(`${id}-${firstKey}`)?.focus();
      return;
    }

    setPreview(buildMessage());
    // Önizleme görünür olsun ve ekran okuyucu duyursun.
    window.setTimeout(
      () => previewRef.current?.scrollIntoView({ block: "nearest" }),
      0,
    );
  };

  const openWhatsApp = () => {
    trackEvent("pre_registration_completed", { source: "on_kayit" });
    window.open(
      createWhatsAppUrl(preview ?? buildMessage()),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={markStarted}
      noValidate
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8"
    >
      <p className="mb-5 text-xs text-navy-700/70">
        <span className="text-leaf-700">*</span> işaretli alanlar zorunludur.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Öğrenci Adı Soyadı"
          htmlFor={`${id}-student`}
          required
          error={errors.student}
        >
          <TextInput
            id={`${id}-student`}
            name="student"
            autoComplete="name"
            enterKeyHint="next"
            placeholder="Örn. Ayşe Yılmaz"
            value={studentName}
            invalid={Boolean(errors.student)}
            aria-describedby={errors.student ? `${id}-student-error` : undefined}
            onChange={(event) => {
              setStudentName(event.target.value);
              if (errors.student) setErrors((e) => ({ ...e, student: undefined }));
            }}
          />
        </Field>

        <Field label="Sınıf / Düzey" htmlFor={`${id}-level`}>
          <Select
            id={`${id}-level`}
            name="level"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
          >
            <option value="">Seçiniz</option>
            {levels.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="İlgilendiğiniz Program"
          htmlFor={`${id}-program`}
          className="sm:col-span-2"
          hint="Emin değilseniz boş bırakabilirsiniz; görüşmede birlikte belirleyelim."
        >
          <Select
            id={`${id}-program`}
            name="program"
            value={program}
            aria-describedby={`${id}-program-hint`}
            onChange={(event) => setProgram(event.target.value)}
          >
            <option value="">Seçiniz</option>
            {programs.map((item) => (
              <option key={item.slug} value={item.title}>
                {item.title}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Veli Adı Soyadı" htmlFor={`${id}-parent`}>
          <TextInput
            id={`${id}-parent`}
            name="parent"
            autoComplete="name"
            placeholder="Örn. Mehmet Yılmaz"
            value={parentName}
            onChange={(event) => setParentName(event.target.value)}
          />
        </Field>

        <Field
          label="Telefon"
          htmlFor={`${id}-phone`}
          required
          error={errors.phone}
          hint="Size bu numaradan dönüş yapacağız."
        >
          <TextInput
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            enterKeyHint="done"
            placeholder="0532 111 22 33"
            value={phone}
            invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? `${id}-phone-error` : `${id}-phone-hint`
            }
            onChange={(event) => {
              setPhone(formatTrMobile(event.target.value));
              if (errors.phone) setErrors((e) => ({ ...e, phone: undefined }));
            }}
          />
        </Field>

        <Field
          label="Eklemek İstedikleriniz"
          htmlFor={`${id}-note`}
          className="sm:col-span-2"
        >
          <TextArea
            id={`${id}-note`}
            name="note"
            rows={4}
            placeholder="Öğrencinin durumu, hedefi veya sormak istedikleriniz."
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
          Mesajı Hazırla
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
            Mesajınız hazır — göndermeden önce kontrol edin
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
          Bilgiler yalnızca bir WhatsApp mesajına dönüştürülür; mesaj
          WhatsApp&apos;ta açıldıktan sonra göndermeden önce yeniden
          düzenleyebilirsiniz.
        </span>
      </p>
    </form>
  );
}
