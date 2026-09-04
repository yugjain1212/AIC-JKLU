'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Editorial Startup Journey Illustration - AIC-JKLU
 * Recreating the hand-drawn architectural landscape artwork:
 * Serpentine winding mountain road from campus idea to bigger societal impact.
 */
export default function IncubationEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Mouse Parallax 3D Spring Physics (delicate +/-8px, +/-2deg)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 90 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [1.8, -1.8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-1.8, 1.8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  // Subtle depth layering
  const bgShiftX = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);
  const bgShiftY = useTransform(smoothY, [-0.5, 0.5], [-3, 3]);
  const fgShiftX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const fgShiftY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const editorialEase = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[660px] lg:max-w-[720px] aspect-square flex items-center justify-center select-none overflow-hidden sm:overflow-visible pointer-events-auto"
    >
      {/* ── Outer 3D Parallax Canvas ── */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: editorialEase }}
        style={
          prefersReducedMotion
            ? {}
            : {
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
                transformStyle: 'preserve-3d',
              }
        }
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Soft Radial Glow for the Giant Orange Sun */}
            <radialGradient id="summitSunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EB5725" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#EB5725" stopOpacity="0.8" />
              <stop offset="85%" stopColor="#EB5725" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EB5725" stopOpacity="0" />
            </radialGradient>

            {/* Linear Gradient for Glowing AIC Glass Entrance */}
            <linearGradient id="aicGlassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EB5725" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#F15A24" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#EB5725" stopOpacity="0.9" />
            </linearGradient>

            {/* Soft Bulb Filament Glow */}
            <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EB5725" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#EB5725" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ============================================================
              1. BACKGROUND SKY: CLOUDS, BIRDS & CROSSHAIRS
          ============================================================= */}
          <motion.g style={prefersReducedMotion ? {} : { x: bgShiftX, y: bgShiftY }}>
            {/* Fine Technical Coordinate Crosshairs (+) */}
            <g className="font-robotoMono select-none text-[11px] font-bold">
              <text x="168" y="270" fill="#121212" fillOpacity="0.3">+</text>
              <text x="220" y="325" fill="#121212" fillOpacity="0.25">+</text>
              <text x="735" y="270" fill="#121212" fillOpacity="0.3">+</text>
              <text x="445" y="605" fill="#EB5725" fillOpacity="0.6">+</text>
            </g>

            {/* Hand-Drawn Contour Clouds (Drifting Gently) */}
            <motion.g
              animate={prefersReducedMotion ? {} : { x: [0, 8, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Cloud 1 (Center-Left) */}
              <path
                d="M 260 290 Q 260 275 275 275 Q 285 260 305 265 Q 320 255 335 270 Q 350 270 350 290 Z"
                stroke="#121212"
                strokeWidth="1"
                strokeOpacity="0.4"
                fill="none"
              />
              {/* Cloud 2 (Upper-Left) */}
              <path
                d="M 310 180 Q 310 168 322 168 Q 330 155 348 160 Q 360 152 372 165 Q 385 165 385 180 Z"
                stroke="#121212"
                strokeWidth="0.9"
                strokeOpacity="0.35"
                fill="none"
              />
            </motion.g>

            {/* Floating Minimal Birds */}
            <motion.g
              animate={prefersReducedMotion ? {} : { y: [0, -4, 0], x: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Bird high above */}
              <path d="M 425 110 Q 430 104 435 110 Q 440 104 445 110" stroke="#121212" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              {/* Bird mid sky */}
              <path d="M 390 195 Q 394 190 398 195 Q 402 190 406 195" stroke="#121212" strokeWidth="1" strokeLinecap="round" fill="none" />
              {/* Bird right sky */}
              <path d="M 685 255 Q 690 250 695 255 Q 700 250 705 255" stroke="#121212" strokeWidth="1" strokeLinecap="round" fill="none" />
            </motion.g>
          </motion.g>

          {/* ============================================================
              2. THE SUMMIT & GIANT ORANGE SUN (TOP RIGHT)
          ============================================================= */}
          <g>
            {/* The Majestic Orange Sun with Breathing Pulse */}
            <motion.circle
              cx="580"
              cy="125"
              r="70"
              fill="url(#summitSunGlow)"
              animate={prefersReducedMotion ? {} : { scale: [1, 1.025, 1], opacity: [0.92, 1, 0.92] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* High-Voltage Utility Tower on Summit Ridge */}
            <g transform="translate(575, 150)">
              {/* Main Pole */}
              <line x1="5" y1="0" x2="5" y2="45" stroke="#121212" strokeWidth="1.3" />
              {/* Crossbar 1 */}
              <line x1="-10" y1="12" x2="20" y2="12" stroke="#121212" strokeWidth="1.2" />
              {/* Crossbar 2 */}
              <line x1="-6" y1="20" x2="16" y2="20" stroke="#121212" strokeWidth="1.1" />
              {/* Diagonal bracing */}
              <line x1="-10" y1="12" x2="5" y2="28" stroke="#121212" strokeWidth="0.9" />
              <line x1="20" y1="12" x2="5" y2="28" stroke="#121212" strokeWidth="0.9" />
              {/* Insulators */}
              <line x1="-10" y1="12" x2="-10" y2="16" stroke="#121212" strokeWidth="1" />
              <line x1="20" y1="12" x2="20" y2="16" stroke="#121212" strokeWidth="1" />
            </g>

            {/* Summit Ridge Contour */}
            <path
              d="M 530 195 L 630 195 C 680 195, 710 198, 770 190"
              stroke="#121212"
              strokeWidth="1.3"
              fill="none"
            />

            {/* ── BIGGER IMPACT PIN & CALLOUT ── */}
            <motion.g
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: editorialEase }}
              className="font-robotoMono select-none"
            >
              <text x="680" y="55" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.16em">
                BIGGER
              </text>
              <text x="680" y="73" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.16em">
                IMPACT
              </text>
              {/* Vertical Pin Line */}
              <line x1="680" y1="92" x2="680" y2="195" stroke="#121212" strokeWidth="1.2" />
              <circle cx="680" cy="92" r="3" fill="#121212" />
              <circle cx="680" cy="195" r="3.5" fill="#121212" />
            </motion.g>
          </g>

          {/* ============================================================
              3. THE INNOVATION CITY SKYLINE & "05 SCALE"
          ============================================================= */}
          <g>
            {/* Topmost Road Switchback from Summit to City */}
            <path
              d="M 530 195 C 490 230, 520 280, 570 300 L 730 300"
              stroke="#121212"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              strokeOpacity="0.4"
              fill="none"
            />

            {/* Upper Ridge Contour (City Base) */}
            <path
              d="M 435 410 C 500 370, 570 395, 755 365"
              stroke="#121212"
              strokeWidth="1.1"
              strokeOpacity="0.45"
              fill="none"
            />

            {/* City Ground Horizon */}
            <line x1="430" y1="335" x2="745" y2="335" stroke="#121212" strokeWidth="1.3" />

            {/* ── DETAILED MODERNIST CITY ELEVATION (x: 440 to 710, y: 240 to 335) ── */}
            <g transform="translate(440, 240)">
              {/* Low-Rise Tech Incubator / Factory */}
              <polygon points="0,95 20,85 45,85 45,95" fill="#FAF7F2" stroke="#121212" strokeWidth="1.1" />
              <line x1="20" y1="85" x2="20" y2="95" stroke="#121212" strokeWidth="0.8" />
              <rect x="25" y="88" width="14" height="4" fill="#EB5725" fillOpacity="0.4" stroke="#121212" strokeWidth="0.8" />

              {/* Mid-Rise Office Block 1 */}
              <rect x="45" y="65" width="22" height="30" fill="#FFFFFF" stroke="#121212" strokeWidth="1.1" />
              <line x1="52" y1="70" x2="52" y2="92" stroke="#E4E4E0" strokeWidth="0.8" />
              <line x1="59" y1="70" x2="59" y2="92" stroke="#E4E4E0" strokeWidth="0.8" />

              {/* Fluffy City Tree 1 */}
              <circle cx="76" cy="85" r="9" fill="#FFFBF7" stroke="#121212" strokeWidth="1" />
              <line x1="76" y1="85" x2="76" y2="95" stroke="#121212" strokeWidth="1" />

              {/* Orange Modernist Pavilion */}
              <rect x="88" y="70" width="16" height="25" fill="#FFF0EA" stroke="#121212" strokeWidth="1.1" />
              <polygon points="88,70 96,62 104,70" fill="#EB5725" stroke="#121212" strokeWidth="1" />
              <rect x="92" y="76" width="8" height="19" fill="#EB5725" fillOpacity="0.3" stroke="#EB5725" strokeWidth="0.8" />

              {/* City Tree with Orange Foliage */}
              <circle cx="110" cy="80" r="10" fill="#FFF5EF" stroke="#121212" strokeWidth="1" />
              <circle cx="110" cy="80" r="6" fill="#EB5725" fillOpacity="0.35" />
              <line x1="110" y1="80" x2="110" y2="95" stroke="#121212" strokeWidth="1.1" />

              {/* Central Large Deciduous Tree */}
              <path
                d="M 125 78 Q 115 65 125 50 Q 140 40 155 50 Q 165 65 155 78 Z"
                fill="#FFFBF7"
                stroke="#121212"
                strokeWidth="1.1"
              />
              <line x1="140" y1="65" x2="140" y2="95" stroke="#121212" strokeWidth="1.2" />
              <line x1="140" y1="75" x2="132" y2="65" stroke="#121212" strokeWidth="0.9" />
              <line x1="140" y1="72" x2="148" y2="62" stroke="#121212" strokeWidth="0.9" />

              {/* High-Rise Office Tower 2 */}
              <rect x="160" y="55" width="24" height="40" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
              <line x1="168" y1="60" x2="168" y2="92" stroke="#E4E4E0" strokeWidth="0.8" />
              <line x1="176" y1="60" x2="176" y2="92" stroke="#E4E4E0" strokeWidth="0.8" />
              <rect x="164" y="60" width="16" height="6" fill="#EB5725" fillOpacity="0.25" stroke="#EB5725" strokeWidth="0.6" />

              {/* Commercial Complex */}
              <rect x="188" y="70" width="18" height="25" fill="#FAF7F2" stroke="#121212" strokeWidth="1.1" />
              <circle cx="197" cy="80" r="3" fill="none" stroke="#121212" strokeWidth="0.8" />

              {/* Iconic Centerpiece Skyscraper with Spire & Louvers */}
              <rect x="210" y="22" width="24" height="73" fill="#FFFFFF" stroke="#121212" strokeWidth="1.3" />
              {/* Stepped Crown & Spire */}
              <polygon points="214,22 230,22 226,10 218,10" fill="#EB5725" stroke="#121212" strokeWidth="1.1" />
              <line x1="222" y1="10" x2="222" y2="-4" stroke="#121212" strokeWidth="1.2" />
              <circle cx="222" cy="-5" r="1.5" fill="#EB5725" />
              {/* Modernist Vertical Mullion Grid */}
              <line x1="216" y1="28" x2="216" y2="90" stroke="#E4E4E0" strokeWidth="0.9" />
              <line x1="222" y1="28" x2="222" y2="90" stroke="#E4E4E0" strokeWidth="0.9" />
              <line x1="228" y1="28" x2="228" y2="90" stroke="#E4E4E0" strokeWidth="0.9" />
              <line x1="210" y1="55" x2="234" y2="55" stroke="#121212" strokeWidth="0.8" />

              {/* Background Tower */}
              <rect x="238" y="45" width="16" height="50" fill="#F4EFE6" stroke="#52525B" strokeWidth="1" />
              <polygon points="238,45 246,38 254,45" fill="#52525B" stroke="#52525B" strokeWidth="0.8" />

              {/* Right Edge Trees */}
              <circle cx="260" cy="85" r="8" fill="#FFFBF7" stroke="#121212" strokeWidth="1" />
              <line x1="260" y1="85" x2="260" y2="95" stroke="#121212" strokeWidth="1" />
              <path d="M 270 95 L 275 80 L 280 95 Z" fill="#FFF5EF" stroke="#121212" strokeWidth="1" />
              <circle cx="275" cy="80" r="1.5" fill="#EB5725" />
            </g>

            {/* ── 05 / 04 SCALE CALLOUT ── */}
            <motion.g
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.25, ease: editorialEase }}
              className="font-robotoMono select-none"
            >
              <text x="455" y="215" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.1em">
                04
              </text>
              <text x="455" y="235" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.14em">
                SCALE
              </text>
              {/* Pin Line to City Edge */}
              <line x1="515" y1="245" x2="515" y2="280" stroke="#121212" strokeWidth="1.2" />
              <circle cx="515" cy="245" r="3" fill="#121212" />
              <circle cx="515" cy="280" r="3" fill="#121212" />
            </motion.g>
          </g>

          {/* ============================================================
              4. THE MIDDLE S-CURVE & "03 GROW"
          ============================================================= */}
          <g>
            {/* Serpentine Road Sweep from behind AIC Building to City Plateau */}
            <motion.path
              d="M 330 420 C 310 395, 330 360, 390 355 C 450 350, 430 338, 470 335"
              stroke="#121212"
              strokeWidth="1.4"
              fill="none"
              initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.4, ease: editorialEase }}
            />
            <path
              d="M 345 425 C 330 405, 345 375, 400 370 C 450 365, 440 348, 480 345"
              stroke="#121212"
              strokeWidth="1"
              strokeOpacity="0.4"
              fill="none"
            />
            {/* Road center dashes */}
            <path
              d="M 338 422 C 320 400, 338 368, 395 362 C 445 358, 435 342, 475 340"
              stroke="#EB5725"
              strokeWidth="0.8"
              strokeDasharray="3 5"
              fill="none"
            />

            {/* ── 03 GROW CALLOUT ── */}
            <motion.g
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.95, ease: editorialEase }}
              className="font-robotoMono select-none"
            >
              {/* Curved Indicator Swoosh */}
              <path
                d="M 380 280 C 380 255, 405 248, 420 262"
                stroke="#121212"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
              <text x="365" y="315" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.1em">
                03
              </text>
              <text x="355" y="335" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.14em">
                GROW
              </text>
              {/* Vertical Pin Line to S-Curve */}
              <line x1="380" y1="345" x2="380" y2="395" stroke="#121212" strokeWidth="1.2" />
              <circle cx="380" cy="395" r="3.5" fill="#121212" />
            </motion.g>
          </g>

          {/* ============================================================
              5. THE CENTERPIECE: AIC-JKLU INCUBATOR BUILDING
          ============================================================= */}
          <g>
            {/* Centerpiece Ground Ledge & Shadows */}
            <line x1="250" y1="520" x2="445" y2="520" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="240" y1="525" x2="455" y2="525" stroke="#E4E4E0" strokeWidth="1" />

            {/* ── AIC-JKLU BUILDING STRUCTURE (x: 275 to 425, y: 430 to 520) ── */}
            <g>
              {/* West Pavilion Wing */}
              <rect x="258" y="450" width="18" height="70" fill="#FAF7F2" stroke="#121212" strokeWidth="1.2" />
              <line x1="267" y1="458" x2="267" y2="512" stroke="#E4E4E0" strokeWidth="0.8" />

              {/* East Pavilion Wing */}
              <rect x="425" y="450" width="18" height="70" fill="#FAF7F2" stroke="#121212" strokeWidth="1.2" />
              <line x1="434" y1="458" x2="434" y2="512" stroke="#E4E4E0" strokeWidth="0.8" />

              {/* Main Building Body */}
              <rect x="275" y="440" width="150" height="80" fill="#FFFFFF" stroke="#121212" strokeWidth="1.5" />

              {/* Angled Roof Pediment / Cantilever */}
              <polygon
                points="275,440 350,422 425,440"
                fill="#FFFFFF"
                stroke="#121212"
                strokeWidth="1.4"
              />

              {/* AIC-JKLU Monospace Inscription */}
              <text
                x="350"
                y="450"
                textAnchor="middle"
                fill="#121212"
                fontSize="11"
                fontWeight="700"
                letterSpacing="0.22em"
                className="font-robotoMono"
              >
                AIC-JKLU
              </text>

              {/* ── BOLD TRANSLUCENT ORANGE GLASS ENTRANCE ATRIUM ── */}
              <polygon
                points="300,520 300,478 350,462 400,478 400,520"
                fill="url(#aicGlassGrad)"
                stroke="#EB5725"
                strokeWidth="1.4"
              />
              {/* Glass Mullions (Floor-to-Ceiling Divisions) */}
              <line x1="325" y1="472" x2="325" y2="520" stroke="#EB5725" strokeWidth="1.1" strokeOpacity="0.7" />
              <line x1="350" y1="462" x2="350" y2="520" stroke="#EB5725" strokeWidth="1.3" />
              <line x1="375" y1="472" x2="375" y2="520" stroke="#EB5725" strokeWidth="1.1" strokeOpacity="0.7" />
              {/* Transom horizontal bar */}
              <line x1="300" y1="486" x2="400" y2="486" stroke="#EB5725" strokeWidth="1" strokeOpacity="0.8" />

              {/* ── SILHOUETTES OF PEOPLE AT ATRIUM (Black figures in front of glass) ── */}
              {/* Figure 1 (Left Entrance) */}
              <circle cx="282" cy="503" r="2.2" fill="#121212" />
              <path d="M 282 505 L 282 514 L 280 520 M 282 514 L 284 520" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />

              {/* Figure 2 (Entering Glass Portal) */}
              <circle cx="308" cy="502" r="2.4" fill="#121212" />
              <path d="M 308 505 L 308 514 L 306 520 M 308 514 L 310 520" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />

              {/* Figure 3 & 4 (Collaborating Founders in Center) */}
              <circle cx="338" cy="502" r="2.5" fill="#121212" />
              <path d="M 338 505 L 338 514 L 336 520 M 338 514 L 340 520" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="350" cy="501" r="2.5" fill="#121212" />
              <path d="M 350 504 L 350 514 L 348 520 M 350 514 L 352 520" stroke="#121212" strokeWidth="1.6" strokeLinecap="round" />

              {/* Figure 5 (Right side walking) */}
              <circle cx="418" cy="503" r="2.2" fill="#121212" />
              <path d="M 418 505 L 418 514 L 416 520 M 418 514 L 420 520" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* ── TALL EDITORIAL TREES TO THE RIGHT OF AIC (x: 440 to 485, y: 410 to 520) ── */}
            <g transform="translate(440, 410)">
              {/* Detailed Foliage with Orange Autumn Leaf Highlights */}
              <path
                d="M 25 80 Q 5 60 15 35 Q 35 15 55 30 Q 70 50 60 80 Z"
                fill="#FFFBF7"
                stroke="#121212"
                strokeWidth="1.2"
              />
              {/* Orange Autumn Highlights in Foliage */}
              <path d="M 40 28 Q 50 20 60 28 Q 65 38 55 45 Z" fill="#EB5725" fillOpacity="0.8" stroke="#121212" strokeWidth="0.8" />
              <circle cx="28" cy="45" r="4" fill="#EB5725" fillOpacity="0.5" />

              {/* Main Trunk & Branch Network */}
              <line x1="42" y1="65" x2="42" y2="110" stroke="#121212" strokeWidth="1.4" />
              <line x1="42" y1="85" x2="28" y2="70" stroke="#121212" strokeWidth="1.1" />
              <line x1="42" y1="80" x2="52" y2="65" stroke="#121212" strokeWidth="1.1" />
              <line x1="42" y1="92" x2="35" y2="82" stroke="#121212" strokeWidth="1" />

              {/* People Walking on Path Beside Trees */}
              <circle cx="68" cy="100" r="2" fill="#121212" />
              <line x1="68" y1="102" x2="68" y2="110" stroke="#121212" strokeWidth="1.3" />
              <circle cx="78" cy="100" r="1.8" fill="#EB5725" />
              <line x1="78" y1="102" x2="78" y2="110" stroke="#EB5725" strokeWidth="1.2" />
            </g>
          </g>

          {/* ============================================================
              6. THE LEFT SWITCHBACK, WIND TURBINE & CYCLIST
          ============================================================= */}
          <g>
            {/* The Hairpin Road Loop on the Left */}
            <motion.path
              d="M 275 520 C 120 520, 45 510, 45 560 C 45 615, 140 615, 230 635"
              stroke="#121212"
              strokeWidth="1.5"
              fill="none"
              initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.2, ease: editorialEase }}
            />
            <path
              d="M 275 532 C 130 532, 65 522, 65 560 C 65 600, 150 600, 240 622"
              stroke="#121212"
              strokeWidth="1"
              strokeOpacity="0.4"
              fill="none"
            />
            {/* Dashed Road Center Line */}
            <path
              d="M 275 526 C 125 526, 55 516, 55 560 C 55 607, 145 607, 235 628"
              stroke="#EB5725"
              strokeWidth="0.85"
              strokeDasharray="4 6"
              fill="none"
            />

            {/* Hill Slope to the Left */}
            <path
              d="M 40 560 C 90 530, 160 550, 260 520"
              stroke="#E4E4E0"
              strokeWidth="0.9"
              strokeDasharray="3 4"
              fill="none"
            />

            {/* ── WIND TURBINE (x: 145, y: 440) WITH ROTATING BLADES ── */}
            <g transform="translate(145, 430)">
              {/* Turbine Tower Pole */}
              <line x1="0" y1="0" x2="0" y2="70" stroke="#121212" strokeWidth="1.3" />
              <line x1="-3" y1="70" x2="3" y2="70" stroke="#121212" strokeWidth="1.4" />
              {/* Nacelle Hub */}
              <circle cx="0" cy="0" r="3" fill="#121212" />

              {/* 3 Rotating Blades */}
              <motion.g
                animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                {/* Blade 1 */}
                <line x1="0" y1="0" x2="0" y2="-28" stroke="#121212" strokeWidth="1.3" strokeLinecap="round" />
                {/* Blade 2 */}
                <line x1="0" y1="0" x2="24" y2="14" stroke="#121212" strokeWidth="1.3" strokeLinecap="round" />
                {/* Blade 3 */}
                <line x1="0" y1="0" x2="-24" y2="14" stroke="#121212" strokeWidth="1.3" strokeLinecap="round" />
              </motion.g>
            </g>

            {/* Power Line Pole & Distant Trees */}
            <g transform="translate(210, 480)">
              <line x1="0" y1="0" x2="0" y2="35" stroke="#121212" strokeWidth="1.2" />
              <line x1="-8" y1="10" x2="8" y2="10" stroke="#121212" strokeWidth="1" />
              <line x1="-12" y1="5" x2="12" y2="5" stroke="#121212" strokeWidth="1" />
            </g>
            {/* Distant Tree Cluster */}
            <circle cx="230" cy="505" r="16" fill="#FFFBF7" stroke="#121212" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="205" cy="510" r="12" fill="#FFFBF7" stroke="#121212" strokeWidth="1" strokeOpacity="0.5" />

            {/* ── CYCLIST RIDING UPHILL ON SWITCHBACK (x: 88, y: 535) ── */}
            <motion.g
              animate={prefersReducedMotion ? {} : { y: [0, -2, 0], x: [0, 1.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              transform="translate(85, 528)"
            >
              {/* Bicycle Wheels */}
              <circle cx="8" cy="20" r="7" stroke="#121212" strokeWidth="1.2" fill="#FFFFFF" />
              <line x1="8" y1="13" x2="8" y2="27" stroke="#52525B" strokeWidth="0.7" />
              <circle cx="28" cy="20" r="7" stroke="#121212" strokeWidth="1.2" fill="#FFFFFF" />
              <line x1="28" y1="13" x2="28" y2="27" stroke="#52525B" strokeWidth="0.7" />

              {/* Bike Frame */}
              <polygon points="8,20 18,20 23,12 13,12" fill="none" stroke="#121212" strokeWidth="1.2" />
              <line x1="18" y1="20" x2="28" y2="20" stroke="#121212" strokeWidth="1.2" />
              <line x1="23" y1="12" x2="26" y2="8" stroke="#121212" strokeWidth="1.2" />
              {/* Handlebars */}
              <line x1="24" y1="8" x2="28" y2="8" stroke="#121212" strokeWidth="1.4" strokeLinecap="round" />

              {/* Cyclist with Vibrant Orange Shirt */}
              {/* Legs */}
              <line x1="15" y1="13" x2="18" y2="18" stroke="#121212" strokeWidth="1.3" />
              <line x1="18" y1="18" x2="18" y2="23" stroke="#121212" strokeWidth="1.3" />
              {/* Torso & Orange Shirt */}
              <line x1="15" y1="13" x2="20" y2="5" stroke="#EB5725" strokeWidth="2.5" strokeLinecap="round" />
              {/* Arms */}
              <line x1="19" y1="7" x2="26" y2="8" stroke="#121212" strokeWidth="1.2" />
              {/* Head & Helmet */}
              <circle cx="21" cy="2" r="2.8" fill="#121212" />
            </motion.g>
          </g>

          {/* ============================================================
              7. LOWER ROAD, "02 INCUBATE" & "01 IDEA"
          ============================================================= */}
          <g>
            {/* Lower Winding Road to Origin */}
            <motion.path
              d="M 230 635 C 320 655, 360 700, 310 740 C 260 770, 160 760, 68 765"
              stroke="#121212"
              strokeWidth="1.5"
              fill="none"
              initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.1, ease: editorialEase }}
            />
            <path
              d="M 240 622 C 330 642, 375 690, 325 730 C 275 758, 170 748, 75 752"
              stroke="#121212"
              strokeWidth="1"
              strokeOpacity="0.4"
              fill="none"
            />
            {/* Dashed Road Line */}
            <path
              d="M 235 628 C 325 648, 368 695, 318 735 C 268 764, 165 754, 72 758"
              stroke="#EB5725"
              strokeWidth="0.85"
              strokeDasharray="4 6"
              fill="none"
            />

            {/* ── 02 INCUBATE CALLOUT (x: 185, y: 620) ── */}
            <motion.g
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65, ease: editorialEase }}
              className="font-robotoMono select-none"
            >
              <text x="175" y="620" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.1em">
                02
              </text>
              <text x="175" y="638" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.14em">
                INCUBATE
              </text>
              {/* Pin Line to Road */}
              <line x1="190" y1="648" x2="190" y2="722" stroke="#121212" strokeWidth="1.2" />
              <circle cx="190" cy="648" r="3" fill="#121212" />
              <circle cx="190" cy="722" r="3.5" fill="#121212" />

              {/* Sprouting Seedling Plant beside 02 Incubate Pin */}
              <g transform="translate(225, 700)">
                <path d="M 0 15 Q 0 8 5 0 Q 10 8 0 15 Z" fill="#EB5725" stroke="#121212" strokeWidth="1" />
                <path d="M 0 15 Q -6 6 0 2 Q 4 8 0 15 Z" fill="#52525B" stroke="#121212" strokeWidth="0.9" />
                <path d="M 0 15 Q 6 6 12 10 Q 6 14 0 15 Z" fill="#EB5725" fillOpacity="0.7" stroke="#121212" strokeWidth="0.8" />
              </g>
            </motion.g>

            {/* ── 01 IDEA CALLOUT, BULB & FOUNDER (x: 45 to 160, y: 680 to 765) ── */}
            <motion.g
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: editorialEase }}
              className="font-robotoMono select-none"
            >
              {/* 01 IDEA Text */}
              <text x="55" y="700" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.1em">
                01
              </text>
              <text x="55" y="718" fill="#121212" fontSize="13" fontWeight="700" letterSpacing="0.14em">
                IDEA
              </text>
              {/* Pin Line to Starting Road Point */}
              <line x1="80" y1="728" x2="100" y2="755" stroke="#121212" strokeWidth="1.2" />
              <circle cx="100" cy="755" r="3.5" fill="#121212" />

              {/* ── CIRCULAR BADGE WITH INCANDESCENT IDEA BULB (x: 115, y: 665) ── */}
              <g transform="translate(90, 640)">
                {/* Badge Outer Circle */}
                <circle cx="25" cy="25" r="24" fill="#FFFFFF" stroke="#121212" strokeWidth="1.2" />
                {/* Ambient Glow */}
                <circle cx="25" cy="23" r="16" fill="url(#bulbGlow)" />

                {/* Hand-Drawn Bulb Outline */}
                <path
                  d="M 21 28 C 16 25 15 18 19 14 C 23 10 27 10 31 14 C 35 18 34 25 29 28 L 29 32 L 21 32 Z"
                  fill="#FFFBF7"
                  stroke="#121212"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
                {/* Orange Glowing Filament Sparks */}
                <path d="M 23 20 L 25 16 L 27 20" stroke="#EB5725" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="25" cy="21" r="1.5" fill="#EB5725" />
                {/* Bulb Base & Socket Threads */}
                <line x1="22" y1="32" x2="28" y2="32" stroke="#121212" strokeWidth="1" />
                <line x1="23" y1="34" x2="27" y2="34" stroke="#121212" strokeWidth="1" />
                {/* Radiating Spark Rays */}
                <line x1="25" y1="8" x2="25" y2="5" stroke="#EB5725" strokeWidth="1" strokeLinecap="round" />
                <line x1="14" y1="13" x2="11" y2="11" stroke="#EB5725" strokeWidth="0.9" strokeLinecap="round" />
                <line x1="36" y1="13" x2="39" y2="11" stroke="#EB5725" strokeWidth="0.9" strokeLinecap="round" />
              </g>

              {/* ── FOUNDER FIGURE SEATED WORKING BESIDE BULB (x: 135, y: 715) ── */}
              <g transform="translate(132, 705)">
                {/* Orange Leaf Sprout beside founder */}
                <path d="M -3 20 Q -8 10 -2 5 Q 4 12 -3 20 Z" fill="#EB5725" stroke="#121212" strokeWidth="0.9" />

                {/* Seated Pedestal / Roll */}
                <rect x="8" y="24" width="18" height="18" rx="2" fill="#FAF7F2" stroke="#121212" strokeWidth="1.1" />

                {/* Seated Person Silhouette */}
                <circle cx="15" cy="8" r="3" fill="#121212" />
                {/* Torso & Legs */}
                <path
                  d="M 15 11 L 15 24 L 24 24 L 24 40"
                  stroke="#121212"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Arm holding notebook/laptop */}
                <line x1="15" y1="17" x2="23" y2="18" stroke="#121212" strokeWidth="1.3" strokeLinecap="round" />
                <line x1="21" y1="17" x2="27" y2="17" stroke="#EB5725" strokeWidth="1.3" strokeLinecap="round" />
              </g>
            </motion.g>
          </g>

          {/* ============================================================
              8. THE RAILWAY VIADUCT, TRAIN & SLOGANS (LOWER RIGHT)
          ============================================================= */}
          <g>
            {/* Distant Mountain Peaks behind Railway */}
            <polygon points="685,600 715,555 745,600" fill="#FAF7F2" stroke="#121212" strokeWidth="1" />
            <polygon points="730,600 755,545 780,600" fill="#F4EFE6" stroke="#52525B" strokeWidth="1" />

            {/* Pine Trees Beside Viaduct */}
            <polygon points="575,600 580,578 585,600" fill="#EB5725" stroke="#121212" strokeWidth="0.9" />
            <polygon points="588,600 594,582 600,600" fill="#52525B" stroke="#121212" strokeWidth="0.9" />
            <polygon points="722,600 728,574 734,600" fill="#EB5725" stroke="#121212" strokeWidth="0.9" />
            <polygon points="736,600 742,580 748,600" fill="#52525B" stroke="#121212" strokeWidth="0.9" />

            {/* ── ARCHED VIADUCT / BRIDGE STRUCTURE (x: 605 to 720, y: 595 to 630) ── */}
            <g transform="translate(600, 595)">
              {/* Bridge Deck Base */}
              <line x1="0" y1="0" x2="120" y2="0" stroke="#121212" strokeWidth="1.4" />
              <line x1="0" y1="5" x2="120" y2="5" stroke="#121212" strokeWidth="1" />

              {/* 5 Roman Arches */}
              {[12, 34, 56, 78, 100].map((archX) => (
                <path
                  key={archX}
                  d={`M ${archX - 8} 30 L ${archX - 8} 12 Q ${archX} 4 ${archX + 8} 12 L ${archX + 8} 30`}
                  stroke="#121212"
                  strokeWidth="1.1"
                  fill="#FFFFFF"
                />
              ))}
              {/* Ground line below arches */}
              <line x1="-5" y1="30" x2="125" y2="30" stroke="#121212" strokeWidth="1.2" />

              {/* ── PASSENGER TRAIN GLIDING ACROSS BRIDGE ── */}
              <motion.g
                animate={prefersReducedMotion ? {} : { x: [-35, 15, -35] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                transform="translate(15, -12)"
              >
                {/* Train Body */}
                <rect x="0" y="0" width="70" height="10" rx="1.5" fill="#FAF7F2" stroke="#121212" strokeWidth="1.1" />
                {/* Vibrant Orange Speed Stripe */}
                <rect x="0" y="4" width="70" height="3" fill="#EB5725" />
                {/* Passenger Windows */}
                {[6, 16, 26, 36, 46, 56].map((winX) => (
                  <rect key={winX} x={winX} y="2" width="6" height="4" fill="#121212" />
                ))}
              </motion.g>
            </g>

            {/* ── EDITORIAL SLOGAN (ABOVE TRAIN) ── */}
            <g className="font-robotoMono select-none" transform="translate(560, 480)">
              <text x="0" y="0" fill="#121212" fontSize="11" fontWeight="700" letterSpacing="0.14em">
                IDEAS
              </text>
              <text x="0" y="16" fill="#121212" fontSize="11" fontWeight="700" letterSpacing="0.14em">
                PEOPLE
              </text>
              <text x="0" y="32" fill="#121212" fontSize="11" fontWeight="700" letterSpacing="0.14em">
                TECHNOLOGY
              </text>
              <text x="0" y="48" fill="#71717A" fontSize="9" fontWeight="600" letterSpacing="0.18em">
                A BRIGHTER TOMORROW
              </text>
            </g>

            {/* ── BOTTOM CORNER: 6x6 DOT MATRIX GRID & SLOGAN ── */}
            <g transform="translate(675, 695)">
              {/* 6x6 Dot Matrix */}
              {[0, 10, 20, 30, 40, 50].map((dx) =>
                [0, 10, 20, 30, 40, 50].map((dy) => (
                  <circle
                    key={`${dx}-${dy}`}
                    cx={dx}
                    cy={dy}
                    r="1.2"
                    fill={dx === 20 && dy === 20 ? '#EB5725' : '#121212'}
                    fillOpacity={dx === 20 && dy === 20 ? 0.9 : 0.25}
                  />
                ))
              )}
            </g>

            {/* Bottom Slogan Line with Orange Accent Rule */}
            <g transform="translate(370, 785)" className="font-robotoMono select-none">
              <line x1="0" y1="0" x2="40" y2="0" stroke="#EB5725" strokeWidth="1.3" />
              <text x="55" y="-4" fill="#52525B" fontSize="9" fontWeight="600" letterSpacing="0.22em">
                FROM CAMPUS IDEAS
              </text>
              <text x="55" y="10" fill="#52525B" fontSize="9" fontWeight="600" letterSpacing="0.22em">
                TO A BRIGHTER TOMORROW
              </text>
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
