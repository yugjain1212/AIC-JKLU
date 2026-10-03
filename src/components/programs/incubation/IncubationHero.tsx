'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import IncubationEcosystem from './IncubationEcosystem';

export default function IncubationHero() {
  return (
    <section className="relative w-full pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── Left Edge Vertical Brand Tag (Matching Reference Screenshot) ── */}
      <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-4 -rotate-90 origin-left select-none pointer-events-none z-20">
        <span className="font-robotoMono text-[13px] text-[#EB5725] font-bold">+</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#EB5725]" />
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">01</span>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:pl-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[580px]">
          
          {/* ── LEFT COLUMN: Editorial Typography & Actions ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center items-start z-10 py-4"
          >
            {/* Headline: Incubation Program. */}
            <h1 className="font-marcellus text-[56px] sm:text-[72px] md:text-[80px] lg:text-[88px] leading-[0.92] tracking-[-0.035em] text-[#121212] mb-6 sm:mb-7">
              Incubation
              <br />
              <span className="text-[#EB5725]">Program</span>.
            </h1>

            {/* Divider with Crosshair + */}
            <div className="flex items-center gap-3 w-full max-w-sm mb-6 sm:mb-7">
              <span className="font-robotoMono text-[12px] font-bold text-[#EB5725] leading-none">+</span>
              <div className="flex-1 h-[1px] bg-[#E4E4E0]" />
            </div>

            {/* Tagline */}
            <div className="mb-6 sm:mb-7">
              <p className="font-robotoMono text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#121212] leading-[1.6]">
                NURTURING STARTUPS.
                <br />
                SCALING INNOVATION.
              </p>
            </div>

            {/* Description */}
            <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.8] text-[#52525B] max-w-[420px] mb-8 sm:mb-10">
              Sector-agnostic incubation providing state-of-the-art infrastructure, funding opportunities, technical mentorship, and market connections.
            </p>
          </motion.div>

          {/* ── RIGHT COLUMN: Editorial Startup Ecosystem Journey ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex items-center justify-center lg:justify-end select-none w-full"
          >
            <IncubationEcosystem />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
