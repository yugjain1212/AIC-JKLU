'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const BENEFIT_BULLETS = [
  'Tailored mentorship from industry experts',
  'Access to funding and investor network',
  'State-of-the-art infrastructure and labs',
  'Hands-on workshops and training',
  'A thriving community of innovators',
];

export default function ProgramBuildScaleImpact() {
  return (
    <section className="relative w-full py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
        
        {/* ── 2-COLUMN BALANCED SPLIT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* ── LEFT COLUMN: Dark Obsidian Card (Build. Scale. Impact.) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative
              rounded-[28px]
              bg-[#121212]
              text-white
              p-8 sm:p-10 lg:p-12
              overflow-hidden
              shadow-[0_20px_50px_rgba(0,0,0,0.18)]
              border border-white/10
              flex flex-col justify-between
              min-h-[460px] sm:min-h-[480px]
            "
          >
            {/* Top Content */}
            <div>
              {/* Eyebrow Tag */}
              <p className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725] mb-3.5">
                WHY JOIN AIC-JKLU ACCELERATOR?
              </p>

              {/* Serif Headline */}
              <h2 className="font-marcellus text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.06] tracking-[-0.03em] text-white mb-7 sm:mb-8">
                Build. Scale. <span className="text-[#EB5725]">Impact.</span>
              </h2>

              {/* 5 Checklist Value Propositions */}
              <ul className="space-y-3.5 sm:space-y-4 mb-8">
                {BENEFIT_BULLETS.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="w-4 h-4 rounded-sm bg-[#EB5725] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-robotoMono text-[12.5px] sm:text-[13.5px] leading-snug text-white/90 group-hover:text-white transition-colors duration-200">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-2">
              <Link
                href="/apply?program=accelerator"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  px-7
                  py-3.5
                  rounded-full
                  bg-[#EB5725]
                  text-white
                  font-robotoMono
                  text-[11.5px]
                  font-bold
                  tracking-[0.18em]
                  uppercase
                  shadow-[0_4px_20px_rgba(235,87,37,0.35)]
                  hover:bg-[#C84214]
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-200
                  group
                "
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: 2x2 Metric Stats Grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative
              rounded-[28px]
              bg-white/90
              backdrop-blur-sm
              border border-[#E4E4E0]
              shadow-[0_8px_30px_rgba(0,0,0,0.035)]
              p-6 sm:p-8 lg:p-10
              flex flex-col justify-center
              min-h-[460px] sm:min-h-[480px]
            "
          >
            {/* Central Orange '+' Circle Intersection Node */}
            <div
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-7 h-7 rounded-full bg-[#EB5725] text-white
                flex items-center justify-center font-bold text-xs
                shadow-[0_2px_8px_rgba(235,87,37,0.3)]
                z-10 select-none
              "
              aria-hidden="true"
            >
              +
            </div>

            {/* 2x2 Grid with hairline border dividers */}
            <div className="grid grid-cols-2 h-full">
              
              {/* Metric 1: Top-Left */}
              <div className="p-6 sm:p-8 border-r border-b border-[#E4E4E0] flex flex-col justify-center items-center text-center group hover:bg-[#FBF7F0]/30 transition-colors duration-200">
                <span className="font-marcellus text-[40px] sm:text-[50px] lg:text-[56px] text-[#121212] leading-none mb-2.5">
                  25+
                </span>
                <span className="font-robotoMono text-[11.5px] sm:text-[12.5px] text-[#52525B] leading-snug">
                  Startups Accelerated
                </span>
              </div>

              {/* Metric 2: Top-Right */}
              <div className="p-6 sm:p-8 border-b border-[#E4E4E0] flex flex-col justify-center items-center text-center group hover:bg-[#FBF7F0]/30 transition-colors duration-200">
                <span className="font-marcellus text-[40px] sm:text-[50px] lg:text-[56px] text-[#121212] leading-none mb-2.5">
                  ₹25Cr+
                </span>
                <span className="font-robotoMono text-[11.5px] sm:text-[12.5px] text-[#52525B] leading-snug">
                  Funding Facilitated
                </span>
              </div>

              {/* Metric 3: Bottom-Left */}
              <div className="p-6 sm:p-8 border-r border-[#E4E4E0] flex flex-col justify-center items-center text-center group hover:bg-[#FBF7F0]/30 transition-colors duration-200">
                <span className="font-marcellus text-[40px] sm:text-[50px] lg:text-[56px] text-[#121212] leading-none mb-2.5">
                  40+
                </span>
                <span className="font-robotoMono text-[11.5px] sm:text-[12.5px] text-[#52525B] leading-snug">
                  Mentors & Industry Experts
                </span>
              </div>

              {/* Metric 4: Bottom-Right */}
              <div className="p-6 sm:p-8 flex flex-col justify-center items-center text-center group hover:bg-[#FBF7F0]/30 transition-colors duration-200">
                <span className="font-marcellus text-[40px] sm:text-[50px] lg:text-[56px] text-[#121212] leading-none mb-2.5">
                  10+
                </span>
                <span className="font-robotoMono text-[11.5px] sm:text-[12.5px] text-[#52525B] leading-snug">
                  Corporate & Ecosystem Partners
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
