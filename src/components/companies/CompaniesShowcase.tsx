'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';
import { companies } from '@/data/companies';
import CompaniesHeader from './CompaniesHeader';
import CompaniesCarousel from './CompaniesCarousel';
import CompanyProgress from './CompanyProgress';
import CompanyInformation from './CompanyInformation';

export default function CompaniesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialIndex, setInitialIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Randomize initial slide client-side only — avoids hydration mismatch
  useEffect(() => {
    const rand = Math.floor(Math.random() * companies.length);
    setInitialIndex(rand);
    setActiveIndex(rand);
    setMounted(true);
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const activeCompany = companies[activeIndex];

  if (!mounted) return null;

  return (
    /*
      Siena card entry — same pattern as About sliding over Hero and
      CompaniesSection sliding over About's orange band.
      The -mt-[6vh] + z-30 + rounded-t card is applied in page.tsx.
      This section just needs the visual card treatment here.
    */
    <section
      id="showcase"
      aria-label="Companies Showcase"
      className="
        relative bg-canvas
        rounded-t-[32px] md:rounded-t-[48px]
        shadow-[0_-20px_50px_rgba(0,0,0,0.06)]
        border-t border-hairline/40
        pt-16 pb-20 lg:pt-20 lg:pb-28
        overflow-hidden
      "
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <CompaniesHeader />
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <CompaniesCarousel
          companies={companies}
          activeIndex={activeIndex}
          initialIndex={initialIndex}
          onSlideChange={handleSlideChange}
        />
      </motion.div>

      {/* Progress indicator */}
      <CompanyProgress
        activeIndex={activeIndex}
        total={companies.length}
      />

      {/* Company information panel */}
      <CompanyInformation company={activeCompany} />

      {/* Scroll hint */}
      <div className="flex justify-center pt-8">
        <p className="font-robotoMono text-[10px] uppercase tracking-[0.22em] text-slateMuted/75">
          Scroll to explore more companies
        </p>
      </div>
    </section>
  );
}
