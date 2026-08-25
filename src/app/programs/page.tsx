'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ProgramCard from '@/components/programs/ProgramCard';
import { PROGRAMS } from '@/data/programs';

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      <div>
        {/* Sticky Navbar */}
        <Navbar />

        {/* ============================================================
            1. HERO SECTION (Programs that power possibilities)
        ============================================================= */}
        <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 border-b border-[#E4E4E0]/80 overflow-hidden">
          <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-14 items-center">
              
              {/* ── LEFT COLUMN: Headline & Description ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 flex flex-col justify-center"
              >
                {/* Eyebrow Label */}
                <p className="font-robotoMono text-xs font-semibold uppercase tracking-[0.25em] text-[#EB5725] mb-5 sm:mb-6">
                  Our Programs
                </p>

                {/* Editorial Heading */}
                <h1 className="font-marcellus text-[46px] sm:text-[58px] md:text-[68px] lg:text-[74px] leading-[0.97] tracking-[-0.035em] text-[#121212]">
                  Programs
                  <br />
                  that power
                  <br />
                  <span className="text-[#EB5725]">possibilities.</span>
                </h1>

                {/* Small Orange Divider */}
                <div className="h-[2px] w-14 bg-[#EB5725]/80 my-6 sm:my-8" />

                {/* Description */}
                <p className="font-robotoMono text-[14.5px] sm:text-[15.5px] leading-[1.8] text-[#52525B] max-w-md">
                  Curated initiatives designed to nurture ideas, accelerate growth
                  and create lasting impact.
                </p>

                {/* Explore Action Link */}
                <div className="pt-6 sm:pt-7">
                  <a
                    href="#programs-grid"
                    className="group inline-flex items-center gap-2 font-robotoMono text-[12.5px] sm:text-[13.5px] font-bold uppercase tracking-[0.16em] text-[#EB5725] transition-colors duration-200 hover:text-[#C84214] cursor-pointer"
                  >
                    <span>EXPLORE ALL PROGRAMS</span>
                    <span className="transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* ── RIGHT COLUMN: Giant Outline '04' & Stacked Tagline ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 flex items-center justify-start lg:justify-end gap-6 sm:gap-10 select-none"
              >
                {/* Outline 04 */}
                <span
                  className="font-marcellus text-[130px] sm:text-[180px] md:text-[210px] xl:text-[230px] leading-none tracking-[-0.04em] text-[#EB5725]/30 font-thin"
                  style={{
                    WebkitTextStroke: '1.5px #EB5725',
                    WebkitTextFillColor: 'transparent',
                  }}
                  aria-hidden="true"
                >
                  04
                </span>

                {/* Stacked Tagline */}
                <div className="space-y-1 font-robotoMono text-[11px] sm:text-[12.5px] font-bold uppercase tracking-[0.18em]">
                  <p className="text-[#121212]">PROGRAMS.</p>
                  <p className="text-[#121212]">ONE MISSION.</p>
                  <p className="text-[#EB5725]">ENDLESS IMPACT.</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ============================================================
            2. MAIN 2x2 PROGRAMS GRID
        ============================================================= */}
        <section id="programs-grid" className="relative w-full pt-14 sm:pt-20 pb-20 sm:pb-28">
          <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9 lg:gap-10 items-stretch">
              {PROGRAMS.map((program, index) => (
                <ProgramCard key={program.id} program={program} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            3. BOTTOM EDITORIAL SIGNATURE
        ============================================================= */}
        <section className="pb-24 sm:pb-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Orange Motif Bird / Wing Emblem */}
            <div className="mb-4 text-[#EB5725]" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16L6 19.5L7.5 13.5L3 9L9 8L12 2Z" opacity="0.85" />
              </svg>
            </div>

            <h2 className="font-marcellus text-[26px] sm:text-[32px] md:text-[36px] text-[#121212] tracking-[-0.02em] leading-tight">
              Empowering innovators.
              <br />
              Building the future.
            </h2>

            <div className="h-[2px] w-12 bg-[#EB5725] mt-5 rounded-full" />
          </motion.div>
        </section>

      </div>
    </div>
  );
}
