"use client";

import { ShieldCheck } from "lucide-react";
import { useId, useState } from "react";

import { Field, Select, TextArea, TextInput } from "@/components/forms/Field";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const experienceOptions = [
  "1 yıldan az",
  "1-3 yıl",
  "3-5 yıl",
  "5-10 yıl",
  "10 yıldan fazla",
];

/**
 * Backend ve dosya yükleme altyapısı olmadığı için başvuru bilgileri
 * WhatsApp mesajına dönüştürülür; aday CV'sini aynı sohbetten iletebilir.
 */
export function JobApplicationForm() {
  const id = useId();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [note, setNote] = useState("");

  const buildMessage = () => {
    const lines = [
      "Merhaba, iş başvurusu yapmak istiyorum.",
      "",
      `Ad Soyad: ${fullName.trim()}`,
      `Başvurulan pozisyon / branş: ${position.trim()}`,
      experience ? `Deneyim: ${experience}` : null,
      `Telefon: ${phone.trim()}`,
      note.trim() ? `Kısa özgeçmiş: ${note.trim()}` : null,
      "",
      "CV'mi bu sohbetten iletebilirim.",
    ].filter((line): line is string => line !== null);

    return lines.join("\n");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(createWhatsAppUrl(buildMessage()), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" htmlFor={`${id}-name`} required>
          <TextInput
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Örn. Elif Demir"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </Field>

        <Field label="Telefon" htmlFor={`${id}-phone`} required>
          <TextInput
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="05XX XXX XX XX"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Field>

        <Field
          label="Başvurduğunuz Pozisyon / Branş"
          htmlFor={`${id}-position`}
          required
          hint="Örn. Matematik öğretmeni, rehber öğretmen, ofis görevlisi."
        >
          <TextInput
            id={`${id}-position`}
            name="position"
            required
            placeholder="Örn. Matematik Öğretmeni"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
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
            placeholder="Mezuniyetiniz, deneyiminiz ve eklemek istedikleriniz."
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-leaf-600 px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_-10px_rgba(70,128,26,0.9)] transition-all duration-200 hover:bg-leaf-700 active:translate-y-px sm:w-auto"
      >
        <WhatsAppIcon size={19} />
        Başvuruyu WhatsApp&apos;tan Gönder
      </button>

      <p className="mt-5 flex gap-2.5 text-xs leading-relaxed text-navy-700/70">
        <ShieldCheck
          size={16}
          aria-hidden="true"
          className="mt-px shrink-0 text-leaf-600"
        />
        <span>
          Girdiğiniz bilgiler sitede saklanmaz ve bir sunucuya gönderilmez.
          Gönder&apos;e bastığınızda bilgiler bir WhatsApp mesajına dönüştürülür;
          CV dosyanızı da aynı sohbetten iletebilirsiniz.
        </span>
      </p>
    </form>
  );
}
