'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import StakeholderEmblem from './StakeholderEmblem';

interface StakeholderHeroProps {
  totalCount?: number;
}

export default function StakeholderHero({
  totalCount = 25,
}: StakeholderHeroProps) {
  return (
    <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 xl:pt-24 pb-14 sm:pb-18 lg:pb-24 xl:pb-28 border-b border-[#E4E4E0]/80 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        
        {/* Main Grid: Left Statement & Editorial Info | Right Circular Diagram Emblem */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16 items-center">
          
          {/* ── LEFT / MAIN EDITORIAL CONTENT (Cols 1-5) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow Label */}
            <p className="font-robotoMono text-xs sm:text-[13px] font-semibold uppercase tracking-[0.25em] text-[#EB5725] mb-5 sm:mb-6">
              Stakeholders
            </p>

            {/* Editorial Heading */}
            <h1 className="font-marcellus text-[48px] sm:text-[58px] md:text-[66px] lg:text-[72px] xl:text-[78px] leading-[0.97] tracking-[-0.035em] text-[#121212]">
              The people
              <br />
              behind the
              <br />
              <span className="text-[#EB5725]">ecosystem.</span>
            </h1>

            {/* Small Orange Divider */}
            <div className="h-[2px] w-14 bg-[#EB5725]/80 my-6 sm:my-8" />

            {/* Description Paragraph */}
            <p className="font-robotoMono text-[14.5px] sm:text-[15.5px] md:text-[16.5px] leading-[1.8] text-[#52525B] max-w-md">
              AIC-JKLU is driven by a diverse group of leaders, mentors and
              partners who guide, support and empower startups at every step.
            </p>

            {/* Team Navigation Link */}
            <div className="pt-6 sm:pt-8">
              <Link
                href="/#team"
                className="group inline-flex items-center gap-2 font-robotoMono text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.16em] text-[#EB5725] transition-colors duration-200 hover:text-[#C84214] cursor-pointer"
              >
                <span>OUR TEAM</span>
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-1.5" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT / EDITORIAL EMBLEM GRAPHIC (Cols 6-12) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex items-center justify-center lg:justify-end"
          >
            <StakeholderEmblem />
          </motion.div>

        </div>
      </div>
    </section>
  );
}


