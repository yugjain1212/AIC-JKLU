'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { IN_MOTION_ITEMS } from '@/data/library';
import MediaPlaceholder from './MediaPlaceholder';

export default function LibraryInMotion() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-8 sm:py-10 select-none">
      {/* ── Section Header ── */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-robotoMono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand"
        >
          AIC / IN MOTION
        </motion.p>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="
              w-8 h-8 rounded-full border border-black/15 bg-surface
              flex items-center justify-center text-obsidian
              hover:bg-obsidian hover:text-white hover:border-obsidian
              transition-all duration-200 cursor-pointer shadow-sm
            "
          >
            <ArrowLeft size={14} />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="
              w-8 h-8 rounded-full border border-black/15 bg-surface
              flex items-center justify-center text-obsidian
              hover:bg-obsidian hover:text-white hover:border-obsidian
              transition-all duration-200 cursor-pointer shadow-sm
            "
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* ── Horizontal Scroll Track ── */}
      <div
        ref={scrollRef}
        className="
          flex items-stretch gap-4 sm:gap-5
          overflow-x-auto pb-4 pt-1 no-scrollbar
          scroll-smooth
        "
      >
        {IN_MOTION_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="
              w-[240px] sm:w-[280px] lg:w-[300px] shrink-0
              rounded-xl sm:rounded-2xl overflow-hidden
              bg-surface border border-black/10
              shadow-[0_6px_20px_rgba(0,0,0,0.04)]
              flex flex-col group cursor-pointer
            "
          >
            {/* Top Media Area */}
            <div className="relative w-full h-[140px] sm:h-[160px] overflow-hidden">
              <MediaPlaceholder
                src={item.image}
                alt={item.title}
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-3 sm:p-3.5 bg-surface border-t border-black/5 flex items-center gap-3">
              <span className="font-robotoMono text-[12px] font-bold text-obsidian tracking-[0.08em] shrink-0">
                {item.number}
              </span>
              <span className="font-marcellus text-[13.5px] sm:text-[14px] text-obsidian leading-snug line-clamp-1 group-hover:text-brand transition-colors">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
