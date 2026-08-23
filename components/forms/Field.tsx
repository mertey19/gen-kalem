import { AlertCircle } from "lucide-react";
import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const controlBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-navy-900 placeholder:text-navy-700/50 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1";

const controlState = (invalid?: boolean) =>
  invalid
    ? "border-red-500 focus:border-red-600"
    : "border-navy-100 focus:border-leaf-500";

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  /** Doğrulama mesajı; doluysa alan hatalı olarak işaretlenir. */
  error?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Etiket + ipucu + hata mesajını tek yerde toplar.
 * Hata mesajı `${htmlFor}-error` id'siyle bağlanır; alanlar bu id'yi
 * aria-describedby ile referans alır.
 */
export function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-navy-800"
      >
        {label}
        {required ? (
          <span className="ml-1 text-leaf-700" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 font-normal text-navy-700/70">
            (opsiyonel)
          </span>
        )}
      </label>

      {children}

      {error ? (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="mt-1.5 flex items-start gap-1.5 text-xs font-medium text-red-700"
        >
          <AlertCircle size={14} aria-hidden="true" className="mt-px shrink-0" />
          {error}
        </p>
      ) : hint ? (
        <p
          id={`${htmlFor}-hint`}
          className="mt-1.5 text-xs leading-relaxed text-navy-700/70"
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
}

type ControlExtras = { invalid?: boolean };

export function TextInput({
  className = "",
  invalid,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & ControlExtras) {
  return (
    <input
      {...rest}
      aria-invalid={invalid || undefined}
      className={`${controlBase} ${controlState(invalid)} ${className}`}
    />
  );
}

export function Select({
  className = "",
  invalid,
  ...rest
}: SelectHTMLAttributes<HTMLSelectElement> & ControlExtras) {
  return (
    <select
      {...rest}
      aria-invalid={invalid || undefined}
      className={`${controlBase} ${controlState(invalid)} appearance-none ${className}`}
    />
  );
}

export function TextArea({
  className = "",
  invalid,
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement> & ControlExtras) {
  return (
    <textarea
      {...rest}
      aria-invalid={invalid || undefined}
      className={`${controlBase} ${controlState(invalid)} resize-y ${className}`}
    />
  );
}
