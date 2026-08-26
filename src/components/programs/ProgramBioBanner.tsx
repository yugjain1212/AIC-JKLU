'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProgramBioBanner() {
  return (
    <section className="relative w-full pt-4 pb-20 sm:pb-28 overflow-hidden select-none">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            rounded-[28px]
            bg-[#121212]
            text-white
            p-8 sm:p-12 lg:p-14
            overflow-hidden
            shadow-[0_20px_50px_rgba(0,0,0,0.18)]
            border border-white/10
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* ── Left Column: Editorial Headline ── */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="font-marcellus text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.04] tracking-[-0.035em] text-white">
                The future is
                <br />
                <span className="text-[#EB5725]">bio-based.</span>
              </h2>
            </div>

            {/* ── Middle Column: Editorial Tagline & Signature ── */}
            <div className="lg:col-span-3 flex flex-col justify-center font-robotoMono text-[12px] sm:text-[13px] leading-relaxed text-white/80">
              <p>Innovate today.</p>
              <p>Sustain tomorrow.</p>
              <p>Lead the change.</p>
              <div className="w-8 h-[2px] bg-[#EB5725] my-3.5" />
              <p className="text-white/60 tracking-[0.2em] uppercase text-[10.5px] font-bold">
                AIC-JKLU
              </p>
            </div>

            {/* ── Right Column: Campus Architecture Line Art with Orange Sun ── */}
            <div className="lg:col-span-4 relative h-[140px] sm:h-[160px] lg:h-[180px] flex items-center justify-center lg:justify-end overflow-hidden">
              <Image
                src="/library/campus-illustration.svg"
                alt="AIC-JKLU Campus Architecture Illustration"
                width={650}
                height={260}
                className="w-full h-full object-contain object-center lg:object-right select-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
