'use client';

import { useState } from 'react';
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
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="relative w-full max-w-[580px] xl:max-w-[620px] mx-auto select-none"
      style={{ aspectRatio: '600 / 560' }}
    >
      <svg
        viewBox="0 0 600 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <filter id="hubGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="0" stdDeviation="18" floodColor="#EB5725" floodOpacity="0.30" />
          </filter>
          <filter id="nodeGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#EB5725" floodOpacity="0.22" />
          </filter>

          {/* Subtle background grid */}
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E4DDD5" strokeWidth="0.4" />
          </pattern>
        </defs>

        {/* ── Background grid ── */}
        <rect width="600" height="560" fill="url(#grid)" opacity="0.5" />

        {/* ── Corner crosshair marks ── */}
        {[[30,30],[570,30],[30,530],[570,530]].map(([x,y],i) => (
          <g key={i} opacity="0.35">
            <line x1={x-8} y1={y} x2={x+8} y2={y} stroke="#EB5725" strokeWidth="0.9" />
            <line x1={x} y1={y-8} x2={x} y2={y+8} stroke="#EB5725" strokeWidth="0.9" />
          </g>
        ))}

        {/* ── Architectural outer frame ── */}
        <rect
          x="50" y="50" width="500" height="460"
          stroke="#E4DDD5" strokeWidth="0.8" strokeDasharray="4 6"
          opacity="0.6"
        />

        {/* ── Measurement annotation lines (decorative) ── */}
        {/* Horizontal ruler top */}
        <g opacity="0.3">
          <line x1="90" y1="32" x2="510" y2="32" stroke="#A09890" strokeWidth="0.7" />
          <line x1="90" y1="28" x2="90"  y2="36" stroke="#A09890" strokeWidth="0.7" />
          <line x1="510" y1="28" x2="510" y2="36" stroke="#A09890" strokeWidth="0.7" />
          <text x="300" y="28" textAnchor="middle" fill="#A09890" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
            ECOSYSTEM WIDTH
          </text>
        </g>
        {/* Vertical ruler right */}
        <g opacity="0.3">
          <line x1="568" y1="160" x2="568" y2="400" stroke="#A09890" strokeWidth="0.7" />
          <line x1="563" y1="160" x2="573" y2="160" stroke="#A09890" strokeWidth="0.7" />
          <line x1="563" y1="400" x2="573" y2="400" stroke="#A09890" strokeWidth="0.7" />
          <text
            x="581" y="282"
            textAnchor="middle" fill="#A09890"
            fontSize="8" fontFamily="monospace" letterSpacing="0.1em"
            transform="rotate(90, 581, 282)"
          >
            IMPACT DEPTH
          </text>
        </g>

        {/* ── Hub outer decorative square ── */}
        <motion.rect
          x={CX - 68} y={CY - 68}
          width="136" height="136"
          stroke="#EB5725" strokeWidth="0.8"
          strokeDasharray="3 5"
          opacity="0.3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
        {/* Rotated 45° square */}
        <motion.rect
          x={CX - 48} y={CY - 48}
          width="96" height="96"
          stroke="#EB5725" strokeWidth="0.7"
          strokeDasharray="2 4"
          opacity="0.2"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.2, rotate: 45 }}
          transition={{ duration: 1, ease: EASE }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />

        {/* ── Central hub circle ── */}
        {/* Outer pulse ring */}
        <circle cx={CX} cy={CY} r="74" fill="none" stroke="#EB5725" strokeWidth="0.8" opacity="0.2">
          <animate attributeName="r"       values="70;78;70" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.06;0.2" dur="3.5s" repeatCount="indefinite" />
        </circle>
        {/* Main hub fill */}
        <circle cx={CX} cy={CY} r="62" fill="#EB5725" filter="url(#hubGlow)" />
        <circle cx={CX} cy={CY} r="62" fill="none" stroke="white" strokeWidth="2" opacity="0.35" />

        {/* AIC text */}
        <text
          x={CX} y={CY - 8}
          textAnchor="middle" dominantBaseline="middle"
          fill="white"
          style={{ fontSize: '28px', fontWeight: '700', letterSpacing: '-0.02em', fontFamily: 'var(--font-marcellus, serif)' }}
        >
          AIC
        </text>
        {/* Thin divider */}
        <line x1={CX - 22} y1={CY + 8} x2={CX + 22} y2={CY + 8} stroke="white" strokeWidth="0.7" opacity="0.5" />
        {/* JKLU text */}
        <text
          x={CX} y={CY + 22}
          textAnchor="middle" dominantBaseline="middle"
          fill="white"
          style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.26em', fontFamily: 'var(--font-roboto-mono, monospace)' }}
        >
          JKLU
        </text>

      </svg>

      {/* ── Node badges (HTML for crisp icon rendering) ── */}
      {NODES.map((node, idx) => {
        const Icon = node.icon;
        const isHov = hovered === node.id;
        const leftPct = (node.nx / 600) * 100;
        const topPct  = (node.ny / 560) * 100;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + idx * 0.08, ease: EASE }}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              left: `${leftPct}%`,
              top:  `${topPct}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="flex flex-col items-center text-center z-20 cursor-pointer group"
          >
            {/* Square badge — architectural, not circular */}
            <div className={`
              w-[52px] h-[52px] sm:w-[58px] sm:h-[58px]
              rounded-xl
              flex items-center justify-center
              border transition-all duration-250
              shadow-[0_4px_18px_rgba(0,0,0,0.07)]
              ${isHov
                ? 'bg-[#EB5725] border-[#EB5725] text-white shadow-[0_6px_24px_rgba(235,87,37,0.28)]'
                : 'bg-white border-[#E4E0DB] text-[#121212]'
              }
            `}>
              <Icon className={`w-5 h-5 sm:w-[22px] sm:h-[22px] transition-transform duration-250 ${isHov ? 'scale-110' : ''}`} />
            </div>

            {/* Label */}
            <div className="mt-2 flex flex-col items-center gap-0.5">
              <span className={`
                font-robotoMono text-[9px] sm:text-[9.5px] font-bold
                tracking-[0.16em] uppercase leading-none
                transition-colors duration-200
                ${isHov ? 'text-[#EB5725]' : 'text-[#121212]'}
              `}>
                {node.label}
              </span>
              <span className={`
                font-robotoMono text-[7.5px] sm:text-[8px]
                tracking-[0.1em] leading-none
                transition-colors duration-200
                ${isHov ? 'text-[#EB5725]/70' : 'text-[#A09890]'}
              `}>
                {node.sublabel}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* ── Coordinates label ── */}
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
