'use client';

import { memo, useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Users,
  Globe2,
  Handshake,
  Network,
  TrendingUp,
  Lightbulb,
  Globe,
} from 'lucide-react';
import { PARTNER_GROUPS } from '@/data/partners';
import PartnerCategoryPanel from './PartnerCategoryPanel';

const STATS_DATA = [
  {
    id: 1,
    target: 120,
    suffix: '+',
    label: 'Partners',
    icon: Users,
  },
  {
    id: 2,
    target: 20,
    suffix: '+',
    label: 'Countries',
    icon: Globe2,
  },
  {
    id: 3,
    target: 15,
    suffix: '+',
    label: 'Ecosystem Enablers',
    icon: Handshake,
  },
];

const FEATURES_DATA = [
  {
    id: 1,
    title: 'STRONG NETWORK',
    description: 'Connect with a wide network of innovators and changemakers.',
    icon: Network,
  },
  {
    id: 2,
    title: 'MUTUAL GROWTH',
    description: 'Grow together through collaboration and knowledge exchange.',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'INNOVATION IMPACT',
    description: 'Enable solutions that create real social and economic impact.',
    icon: Lightbulb,
  },
  {
    id: 4,
    title: 'GLOBAL REACH',
    description: 'Expand your impact across regions, sectors and communities.',
    icon: Globe,
  },
];

/* ── STATS NUMERICAL ANIMATED COUNTER ── */
const StatCounter = memo(function StatCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      if (ref.current) ref.current.textContent = `${target}${suffix}`;
      return;
    }

    const node = ref.current;
    if (!node) return;

    let animId: number;
    const start = 0;
    const end = target;
    const duration = 1000; // ms
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start + (end - start) * ease);

      if (node) {
        node.textContent = `${current}${suffix}`;
      }

      if (progress < 1) {
        animId = requestAnimationFrame(update);
      } else {
        if (node) node.textContent = `${end}${suffix}`;
      }
    };

    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [inView, target, suffix, prefersReducedMotion]);

  return (
    <span
      ref={ref}
      className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] font-semibold leading-tight"
    >
      {prefersReducedMotion ? `${target}${suffix}` : `0${suffix}`}
    </span>
  );
});

export default function PartnersLogoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── BACKGROUND AMBIENT CONCENTRIC ARCS (Bottom Left) ── */}
      <svg
        className="absolute -bottom-16 -left-16 w-[380px] h-[380px] pointer-events-none -z-0 opacity-15"
        viewBox="0 0 380 380"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="0" cy="380" r="340" stroke="#EB5725" strokeWidth="1.2" strokeDasharray="4 6" />
        <circle cx="0" cy="380" r="260" stroke="#121212" strokeWidth="0.8" strokeDasharray="3 4" />
        <circle cx="0" cy="380" r="180" stroke="#EB5725" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="0" cy="380" r="100" stroke="#121212" strokeWidth="0.8" />
      </svg>

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* ── TOP BANNER: POWERED BY PARTNERS. DRIVEN BY IMPACT. ── */}
        <div className="hidden lg:flex items-center justify-end gap-4 mb-6">
          <div className="w-24 h-px bg-[#EB5725]/30" />
          <span className="font-robotoMono text-[11px] font-bold tracking-[0.22em] text-[#EB5725] uppercase">
            POWERED BY PARTNERS. DRIVEN BY IMPACT.
          </span>
          <div className="w-48 h-px bg-[#EB5725]/30" />
        </div>

        {/* ── MAIN 2-COLUMN SECTION GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-start">
          
          {/* ==============================================================
              LEFT COLUMN: Editorial Heading, Stats, CTA, and Decor
          =============================================================== */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start lg:sticky lg:top-24">
            
            {/* 1. Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#EB5725]" />
              <p className="font-robotoMono text-[11px] font-bold uppercase tracking-[0.22em] text-[#EB5725]">
                PARTNERS
              </p>
            </div>

            {/* 2. Headline */}
            <h2 className="font-marcellus text-[44px] sm:text-[50px] lg:text-[54px] leading-[0.98] tracking-[-0.03em] text-[#121212] mb-4 sm:mb-5">
              Our
              <br />
              <span className="text-[#EB5725]">Partners</span>
            </h2>

            {/* 3. Description */}
            <p className="font-robotoMono text-[12px] sm:text-[12.5px] leading-[1.75] text-[#52525B] max-w-[280px] mb-7 sm:mb-8">
              A diverse network of partners who share our vision of impact, innovation and inclusive growth.
            </p>

            {/* 4. Three Statistics Rows with Animated Counters */}
            <div className="w-full space-y-3 mb-8">
              {STATS_DATA.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="flex items-center gap-3.5 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] shrink-0 border border-[#EB5725]/20 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                    </div>
                    <div className="flex flex-col">
                      <StatCounter target={stat.target} suffix={stat.suffix} />
                      <span className="font-robotoMono text-[10.5px] text-[#52525B] font-medium tracking-wide uppercase">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 5. Dot Matrix Accent */}
            <div className="grid grid-cols-4 gap-2.5 opacity-40 mt-auto pt-2" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-[#EB5725]' : 'bg-[#D1C7B7]'}`}
                />
              ))}
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN: 4 Horizontal Category Blocks
          =============================================================== */}
          <div className="lg:col-span-9 xl:col-span-9 flex flex-col gap-4 sm:gap-4.5 w-full relative">
            {PARTNER_GROUPS.map((group, index) => (
              <PartnerCategoryPanel
                key={group.id}
                group={group}
                index={index}
              />
            ))}
          </div>

        </div>

        {/* ==============================================================
            BOTTOM 4-PILLAR FEATURES STRIP
        =============================================================== */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="
            mt-12 sm:mt-16
            rounded-[18px]
            bg-white/80
            backdrop-blur-sm
            border border-[#121212]/[0.07]
            p-6 sm:p-8
            shadow-[0_4px_20px_rgba(0,0,0,0.02)]
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#121212]/[0.06]">
            {FEATURES_DATA.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4 first:pl-0 last:pr-0 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] shrink-0 group-hover:scale-105 transition-transform duration-200 border border-[#EB5725]/10">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-robotoMono text-[11px] sm:text-[11.5px] font-bold text-[#121212] tracking-wider uppercase mb-1 group-hover:text-[#EB5725] transition-colors duration-200">
                      {feat.title}
                    </h3>
                    <p className="font-robotoMono text-[11px] sm:text-[11.5px] leading-[1.65] text-[#52525B]">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
