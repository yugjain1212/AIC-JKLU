'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function IncubationHero() {
  return (
    <section className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── Left Edge Vertical Brand Tag ── */}
      <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-3 -rotate-90 origin-left select-none pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-[#EB5725]" />
        <span className="font-robotoMono text-[10px] font-bold tracking-[0.28em] text-[#71717A] uppercase whitespace-nowrap">
          EMPOWERING RURAL INDIA
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#121212]" />
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">01</span>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:pl-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── LEFT COLUMN: Editorial Typography & Actions ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center items-start z-10"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
                AIC PROGRAM
              </span>
              <div className="w-8 h-[1.5px] bg-[#EB5725]" />
            </div>

            {/* Headline: Only "Incubation Program." */}
            <h1 className="font-marcellus text-[54px] sm:text-[68px] md:text-[76px] lg:text-[84px] leading-[0.92] tracking-[-0.035em] text-[#121212] mb-6 sm:mb-7">
              Incubation
              <br />
              <span className="text-[#EB5725]">Program</span>.
            </h1>

            {/* Tagline */}
            <div className="flex items-start gap-2 mb-6">
              <span className="font-robotoMono text-[11px] font-bold text-[#EB5725] leading-snug">- +</span>
              <p className="font-robotoMono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#121212] leading-snug">
                NURTURING STARTUPS.
                <br />
                SCALING INNOVATION.
              </p>
            </div>

            {/* Description */}
            <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.8] text-[#52525B] max-w-md mb-8 sm:mb-10">
              Sector-agnostic incubation providing state-of-the-art infrastructure, funding opportunities, technical mentorship, and market connections.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="https://www.f6s.com/saip-2026/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2
                  bg-[#EB5725] hover:bg-[#C84214] text-white
                  px-6 py-3.5 rounded-lg
                  font-robotoMono text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.16em]
                  shadow-[0_4px_16px_rgba(235,87,37,0.25)] hover:shadow-[0_6px_22px_rgba(235,87,37,0.35)]
                  transition-all duration-200
                "
              >
                <span>APPLY NOW</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#benefits"
                className="
                  group inline-flex items-center gap-2.5
                  font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em]
                  text-[#121212] hover:text-[#EB5725]
                  transition-colors duration-200
                "
              >
                <span>EXPLORE BENEFITS</span>
                <div className="w-7 h-7 rounded-full border border-[#EB5725] flex items-center justify-center text-[#EB5725] group-hover:bg-[#EB5725] group-hover:text-white transition-colors duration-200">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Smooth Borderless LRC Architectural Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex items-center justify-center lg:justify-end select-none"
          >
            <div className="relative w-full max-w-[560px] aspect-[16/11] sm:aspect-[4/3] flex items-center justify-center overflow-hidden">
              {/* Smooth Borderless Feathered LRC Illustration */}
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,1) 42%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.25) 78%, rgba(0,0,0,0) 96%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,1) 42%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.25) 78%, rgba(0,0,0,0) 96%)',
                }}
              >
                <Image
                  src="/library/lrc1.png"
                  alt="AIC-JKLU Incubation Program Infrastructure"
                  fill
                  priority
                  className="object-cover filter contrast-[1.03] brightness-[1.01]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
