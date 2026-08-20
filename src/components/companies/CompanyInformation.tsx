import { motion, AnimatePresence } from 'framer-motion';
import type { Company } from '@/data/companies';

interface CompanyInformationProps {
  company: Company;
}

export default function CompanyInformation({ company }: CompanyInformationProps) {
  return (
    <div className="px-6 lg:px-16 max-w-screen-2xl mx-auto w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={company.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="
            grid gap-x-8 gap-y-6
            grid-cols-1
            sm:grid-cols-[64px_1fr]
            lg:grid-cols-[72px_1.4fr_1fr]
            py-8 lg:py-10
            border-t border-hairline
          "
        >
          {/* ── Col 1: Company number ── */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
            <span className="font-marcellus text-[2.2rem] leading-none text-brand">
              {company.id}
            </span>
            <div className="mt-0 lg:mt-3 h-px w-8 bg-brand" />
          </div>

          {/* ── Col 2: Name, description, CTA ── */}
          <div className="flex flex-col gap-4">
            <h3 className="font-marcellus text-[1.35rem] lg:text-[1.6rem] leading-tight tracking-[-0.02em] text-obsidian">
              {company.name}
            </h3>
            <p className="font-inter text-[14px] lg:text-[15px] leading-relaxed text-slateMuted max-w-lg">
              {company.description}
            </p>
            {/* View Company CTA */}
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-2 w-fit mt-1
                font-robotoMono text-[10px] uppercase tracking-[0.16em]
                text-brand border-b border-brand/30
                hover:border-brand pb-0.5
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm
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
            grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1
            gap-x-8 gap-y-5
            lg:border-l lg:border-hairline lg:pl-8
          ">
            <MetaItem label="Industry"    value={company.industry}   />
            <MetaItem label="Founded"     value={company.founded}    />
            <MetaItem label="Focus Areas" value={company.focusAreas} />
            <MetaItem label="Website"     value={company.website}    isLink />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MetaItem({
  label,
  value,
  isLink = false,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-robotoMono text-[9px] uppercase tracking-[0.18em] text-slateMuted/60">
        {label}
      </span>
      {isLink ? (
        <a
          href={`https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-[13px] text-brand hover:text-brandHover transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="font-inter text-[13px] lg:text-[14px] text-obsidian leading-snug">
          {value}
        </span>
      )}
    </div>
  );
}
