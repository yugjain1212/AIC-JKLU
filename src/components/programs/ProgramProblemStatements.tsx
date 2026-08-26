'use client';

import { motion } from 'framer-motion';

// =========================================================================
// VECTOR ART 1: Lignocellulosic Biomass (Flask, Bubbles, Botanicals & Molecules)
// =========================================================================
function BiomassIllustration() {
  return (
    <div className="w-[125px] sm:w-[145px] h-[135px] sm:h-[155px] shrink-0 select-none flex items-center justify-center">
      <svg
        viewBox="0 0 160 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Subtle Liquid Shimmer */}
          <linearGradient id="liquidGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2ED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EB5725" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* ── Soft Background Hexagonal Molecule Honeycombs with Pulsing Nodes ── */}
        <motion.g
          animate={{
            scale: [0.98, 1.025, 0.98],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          stroke="#EB5725"
          strokeWidth="1"
          fill="#FFF2ED"
          style={{ transformOrigin: '125px 75px' }}
        >
          <polygon points="120,40 135,50 135,70 120,80 105,70 105,50" />
          <polygon points="135,70 150,80 150,100 135,110 120,100 120,80" />
          <polygon points="105,70 120,80 120,100 105,110 90,100 90,80" />
        </motion.g>

        {/* Connecting Molecular Nodes with Sequential Breathing Glow */}
        <motion.circle
          cx="120"
          cy="40"
          r="2.5"
          fill="#EB5725"
          animate={{ r: [2.2, 3.2, 2.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="150"
          cy="80"
          r="2.5"
          fill="#EB5725"
          animate={{ r: [2.2, 3.2, 2.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="90"
          cy="100"
          r="2.5"
          fill="#EB5725"
          animate={{ r: [2.2, 3.2, 2.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="135"
          cy="110"
          r="2.5"
          fill="#EB5725"
          animate={{ r: [2.2, 3.2, 2.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, delay: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Laboratory Glassware / Conical Flask Line Art ── */}
        <g stroke="#121212" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          {/* Flask Neck Rim */}
          <ellipse cx="68" cy="62" rx="12" ry="3.5" fill="#FAF7F0" />
          {/* Flask Neck Lines */}
          <line x1="59" y1="63" x2="59" y2="85" />
          <line x1="77" y1="63" x2="77" y2="85" />
          
          {/* Flask Body */}
          <path
            d="M 59 85 L 36 142 C 34 147 38 152 44 152 L 92 152 C 98 152 102 147 100 142 L 77 85 Z"
            fill="#FFFFFF"
          />

          {/* Liquid Inside Flask */}
          <path
            d="M 44 130 Q 68 134 92 130 L 96 146 C 98 150 94 152 90 152 L 46 152 C 42 152 38 150 40 146 Z"
            fill="url(#liquidGlow)"
            stroke="none"
          />

          {/* Oscillating Liquid Surface Line */}
          <motion.path
            d="M 44 130 Q 68 134 92 130"
            stroke="#EB5725"
            strokeWidth="1.2"
            fill="none"
            animate={{
              d: [
                'M 44 130 Q 68 134 92 130',
                'M 44 130 Q 68 126 92 130',
                'M 44 130 Q 68 134 92 130',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Measurement Hash Marks */}
          <line x1="62" y1="105" x2="68" y2="105" stroke="#71717A" strokeWidth="0.9" />
          <line x1="60" y1="115" x2="68" y2="115" stroke="#71717A" strokeWidth="0.9" />
          <line x1="56" y1="125" x2="68" y2="125" stroke="#71717A" strokeWidth="0.9" />
          <line x1="52" y1="135" x2="68" y2="135" stroke="#71717A" strokeWidth="0.9" />
        </g>

        {/* ── Effervescent Bio Bubbles Rising Inside Flask ── */}
        <motion.circle
          cx="60"
          cy="148"
          r="1.8"
          fill="#EB5725"
          animate={{
            y: [0, -12, -22],
            x: [0, 2, -1],
            opacity: [0, 0.85, 0],
            scale: [0.6, 1.2, 0.7],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        <motion.circle
          cx="76"
          cy="149"
          r="1.5"
          fill="#EB5725"
          animate={{
            y: [0, -14, -24],
            x: [0, -2, 1],
            opacity: [0, 0.75, 0],
            scale: [0.5, 1.1, 0.6],
          }}
          transition={{
            duration: 2.6,
            delay: 0.9,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        <motion.circle
          cx="68"
          cy="146"
          r="1.3"
          fill="#EB5725"
          animate={{
            y: [0, -10, -18],
            x: [0, 1, -2],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 1.8,
            delay: 1.4,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />

        {/* ── Sprouting Botanical Plant Leaves with Organic Breeze Sway ── */}
        <motion.g
          animate={{
            rotate: [-1.8, 1.8, -1.8],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '68px 95px' }}
          stroke="#121212"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* Central Sprout Stem */}
          <path d="M 68 95 Q 68 45 64 22" />
          
          {/* Leaf 1 (Top Left) */}
          <path
            d="M 64 22 C 50 18 46 30 65 34 Z"
            fill="#FAF7F0"
            stroke="#121212"
          />
          {/* Leaf 2 (Top Right) */}
          <path
            d="M 66 26 C 80 18 84 32 67 38 Z"
            fill="#FAF7F0"
            stroke="#121212"
          />
          {/* Leaf 3 (Mid Left) */}
          <path
            d="M 67 42 C 52 38 50 50 67 52 Z"
            fill="#FAF7F0"
            stroke="#121212"
          />
          {/* Leaf 4 (Mid Right) */}
          <path
            d="M 68 48 C 82 42 86 54 68 58 Z"
            fill="#FAF7F0"
            stroke="#121212"
          />
        </motion.g>
      </svg>
    </div>
  );
}

// =========================================================================
// VECTOR ART 2: Value-Added Bio Products (Apothecary Reagent Bottle & Botanicals)
// =========================================================================
function BioProductIllustration() {
  return (
    <div className="w-[125px] sm:w-[145px] h-[135px] sm:h-[155px] shrink-0 select-none flex items-center justify-center">
      <svg
        viewBox="0 0 160 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* ── Soft Background Hexagon Molecules with Pulse ── */}
        <motion.g
          animate={{
            scale: [0.98, 1.025, 0.98],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '135px 65px' }}
          stroke="#EB5725"
          strokeWidth="1"
          fill="#FFF2ED"
        >
          <polygon points="125,35 140,45 140,65 125,75 110,65 110,45" />
          <polygon points="140,65 155,75 155,95 140,105 125,95 125,75" />
        </motion.g>
        
        <motion.circle
          cx="125"
          cy="35"
          r="2.5"
          fill="#EB5725"
          animate={{ r: [2.2, 3.2, 2.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="155"
          cy="75"
          r="2.5"
          fill="#EB5725"
          animate={{ r: [2.2, 3.2, 2.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="140"
          cy="105"
          r="2.5"
          fill="#EB5725"
          animate={{ r: [2.2, 3.2, 2.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, delay: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Botanical Leaves with Gentle Swaying Breeze ── */}
        {/* Right Botanical Branch */}
        <motion.g
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '98px 140px' }}
          stroke="#121212"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M 98 140 Q 125 115 136 78" />
          <path d="M 136 78 C 146 70 148 85 132 86 Z" fill="#FAF7F0" />
          <path d="M 124 95 C 138 90 138 104 120 102 Z" fill="#FAF7F0" />
          <path d="M 112 115 C 128 112 126 126 108 122 Z" fill="#FAF7F0" />
        </motion.g>

        {/* Left Botanical Branch */}
        <motion.g
          animate={{ rotate: [2, -2, 2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '44px 140px' }}
          stroke="#121212"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M 44 140 Q 25 110 20 85" />
          <path d="M 20 85 C 10 80 12 95 24 92 Z" fill="#FAF7F0" />
          <path d="M 26 105 C 14 102 16 116 30 114 Z" fill="#FAF7F0" />
        </motion.g>

        {/* ── Bio Reagent / Cosmetic Glass Bottle ── */}
        <g stroke="#121212" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          {/* Glass Stopper / Dropper Cap */}
          <rect x="62" y="34" width="20" height="12" rx="2" fill="#FAF7F0" />
          <rect x="65" y="46" width="14" height="6" fill="#121212" />
          <line x1="62" y1="40" x2="82" y2="40" stroke="#71717A" strokeWidth="0.8" />

          {/* Dropper Active Essence Droplet */}
          <motion.circle
            cx="72"
            cy="46"
            r="1.8"
            fill="#EB5725"
            stroke="none"
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bottle Shoulder & Cylindrical Glass Body */}
          <path
            d="M 65 52 L 50 64 C 46 68 46 72 46 76 L 46 142 C 46 148 50 152 56 152 L 88 152 C 94 152 98 148 98 142 L 98 76 C 98 72 98 68 94 64 L 79 52 Z"
            fill="#FFFFFF"
          />

          {/* Bottle Label Box */}
          <rect x="54" y="86" width="36" height="42" rx="1.5" fill="#FAF7F0" stroke="#121212" strokeWidth="1" />
          <line x1="60" y1="98" x2="84" y2="98" stroke="#EB5725" strokeWidth="1.3" />
          <line x1="60" y1="106" x2="78" y2="106" stroke="#71717A" strokeWidth="0.8" />
          <line x1="60" y1="114" x2="82" y2="114" stroke="#71717A" strokeWidth="0.8" />

          {/* Glass Specular Reflection Highlight Line with Light Shimmer */}
          <path
            d="M 50 78 L 50 138"
            stroke="#E4E4E0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

export default function ProgramProblemStatements() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ── LEFT SIDEBAR: Heading & Dot Matrix ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col items-start"
          >
            {/* Small Orange Accent Dash with Subtle Breathing Pulse */}
            <motion.div
              animate={{ width: ['32px', '40px', '32px'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="h-[2px] bg-[#EB5725] mb-4 sm:mb-5"
            />

            {/* Editorial Heading */}
            <h2 className="font-marcellus text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.05] tracking-[-0.03em] text-[#121212] mb-6 sm:mb-8">
              Problem
              <br />
              <span className="text-[#EB5725]">Statements</span>
            </h2>

            {/* 6 Columns x 3 Rows Dot Matrix Pattern with Traveling Light Pulse */}
            <div className="grid grid-cols-6 gap-2.5 opacity-70" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.9, 1.2, 0.9],
                  }}
                  transition={{
                    duration: 2.4,
                    delay: (i % 6) * 0.15 + Math.floor(i / 6) * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-[#EB5725]' : 'bg-[#D1C7B7]'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT CONTENT: 2 Problem Statement Cards ── */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 items-stretch">
            
            {/* ── CARD 01: Lignocellulosic Biomass ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="
                group
                relative
                rounded-[24px]
                bg-white
                border border-[#E4E4E0]
                p-7 sm:p-8
                shadow-[0_4px_24px_rgba(0,0,0,0.03)]
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)]
                hover:border-[#EB5725]/50
                hover:-translate-y-1.5
                transition-all
                duration-300
                flex flex-col justify-between
              "
            >
              <div>
                {/* Top Number & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-marcellus text-[28px] sm:text-[34px] text-[#EB5725] leading-none shrink-0 font-medium">
                    01
                  </span>
                  <h3 className="font-marcellus text-[20px] sm:text-[22px] text-[#121212] leading-[1.2] tracking-[-0.02em] font-medium pt-1">
                    Lignocellulosic Biomass
                  </h3>
                </div>

                {/* Body Content Description */}
                <p className="font-robotoMono text-[12px] sm:text-[12.8px] leading-[1.75] text-[#52525B] mb-6">
                  Lignocellulosic biomass-based value-added products/solutions as replacement for fossil-derived materials for applications in industries such as healthcare, pharma, textiles, biomaterials, packaging, energy, etc. with raw material available in India.
                </p>
              </div>

              {/* Bottom Vector Illustration */}
              <div className="flex items-end justify-end pt-2 border-t border-[#E4E4E0]/60">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <BiomassIllustration />
                </div>
              </div>
            </motion.div>

            {/* ── CARD 02: Value-added Bio-based Products ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="
                group
                relative
                rounded-[24px]
                bg-white
                border border-[#E4E4E0]
                p-7 sm:p-8
                shadow-[0_4px_24px_rgba(0,0,0,0.03)]
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)]
                hover:border-[#EB5725]/50
                hover:-translate-y-1.5
                transition-all
                duration-300
                flex flex-col justify-between
              "
            >
              <div>
                {/* Top Number & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-marcellus text-[28px] sm:text-[34px] text-[#EB5725] leading-none shrink-0 font-medium">
                    02
                  </span>
                  <h3 className="font-marcellus text-[20px] sm:text-[22px] text-[#121212] leading-[1.2] tracking-[-0.02em] font-medium pt-1">
                    Value-added Bio-based Products
                  </h3>
                </div>

                {/* Body Content Description */}
                <p className="font-robotoMono text-[12px] sm:text-[12.8px] leading-[1.75] text-[#52525B] mb-6">
                  Value-added bio-based products from existing Pulp and Paper manufacturing units (using by-products and waste) using process/leveraging agri, co-op and/or waste streams.
                </p>
              </div>

              {/* Bottom Vector Illustration */}
              <div className="flex items-end justify-end pt-2 border-t border-[#E4E4E0]/60">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <BioProductIllustration />
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
