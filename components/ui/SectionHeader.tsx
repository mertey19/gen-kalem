import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h2" | "h1";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
      >
        <span
          aria-hidden="true"
          className="h-px w-7 rounded-full bg-leaf-500"
        />
        <span
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-leaf-400" : "text-leaf-700"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <Heading
        className={`mt-4 text-3xl leading-[1.15] font-bold sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-navy-200" : "text-navy-700/75"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
