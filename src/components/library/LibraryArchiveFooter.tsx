'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LibraryArchiveFooter() {
  return (
    <section className="relative w-full bg-[#121212] text-white rounded-t-[36px] sm:rounded-t-[52px] overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 mt-10 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_1.6fr] gap-8 lg:gap-10 items-center">

          {/* ── Left Column: Main Marcellus Statement ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="font-marcellus text-[clamp(2.4rem,4.2vw,3.6rem)] leading-[1.06] tracking-tight">
              The archive
              <br />
              <span className="text-brand">never</span> stops.
            </h2>
          </motion.div>

          {/* ── Middle Column: Narrative Monospace List ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center font-robotoMono text-[12px] sm:text-[12.8px] leading-relaxed text-white/75"
          >
            <p>More ideas.</p>
            <p>More people.</p>
            <p>More moments.</p>
            <div className="w-6 h-0.5 bg-brand my-2.5" />
            <div className="flex items-center gap-2">
              <Image
                src="/library/aic-origami-logo.png"
                alt="AIC Logo"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              <p className="text-white/70 tracking-[0.14em] uppercase text-[11px] font-bold">AIC-JKLU</p>
            </div>
          </motion.div>

          {/* ── Right Column: Authentic JKLU Campus Illustration with Orange Sun ── */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative w-full h-[140px] sm:h-[160px] lg:h-[180px] flex items-center justify-center lg:justify-end overflow-hidden"
          >
            <Image
              src="/library/campus-illustration.svg"
              alt="AIC-JKLU Campus Architecture Illustration"
              width={700}
              height={300}
              className="w-full h-full object-contain object-center lg:object-right select-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
