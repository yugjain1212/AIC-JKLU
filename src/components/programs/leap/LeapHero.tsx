'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

// =========================================================================
// REALISTIC FLYING BIRDS WITH FLAPPING WING ANIMATION
// =========================================================================
function SoaringBird({
  startX = -30,
  startY = 140,
  endX = 640,
  endY = 40,
  duration = 10,
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
        x: [startX, startX + 50, endX - 50, endX],
        y: [startY, startY - 18, endY + 12, endY],
        opacity: [0, 0.9, 0.9, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.g
        animate={{
          scaleY: [1, 0.2, -0.7, 0.2, 1],
          y: [0, -1.2, 0, 1.2, 0],
        }}
        transition={{
          duration: 0.45 + size * 0.1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        transform={`scale(${size})`}
        stroke="#121212"
        strokeWidth="1.1"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M 0 0 Q -4 -4 -8 -2" />
        <path d="M 0 0 Q 4 -4 8 -2" />
        <circle cx="0" cy="0" r="0.6" fill="#121212" />
      </motion.g>
    </motion.g>
  );
}

// =========================================================================
// ANIMATED TRACTOR DRIVING WITH FARMER
// =========================================================================
function MovingTractorWithFarmer() {
  return (
    <motion.g
      initial={{ x: 170 }}
      animate={{ x: [170, 510] }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {/* Tractor Engine Rumble Vibration */}
      <motion.g
        animate={{ y: [0, -0.8, 0, -0.6, 0] }}
        transition={{ duration: 0.35, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Exhaust Chimney Smoke Puffs */}
        <motion.circle
          cx="28"
          cy="365"
          r="1.4"
          fill="#71717A"
          animate={{
            cy: [365, 355, 348],
            cx: [28, 24, 20],
            opacity: [0, 0.7, 0],
            scale: [0.6, 1.2, 1.8],
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.circle
          cx="28"
          cy="365"
          r="1.1"
          fill="#EB5725"
          animate={{
            cy: [365, 357, 350],
            cx: [28, 25, 22],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 1.5],
          }}
          transition={{ duration: 1.2, delay: 0.6, repeat: Infinity, ease: 'easeOut' }}
        />

        {/* ── FARMER SILHOUETTE DRIVING ── */}
        <g fill="#121212" stroke="#121212" strokeWidth="0.8">
          {/* Farmer Hat / Cap */}
          <ellipse cx="14" cy="363" rx="3.5" ry="1.2" fill="#EB5725" />
          {/* Farmer Head */}
          <circle cx="14" cy="365" r="2.2" fill="#121212" />
          {/* Body & Torso */}
          <path d="M 12 367 L 11 377 L 17 377 L 16 367 Z" fill="#121212" />
          {/* Arms Reaching to Steering Wheel */}
          <line x1="14" y1="369" x2="20" y2="371" strokeWidth="1.1" strokeLinecap="round" />
        </g>

        {/* ── TRACTOR BODY CHASSIS & HOOD ── */}
        <g stroke="#121212" strokeWidth="1" strokeLinejoin="round" fill="#FAF7F0">
          {/* Engine Hood / Bonnet */}
          <path d="M 18 372 L 32 372 L 32 381 L 18 381 Z" fill="#EB5725" />
          <rect x="29" y="373" width="3" height="6" fill="#121212" />
          {/* Exhaust Pipe */}
          <line x1="28" y1="372" x2="28" y2="366" strokeWidth="1.1" stroke="#121212" strokeLinecap="round" />
          {/* Steering Column & Wheel */}
          <line x1="18" y1="376" x2="21" y2="371" strokeWidth="1" stroke="#121212" />
          <line x1="19.5" y1="369.5" x2="22.5" y2="372.5" strokeWidth="1.2" stroke="#121212" strokeLinecap="round" />
          {/* Driver Seat Backrest */}
          <line x1="9" y1="372" x2="9" y2="379" strokeWidth="1.3" stroke="#121212" strokeLinecap="round" />
          <line x1="9" y1="379" x2="15" y2="379" strokeWidth="1.3" stroke="#121212" strokeLinecap="round" />
          {/* Rear Mudguard / Fender Arch */}
          <path d="M 4 380 Q 9 370 18 375" fill="none" strokeWidth="1.2" stroke="#121212" />
        </g>

        {/* ── ROTATING REAR LARGE WHEEL ── */}
        <g transform="translate(10, 383)">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="0" cy="0" r="7" fill="#FAF7F0" stroke="#121212" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="4.5" fill="#EB5725" stroke="#121212" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="1.5" fill="#121212" />
            {/* Wheel Spokes / Treads */}
            <line x1="-6.5" y1="0" x2="6.5" y2="0" stroke="#121212" strokeWidth="0.9" />
            <line x1="0" y1="-6.5" x2="0" y2="6.5" stroke="#121212" strokeWidth="0.9" />
            <line x1="-4.6" y1="-4.6" x2="4.6" y2="4.6" stroke="#121212" strokeWidth="0.8" />
            <line x1="-4.6" y1="4.6" x2="4.6" y2="-4.6" stroke="#121212" strokeWidth="0.8" />
          </motion.g>
        </g>

        {/* ── ROTATING FRONT SMALL WHEEL ── */}
        <g transform="translate(28, 385.5)">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 0.95, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="0" cy="0" r="4.5" fill="#FAF7F0" stroke="#121212" strokeWidth="1.1" />
            <circle cx="0" cy="0" r="2.5" fill="#EB5725" stroke="#121212" strokeWidth="0.7" />
            <circle cx="0" cy="0" r="1" fill="#121212" />
            {/* Front Wheel Spokes */}
            <line x1="-4" y1="0" x2="4" y2="0" stroke="#121212" strokeWidth="0.8" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="#121212" strokeWidth="0.8" />
          </motion.g>
        </g>
      </motion.g>
    </motion.g>
  );
}

// =========================================================================
// CLEAN VECTOR ARTWORK: Refined Topographic Streamlines & Animated Farm
// =========================================================================
function TopographicLandscapeArtwork() {
  return (
    <div className="relative w-full max-w-[620px] aspect-[590/470] mx-auto select-none flex items-center justify-center">
      <svg
        viewBox="0 0 590 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain overflow-visible"
      >
        <defs>
          {/* Multi-ring Radiant Sun Corona Glow */}
          <radialGradient id="sunCoronaClean" cx="425" cy="135" r="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EB5725" stopOpacity="0.85" />
            <stop offset="28%" stopColor="#EB5725" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#EB5725" stopOpacity="0.18" />
            <stop offset="78%" stopColor="#EB5725" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#EB5725" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── TOP RIGHT ORANGE PLUS CROSSHAIR ── */}
        <text x="525" y="62" fill="#EB5725" fontSize="19" fontFamily="monospace" fontWeight="bold">
          +
        </text>

        {/* ── CLEAN DOT MATRIX PATTERNS ── */}
        {/* 1. Left Primary Orange Dot Grid */}
        <g opacity="0.32" fill="#EB5725">
          {Array.from({ length: 6 }).map((_, col) =>
            Array.from({ length: 12 }).map((_, row) => (
              <circle
                key={`dm-l-${col}-${row}`}
                cx={col * 12 + 65}
                cy={row * 13 + 175}
                r="0.9"
                fill={col % 2 === 0 ? '#EB5725' : '#71717A'}
              />
            ))
          )}
        </g>

        {/* 2. Bottom-Right Corner Dot Matrix */}
        <g opacity="0.3" fill="#EB5725">
          {Array.from({ length: 4 }).map((_, col) =>
            Array.from({ length: 6 }).map((_, row) => (
              <circle
                key={`dm-br-${col}-${row}`}
                cx={col * 10 + 560}
                cy={row * 9 + 400}
                r="1"
              />
            ))
          )}
        </g>


        {/* ── CLEAN & ELEGANT TOPOGRAPHIC STREAMLINES (No overlap with farm) ── */}
        <g stroke="#121212" strokeWidth="0.85" opacity="0.55" fill="none">
          {/* Smooth S-curve lines cascading cleanly to the left of the farm */}
          <path d="M 120 0 C 140 60 170 120 215 160 C 265 205 285 240 280 280 C 275 320 230 350 210 390" />
          <path d="M 135 0 C 155 65 185 125 230 165 C 280 210 300 245 295 285 C 290 325 245 355 225 390" />
          <path d="M 150 0 C 170 70 200 130 245 170 C 295 215 315 250 310 290 C 305 330 260 360 240 390" stroke="#71717A" strokeWidth="0.65" />
        </g>

        {/* Technical Node Markers on Curve */}
        <circle cx="215" cy="160" r="3" fill="#121212" />
        <circle cx="280" cy="280" r="2.5" fill="#EB5725" />
        <circle cx="210" cy="390" r="3" fill="#121212" />


        {/* ── GIANT GLOWING BRAND ORANGE SUN & RADIANT CORONA ── */}
        {/* Multi-layered Pulsing Corona Glow */}
        <motion.circle
          cx="425"
          cy="135"
          r="82"
          fill="url(#sunCoronaClean)"
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '425px 135px' }}
        />

        {/* Solid Center Brand Orange Sun */}
        <motion.circle
          cx="425"
          cy="135"
          r="42"
          fill="#EB5725"
          animate={{ scale: [1, 1.018, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '425px 135px' }}
        />

        {/* Sun Anchor Line with Rounded Right Outer Boundary Frame */}
        <g stroke="#71717A" strokeWidth="0.75" fill="none" opacity="0.65">
          <line x1="425" y1="177" x2="425" y2="390" />
          <line x1="467" y1="145" x2="528" y2="145" />
          <path d="M 528 145 Q 548 145 548 165 L 548 395 Q 548 420 528 420 L 460 420" />
        </g>


        {/* ── SOARING FLOCK OF BIRDS ACROSS TOP-RIGHT SKY ── */}
        <g>
          <SoaringBird startX={280} startY={210} endX={560} endY={70} duration={8.5} delay={0} size={0.95} />
          <SoaringBird startX={260} startY={225} endX={545} endY={85} duration={9} delay={0.5} size={0.75} />
          <SoaringBird startX={245} startY={240} endX={530} endY={100} duration={9.5} delay={1} size={0.65} />
          <SoaringBird startX={300} startY={160} endX={570} endY={45} duration={10.5} delay={4} size={0.8} />
        </g>


        {/* ── PEN-SKETCHED RURAL LANDSCAPE ELEMENTS ── */}

        {/* ── 1. Stylized Rural Oak / Banyan Tree (Left of Barn) ── */}
        <motion.g
          animate={{ rotate: [-1.2, 1.2, -1.2] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '252px 390px' }}
          stroke="#121212"
          strokeWidth="1.05"
          strokeLinejoin="round"
          fill="#FAF7F0"
        >
          {/* Trunk & Branch Structure */}
          <path d="M 252 390 L 254 328" strokeWidth="1.35" />
          <path d="M 254 352 L 244 338" strokeWidth="1.1" />
          <path d="M 254 348 L 264 336" strokeWidth="1.1" />
          <path d="M 248 390 L 256 390" strokeWidth="1.3" />
          {/* Soil / Root dots at base */}
          <circle cx="238" cy="392" r="0.8" fill="#121212" />
          <circle cx="265" cy="392" r="0.8" fill="#121212" />
          <circle cx="252" cy="395" r="0.8" fill="#121212" />

          {/* Foliage Cloud Outlines */}
          <path
            d="M 244 338 C 230 334 227 310 240 300 C 233 285 250 270 264 280 C 278 270 293 285 288 305 C 300 315 294 334 281 338 C 274 344 254 344 244 338 Z"
            fill="#FAF7F0"
          />
          {/* Inner Texture Contour Lines */}
          <path d="M 248 305 Q 257 300 267 305" stroke="#71717A" strokeWidth="0.65" fill="none" />
          <path d="M 262 314 Q 271 309 278 317" stroke="#71717A" strokeWidth="0.65" fill="none" />
        </motion.g>


        {/* ── 2. Traditional Farm Barn / Agricultural Homestead ── */}
        <g stroke="#121212" strokeWidth="1.05" strokeLinejoin="round" fill="#FAF7F0">
          {/* Left & Right Shed Extensions */}
          <rect x="290" y="366" width="9" height="24" fill="#FAF7F0" />
          <rect x="368" y="366" width="9" height="24" fill="#FAF7F0" />
          {/* Main Barn Pitched Roof */}
          <polygon points="299,355 334,334 368,355" fill="#FAF7F0" />
          {/* Vertical Timber Slat Walls */}
          <rect x="299" y="355" width="69" height="35" fill="#FAF7F0" />
          {/* Vertical Slat Detailing Lines */}
          <line x1="307" y1="356" x2="307" y2="390" strokeWidth="0.65" stroke="#71717A" />
          <line x1="315" y1="356" x2="315" y2="390" strokeWidth="0.65" stroke="#71717A" />
          <line x1="323" y1="356" x2="323" y2="390" strokeWidth="0.65" stroke="#71717A" />
          <line x1="331" y1="356" x2="331" y2="390" strokeWidth="0.65" stroke="#71717A" />
          <line x1="339" y1="356" x2="339" y2="390" strokeWidth="0.65" stroke="#71717A" />
          <line x1="347" y1="356" x2="347" y2="390" strokeWidth="0.65" stroke="#71717A" />
          <line x1="355" y1="356" x2="355" y2="390" strokeWidth="0.65" stroke="#71717A" />
          <line x1="362" y1="356" x2="362" y2="390" strokeWidth="0.65" stroke="#71717A" />

          {/* Barn Doorway */}
          <rect x="328" y="368" width="12" height="22" fill="#121212" />
        </g>


        {/* ── 3. Primary Tall 3-Blade Wind Turbine (Right) ── */}
        <g stroke="#121212" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          {/* Mast Structure */}
          <polygon points="427,390 430,265 432,265 435,390" fill="#FAF7F0" stroke="#121212" strokeWidth="1.15" />
          <rect x="428" y="262" width="7" height="5" rx="1" fill="#121212" />

          {/* 3 Aerodynamic Rotating Blades */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '431px 265px' }}
          >
            <circle cx="431" cy="265" r="2.8" fill="#EB5725" stroke="#121212" strokeWidth="0.8" />
            {/* Blade 1 */}
            <path d="M 431 265 L 452 218 Q 454 216 453 220 L 433 265 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.9" />
            {/* Blade 2 */}
            <path d="M 431 265 L 466 295 Q 468 298 464 298 L 431 267 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.9" />
            {/* Blade 3 */}
            <path d="M 431 265 L 401 270 Q 398 268 402 266 L 431 265 Z" fill="#FAF7F0" stroke="#121212" strokeWidth="0.9" />
          </motion.g>
        </g>


        {/* ── 4. Secondary Distant Wind Turbine (Far Right) ── */}
        <g stroke="#121212" strokeWidth="0.75" strokeLinecap="round" opacity="0.8">
          <line x1="492" y1="390" x2="493" y2="335" strokeWidth="0.95" />
          <rect x="491" y="333" width="4" height="3" rx="0.6" fill="#121212" />

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '493px 335px' }}
          >
            <circle cx="493" cy="335" r="1.6" fill="#EB5725" />
            <line x1="493" y1="335" x2="502" y2="312" strokeWidth="0.85" />
            <line x1="493" y1="335" x2="506" y2="352" strokeWidth="0.85" />
            <line x1="493" y1="335" x2="480" y2="340" strokeWidth="0.85" />
          </motion.g>
        </g>


        {/* ── 5. DYNAMIC ANIMATED TRACTOR WITH FARMER ── */}
        <MovingTractorWithFarmer />


        {/* ── Horizontal Ground Lines & Horizon Textures ── */}
        <line x1="180" y1="390" x2="540" y2="390" stroke="#121212" strokeWidth="1" />
        <line x1="310" y1="398" x2="445" y2="398" stroke="#71717A" strokeWidth="0.65" strokeDasharray="5 3" />
        <line x1="330" y1="406" x2="415" y2="406" stroke="#71717A" strokeWidth="0.6" strokeDasharray="2.5 2.5" />

        {/* Bottom Technical Dash Group: —— —— —— —— with 2nd dash in Orange */}
        <g strokeWidth="1.2" strokeLinecap="round">
          <line x1="150" y1="435" x2="190" y2="435" stroke="#121212" />
          <line x1="200" y1="435" x2="220" y2="435" stroke="#EB5725" />
          <line x1="230" y1="435" x2="250" y2="435" stroke="#121212" opacity="0.6" />
          <line x1="260" y1="435" x2="278" y2="435" stroke="#121212" opacity="0.4" />
        </g>

      </svg>
    </div>
  );
}

export default function LeapHero() {
  return (
    <section className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── Left Edge Vertical Brand Tag ── */}
      <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-3 -rotate-90 origin-left select-none pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-[#EB5725]" />
        <span className="font-robotoMono text-[10px] font-bold tracking-[0.28em] text-[#71717A] uppercase whitespace-nowrap">
          EMPOWERING RURAL INDIA
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#121212]" />
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">01</span>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:pl-20">
        
        {/* =========================================================
            MAIN HERO 2-COLUMN GRID (Content on Left | Clean Art on Right)
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ── LEFT COLUMN: Editorial Typography & Actions ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center items-start z-10"
          >
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
                AIC PROGRAM
              </span>
              <div className="w-8 h-[1.5px] bg-[#EB5725]" />
            </div>

            {/* Main Headline */}
            <h1 className="font-marcellus text-[54px] sm:text-[68px] md:text-[76px] lg:text-[84px] leading-[0.92] tracking-[-0.035em] text-[#121212] mb-6 sm:mb-7">
              Longevity
              <br />
              <span className="text-[#EB5725]">Economy</span>
              <br />
              Accelerator<span className="text-[#EB5725]">.</span>
            </h1>

            {/* Sub-tagline */}
            <div className="flex items-start gap-2 mb-6">
              <span className="font-robotoMono text-[11px] font-bold text-[#EB5725] leading-snug">- +</span>
              <p className="font-robotoMono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#121212] leading-snug">
                BUILDING VENTURES.
                <br />
                STRENGTHENING ECOSYSTEMS.
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.8] text-[#52525B] max-w-sm mb-8 sm:mb-10">
              A 6-month incubation journey designed to empower AgriTech and RuralTech startups with the right mentorship, resources and market validation.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Solid Orange Apply Button */}
              <a
                href="https://www.f6s.com/leap-2026/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2
                  bg-[#EB5725] hover:bg-[#C84214] text-white
                  px-6 py-3.5 rounded-lg
                  font-robotoMono text-[11.5px] sm:text-[12px] font-bold uppercase tracking-[0.16em]
                  shadow-[0_4px_16px_rgba(235,87,37,0.25)] hover:shadow-[0_6px_22px_rgba(235,87,37,0.35)]
                  transition-all duration-200
                "
              >
                <span>APPLY NOW</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Scroll to Explore Link */}
              <a
                href="#about"
                className="
                  group inline-flex items-center gap-2.5
                  font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em]
                  text-[#121212] hover:text-[#EB5725]
                  transition-colors duration-200
                "
              >
                <span>SCROLL TO EXPLORE</span>
                <div className="w-7 h-7 rounded-full border border-[#EB5725] flex items-center justify-center text-[#EB5725] group-hover:bg-[#EB5725] group-hover:text-white transition-colors duration-200">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Clean Topographic Contour Landscape Artwork ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex items-center justify-center lg:justify-end"
          >
            <TopographicLandscapeArtwork />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
