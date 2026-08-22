import type { ReactNode, SelectHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const controlBase =
  "w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-[0.95rem] text-navy-900 placeholder:text-navy-700/50 transition-colors focus:border-leaf-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1";

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
  className?: string;
};

export function Field({
  label,
  htmlFor,
  required = false,
  hint,
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
          <span aria-hidden="true" className="ml-1 text-leaf-700">
            *
          </span>
        ) : (
          <span className="ml-1 font-normal text-navy-700/70">
            (opsiyonel)
          </span>
        )}
      </label>
      {children}
      {hint ? (
        <p className="mt-1.5 text-xs leading-relaxed text-navy-700/70">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return <input {...rest} className={`${controlBase} ${className}`} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  const { className = "", ...rest } = props;
  return (
    <select {...rest} className={`${controlBase} appearance-none ${className}`} />
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className = "", ...rest } = props;
  return (
    <textarea {...rest} className={`${controlBase} resize-y ${className}`} />
  );
}
