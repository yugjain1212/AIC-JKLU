'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';
import { companies } from '@/data/companies';
import CompaniesHeader from './CompaniesHeader';
import CompaniesCarousel from './CompaniesCarousel';
import CompanyProgress from './CompanyProgress';
import CompanyInformation from './CompanyInformation';

// ── Siena entry wrapper ────────────────────────────────────────────────────
// The section slides up from below as user scrolls from CompaniesSection
function SienaEntry({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.25'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

export default function CompaniesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialIndex, setInitialIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Randomize initial slide client-side to avoid hydration mismatch
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
    <SienaEntry>
      <section
        id="showcase"
        aria-label="Companies Showcase"
        className="relative bg-canvas py-20 lg:py-28 overflow-hidden border-t border-hairline/60"
      >
        {/* Header */}
        <CompaniesHeader />

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <CompaniesCarousel
            companies={companies}
            activeIndex={activeIndex}
            initialIndex={initialIndex}
            onSlideChange={handleSlideChange}
          />
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CompanyProgress
            activeIndex={activeIndex}
            total={companies.length}
          />
        </motion.div>

        {/* Company information */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <CompanyInformation company={activeCompany} />
        </motion.div>

        {/* Scroll hint */}
        <div className="flex justify-center pt-10">
          <p className="font-robotoMono text-[9px] uppercase tracking-[0.22em] text-slateMuted/40">
            Scroll to explore more companies
          </p>
        </div>
      </section>
    </SienaEntry>
  );
}
