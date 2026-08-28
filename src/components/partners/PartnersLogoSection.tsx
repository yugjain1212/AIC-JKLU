'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
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
    value: '120+',
    label: 'Partners',
    icon: Users,
  },
  {
    id: 2,
    value: '20+',
    label: 'Countries',
    icon: Globe2,
  },
  {
    id: 3,
    value: '15+',
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

export default function PartnersLogoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── BACKGROUND AMBIENT CONCENTRIC ARCS (Bottom Left) ── */}
      <svg
        className="absolute -bottom-16 -left-16 w-[380px] h-[380px] pointer-events-none opacity-[0.15] -z-0"
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
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-5 h-[1.5px] bg-[#EB5725]" />
              <p className="font-robotoMono text-[11px] font-bold uppercase tracking-[0.22em] text-[#EB5725]">
                PARTNERS
              </p>
            </motion.div>

            {/* 2. Headline */}
            <motion.h2
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-marcellus text-[44px] sm:text-[50px] lg:text-[54px] leading-[0.98] tracking-[-0.03em] text-[#121212] mb-4 sm:mb-5"
            >
              Our
              <br />
              <span className="text-[#EB5725]">Partners</span>
            </motion.h2>

            {/* 3. Description */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-robotoMono text-[12px] sm:text-[12.5px] leading-[1.75] text-[#52525B] max-w-[280px] mb-7 sm:mb-8"
            >
              A diverse network of partners who share our vision of impact, innovation and inclusive growth.
            </motion.p>

            {/* 4. Three Statistics Rows */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="w-full space-y-3 mb-8"
            >
              {STATS_DATA.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] shrink-0 border border-[#EB5725]/20 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] font-semibold leading-tight">
                        {stat.value}
                      </span>
                      <span className="font-robotoMono text-[10.5px] text-[#52525B] font-medium tracking-wide uppercase">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* 5. CTA Button: BECOME A PARTNER → */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <Link
                href="/apply?type=partner"
                className="
                  group inline-flex items-center gap-2.5
                  px-5 py-2.5 sm:px-6 sm:py-3
                  rounded-full
                  border border-[#EB5725]
                  bg-transparent hover:bg-[#EB5725]
                  text-[#EB5725] hover:text-white
                  font-robotoMono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.16em]
                  shadow-sm hover:shadow-[0_6px_16px_rgba(235,87,37,0.2)]
                  transition-all duration-200
                "
              >
                <span>BECOME A PARTNER</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* 6. Dot Matrix Accent */}
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
          <div className="lg:col-span-9 xl:col-span-9 flex flex-col gap-4 sm:gap-4.5 w-full">
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
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                  className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4 first:pl-0 last:pr-0 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] shrink-0 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-robotoMono text-[11px] sm:text-[11.5px] font-bold text-[#121212] tracking-wider uppercase mb-1">
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
