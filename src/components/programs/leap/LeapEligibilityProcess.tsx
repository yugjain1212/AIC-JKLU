'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ELIGIBILITY_CRITERIA = [
  'Startups at minimum MVP stage',
  'Working on innovative products, services, or processes',
  'Creating sustainable solutions for rural ecosystems',
  'Registered entity (Pvt. Ltd., LLP, etc.)',
  'Solving critical rural or agri challenges innovatively',
];

const SELECTION_STEPS = [
  'Application review and screening',
  'Technical and business evaluation',
  'Impact assessment & selection',
  'MoU signing with AIC-JKLU',
  'Onboarding to incubation program',
];

export default function LeapEligibilityProcess() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#121212] text-white overflow-hidden select-none">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          {/* ── LEFT COLUMN: Eligibility Criteria ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-start items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
                ELIGIBILITY
              </span>
              <div className="w-10 h-[1.5px] bg-[#EB5725]" />
            </div>

            {/* List with Concentric Orange Target Bullets */}
            <ul className="space-y-6 sm:space-y-7 w-full">
              {ELIGIBILITY_CRITERIA.map((criterion, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  {/* Concentric Orange Bullet Target */}
                  <div className="relative w-5 h-5 rounded-full border border-[#EB5725] flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#EB5725]" />
                  </div>
                  <span className="font-robotoMono text-[12.5px] sm:text-[13px] text-white/90 leading-snug tracking-wide">
                    {criterion}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* ── CENTER COLUMN: Technical Concentric Radar Reticle & Glowing Arrow ── */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative">
            <div className="relative w-36 h-36 flex items-center justify-center pointer-events-none">
              {/* Radar Circles */}
              <svg viewBox="0 0 140 140" fill="none" className="w-full h-full">
                <circle cx="70" cy="70" r="60" stroke="#333333" strokeWidth="0.8" strokeDasharray="3 4" />
                <circle cx="70" cy="70" r="40" stroke="#333333" strokeWidth="0.8" strokeDasharray="2 3" />
                <circle cx="70" cy="70" r="20" stroke="#EB5725" strokeWidth="0.8" opacity="0.4" />
                <line x1="10" y1="70" x2="130" y2="70" stroke="#333333" strokeWidth="0.6" strokeDasharray="2 3" />
                <line x1="70" y1="10" x2="70" y2="130" stroke="#333333" strokeWidth="0.6" strokeDasharray="2 3" />
              </svg>

              {/* Animated Glowing Orange Arrow */}
              <motion.div
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute z-10 text-[#EB5725]"
              >
                <ArrowRight className="w-6 h-6 stroke-[2]" />
              </motion.div>
            </div>
          </div>


          {/* ── RIGHT COLUMN: Selection Process ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-start items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#8B5CF6]">
                SELECTION PROCESS
              </span>
              <div className="w-10 h-[1.5px] bg-[#8B5CF6]" />
            </div>

            {/* List with Concentric Purple Target Bullets */}
            <ul className="space-y-6 sm:space-y-7 w-full">
              {SELECTION_STEPS.map((step, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  {/* Concentric Purple Bullet Target */}
                  <div className="relative w-5 h-5 rounded-full border border-[#8B5CF6] flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                  </div>
                  <span className="font-robotoMono text-[12.5px] sm:text-[13px] text-white/90 leading-snug tracking-wide">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
