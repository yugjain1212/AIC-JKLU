'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// =========================================================================
// VECTOR VIGNETTE 01: Mentorship Program (Outline Mentor/Mentee Profile)
// =========================================================================
function MentorshipVignette() {
  return (
    <div className="relative w-full h-[85px] flex items-center justify-center select-none">
      <svg viewBox="0 0 120 75" fill="none" className="w-full h-full overflow-visible">
        {/* Coral Accent Blob */}
        <circle cx="72" cy="30" r="16" fill="#FED7AA" opacity="0.65" />
        
        {/* Mentor Outline Profile */}
        <g stroke="#121212" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" fill="#FAF7F0">
          <circle cx="48" cy="30" r="11" />
          <path d="M 33 58 C 33 46 41 44 48 44 C 55 44 63 46 63 58" />
        </g>

        {/* Speech Bubble with Advice Lines */}
        <g stroke="#121212" strokeWidth="1" strokeLinejoin="round" fill="#FFFFFF">
          <rect x="62" y="16" width="28" height="20" rx="3" />
          <polygon points="62,28 56,32 62,34" fill="#FFFFFF" />
          {/* Orange Accent Lines */}
          <line x1="68" y1="23" x2="84" y2="23" stroke="#EB5725" strokeWidth="1.2" />
          <line x1="68" y1="28" x2="80" y2="28" stroke="#71717A" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR VIGNETTE 02: AWS Credits (Cloud & AWS Orange Pill)
// =========================================================================
function AwsCreditsVignette() {
  return (
    <div className="relative w-full h-[85px] flex items-center justify-center select-none">
      <svg viewBox="0 0 120 75" fill="none" className="w-full h-full overflow-visible">
        {/* Orange Accent Blob */}
        <circle cx="76" cy="42" r="12" fill="#FED7AA" opacity="0.8" />

        {/* Cloud Outline */}
        <g stroke="#121212" strokeWidth="1.2" strokeLinejoin="round" fill="#FAF7F0">
          <path
            d="M 38 46 C 30 46 26 38 32 30 C 30 18 46 14 54 22 C 60 14 78 16 78 28 C 88 28 90 40 82 46 Z"
          />
          {/* Subtle Inner Detail */}
          <path d="M 52 32 Q 62 26 70 32" stroke="#71717A" strokeWidth="0.75" fill="none" />
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR VIGNETTE 03: Research Access (Flask & Purple Aura)
// =========================================================================
function ResearchAccessVignette() {
  return (
    <div className="relative w-full h-[85px] flex items-center justify-center select-none">
      <svg viewBox="0 0 120 75" fill="none" className="w-full h-full overflow-visible">
        {/* Purple Accent Blob */}
        <circle cx="60" cy="38" r="18" fill="#DDD6FE" opacity="0.75" />

        {/* Laboratory Conical Flask */}
        <g stroke="#121212" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" fill="#FAF7F0">
          <rect x="55" y="16" width="10" height="4" rx="1" />
          <line x1="57" y1="20" x2="57" y2="30" />
          <line x1="63" y1="20" x2="63" y2="30" />
          <path d="M 57 30 L 44 54 C 42 58 45 60 50 60 L 70 60 C 75 60 78 58 76 54 L 63 30 Z" />
          {/* Liquid Level */}
          <path d="M 48 48 Q 60 52 72 48" stroke="#8B5CF6" strokeWidth="1.1" fill="none" />
          {/* Sparkle */}
          <text x="57" y="44" fill="#8B5CF6" fontSize="10" fontFamily="sans-serif">✦</text>
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR VIGNETTE 04: Government Schemes (Classical Landmark Pillar)
// =========================================================================
function GovernmentSchemesVignette() {
  return (
    <div className="relative w-full h-[85px] flex items-center justify-center select-none">
      <svg viewBox="0 0 120 75" fill="none" className="w-full h-full overflow-visible">
        {/* Mint Green Accent Blob */}
        <circle cx="68" cy="36" r="17" fill="#A7F3D0" opacity="0.65" />

        {/* Government Building Pillars */}
        <g stroke="#121212" strokeWidth="1.15" strokeLinejoin="round" fill="#FAF7F0">
          {/* Pediment Roof */}
          <polygon points="40,26 60,16 80,26" />
          {/* Architrave */}
          <rect x="42" y="26" width="36" height="4" />
          {/* Columns */}
          <line x1="48" y1="30" x2="48" y2="52" strokeWidth="1.4" />
          <line x1="56" y1="30" x2="56" y2="52" strokeWidth="1.4" />
          <line x1="64" y1="30" x2="64" y2="52" strokeWidth="1.4" />
          <line x1="72" y1="30" x2="72" y2="52" strokeWidth="1.4" />
          {/* Base */}
          <rect x="40" y="52" width="40" height="5" />
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR VIGNETTE 05: Co-working Space (Desk, Screen & Blue Blob)
// =========================================================================
function CoworkingSpaceVignette() {
  return (
    <div className="relative w-full h-[85px] flex items-center justify-center select-none">
      <svg viewBox="0 0 120 75" fill="none" className="w-full h-full overflow-visible">
        {/* Blue Accent Blob */}
        <circle cx="70" cy="40" r="15" fill="#BFDBFE" opacity="0.75" />

        {/* Desk, Chair, Computer */}
        <g stroke="#121212" strokeWidth="1.1" strokeLinejoin="round" fill="#FAF7F0">
          {/* Desk */}
          <line x1="36" y1="46" x2="76" y2="46" strokeWidth="1.3" />
          <line x1="40" y1="46" x2="40" y2="60" />
          <line x1="72" y1="46" x2="72" y2="60" />
          {/* Monitor */}
          <rect x="52" y="26" width="18" height="14" rx="1.5" />
          <line x1="61" y1="40" x2="61" y2="46" />
          {/* Ergonomic Office Chair */}
          <path d="M 68 34 Q 74 34 74 44 L 64 44" fill="none" strokeWidth="1.3" />
          <line x1="69" y1="44" x2="69" y2="58" />
          <line x1="64" y1="58" x2="74" y2="58" />
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR VIGNETTE 06: Learning Resources (Open Book & Coral Blob)
// =========================================================================
function LearningResourcesVignette() {
  return (
    <div className="relative w-full h-[85px] flex items-center justify-center select-none">
      <svg viewBox="0 0 120 75" fill="none" className="w-full h-full overflow-visible">
        {/* Coral Accent Blob */}
        <circle cx="70" cy="45" r="14" fill="#FED7AA" opacity="0.8" />

        {/* Open Book */}
        <g stroke="#121212" strokeWidth="1.15" strokeLinejoin="round" fill="#FAF7F0">
          <path d="M 60 54 Q 44 48 34 50 L 34 26 Q 44 24 60 30 Z" />
          <path d="M 60 54 Q 76 48 86 50 L 86 26 Q 76 24 60 30 Z" />
          <line x1="60" y1="30" x2="60" y2="54" strokeWidth="1.3" />
          {/* Text Page Lines */}
          <line x1="40" y1="34" x2="52" y2="36" stroke="#71717A" strokeWidth="0.8" />
          <line x1="40" y1="40" x2="54" y2="42" stroke="#71717A" strokeWidth="0.8" />
          <line x1="66" y1="36" x2="80" y2="34" stroke="#71717A" strokeWidth="0.8" />
          <line x1="66" y1="42" x2="78" y2="40" stroke="#71717A" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR VIGNETTE 07: Professional Services (Briefcase & Amber Blob)
// =========================================================================
function ProfessionalServicesVignette() {
  return (
    <div className="relative w-full h-[85px] flex items-center justify-center select-none">
      <svg viewBox="0 0 120 75" fill="none" className="w-full h-full overflow-visible">
        {/* Amber Accent Blob */}
        <circle cx="68" cy="38" r="16" fill="#FDE68A" opacity="0.75" />

        {/* Business Briefcase */}
        <g stroke="#121212" strokeWidth="1.15" strokeLinejoin="round" fill="#FAF7F0">
          {/* Top Handle */}
          <path d="M 52 26 L 52 20 Q 60 18 68 20 L 68 26" fill="none" />
          {/* Case Body */}
          <rect x="42" y="26" width="36" height="26" rx="3" />
          {/* Flap & Lock */}
          <path d="M 42 26 L 60 38 L 78 26" fill="none" strokeWidth="1" />
          <rect x="57" y="36" width="6" height="5" rx="1" fill="#121212" />
        </g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR VIGNETTE 08: Peer Learning (Speech Bubbles & Teal Blob)
// =========================================================================
function PeerLearningVignette() {
  return (
    <div className="relative w-full h-[85px] flex items-center justify-center select-none">
      <svg viewBox="0 0 120 75" fill="none" className="w-full h-full overflow-visible">
        {/* Teal Accent Blob */}
        <circle cx="70" cy="38" r="17" fill="#99F6E4" opacity="0.65" />

        {/* Speech Bubbles */}
        <g stroke="#121212" strokeWidth="1.15" strokeLinejoin="round" fill="#FAF7F0">
          {/* Primary Bubble */}
          <path d="M 38 34 C 38 24 48 18 60 18 C 72 18 82 24 82 34 C 82 44 72 48 62 48 L 54 54 L 56 47 C 46 46 38 42 38 34 Z" />
          {/* 3 Dots */}
          <circle cx="52" cy="33" r="1.5" fill="#121212" />
          <circle cx="60" cy="33" r="1.5" fill="#121212" />
          <circle cx="68" cy="33" r="1.5" fill="#121212" />
        </g>
      </svg>
    </div>
  );
}

const OFFERING_CARDS = [
  {
    number: '01',
    plusColor: '#EB5725',
    dashColor: '#EB5725',
    title: 'Mentorship Program',
    body: 'Access to experienced mentors through structured 1:1 mentorship.',
    vignette: MentorshipVignette,
  },
  {
    number: '02',
    plusColor: '#EB5725',
    dashColor: '#EB5725',
    title: 'AWS Credits',
    body: 'Up to $10K in AWS credits to build, deploy and scale.',
    vignette: AwsCreditsVignette,
  },
  {
    number: '03',
    plusColor: '#8B5CF6',
    dashColor: '#8B5CF6',
    title: 'Research Access',
    body: 'Resources from AIC research labs and development offices.',
    vignette: ResearchAccessVignette,
  },
  {
    number: '04',
    plusColor: '#10B981',
    dashColor: '#10B981',
    title: 'Government Schemes',
    body: 'Guidance and support to access relevant government schemes.',
    vignette: GovernmentSchemesVignette,
  },
  {
    number: '05',
    plusColor: '#3B82F6',
    dashColor: '#3B82F6',
    title: 'Co-working Space',
    body: 'Fully equipped co-working space to innovate and collaborate.',
    vignette: CoworkingSpaceVignette,
  },
  {
    number: '06',
    plusColor: '#EB5725',
    dashColor: '#EB5725',
    title: 'Learning Resources',
    body: 'Workshops, case studies, industry reports and reading materials.',
    vignette: LearningResourcesVignette,
  },
  {
    number: '07',
    plusColor: '#F59E0B',
    dashColor: '#F59E0B',
    title: 'Professional Services',
    body: 'Legal, accounting, IPR and compliance support.',
    vignette: ProfessionalServicesVignette,
  },
  {
    number: '08',
    plusColor: '#14B8A6',
    dashColor: '#14B8A6',
    title: 'Peer Learning',
    body: 'Connect, learn and grow with fellow founders and experts.',
    vignette: PeerLearningVignette,
  },
];

export default function LeapOfferings() {
  return (
    <section id="offerings" className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── Background Decorative Flight Trajectory & Paper Airplane ── */}
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
        aria-hidden="true"
      >
        {/* Left Sweeping Trajectory Curve with Nodes */}
        <path
          d="M -20 320 Q 60 280 60 380 Q 60 480 -10 490 Q -40 500 120 540"
          stroke="#71717A"
          strokeWidth="0.85"
          strokeDasharray="4 4"
          fill="none"
        />
        <circle cx="60" cy="380" r="3" fill="#EB5725" />
        <circle cx="78" cy="335" r="3" fill="#EB5725" />

        {/* Paper Airplane at bottom left */}
        <g transform="translate(125, 528) rotate(-15)">
          <path d="M 0 0 L 22 -6 L 10 12 Z" fill="#FAF7F0" stroke="#71717A" strokeWidth="0.9" />
          <path d="M 0 0 L 22 -6 L 8 4 Z" fill="#E4E4E0" stroke="#71717A" strokeWidth="0.8" />
        </g>

        {/* Right Edge Trajectory */}
        <path
          d="M 1400 320 Q 1460 380 1420 480"
          stroke="#71717A"
          strokeWidth="0.85"
          strokeDasharray="4 4"
          fill="none"
        />
        <circle cx="1430" cy="360" r="3" fill="#EB5725" />
        <circle cx="1410" cy="460" r="3" fill="#EB5725" />

        {/* Top Right Dot Grid */}
        <g opacity="0.25" fill="#EB5725">
          {Array.from({ length: 6 }).map((_, col) =>
            Array.from({ length: 6 }).map((_, row) => (
              <circle key={`off-dm-${col}-${row}`} cx={col * 12 + 1340} cy={row * 12 + 50} r="1" />
            ))
          )}
        </g>
      </svg>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* =========================================================
            MAIN 2-COLUMN SECTION: Editorial on Left | 8 Cards on Right
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* ── LEFT COLUMN: Editorial Typography & Actions ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#121212]">
                WHAT WE OFFER
              </span>
              <div className="w-8 h-[1.5px] bg-[#121212]" />
            </div>

            {/* Serif Heading */}
            <h2 className="font-marcellus text-[44px] sm:text-[52px] lg:text-[58px] leading-[0.98] tracking-[-0.035em] text-[#121212] mb-6">
              Everything
              <br />
              <span className="text-[#EB5725]">you need</span>
              <br />
              to build
              <br />
              what matters<span className="text-[#EB5725]">.</span>
            </h2>

            {/* Orange Plus Accent */}
            <div className="font-mono text-[#EB5725] text-xs font-bold mb-4">
              +
            </div>

            {/* Description Paragraph */}
            <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.8] text-[#52525B] max-w-xs mb-8 sm:mb-10">
              Resources, access and support designed to help AgriTech & RuralTech startups grow faster and go further.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.f6s.com/leap-2026/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center
                  bg-[#EB5725] hover:bg-[#C84214] text-white
                  px-7 py-3.5 rounded-full
                  font-robotoMono text-[11px] font-bold uppercase tracking-[0.16em]
                  shadow-[0_4px_16px_rgba(235,87,37,0.25)] hover:shadow-[0_6px_22px_rgba(235,87,37,0.35)]
                  transition-all duration-200
                "
              >
                <span>EXPLORE OPPORTUNITIES</span>
              </a>

              <a
                href="https://www.f6s.com/leap-2026/apply"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply now"
                className="
                  w-11 h-11 rounded-full border border-[#EB5725]
                  flex items-center justify-center text-[#EB5725]
                  hover:bg-[#EB5725] hover:text-white
                  transition-colors duration-200
                "
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>


          {/* ── RIGHT COLUMN: 8 Offering Cards (4 Columns x 2 Rows) ── */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {OFFERING_CARDS.map((card, idx) => {
              const VignetteComp = card.vignette;

              return (
                <motion.div
                  key={card.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="
                    group
                    relative
                    bg-white
                    border border-[#E4E4E0]
                    rounded-2xl
                    p-5 sm:p-5.5
                    shadow-[0_2px_12px_rgba(0,0,0,0.02)]
                    hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]
                    hover:border-[#EB5725]/40
                    hover:-translate-y-1
                    transition-all duration-300
                    flex flex-col justify-between
                    min-h-[260px]
                  "
                >
                  <div>
                    {/* Top Row: Number on Left | Plus on Right */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-robotoMono text-[10.5px] font-bold text-[#71717A]">
                        {card.number}
                      </span>
                      <span
                        className="font-mono text-xs font-bold leading-none"
                        style={{ color: card.plusColor }}
                      >
                        +
                      </span>
                    </div>

                    {/* Center Vignette Artwork */}
                    <div className="my-2 transition-transform duration-300 group-hover:scale-105">
                      <VignetteComp />
                    </div>

                    {/* Title */}
                    <h3 className="font-marcellus text-[16px] sm:text-[17px] text-[#121212] leading-tight font-medium mb-2">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="font-robotoMono text-[10.5px] sm:text-[11px] leading-[1.65] text-[#52525B]">
                      {card.body}
                    </p>
                  </div>

                  {/* Bottom Dash Indicator */}
                  <div
                    className="w-5 h-[1.5px] mt-4"
                    style={{ backgroundColor: card.dashColor }}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
