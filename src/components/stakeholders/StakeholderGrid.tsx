'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { Stakeholder } from '@/data/stakeholders';
import StakeholderCard from './StakeholderCard';

interface StakeholderGridProps {
  stakeholders: Stakeholder[];
}

export default function StakeholderGrid({ stakeholders }: StakeholderGridProps) {
  return (
    <section aria-label="Stakeholders Directory" className="relative w-full overflow-hidden pt-12 sm:pt-16 pb-24 sm:pb-32">
      
      {/* ================================================================
          GIANT BACKGROUND WATERMARK TYPOGRAPHY ("PEOPLE")
      ================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 top-6 sm:top-10 flex justify-center overflow-hidden z-0 opacity-[0.035]"
      >
        <span
          className="font-marcellus text-[clamp(9rem,24vw,26rem)] leading-[0.75] tracking-[-0.05em] text-[#121212] whitespace-nowrap"
          style={{
            WebkitTextStroke: '2px currentColor',
            WebkitTextFillColor: 'transparent',
          }}
        >
          PEOPLE
        </span>
      </div>

      {/* Decorative ambient subtle circle accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-[15%] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#EB5725]/[0.035] to-transparent blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5%] bottom-[15%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#EB5725]/[0.03] to-transparent blur-3xl z-0"
      />

      {/* ================================================================
          MAIN 5-COLUMN EDITORIAL GRID
      ================================================================= */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        {stakeholders.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-7 xl:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {stakeholders.map((stakeholder, index) => (
                <StakeholderCard
                  key={stakeholder.id || stakeholder.slug}
                  stakeholder={stakeholder}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty state if search or filter yielded 0 results */
          <div className="py-20 text-center">
            <p className="font-marcellus text-2xl text-[#121212]">
              No stakeholders found in this category.
            </p>
            <p className="mt-2 font-robotoMono text-xs text-[#52525B]">
              Try selecting another category or viewing all stakeholders.
            </p>
          </div>
        )}
      </div>

    </section>
  );
}
