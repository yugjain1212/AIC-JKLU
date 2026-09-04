'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FounderStory {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
  gradient: [string, string];
}

const STORIES: FounderStory[] = [
  {
    id: '1',
    name: 'Kunal Sinha',
    role: 'Co-Founder & CEO',
    company: 'LearnLoom',
    quote:
      'AIC gave us the right mentors at the right time, turning our technical prototype into a commercially viable product.',
    initials: 'KS',
    gradient: ['#EB5725', '#F97316'],
  },
  {
    id: '2',
    name: 'Ritika Singh',
    role: 'Founder',
    company: 'MediSync',
    quote:
      'From an idea in a dorm room to clinical trials across 90+ rural health centers. The incubation seed support was pivotal.',
    initials: 'RS',
    gradient: ['#7C3AED', '#A78BFA'],
  },
  {
    id: '3',
    name: 'Aryan Sharma',
    role: 'Founder & CTO',
    company: 'NeuroNova',
    quote:
      'The ecosystem helped us go from 0 to 1 with hardware labs, patent filing counsel, and institutional angel connections.',
    initials: 'AS',
    gradient: ['#059669', '#34D399'],
  },
];

export default function FounderStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-full p-7 sm:p-9 rounded-2xl border border-[#E4E4E0] bg-white flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      {/* ── Header Row ── */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E4E4E0]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#EB5725]" />
          <h3 className="font-robotoMono text-[11px] font-bold uppercase tracking-[0.2em] text-[#121212]">
            FOUNDER STORIES
          </h3>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous story"
            className="w-8 h-8 rounded-full border border-[#E4E4E0] bg-white flex items-center justify-center text-[#121212] hover:border-[#EB5725] hover:text-[#EB5725] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next story"
            className="w-8 h-8 rounded-full border border-[#E4E4E0] bg-white flex items-center justify-center text-[#121212] hover:border-[#EB5725] hover:text-[#EB5725] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── 3 Stories Cards (Grid on Desktop, Carousel on Mobile) ── */}
      {/* Desktop: show all 3 */}
      <div className="hidden md:grid md:grid-cols-3 gap-5 my-2 flex-1">
        {STORIES.map((story, i) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between p-5 rounded-xl border border-[#E4E4E0]/80 bg-[#FAF7F2] hover:bg-white hover:border-[#EB5725]/40 hover:shadow-sm transition-all duration-200"
          >
            {/* Avatar & Quote Icon */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                style={{
                  background: `linear-gradient(135deg, ${story.gradient[0]}, ${story.gradient[1]})`,
                }}
              >
                <span className="font-robotoMono text-[13px] font-bold text-white tracking-wide">
                  {story.initials}
                </span>
              </div>
              <svg
                className="w-6 h-6 text-[#EB5725]/25 shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote className="font-marcellus text-[14px] sm:text-[14.5px] leading-[1.6] text-[#121212] mb-5 flex-1">
              &ldquo;{story.quote}&rdquo;
            </blockquote>

            {/* Founder Info */}
            <div className="pt-3 border-t border-[#E4E4E0]/60">
              <div className="font-robotoMono text-[12px] font-bold text-[#121212]">
                {story.name}
              </div>
              <div className="font-robotoMono text-[10.5px] text-[#71717A] tracking-wider uppercase mt-0.5">
                {story.role} · {story.company}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile: carousel single card */}
      <div className="md:hidden flex-1 my-2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={STORIES[currentIndex].id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between p-5 rounded-xl border border-[#E4E4E0]/80 bg-[#FAF7F2]"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                style={{
                  background: `linear-gradient(135deg, ${STORIES[currentIndex].gradient[0]}, ${STORIES[currentIndex].gradient[1]})`,
                }}
              >
                <span className="font-robotoMono text-[13px] font-bold text-white tracking-wide">
                  {STORIES[currentIndex].initials}
                </span>
              </div>
              <svg
                className="w-6 h-6 text-[#EB5725]/25 shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>

            <blockquote className="font-marcellus text-[14.5px] leading-[1.6] text-[#121212] mb-5">
              &ldquo;{STORIES[currentIndex].quote}&rdquo;
            </blockquote>

            <div className="pt-3 border-t border-[#E4E4E0]/60">
              <div className="font-robotoMono text-[12px] font-bold text-[#121212]">
                {STORIES[currentIndex].name}
              </div>
              <div className="font-robotoMono text-[10.5px] text-[#71717A] tracking-wider uppercase mt-0.5">
                {STORIES[currentIndex].role} · {STORIES[currentIndex].company}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {STORIES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to story ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                i === currentIndex ? 'bg-[#EB5725] scale-125' : 'bg-[#E4E4E0] hover:bg-[#D4D4D4]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="pt-4 border-t border-[#E4E4E0] flex items-center justify-between text-[#71717A] font-robotoMono text-[11px] mt-2">
        <span>48+ founders building with AIC-JKLU</span>
        <span className="text-[#EB5725] font-semibold hover:underline cursor-pointer transition-colors">
          Join the network →
        </span>
      </div>
    </div>
  );
}
