'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Program } from '@/data/programs';
import {
  AcceleratorIllustration,
  IncubationIllustration,
  RiseIllustration,
  LeapIllustration,
} from './ProgramIllustrations';

interface ProgramCardProps {
  program: Program;
  index: number;
}

export default function ProgramCard({ program, index }: ProgramCardProps) {
  const isExternal = program.formUrl.startsWith('http');

  const renderIllustration = () => {
    switch (program.id) {
      case 'accelerator':
        return <AcceleratorIllustration />;
      case 'incubation':
        return <IncubationIllustration />;
      case 'rise':
        return <RiseIllustration />;
      case 'leap':
        return <LeapIllustration />;
      default:
        return <AcceleratorIllustration />;
    }
  };

  const CardContent = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        flex-col
        justify-between
        w-full
        h-full
        min-h-[440px]
        sm:min-h-[460px]
        rounded-[24px]
        border
        border-[#E4E4E0]
        bg-white/80
        backdrop-blur-sm
        p-7
        sm:p-9
        shadow-[0_4px_24px_rgba(0,0,0,0.03)]
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
        hover:border-[#EB5725]/40
        hover:-translate-y-1.5
        transition-all
        duration-300
        ease-out
        cursor-pointer
      "
    >
      {/* ── TOP: Central Vector Illustration ── */}
      <div className="flex-1 flex items-center justify-center py-6 sm:py-8">
        <div className="w-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          {renderIllustration()}
        </div>
      </div>

      {/* ── BOTTOM: Metadata & Action ── */}
      <div className="mt-auto pt-5 border-t border-[#E4E4E0]/60">
        {/* Small Orange Divider Accent */}
        <div className="h-[2px] w-8 bg-[#EB5725] mb-3.5 transition-all duration-300 group-hover:w-12" />

        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-[85%] min-h-[64px] flex flex-col justify-end">
            <h3 className="font-marcellus text-[22px] sm:text-[26px] lg:text-[28px] text-[#121212] leading-tight tracking-[-0.02em] transition-colors duration-200 group-hover:text-[#EB5725]">
              {program.title}
            </h3>

            <p className="font-robotoMono text-[11.5px] sm:text-[12.5px] text-[#52525B] leading-relaxed">
              {program.subtitle}
            </p>
          </div>

          {/* Circular Action Button */}
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#EB5725]/40
              bg-white
              text-[#EB5725]
              shadow-sm
              transition-all
              duration-300
              ease-out
              group-hover:scale-110
              group-hover:bg-[#EB5725]
              group-hover:text-white
              group-hover:border-[#EB5725]
            "
          >
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </motion.article>
  );

  if (isExternal) {
    return (
      <a
        href={program.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Apply for ${program.title}`}
        className="flex flex-col w-full h-full cursor-pointer no-underline"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <Link
      href={program.formUrl}
      aria-label={`Apply for ${program.title}`}
      className="flex flex-col w-full h-full cursor-pointer no-underline"
    >
      {CardContent}
    </Link>
  );
}
