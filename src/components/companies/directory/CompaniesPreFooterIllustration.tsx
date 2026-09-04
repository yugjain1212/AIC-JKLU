'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Pre-footer "closing scene" — same illustrated world as the hero,
 * camera moved further along the journey. A path enters from the left
 * edge and continues beyond the right edge: the journey continues.
 */

const E = [0.22, 1, 0.36, 1] as const;
const MONO = "'Roboto Mono', 'Courier New', monospace";

const INK = '#121212';
const MUTED = '#52525B';
const HAIR = '#D8D2C8';
const PAPER = '#FFFFFF';
const CREAM = '#FFF2ED';
const ORANGE = '#EB5725';

const PATH =
  'M-10 272 C60 268 110 278 160 288 C210 298 260 288 320 284 C380 280 440 280 480 266 C500 259 516 258 532 258';

export default function CompaniesPreFooterIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const artY = useTransform(scrollYProgress, [0, 1], ['8px', '-8px']);
  const marksY = useTransform(scrollYProgress, [0, 1], ['3px', '-3px']);

  const reveal = (delay: number, dur = 0.7, y = 12) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduced ? 0 : dur, ease: E, delay: reduced ? 0 : delay },
  });
  const draw = (delay: number, dur = 1.0) => ({
    initial: reduced ? { opacity: 1 } : { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduced ? 0 : dur, ease: E, delay: reduced ? 0 : delay },
  });

  return (
    <div ref={ref} className="relative w-full h-full">
      <motion.div className="w-full h-full" style={reduced ? undefined : { y: artY }}>
        <svg
          viewBox="0 0 520 360"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Illustration of the ecosystem journey continuing"
        >
          {/* construction marks */}
          <motion.g style={reduced ? undefined : { y: marksY }} {...reveal(0, 0.6, 0)}>
            {[40, 120, 200, 280, 360, 440].map((x) => (
              <line key={x} x1={x} y1="10" x2={x} y2="350" stroke={HAIR} strokeWidth="0.6" strokeDasharray="1 14" />
            ))}
            <text x="14" y="28" fill={MUTED} fontSize="11" opacity="0.5">+</text>
            <text x="498" y="28" fill={ORANGE} fontSize="11" opacity="0.8">+</text>
          </motion.g>

          {/* small sun */}
          <motion.g {...reveal(0.15, 0.8, 0)}>
            <circle cx="432" cy="96" r="60" fill={ORANGE} fillOpacity="0.1" />
            <circle cx="432" cy="96" r="42" fill={ORANGE} fillOpacity="0.88" />
            <circle cx="432" cy="96" r="52" stroke={ORANGE} strokeWidth="0.8" strokeOpacity="0.3" />
          </motion.g>

          {/* horizon */}
          <motion.g {...reveal(0.2, 0.6, 0)}>
            <line x1="16" y1="292" x2="504" y2="292" stroke={INK} strokeWidth="1" strokeOpacity="0.35" />
          </motion.g>

          {/* simplified AIC building */}
          <motion.g {...reveal(0.35, 0.7)}>
            <ellipse cx="160" cy="294" rx="64" ry="5" fill={INK} fillOpacity="0.06" />
            <line x1="100" y1="290" x2="220" y2="290" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
            <rect x="128" y="222" width="64" height="68" fill={PAPER} stroke={INK} strokeWidth="1.3" />
            <polygon points="128,222 160,206 192,222" fill={PAPER} stroke={INK} strokeWidth="1.2" />
            <text x="160" y="217" textAnchor="middle" fill={INK} fontSize="9" fontWeight="700" letterSpacing="0.2em" fontFamily={MONO}>AIC-JKLU</text>
            {[136, 152, 168].map((x) => (
              <rect key={x} x={x} y="230" width="12" height="10" fill={CREAM} stroke={HAIR} strokeWidth="0.8" />
            ))}
            <polygon points="150,290 150,264 160,258 170,264 170,290" fill={ORANGE} stroke={INK} strokeWidth="1" />
            {/* trees */}
            <g transform="translate(104 288)">
              <line x1="0" y1="0" x2="0" y2="-14" stroke={INK} strokeWidth="1.1" />
              <circle cx="0" cy="-20" r="9" fill={CREAM} stroke={INK} strokeWidth="1" />
              <circle cx="2" cy="-18" r="1.8" fill={ORANGE} />
            </g>
            <g transform="translate(216 288) scale(0.85)">
              <line x1="0" y1="0" x2="0" y2="-14" stroke={INK} strokeWidth="1.1" />
              <circle cx="0" cy="-20" r="9" fill={CREAM} stroke={INK} strokeWidth="1" />
            </g>
          </motion.g>

          {/* company blocks ahead */}
          <motion.g {...reveal(0.5, 0.7)}>
            <rect x="300" y="252" width="20" height="40" fill={PAPER} stroke={INK} strokeWidth="1" />
            <rect x="300" y="252" width="20" height="6" fill={ORANGE} fillOpacity="0.85" />
            <rect x="326" y="262" width="16" height="30" fill={CREAM} stroke={INK} strokeWidth="1" />
            <line x1="334" y1="268" x2="334" y2="276" stroke={ORANGE} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="330" y1="272" x2="338" y2="272" stroke={ORANGE} strokeWidth="1.4" strokeLinecap="round" />
            <text x="321" y="306" textAnchor="middle" fill={MUTED} fontSize="7" fontWeight="700" letterSpacing="0.16em" fontFamily={MONO}>WHAT&apos;S NEXT</text>
          </motion.g>

          {/* people walking the path */}
          <motion.g {...reveal(0.65, 0.6)}>
            {[
              { x: 232, y: 288 },
              { x: 250, y: 289 },
              { x: 384, y: 283 },
            ].map((p, i) => (
              <g key={i} transform={`translate(${p.x} ${p.y})`}>
                <circle cx="0" cy="-7" r="2" fill={INK} />
                <line x1="0" y1="-5" x2="0" y2="3" stroke={INK} strokeWidth="1.2" strokeLinecap="round" />
                <line x1="0" y1="1" x2="-2.6" y2="8" stroke={INK} strokeWidth="1" strokeLinecap="round" />
                <line x1="0" y1="1" x2="2.6" y2="8" stroke={INK} strokeWidth="1" strokeLinecap="round" />
              </g>
            ))}
          </motion.g>

          {/* the continuing path — draws itself */}
          <path d={PATH} stroke={PAPER} strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.85" />
          <motion.path d={PATH} stroke={INK} strokeWidth="1.4" strokeOpacity="0.6" strokeLinecap="round" fill="none" {...draw(0.45)} />
          <motion.path
            d={PATH} stroke={ORANGE} strokeWidth="1.1" strokeDasharray="1 6" strokeLinecap="round" fill="none"
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.85 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: reduced ? 0 : 1.3 }}
          />
          {/* exit chevron — beyond the frame */}
          <motion.g {...reveal(1.2, 0.4, 0)}>
            <path d="M496 248 l10 8 l-10 8" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <text x="462" y="232" fill={MUTED} fontSize="7.5" fontWeight="600" letterSpacing="0.2em" fontFamily={MONO}>ONWARDS</text>
          </motion.g>

          {/* quiet details */}
          <motion.g {...reveal(1.0, 0.5, 0)}>
            <text x="52" y="150" fill={ORANGE} fontSize="11" opacity="0.85">+</text>
            <circle cx="252" cy="150" r="1.8" fill={INK} opacity="0.45" />
            <path d="M330 84 q5 -5 10 0 q5 -5 10 0" stroke={INK} strokeWidth="0.9" strokeOpacity="0.45" strokeLinecap="round" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}
