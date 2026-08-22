import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type Variant = "primary" | "outline" | "onDark" | "ghost";
type Size = "sm" | "md" | "lg";

type WhatsAppButtonProps = {
  /** Ön tanımlı mesaj verilmezse business.whatsappDefaultMessage kullanılır. */
  message?: string;
  label?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Erişilebilirlik için, görünen metin bağlamı yetersizse. */
  ariaLabel?: string;
  showIcon?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-leaf-600 text-white shadow-[0_10px_24px_-10px_rgba(70,128,26,0.9)] hover:bg-leaf-700 hover:shadow-[0_14px_30px_-10px_rgba(70,128,26,0.95)]",
  outline:
    "border border-navy-700/15 bg-white text-navy-800 hover:border-leaf-500 hover:text-leaf-700 hover:shadow-card",
  onDark:
    "bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur hover:bg-white/15",
  ghost: "text-leaf-700 hover:text-leaf-800 underline-offset-4 hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
};

export function WhatsAppButton({
  message,
  label = "WhatsApp'tan Bilgi Al",
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? `${label} — WhatsApp'ta yeni sekmede açılır`}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {showIcon ? <WhatsAppIcon size={size === "sm" ? 16 : 19} /> : null}
      <span>{label}</span>
    </a>
  );
}
