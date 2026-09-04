'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CompaniesHeroIllustration from './CompaniesHeroIllustration';

// ── Animated counter hook ──────────────────────────────────────
function useCounter(target: number, duration = 1200, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return value;
}

// ── Stat item ─────────────────────────────────────────────────
interface StatProps {
  value: string;       // e.g. "48+", "12", "2018—26"
  label: string;
  numeric: number;     // the number part for the counter
  suffix?: string;     // "+", "—26", etc.
  started: boolean;
  delay?: number;
}

function AnimatedStat({ value, label, numeric, suffix = '', started, delay = 0 }: StatProps) {
  const count = useCounter(numeric, 1100, started);
  const isRange = value.includes('—');

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div className="font-marcellus text-[32px] sm:text-[40px] text-[#121212] leading-none mb-1.5">
        {started ? (isRange ? `${count}—26` : `${count}${suffix}`) : value}
      </div>
      <div className="font-robotoMono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#71717A]">
        {label}
      </div>
    </motion.div>
  );
}

// ── Main hero ─────────────────────────────────────────────────
export default function CompaniesHero() {
  const editorialEase = [0.22, 1, 0.36, 1] as const;
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section className="relative w-full pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">

      {/* ── Subtle dot-grid background texture ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #52525B18 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)',
        }}
      />

      {/* ── Left Edge Vertical Brand Tag ── */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: editorialEase, delay: 0.6 }}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-4 -rotate-90 origin-left select-none pointer-events-none z-20"
      >
        <span className="font-robotoMono text-[13px] text-[#EB5725] font-bold">+</span>
        <span className="font-robotoMono text-[10px] font-bold tracking-[0.32em] text-[#71717A] uppercase whitespace-nowrap">
          INNOVATION PORTFOLIO
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#EB5725]" />
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">48+</span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:pl-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[540px]">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start z-10 py-4">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: editorialEase, delay: 0.05 }}
              className="flex items-center gap-2.5 mb-5 sm:mb-6"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#121212]"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <span className="font-robotoMono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#121212]">
                COMPANIES
              </span>
            </motion.div>

            {/* Display Headline — word by word stagger */}
            <h1 className="font-marcellus text-[54px] sm:text-[68px] md:text-[78px] lg:text-[84px] leading-[0.94] tracking-[-0.035em] text-[#121212] mb-6 sm:mb-7 overflow-hidden">
              {['Ideas that', 'became'].map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: '60%' }}
                  animate={{ opacity: 1, y: '0%' }}
                  transition={{ duration: 0.65, ease: editorialEase, delay: 0.12 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                className="block text-[#EB5725]"
                initial={{ opacity: 0, y: '60%' }}
                animate={{ opacity: 1, y: '0%' }}
                transition={{ duration: 0.65, ease: editorialEase, delay: 0.36 }}
              >
                companies.
              </motion.span>
            </h1>

            {/* Animated divider */}
            <motion.div
              className="flex items-center gap-3 w-full max-w-sm mb-6 sm:mb-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="font-robotoMono text-[12px] font-bold text-[#EB5725] leading-none">+</span>
              <motion.div
                className="h-[1px] bg-[#E4E4E0]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: editorialEase, delay: 0.52 }}
                style={{ flex: 1 }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: editorialEase, delay: 0.42 }}
              className="font-robotoMono text-[12.5px] sm:text-[13.5px] leading-[1.8] text-[#52525B] max-w-[460px] mb-8 sm:mb-10"
            >
              Explore startups founded, incubated and supported through the AIC&#8209;JKLU ecosystem.
            </motion.p>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 sm:gap-10 pt-4 border-t border-[#E4E4E0] w-full max-w-[500px]"
            >
              <AnimatedStat
                value="48+"
                label="COMPANIES"
                numeric={48}
                suffix="+"
                started={statsInView}
                delay={0}
              />
              <AnimatedStat
                value="12"
                label="SECTORS"
                numeric={12}
                suffix=""
                started={statsInView}
                delay={0.1}
              />
              <AnimatedStat
                value="2018—26"
                label="ECOSYSTEM"
                numeric={2018}
                started={statsInView}
                delay={0.2}
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN: Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: editorialEase, delay: 0.15 }}
            className="lg:col-span-6 flex items-center justify-center lg:justify-end select-none w-full"
          >
            <CompaniesHeroIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
