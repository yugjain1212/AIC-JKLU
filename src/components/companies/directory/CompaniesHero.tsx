'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import CompaniesHeroIllustration from './CompaniesHeroIllustration';

const E = [0.22, 1, 0.36, 1] as const;

function useCounter(target: number, duration = 1100, started = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!started) return;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setV(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return v;
}

function Stat({
  numeric,
  suffix,
  label,
  started,
  delay = 0,
}: {
  numeric: number;
  suffix: string;
  label: string;
  started: boolean;
  delay?: number;
}) {
  const count = useCounter(numeric, 1100, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: E, delay }}
      className="flex flex-col gap-1"
    >
      <span
        className="font-marcellus text-[28px] sm:text-[32px] leading-none tracking-[-0.02em] text-[#121212] whitespace-nowrap"
      >
        {started ? `${count}${suffix}` : `${numeric}${suffix}`}
      </span>
      <span className="font-robotoMono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#71717A]">
        {label}
      </span>
    </motion.div>
  );
}

export default function CompaniesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useInView(statsRef, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const illustrationY = useTransform(scrollYProgress, [0, 1], ['0px', '-30px']);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full overflow-hidden bg-[#FBF7F0]
        pt-10 sm:pt-12 lg:pt-14
        pb-14 sm:pb-18 lg:pb-20
        border-b border-[#E4E4E0]/80
        min-h-[70vh] lg:min-h-[78vh]
        flex items-center
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #52525B0A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage:
            'radial-gradient(ellipse 60% 75% at 75% 50%, #000 0%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 75% at 75% 50%, #000 0%, transparent 85%)',
        }}
      />

      <div className="relative z-10 w-full mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-0 items-center">

          <div className="flex flex-col items-start justify-center lg:pr-12 xl:pr-16 max-w-[540px]">

            <motion.div
              className="flex items-center gap-2.5 mb-6 sm:mb-7"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: E, delay: 0 }}
            >
              <motion.span
                className="w-[7px] h-[7px] rounded-full bg-[#121212] shrink-0"
                animate={prefersReduced ? {} : { scale: [1, 1.5, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              />
              <span className="font-robotoMono text-[10.5px] font-bold uppercase tracking-[0.26em] text-[#121212]">
                Companies
              </span>
            </motion.div>

            <h1
              className="
                font-marcellus
                text-[clamp(64px,6vw,100px)]
                leading-[0.94] tracking-[-0.035em]
                text-[#121212]
                mb-6 sm:mb-7
                max-w-[540px]
              "
            >
              {['Ideas that', 'became'].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.62, ease: E, delay: 0.06 + i * 0.11 }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-[#EB5725]"
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.62, ease: E, delay: 0.28 }}
                >
                  companies.
                </motion.span>
              </span>
            </h1>

            <motion.div
              className="flex items-center gap-2.5 mb-6 w-full max-w-[420px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <span className="font-robotoMono text-[11px] text-[#EB5725] font-bold leading-none shrink-0">+</span>
              <motion.div
                className="h-px bg-[#E4E4E0] flex-1"
                initial={{ scaleX: 0, originX: '0%' }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.65, ease: E, delay: 0.38 }}
              />
            </motion.div>

            <motion.p
              className="
                font-robotoMono text-[12.5px] sm:text-[13px]
                leading-[1.85] text-[#52525B]
                max-w-[440px] mb-8 sm:mb-10
              "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: E, delay: 0.15 }}
            >
              Explore startups founded, incubated and supported through the AIC&#8209;JKLU ecosystem.
            </motion.p>

            <div
              ref={statsRef}
              className="flex items-start gap-0 pt-5 border-t border-[#E4E4E0] w-full max-w-[420px]"
            >
              <div className="flex-1 pr-4">
                <Stat numeric={48} suffix="+" label="Companies" started={statsVisible} delay={0.3} />
              </div>

              <div className="self-stretch w-px bg-[#E4E4E0] mx-2 shrink-0" />

              <div className="flex-1 px-4">
                <Stat numeric={12} suffix="" label="Sectors" started={statsVisible} delay={0.38} />
              </div>

              <div className="self-stretch w-px bg-[#E4E4E0] mx-2 shrink-0" />

              <motion.div
                className="flex-1 pl-4 flex flex-col gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: E, delay: 0.46 }}
              >
                <span
                  className="
                    font-marcellus text-[28px] sm:text-[32px] leading-none
                    tracking-[-0.02em] text-[#121212] whitespace-nowrap
                  "
                >
                  2018&#8212;26
                </span>
                <span className="font-robotoMono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-[0.2em] text-[#71717A]">
                  Ecosystem
                </span>
              </motion.div>
            </div>

          </div>

          <motion.div
            className="
              relative w-full
              h-[360px] sm:h-[420px] lg:h-[500px] xl:h-[540px]
              flex items-center justify-center
            "
            style={!prefersReduced && typeof window !== 'undefined' && window.innerWidth >= 1024 ? { y: illustrationY } : {}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: E, delay: 0.2 }}
          >
            <CompaniesHeroIllustration prefersReducedMotion={prefersReduced} />
          </motion.div>

        </div>
      </div>

      <motion.div
        className="
          absolute bottom-0 inset-x-0
          flex items-center gap-4
          px-6 sm:px-10 lg:px-14 pb-4
          pointer-events-none
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EB5725]" />
          <span className="font-robotoMono text-[9px] font-bold uppercase tracking-[0.22em] text-[#52525B]">
            Featured Companies
          </span>
        </div>
        <div className="flex-1 max-w-[160px] h-px bg-gradient-to-r from-[#E4E4E0] to-transparent" />
      </motion.div>
    </section>
  );
}