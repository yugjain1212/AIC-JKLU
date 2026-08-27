'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import { ArrowRight, Users, Globe2, Handshake } from 'lucide-react';
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

export default function PartnersLogoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Unified section-level scroll progress for performant parallax orchestration
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 lg:py-28 overflow-hidden select-none bg-[#FBF7F0]"
    >
      {/* ── SUBTLE AMBIENT BACKGROUND ACCENTS ── */}
      {/* Curved Orange Arc Line (Bottom Left) */}
      <svg
        className="absolute -bottom-24 -left-24 w-[420px] h-[420px] pointer-events-none opacity-[0.14] -z-0"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" stroke="#EB5725" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="130" stroke="#121212" strokeWidth="0.8" strokeDasharray="3 4" />
        <circle cx="200" cy="200" r="80" stroke="#EB5725" strokeWidth="1" />
      </svg>

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* ── 2-COLUMN MAIN ECOSYSTEM SHOWCASE GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          
          {/* ==============================================================
              LEFT COLUMN: Editorial Heading, Stats, Watermark, and CTA
          =============================================================== */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-start">
            
            {/* 1. Eyebrow */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3 sm:mb-4"
            >
              <span className="w-5 h-[1.5px] bg-[#EB5725]" />
              <p className="font-robotoMono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
                PARTNERS
              </p>
            </motion.div>

            {/* 2. Main Editorial Heading */}
            <motion.h2
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-marcellus text-[44px] sm:text-[54px] lg:text-[60px] leading-[1.0] tracking-[-0.035em] text-[#121212] mb-5 sm:mb-6"
            >
              Our
              <br />
              <span className="text-[#EB5725]">Partners</span>
            </motion.h2>

            {/* 3. Supporting Description */}
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="font-robotoMono text-[12.5px] sm:text-[13.5px] leading-[1.8] text-[#52525B] max-w-[340px] mb-8 sm:mb-10"
            >
              A diverse network of partners who share our vision of impact, innovation and inclusive growth.
            </motion.p>

            {/* 4. Three Statistics with Orange Accents */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="w-full space-y-4 mb-8 sm:mb-10"
            >
              {STATS_DATA.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="
                      flex items-center gap-3.5
                      p-3 sm:p-3.5
                      rounded-[14px]
                      bg-white/45 hover:bg-white/75
                      backdrop-blur-[2px]
                      border border-[#121212]/[0.05]
                      transition-colors duration-200
                      group
                    "
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-marcellus text-[22px] sm:text-[24px] text-[#121212] font-semibold leading-none">
                        {stat.value}
                      </span>
                      <span className="font-robotoMono text-[11px] sm:text-[11.5px] text-[#52525B] font-medium tracking-wide uppercase">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* 5. CTA Button: BECOME A PARTNER → */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 sm:mb-12"
            >
              <Link
                href="/apply?type=partner"
                className="
                  group inline-flex items-center gap-3
                  px-6 py-3.5
                  rounded-full
                  border border-[#EB5725]
                  bg-transparent hover:bg-[#EB5725]
                  text-[#EB5725] hover:text-white
                  font-robotoMono text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.16em]
                  shadow-sm hover:shadow-[0_8px_20px_rgba(235,87,37,0.22)]
                  transition-all duration-300
                "
              >
                <span>BECOME A PARTNER</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* 6. Oversized Subtle Watermark & Narrative Stamp */}
            <div className="relative w-full pt-4 overflow-hidden select-none pointer-events-none" aria-hidden="true">
              {/* Oversized TOGETHER typography */}
              <div className="font-marcellus text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[#121212]/[0.035] tracking-[0.12em] uppercase font-light -ml-1">
                TOGETHER
              </div>
              {/* Small micro-copy beneath */}
              <p className="font-robotoMono text-[9.5px] font-bold text-[#121212]/40 tracking-[0.22em] uppercase mt-1">
                BUILDING THE FUTURE,
                <br />
                TOGETHER.
              </p>
            </div>

          </div>

          {/* ==============================================================
              RIGHT COLUMN: 4 Stacked Category Panels
          =============================================================== */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-7 lg:gap-8 w-full">
            {PARTNER_GROUPS.map((group, index) => (
              <PartnerCategoryPanel
                key={group.id}
                group={group}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
