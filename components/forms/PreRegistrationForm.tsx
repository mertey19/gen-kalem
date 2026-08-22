"use client";

import { ShieldCheck } from "lucide-react";
import { useId, useState } from "react";

import { Field, Select, TextArea, TextInput } from "@/components/forms/Field";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { programs } from "@/data/programs";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const levels = ["İlkokul", "Ortaokul", "Lise", "Mezun", "Diğer"];

/**
 * Backend olmadığı için form, girilen bilgileri düzenli bir WhatsApp
 * mesajına dönüştürür ve kullanıcının kendi WhatsApp'ında açar.
 * Hiçbir veri site tarafında saklanmaz veya bir sunucuya gönderilmez.
 */
export function PreRegistrationForm() {
  const id = useId();
  const [studentName, setStudentName] = useState("");
  const [level, setLevel] = useState("");
  const [program, setProgram] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const buildMessage = () => {
    const lines = [
      "Merhaba, ön kayıt için bilgilerimi iletiyorum.",
      "",
      `Öğrenci: ${studentName.trim()}`,
      level ? `Düzey: ${level}` : null,
      program ? `İlgilendiği program: ${program}` : null,
      parentName.trim() ? `Veli: ${parentName.trim()}` : null,
      `Telefon: ${phone.trim()}`,
      note.trim() ? `Not: ${note.trim()}` : null,
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
        <Field label="Öğrenci Adı Soyadı" htmlFor={`${id}-student`} required>
          <TextInput
            id={`${id}-student`}
            name="student"
            required
            autoComplete="name"
            placeholder="Örn. Ayşe Yılmaz"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
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
            placeholder="Örn. Mehmet Yılmaz"
            value={parentName}
            onChange={(event) => setParentName(event.target.value)}
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

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-leaf-600 px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_-10px_rgba(70,128,26,0.9)] transition-all duration-200 hover:bg-leaf-700 active:translate-y-px sm:w-auto"
      >
        <WhatsAppIcon size={19} />
        Formu WhatsApp&apos;tan Gönder
      </button>

      <p className="mt-5 flex gap-2.5 text-xs leading-relaxed text-navy-700/70">
        <ShieldCheck
          size={16}
          aria-hidden="true"
          className="mt-px shrink-0 text-leaf-600"
        />
        <span>
          Girdiğiniz bilgiler sitede saklanmaz ve bir sunucuya gönderilmez.
          Gönder&apos;e bastığınızda bilgiler düzenli bir WhatsApp mesajına
          dönüştürülür ve mesajı göndermeden önce kontrol edebilirsiniz.
        </span>
      </p>
    </form>
  );
}
