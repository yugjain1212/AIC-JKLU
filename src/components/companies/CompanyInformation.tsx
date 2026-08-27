import { motion, AnimatePresence } from 'framer-motion';
import type { Company } from '@/data/companies';

interface CompanyInformationProps {
  company: Company;
}

export default function CompanyInformation({ company }: CompanyInformationProps) {
  return (
    <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 lg:px-8 w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={company.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="
            grid gap-x-6 lg:gap-x-10 gap-y-2.5
            grid-cols-1
            sm:grid-cols-[48px_1fr]
            lg:grid-cols-[56px_1.5fr_1fr]
            py-2.5 lg:py-3
            border-t border-hairline
          "
        >
          {/* ── Col 1: Company number ── */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-0">
            <span className="font-marcellus text-[1.85rem] lg:text-[2rem] leading-none text-brand">
              {company.id}
            </span>
            <div className="mt-0 lg:mt-2 h-px w-6 bg-brand" />
          </div>

          {/* ── Col 2: Name, description, CTA ── */}
          <div className="flex flex-col gap-2">
            <h3 className="font-marcellus text-[1.25rem] lg:text-[1.4rem] leading-tight tracking-[-0.02em] text-obsidian">
              {company.name}
            </h3>
            <p className="font-robotoMono text-[12.5px] lg:text-[13px] leading-relaxed text-slateMuted max-w-xl">
              {company.description}
            </p>
            {/* View Company CTA */}
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-1.5 w-fit mt-0.5
                font-robotoMono text-[10px] uppercase tracking-[0.16em]
                text-brand border-b border-brand/30
                hover:border-brand pb-0.5
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm
                cursor-pointer
              "
            >
              View Company
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* ── Col 3: Meta details ── */}
          <div className="
            grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1
            gap-x-6 gap-y-2.5
            lg:border-l lg:border-hairline lg:pl-8
          ">
            {company.founder && (
              <MetaItem label="Founder" value={company.founder} />
            )}
            <MetaItem label="Industry" value={company.industry} />
            <MetaItem label="Founded" value={company.founded} />
            <MetaItem label="Focus Areas" value={company.focusAreas} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-robotoMono text-[9px] uppercase tracking-[0.18em] text-slateMuted/80">
        {label}
      </span>
      <span className="font-robotoMono text-[12px] lg:text-[13px] text-obsidian leading-snug">
        {value}
      </span>
    </div>
  );
}
