'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Landmark,
  UserCheck,
  Rocket,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  LAYOUT: Architectural grid / blueprint diagram
//
//  SVG canvas: 600 × 560   Centre: (300, 280)
//
//  Hub at centre.
//  4 corner nodes at equal diagonal distance.
//  1 node centred at top.
//
//  Visual language: thin construction lines, tick marks,
//  right-angle elbows, measurement annotations, grid crosses.
// ─────────────────────────────────────────────────────────────

const CX = 300;
const CY = 280;

// Node positions — perfectly symmetric cross + top
const NODES = [
  {
    id: 'industry',
    label: 'INDUSTRY',
    sublabel: 'Corporate Partners',
    icon: Briefcase,
    nx: 300, ny: 80,       // top-centre
  },
  {
    id: 'govt',
    label: 'GOVERNMENT',
    sublabel: 'Policy & Grants',
    icon: Landmark,
    nx: 510, ny: 160,      // upper-right
  },
  {
    id: 'enablers',
    label: 'ECOSYSTEM',
    sublabel: 'Enablers & VCs',
    icon: Rocket,
    nx: 510, ny: 400,      // lower-right
  },
  {
    id: 'investors',
    label: 'INVESTORS',
    sublabel: 'Seed & Growth',
    icon: UserCheck,
    nx: 90,  ny: 400,      // lower-left
  },
  {
    id: 'academia',
    label: 'ACADEMIA',
    sublabel: 'Research & Labs',
    icon: GraduationCap,
    nx: 90,  ny: 160,      // upper-left
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PartnersEcosystemVisual() {
  return (
    <div className="relative w-full max-w-[500px] sm:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none overflow-visible">
      
      {/* ── UNIFIED SVG ORBITAL SYSTEM (Centered at 300, 280) ── */}
      <svg
        viewBox="0 0 600 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        aria-hidden="true"
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
          <line x1="20" y1="280" x2="580" y2="280" />
          <line x1="300" y1="20" x2="300" y2="540" />
        </g>

        {/* Diagonal Guidelines */}
        <line x1="90" y1="160" x2="510" y2="400" stroke="#EB5725" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />
        <line x1="510" y1="160" x2="90" y2="400" stroke="#EB5725" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.3" />

        {/* ── 2. CONCENTRIC ORBITAL RINGS ── */}
        {/* Ring 1: Inner Orbit (r=90) */}
        <circle
          cx={CX}
          cy={CY}
          r="90"
          stroke="#EB5725"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.5"
        />

        {/* ── Hub outer decorative square ── */}
        <motion.rect
          x={CX - 68}
          y={CY - 68}
          width="136"
          height="136"
          stroke="#EB5725"
          strokeWidth="0.8"
          strokeDasharray="3 5"
          opacity="0.3"
        />

        {/* Ring 3: Outer Orbit (r=200) */}
        <circle
          cx={CX}
          cy={CY}
          r="200"
          stroke="#D8D2C6"
          strokeWidth="0.9"
          strokeDasharray="4 6"
          opacity="0.75"
        />

        {/* ── 3. RADIAL CONNECTION LINES (From center to satellite centers) ── */}
        <g stroke="#EB5725" strokeWidth="1" strokeDasharray="3 3" opacity="0.45">
          <line x1={CX} y1={CY} x2="300" y2="80" />
          <line x1={CX} y1={CY} x2="510" y2="160" />
          <line x1={CX} y1={CY} x2="510" y2="400" />
          <line x1={CX} y1={CY} x2="90" y2="400" />
          <line x1={CX} y1={CY} x2="90" y2="160" />
        </g>

        {/* ── 4. ORBITAL CONNECTOR NODES ── */}
        <circle cx="300" cy="190" r="3" fill="#EB5725" />
        <circle cx="390" cy="280" r="3" fill="#EB5725" />
        <circle cx="300" cy="370" r="3" fill="#EB5725" />
        <circle cx="210" cy="280" r="3" fill="#EB5725" />

        <circle cx="90" cy="160" r="2.5" fill="#121212" />
        <circle cx="510" cy="160" r="2.5" fill="#121212" />
        <circle cx="90" cy="400" r="2.5" fill="#121212" />
        <circle cx="510" cy="400" r="2.5" fill="#121212" />

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

        {/* ── 5. CENTRAL AIC JKLU CORE BADGE ── */}
        <g transform={`translate(${CX}, ${CY})`}>
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

      {/* ── 5 SATELLITE NODES OVERLAY (Pinned using exact percentages from 600x560 grid) ── */}
      {NODES.map((node, idx) => {
        const Icon = node.icon;
        const leftPct = (node.nx / 600) * 100;
        const topPct = (node.ny / 560) * 100;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1 + idx * 0.06,
              ease: EASE,
            }}
            style={{
              position: 'absolute',
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="flex flex-col items-center text-center z-20 cursor-pointer group"
          >
            {/* Square badge — architectural */}
            <div className="
              w-[52px] h-[52px] sm:w-[58px] sm:h-[58px]
              rounded-xl
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

      {/* ── TECHNICAL GEOGRAPHIC COORDINATES (Jaipur) ── */}
      <div className="
        hidden xl:block
        absolute bottom-3 right-0
        font-robotoMono text-[8.5px] font-medium tracking-[0.2em]
        text-[#121212]/30 pointer-events-none select-none
      ">
        26.8470° N · 75.8082° E
      </div>
    </div>
  );
}
