'use client';

import { motion } from 'framer-motion';

// =========================================================================
// VECTOR ICONS (Clean White Line-Art for Dark Obsidian Card)
// =========================================================================

function SeedFundingIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sprouting Seedling Plant */}
      <path d="M 24 28 Q 24 16 24 10" stroke="#EB5725" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 24 14 C 18 10 16 18 24 18 Z" fill="rgba(235,87,37,0.15)" stroke="#EB5725" strokeWidth="1.4" />
      <path d="M 24 10 C 30 6 32 14 24 14 Z" fill="rgba(235,87,37,0.15)" stroke="#EB5725" strokeWidth="1.4" />

      {/* Gentle Cupped Hands Contour */}
      <path
        d="M 10 26 Q 16 26 21 31 L 24 34 L 27 31 Q 32 26 38 26"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 6 30 C 12 36 20 40 24 40 C 28 40 36 36 42 30"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function LabAccessIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Laboratory Flask Neck & Rim */}
      <line x1="20" y1="8" x2="28" y2="8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="8" x2="22" y2="18" stroke="#FFFFFF" strokeWidth="1.3" />
      <line x1="26" y1="8" x2="26" y2="18" stroke="#FFFFFF" strokeWidth="1.3" />

      {/* Flask Body */}
      <path
        d="M 22 18 L 12 36 C 11 38 12 40 15 40 L 33 40 C 36 40 37 38 36 36 L 26 18 Z"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="rgba(255,255,255,0.02)"
      />

      {/* Liquid Wave Line */}
      <path d="M 16 32 Q 24 34 32 32" stroke="#EB5725" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {/* Measurement marks */}
      <line x1="21" y1="24" x2="24" y2="24" stroke="#71717A" strokeWidth="1" strokeLinecap="round" />
      <line x1="19" y1="28" x2="24" y2="28" stroke="#71717A" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function MarketAccessIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Network Nodes (3-Point Ecosystem Triad) */}
      {/* Top Node */}
      <circle cx="24" cy="12" r="4" stroke="#FFFFFF" strokeWidth="1.4" fill="#121212" />
      {/* Bottom Left Node */}
      <circle cx="14" cy="32" r="4" stroke="#FFFFFF" strokeWidth="1.4" fill="#121212" />
      {/* Bottom Right Node */}
      <circle cx="34" cy="32" r="4" stroke="#FFFFFF" strokeWidth="1.4" fill="#121212" />

      {/* Interconnecting Network Guidelines */}
      <line x1="21" y1="15" x2="16" y2="29" stroke="#71717A" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="27" y1="15" x2="32" y2="29" stroke="#71717A" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="18" y1="32" x2="30" y2="32" stroke="#71717A" strokeWidth="1" strokeDasharray="2 2" />

      {/* Central Orange Hub Node */}
      <circle cx="24" cy="25" r="2.5" fill="#EB5725" />
    </svg>
  );
}

function ExpertMentoringIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mentor Head */}
      <circle cx="24" cy="16" r="6" stroke="#FFFFFF" strokeWidth="1.4" fill="#121212" />
      {/* Guidance Halo / Arc Above Head */}
      <path d="M 14 12 Q 24 4 34 12" stroke="#EB5725" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* Mentor Shoulders */}
      <path
        d="M 12 36 C 12 28 17 26 24 26 C 31 26 36 28 36 36"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

const OFFERINGS_DATA = [
  {
    icon: SeedFundingIcon,
    title: 'SEED FUNDING',
    description: 'Access to government funds, initial capital, and VC networks for scaling rural operations.',
  },
  {
    icon: LabAccessIcon,
    title: 'LAB ACCESS',
    description: 'Prototyping facilities and hardware labs provided in partnership with JKLU.',
  },
  {
    icon: MarketAccessIcon,
    title: 'MARKET ACCESS',
    description: 'Direct connections with NGOs, village panchayats, and rural distributors.',
  },
  {
    icon: ExpertMentoringIcon,
    title: 'EXPERT MENTORING',
    description: 'Guidance from industry leaders operating in the renewable and clean tech space.',
  },
];

export default function RiseOfferings() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#121212] text-white overflow-hidden select-none">
      
      {/* ── Background Technical Crosshair & Radial Coordinate Geometry ── */}
      <div className="absolute top-10 right-10 sm:right-16 w-60 h-60 pointer-events-none opacity-25" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="#71717A" strokeWidth="0.8" strokeDasharray="3 4" />
          <circle cx="100" cy="100" r="40" stroke="#71717A" strokeWidth="0.8" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#71717A" strokeWidth="0.8" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#71717A" strokeWidth="0.8" />
          <line x1="90" y1="100" x2="110" y2="100" stroke="#EB5725" strokeWidth="1.5" />
          <line x1="100" y1="90" x2="100" y2="110" stroke="#EB5725" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="mb-14 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725] mb-3 sm:mb-4"
          >
            OUR SUPPORT ECOSYSTEM
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-marcellus text-[38px] sm:text-[46px] lg:text-[52px] leading-[1.05] tracking-[-0.03em] text-white"
          >
            Incubation Offerings<span className="text-[#EB5725]">.</span>
          </motion.h2>
        </div>

        {/* ── 4-Column Offerings Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 lg:gap-8">
          {OFFERINGS_DATA.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between items-start group"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                    <IconComp />
                  </div>

                  {/* Title */}
                  <h3 className="font-robotoMono text-[12px] sm:text-[12.5px] font-bold text-white tracking-[0.16em] uppercase mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-robotoMono text-[12px] sm:text-[12.5px] text-white/70 leading-[1.8] max-w-[240px]">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom crosshair */}
                <div className="mt-8 font-mono text-[#EB5725] text-xs font-bold select-none opacity-80">
                  +
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
