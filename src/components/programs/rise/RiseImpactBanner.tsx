'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// =========================================================================
// VECTOR ART: Dynamic Panoramic Rural Village Landscape & Clean Grid
// =========================================================================
function RuralVillagePanorama() {
  return (
    <div className="relative w-full h-[190px] sm:h-[230px] lg:h-[250px] flex items-end justify-center select-none overflow-visible">
      <svg
        viewBox="0 0 540 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain object-bottom overflow-visible"
      >
        <defs>
          {/* Streetlamp Warm Amber Glow */}
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EB5725" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#EB5725" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#EB5725" stopOpacity="0" />
          </radialGradient>

          {/* Window Warm Light */}
          <linearGradient id="windowWarm" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="100%" stopColor="#FAD8A5" />
          </linearGradient>
        </defs>

        {/* Distant Mountain Silhouettes */}
        <path
          d="M 180 160 Q 260 110 320 148 Q 380 118 440 158 Q 480 135 530 165"
          stroke="#D8D2C6"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          fill="none"
        />

        {/* ── SOARING SILHOUETTE BIRDS IN THE SKY ── */}
        <motion.g
          animate={{
            x: [-30, 80],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
          }}
          stroke="#71717A"
          strokeWidth="0.8"
          fill="none"
        >
          {/* Bird 1 */}
          <path d="M 280 65 Q 284 60 288 65 Q 292 60 296 65" />
          {/* Bird 2 */}
          <path d="M 298 72 Q 301 68 304 72 Q 307 68 310 72" />
          {/* Bird 3 */}
          <path d="M 268 76 Q 271 73 274 76 Q 277 73 280 76" />
        </motion.g>

        {/* ── DISTANT ROTATING WIND TURBINES (Far Right Hills) ── */}
        {/* Turbine 1 (Larger) */}
        <g stroke="#121212" strokeWidth="0.85">
          <line x1="461" y1="185" x2="461" y2="92" strokeWidth="1.1" strokeLinecap="round" />
          <rect x="459" y="89" width="6" height="5" rx="1" fill="#121212" />

          {/* 3 Rotating Blades Group */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '461px 91.5px' }}
          >
            <circle cx="461" cy="91.5" r="2.2" fill="#EB5725" stroke="#121212" strokeWidth="0.6" />
            <line x1="461" y1="91.5" x2="461" y2="62" strokeWidth="1" strokeLinecap="round" />
            <line x1="461" y1="91.5" x2="435" y2="106" strokeWidth="1" strokeLinecap="round" />
            <line x1="461" y1="91.5" x2="487" y2="106" strokeWidth="1" strokeLinecap="round" />
          </motion.g>
        </g>

        {/* Turbine 2 (Smaller Distant) */}
        <g stroke="#121212" strokeWidth="0.75" opacity="0.8">
          <line x1="496" y1="185" x2="496" y2="112" strokeWidth="0.9" strokeLinecap="round" />
          <rect x="494" y="110" width="5" height="4" rx="1" fill="#121212" />

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 9.5, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '496px 112px' }}
          >
            <circle cx="496" cy="112" r="1.8" fill="#EB5725" stroke="#121212" strokeWidth="0.5" />
            <line x1="496" y1="112" x2="496" y2="88" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="496" y1="112" x2="475" y2="124" strokeWidth="0.9" strokeLinecap="round" />
            <line x1="496" y1="112" x2="517" y2="124" strokeWidth="0.9" strokeLinecap="round" />
          </motion.g>
        </g>


        {/* ── POWER DISTRIBUTION UTILITY POLES & WIRES ── */}
        <g stroke="#121212" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Main Streetlamp / Power Pole */}
          <line x1="380" y1="185" x2="380" y2="85" strokeWidth="1.4" />
          <line x1="368" y1="95" x2="392" y2="95" strokeWidth="1.2" />
          <path d="M 380 90 Q 395 86 402 96" strokeWidth="1.2" />
          
          {/* Lamp Fixture & Amber Light */}
          <circle cx="402" cy="98" r="2.5" fill="#EB5725" stroke="none" />

          {/* Animated Streetlamp Ambient Glow Flare */}
          <motion.ellipse
            cx="402"
            cy="114"
            rx="18"
            ry="24"
            fill="url(#lampGlow)"
            stroke="none"
            animate={{
              opacity: [0.5, 0.9, 0.5],
              scale: [0.95, 1.08, 0.95],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* High Voltage Connected Electrical Cables */}
          <path d="M 280 115 Q 330 102 380 95" strokeWidth="0.85" opacity="0.75" />
          <path d="M 380 95 Q 420 105 461 92" strokeWidth="0.85" opacity="0.75" />
          <path d="M 260 125 Q 320 110 380 102" strokeWidth="0.85" opacity="0.75" />
        </g>

        {/* ── Animated Electricity Flow Along Power Line ── */}
        <motion.circle
          cx="461"
          cy="92"
          r="2"
          fill="#EB5725"
          animate={{
            cx: [461, 380, 280, 260],
            cy: [92, 95, 115, 125],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />


        {/* ── RURAL VILLAGE HOMES & BRICK HOUSES ── */}
        <g stroke="#121212" strokeWidth="1.1" strokeLinejoin="round" fill="#FAF7F0">
          {/* Main Central Homestead with Slanted Tiled Roof */}
          <polygon points="210,140 270,120 330,140 270,155" fill="#FAF7F0" />
          <rect x="220" y="148" width="95" height="32" fill="#FAF7F0" />
          
          {/* Glowing Windows & Open Doorways */}
          <rect x="255" y="156" width="14" height="24" fill="#121212" />
          
          {/* Warm Glowing Windows */}
          <rect x="230" y="156" width="12" height="12" fill="url(#windowWarm)" stroke="#121212" strokeWidth="1" />
          <line x1="236" y1="156" x2="236" y2="168" stroke="#121212" strokeWidth="0.6" />
          <line x1="230" y1="162" x2="242" y2="162" stroke="#121212" strokeWidth="0.6" />

          <rect x="285" y="156" width="12" height="12" fill="url(#windowWarm)" stroke="#121212" strokeWidth="1" />
          <line x1="291" y1="156" x2="291" y2="168" stroke="#121212" strokeWidth="0.6" />
          <line x1="285" y1="162" x2="297" y2="162" stroke="#121212" strokeWidth="0.6" />

          {/* Rooftop Chimney Smoke */}
          <line x1="240" y1="130" x2="240" y2="120" strokeWidth="1.4" stroke="#121212" />
          <motion.circle
            cx="240"
            cy="118"
            r="2"
            fill="#D8D2C6"
            stroke="#71717A"
            strokeWidth="0.5"
            animate={{
              y: [0, -12, -20],
              x: [0, -4, -8],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 1.8],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />

          {/* Left Attached Room */}
          <polygon points="175,148 215,134 225,148" fill="#FAF7F0" />
          <rect x="180" y="148" width="40" height="32" fill="#FAF7F0" />
          <rect x="195" y="158" width="10" height="22" fill="#121212" />

          {/* Right Adjoining Shelter */}
          <polygon points="315,146 345,138 355,148" fill="#FAF7F0" />
          <rect x="315" y="148" width="35" height="32" fill="#FAF7F0" />
          <rect x="330" y="160" width="8" height="20" fill="#121212" />
        </g>


        {/* ── WALKING VILLAGER FIGURE ALONG PATH ── */}
        <motion.g
          animate={{
            x: [0, 32, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          stroke="#121212"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="#121212"
        >
          {/* Person Head */}
          <circle cx="395" cy="161" r="2" />
          {/* Body */}
          <line x1="395" y1="163" x2="395" y2="175" />
          {/* Walking Legs with gentle swing */}
          <line x1="395" y1="175" x2="392" y2="185" />
          <line x1="395" y1="175" x2="398" y2="185" />
          {/* Arms with staff */}
          <line x1="392" y1="167" x2="398" y2="170" />
          <line x1="398" y1="162" x2="400" y2="185" strokeWidth="0.8" stroke="#52525B" />
        </motion.g>


        {/* ── Trees & Rural Foliage with Wind Sway ── */}
        <motion.g
          animate={{ rotate: [-1, 1, -1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '160px 185px' }}
          stroke="#121212"
          strokeWidth="0.9"
          fill="#FAF7F0"
          opacity="0.85"
        >
          <circle cx="160" cy="160" r="14" />
          <circle cx="150" cy="164" r="11" />
          <circle cx="170" cy="164" r="11" />
        </motion.g>

        <motion.g
          animate={{ rotate: [1, -1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '360px 185px' }}
          stroke="#121212"
          strokeWidth="0.9"
          fill="#FAF7F0"
          opacity="0.85"
        >
          <circle cx="360" cy="165" r="13" />
          <circle cx="372" cy="168" r="10" />
        </motion.g>


        {/* Ground Terrain Base Line */}
        <line x1="140" y1="185" x2="530" y2="185" stroke="#121212" strokeWidth="1" opacity="0.6" />
        <line x1="170" y1="190" x2="500" y2="190" stroke="#121212" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.4" />
      </svg>
    </div>
  );
}

export default function RiseImpactBanner() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden select-none bg-[#FBF7F0]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        
        {/* =========================================================
            TOP AREA: Statement & Rural Village Panorama
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14 sm:mb-18 lg:mb-20">
          
          {/* ── Left Column: Editorial Heading & CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center items-start"
          >
            <h2 className="font-marcellus text-[36px] sm:text-[46px] lg:text-[50px] leading-[1.04] tracking-[-0.035em] text-[#121212] mb-6">
              Building sustainable
              <br />
              futures. <span className="text-[#EB5725]">Powering</span>
              <br />
              <span className="text-[#EB5725]">rural transformation.</span>
            </h2>

            <p className="font-robotoMono text-[13px] sm:text-[13.5px] text-[#52525B] mb-6">
              Be a part of the movement.
            </p>

            <div>
              <a
                href="https://www.f6s.com/rise-2026/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2.5
                  font-robotoMono text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.2em]
                  text-[#EB5725] hover:text-[#C84214]
                  border-b border-[#EB5725]/40 hover:border-[#C84214] pb-1
                  transition-all duration-200
                "
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>
            </div>
          </motion.div>

          {/* ── Right Column: Rural Village Panorama Illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            {/* Dot Matrix Pattern in Top-Right */}
            <div className="absolute -top-6 right-2 sm:right-6 opacity-25 pointer-events-none" aria-hidden="true">
              <svg width="60" height="35" viewBox="0 0 60 35" fill="#EB5725">
                {Array.from({ length: 5 }).map((_, col) =>
                  Array.from({ length: 3 }).map((_, row) => (
                    <circle key={`dot-${col}-${row}`} cx={col * 12 + 5} cy={row * 10 + 5} r="1" />
                  ))
                )}
              </svg>
            </div>

            <RuralVillagePanorama />
          </motion.div>

        </div>


        {/* =========================================================
            BOTTOM AREA: 3 Impact Metrics with Vertical Dividers
        ========================================================== */}
        <div className="border-t border-[#E4E4E0] pt-10 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            
            {/* Metric 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="flex flex-col md:pr-8 lg:pr-12 md:border-r md:border-[#E4E4E0]"
            >
              <span className="font-marcellus text-[44px] sm:text-[54px] lg:text-[60px] leading-none text-[#121212] tracking-[-0.03em]">
                75+
              </span>
              <p className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#71717A] mt-2.5">
                VENTURES SUPPORTED
              </p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col md:px-8 lg:px-12 md:border-r md:border-[#E4E4E0]"
            >
              <span className="font-marcellus text-[44px] sm:text-[54px] lg:text-[60px] leading-none text-[#121212] tracking-[-0.03em]">
                120+
              </span>
              <p className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#71717A] mt-2.5">
                RURAL IMPACT PROJECTS
              </p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col md:pl-8 lg:pl-12"
            >
              <span className="font-marcellus text-[44px] sm:text-[54px] lg:text-[60px] leading-none text-[#121212] tracking-[-0.03em]">
                2.5M+
              </span>
              <p className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#71717A] mt-2.5">
                LIVES TOUCHED
              </p>
            </motion.div>

          </div>

          {/* Bottom Left Crosshair */}
          <div className="mt-8 font-mono text-[#EB5725] text-xs font-bold select-none">
            +
          </div>
        </div>

      </div>
    </section>
  );
}
