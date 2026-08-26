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
  // Randomize initial slide client-side only — avoids hydration mismatch
  useEffect(() => {
    const rand = Math.floor(Math.random() * companies.length);
    setInitialIndex(rand);
    setActiveIndex(rand);
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const activeCompany = companies[activeIndex] || companies[0];

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
        pt-5 pb-24 lg:pt-6 lg:pb-32
        scroll-mt-24
        overflow-hidden
      "
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <CompaniesHeader />
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
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
    </section>
  );
}
