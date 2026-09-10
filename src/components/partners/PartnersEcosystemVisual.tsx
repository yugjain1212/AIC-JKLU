'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Landmark,
  UserCheck,
  Rocket,
} from 'lucide-react';

// ── True regular pentagon, r=190, centred at (270,270), top node at −90° ──
// Angles: -90, -18, 54, 126, 198  (72° steps)
const CX = 270;
const CY = 270;
const R  = 190;   // satellite orbit radius
const R2 = 90;    // inner ring radius (connector dot orbit)

function pt(angleDeg: number, radius = R) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.round(CX + radius * Math.cos(rad)),
    y: Math.round(CY + radius * Math.sin(rad)),
  };
}

interface SatelliteNode {
  id:    string;
  label: string;
  icon:  React.ElementType;
  angle: number;   // degrees
}

const NODES: SatelliteNode[] = [
  { id: 'industry',  label: 'INDUSTRY',          icon: Briefcase,    angle: -90  },
  { id: 'govt',      label: 'GOVERNMENT',         icon: Landmark,     angle: -18  },
  { id: 'enablers',  label: 'ECOSYSTEM\nENABLERS',icon: Rocket,       angle:  54  },
  { id: 'investors', label: 'INVESTORS',          icon: UserCheck,    angle: 126  },
  { id: 'academia',  label: 'ACADEMIA',           icon: GraduationCap,angle: 198  },
];

export default function PartnersEcosystemVisual() {
  return (
    <div className="relative w-full max-w-[500px] sm:max-w-[560px] aspect-square mx-auto flex items-center justify-center select-none overflow-visible">

      {/* ── UNIFIED SVG ORBITAL SYSTEM ── */}
      <svg
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <filter id="aicGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="#EB5725" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* ── Concentric rings ── */}
        {/* Innermost dashed orange ring */}
        <circle cx={CX} cy={CY} r="90"  stroke="#EB5725" strokeWidth="1"   strokeDasharray="3 4"  opacity="0.5" />
        {/* Mid ring */}
        <circle cx={CX} cy={CY} r="148" stroke="#121212" strokeWidth="0.75" strokeDasharray="2 4"  opacity="0.25" />
        {/* Outer ring — sits just inside the satellite nodes */}
        <circle cx={CX} cy={CY} r={R}   stroke="#D8D2C6" strokeWidth="1"    strokeDasharray="4 6"  opacity="0.7" />

        {/* ── Radial lines from centre → each node (exact pentagon coords) ── */}
        <g stroke="#EB5725" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.45">
          {NODES.map((n) => {
            const p = pt(n.angle);
            return <line key={n.id} x1={CX} y1={CY} x2={p.x} y2={p.y} />;
          })}
        </g>

        {/* ── Connector accent dots on the inner orbit (R2=90) ── */}
        {NODES.map((n) => {
          const p = pt(n.angle, R2);
          return (
            <circle key={`dot-inner-${n.id}`} cx={p.x} cy={p.y} r="3" fill="#EB5725" />
          );
        })}

        {/* ── Accent dots at satellite positions (outside the node badges) ── */}
        {NODES.map((n) => {
          // Place a small dot slightly beyond the outer ring as a visual anchor
          const p = pt(n.angle, R - 14);
          return (
            <circle key={`dot-outer-${n.id}`} cx={p.x} cy={p.y} r="2.5" fill="#121212" opacity="0.45" />
          );
        })}

        {/* ── Axis guide lines ── */}
        <g opacity="0.2" stroke="#D8D2C6" strokeWidth="0.8" strokeDasharray="3 3">
          <line x1="20"  y1={CY} x2="520" y2={CY} />
          <line x1={CX}  y1="20" x2={CX}  y2="520" />
        </g>

        {/* ── Decorative dot matrix — top-right ── */}
        <g opacity="0.4" fill="#EB5725">
          {[0,1,2].map(row => [0,1,2].map(col => (
            <circle key={`dm-${row}-${col}`} cx={452 + col*15} cy={45 + row*15} r="1.2" />
          )))}
        </g>

        {/* ── Central AIC-JKLU core badge ── */}
        <g transform={`translate(${CX},${CY})`}>
          {/* Breathing pulse ring */}
          <circle cx="0" cy="0" r="62" fill="none" stroke="#EB5725" strokeWidth="1" strokeDasharray="2 3" opacity="0.35">
            <animate attributeName="r"       values="58;66;58" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.12;0.35" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Solid badge */}
          <circle cx="0" cy="0" r="56" fill="#EB5725" stroke="#FFFFFF" strokeWidth="2.5" filter="url(#aicGlow)" />

          {/* AIC text */}
          <text
            x="0" y="-5"
            textAnchor="middle" dominantBaseline="middle"
            fill="#FFFFFF"
            style={{ fontSize: '26px', fontWeight: 'bold', letterSpacing: '-0.02em', fontFamily: 'var(--font-marcellus, serif)' }}
          >
            AIC
          </text>

          {/* JKLU subtitle */}
          <text
            x="0" y="20"
            textAnchor="middle" dominantBaseline="middle"
            fill="#FFFFFF"
            style={{ fontSize: '10.5px', fontWeight: '700', letterSpacing: '0.22em', fontFamily: 'var(--font-roboto-mono, monospace)' }}
          >
            JKLU
          </text>
        </g>
      </svg>

      {/* ── Satellite node badges (HTML overlaid via absolute positioning) ── */}
      {NODES.map((node, idx) => {
        const Icon = node.icon;
        const p = pt(node.angle);
        // Convert SVG coords (0-540) → percentage of container
        const leftPct = (p.x / 540) * 100;
        const topPct  = (p.y / 540) * 100;

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.08 + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              left:  `${leftPct}%`,
              top:   `${topPct}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="flex flex-col items-center text-center z-20 group cursor-pointer"
          >
            {/* Icon badge */}
            <div className="
              w-12 h-12 sm:w-[54px] sm:h-[54px]
              rounded-full bg-white
              border border-[#E4E4E0]
              shadow-[0_4px_16px_rgba(0,0,0,0.07)]
              flex items-center justify-center
              text-[#121212]
              group-hover:border-[#EB5725]
              group-hover:text-[#EB5725]
              group-hover:scale-110
              group-hover:shadow-[0_8px_24px_rgba(235,87,37,0.2)]
              transition-all duration-300
              mb-2
            ">
              <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Label — multi-line supported via pre-wrap */}
            <span className="
              font-robotoMono text-[9px] sm:text-[9.5px]
              font-bold tracking-[0.15em] uppercase
              text-[#121212] group-hover:text-[#EB5725]
              transition-colors duration-200
              max-w-[90px] leading-[1.45]
              text-center whitespace-pre-line
            ">
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* ── Geographic coordinates ── */}
      <div className="
        hidden xl:flex
        absolute top-2 right-[-48px]
        rotate-90 origin-right
        font-robotoMono text-[9px] font-medium tracking-[0.22em]
        text-[#121212]/35
        pointer-events-none select-none
      ">
        26.8470° N &nbsp; 75.8082° E
      </div>

    </div>
  );
}
