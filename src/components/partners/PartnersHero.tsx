'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PartnersEcosystemVisual from './PartnersEcosystemVisual';

export default function PartnersHero() {
  return (
    <section className="relative w-full pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      
      {/* ── FAR LEFT TECHNICAL VERTICAL METADATA ── */}
      <div className="
        hidden 2xl:flex
        fixed left-6 top-1/2 -translate-y-1/2
        -rotate-90 origin-left
        items-center gap-3
        font-robotoMono text-[9.5px] font-semibold tracking-[0.24em] uppercase
        text-[#121212]/35
        pointer-events-none select-none z-10
      ">
        <span className="w-6 h-[1px] bg-[#121212]/20" />
        <span>TOGETHER WE (RE) BUILD IMPACT</span>
        <span className="w-2 h-2 rounded-full bg-[#EB5725]/50" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        
        {/* ── 2-COLUMN EDITORIAL HERO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-center">
          
          {/* ── LEFT COLUMN: Editorial Typography & Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center items-start"
          >
            {/* Eyebrow */}
            <p className="font-robotoMono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] text-[#EB5725] mb-4 sm:mb-5">
              PARTNERS
            </p>

            {/* Editorial Heading */}
            <h1 className="font-marcellus text-[44px] sm:text-[56px] md:text-[66px] lg:text-[70px] xl:text-[76px] leading-[0.98] tracking-[-0.035em] text-[#121212] mb-6 sm:mb-7">
              The network
              <br />
              behind the
              <br />
              <span className="text-[#EB5725]">ecosystem.</span>
            </h1>

            {/* Narrative Description */}
            <p className="font-robotoMono text-[13px] sm:text-[14px] leading-[1.8] text-[#52525B] max-w-[420px] mb-8 sm:mb-9">
              AIC-JKLU works with organizations across industry, academia, government and the startup ecosystem to drive innovation and build a sustainable future.
            </p>

            {/* CTA Action Link */}
            <div>
              <Link
                href="/apply?type=partner"
                className="
                  group inline-flex items-center gap-2
                  font-robotoMono text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-[0.18em]
                  text-[#EB5725] hover:text-[#C84214]
                  border-b border-[#EB5725] pb-1
                  transition-colors duration-200
                "
              >
                <span>BECOME A PARTNER</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Central Ecosystem Network Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative flex items-center justify-center"
          >
            <PartnersEcosystemVisual />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
