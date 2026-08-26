'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Landmark,
  UserCheck,
  Rocket,
} from 'lucide-react';

interface SatelliteNode {
  id: string;
  label: string;
  icon: React.ElementType;
  x: number;
  y: number;
}

// 540 x 540 coordinate space centered at (270, 270)
const SATELLITE_NODES: SatelliteNode[] = [
  {
    id: 'industry',
    label: 'INDUSTRY',
    icon: Briefcase,
    x: 270,
    y: 75,
  },
  {
    id: 'academia',
    label: 'ACADEMIA',
    icon: GraduationCap,
    x: 110,
    y: 195,
  },
  {
    id: 'government',
    label: 'GOVERNMENT',
    icon: Landmark,
    x: 430,
    y: 195,
  },
  {
    id: 'investors',
    label: 'INVESTORS',
    icon: UserCheck,
    x: 160,
    y: 405,
  },
  {
    id: 'enablers',
    label: 'ECOSYSTEM ENABLERS',
    icon: Rocket,
    x: 380,
    y: 405,
  },
];

export default function PartnersEcosystemVisual() {
  return (
    <div className="relative w-full max-w-[500px] sm:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none overflow-visible">
      
      {/* ── UNIFIED SVG ORBITAL SYSTEM (Centered at 270, 270) ── */}
      <svg
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible pointer-events-none"
      >
        <defs>
          {/* Subtle Drop Shadow for Central Badge */}
          <filter id="aicGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#EB5725" floodOpacity="0.32" />
          </filter>
          <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* ── 1. BACKGROUND AXIS & TRAJECTORY GUIDELINES ── */}
        <g opacity="0.25" stroke="#D8D2C6" strokeWidth="0.8" strokeDasharray="3 3">
          <line x1="20" y1="270" x2="520" y2="270" />
          <line x1="270" y1="20" x2="270" y2="520" />
        </g>

        {/* Diagonal Guidelines */}
        <line x1="110" y1="110" x2="430" y2="430" stroke="#EB5725" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />
        <line x1="430" y1="110" x2="110" y2="430" stroke="#EB5725" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />

        {/* ── 2. CONCENTRIC ORBITAL RINGS ── */}
        {/* Ring 1: Inner Orbit (r=90) */}
        <circle
          cx="270"
          cy="270"
          r="90"
          stroke="#EB5725"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.5"
        />

        {/* Ring 2: Mid Orbit (r=148) */}
        <circle
          cx="270"
          cy="270"
          r="148"
          stroke="#121212"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          opacity="0.3"
        />

        {/* Ring 3: Outer Orbit (r=200) */}
        <circle
          cx="270"
          cy="270"
          r="200"
          stroke="#D8D2C6"
          strokeWidth="0.9"
          strokeDasharray="4 6"
          opacity="0.75"
        />

        {/* ── 3. RADIAL CONNECTION LINES (From exact center to satellite centers) ── */}
        <g stroke="#EB5725" strokeWidth="1" strokeDasharray="3 3" opacity="0.45">
          <line x1="270" y1="270" x2="270" y2="75" />
          <line x1="270" y1="270" x2="110" y2="195" />
          <line x1="270" y1="270" x2="430" y2="195" />
          <line x1="270" y1="270" x2="160" y2="405" />
          <line x1="270" y1="270" x2="380" y2="405" />
        </g>

        {/* ── 4. ORBITAL CONNECTOR NODES ── */}
        <circle cx="270" cy="180" r="3" fill="#EB5725" />
        <circle cx="360" cy="270" r="3" fill="#EB5725" />
        <circle cx="270" cy="360" r="3" fill="#EB5725" />
        <circle cx="180" cy="270" r="3" fill="#EB5725" />

        <circle cx="110" cy="195" r="2.5" fill="#121212" />
        <circle cx="430" cy="195" r="2.5" fill="#121212" />
        <circle cx="160" cy="405" r="2.5" fill="#121212" />
        <circle cx="380" cy="405" r="2.5" fill="#121212" />

        {/* Top-Right Technical Dot Matrix */}
        <g opacity="0.4" fill="#EB5725">
          <circle cx="450" cy="45" r="1.2" />
          <circle cx="465" cy="45" r="1.2" />
          <circle cx="480" cy="45" r="1.2" />
          <circle cx="450" cy="60" r="1.2" />
          <circle cx="465" cy="60" r="1.2" />
          <circle cx="480" cy="60" r="1.2" />
          <circle cx="450" cy="75" r="1.2" />
          <circle cx="465" cy="75" r="1.2" />
          <circle cx="480" cy="75" r="1.2" />
        </g>

        {/* Left Side Dot Matrix */}
        <g opacity="0.35" fill="#71717A">
          <circle cx="60" cy="260" r="1.2" />
          <circle cx="75" cy="260" r="1.2" />
          <circle cx="90" cy="260" r="1.2" />
          <circle cx="60" cy="275" r="1.2" />
          <circle cx="75" cy="275" r="1.2" />
          <circle cx="90" cy="275" r="1.2" />
        </g>

        {/* ── 5. CENTRAL AIC JKLU CORE BADGE (Rendered directly in SVG at 270, 270) ── */}
        <g transform="translate(270, 270)">
          {/* Outer Breathing Pulse Ring */}
          <circle cx="0" cy="0" r="62" fill="none" stroke="#EB5725" strokeWidth="1" strokeDasharray="2 3" opacity="0.4">
            <animate attributeName="r" values="58;66;58" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.15;0.4" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Solid AIC Orange Circle */}
          <circle cx="0" cy="0" r="54" fill="#EB5725" stroke="#FFFFFF" strokeWidth="2.5" filter="url(#aicGlow)" />

          {/* AIC Heading */}
          <text
            x="0"
            y="-4"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFFFFF"
            className="font-marcellus"
            style={{ fontSize: '26px', fontWeight: 'bold', letterSpacing: '-0.02em' }}
          >
            AIC
          </text>

          {/* JKLU Subtitle */}
          <text
            x="0"
            y="19"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFFFFF"
            className="font-robotoMono"
            style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '0.22em' }}
          >
            JKLU
          </text>
        </g>
      </svg>

      {/* ── 5 SATELLITE NODES OVERLAY (Pinned using exact percentages from 540 grid) ── */}
      {SATELLITE_NODES.map((node, idx) => {
        const Icon = node.icon;
        const leftPercent = (node.x / 540) * 100;
        const topPercent = (node.y / 540) * 100;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1 + idx * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: 'absolute',
              top: `${topPercent}%`,
              left: `${leftPercent}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="flex flex-col items-center text-center z-20 group cursor-pointer"
          >
            {/* White Circular Node Badge with Icon */}
            <div className="
              w-12 h-12 sm:w-14 sm:h-14
              rounded-full
              bg-white
              border border-[#E4E4E0]
              shadow-[0_4px_16px_rgba(0,0,0,0.06)]
              flex items-center justify-center
              text-[#121212]
              group-hover:border-[#EB5725]
              group-hover:text-[#EB5725]
              group-hover:scale-110
              group-hover:shadow-[0_8px_24px_rgba(235,87,37,0.2)]
              transition-all duration-300
              mb-2
            ">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Label */}
            <span className="
              font-robotoMono
              text-[9px] sm:text-[10px]
              font-bold
              tracking-[0.16em]
              uppercase
              text-[#121212]
              group-hover:text-[#EB5725]
              transition-colors duration-200
              max-w-[110px]
              leading-tight
            ">
              {node.label}
            </span>
          </motion.div>
        );
      })}



      {/* ── TOP RIGHT TECHNICAL GEOGRAPHIC COORDINATES (Jaipur) ── */}
      <div className="
        hidden xl:flex
        absolute top-2 right-[-50px]
        rotate-90 origin-right
        font-robotoMono text-[9px] font-medium tracking-[0.22em]
        text-[#121212]/40
        pointer-events-none select-none
      ">
        26.8470° N &nbsp; 75.8082° E
      </div>

    </div>
  );
}
