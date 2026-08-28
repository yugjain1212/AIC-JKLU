'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Landmark, WalletCards, Cpu, Globe2 } from 'lucide-react';
import { type PartnerGroupConfig } from '@/data/partners';
import PartnerLogo from './PartnerLogo';

const ICON_MAP = {
  Landmark,
  WalletCards,
  Cpu,
  Globe2,
};

interface PartnerCategoryPanelProps {
  group: PartnerGroupConfig;
  index: number;
}

export default function PartnerCategoryPanel({
  group,
  index,
}: PartnerCategoryPanelProps) {
  const IconComponent = ICON_MAP[group.iconName] || Globe2;
  const theme = group.theme;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, scale: 0.98 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.55,
        delay: prefersReducedMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5"
    >
      {/* ── 1. LEFT CATEGORY CARD / BADGE ── */}
      <motion.div
        whileHover={
          prefersReducedMotion
            ? {}
            : {
                y: -3,
                scale: 1.01,
                transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
              }
        }
        className={`
          w-full lg:w-[130px] xl:w-[140px] shrink-0
          ${theme.bgCard}
          border ${theme.badgeBorder}
          rounded-[14px]
          p-4 sm:p-5
          flex flex-col items-center justify-center text-center
          shadow-[0_2px_10px_rgba(0,0,0,0.02)]
          hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)]
          transition-all duration-200
          cursor-default
        `}
      >
        {/* Category Icon */}
        <div className={`${theme.iconColor} mb-2`}>
          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
        </div>

        {/* Category Title */}
        <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-extrabold text-[#121212] tracking-[0.14em] uppercase leading-snug max-w-[110px]">
          {group.title}
        </span>

        {/* Underline Indicator */}
        <div className={`w-5 h-[2px] ${theme.underlineColor} rounded-full mt-3.5`} />
      </motion.div>

      {/* ── 2. RIGHT LOGO GRID (6 Columns) ── */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-6 items-stretch">
        {group.partners.map((partner, pIndex) => (
          <PartnerLogo key={partner.id} partner={partner} index={pIndex} />
        ))}
      </div>
    </motion.div>
  );
}
