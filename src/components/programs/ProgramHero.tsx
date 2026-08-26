'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Leaf, IndianRupee, Award } from 'lucide-react';
import ProgramHeroVisual from './ProgramHeroVisual';

export default function ProgramHero() {
  return (
    <section className="relative w-full pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
        
        {/* ── TOP BREADCRUMB / BACK LINK ── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 font-robotoMono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#EB5725] transition-colors duration-200 hover:text-[#C84214]"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>BACK TO PROGRAMS</span>
          </Link>
        </motion.div>

        {/* ── HERO 2-COLUMN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* ── LEFT COLUMN: Program Metadata & Headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Program Number Indicator */}
            <span className="font-marcellus text-[32px] sm:text-[40px] text-[#EB5725] leading-none mb-3 sm:mb-4">
              01
            </span>

            {/* Main Editorial Serif Heading */}
            <h1 className="font-marcellus text-[44px] sm:text-[56px] md:text-[66px] lg:text-[72px] xl:text-[78px] leading-[0.98] tracking-[-0.035em] text-[#121212] mb-4 sm:mb-5">
              Accelerator
              <br />
              Program
            </h1>

            {/* Subtitle / Focus Program Title */}
            <h2 className="font-marcellus text-[22px] sm:text-[28px] md:text-[32px] text-[#121212] leading-[1.18] tracking-[-0.02em] mb-5 sm:mb-6">
              Sustainable
              <br />
              <span className="text-[#EB5725]">Biomaterial-based</span>
              <br />
              Solutions
            </h2>

            {/* Narrative Paragraph */}
            <p className="font-robotoMono text-[13.5px] sm:text-[14.5px] leading-[1.75] text-[#52525B] max-w-[460px] mb-7 sm:mb-8">
              Join a unique accelerator programme shaping the future of sustainable and bio-based products through innovation, mentorship, and growth opportunities.
            </p>

            {/* Action Buttons: Apply Now & Download Brochure */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
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
                  sm:text-[12px]
                  font-bold
                  tracking-[0.18em]
                  uppercase
                  shadow-[0_4px_16px_rgba(235,87,37,0.25)]
                  hover:bg-[#C84214]
                  hover:shadow-[0_6px_22px_rgba(235,87,37,0.35)]
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

              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Brochure download will begin shortly.');
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-robotoMono
                  text-[11.5px]
                  sm:text-[12px]
                  font-bold
                  tracking-[0.16em]
                  uppercase
                  text-[#121212]
                  hover:text-[#EB5725]
                  border-b
                  border-current
                  pb-0.5
                  transition-colors
                  duration-200
                  group
                "
              >
                <span>DOWNLOAD BROCHURE</span>
                <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5 text-[#EB5725]" />
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Architectural Rocket Illustration & Guide Art ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
          >
            <ProgramHeroVisual />
          </motion.div>

        </div>

        {/* ── 3-COLUMN FLOATING STATS BAR (Focus Area, Funding, Perks) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-14 max-w-4xl mx-auto lg:ml-auto lg:mr-0"
        >
          <div className="
            grid grid-cols-1 sm:grid-cols-3
            rounded-[22px]
            bg-white/95
            backdrop-blur-md
            border border-[#E4E4E0]
            shadow-[0_8px_30px_rgba(0,0,0,0.035)]
            divide-y sm:divide-y-0 sm:divide-x divide-[#E4E4E0]
            overflow-hidden
          ">
            
            {/* Stat Item 1: Focus Area */}
            <div className="p-6 sm:p-7 flex flex-col items-center text-center group hover:bg-[#FBF7F0]/40 transition-colors duration-200">
              <div className="w-10 h-10 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] mb-3 group-hover:scale-110 transition-transform duration-200">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-robotoMono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#71717A] mb-1.5">
                FOCUS AREA
              </span>
              <span className="font-robotoMono text-[15px] sm:text-[16px] font-bold text-[#121212] tracking-tight">
                Biomaterials & Pulp
              </span>
            </div>

            {/* Stat Item 2: Funding */}
            <div className="p-6 sm:p-7 flex flex-col items-center text-center group hover:bg-[#FBF7F0]/40 transition-colors duration-200">
              <div className="w-10 h-10 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] mb-3 group-hover:scale-110 transition-transform duration-200">
                <IndianRupee className="w-5 h-5" />
              </div>
              <span className="font-robotoMono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#71717A] mb-1.5">
                FUNDING
              </span>
              <span className="font-robotoMono text-[15px] sm:text-[16px] font-bold text-[#121212] tracking-tight">
                INR 5 Million
              </span>
            </div>

            {/* Stat Item 3: Perks Worth */}
            <div className="p-6 sm:p-7 flex flex-col items-center text-center group hover:bg-[#FBF7F0]/40 transition-colors duration-200">
              <div className="w-10 h-10 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] mb-3 group-hover:scale-110 transition-transform duration-200">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-robotoMono text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#71717A] mb-1.5">
                PERKS WORTH
              </span>
              <span className="font-robotoMono text-[15px] sm:text-[16px] font-bold text-[#121212] tracking-tight">
                INR 5 Million+
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
