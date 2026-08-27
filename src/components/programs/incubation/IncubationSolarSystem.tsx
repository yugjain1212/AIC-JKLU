'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface PlanetData {
  id: string;
  name: string;
  image: string;
  orbitRx: number;
  orbitRy: number;
  speed: number; // seconds per revolution
  initialAngle: number; // in radians
  size: number; // display diameter
  glowColor: string;
  hasRing?: boolean;
}

const PLANETS: PlanetData[] = [
  {
    id: 'mercury',
    name: 'Ideation & Prototyping',
    image: '/incubation/mercury.png',
    orbitRx: 125,
    orbitRy: 56,
    speed: 16,
    initialAngle: 3.4,
    size: 20,
    glowColor: 'rgba(160, 160, 160, 0.4)',
  },
  {
    id: 'mars',
    name: 'Seed Capital & Grants',
    image: '/incubation/mars.png',
    orbitRx: 195,
    orbitRy: 88,
    speed: 26,
    initialAngle: 0.8,
    size: 26,
    glowColor: 'rgba(235, 87, 37, 0.6)',
  },
  {
    id: 'jupiter',
    name: 'Deep Mentorship & R&D',
    image: '/incubation/jupiter.png',
    orbitRx: 275,
    orbitRy: 124,
    speed: 42,
    initialAngle: 3.85,
    size: 58,
    glowColor: 'rgba(217, 160, 100, 0.4)',
  },
  {
    id: 'saturn',
    name: 'Market Access & Scale',
    image: '/incubation/saturn.png',
    orbitRx: 360,
    orbitRy: 162,
    speed: 58,
    initialAngle: 0.15,
    size: 82,
    glowColor: 'rgba(226, 182, 120, 0.4)',
    hasRing: true,
  },
];

export default function IncubationSolarSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);

  // Mouse Parallax 3D Spring Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
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

  // Continuous 60FPS Orbit Clock
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = performance.now();

    const animate = (currentTimestamp: number) => {
      const delta = (currentTimestamp - lastTimestamp) / 1000;
      lastTimestamp = currentTimestamp;

      setTime((prev) => prev + delta);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Center coordinate of the visual canvas
  const cx = 350;
  const cy = 300;
  // Tilt angle matching the reference design (-22 deg)
  const tiltAngleDeg = -22;
  const tiltRad = (tiltAngleDeg * Math.PI) / 180;

  // Function to calculate 2D screen coordinate after ellipse parametric & rotation
  const getPlanetCoord = (planet: PlanetData) => {
    const currentAngle = planet.initialAngle + (2 * Math.PI * time) / planet.speed;
    const rawX = planet.orbitRx * Math.cos(currentAngle);
    const rawY = planet.orbitRy * Math.sin(currentAngle);

    // Apply 2D rotation of -22 deg to match the tilted orbital plane
    const rotatedX = rawX * Math.cos(tiltRad) - rawY * Math.sin(tiltRad);
    const rotatedY = rawX * Math.sin(tiltRad) + rawY * Math.cos(tiltRad);

    return {
      x: cx + rotatedX,
      y: cy + rotatedY,
      zDepth: Math.sin(currentAngle),
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[640px] lg:max-w-[700px] h-[520px] sm:h-[580px] lg:h-[620px] flex items-center justify-center select-none overflow-visible pointer-events-auto"
    >
      {/* ── 3D Interactive Parallax Canvas ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-[700px] h-[600px] flex items-center justify-center pointer-events-none"
      >
        {/* ── Background Subtle Cosmic Crosshairs & Stardust (Monochrome) ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Slate & Charcoal Crosshairs */}
          <span className="absolute top-[16%] left-[22%] text-[#121212]/45 text-[13px] font-mono select-none">+</span>
          <span className="absolute top-[28%] left-[12%] text-[#71717A]/40 text-[11px] font-mono select-none">+</span>
          <span className="absolute top-[18%] right-[22%] text-[#121212]/40 text-[12px] font-mono select-none">+</span>
          <span className="absolute bottom-[38%] left-[16%] text-[#121212]/35 text-[12px] font-mono select-none">+</span>
          <span className="absolute bottom-[22%] left-[42%] text-[#71717A]/40 text-[11px] font-mono select-none">+</span>
          <span className="absolute top-[42%] right-[10%] text-[#71717A]/40 text-[11px] font-mono select-none">+</span>
          
          {/* Fine Monochrome Stardust Points */}
          <div className="absolute top-[15%] right-[32%] w-1 h-1 rounded-full bg-[#121212]/30" />
          <div className="absolute top-[32%] right-[14%] w-1.5 h-1.5 rounded-full bg-[#121212]/60" />
          <div className="absolute bottom-[28%] right-[24%] w-1 h-1 rounded-full bg-[#121212]/40" />
          <div className="absolute bottom-[16%] right-[36%] w-1 h-1 rounded-full bg-[#121212]/30" />
          <div className="absolute top-[22%] left-[36%] w-1 h-1 rounded-full bg-[#121212]/25" />
          <div className="absolute bottom-[44%] left-[26%] w-1 h-1 rounded-full bg-[#121212]/40" />
        </div>

        {/* ── SVG Orbital Geometry Tracks (Black & White) ── */}
        <svg
          viewBox="0 0 700 600"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Ambient Sun Glow Radial Gradient (Monochrome) */}
            <radialGradient id="sunAmbientGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#121212" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#52525B" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FBF7F0" stopOpacity="0" />
            </radialGradient>

            {/* Monochrome Orbit Track Accent Gradient */}
            <linearGradient id="monoTrackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#121212" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#52525B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#121212" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          {/* Large Ambient Sun Glow in Center */}
          <circle cx={cx} cy={cy} r="160" fill="url(#sunAmbientGlow)" />

          {/* Group with tilt rotation (-22deg) around center (cx, cy) */}
          <g transform={`rotate(${tiltAngleDeg} ${cx} ${cy})`}>
            {/* Orbit 1: Mercury Track */}
            <ellipse
              cx={cx}
              cy={cy}
              rx={125}
              ry={56}
              fill="none"
              stroke="#52525B"
              strokeWidth="0.85"
              strokeDasharray="2 3"
              strokeOpacity="0.35"
            />

            {/* Orbit 2: Accent Track (Charcoal Dashed) */}
            <ellipse
              cx={cx}
              cy={cy}
              rx={195}
              ry={88}
              fill="none"
              stroke="url(#monoTrackGrad)"
              strokeWidth="1.1"
              strokeDasharray="4 4"
              strokeOpacity="0.75"
            />
            {/* Fixed Anchor Nodes on Orbit 2 */}
            <circle cx={cx + 195 * 0.72} cy={cy + 88 * 0.69} r="3.5" fill="#121212" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx={cx - 195 * 0.65} cy={cy - 88 * 0.76} r="2.5" fill="#121212" stroke="#FFFFFF" strokeWidth="0.8" />

            {/* Orbit 3: Jupiter Track */}
            <ellipse
              cx={cx}
              cy={cy}
              rx={275}
              ry={124}
              fill="none"
              stroke="#52525B"
              strokeWidth="0.9"
              strokeDasharray="3 4"
              strokeOpacity="0.32"
            />
            {/* Geometric Marker Node on Orbit 3 */}
            <circle cx={cx - 275 * 0.88} cy={cy + 124 * 0.47} r="2.5" fill="#52525B" fillOpacity="0.6" />

            {/* Orbit 4: Saturn Track */}
            <ellipse
              cx={cx}
              cy={cy}
              rx={360}
              ry={162}
              fill="none"
              stroke="#52525B"
              strokeWidth="0.95"
              strokeDasharray="4 5"
              strokeOpacity="0.38"
            />
            {/* Charcoal Node on Orbit 4 */}
            <circle cx={cx + 360 * 0.68} cy={cy - 162 * 0.73} r="3.5" fill="#121212" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx={cx + 360 * 0.68} cy={cy - 162 * 0.73} r="7" fill="none" stroke="#121212" strokeWidth="0.75" strokeDasharray="2 2" />

            {/* Orbit 5: Outer Guide Track */}
            <ellipse
              cx={cx}
              cy={cy}
              rx={430}
              ry={194}
              fill="none"
              stroke="#71717A"
              strokeWidth="0.75"
              strokeDasharray="2 4"
              strokeOpacity="0.2"
            />
            <circle cx={cx + 430 * 0.48} cy={cy + 194 * 0.88} r="3" fill="#121212" stroke="#FFFFFF" strokeWidth="0.8" />

            {/* Outermost Faint Horizon Orbit */}
            <ellipse
              cx={cx}
              cy={cy}
              rx={480}
              ry={216}
              fill="none"
              stroke="#71717A"
              strokeWidth="0.6"
              strokeDasharray="2 6"
              strokeOpacity="0.14"
            />
          </g>
        </svg>

        {/* ── CENTRAL SUN (Monochrome Star Core) ── */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: cx - 68,
            top: cy - 68,
            width: 136,
            height: 136,
          }}
        >
          {/* Subtle Monochrome Corona Layers */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#121212]/15 via-[#52525B]/10 to-transparent blur-lg animate-pulse" />
          <div className="absolute -inset-2 rounded-full bg-[#121212]/10 blur-md" />
          
          {/* High-res Black & White Sun Sphere */}
          <motion.div
            animate={{
              scale: [1, 1.025, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 120, repeat: Infinity, ease: 'linear' },
            }}
            className="relative w-full h-full rounded-full shadow-[0_0_35px_rgba(0,0,0,0.18),0_0_65px_rgba(0,0,0,0.08)] grayscale contrast-125 brightness-95"
          >
            <Image
              src="/incubation/sun.png"
              alt="AIC Incubation Central Star Core"
              fill
              priority
              className="object-contain rounded-full"
            />
          </motion.div>
        </div>

        {/* ── DYNAMIC 3D ORBITING PLANETS (Black & White) ── */}
        {PLANETS.map((planet) => {
          const coord = getPlanetCoord(planet);
          const zIndex = coord.zDepth > 0 ? 25 : 15;

          return (
            <div
              key={planet.id}
              className="absolute pointer-events-none"
              style={{
                left: coord.x - planet.size / 2,
                top: coord.y - planet.size / 2,
                width: planet.size,
                height: planet.size,
                zIndex,
              }}
            >
              {/* Planet Body with 3D Depth & Grayscale Treatment */}
              <div className="relative w-full h-full grayscale contrast-115 drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)]">
                <Image
                  src={planet.image}
                  alt={planet.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

