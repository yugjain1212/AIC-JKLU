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

const CX = 260;
const CY = 260;

// Distance from center of AIC to center of each node
const ORBIT_R = 178;

function getPoint(angleDeg: number) {
  const angle = (angleDeg * Math.PI) / 180;

  return {
    x: CX + ORBIT_R * Math.cos(angle),
    y: CY + ORBIT_R * Math.sin(angle),
  };
}

const NODES = [
  {
    id: 'industry',
    label: 'INDUSTRY',
    sub: 'Corporate Partners',
    icon: Briefcase,
    angle: -90,
  },
  {
    id: 'govt',
    label: 'GOVERNMENT',
    sub: 'Policy & Grants',
    icon: Landmark,
    angle: -18,
  },
  {
    id: 'enablers',
    label: 'ECOSYSTEM',
    sub: 'Enablers & VCs',
    icon: Rocket,
    angle: 54,
  },
  {
    id: 'investors',
    label: 'INVESTORS',
    sub: 'Seed & Growth',
    icon: UserCheck,
    angle: 126,
  },
  {
    id: 'academia',
    label: 'ACADEMIA',
    sub: 'Research & Labs',
    icon: GraduationCap,
    angle: 198,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PartnersEcosystemVisual() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="
        relative
        w-full
        max-w-[520px]
        xl:max-w-[560px]
        mx-auto
        select-none
      "
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* =====================================================
          ORBIT + CENTRAL HUB
      ====================================================== */}

      <svg
        viewBox="0 0 520 520"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="aic-glow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="15"
              floodColor="#EB5725"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        {/* Outer orbit */}

        <circle
          cx={CX}
          cy={CY}
          r={ORBIT_R}
          stroke="#D9D3CA"
          strokeWidth="1"
        />

        {/* Inner subtle orbit */}

        <circle
          cx={CX}
          cy={CY}
          r="112"
          stroke="#EB5725"
          strokeWidth="0.8"
          strokeDasharray="2 8"
          opacity="0.18"
        />

        {/* Small orange orbit markers */}

        {NODES.map((node) => {
          const point = getPoint(node.angle);

          return (
            <circle
              key={node.id}
              cx={point.x}
              cy={point.y}
              r="3.2"
              fill="#EB5725"
            />
          );
        })}

        {/* =================================================
            CENTRAL AIC
        ================================================== */}

        <circle
          cx={CX}
          cy={CY}
          r="68"
          fill="#EB5725"
          filter="url(#aic-glow)"
        />

        <circle
          cx={CX}
          cy={CY}
          r="68"
          stroke="#F8E9E2"
          strokeWidth="1"
          opacity="0.8"
        />

        {/* AIC */}

        <text
          x={CX}
          y={CY - 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          style={{
            fontSize: '28px',
            fontWeight: '500',
            letterSpacing: '-0.03em',
            fontFamily:
              'var(--font-marcellus, Georgia, serif)',
          }}
        >
          AIC
        </text>

        {/* Divider */}

        <line
          x1={CX - 21}
          y1={CY + 11}
          x2={CX + 21}
          y2={CY + 11}
          stroke="white"
          strokeWidth="0.7"
          opacity="0.45"
        />

        {/* JKLU */}

        <text
          x={CX}
          y={CY + 27}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          style={{
            fontSize: '9px',
            fontWeight: '700',
            letterSpacing: '0.3em',
            fontFamily:
              'var(--font-roboto-mono, monospace)',
          }}
        >
          JKLU
        </text>
      </svg>

      {/* =====================================================
          NODES
      ====================================================== */}

      {NODES.map((node, index) => {
        const Icon = node.icon;
        const point = getPoint(node.angle);

        const left = `${(point.x / 520) * 100}%`;
        const top = `${(point.y / 520) * 100}%`;

        const isHovered = hovered === node.id;

        return (
          /*
           * IMPORTANT:
           * This wrapper handles POSITIONING.
           *
           * The inner motion.div handles ANIMATION.
           *
           * This prevents Framer Motion from overwriting
           * translate(-50%, -50%).
           */
          <div
            key={node.id}
            className="
              absolute
              z-20
              -translate-x-1/2
              -translate-y-1/2
            "
            style={{
              left,
              top,
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.82,
              }}
              animate={{
                opacity: 1,
                scale: isHovered ? 1.06 : 1,
              }}
              transition={{
                duration: 0.55,
                delay: 0.1 + index * 0.08,
                ease: EASE,
              }}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              className="
                w-[110px]
                sm:w-[120px]
                flex
                flex-col
                items-center
                text-center
                cursor-pointer
              "
            >
              {/* =================================================
                  ICON
              ================================================== */}

              <div
                className={`
                  relative

                  w-[66px]
                  h-[66px]

                  sm:w-[72px]
                  sm:h-[72px]

                  rounded-full

                  flex
                  items-center
                  justify-center

                  border

                  transition-all
                  duration-300

                  ${
                    isHovered
                      ? `
                        bg-[#FFF8F4]
                        border-[#EB5725]
                        text-[#EB5725]
                        shadow-[0_8px_30px_rgba(235,87,37,0.15)]
                      `
                      : `
                        bg-white
                        border-[#E2DDD6]
                        text-[#151515]
                        shadow-[0_6px_25px_rgba(25,20,15,0.06)]
                      `
                  }
                `}
              >
                <Icon
                  className="
                    w-[24px]
                    h-[24px]
                    sm:w-[26px]
                    sm:h-[26px]
                  "
                  strokeWidth={1.7}
                />

                {/* Hover dot */}

                {isHovered && (
                  <motion.span
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    className="
                      absolute
                      top-[5px]
                      right-[5px]
                      w-[6px]
                      h-[6px]
                      rounded-full
                      bg-[#EB5725]
                    "
                  />
                )}
              </div>

              {/* =================================================
                  LABEL
              ================================================== */}

              <div className="mt-3 flex flex-col items-center">
                <span
                  className={`
                    font-robotoMono

                    text-[9px]
                    sm:text-[10px]

                    font-bold
                    uppercase

                    tracking-[0.17em]

                    leading-none

                    whitespace-nowrap

                    transition-colors
                    duration-300

                    ${
                      isHovered
                        ? 'text-[#EB5725]'
                        : 'text-[#171717]'
                    }
                  `}
                >
                  {node.label}
                </span>

                <span
                  className="
                    mt-[6px]

                    font-robotoMono

                    text-[7.5px]
                    sm:text-[8px]

                    tracking-[0.04em]

                    leading-none

                    text-[#A09890]

                    whitespace-nowrap
                  "
                >
                  {node.sub}
                </span>
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* =====================================================
          BOTTOM EDITORIAL LABEL
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 0.75,
        }}
        className="
          absolute
          left-1/2
          bottom-[7%]
          -translate-x-1/2
          pointer-events-none
          text-center
        "
      >
        <span
          className="
            font-robotoMono
            text-[6px]
            sm:text-[7px]
            tracking-[0.25em]
            uppercase
            text-[#ADA69D]
            whitespace-nowrap
          "
        >
          INNOVATION · COLLABORATION · IMPACT
        </span>
      </motion.div>
    </div>
  );
}