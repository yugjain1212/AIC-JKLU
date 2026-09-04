'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CompaniesCTA() {
  const ref = useRef<HTMLElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const reducedMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={ref}
      className="
        relative w-full
        overflow-hidden
        border-t border-[#E4E4E0]
        bg-[#FFF2ED]
      "
    >
      <div
        className="
          relative mx-auto
          max-w-[1480px]
          px-6 sm:px-10 lg:px-14 xl:px-20
          py-20 sm:py-24 lg:py-28
        "
      >
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]
            items-center
            gap-12 lg:gap-8
          "
        >
          {/* =====================================================
              LEFT — CTA
          ====================================================== */}

          <motion.div
            initial={
              reducedMotion
                ? undefined
                : {
                  opacity: 0,
                  y: 24,
                }
            }
            animate={
              inView
                ? {
                  opacity: 1,
                  y: 0,
                }
                : undefined
            }
            transition={{
              duration: 0.8,
              ease,
            }}
            className="relative z-20"
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#EB5725]" />

              <span className="font-robotoMono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#EB5725]">
                BE PART OF WHAT&apos;S NEXT
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[680px]
                font-marcellus
                text-[46px]
                sm:text-[56px]
                lg:text-[62px]
                xl:text-[70px]
                leading-[0.94]
                tracking-[-0.045em]
                text-[#121212]
              "
            >
              Join the AIC-JKLU{' '}
              <span className="text-[#EB5725]">
                Ecosystem.
              </span>
            </h2>

            {/* Divider */}
            <div className="mt-7 flex items-center gap-3 max-w-[470px]">
              <span className="font-robotoMono text-[11px] font-bold text-[#EB5725]">
                +
              </span>

              <div className="h-px flex-1 bg-[#E5CFC7]" />
            </div>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[520px]
                font-robotoMono
                text-[12.5px]
                sm:text-[13px]
                leading-[1.9]
                text-[#52525B]
              "
            >
              Apply, collaborate, or support startups building
              for a better tomorrow. Whether you are a founder,
              mentor, or investor, there is a place for you.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/apply"
                className="
                  group inline-flex items-center gap-3
                  bg-[#EB5725]
                  px-7 py-4
                  font-robotoMono
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#C84214]
                  hover:-translate-y-0.5
                "
              >
                Get involved

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/#contact"
                className="
                  group inline-flex items-center gap-3
                  border border-[#121212]/20
                  bg-transparent
                  px-6 py-4
                  font-robotoMono
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#121212]
                  transition-all
                  duration-300
                  hover:border-[#121212]
                  hover:bg-white/60
                "
              >
                Contact team

                <ArrowRight
                  className="
                    h-3.5 w-3.5
                    opacity-50
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — CONTINUATION OF ECOSYSTEM
          ====================================================== */}

          <motion.div
            initial={
              reducedMotion
                ? undefined
                : {
                  opacity: 0,
                  x: 30,
                }
            }
            animate={
              inView
                ? {
                  opacity: 1,
                  x: 0,
                }
                : undefined
            }
            transition={{
              duration: 1,
              delay: 0.15,
              ease,
            }}
            className="
              relative
              flex
              min-h-[300px]
              items-center
              justify-center
            "
          >
            <svg
              viewBox="0 0 650 340"
              className="w-full max-w-[650px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* =================================================
                  TECHNICAL BACKGROUND
              ================================================== */}

              <motion.g
                initial={
                  reducedMotion
                    ? undefined
                    : {
                      opacity: 0,
                    }
                }
                animate={
                  inView
                    ? {
                      opacity: 1,
                    }
                    : undefined
                }
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
              >
                <path
                  d="M40 258C150 220 240 230 330 238C440 248 535 224 625 180"
                  stroke="#121212"
                  strokeOpacity="0.28"
                  strokeWidth="1"
                />

                <path
                  d="M65 275C190 238 280 254 360 257C450 260 535 238 610 210"
                  stroke="#EB5725"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />

                <line
                  x1="82"
                  y1="75"
                  x2="82"
                  y2="250"
                  stroke="#121212"
                  strokeOpacity="0.15"
                />

                <line
                  x1="570"
                  y1="58"
                  x2="570"
                  y2="210"
                  stroke="#121212"
                  strokeOpacity="0.15"
                />

                <circle
                  cx="82"
                  cy="75"
                  r="3"
                  fill="#EB5725"
                />

                <circle
                  cx="570"
                  cy="58"
                  r="3"
                  fill="#121212"
                />
              </motion.g>

              {/* =================================================
                  SMALL SUN
              ================================================== */}

              <motion.g
                initial={
                  reducedMotion
                    ? undefined
                    : {
                      opacity: 0,
                      scale: 0.9,
                    }
                }
                animate={
                  inView
                    ? {
                      opacity: 1,
                      scale: 1,
                    }
                    : undefined
                }
                transition={{
                  duration: 0.9,
                  delay: 0.45,
                  ease,
                }}
                style={{
                  transformOrigin: '475px 100px',
                }}
              >
                <circle
                  cx="475"
                  cy="100"
                  r="65"
                  fill="#EB5725"
                  fillOpacity="0.1"
                />

                <circle
                  cx="475"
                  cy="100"
                  r="44"
                  fill="#EB5725"
                  fillOpacity="0.55"
                />

                <circle
                  cx="475"
                  cy="100"
                  r="55"
                  stroke="#EB5725"
                  strokeOpacity="0.22"
                  strokeWidth="1"
                />
              </motion.g>

              {/* =================================================
                  MINI ECOSYSTEM BUILDING
              ================================================== */}

              <motion.g
                initial={
                  reducedMotion
                    ? undefined
                    : {
                      opacity: 0,
                      y: 18,
                    }
                }
                animate={
                  inView
                    ? {
                      opacity: 1,
                      y: 0,
                    }
                    : undefined
                }
                transition={{
                  duration: 0.9,
                  delay: 0.65,
                  ease,
                }}
              >
                {/* Main building */}
                <path
                  d="
                    M205 258
                    L205 180
                    L245 154
                    L360 154
                    L402 180
                    L402 258
                    Z
                  "
                  fill="#FFF2ED"
                  stroke="#121212"
                  strokeOpacity="0.8"
                  strokeWidth="1.3"
                />

                {/* Roof */}
                <path
                  d="M194 180L302 120L413 180"
                  stroke="#121212"
                  strokeOpacity="0.8"
                  strokeWidth="1.3"
                />

                {/* Orange entrance */}
                <path
                  d="
                    M266 258
                    L266 213
                    L303 191
                    L341 213
                    L341 258
                  "
                  fill="#EB5725"
                  fillOpacity="0.85"
                  stroke="#121212"
                  strokeWidth="1"
                />

                {/* Building label */}
                <text
                  x="303"
                  y="173"
                  textAnchor="middle"
                  fill="#121212"
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="700"
                  letterSpacing="2"
                >
                  AIC-JKLU
                </text>

                {/* Windows */}
                <g
                  fill="#FFFFFF"
                  stroke="#E4E4E0"
                  strokeWidth="0.8"
                >
                  <rect x="225" y="193" width="14" height="14" />
                  <rect x="247" y="193" width="14" height="14" />
                  <rect x="344" y="193" width="14" height="14" />
                  <rect x="366" y="193" width="14" height="14" />
                </g>

                {/* People */}
                <g fill="#121212">
                  <circle cx="284" cy="227" r="2.5" />
                  <path
                    d="M284 230V247M278 236L284 233L290 236M281 247L278 253M287 247L290 253"
                    stroke="#121212"
                    strokeWidth="1.2"
                  />

                  <circle cx="326" cy="228" r="2.5" />
                  <path
                    d="M326 231V248M320 237L326 234L332 237M323 248L320 254M329 248L332 254"
                    stroke="#121212"
                    strokeWidth="1.2"
                  />
                </g>
              </motion.g>

              {/* =================================================
                  TREES
              ================================================== */}

              <motion.g
                initial={
                  reducedMotion
                    ? undefined
                    : {
                      opacity: 0,
                    }
                }
                animate={
                  inView
                    ? {
                      opacity: 1,
                    }
                    : undefined
                }
                transition={{
                  duration: 0.7,
                  delay: 0.85,
                }}
              >
                {/* Left tree */}
                <path
                  d="M155 260V202"
                  stroke="#121212"
                  strokeWidth="1.7"
                />

                <path
                  d="M155 220L137 207M155 229L174 213"
                  stroke="#121212"
                  strokeWidth="1"
                />

                <path
                  d="
                    M128 200
                    C128 180 141 169 156 173
                    C174 169 186 184 184 200
                    C184 216 171 225 155 224
                    C140 225 128 215 128 200Z
                  "
                  fill="#FFF2ED"
                  stroke="#121212"
                  strokeWidth="1"
                />

                <path
                  d="M142 195L150 188M164 211L174 201"
                  stroke="#EB5725"
                  strokeWidth="1.8"
                />

                {/* Right tree */}
                <path
                  d="M430 260V194"
                  stroke="#121212"
                  strokeWidth="1.8"
                />

                <path
                  d="M430 214L411 201M430 226L450 207"
                  stroke="#121212"
                  strokeWidth="1"
                />

                <path
                  d="
                    M403 192
                    C403 172 417 161 431 165
                    C449 160 463 175 461 192
                    C461 208 448 218 431 216
                    C415 218 403 208 403 192Z
                  "
                  fill="#FFF2ED"
                  stroke="#121212"
                  strokeWidth="1"
                />
              </motion.g>

              {/* =================================================
                  CONTINUING PATH
              ================================================== */}

              <motion.path
                d="M303 258C365 274 430 267 505 230C550 208 582 182 620 153"
                stroke="#EB5725"
                strokeWidth="1.5"
                strokeLinecap="round"
                pathLength={1}
                initial={
                  reducedMotion
                    ? { pathLength: 1 }
                    : { pathLength: 0 }
                }
                animate={
                  inView
                    ? { pathLength: 1 }
                    : undefined
                }
                transition={{
                  duration: 1.5,
                  delay: 0.95,
                  ease,
                }}
              />

              {!reducedMotion && (
                <motion.circle
                  r="3.5"
                  fill="#EB5725"
                  animate={{
                    cx: [303, 420, 505, 620],
                    cy: [258, 267, 230, 153],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'easeInOut',
                  }}
                />
              )}

              {/* =================================================
                  FINAL LABEL
              ================================================== */}

              <motion.g
                initial={
                  reducedMotion
                    ? undefined
                    : {
                      opacity: 0,
                      x: 10,
                    }
                }
                animate={
                  inView
                    ? {
                      opacity: 1,
                      x: 0,
                    }
                    : undefined
                }
                transition={{
                  duration: 0.7,
                  delay: 1.2,
                  ease,
                }}
              >
                <text
                  x="510"
                  y="112"
                  fill="#121212"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="700"
                  letterSpacing="1.8"
                >
                  THE JOURNEY
                </text>

                <text
                  x="510"
                  y="127"
                  fill="#EB5725"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="700"
                  letterSpacing="1.8"
                >
                  CONTINUES
                </text>
              </motion.g>

              {/* Small crosses */}
              <g
                stroke="#EB5725"
                strokeWidth="1.3"
                strokeLinecap="round"
              >
                <path d="M105 115h10M110 110v10" />
                <path d="M610 285h10M615 280v10" />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}