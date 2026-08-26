'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: '01',
    title: 'APPLICATION ROUND',
    description: 'Submit your innovative proposal and take the first step with us.',
  },
  {
    number: '02',
    title: 'EVALUATION ROUND',
    description: 'Expert review and rigorous selection to identify the most impactful ideas.',
  },
  {
    number: '03',
    title: 'PROGRAMME & MENTORSHIP',
    description: 'Workshops, mentoring and development to turn ideas into strong ventures.',
  },
  {
    number: '04',
    title: 'INFRASTRUCTURE',
    description: 'Access to state-of-the-art facilities and resources that accelerate innovation.',
  },
  {
    number: '05',
    title: 'EXPERT MENTORSHIP',
    description: '60+ hours of guidance from industry leaders who help you scale with confidence.',
  },
  {
    number: '06',
    title: 'GREENER TOMORROW',
    description: 'Contribute to sustainable development and build a better, greener future.',
  },
];

export default function ProgramTimeline() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        
        {/* =========================================================
            1. HEADER SECTION (Left: Typography | Right: LRC Architecture with Orange Sun)
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16 lg:mb-16">
          
          {/* ── Left Column: Eyebrow, Heading & Vertical Separator with Subtitle ── */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-robotoMono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] text-[#EB5725] mb-3 sm:mb-4"
            >
              THE JOURNEY
            </motion.p>

            {/* Main Header with Vertical Divider */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 lg:gap-10">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-marcellus text-[40px] sm:text-[50px] lg:text-[58px] leading-[0.98] tracking-[-0.035em] text-[#121212] shrink-0"
              >
                Timeline &
                <br />
                <span className="text-[#EB5725]">Benefits.</span>
              </motion.h2>

              {/* Vertical Hairline Divider */}
              <div className="hidden sm:block w-px h-20 bg-[#D8D2C6] shrink-0" />

              {/* Subtitle Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-robotoMono text-[13px] sm:text-[14px] leading-[1.75] text-[#52525B] max-w-[260px]"
              >
                A journey designed to nurture ideas, empower innovators and create lasting impact.
              </motion.p>
            </div>
          </div>

          {/* ── Right Column: Authentic LRC Building Illustration (lrc1.png) with Orange Sun ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-start lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] h-[160px] sm:h-[190px] flex items-end justify-end select-none">
              
              {/* Technical Reticle Guide Coordinate */}
              <div className="absolute top-2 left-6 font-mono text-[10px] text-[#71717A] opacity-40 pointer-events-none">
                +
              </div>

              {/* Rising Solid Brand Orange Sun in top-right */}
              <div className="absolute -top-3 right-4 sm:right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#EB5725] pointer-events-none z-0" />

              {/* LRC Architecture Illustration from public/library/lrc1.png */}
              <Image
                src="/library/lrc1.png"
                alt="JKLU LRC Building Architecture Illustration"
                width={480}
                height={220}
                className="relative z-10 w-full h-full object-contain object-bottom filter contrast-110 opacity-90"
                priority
              />
            </div>
          </motion.div>

        </div>


        {/* =========================================================
            2. GIANT WATERMARK TYPOGRAPHY (Background Ambient Layer)
        ========================================================== */}
        <div className="relative w-full">
          
          <div
            className="
              absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 w-full
              text-center pointer-events-none select-none z-0 overflow-hidden
            "
            aria-hidden="true"
          >
            <span
              className="
                font-marcellus
                text-[60px] sm:text-[95px] md:text-[120px] lg:text-[144px]
                tracking-[0.22em] text-[#121212] opacity-[0.035]
                whitespace-nowrap uppercase inline-block
              "
            >
              THE JOURNEY
            </span>
          </div>

          {/* Technical Dot Matrix Accents */}
          <div className="absolute bottom-4 left-0 opacity-25 pointer-events-none select-none" aria-hidden="true">
            <svg width="70" height="40" viewBox="0 0 70 40" fill="#EB5725">
              {Array.from({ length: 6 }).map((_, col) =>
                Array.from({ length: 4 }).map((_, row) => (
                  <circle key={`${col}-${row}`} cx={col * 12 + 5} cy={row * 10 + 5} r="1" />
                ))
              )}
            </svg>
          </div>

          <div className="absolute bottom-12 right-0 opacity-25 pointer-events-none select-none" aria-hidden="true">
            <svg width="70" height="40" viewBox="0 0 70 40" fill="#EB5725">
              {Array.from({ length: 6 }).map((_, col) =>
                Array.from({ length: 4 }).map((_, row) => (
                  <circle key={`r-${col}-${row}`} cx={col * 12 + 5} cy={row * 10 + 5} r="1" />
                ))
              )}
            </svg>
          </div>


          {/* =========================================================
              3. DESKTOP MEANDERING TIMELINE (Locked Coordinate System)
          ========================================================== */}
          <div className="hidden lg:block relative w-full h-[490px] z-10">
            
            {/* ── Continuous SVG Connecting Orange Meandering Path ── */}
            <svg
              viewBox="0 0 1200 490"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            >
              {/* Reference Grid Guideline */}
              <line x1="20" y1="245" x2="1180" y2="245" stroke="#D8D2C6" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.3" />

              {/* Continuous S-Curved Track hugging directly beneath 1,3,5 and above 2,4,6 */}
              <path
                d="
                  M 15 205
                  L 155 205
                  C 205 205 205 285 255 285
                  L 355 285
                  C 405 285 405 205 455 205
                  L 555 205
                  C 605 205 605 285 655 285
                  L 755 285
                  C 805 285 805 205 855 205
                  L 955 205
                  C 1005 205 1005 285 1055 285
                  L 1115 285
                  C 1140 285 1155 235 1180 205
                "
                stroke="#EB5725"
                strokeWidth="1.3"
                strokeLinecap="round"
                fill="none"
              />

              {/* Start Terminal Dot */}
              <circle cx="15" cy="205" r="3.5" fill="#EB5725" />

              {/* Node 02 Marker */}
              <circle cx="300" cy="285" r="6.5" stroke="#EB5725" strokeWidth="1" fill="#FBF7F0" />
              <circle cx="300" cy="285" r="3" fill="#EB5725" />

              {/* Node 03 Marker */}
              <circle cx="500" cy="205" r="6.5" stroke="#EB5725" strokeWidth="1" fill="#FBF7F0" />
              <circle cx="500" cy="205" r="3" fill="#EB5725" />

              {/* Node 04 Marker */}
              <circle cx="700" cy="285" r="6.5" stroke="#EB5725" strokeWidth="1" fill="#FBF7F0" />
              <circle cx="700" cy="285" r="3" fill="#EB5725" />

              {/* Node 05 Marker */}
              <circle cx="900" cy="205" r="6.5" stroke="#EB5725" strokeWidth="1" fill="#FBF7F0" />
              <circle cx="900" cy="205" r="3" fill="#EB5725" />

              {/* Node 06 Marker */}
              <circle cx="1090" cy="285" r="6.5" stroke="#EB5725" strokeWidth="1" fill="#FBF7F0" />
              <circle cx="1090" cy="285" r="3" fill="#EB5725" />

              {/* End Terminal Dot */}
              <circle cx="1180" cy="205" r="3.5" fill="#EB5725" />
            </svg>

            {/* ── 6 Positioned Editorial Step Cards (Alternating Upper & Lower Columns) ── */}
            <div className="grid grid-cols-6 h-full relative z-10 px-2">
              
              {/* Step 01: Application Round (Upper) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="flex flex-col justify-start pb-4 pr-4"
                style={{ height: '200px' }}
              >
                <span className="font-marcellus text-[50px] xl:text-[56px] leading-none text-[#121212] tracking-[-0.03em] block">
                  01
                </span>
                <h3 className="font-robotoMono text-[11.5px] xl:text-[12px] font-bold text-[#121212] tracking-[0.08em] uppercase mt-2 mb-1.5 leading-tight">
                  APPLICATION ROUND
                </h3>
                <p className="font-robotoMono text-[11px] xl:text-[11.5px] text-[#71717A] leading-[1.6]">
                  Submit your innovative proposal and take the first step with us.
                </p>
              </motion.div>

              {/* Step 02: Evaluation Round (Lower) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-col justify-start pt-4 px-2"
                style={{ marginTop: '290px', height: '200px' }}
              >
                <span className="font-marcellus text-[50px] xl:text-[56px] leading-none text-[#121212] tracking-[-0.03em] block">
                  02
                </span>
                <h3 className="font-robotoMono text-[11.5px] xl:text-[12px] font-bold text-[#121212] tracking-[0.08em] uppercase mt-2 mb-1.5 leading-tight">
                  EVALUATION ROUND
                </h3>
                <p className="font-robotoMono text-[11px] xl:text-[11.5px] text-[#71717A] leading-[1.6]">
                  Expert review and rigorous selection to identify the most impactful ideas.
                </p>
              </motion.div>

              {/* Step 03: Programme & Mentorship (Upper) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-col justify-start pb-4 px-2"
                style={{ height: '200px' }}
              >
                <span className="font-marcellus text-[50px] xl:text-[56px] leading-none text-[#121212] tracking-[-0.03em] block">
                  03
                </span>
                <h3 className="font-robotoMono text-[11.5px] xl:text-[12px] font-bold text-[#121212] tracking-[0.08em] uppercase mt-2 mb-1.5 leading-tight">
                  PROGRAMME & MENTORSHIP
                </h3>
                <p className="font-robotoMono text-[11px] xl:text-[11.5px] text-[#71717A] leading-[1.6]">
                  Workshops, mentoring and development to turn ideas into strong ventures.
                </p>
              </motion.div>

              {/* Step 04: Infrastructure (Lower) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-col justify-start pt-4 px-2"
                style={{ marginTop: '290px', height: '200px' }}
              >
                <span className="font-marcellus text-[50px] xl:text-[56px] leading-none text-[#121212] tracking-[-0.03em] block">
                  04
                </span>
                <h3 className="font-robotoMono text-[11.5px] xl:text-[12px] font-bold text-[#121212] tracking-[0.08em] uppercase mt-2 mb-1.5 leading-tight">
                  INFRASTRUCTURE
                </h3>
                <p className="font-robotoMono text-[11px] xl:text-[11.5px] text-[#71717A] leading-[1.6]">
                  Access to state-of-the-art facilities and resources that accelerate innovation.
                </p>
              </motion.div>

              {/* Step 05: Expert Mentorship (Upper) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-col justify-start pb-4 px-2"
                style={{ height: '200px' }}
              >
                <span className="font-marcellus text-[50px] xl:text-[56px] leading-none text-[#121212] tracking-[-0.03em] block">
                  05
                </span>
                <h3 className="font-robotoMono text-[11.5px] xl:text-[12px] font-bold text-[#121212] tracking-[0.08em] uppercase mt-2 mb-1.5 leading-tight">
                  EXPERT MENTORSHIP
                </h3>
                <p className="font-robotoMono text-[11px] xl:text-[11.5px] text-[#71717A] leading-[1.6]">
                  60+ hours of guidance from industry leaders who help you scale with confidence.
                </p>
              </motion.div>

              {/* Step 06: Greener Tomorrow (Lower) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex flex-col justify-start pt-4 pl-2"
                style={{ marginTop: '290px', height: '200px' }}
              >
                <span className="font-marcellus text-[50px] xl:text-[56px] leading-none text-[#121212] tracking-[-0.03em] block">
                  06
                </span>
                <h3 className="font-robotoMono text-[11.5px] xl:text-[12px] font-bold text-[#121212] tracking-[0.08em] uppercase mt-2 mb-1.5 leading-tight">
                  GREENER TOMORROW
                </h3>
                <p className="font-robotoMono text-[11px] xl:text-[11.5px] text-[#71717A] leading-[1.6]">
                  Contribute to sustainable development and build a better, greener future.
                </p>
              </motion.div>

            </div>

          </div>


          {/* =========================================================
              3B. MOBILE / TABLET STEP FLOW (Clean Staggered Grid)
          ========================================================== */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 py-6 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="
                  relative p-6 sm:p-7 rounded-2xl
                  bg-[#F6F0E4]/60 border border-[#E4E4E0]
                  shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                "
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-marcellus text-[44px] leading-none text-[#121212] tracking-[-0.03em]">
                    {step.number}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EB5725]" />
                </div>
                <h3 className="font-robotoMono text-[12px] font-bold text-[#121212] tracking-[0.1em] uppercase mb-2">
                  {step.title}
                </h3>
                <p className="font-robotoMono text-[12px] text-[#52525B] leading-[1.7]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
