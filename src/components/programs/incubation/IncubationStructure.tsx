'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Monitor, TrendingUp } from 'lucide-react';

const STRUCTURE_STEPS = [
  {
    number: '01',
    icon: GraduationCap,
    title: 'Graduation',
    duration: '(0 Months)',
    description: 'Program onboarding, orientation and idea refinement with guidance from mentors.',
  },
  {
    number: '02',
    icon: Monitor,
    title: 'Workspace',
    duration: '(3-4 Months)',
    description: 'Build your MVP, validate and iterate with access to labs, workspace and expert support.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Scalability',
    duration: '(Ongoing)',
    description: 'Investor connects, pilot launches, growth support and long-term mentorship.',
  },
];

export default function IncubationStructure() {
  return (
    <section id="structure" className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── Left Edge Vertical Margin Rail ── */}
      <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 select-none pointer-events-none">
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">05</span>
        <div className="relative h-28 w-[1px] bg-[#D8D2C6] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#71717A] absolute top-3" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#EB5725] absolute" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#71717A] absolute bottom-3" />
        </div>
        <span className="font-robotoMono text-[10px] font-bold tracking-[0.28em] text-[#71717A] uppercase whitespace-nowrap -rotate-90 origin-center my-4">
          EMPOWERING RURAL INDIA
        </span>
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">06</span>
      </div>

      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:pl-20">
        
        {/* =========================================================
            HEADER SECTION (Headline Left | Subtitle & Dot Matrix Right)
        ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 relative">
          
          {/* Left Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
                PROGRAM STRUCTURE
              </span>
              <div className="w-8 h-[1.5px] bg-[#EB5725]" />
            </div>

            <h2 className="font-marcellus text-[44px] sm:text-[54px] lg:text-[62px] leading-[0.98] tracking-[-0.035em] text-[#121212]">
              Built for Growth.
              <br />
              <span className="text-[#EB5725]">Backed at Every Step</span>.
            </h2>
          </motion.div>

          {/* Right Subtitle & Dot Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex items-start gap-8 max-w-md pb-2"
          >
            <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.8] text-[#52525B]">
              A flexible structure that supports startups from onboarding to scale.
            </p>

            {/* Dot Matrix Pattern (6x6) */}
            <div className="hidden sm:block shrink-0 opacity-30 select-none">
              <svg width="66" height="66" viewBox="0 0 66 66" fill="#EB5725">
                {Array.from({ length: 6 }).map((_, col) =>
                  Array.from({ length: 6 }).map((_, row) => (
                    <circle key={`str-dm-${col}-${row}`} cx={col * 11 + 5} cy={row * 11 + 5} r="1" />
                  ))
                )}
              </svg>
            </div>
          </motion.div>

        </div>


        {/* =========================================================
            3 CONNECTED STEP CARDS WITH ARROWS
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
          
          {STRUCTURE_STEPS.map((step, idx) => {
            const IconComp = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="
                  group
                  relative
                  bg-white
                  border border-[#E4E4E0]
                  rounded-2xl
                  p-7 sm:p-8
                  shadow-[0_2px_14px_rgba(0,0,0,0.02)]
                  hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]
                  hover:border-[#EB5725]/40
                  hover:-translate-y-1
                  transition-all duration-300
                  flex flex-col justify-between
                  min-h-[260px]
                "
              >
                <div>
                  {/* Top Row: Icon Container & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF2ED] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <IconComp className="w-6 h-6 text-[#EB5725]" strokeWidth={1.75} />
                    </div>
                    <span className="font-marcellus text-[24px] font-bold text-[#EB5725]">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Duration */}
                  <div className="mb-3">
                    <h3 className="font-marcellus text-[20px] sm:text-[22px] text-[#121212] font-semibold leading-tight">
                      {step.title}
                    </h3>
                    <span className="font-robotoMono text-[11.5px] font-bold text-[#EB5725] tracking-wide">
                      {step.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-robotoMono text-[11.5px] sm:text-[12px] text-[#52525B] leading-[1.75]">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow between cards (Desktop only) */}
                {idx < STRUCTURE_STEPS.length - 1 && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#FBF7F0] border border-[#E4E4E0] items-center justify-center text-[#EB5725] text-xs font-mono shadow-sm">
                    →
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
