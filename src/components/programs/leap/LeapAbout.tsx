'use client';

import { motion } from 'framer-motion';

// =========================================================================
// VECTOR ARTWORK: Step 01 - IDEATE (Swaying Trees & Wind Breeze)
// =========================================================================
function IdeateIllustration() {
  return (
    <div className="relative w-full h-[115px] flex items-center justify-center select-none">
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Soft Peach Background Aura with Breathing Glow */}
        <motion.ellipse
          cx="80"
          cy="55"
          rx="55"
          ry="32"
          fill="#FFF2ED"
          animate={{ scale: [1, 1.06, 1], opacity: [0.75, 0.95, 0.75] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '80px 55px' }}
        />

        {/* Plus Reticles */}
        <text x="25" y="42" fill="#EB5725" fontSize="9" fontFamily="monospace">+</text>
        <text x="135" y="48" fill="#EB5725" fontSize="9" fontFamily="monospace">+</text>

        {/* Dynamic Wind Breeze Streamline Wisps */}
        <motion.path
          d="M 20 28 Q 45 22 70 28"
          stroke="#EB5725"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          animate={{ x: [-15, 25], opacity: [0, 0.75, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 85 20 Q 110 14 135 20"
          stroke="#71717A"
          strokeWidth="0.7"
          strokeLinecap="round"
          fill="none"
          animate={{ x: [-15, 25], opacity: [0, 0.6, 0] }}
          transition={{ duration: 3.2, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Ground Baseline */}
        <line x1="20" y1="78" x2="140" y2="78" stroke="#121212" strokeWidth="1" strokeLinecap="round" />

        {/* Main Tree (Left) with Wind Sway Animation */}
        <motion.g
          animate={{ rotate: [-2.2, 2.2, -2.2] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '68px 78px' }}
          stroke="#121212"
          strokeWidth="1.1"
          strokeLinejoin="round"
          fill="#FAF7F0"
        >
          <path d="M 68 78 L 70 42" strokeWidth="1.3" />
          <path d="M 70 58 L 62 48" strokeWidth="1" />
          <path d="M 70 54 L 78 46" strokeWidth="1" />
          <path
            d="M 62 48 C 50 45 48 28 60 20 C 54 8 70 -2 82 6 C 94 -2 106 10 100 24 C 110 32 104 46 92 48 C 86 52 70 52 62 48 Z"
            fill="#FAF7F0"
          />
          <path d="M 68 26 Q 74 22 82 26" stroke="#71717A" strokeWidth="0.65" fill="none" />
        </motion.g>

        {/* Secondary Smaller Tree (Right) with Gentle Wind Sway */}
        <motion.g
          animate={{ rotate: [2, -2, 2] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '104px 78px' }}
          stroke="#121212"
          strokeWidth="0.95"
          strokeLinejoin="round"
          fill="#FAF7F0"
        >
          <path d="M 104 78 L 105 52" strokeWidth="1.1" />
          <path
            d="M 98 52 C 90 50 88 38 96 32 C 92 24 104 18 112 22 C 120 18 128 26 124 34 C 130 40 126 50 118 52 Z"
            fill="#FAF7F0"
          />
        </motion.g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR ARTWORK: Step 02 - VALIDATE (Growing Plant Seedling & Checklist)
// =========================================================================
function ValidateIllustration() {
  return (
    <div className="relative w-full h-[115px] flex items-center justify-center select-none">
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Soft Peach Background Aura */}
        <motion.ellipse
          cx="80"
          cy="55"
          rx="55"
          ry="32"
          fill="#FFF2ED"
          animate={{ scale: [1, 1.06, 1], opacity: [0.75, 0.95, 0.75] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '80px 55px' }}
        />

        {/* Plus Reticles */}
        <text x="35" y="40" fill="#EB5725" fontSize="9" fontFamily="monospace">+</text>
        <text x="138" y="38" fill="#EB5725" fontSize="9" fontFamily="monospace">+</text>

        {/* Ground Baseline */}
        <line x1="20" y1="78" x2="140" y2="78" stroke="#121212" strokeWidth="1" strokeLinecap="round" />

        {/* Clipboard Frame */}
        <g stroke="#121212" strokeWidth="1.1" strokeLinejoin="round" fill="#FAF7F0">
          {/* Top Clip */}
          <rect x="70" y="16" width="20" height="7" rx="1.5" fill="#121212" />
          <rect x="74" y="13" width="12" height="4" rx="1" fill="#FAF7F0" />
          {/* Board & Paper */}
          <rect x="58" y="22" width="44" height="56" rx="2" fill="#FAF7F0" />

          {/* Sequential Glowing Checklist Items */}
          {/* Checkmark 1 */}
          <motion.path
            d="M 64 35 L 67 38 L 72 32"
            stroke="#EB5725"
            strokeWidth="1.3"
            fill="none"
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.1, 0.95] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <line x1="76" y1="35" x2="94" y2="35" stroke="#71717A" strokeWidth="0.8" />

          {/* Checkmark 2 */}
          <motion.path
            d="M 64 47 L 67 50 L 72 44"
            stroke="#EB5725"
            strokeWidth="1.3"
            fill="none"
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.1, 0.95] }}
            transition={{ duration: 2.2, delay: 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <line x1="76" y1="47" x2="94" y2="47" stroke="#71717A" strokeWidth="0.8" />

          {/* Checkmark 3 */}
          <motion.path
            d="M 64 59 L 67 62 L 72 56"
            stroke="#EB5725"
            strokeWidth="1.3"
            fill="none"
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.1, 0.95] }}
            transition={{ duration: 2.2, delay: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <line x1="76" y1="59" x2="94" y2="59" stroke="#71717A" strokeWidth="0.8" />
        </g>

        {/* Dynamic Growing Plant Seedling with Natural Sprouting Motion */}
        <motion.g
          animate={{
            scaleY: [0.9, 1.08, 0.9],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '120px 78px' }}
          stroke="#121212"
          strokeWidth="1.05"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#FAF7F0"
        >
          <path d="M 120 78 Q 120 62 115 54" fill="none" />
          <path d="M 115 54 C 108 50 106 60 116 62 Z" />
          <path d="M 116 56 C 124 52 126 62 118 64 Z" />
        </motion.g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR ARTWORK: Step 03 - ACCELERATE (Tractor Moving & Spinning Wheels)
// =========================================================================
function AccelerateIllustration() {
  return (
    <div className="relative w-full h-[115px] flex items-center justify-center select-none">
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Soft Peach Background Aura */}
        <motion.ellipse
          cx="80"
          cy="55"
          rx="55"
          ry="32"
          fill="#FFF2ED"
          animate={{ scale: [1, 1.06, 1], opacity: [0.75, 0.95, 0.75] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '80px 55px' }}
        />

        {/* Plus Reticles */}
        <text x="40" y="38" fill="#EB5725" fontSize="9" fontFamily="monospace">+</text>
        <text x="142" y="36" fill="#EB5725" fontSize="9" fontFamily="monospace">+</text>

        {/* Ground Baseline */}
        <line x1="20" y1="78" x2="140" y2="78" stroke="#121212" strokeWidth="1" strokeLinecap="round" />

        {/* Background Trees with Subtle Sway */}
        <motion.g
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '110px 78px' }}
          stroke="#121212"
          strokeWidth="0.95"
          strokeLinejoin="round"
          fill="#FAF7F0"
          opacity="0.8"
        >
          <path d="M 110 78 L 110 40" strokeWidth="1.1" />
          <path
            d="M 104 40 C 96 38 94 26 102 20 C 98 12 110 6 118 10 C 126 6 134 14 130 22 C 136 28 132 38 124 40 Z"
            fill="#FAF7F0"
          />
        </motion.g>

        {/* ── DYNAMIC MOVING TRACTOR WITH ROTATING WHEELS & EXHAUST SMOKE ── */}
        <motion.g
          animate={{
            x: [-5, 5, -5],
            y: [0, -0.6, 0, 0.6, 0],
          }}
          transition={{
            x: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 0.35, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {/* Exhaust Smoke Puffs */}
          <motion.circle
            cx="62"
            cy="52"
            r="1.2"
            fill="#EB5725"
            animate={{
              cy: [52, 44, 38],
              cx: [62, 59, 56],
              opacity: [0, 0.7, 0],
              scale: [0.6, 1.2, 1.6],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
          />

          {/* Tractor Body & Hood */}
          <g stroke="#121212" strokeWidth="1" strokeLinejoin="round" fill="#FAF7F0">
            <path d="M 50 60 L 66 60 L 66 69 L 50 69 Z" fill="#EB5725" />
            <line x1="62" y1="60" x2="62" y2="52" strokeWidth="1" strokeLinecap="round" />
            {/* Steering */}
            <line x1="50" y1="64" x2="53" y2="58" strokeWidth="0.9" />
            <line x1="51.5" y1="57" x2="54.5" y2="59" strokeWidth="1.1" strokeLinecap="round" />
            {/* Driver Seat & Fender */}
            <line x1="42" y1="59" x2="42" y2="67" strokeWidth="1.1" strokeLinecap="round" />
            <path d="M 37 68 Q 42 58 50 64" fill="none" strokeWidth="1.1" />
          </g>

          {/* Large Rear Rotating Wheel */}
          <g transform="translate(44, 71)">
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="0" cy="0" r="7" fill="#FAF7F0" stroke="#121212" strokeWidth="1.1" />
              <circle cx="0" cy="0" r="4.5" fill="#EB5725" stroke="#121212" strokeWidth="0.7" />
              <circle cx="0" cy="0" r="1.5" fill="#121212" />
              <line x1="-6.5" y1="0" x2="6.5" y2="0" stroke="#121212" strokeWidth="0.8" />
              <line x1="0" y1="-6.5" x2="0" y2="6.5" stroke="#121212" strokeWidth="0.8" />
            </motion.g>
          </g>

          {/* Small Front Rotating Wheel */}
          <g transform="translate(62, 73.5)">
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="0" cy="0" r="4.5" fill="#FAF7F0" stroke="#121212" strokeWidth="1" />
              <circle cx="0" cy="0" r="2.5" fill="#EB5725" stroke="#121212" strokeWidth="0.6" />
              <circle cx="0" cy="0" r="1" fill="#121212" />
            </motion.g>
          </g>
        </motion.g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR ARTWORK: Step 04 - IMPACT (Homestead & Radiating Antenna Waves)
// =========================================================================
function ImpactIllustration() {
  return (
    <div className="relative w-full h-[115px] flex items-center justify-center select-none">
      <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Soft Peach Background Aura */}
        <motion.ellipse
          cx="80"
          cy="55"
          rx="55"
          ry="32"
          fill="#FFF2ED"
          animate={{ scale: [1, 1.06, 1], opacity: [0.75, 0.95, 0.75] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '80px 55px' }}
        />

        {/* Plus Reticles */}
        <text x="45" y="42" fill="#EB5725" fontSize="9" fontFamily="monospace">+</text>
        <text x="145" y="24" fill="#EB5725" fontSize="9" fontFamily="monospace">+</text>

        {/* Ground Baseline */}
        <line x1="20" y1="78" x2="140" y2="78" stroke="#121212" strokeWidth="1" strokeLinecap="round" />

        {/* Small Plant Sprig with Breeze Sway */}
        <motion.g
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '36px 78px' }}
          stroke="#121212"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="#FAF7F0"
        >
          <path d="M 36 78 Q 36 68 32 62" fill="none" />
          <path d="M 32 62 C 26 60 26 68 34 68 Z" />
        </motion.g>

        {/* Rural Farm House */}
        <g stroke="#121212" strokeWidth="1.05" strokeLinejoin="round" fill="#FAF7F0">
          <polygon points="46,62 60,50 74,62" fill="#FAF7F0" />
          <rect x="48" y="62" width="24" height="16" fill="#FAF7F0" />
          <rect x="56" y="66" width="6" height="12" fill="#121212" />
        </g>

        {/* Grain Silos / Storage Sheds */}
        <g stroke="#121212" strokeWidth="0.95" strokeLinejoin="round" fill="#FAF7F0">
          <polygon points="76,66 84,60 92,66" fill="#FAF7F0" />
          <rect x="77" y="66" width="14" height="12" fill="#FAF7F0" />
          <polygon points="93,66 101,60 109,66" fill="#FAF7F0" />
          <rect x="94" y="66" width="14" height="12" fill="#FAF7F0" />
        </g>

        {/* Solar-Powered Telecommunication Tower */}
        <g stroke="#121212" strokeWidth="1" strokeLinejoin="round" fill="#FAF7F0">
          {/* Lattice Mast */}
          <polygon points="112,78 116,28 120,28 124,78" fill="#FAF7F0" strokeWidth="1.1" />
          <line x1="113" y1="65" x2="123" y2="45" strokeWidth="0.75" />
          <line x1="123" y1="65" x2="113" y2="45" strokeWidth="0.75" />
          {/* Solar Panel & Transceiver on Top */}
          <rect x="111" y="24" width="14" height="4" rx="0.5" fill="#121212" />
          <line x1="118" y1="24" x2="118" y2="16" strokeWidth="1" />
          <path d="M 113 18 Q 118 14 123 18" stroke="#EB5725" strokeWidth="1" fill="none" />
        </g>

        {/* Radiating Broadcast Signal Wave Arcs from Tower */}
        <motion.path
          d="M 110 16 Q 118 10 126 16"
          stroke="#EB5725"
          strokeWidth="1.1"
          fill="none"
          animate={{ scale: [0.9, 1.4, 0.9], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '118px 18px' }}
        />
        <motion.path
          d="M 106 13 Q 118 6 130 13"
          stroke="#EB5725"
          strokeWidth="0.85"
          fill="none"
          animate={{ scale: [0.9, 1.45, 0.9], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.4, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '118px 18px' }}
        />

        {/* Dotted Signal Wave Beam with Animated Traveling Energy Packet */}
        <line x1="118" y1="18" x2="60" y2="50" stroke="#EB5725" strokeWidth="0.85" strokeDasharray="2.5 2.5" />
        <motion.circle
          cx="118"
          cy="18"
          r="1.8"
          fill="#EB5725"
          animate={{
            cx: [118, 60],
            cy: [18, 50],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  );
}

const PROGRAM_STEPS = [
  {
    number: '01',
    title: 'IDEATE',
    description: 'We help farmers turn ideas into solutions that matter.',
    illustration: IdeateIllustration,
  },
  {
    number: '02',
    title: 'VALIDATE',
    description: 'Validate your concepts with the right insights and real data.',
    illustration: ValidateIllustration,
  },
  {
    number: '03',
    title: 'ACCELERATE',
    description: 'We drive growth, mentoring, resources, and capital for you.',
    illustration: AccelerateIllustration,
  },
  {
    number: '04',
    title: 'IMPACT',
    description: 'Build sustainable enterprises that transform rural India.',
    illustration: ImpactIllustration,
  },
];

export default function LeapAbout() {
  return (
    <section id="about" className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
        
        {/* =========================================================
            CENTERED HEADER SECTION
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-18"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
              OUR PROGRAM
            </span>
            <div className="w-8 h-[1.5px] bg-[#EB5725]" />
          </div>

          {/* Heading */}
          <h2 className="font-marcellus text-[46px] sm:text-[56px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[#121212] mb-5 sm:mb-6">
            About the <span className="text-[#EB5725]">Program</span>.
          </h2>

          {/* Centered Plus Guideline */}
          <div className="flex items-center justify-center gap-3 w-full max-w-xs mb-6 sm:mb-7">
            <span className="font-mono text-[#EB5725] text-xs font-bold leading-none">+</span>
            <div className="flex-1 h-[1px] bg-[#D8D2C6]" />
          </div>

          {/* 3 Centered Editorial Paragraphs */}
          <div className="space-y-4 max-w-3xl mx-auto font-robotoMono text-[12px] sm:text-[12.8px] leading-[1.8] text-[#52525B]">
            <p>
              The Unnatify Farmer Accelerator Program (UFAP) is a 6-month incubation initiative designed to support AgriTech and FoodTech startups.
            </p>
            <p>
              We provide investment opportunities, expand your customer base, validate your ideas, and help you enter the market with confidence.
            </p>
            <p>
              Our mission is to nurture innovative solutions that tackle real challenges in the rural economy and create sustainable impact at scale.
            </p>
          </div>
        </motion.div>


        {/* =========================================================
            HORIZONTAL 4-STAGE CONNECTED PROCESS PIPELINE
        ========================================================== */}
        <div className="relative w-full">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 items-start relative">
            
            {PROGRAM_STEPS.map((step, idx) => {
              const IllustrationComponent = step.illustration;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* ── Top Circular Number Badge with Pointer Line ── */}
                  <div className="relative flex flex-col items-center mb-4">
                    <div className="w-11 h-11 rounded-full border border-[#EB5725] bg-[#FBF7F0] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <span className="font-marcellus text-[20px] font-medium text-[#EB5725] leading-none">
                        {step.number}
                      </span>
                    </div>
                    {/* Pointer Line below circle */}
                    <div className="w-[1px] h-4 bg-[#EB5725]" />
                  </div>

                  {/* ── Connecting Dashed Arrow to Next Step (Desktop only) ── */}
                  {idx < PROGRAM_STEPS.length - 1 && (
                    <div
                      className="hidden lg:flex items-center absolute top-[21px] left-[calc(50%+28px)] right-[calc(-50%+28px)] pointer-events-none z-0"
                      aria-hidden="true"
                    >
                      <div className="flex-1 border-t border-dashed border-[#EB5725]" />
                      <span className="text-[#EB5725] text-xs font-mono -ml-1 -mt-[7px] leading-none select-none">
                        &gt;
                      </span>
                    </div>
                  )}

                  {/* ── Illustrated Vignette Art with Dynamic Animations ── */}
                  <div className="w-full mb-4 transition-transform duration-300 group-hover:scale-102">
                    <IllustrationComponent />
                  </div>

                  {/* ── Step Title & Orange Dash ── */}
                  <h3 className="font-robotoMono text-[12px] font-bold tracking-[0.2em] text-[#121212] uppercase mb-2">
                    {step.title}
                  </h3>
                  <div className="w-4 h-[1.5px] bg-[#EB5725] mb-3" />

                  {/* ── Step Description ── */}
                  <p className="font-robotoMono text-[11px] sm:text-[11.5px] leading-[1.7] text-[#52525B] max-w-[220px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
