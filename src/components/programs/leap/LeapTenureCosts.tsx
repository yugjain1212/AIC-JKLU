'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, IndianRupee } from 'lucide-react';

export default function LeapTenureCosts() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#121212] text-white overflow-hidden select-none">
      
      {/* ── Background Radar Reticle Graphic in Bottom Right ── */}
      <div className="absolute -bottom-10 right-4 sm:right-10 w-56 h-56 pointer-events-none opacity-30" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="#444444" strokeWidth="0.8" strokeDasharray="3 4" />
          <circle cx="100" cy="100" r="50" stroke="#444444" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="20" stroke="#EB5725" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#444444" strokeWidth="0.8" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#444444" strokeWidth="0.8" />
          <line x1="90" y1="100" x2="110" y2="100" stroke="#EB5725" strokeWidth="1.8" />
          <line x1="100" y1="90" x2="100" y2="110" stroke="#EB5725" strokeWidth="1.8" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* =========================================================
            TOP ROW: 4 Columns (Heading + 3 Cost/Tenure Pillars)
        ========================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start mb-12 sm:mb-16">
          
          {/* Column 1: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-marcellus text-[36px] sm:text-[42px] lg:text-[46px] leading-[1.04] tracking-[-0.03em] text-white">
              Program Tenure
              <br />
              <span className="text-[#EB5725]">& Costs.</span>
            </h2>
          </motion.div>

          {/* Column 2: 6 Months */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EB5725]/15 border border-[#EB5725]/30 flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5 text-[#EB5725]" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-marcellus text-[36px] sm:text-[42px] leading-none text-white tracking-[-0.03em]">
                6
              </span>
              <span className="font-robotoMono text-[14px] font-bold text-white/90">
                Months
              </span>
            </div>
            <p className="font-robotoMono text-[11px] uppercase tracking-[0.14em] text-[#71717A]">
              Program Duration
            </p>
          </motion.div>

          {/* Column 3: 0% Equity */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EB5725]/15 border border-[#EB5725]/30 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-[#EB5725]" />
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-marcellus text-[36px] sm:text-[42px] leading-none text-white tracking-[-0.03em]">
                0%
              </span>
              <span className="font-robotoMono text-[14px] font-bold text-white/90">
                Equity
              </span>
            </div>
            <p className="font-robotoMono text-[11px] text-[#71717A]">
              We don&apos;t take equity
            </p>
          </motion.div>

          {/* Column 4: Affordable */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col items-start"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EB5725]/15 border border-[#EB5725]/30 flex items-center justify-center mb-4">
              <IndianRupee className="w-5 h-5 text-[#EB5725]" />
            </div>
            <p className="font-marcellus text-[32px] sm:text-[36px] leading-tight text-white tracking-[-0.02em] mb-1">
              Affordable
            </p>
            <p className="font-robotoMono text-[11px] text-[#71717A]">
              For Rural Innovators
            </p>
          </motion.div>

        </div>


        {/* =========================================================
            BOTTOM ROW: Explanatory Fine-Print Footnotes
        ========================================================== */}
        <div className="border-t border-[#2A2A2A] pt-8 space-y-2.5 max-w-4xl font-robotoMono text-[11px] sm:text-[11.5px] leading-[1.7] text-white/60">
          <p>
            <strong className="text-white/80 font-medium">Service charges:</strong> A nominal monthly service charge will be levied for the first 6 months. Post that a revenue-sharing model or a flat program extension fee may apply.
          </p>
          <p>
            <strong className="text-white/80 font-medium">Extensions:</strong> Additional period of 3 months based on performance and needs assessment.
          </p>
        </div>

      </div>
    </section>
  );
}
