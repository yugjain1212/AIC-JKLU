'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CompaniesHeroIllustration from './CompaniesHeroIllustration';

function useCounter(
  target: number,
  duration = 1100,
  started = false,
  reducedMotion = false
) {
  const [value, setValue] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (!started) return;

    if (reducedMotion) {
      setValue(target);
      return;
    }

    let frame = 0;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started, target, duration, reducedMotion]);

  return value;
}

interface StatProps {
  target: number;
  suffix?: string;
  label: string;
  started: boolean;
  delay?: number;
  reducedMotion?: boolean;
}

function Stat({
  target,
  suffix = '',
  label,
  started,
  delay = 0,
  reducedMotion = false,
}: StatProps) {
  const value = useCounter(
    target,
    1000,
    started,
    reducedMotion
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={started ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-w-0"
    >
      <div className="font-marcellus text-[34px] sm:text-[40px] lg:text-[44px] leading-none tracking-[-0.03em] text-[#121212] whitespace-nowrap">
        {value}
        {suffix}
      </div>

      <div className="mt-2 font-robotoMono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#71717A] whitespace-nowrap">
        {label}
      </div>
    </motion.div>
  );
}

export default function CompaniesHero() {
  const statsRef = useRef<HTMLDivElement>(null);

  const statsInView = useInView(statsRef, {
    once: true,
    margin: '-80px',
  });

  const editorialEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#FBF7F0]
        border-b border-[#E4E4E0]
      "
    >
      {/* Extremely subtle editorial texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #121212 0.7px, transparent 0.7px)',
          backgroundSize: '32px 32px',
          maskImage:
            'linear-gradient(to bottom, black 0%, transparent 88%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, transparent 88%)',
        }}
      />

      <div
        className="
          relative z-10 mx-auto w-full
          max-w-[1480px]
          px-6 sm:px-10 lg:px-14 xl:px-20
        "
      >
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[0.82fr_1.18fr]
            items-center
            gap-8 lg:gap-4
            min-h-[650px]
            lg:min-h-[700px]
            py-14 sm:py-16 lg:py-12
          "
        >
          {/* =====================================================
              LEFT — EDITORIAL CONTENT
          ====================================================== */}
          <div className="relative z-20 flex flex-col items-start">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: editorialEase,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#121212]" />

              <span className="font-robotoMono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.26em] text-[#121212]">
                COMPANIES
              </span>
            </motion.div>

            {/* Heading */}
            <h1
              className="
                font-marcellus
                text-[58px]
                sm:text-[70px]
                md:text-[78px]
                lg:text-[76px]
                xl:text-[88px]
                leading-[0.91]
                tracking-[-0.045em]
                text-[#121212]
                max-w-[560px]
              "
            >
              <motion.span
                className="block overflow-hidden"
                initial={{ opacity: 0, y: '65%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  ease: editorialEase,
                  delay: 0.12,
                }}
              >
                Ideas that
              </motion.span>

              <motion.span
                className="block overflow-hidden"
                initial={{ opacity: 0, y: '65%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  ease: editorialEase,
                  delay: 0.22,
                }}
              >
                became
              </motion.span>

              <motion.span
                className="block overflow-hidden text-[#EB5725]"
                initial={{ opacity: 0, y: '65%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  ease: editorialEase,
                  delay: 0.32,
                }}
              >
                companies.
              </motion.span>
            </h1>

            {/* Editorial divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.55,
                ease: editorialEase,
              }}
              className="
                mt-8 mb-7
                flex w-full max-w-[470px]
                origin-left items-center gap-3
              "
            >
              <span className="font-robotoMono text-[11px] font-bold text-[#EB5725]">
                +
              </span>

              <div className="h-px flex-1 bg-[#E4E4E0]" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.55,
                ease: editorialEase,
              }}
              className="
                max-w-[465px]
                font-robotoMono
                text-[12.5px]
                sm:text-[13px]
                leading-[1.85]
                text-[#52525B]
              "
            >
              Explore startups founded, incubated and supported
              through the AIC-JKLU ecosystem.
            </motion.p>

            {/* Stats */}
            <div
              ref={statsRef}
              className="
                mt-9
                grid grid-cols-3
                w-full max-w-[530px]
                border-t border-[#E4E4E0]
                pt-5
              "
            >
              <Stat
                target={48}
                suffix="+"
                label="COMPANIES"
                started={statsInView}
                delay={0}
              />

              <div className="border-l border-[#E4E4E0] pl-5 sm:pl-7">
                <Stat
                  target={12}
                  label="SECTORS"
                  started={statsInView}
                  delay={0.1}
                />
              </div>

              <div className="border-l border-[#E4E4E0] pl-5 sm:pl-7">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={
                    statsInView
                      ? { opacity: 1, y: 0 }
                      : undefined
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: editorialEase,
                  }}
                >
                  <div className="font-marcellus text-[31px] sm:text-[38px] lg:text-[42px] leading-none tracking-[-0.035em] text-[#121212] whitespace-nowrap">
                    2018—2026
                  </div>

                  <div className="mt-2 font-robotoMono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#71717A]">
                    ECOSYSTEM
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — ARCHITECTURAL ECOSYSTEM
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.18,
              ease: editorialEase,
            }}
            className="
              relative z-10
              flex min-h-[430px]
              items-center justify-center
              lg:min-h-[620px]
            "
          >
            <CompaniesHeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Section marker */}
      <div
        className="
          absolute bottom-5 left-6
          sm:left-10 lg:left-14 xl:left-20
          flex items-center gap-3
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#EB5725]" />

        <span className="font-robotoMono text-[9px] font-bold uppercase tracking-[0.22em] text-[#71717A]">
          FEATURED COMPANIES
        </span>

        <span className="h-px w-20 bg-[#E4E4E0]" />
      </div>
    </section>
  );
}