'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

export default function CompaniesHeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // ── Mouse parallax ────────────────────────────────────────────
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sc = { damping: 28, stiffness: 90 };
  const smoothX = useSpring(mouseX, sc);
  const smoothY = useSpring(mouseY, sc);

  const rotateX  = useTransform(smoothY, [-0.5, 0.5], [2, -2]);
  const rotateY  = useTransform(smoothX, [-0.5, 0.5], [-2, 2]);
  const tx       = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const ty       = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const bgShiftX = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const bgShiftY = useTransform(smoothY, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width  - 0.5);
    mouseY.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const ease = [0.22, 1, 0.36, 1] as const;

  // ── Shared transition shorthands ──────────────────────────────
  const loop = (duration: number, delay = 0) => ({
    duration,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay,
  });

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] lg:max-w-[680px] aspect-[720/560] flex items-center justify-center select-none overflow-visible pointer-events-auto"
    >
      {/* Entrance wrapper */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease }}
        style={
          prefersReducedMotion ? {} : {
            rotateX, rotateY,
            x: tx, y: ty,
            transformStyle: 'preserve-3d',
          }
        }
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 720 560"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Sun radial glow */}
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#EB5725" stopOpacity="0.98" />
              <stop offset="55%"  stopColor="#EB5725" stopOpacity="0.82" />
              <stop offset="85%"  stopColor="#EB5725" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0"    />
            </radialGradient>

            {/* Outer sun halo */}
            <radialGradient id="sunHalo" cx="50%" cy="50%" r="50%">
              <stop offset="60%"  stopColor="#EB5725" stopOpacity="0"    />
              <stop offset="100%" stopColor="#EB5725" stopOpacity="0.12" />
            </radialGradient>

            {/* AIC atrium glass */}
            <linearGradient id="aicGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#EB5725" stopOpacity="0.85" />
              <stop offset="60%"  stopColor="#F15A24" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#EB5725" stopOpacity="0.9"  />
            </linearGradient>

            {/* Ground fade for hill bases */}
            <linearGradient id="groundFade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#E8E2D9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0"   />
            </linearGradient>
          </defs>

          {/* ══════════════════════════════════════════════════════
              1. BACKGROUND LAYER — sky, guides, editorial text
          ══════════════════════════════════════════════════════ */}
          <motion.g style={prefersReducedMotion ? {} : { x: bgShiftX, y: bgShiftY }}>

            {/* Coordinate crosshairs */}
            <text x="365" y="45" fill="#EB5725" fillOpacity="0.55" fontSize="11" fontWeight="700">+</text>
            <text x="140" y="240" fill="#121212" fillOpacity="0.22" fontSize="11" fontWeight="700">+</text>
            <text x="440" y="80"  fill="#121212" fillOpacity="0.28" fontSize="11" fontWeight="700">+</text>
            <text x="690" y="160" fill="#121212" fillOpacity="0.22" fontSize="11" fontWeight="700">+</text>

            {/* Fine sky dashed guides */}
            <path d="M 380 48 C 450 35, 520 60, 680 40"
              stroke="#E4E4E0" strokeWidth="0.8" strokeDasharray="3 4" />
            <path d="M 120 280 C 260 250, 480 300, 660 260"
              stroke="#E4E4E0" strokeWidth="0.8" strokeDasharray="4 6" />

            {/* Clouds — slow rightward drift */}
            <motion.g
              animate={prefersReducedMotion ? {} : { x: [0, 8, 0] }}
              transition={loop(18)}
            >
              <path d="M 170 190 Q 170 176 182 176 Q 192 164 210 168 Q 222 160 234 172 Q 248 172 248 190 Z"
                stroke="#121212" strokeWidth="0.9" strokeOpacity="0.28" fill="none" />
              <path d="M 285 110 Q 285 98 296 98 Q 304 86 320 90 Q 330 84 342 94 Q 354 94 354 110 Z"
                stroke="#121212" strokeWidth="0.85" strokeOpacity="0.32" fill="none" />
            </motion.g>

            {/* Second cloud layer — independent speed */}
            <motion.g
              animate={prefersReducedMotion ? {} : { x: [0, -5, 0] }}
              transition={loop(24, 3)}
            >
              <path d="M 480 160 Q 480 150 489 150 Q 496 141 510 144 Q 518 139 526 147 Q 536 147 536 160 Z"
                stroke="#121212" strokeWidth="0.75" strokeOpacity="0.2" fill="none" />
            </motion.g>

            {/* Birds — gentle float + forward drift */}
            <motion.g
              animate={prefersReducedMotion ? {} : { y: [0, -4, 0], x: [0, 5, 0] }}
              transition={loop(6.5)}
            >
              <path d="M 450 50 Q 454 45 458 50 Q 462 45 466 50" stroke="#121212" strokeWidth="1.1" strokeLinecap="round" fill="none" />
              <path d="M 436 78 Q 440 73 444 78 Q 448 73 452 78" stroke="#121212" strokeWidth="1.0" strokeLinecap="round" fill="none" />
              <path d="M 625 135 Q 629 130 633 135 Q 637 130 641 135" stroke="#121212" strokeWidth="0.9" strokeLinecap="round" fill="none" />
            </motion.g>

            {/* Second bird group — offset phase */}
            <motion.g
              animate={prefersReducedMotion ? {} : { y: [0, -3, 0], x: [0, -3, 0] }}
              transition={loop(8.5, 2)}
            >
              <path d="M 310 65 Q 314 60 318 65 Q 322 60 326 65" stroke="#121212" strokeWidth="0.9" strokeLinecap="round" fill="none" />
              <path d="M 350 48 Q 354 43 358 48 Q 362 43 366 48" stroke="#121212" strokeWidth="0.85" strokeLinecap="round" fill="none" />
            </motion.g>

            {/* Editorial top-right annotation */}
            <motion.g
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
              transform="translate(640, 25)"
            >
              <text x="0" y="0"  fill="#121212" fontSize="9" fontWeight="700" letterSpacing="0.16em">STARTUPS</text>
              <text x="0" y="14" fill="#52525B" fontSize="8" fontWeight="600" letterSpacing="0.14em">FOR A BRIGHTER</text>
              <text x="0" y="26" fill="#52525B" fontSize="8" fontWeight="600" letterSpacing="0.14em">TOMORROW</text>
            </motion.g>

            {/* Editorial mid-right tag — staggered letter reveal */}
            <motion.g
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.65 }}
              transform="translate(660, 250)"
            >
              {['IDEAS', 'PEOPLE', 'TECHNOLOGY'].map((word, i) => (
                <text key={word} x="0" y={i * 14} fill="#121212" fontSize="9" fontWeight="700" letterSpacing="0.14em">{word}</text>
              ))}
              <text x="0" y="42" fill="#EB5725" fontSize="9" fontWeight="700" letterSpacing="0.14em">IMPACT</text>
            </motion.g>

          </motion.g>

          {/* ══════════════════════════════════════════════════════
              2. SUN & TRANSMISSION MAST
          ══════════════════════════════════════════════════════ */}
          <g>
            {/* Outer halo — slow breathing pulse */}
            <motion.circle
              cx="575" cy="95" r="85"
              fill="url(#sunHalo)"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
              transition={loop(5)}
            />

            {/* Main sun — tighter breathe */}
            <motion.circle
              cx="575" cy="95" r="60"
              fill="url(#sunGlow)"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.03, 1], opacity: [0.92, 1, 0.92] }}
              transition={loop(3.8, 0.6)}
            />

            {/* Inner bright core */}
            <motion.circle
              cx="575" cy="95" r="28"
              fill="#EB5725"
              fillOpacity="0.25"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.06, 1] }}
              transition={loop(2.8, 1)}
            />

            {/* Mast */}
            <g transform="translate(572, 115)">
              <line x1="3" y1="0" x2="3" y2="40" stroke="#121212" strokeWidth="1.3" />
              <line x1="-8" y1="10" x2="14" y2="10" stroke="#121212" strokeWidth="1.2" />
              <line x1="-5" y1="18" x2="11" y2="18" stroke="#121212" strokeWidth="1.0" />
              <line x1="-8" y1="10" x2="3" y2="24" stroke="#121212" strokeWidth="0.8" />
              <line x1="14" y1="10" x2="3" y2="24" stroke="#121212" strokeWidth="0.8" />
            </g>

            {/* Summit ridge line */}
            <path d="M 525 155 L 620 155 C 655 155, 680 162, 720 158"
              stroke="#121212" strokeWidth="1.2" fill="none" />
          </g>

          {/* ══════════════════════════════════════════════════════
              3. CITY SKYLINE — staggered entrance
          ══════════════════════════════════════════════════════ */}
          <motion.g
            transform="translate(430, 200)"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
          >
            <line x1="-30" y1="150" x2="270" y2="150" stroke="#121212" strokeWidth="1.3" />

            {/* Low-rise left */}
            <polygon points="0,150 16,140 38,140 38,150" fill="#FAF7F2" stroke="#121212" strokeWidth="1.1" />
            <rect x="18" y="142" width="12" height="4" fill="#EB5725" fillOpacity="0.4" stroke="#121212" strokeWidth="0.8" />

            {/* Mid-rise */}
            <rect x="38" y="120" width="20" height="30" fill="#FFFFFF" stroke="#121212" strokeWidth="1.1" />
            <line x1="44" y1="124" x2="44" y2="146" stroke="#E4E4E0" strokeWidth="0.8" />
            <line x1="51" y1="124" x2="51" y2="146" stroke="#E4E4E0" strokeWidth="0.8" />

            {/* Tree 1 — subtle sway */}
            <motion.g
              animate={prefersReducedMotion ? {} : { rotate: [0, 1.5, 0, -1.5, 0] }}
              transition={loop(4.5)}
              style={{ originX: '68px', originY: '150px' }}
            >
              <circle cx="68" cy="140" r="8" fill="#FFFBF7" stroke="#121212" strokeWidth="1" />
              <line x1="68" y1="140" x2="68" y2="150" stroke="#121212" strokeWidth="1" />
            </motion.g>

            {/* Orange roof pavilion */}
            <rect x="78" y="125" width="16" height="25" fill="#FFF2ED" stroke="#121212" strokeWidth="1.1" />
            <polygon points="78,125 86,118 94,125" fill="#EB5725" stroke="#121212" strokeWidth="1" />
            <rect x="82" y="130" width="8" height="20" fill="#EB5725" fillOpacity="0.3" stroke="#EB5725" strokeWidth="0.8" />

            {/* Large deciduous tree with orange foliage — sway */}
            <motion.g
              animate={prefersReducedMotion ? {} : { rotate: [0, 2, 0, -1.5, 0] }}
              transition={loop(5.5, 1)}
              style={{ originX: '117px', originY: '150px' }}
            >
              <path d="M 104 135 Q 94 120 104 105 Q 118 96 130 105 Q 140 120 130 135 Z"
                fill="#FFFBF7" stroke="#121212" strokeWidth="1.1" />
              <circle cx="117" cy="115" r="7" fill="#EB5725" fillOpacity="0.35" />
              <line x1="117" y1="120" x2="117" y2="150" stroke="#121212" strokeWidth="1.2" />
            </motion.g>

            {/* High-rise */}
            <rect x="140" y="95" width="22" height="55" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
            <line x1="147" y1="100" x2="147" y2="145" stroke="#E4E4E0" strokeWidth="0.8" />
            <line x1="155" y1="100" x2="155" y2="145" stroke="#E4E4E0" strokeWidth="0.8" />
            <rect x="144" y="100" width="14" height="6" fill="#EB5725" fillOpacity="0.3" stroke="#EB5725" strokeWidth="0.6" />

            {/* Skyscraper with spire — window blink */}
            <rect x="180" y="55" width="24" height="95" fill="#FFFFFF" stroke="#121212" strokeWidth="1.3" />
            <polygon points="184,55 200,55 196,44 188,44" fill="#EB5725" stroke="#121212" strokeWidth="1.1" />
            <line x1="192" y1="44" x2="192" y2="30" stroke="#121212" strokeWidth="1.2" />
            {/* Blinking beacon light */}
            <motion.circle
              cx="192" cy="29" r="1.5"
              fill="#EB5725"
              animate={prefersReducedMotion ? {} : { opacity: [1, 0.1, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <line x1="186" y1="62" x2="186" y2="145" stroke="#E4E4E0" strokeWidth="0.8" />
            <line x1="192" y1="62" x2="192" y2="145" stroke="#E4E4E0" strokeWidth="0.8" />
            <line x1="198" y1="62" x2="198" y2="145" stroke="#E4E4E0" strokeWidth="0.8" />
            <line x1="180" y1="95" x2="204" y2="95" stroke="#121212" strokeWidth="0.8" />

            {/* Right wing + trees */}
            <rect x="206" y="80" width="16" height="70" fill="#F4EFE6" stroke="#52525B" strokeWidth="1" />
            <motion.g
              animate={prefersReducedMotion ? {} : { rotate: [0, 1.5, 0, -1.2, 0] }}
              transition={loop(6, 0.5)}
              style={{ originX: '230px', originY: '150px' }}
            >
              <circle cx="230" cy="140" r="7" fill="#FFFBF7" stroke="#121212" strokeWidth="1" />
              <line x1="230" y1="140" x2="230" y2="150" stroke="#121212" strokeWidth="1" />
            </motion.g>
            <path d="M 238 150 L 243 138 L 248 150 Z" fill="#FFF5EF" stroke="#121212" strokeWidth="1" />
            <motion.circle
              cx="243" cy="138" r="1.2"
              fill="#EB5725"
              animate={prefersReducedMotion ? {} : { opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            />
          </motion.g>

          {/* ══════════════════════════════════════════════════════
              4. ROAD & ELEVATION CONTOURS
          ══════════════════════════════════════════════════════ */}
          <g>
            <path d="M 370 340 C 350 310, 390 270, 460 260 C 530 250, 520 230, 550 220"
              stroke="#121212" strokeWidth="1.3" strokeDasharray="4 4" strokeOpacity="0.4" fill="none" />
            <path d="M 240 380 C 130 380, 70 385, 60 435 C 50 490, 150 480, 240 490"
              stroke="#121212" strokeWidth="1.5" fill="none" />
            {/* Road center line — animated dash offset for "moving" road feel */}
            <motion.path
              d="M 240 388 C 135 388, 78 392, 70 435 C 60 482, 155 472, 245 482"
              stroke="#EB5725" strokeWidth="0.9" strokeDasharray="4 6" fill="none"
              animate={prefersReducedMotion ? {} : { strokeDashoffset: [0, -40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            />
          </g>

          {/* ══════════════════════════════════════════════════════
              5. AIC-JKLU INCUBATION HUB
          ══════════════════════════════════════════════════════ */}
          <motion.g
            transform="translate(240, 340)"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.2 }}
          >
            {/* Ground lines */}
            <line x1="-30" y1="150" x2="200" y2="150" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="-40" y1="154" x2="210" y2="154" stroke="#E4E4E0" strokeWidth="1.0" />

            {/* Wings */}
            <rect x="0"   y="80" width="18" height="70" fill="#FAF7F2" stroke="#121212" strokeWidth="1.2" />
            <line x1="9"  y1="88" x2="9"   y2="142" stroke="#E4E4E0" strokeWidth="0.8" />
            <rect x="152" y="80" width="18" height="70" fill="#FAF7F2" stroke="#121212" strokeWidth="1.2" />
            <line x1="161" y1="88" x2="161" y2="142" stroke="#E4E4E0" strokeWidth="0.8" />

            {/* Main body */}
            <rect x="18" y="70" width="134" height="80" fill="#FFFFFF" stroke="#121212" strokeWidth="1.5" />
            <polygon points="18,70 85,52 152,70" fill="#FFFFFF" stroke="#121212" strokeWidth="1.4" />

            {/* Frieze inscription */}
            <text x="85" y="64" textAnchor="middle" fill="#121212" fontSize="11" fontWeight="700" letterSpacing="0.2em" className="font-robotoMono">
              AIC-JKLU
            </text>

            {/* Glass atrium */}
            <polygon points="40,150 40,108 85,92 130,108 130,150" fill="url(#aicGlass)" stroke="#EB5725" strokeWidth="1.4" />
            {/* Mullions */}
            <line x1="62"  y1="102" x2="62"  y2="150" stroke="#EB5725" strokeWidth="1.1" strokeOpacity="0.75" />
            <line x1="85"  y1="92"  x2="85"  y2="150" stroke="#EB5725" strokeWidth="1.3" />
            <line x1="108" y1="102" x2="108" y2="150" stroke="#EB5725" strokeWidth="1.1" strokeOpacity="0.75" />
            <line x1="40"  y1="116" x2="130" y2="116" stroke="#EB5725" strokeWidth="1.0" strokeOpacity="0.8" />

            {/* Atrium glow shimmer */}
            <motion.polygon
              points="40,150 40,108 85,92 130,108 130,150"
              fill="#FFFFFF"
              fillOpacity="0"
              animate={prefersReducedMotion ? {} : { fillOpacity: [0, 0.12, 0] }}
              transition={loop(3.2, 1.5)}
            />

            {/* People silhouettes — subtle idle bob */}
            {[
              { cx: 26,  bodyX: 26,  leg1X: 24, leg2X: 28 },
              { cx: 48,  bodyX: 48,  leg1X: 46, leg2X: 50 },
              { cx: 78,  bodyX: 78,  leg1X: 76, leg2X: 80 },
              { cx: 90,  bodyX: 90,  leg1X: 88, leg2X: 92 },
              { cx: 145, bodyX: 145, leg1X: 143, leg2X: 147 },
            ].map((p, i) => (
              <motion.g
                key={i}
                animate={prefersReducedMotion ? {} : { y: [0, -1.5, 0] }}
                transition={loop(2 + i * 0.3, i * 0.4)}
              >
                <circle cx={p.cx} cy={133} r={i > 2 ? 2.2 : 2.4} fill="#121212" />
                <path
                  d={`M ${p.bodyX} 135 L ${p.bodyX} 144 L ${p.leg1X} 150 M ${p.bodyX} 144 L ${p.leg2X} 150`}
                  stroke="#121212" strokeWidth="1.5" strokeLinecap="round"
                />
              </motion.g>
            ))}

            {/* Tall tree right of hub — sway */}
            <motion.g
              transform="translate(165, 40)"
              animate={prefersReducedMotion ? {} : { rotate: [0, 2.5, 0, -2, 0] }}
              transition={loop(5, 0.8)}
              style={{ originX: '38px', originY: '110px' }}
            >
              <path d="M 24 75 Q 5 55 15 32 Q 34 12 52 28 Q 68 48 58 75 Z"
                fill="#FFFBF7" stroke="#121212" strokeWidth="1.2" />
              <path d="M 38 26 Q 48 18 56 26 Q 62 36 52 42 Z"
                fill="#EB5725" fillOpacity="0.8" stroke="#121212" strokeWidth="0.8" />
              <line x1="38" y1="60" x2="38" y2="110" stroke="#121212" strokeWidth="1.4" />
              <line x1="38" y1="80" x2="25" y2="65" stroke="#121212" strokeWidth="1.1" />
              <line x1="38" y1="75" x2="48" y2="62" stroke="#121212" strokeWidth="1.1" />

              {/* Orange leaves fall */}
              <motion.circle
                cx="64" cy="100" r="1.8" fill="#121212"
                animate={prefersReducedMotion ? {} : { opacity: [1, 0.3, 1] }}
                transition={loop(2.6, 0.4)}
              />
              <line x1="64" y1="102" x2="64" y2="110" stroke="#121212" strokeWidth="1.3" />
              <motion.circle
                cx="74" cy="100" r="1.8" fill="#EB5725"
                animate={prefersReducedMotion ? {} : { cy: [100, 104, 100], opacity: [1, 0.5, 1] }}
                transition={loop(3.1, 1)}
              />
              <line x1="74" y1="102" x2="74" y2="110" stroke="#EB5725" strokeWidth="1.2" />
            </motion.g>
          </motion.g>

          {/* ══════════════════════════════════════════════════════
              6. WIND TURBINE, POWER MAST & CYCLIST
          ══════════════════════════════════════════════════════ */}
          <g>
            {/* Wind turbine */}
            <g transform="translate(130, 370)">
              <line x1="0" y1="0" x2="0" y2="65" stroke="#121212" strokeWidth="1.3" />
              <circle cx="0" cy="0" r="2.8" fill="#121212" />
              {/* Continuously rotating blades */}
              <motion.g
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '0px', originY: '0px' }}
              >
                <line x1="0" y1="0" x2="0"   y2="-26" stroke="#121212" strokeWidth="1.3" strokeLinecap="round" />
                <line x1="0" y1="0" x2="22"  y2="13"  stroke="#121212" strokeWidth="1.3" strokeLinecap="round" />
                <line x1="0" y1="0" x2="-22" y2="13"  stroke="#121212" strokeWidth="1.3" strokeLinecap="round" />
              </motion.g>
            </g>

            {/* Power line mast */}
            <g transform="translate(190, 415)">
              <line x1="0" y1="0" x2="0"  y2="35" stroke="#121212" strokeWidth="1.2" />
              <line x1="-8" y1="8" x2="8" y2="8"  stroke="#121212" strokeWidth="1.0" />
              <line x1="-12" y1="4" x2="12" y2="4" stroke="#121212" strokeWidth="1.0" />
            </g>

            {/* Tree near mast — gentle sway */}
            <motion.circle
              cx="210" cy="440" r="14"
              fill="#FFFBF7" stroke="#121212" strokeWidth="1" strokeOpacity="0.5"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.025, 1] }}
              transition={loop(4.5, 2)}
              style={{ originX: '210px', originY: '454px' }}
            />

            {/* Cyclist — bob + very slow forward drift then snap back */}
            <motion.g
              animate={prefersReducedMotion ? {} : { y: [0, -2.5, 0], x: [0, 2, 0] }}
              transition={loop(2.2)}
              transform="translate(80, 460)"
            >
              {/* Wheels */}
              <circle cx="7"  cy="18" r="6.5" stroke="#121212" strokeWidth="1.2" fill="#FFFFFF" />
              <circle cx="25" cy="18" r="6.5" stroke="#121212" strokeWidth="1.2" fill="#FFFFFF" />
              {/* Spinning wheel spokes */}
              <motion.g
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '7px', originY: '18px' }}
              >
                <line x1="7" y1="12" x2="7" y2="24" stroke="#E4E4E0" strokeWidth="0.7" />
                <line x1="1" y1="18" x2="13" y2="18" stroke="#E4E4E0" strokeWidth="0.7" />
              </motion.g>
              <motion.g
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '25px', originY: '18px' }}
              >
                <line x1="25" y1="12" x2="25" y2="24" stroke="#E4E4E0" strokeWidth="0.7" />
                <line x1="19" y1="18" x2="31" y2="18" stroke="#E4E4E0" strokeWidth="0.7" />
              </motion.g>
              {/* Frame & handlebars */}
              <polygon points="7,18 16,18 20,11 11,11" fill="none" stroke="#121212" strokeWidth="1.2" />
              <line x1="16" y1="18" x2="25" y2="18" stroke="#121212" strokeWidth="1.2" />
              <line x1="20" y1="11" x2="23" y2="7"  stroke="#121212" strokeWidth="1.2" />
              <line x1="21" y1="7"  x2="25" y2="7"  stroke="#121212" strokeWidth="1.4" strokeLinecap="round" />
              {/* Rider */}
              <line x1="13" y1="12" x2="16" y2="17" stroke="#121212" strokeWidth="1.3" />
              <line x1="13" y1="12" x2="18" y2="4"  stroke="#EB5725" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="17" y1="6"  x2="23" y2="7"  stroke="#121212" strokeWidth="1.2" />
              <circle cx="19" cy="1" r="2.6" fill="#121212" />
            </motion.g>
          </g>

        </svg>
      </motion.div>
    </div>
  );
}
