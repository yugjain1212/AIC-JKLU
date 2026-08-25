'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MediaPlaceholder from './MediaPlaceholder';

export default function LibraryHero() {
  return (
    <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden select-none">
      {/* ── Background Giant "MEMORIES" Watermark ── */}
      <div
        className="
          absolute top-28 sm:top-36 lg:top-44 inset-x-0
          flex items-center justify-center
          pointer-events-none select-none z-0 overflow-hidden
        "
        aria-hidden="true"
      >
        <span
          className="
            font-marcellus
            text-[clamp(5rem,15vw,13.5rem)]
            leading-none
            tracking-[0.14em] sm:tracking-[0.2em]
            text-[#121212]/[0.035]
            whitespace-nowrap uppercase
          "
        >
          MEMORIES
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Editorial Copy ── */}
          <div className="flex flex-col items-start max-w-lg">
            {/* Eyebrow Tag */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-robotoMono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand mb-2.5"
            >
              LIBRARY
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="
                font-marcellus
                text-[clamp(2.7rem,5vw,4.6rem)]
                leading-[1.04]
                tracking-[-0.03em]
                text-obsidian
              "
            >
              The Archive
              <br />
              of <span className="text-brand">Impact.</span>
            </motion.h1>

            {/* Orange Accent Dash */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 28 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="h-[2.5px] bg-brand rounded-full my-4"
            />

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="font-robotoMono text-[12.5px] sm:text-[13px] leading-relaxed text-slateMuted mb-6"
            >
              Events. People. Ideas.
              <br />
              Conversations. Moments.
              <br />
              A visual journey of everything
              <br />
              happening around AIC-JKLU.
            </motion.p>

            {/* Explore CTA */}
            <motion.a
              href="#archive-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="
                group inline-flex items-center gap-2
                font-robotoMono text-[11px] font-semibold uppercase tracking-[0.18em]
                text-brand hover:text-brandHover
                transition-colors duration-200
                cursor-pointer
              "
            >
              <span className="border-b border-brand/40 pb-0.5 group-hover:border-brand">
                EXPLORE THE ARCHIVE
              </span>
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>
          </div>

          {/* ── Right Column: Scrapbook / Polaroid Visual Collage ── */}
          <div className="relative w-full min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex items-center justify-center">
            {/* Dot Grid Decoration */}
            <div className="absolute top-2 left-10 opacity-30 pointer-events-none">
              <div className="grid grid-rows-4 grid-cols-6 gap-2">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-brand/50" />
                ))}
              </div>
            </div>

            {/* 1. Left Tilted Booklet Card ("Building Ideas Together") */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              whileHover={{ rotate: -3, scale: 1.03 }}
              className="
                absolute left-0 sm:left-4 top-14 sm:top-16 z-10
                w-[160px] sm:w-[200px] h-[190px] sm:h-[230px]
                bg-[#F7F2E8] border border-black/10 rounded-xl
                shadow-[0_16px_36px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]
                p-4 sm:p-5 flex flex-col justify-between
                cursor-pointer
              "
            >
              {/* Spine Accent */}
              <div className="absolute left-0 inset-y-0 w-3 bg-[#E5DDCF] rounded-l-xl border-r border-black/5" />
              
              <div className="pl-3">
                <span className="font-robotoMono text-[8.5px] uppercase tracking-[0.2em] text-slateMuted">
                  NOTEBOOK
                </span>
              </div>

              <div className="pl-3 my-auto">
                <p className="font-serif italic text-[1.45rem] sm:text-[1.75rem] leading-[1.12] text-obsidian tracking-tight">
                  Building
                  <br />
                  Ideas
                  <br />
                  <span className="text-brand not-italic font-normal">Together</span>
                </p>
              </div>

              <div className="pl-3">
                <div className="w-6 h-0.5 bg-brand/50 rounded-full" />
              </div>
            </motion.div>

            {/* 2. Main Top Photo Card (with Orange Tape at Top) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="
                relative z-20
                w-[240px] sm:w-[320px] lg:w-[360px] h-[170px] sm:h-[220px] lg:h-[240px]
                bg-white p-2.5 sm:p-3.5 pb-4 sm:pb-5 rounded-lg
                border border-black/[0.08]
                shadow-[0_20px_45px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.05)]
                ml-16 sm:ml-24 -mt-10 sm:-mt-12
              "
            >
              {/* Orange Tape on Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-brand/85 rounded-sm shadow-sm rotate-[-1deg] z-30" />

              {/* Photo Area */}
              <div className="w-full h-full rounded overflow-hidden">
                <MediaPlaceholder src="/library/aaraohan_panel.png" alt="AIC Aarohan Panel" priority />
              </div>
            </motion.div>

            {/* 3. Circular Postal/Archive Stamp Watermark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
              animate={{ opacity: 0.95, scale: 1, rotate: 12 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute right-0 sm:right-6 top-0 sm:top-2 z-30 pointer-events-none select-none"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-black/35 flex items-center justify-center p-1.5">
                <div className="w-full h-full rounded-full border border-black/30 flex flex-col items-center justify-center text-center p-1 bg-white/40 backdrop-blur-[1px]">
                  <span className="font-robotoMono text-[7px] sm:text-[7.5px] uppercase tracking-[0.2em] text-black/75 font-bold">
                    AIC-JKLU ARCHIVE
                  </span>
                  <div className="w-7 h-7 my-0.5 relative flex items-center justify-center">
                    <Image
                      src="/library/aic-origami-logo.png"
                      alt="AIC Logo"
                      width={28}
                      height={28}
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  <span className="font-robotoMono text-[6.5px] tracking-[0.16em] text-black/60 font-semibold">
                    ★ EST. 2018 ★
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 4. Bottom Right Tilted Polaroid Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="
                absolute right-2 sm:right-6 bottom-0 sm:bottom-4 z-25
                w-[180px] sm:w-[240px] h-[135px] sm:h-[180px]
                bg-white p-2 sm:p-2.5 pb-6 sm:pb-8 rounded-lg
                border border-black/[0.08]
                shadow-[0_18px_40px_rgba(0,0,0,0.1),0_3px_10px_rgba(0,0,0,0.04)]
                cursor-pointer
              "
            >
              <div className="w-full h-full rounded overflow-hidden">
                <MediaPlaceholder src="/library/aic_visit.png" alt="AIC Campus Tour" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
