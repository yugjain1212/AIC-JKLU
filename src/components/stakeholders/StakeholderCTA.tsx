'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function StakeholderCTA() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-[#EB5725] text-[#121212] py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-14 border-t border-black/10">
      
      {/* Decorative ambient circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-black/[0.06] to-transparent blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
        
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="font-robotoMono text-xs font-semibold uppercase tracking-[0.25em] text-black/75 mb-4"
        >
          Join Our Network
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-marcellus text-[38px] sm:text-[48px] md:text-[56px] leading-[1.05] tracking-[-0.03em] text-[#121212]"
        >
          Together, we build
          <br />
          a stronger ecosystem.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-6 max-w-xl font-robotoMono text-[15px] sm:text-[16px] leading-relaxed text-black/80"
        >
          Partner with AIC-JKLU to mentor high-potential founders, facilitate industry
          collaborations, and accelerate next-generation ventures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-9"
        >
          <Link
            href="/apply"
            className="group inline-flex items-center gap-3 rounded-full bg-[#121212] px-8 py-4 font-robotoMono text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.14em] text-[#FBF7F0] shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_16px_35px_rgba(0,0,0,0.3)] cursor-pointer"
          >
            <span>BECOME A PARTNER</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
