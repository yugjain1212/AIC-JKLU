'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, MotionValue, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Landmark, WalletCards, Cpu, Globe2, ArrowLeft, ArrowRight } from 'lucide-react';
import { type PartnerGroupConfig } from '@/data/partners';
import PartnerLogo from './PartnerLogo';

const ICON_MAP = {
  Landmark,
  WalletCards,
  Cpu,
  Globe2,
};

interface PartnerCategoryPanelProps {
  group: PartnerGroupConfig;
  index: number;
  scrollYProgress: MotionValue<number>;
}

export default function PartnerCategoryPanel({
  group,
  index,
  scrollYProgress,
}: PartnerCategoryPanelProps) {
  const IconComponent = ICON_MAP[group.iconName] || Globe2;
  const prefersReducedMotion = useReducedMotion();

  // ── Horizontal Carousel Navigation State ──
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPages, setMaxPages] = useState(1);

  // Parallax subtle horizontal displacement
  const parallaxOffset = group.direction * 36;
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    [group.direction * -18, parallaxOffset]
  );
  const smoothX = useSpring(rawX, {
    stiffness: 65,
    damping: 24,
  });

  const activeX = prefersReducedMotion ? 0 : smoothX;

  // Calculate pages based on scrollWidth vs clientWidth
  const calculatePages = () => {
    if (containerRef.current) {
      const { clientWidth, scrollWidth } = containerRef.current;
      if (scrollWidth <= clientWidth + 4) {
        setMaxPages(1);
        setCurrentPage(0);
      } else {
        const pages = Math.ceil(scrollWidth / clientWidth);
        setMaxPages(Math.max(1, pages));
      }
    }
  };

  useEffect(() => {
    calculatePages();
    window.addEventListener('resize', calculatePages);
    return () => window.removeEventListener('resize', calculatePages);
  }, [group.partners.length]);

  const scrollToPage = (pageIndex: number) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const targetScroll = pageIndex * clientWidth;
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
      setCurrentPage(pageIndex);
    }
  };

  const handlePrev = () => {
    const nextP = currentPage > 0 ? currentPage - 1 : maxPages - 1;
    scrollToPage(nextP);
  };

  const handleNext = () => {
    const nextP = currentPage < maxPages - 1 ? currentPage + 1 : 0;
    scrollToPage(nextP);
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const calculatedPage = Math.round(scrollLeft / clientWidth);
      if (calculatedPage !== currentPage) {
        setCurrentPage(calculatedPage);
      }
    }
  };

  // Group partners for multi-row or single-row display
  const isMultiRow = group.isMultiRow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full group/panel"
    >
      {/* ── MAIN TRANSLUCENT PANEL FRAME ── */}
      <div
        className="
          relative
          w-full
          rounded-[22px]
          bg-white/60 hover:bg-white/75
          backdrop-blur-md
          border border-[#121212]/[0.08]
          p-6 sm:p-7 lg:p-8
          shadow-[0_4px_24px_rgba(0,0,0,0.025)]
          hover:shadow-[0_8px_32px_rgba(0,0,0,0.045)]
          transition-all duration-300
          overflow-hidden
        "
      >
        {/* ── 1. PANEL HEADER: Number, Title, Hairline Divider, Pagination Dots ── */}
        <div className="flex items-center justify-between gap-6 pb-5 border-b border-[#121212]/[0.07]">
          {/* Category Number & Title */}
          <div className="flex items-center gap-2">
            <span className="font-robotoMono text-[13px] sm:text-[14px] font-bold text-[#EB5725] tracking-wider">
              {group.number}
            </span>
            <span className="font-robotoMono text-[13px] sm:text-[14px] font-bold text-[#121212] tracking-[0.14em] uppercase">
              / {group.title}
            </span>
          </div>

          {/* Pagination Indicators (Active dot orange) */}
          <div className="flex items-center gap-2" aria-hidden="true">
            {Array.from({ length: Math.max(4, maxPages) }).map((_, dotIdx) => {
              const isActive =
                maxPages > 1 ? dotIdx === currentPage : dotIdx === 0;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => dotIdx < maxPages && scrollToPage(dotIdx)}
                  className={`
                    h-1.5 rounded-full transition-all duration-300
                    ${isActive
                      ? 'w-5 bg-[#EB5725]'
                      : 'w-1.5 bg-[#121212]/20 hover:bg-[#121212]/40'
                    }
                  `}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* ── 2. BODY CONTENT: Floating Icon Badge + Parallax Logo Track ── */}
        <div className="relative pt-6 sm:pt-7 flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8">

          {/* Floating Icon Badge with Dotted Orange Arc */}
          <div className="relative shrink-0 flex items-center justify-center self-center md:self-auto">
            {/* Dotted Orange Arc Semicircle behind the badge */}
            <svg
              className="absolute -top-3 -left-3 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none -z-0"
              viewBox="0 0 96 96"
              fill="none"
            >
              <circle
                cx="48"
                cy="48"
                r="42"
                stroke="#EB5725"
                strokeWidth="1.2"
                strokeDasharray="3 4"
                className="opacity-45"
              />
              <circle
                cx="88"
                cy="38"
                r="2.5"
                fill="#EB5725"
                className="opacity-75"
              />
            </svg>

            {/* Circular Icon Badge */}
            <div className="
              relative z-10
              w-14 h-14 sm:w-16 sm:h-16
              rounded-full
              bg-white
              border border-[#121212]/[0.09]
              shadow-[0_4px_16px_rgba(0,0,0,0.06)]
              flex items-center justify-center
              text-[#121212]
              group-hover/panel:border-[#EB5725]/40
              group-hover/panel:text-[#EB5725]
              group-hover/panel:scale-105
              transition-all duration-300
            ">
              <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover/panel:rotate-3" strokeWidth={1.75} />
            </div>
          </div>

          {/* Logo Scroll Area / Track with Parallax Motion */}
          <div className="w-full flex-1 overflow-hidden">
            <motion.div
              style={{ x: activeX }}
              className="w-full transition-transform duration-100 ease-out"
            >
              <div
                ref={containerRef}
                onScroll={handleScroll}
                className="
                  w-full
                  overflow-x-auto
                  no-scrollbar
                  scroll-smooth
                  py-1
                "
              >
                {isMultiRow ? (
                  /* 2-ROW GRID for Technology & Ecosystem */
                  <div className="grid grid-rows-2 grid-flow-col auto-cols-[minmax(140px,180px)] sm:auto-cols-[minmax(160px,195px)] gap-3 sm:gap-8">
                    {group.partners.map((partner) => (
                      <PartnerLogo key={partner.id} partner={partner} />
                    ))}
                  </div>
                ) : (
                  /* 1-ROW GRID for Government & Investors */
                  <div className="grid grid-flow-col auto-cols-[minmax(140px,185px)] sm:auto-cols-[minmax(165px,210px)] gap-3.5 sm:gap-4">
                    {group.partners.map((partner) => (
                      <PartnerLogo key={partner.id} partner={partner} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>

        </div>

        {/* ── 3. BOTTOM CONTROLS: Arrow Buttons (← →) ── */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#121212]/[0.05]">
          <span className="font-robotoMono text-[10px] text-[#52525B] uppercase tracking-widest hidden sm:inline-block">
            {group.partners.length} + Strategic Partners
          </span>

          <div className="flex items-center gap-2 ml-auto">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label={`Previous ${group.title} partners`}
              className="
                group/btn
                w-8 h-8 sm:w-9 sm:h-9
                rounded-full
                bg-white hover:bg-[#EB5725]
                border border-[#EB5725]/40 hover:border-[#EB5725]
                flex items-center justify-center
                text-[#EB5725] hover:text-white
                shadow-sm
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5725]
              "
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-x-0.5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label={`Next ${group.title} partners`}
              className="
                group/btn
                w-8 h-8 sm:w-9 sm:h-9
                rounded-full
                bg-white hover:bg-[#EB5725]
                border border-[#EB5725]/40 hover:border-[#EB5725]
                flex items-center justify-center
                text-[#EB5725] hover:text-white
                shadow-sm
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB5725]
              "
            >
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
