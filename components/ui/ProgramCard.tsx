import {
  BookOpen,
  Compass,
  PenLine,
  Target,
  UserCheck,
  Users,
} from "lucide-react";

import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import type { Program, ProgramIcon } from "@/data/programs";
import { createWhatsAppUrl, whatsAppMessageFor } from "@/lib/whatsapp";

const iconMap: Record<ProgramIcon, typeof Target> = {
  target: Target,
  bookOpen: BookOpen,
  userCheck: UserCheck,
  penLine: PenLine,
  compass: Compass,
  users: Users,
};

export function ProgramCard({ program }: { program: Program }) {
  const Icon = iconMap[program.icon];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-leaf-300 hover:shadow-lift">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-50 text-leaf-700 transition-colors duration-200 group-hover:bg-leaf-600 group-hover:text-white">
        <Icon size={22} aria-hidden="true" />
      </span>

      <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
        {program.title}
      </h3>

      <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-700/70">
        {program.description}
      </p>

      <ul className="mt-4 mb-6 flex flex-wrap gap-1.5">
        {program.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-lg bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-700/80"
          >
            {highlight}
          </li>
        ))}
      </ul>

      <a
        href={createWhatsAppUrl(whatsAppMessageFor(program.title))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${program.title} hakkında WhatsApp'tan bilgi al — yeni sekmede açılır`}
        className="mt-auto inline-flex items-center gap-2 self-start rounded-xl border border-navy-100 px-4 py-2.5 text-sm font-semibold text-navy-800 transition-all duration-200 group-hover:border-leaf-500 group-hover:bg-leaf-600 group-hover:text-white"
      >
        <WhatsAppIcon size={16} />
        Bilgi Al
      </a>
    </article>
  );
}
