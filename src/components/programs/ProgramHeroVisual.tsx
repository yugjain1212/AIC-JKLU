'use client';

import { motion } from 'framer-motion';

// =========================================================================
// BILLOWING SMOKE PARTICLES & CLOUD PUFFS (Centered precisely on x = 250)
// =========================================================================
const SMOKE_PUFFS = [
  // Core Exhaust Stream (Right beneath flame at x = 250)
  { id: 1, cx: 250, cy: 195, r: 16, delay: 0, dur: 2.2, dx: 0, dy: 35, scale: [0.6, 1.4, 2.2], opacity: [0.8, 0.4, 0] },
  { id: 2, cx: 242, cy: 215, r: 22, delay: 0.5, dur: 2.6, dx: -20, dy: 45, scale: [0.7, 1.5, 2.5], opacity: [0.7, 0.35, 0] },
  { id: 3, cx: 258, cy: 215, r: 22, delay: 1.0, dur: 2.5, dx: 20, dy: 45, scale: [0.7, 1.6, 2.4], opacity: [0.7, 0.35, 0] },
  { id: 4, cx: 232, cy: 245, r: 28, delay: 1.4, dur: 3.0, dx: -35, dy: 50, scale: [0.8, 1.7, 2.8], opacity: [0.6, 0.3, 0] },
  { id: 5, cx: 268, cy: 245, r: 28, delay: 0.8, dur: 2.9, dx: 35, dy: 50, scale: [0.8, 1.7, 2.8], opacity: [0.6, 0.3, 0] },
  // Lateral Billowing Clouds
  { id: 6, cx: 205, cy: 280, r: 34, delay: 0.3, dur: 3.4, dx: -45, dy: 35, scale: [0.9, 1.5, 2.2], opacity: [0.5, 0.25, 0] },
  { id: 7, cx: 295, cy: 280, r: 34, delay: 1.6, dur: 3.3, dx: 45, dy: 35, scale: [0.9, 1.5, 2.2], opacity: [0.5, 0.25, 0] },
  { id: 8, cx: 170, cy: 310, r: 40, delay: 0.7, dur: 3.8, dx: -30, dy: 25, scale: [0.9, 1.4, 2.0], opacity: [0.4, 0.2, 0] },
  { id: 9, cx: 330, cy: 310, r: 40, delay: 1.2, dur: 3.7, dx: 30, dy: 25, scale: [0.9, 1.4, 2.0], opacity: [0.4, 0.2, 0] },
];

export default function ProgramHeroVisual() {
  return (
    <div className="relative w-full max-w-[520px] aspect-[500/450] mx-auto flex items-center justify-center select-none overflow-visible">
      
      {/* ── UNIFIED SVG: Architectural Grid, Flame, Smoke, Clouds & Rocket ── */}
      <svg
        viewBox="0 0 500 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible select-none"
      >
        <defs>
          <filter id="rocketShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#EB5725" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* ── 1. SUBTLE HORIZONTAL & VERTICAL TECHNICAL GUIDE LINES ── */}
        <g opacity="0.3" stroke="#D8D2C6" strokeWidth="0.8" strokeDasharray="3 3">
          <line x1="20" y1="80" x2="480" y2="80" />
          <line x1="20" y1="200" x2="480" y2="200" />
          <line x1="20" y1="320" x2="480" y2="320" />
          <line x1="100" y1="20" x2="100" y2="430" />
          <line x1="250" y1="20" x2="250" y2="430" stroke="#EB5725" opacity="0.6" />
          <line x1="400" y1="20" x2="400" y2="430" />
        </g>

        {/* Diagonal Technical Trajectory Guidelines (Apex at x = 250, y = 60) */}
        <line
          x1="120"
          y1="360"
          x2="250"
          y2="60"
          stroke="#EB5725"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          opacity="0.45"
        />
        <line
          x1="380"
          y1="360"
          x2="250"
          y2="60"
          stroke="#EB5725"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          opacity="0.45"
        />

        {/* Top-Right Technical Dot Matrix */}
        <g opacity="0.35" fill="#EB5725">
          <circle cx="270" cy="35" r="1.2" />
          <circle cx="285" cy="35" r="1.2" />
          <circle cx="300" cy="35" r="1.2" />
          <circle cx="270" cy="50" r="1.2" />
          <circle cx="285" cy="50" r="1.2" />
          <circle cx="300" cy="50" r="1.2" />
          <circle cx="270" cy="65" r="1.2" />
          <circle cx="285" cy="65" r="1.2" />
          <circle cx="300" cy="65" r="1.2" />
        </g>

        {/* Top Target Reticle Crosshair Node */}
        <g transform="translate(180, 48)">
          <circle cx="0" cy="0" r="6" stroke="#EB5725" strokeWidth="1" strokeDasharray="1.5 1.5" opacity="0.85" />
          <circle cx="0" cy="0" r="2" fill="#EB5725" />
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#EB5725" strokeWidth="0.8" opacity="0.7" />
          <line x1="0" y1="-10" x2="0" y2="10" stroke="#EB5725" strokeWidth="0.8" opacity="0.7" />
        </g>

        {/* Right Architectural Scaffolding / Lattice Framework */}
        <g opacity="0.45" stroke="#71717A" strokeWidth="0.9">
          <rect x="360" y="110" width="70" height="120" fill="none" />
          <line x1="360" y1="150" x2="430" y2="150" />
          <line x1="360" y1="190" x2="430" y2="190" />
          <line x1="360" y1="110" x2="430" y2="150" />
          <line x1="430" y1="110" x2="360" y2="150" />
          <line x1="360" y1="150" x2="430" y2="190" />
          <line x1="430" y1="150" x2="360" y2="190" />
          <line x1="360" y1="190" x2="430" y2="230" />
          <line x1="430" y1="190" x2="360" y2="230" />
        </g>

        {/* ── 2. FLOWING EXHAUST SMOKE STREAMS (Centered on x = 250) ── */}
        <g stroke="#EB5725" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.6">
          <line x1="242" y1="180" x2="230" y2="330">
            <animate attributeName="stroke-dashoffset" values="0;-20" dur="0.8s" repeatCount="indefinite" />
          </line>
          <line x1="250" y1="185" x2="250" y2="350">
            <animate attributeName="stroke-dashoffset" values="0;-20" dur="0.6s" repeatCount="indefinite" />
          </line>
          <line x1="258" y1="180" x2="270" y2="330">
            <animate attributeName="stroke-dashoffset" values="0;-20" dur="0.8s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Lateral Expansion Trails */}
        <g stroke="#121212" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.35">
          <path d="M 235 190 Q 200 240 180 320">
            <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.2s" repeatCount="indefinite" />
          </path>
          <path d="M 265 190 Q 300 240 320 320">
            <animate attributeName="stroke-dashoffset" values="0;-16" dur="1.2s" repeatCount="indefinite" />
          </path>
        </g>

        {/* ── 3. DYNAMIC VOLUMETRIC SMOKE PUFFS (Expanding & Dissipating at x = 250) ── */}
        <g>
          {SMOKE_PUFFS.map((puff) => (
            <motion.circle
              key={puff.id}
              cx={puff.cx}
              cy={puff.cy}
              r={puff.r}
              fill="#F4ECE0"
              stroke="#D6CBB8"
              strokeWidth="0.9"
              animate={{
                x: [0, puff.dx],
                y: [0, puff.dy],
                scale: puff.scale,
                opacity: puff.opacity,
              }}
              transition={{
                duration: puff.dur,
                delay: puff.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </g>

        {/* ── 4. MULTI-TIER BILLOWING CLOUD BASE (Centered at x = 250) ── */}
        
        {/* TIER 3: Deep Background Cloud Plume */}
        <motion.g
          animate={{
            y: [0, -6, 0],
            scaleX: [1, 1.03, 1],
            scaleY: [1, 1.05, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '250px 380px' }}
        >
          <path
            d="M 50 410 C 70 330 120 310 160 330 C 190 280 240 270 275 295 C 310 260 365 270 395 310 C 430 315 460 340 470 410 Z"
            fill="#EDE4D4"
            opacity="0.75"
          />
          <path
            d="M 120 330 C 150 285 205 270 245 295 C 275 255 330 260 360 295 C 390 290 425 315 440 350"
            stroke="#121212"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />
        </motion.g>

        {/* TIER 2: Midground Billowing Smoke Waves */}
        <motion.g
          animate={{
            y: [0, 4, -4, 0],
            x: [0, -3, 3, 0],
            scale: [1, 1.02, 0.99, 1],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '250px 380px' }}
        >
          <path
            d="M 60 410 C 80 345 130 330 160 355 C 195 305 245 300 280 325 C 310 285 365 290 390 330 C 425 330 455 355 465 410 Z"
            fill="#F6F0E4"
            opacity="0.85"
          />
          
          {/* Architectural Line-Art Contours */}
          <path
            d="M 80 375 C 95 330 145 320 175 345 C 205 305 255 300 285 328 C 315 295 365 300 385 335 C 415 330 440 355 450 385"
            stroke="#121212"
            strokeWidth="1.1"
            strokeLinecap="round"
            fill="none"
          />

          {/* Shading Hatch Lines */}
          <g stroke="#D4CCBE" strokeWidth="0.8" strokeLinecap="round">
            <line x1="165" y1="355" x2="175" y2="360" />
            <line x1="170" y1="360" x2="180" y2="365" />
            <line x1="225" y1="335" x2="235" y2="340" />
            <line x1="230" y1="340" x2="240" y2="345" />
            <line x1="285" y1="335" x2="295" y2="340" />
            <line x1="290" y1="340" x2="300" y2="345" />
            <line x1="350" y1="345" x2="360" y2="350" />
          </g>
        </motion.g>

        {/* TIER 1: Foreground Crisp Billowing Arcs */}
        <motion.g
          animate={{
            y: [0, -3, 2, 0],
            scaleX: [1, 1.015, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '250px 400px' }}
        >
          <path
            d="M 70 415 C 88 370 125 365 145 380 C 165 350 205 345 230 365 C 255 335 295 335 320 360 C 345 345 385 350 405 380 C 430 370 455 385 460 415 Z"
            fill="#FFFFFF"
            opacity="0.95"
          />

          {/* Foreground Crisp Black Edge Outlines */}
          <path
            d="M 68 410 C 85 365 125 360 145 378 C 162 345 202 340 230 360 C 258 330 298 330 322 355 C 348 340 388 345 405 375 C 430 365 455 380 462 410"
            stroke="#121212"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Micro Puff Details on Foreground Clouds */}
          <path
            d="M 115 390 C 125 375 140 375 150 388"
            stroke="#121212"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />
          <path
            d="M 270 375 C 280 360 298 360 308 372"
            stroke="#121212"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />
        </motion.g>

        {/* ── 5. LAUNCHING ROCKET: Mathematically Centered at x = 250 directly above Triangle Apex ── */}
        <g transform="translate(250, 30)" filter="url(#rocketShadow)">
          <motion.g
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Flame Exhaust Under Thrusters (Centered at x = 0) */}
            <g transform="translate(0, 134)">
              {/* Outer Flame (Orange) */}
              <path
                d="M -12 0 C -15 22 -6 40 0 50 C 6 40 15 22 12 0 Z"
                fill="#EB5725"
              >
                <animate
                  attributeName="d"
                  values="M -12 0 C -15 22 -6 40 0 50 C 6 40 15 22 12 0 Z; M -10 0 C -14 28 -4 46 0 58 C 4 46 14 28 10 0 Z; M -13 0 C -16 20 -7 38 0 46 C 7 38 16 20 13 0 Z; M -12 0 C -15 22 -6 40 0 50 C 6 40 15 22 12 0 Z"
                  dur="0.45s"
                  repeatCount="indefinite"
                />
              </path>
              {/* Inner Core Flame (Bright Amber/Yellow) */}
              <path
                d="M -6 0 C -8 14 -3 26 0 34 C 3 26 8 14 6 0 Z"
                fill="#FDBA74"
              >
                <animate
                  attributeName="d"
                  values="M -6 0 C -8 14 -3 26 0 34 C 3 26 8 14 6 0 Z; M -5 0 C -7 20 -2 32 0 40 C 2 32 7 20 5 0 Z; M -7 0 C -9 12 -4 22 0 30 C 4 22 9 12 7 0 Z; M -6 0 C -8 14 -3 26 0 34 C 3 26 8 14 6 0 Z"
                  dur="0.3s"
                  repeatCount="indefinite"
                />
              </path>
              {/* White Core Spark */}
              <circle cx="0" cy="8" r="3.5" fill="#FFFFFF" opacity="0.95">
                <animate attributeName="r" values="3.5;4.5;3;3.5" dur="0.25s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Rocket Left & Right Fins */}
            <path
              d="M -22 92 L -44 132 C -44 132 -32 134 -20 126 L -20 92 Z"
              fill="#C84214"
              stroke="#121212"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M 22 92 L 44 132 C 44 132 32 134 20 126 L 20 92 Z"
              fill="#C84214"
              stroke="#121212"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Main Fuselage Body (Centered at x = 0) */}
            <path
              d="M 0 8 C -20 38 -22 85 -22 132 L 22 132 C 22 85 20 38 0 8 Z"
              fill="#EB5725"
              stroke="#121212"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Rocket Nosecone Tip (White) */}
            <path
              d="M 0 8 C -8 22 -12 36 -14 46 L 14 46 C 12 36 8 22 0 8 Z"
              fill="#FFFFFF"
              stroke="#121212"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Fuselage White Porthole / Glass Window */}
            <circle
              cx="0"
              cy="74"
              r="12"
              fill="#FFFFFF"
              stroke="#121212"
              strokeWidth="2"
            />
            <circle
              cx="0"
              cy="74"
              r="8.5"
              fill="#E0E7FF"
              stroke="#121212"
              strokeWidth="1.2"
            />
            <path
              d="M -5 70 Q 0 68 3 72"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Lower Engine Nozzle Base */}
            <rect
              x="-14"
              y="132"
              width="28"
              height="8"
              rx="1.5"
              fill="#121212"
            />

            {/* Center Rib Line */}
            <line
              x1="0"
              y1="90"
              x2="0"
              y2="128"
              stroke="#121212"
              strokeWidth="1.2"
              opacity="0.4"
            />
          </motion.g>
        </g>

      </svg>
    </div>
  );
}
