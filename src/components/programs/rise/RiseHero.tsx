'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// =========================================================================
// REALISTIC FLOCK OF BIRDS WITH FLAPPING WING ANIMATION
// =========================================================================
function FlyingBird({
  startX = -40,
  startY = 180,
  endX = 420,
  endY = 60,
  duration = 12,
  delay = 0,
  size = 1,
}: {
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  duration?: number;
  delay?: number;
  size?: number;
}) {
  return (
    <motion.g
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, startX + 40, endX - 40, endX],
        y: [startY, startY - 20, endY + 15, endY],
        opacity: [0, 0.9, 0.9, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ transformOrigin: 'center' }}
    >
      {/* Individual Bird Body & Flapping Wings */}
      <motion.g
        animate={{
          scaleY: [1, 0.2, -0.7, 0.2, 1],
          y: [0, -1.5, 0, 1.5, 0],
        }}
        transition={{
          duration: 0.45 + (size * 0.1),
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        transform={`scale(${size})`}
        stroke="#121212"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      >
        {/* Left Wing */}
        <path d="M 0 0 Q -5 -6 -10 -2" />
        {/* Right Wing */}
        <path d="M 0 0 Q 5 -6 10 -2" />
        {/* Body Dot */}
        <circle cx="0" cy="0" r="0.8" fill="#121212" />
      </motion.g>
    </motion.g>
  );
}

// =========================================================================
// TRANSMISSION POWER GRID & SOLAR SUN ORBITAL LENS VISUAL
// =========================================================================
function TransmissionGridOrbitalVisual() {
  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none">
      
      {/* ── Background Technical Crosshair & Slowly Rotating Orbital Coordinate Grid ── */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      >
        {/* Fixed Technical Center Crosshairs */}
        <line x1="20" y1="250" x2="480" y2="250" stroke="#D8D2C6" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.45" />
        <line x1="250" y1="20" x2="250" y2="480" stroke="#D8D2C6" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.45" />

        {/* Slowly Rotating Outer Orbital Reticle Ring */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '250px 250px' }}
        >
          <circle cx="250" cy="250" r="215" stroke="#D8D2C6" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.6" />
          <circle cx="250" cy="250" r="235" stroke="#EB5725" strokeWidth="0.6" strokeDasharray="2 8" opacity="0.4" />
          
          {/* Orbital Tracking Node Markers */}
          <circle cx="85" cy="115" r="2.5" fill="#121212" opacity="0.7" />
          <circle cx="415" cy="385" r="3" fill="#EB5725" />
          <circle cx="435" cy="135" r="2" fill="#EB5725" opacity="0.8" />
        </motion.g>
      </svg>

      {/* ── Main Circular Lens Frame with Power Grid Landscape ── */}
      <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border border-[#D8D2C6]/80 shadow-[0_16px_48px_rgba(0,0,0,0.07)] bg-[#F0EBE0]/50 z-10">
        
        {/* ── Rising Solid Brand Orange Sun with Breathing Glow ── */}
        <motion.div
          animate={{
            scale: [1, 1.035, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-4 -right-4 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#EB5725] z-10 pointer-events-none shadow-[0_0_50px_rgba(235,87,37,0.3)]"
        />

        {/* ── Transmission Grid & Sunset Horizon SVG Artwork ── */}
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full object-cover z-20"
        >
          <defs>
            {/* Horizon Atmosphere Gradient */}
            <linearGradient id="horizonGlow" x1="200" y1="400" x2="200" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#121212" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#D8D2C6" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#FBF7F0" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Sun Ambient Radiant Glow */}
            <radialGradient id="sunFlare" cx="340" cy="80" r="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EB5725" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EB5725" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect width="400" height="400" fill="url(#sunFlare)" />

          {/* Rural Field Silhouette Horizon */}
          <path
            d="M 0 310 Q 120 305 240 312 T 400 308 L 400 400 L 0 400 Z"
            fill="#1E1E1E"
          />

          {/* Distant Pylons and Rural Foliage */}
          <g opacity="0.5" fill="#2D2D2D">
            <ellipse cx="140" cy="308" rx="28" ry="8" />
            <ellipse cx="220" cy="309" rx="35" ry="9" />
            <ellipse cx="60" cy="310" rx="20" ry="6" />
            <ellipse cx="360" cy="308" rx="30" ry="7" />
          </g>

          {/* Distant Small Transmission Pylons */}
          <g stroke="#3A3A3A" strokeWidth="0.8" opacity="0.6">
            {/* Distant Tower 1 */}
            <line x1="80" y1="310" x2="80" y2="250" />
            <line x1="72" y1="310" x2="88" y2="310" />
            <line x1="74" y1="270" x2="86" y2="270" />
            <line x1="72" y1="260" x2="88" y2="260" />

            {/* Distant Tower 2 */}
            <line x1="160" y1="310" x2="160" y2="240" />
            <line x1="152" y1="310" x2="168" y2="310" />
            <line x1="154" y1="260" x2="166" y2="260" />
            <line x1="152" y1="250" x2="168" y2="250" />

            {/* Distant Tower 3 */}
            <line x1="280" y1="310" x2="280" y2="245" />
            <line x1="272" y1="310" x2="288" y2="310" />
            <line x1="274" y1="265" x2="286" y2="265" />
            <line x1="272" y1="255" x2="288" y2="255" />
          </g>


          {/* =========================================================
              DYNAMIC REALISTIC FLYING BIRDS FLOCK
          ========================================================== */}
          {/* Bird 1: Lead Bird crossing top sun */}
          <FlyingBird startX={-30} startY={210} endX={430} endY={70} duration={11} delay={0} size={1} />
          {/* Bird 2: Wingmate high */}
          <FlyingBird startX={-45} startY={225} endX={415} endY={85} duration={11.5} delay={0.6} size={0.85} />
          {/* Bird 3: Wingmate trailing */}
          <FlyingBird startX={-60} startY={240} endX={400} endY={100} duration={12} delay={1.2} size={0.75} />
          {/* Bird 4: Second wave bird */}
          <FlyingBird startX={-30} startY={160} endX={430} endY={40} duration={13} delay={5.5} size={0.9} />
          {/* Bird 5: Second wave trailing */}
          <FlyingBird startX={-50} startY={175} endX={410} endY={55} duration={13.5} delay={6.2} size={0.7} />


          {/* ── FOREGROUND TRANSMISSION TOWER 1 (Left Major Pylon) ── */}
          <g stroke="#121212" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Main Tower Frame Legs */}
            <line x1="110" y1="310" x2="124" y2="150" />
            <line x1="140" y1="310" x2="126" y2="150" />
            <line x1="125" y1="150" x2="125" y2="120" />

            {/* Cross Bracing X-Lattice */}
            <line x1="112" y1="290" x2="138" y2="260" strokeWidth="0.9" />
            <line x1="138" y1="290" x2="112" y2="260" strokeWidth="0.9" />
            <line x1="116" y1="260" x2="134" y2="230" strokeWidth="0.9" />
            <line x1="134" y1="260" x2="116" y2="230" strokeWidth="0.9" />
            <line x1="120" y1="230" x2="130" y2="190" strokeWidth="0.9" />
            <line x1="130" y1="230" x2="120" y2="190" strokeWidth="0.9" />
            <line x1="122" y1="190" x2="128" y2="150" strokeWidth="0.9" />
            <line x1="128" y1="190" x2="122" y2="150" strokeWidth="0.9" />

            {/* Horizontal Crossarms */}
            <line x1="100" y1="180" x2="150" y2="180" strokeWidth="1.3" />
            <line x1="106" y1="155" x2="144" y2="155" strokeWidth="1.3" />
            <line x1="112" y1="135" x2="138" y2="135" strokeWidth="1.3" />

            {/* Insulator Strings & Caps */}
            <line x1="100" y1="180" x2="100" y2="190" strokeWidth="1.5" />
            <line x1="150" y1="180" x2="150" y2="190" strokeWidth="1.5" />
            <line x1="106" y1="155" x2="106" y2="165" strokeWidth="1.5" />
            <line x1="144" y1="155" x2="144" y2="165" strokeWidth="1.5" />
          </g>

          {/* ── FOREGROUND TRANSMISSION TOWER 2 (Right Tall Pylon Under Orange Sun) ── */}
          <g stroke="#121212" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Main Tower Frame Legs */}
            <line x1="330" y1="310" x2="350" y2="100" />
            <line x1="375" y1="310" x2="355" y2="100" />
            <line x1="352.5" y1="100" x2="352.5" y2="65" />

            {/* Cross Bracing X-Lattice */}
            <line x1="333" y1="285" x2="372" y2="245" strokeWidth="0.9" />
            <line x1="372" y1="285" x2="333" y2="245" strokeWidth="0.9" />
            <line x1="338" y1="245" x2="367" y2="205" strokeWidth="0.9" />
            <line x1="367" y1="245" x2="338" y2="205" strokeWidth="0.9" />
            <line x1="343" y1="205" x2="362" y2="160" strokeWidth="0.9" />
            <line x1="362" y1="205" x2="343" y2="160" strokeWidth="0.9" />
            <line x1="347" y1="160" x2="358" y2="115" strokeWidth="0.9" />
            <line x1="358" y1="160" x2="347" y2="115" strokeWidth="0.9" />
            <line x1="350" y1="115" x2="355" y2="100" strokeWidth="0.9" />
            <line x1="355" y1="115" x2="350" y2="100" strokeWidth="0.9" />

            {/* Horizontal Crossarms */}
            <line x1="315" y1="145" x2="390" y2="145" strokeWidth="1.4" />
            <line x1="325" y1="115" x2="380" y2="115" strokeWidth="1.4" />
            <line x1="335" y1="90" x2="370" y2="90" strokeWidth="1.4" />

            {/* Insulator Strings */}
            <line x1="315" y1="145" x2="315" y2="158" strokeWidth="1.6" />
            <line x1="390" y1="145" x2="390" y2="158" strokeWidth="1.6" />
            <line x1="325" y1="115" x2="325" y2="128" strokeWidth="1.6" />
            <line x1="380" y1="115" x2="380" y2="128" strokeWidth="1.6" />
          </g>

          {/* ── High-Voltage Catenary Power Transmission Cables ── */}
          <g stroke="#121212" strokeWidth="0.9" fill="none" opacity="0.8">
            <path d="M 0 170 Q 50 185 100 190 Q 200 205 315 158 Q 360 148 400 140" />
            <path d="M 0 145 Q 50 160 106 165 Q 210 180 325 128 Q 365 120 400 115" />
            <path d="M 0 120 Q 55 135 112 135 Q 220 150 335 90 Q 370 82 400 78" />
            <path d="M 150 190 Q 270 210 390 158" />
            <path d="M 144 165 Q 260 185 380 128" />
          </g>

          {/* ── Dynamic Glowing Electricity Packets Traveling along Cables ── */}
          <motion.circle
            cx="0"
            cy="170"
            r="2.2"
            fill="#EB5725"
            animate={{
              cx: [0, 100, 200, 315, 400],
              cy: [170, 190, 205, 158, 140],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle
            cx="0"
            cy="145"
            r="1.8"
            fill="#EB5725"
            animate={{
              cx: [0, 106, 210, 325, 400],
              cy: [145, 165, 180, 128, 115],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>

      </div>

      {/* ── Bottom Right Technical Coordinate Badge ── */}
      <div className="absolute -bottom-2 right-4 sm:right-6 flex items-start gap-2 select-none z-20">
        <span className="font-mono text-[#EB5725] text-xs leading-none font-bold">+</span>
        <div className="font-robotoMono text-[10px] sm:text-[10.5px] tracking-[0.14em] text-[#71717A] leading-tight">
          <p>26.9124° N</p>
          <p>75.7873° E</p>
        </div>
      </div>

    </div>
  );
}

export default function RiseHero() {
  return (
    <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 border-b border-[#E4E4E0]/80 overflow-hidden select-none">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ── LEFT COLUMN: Editorial Typography & Statement ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col justify-center items-start"
          >
            {/* Program Tag / Eyebrow */}
            <p className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725] mb-5 sm:mb-6">
              RISE — RURAL INDIA SOLUTION FOR ENERGY
            </p>

            {/* Serif Heading */}
            <h1 className="font-marcellus text-[54px] sm:text-[68px] md:text-[76px] lg:text-[84px] leading-[0.95] tracking-[-0.035em] text-[#121212] mb-6 sm:mb-8">
              Empowering
              <br />
              <span className="text-[#EB5725]">Rural India.</span>
            </h1>

            {/* Horizontal Technical Guideline with Orange Crosshair */}
            <div className="w-full max-w-lg flex items-center justify-between border-b border-[#D8D2C6] pb-1 mb-6 sm:mb-8">
              <span className="text-[10px] font-mono text-[#D8D2C6] select-none" />
              <span className="font-mono text-[#EB5725] text-xs font-bold leading-none select-none">+</span>
            </div>

            {/* Description Paragraph */}
            <p className="font-robotoMono text-[13px] sm:text-[14px] leading-[1.85] text-[#52525B] max-w-lg mb-8 sm:mb-10">
              RISE is a focused incubator fostering sustainable energy breakthroughs that drive meaningful empowerment across India&apos;s rural landscapes.
            </p>

            {/* Apply Now Action CTA */}
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

          {/* ── RIGHT COLUMN: Circular Power Grid Orbital Lens Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex items-center justify-center lg:justify-end"
          >
            <TransmissionGridOrbitalVisual />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
