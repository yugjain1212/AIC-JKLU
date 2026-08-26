'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck } from 'lucide-react';

// =========================================================================
// MINI ANIMATED RURAL LANDSCAPE (Tree, Barn, Spinning Windmill, Tractor)
// =========================================================================
function MiniRuralLandscape() {
  return (
    <div className="relative w-full max-w-[280px] h-[95px] select-none flex items-center justify-end">
      <svg viewBox="0 0 280 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Soft Glowing Orange Sun */}
        <motion.circle
          cx="240"
          cy="35"
          r="26"
          fill="#FED7AA"
          opacity="0.75"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '240px 35px' }}
        />

        {/* Flying Bird */}
        <motion.path
          d="M 0 0 Q -3 -3 -6 -1 M 0 0 Q 3 -3 6 -1"
          stroke="#121212"
          strokeWidth="0.9"
          fill="none"
          animate={{
            x: [240, 265],
            y: [15, 8],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Ground Line */}
        <line x1="20" y1="78" x2="270" y2="78" stroke="#121212" strokeWidth="1" strokeLinecap="round" />

        {/* Stylized Swaying Tree */}
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '80px 78px' }}
          stroke="#121212"
          strokeWidth="1"
          strokeLinejoin="round"
          fill="#FAF7F0"
        >
          <path d="M 80 78 L 81 48" strokeWidth="1.2" />
          <path d="M 76 48 C 68 46 66 34 74 28 C 70 20 82 14 90 18 C 98 14 106 22 102 30 C 108 36 104 46 96 48 Z" />
        </motion.g>

        {/* Farm Barn */}
        <g stroke="#121212" strokeWidth="1" strokeLinejoin="round" fill="#FAF7F0">
          <polygon points="122,58 138,44 154,58" />
          <rect x="122" y="58" width="32" height="20" />
          <line x1="130" y1="58" x2="130" y2="78" strokeWidth="0.65" stroke="#71717A" />
          <line x1="146" y1="58" x2="146" y2="78" strokeWidth="0.65" stroke="#71717A" />
          <rect x="134" y="64" width="8" height="14" fill="#121212" />
        </g>

        {/* Spinning Windmill */}
        <g stroke="#121212" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="196,78 198,34 200,34 202,78" fill="#FAF7F0" strokeWidth="1" />
          <rect x="197" y="32" width="4" height="3" rx="0.5" fill="#121212" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '199px 34px' }}
          >
            <circle cx="199" cy="34" r="1.8" fill="#EB5725" stroke="#121212" strokeWidth="0.6" />
            <path d="M 199 34 L 210 14 Q 212 12 211 15 L 200 34 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.8" />
            <path d="M 199 34 L 216 48 Q 217 50 214 50 L 199 35 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.8" />
            <path d="M 199 34 L 182 36 Q 180 35 183 34 L 199 34 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.8" />
          </motion.g>
        </g>

        {/* Moving Tractor with Exhaust Smoke */}
        <motion.g
          animate={{ x: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Exhaust Smoke */}
          <motion.circle
            cx="248"
            cy="58"
            r="1"
            fill="#EB5725"
            animate={{ cy: [58, 50, 44], opacity: [0, 0.7, 0], scale: [0.6, 1.2, 1.6] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
          />
          {/* Tractor Chassis */}
          <g stroke="#121212" strokeWidth="0.9" strokeLinejoin="round" fill="#FAF7F0">
            <path d="M 238 64 L 250 64 L 250 72 L 238 72 Z" fill="#EB5725" />
            <line x1="248" y1="64" x2="248" y2="58" strokeWidth="0.8" />
          </g>
          {/* Rear Wheel */}
          <g transform="translate(236, 73)">
            <motion.g animate={{ rotate: 360 }} transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}>
              <circle cx="0" cy="0" r="5" fill="#FAF7F0" stroke="#121212" strokeWidth="0.9" />
              <circle cx="0" cy="0" r="3" fill="#EB5725" stroke="#121212" strokeWidth="0.6" />
            </motion.g>
          </g>
          {/* Front Wheel */}
          <g transform="translate(248, 75)">
            <motion.g animate={{ rotate: 360 }} transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}>
              <circle cx="0" cy="0" r="3.2" fill="#FAF7F0" stroke="#121212" strokeWidth="0.8" />
            </motion.g>
          </g>
        </motion.g>
      </svg>
    </div>
  );
}

const SELECTION_STEPS = [
  'Application submission by the candidate.',
  'In-person / Online discussion for shortlisted startups.',
  'Review by AIC-JKLU selection committee.',
  'MoU signing & onboarding to incubation program.',
];

export default function IncubationEligibility() {
  return (
    <section id="eligibility" className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── Left Edge Vertical Margin Rail ── */}
      <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 select-none pointer-events-none">
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">03</span>
        <div className="relative h-28 w-[1px] bg-[#D8D2C6] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#71717A] absolute top-3" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#EB5725] absolute" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#71717A] absolute bottom-3" />
        </div>
        <span className="font-robotoMono text-[10px] font-bold tracking-[0.28em] text-[#71717A] uppercase whitespace-nowrap -rotate-90 origin-center my-4">
          EMPOWERING RURAL INDIA
        </span>
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">04</span>
      </div>

      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:pl-20">
        
        {/* =========================================================
            HEADER SECTION (Headline Left | Subtitle & Landscape Art Right)
        ========================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16 relative">
          
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
                ELIGIBILITY & SELECTION
              </span>
              <div className="w-8 h-[1.5px] bg-[#EB5725]" />
            </div>

            <h2 className="font-marcellus text-[44px] sm:text-[54px] lg:text-[62px] leading-[0.98] tracking-[-0.035em] text-[#121212]">
              Fair Criteria.
              <br />
              <span className="text-[#EB5725]">Transparent Process</span>.
            </h2>
          </motion.div>

          {/* Right Subtitle & Animated Landscape Artwork */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center gap-6 max-w-xl pb-2"
          >
            <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.8] text-[#52525B] max-w-xs">
              A fair and structured approach to identify ventures with the potential to create real impact.
            </p>

            {/* Rural Landscape Vector */}
            <div className="shrink-0">
              <MiniRuralLandscape />
            </div>
          </motion.div>

        </div>


        {/* =========================================================
            2 MAIN CARDS: Eligibility Criteria Left | Selection Process Right
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ── CARD 1: Eligibility Criteria ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="
              bg-white
              border border-[#E4E4E0]
              rounded-2xl
              p-7 sm:p-9
              shadow-[0_2px_14px_rgba(0,0,0,0.02)]
              flex flex-col justify-between
            "
          >
            <div>
              {/* Header with Icon */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#FFF2ED] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#EB5725]" strokeWidth={1.8} />
                </div>
                <h3 className="font-marcellus text-[20px] sm:text-[22px] text-[#121212] font-semibold">
                  Eligibility Criteria
                </h3>
              </div>

              {/* Description */}
              <p className="font-robotoMono text-[12px] sm:text-[12.5px] text-[#52525B] leading-[1.8] mb-8">
                Startups and individuals working on innovative products, services, and processes. Applicants should be in the prototype or early stage.
              </p>
            </div>

            {/* Bottom Highlight Focus Areas Pill */}
            <div className="bg-[#FFF2ED] rounded-xl p-5 border border-[#EB5725]/20">
              <p className="font-robotoMono text-[11px] sm:text-[11.5px] leading-[1.7] text-[#121212]">
                <span className="text-[#EB5725] font-bold">Focus Areas:</span> Agriculture, Sustainability, Fintech, Agritech, FoodTech, HealthTech, Clean Energy and more.
              </p>
            </div>
          </motion.div>


          {/* ── CARD 2: Selection Process ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="
              bg-white
              border border-[#E4E4E0]
              rounded-2xl
              p-7 sm:p-9
              shadow-[0_2px_14px_rgba(0,0,0,0.02)]
              flex flex-col justify-between
            "
          >
            <div>
              {/* Header with Icon */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#FFF2ED] flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-[#EB5725]" strokeWidth={1.8} />
                </div>
                <h3 className="font-marcellus text-[20px] sm:text-[22px] text-[#121212] font-semibold">
                  Selection Process
                </h3>
              </div>

              {/* 4 Numbered Steps */}
              <div className="space-y-4">
                {SELECTION_STEPS.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    {/* Number Badge */}
                    <div className="w-6 h-6 rounded-full bg-[#EB5725] text-white flex items-center justify-center shrink-0 font-robotoMono text-[10.5px] font-bold">
                      {`0${idx + 1}`}
                    </div>
                    {/* Step Text */}
                    <span className="font-robotoMono text-[12px] sm:text-[12.5px] text-[#52525B] group-hover:text-[#121212] transition-colors leading-snug">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
