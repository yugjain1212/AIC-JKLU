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
  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 70,
    damping: 24,
  });

  const springY = useSpring(mouseY, {
    stiffness: 70,
    damping: 24,
  });

  const bgX = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const bgY = useTransform(springY, [-0.5, 0.5], [-3, 3]);

  const sceneX = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const sceneY = useTransform(springY, [-0.5, 0.5], [-5, 5]);

  const foregroundX = useTransform(
    springX,
    [-0.5, 0.5],
    [-11, 11]
  );

  const foregroundY = useTransform(
    springY,
    [-0.5, 0.5],
    [-8, 8]
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (reducedMotion || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative w-full
        max-w-[760px]
        aspect-[760/600]
        select-none
        overflow-visible
      "
    >
      <motion.svg
        viewBox="0 0 760 600"
        className="h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustration of the AIC-JKLU startup ecosystem"
        role="img"
      >
        <defs>
          {/* Soft sun */}
          <radialGradient id="companiesSun">
            <stop
              offset="0%"
              stopColor="#EB5725"
              stopOpacity="0.95"
            />
            <stop
              offset="65%"
              stopColor="#EB5725"
              stopOpacity="0.72"
            />
            <stop
              offset="100%"
              stopColor="#EB5725"
              stopOpacity="0"
            />
          </radialGradient>

          {/* Entrance */}
          <linearGradient
            id="companiesEntrance"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#EB5725"
              stopOpacity="0.8"
            />
            <stop
              offset="100%"
              stopColor="#EB5725"
              stopOpacity="0.98"
            />
          </linearGradient>

          {/* Subtle ground fade */}
          <linearGradient
            id="groundFade"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#E4E4E0"
              stopOpacity="0.7"
            />
            <stop
              offset="100%"
              stopColor="#FBF7F0"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <motion.g
          style={
            reducedMotion
              ? undefined
              : {
                x: bgX,
                y: bgY,
              }
          }
        >
          {/* Technical vertical marks */}
          <line
            x1="70"
            y1="80"
            x2="70"
            y2="265"
            stroke="#121212"
            strokeOpacity="0.18"
            strokeWidth="1"
          />

          <circle
            cx="70"
            cy="80"
            r="4"
            fill="#EB5725"
          />

          <line
            x1="690"
            y1="78"
            x2="690"
            y2="260"
            stroke="#121212"
            strokeOpacity="0.18"
            strokeWidth="1"
          />

          <circle
            cx="690"
            cy="78"
            r="4"
            fill="#121212"
          />

          {/* Small technical crosses */}
          <g
            stroke="#EB5725"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M130 100h12M136 94v12" />
            <path d="M625 125h12M631 119v12" />
            <path d="M178 300h10M183 295v10" />
            <path d="M650 360h10M655 355v10" />
          </g>

          {/* Clouds */}
          <motion.g
            animate={
              reducedMotion
                ? undefined
                : {
                  x: [0, 7, 0],
                }
            }
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <path
              d="
                M115 190
                C115 180 123 173 134 173
                C141 162 156 163 164 173
                C177 170 188 179 188 190
              "
              stroke="#121212"
              strokeOpacity="0.23"
              strokeWidth="1"
            />

            <path
              d="
                M570 178
                C570 169 577 163 586 163
                C594 153 607 155 614 164
                C625 162 635 169 635 178
              "
              stroke="#121212"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
          </motion.g>

          {/* Birds */}
          <motion.g
            animate={
              reducedMotion
                ? undefined
                : {
                  y: [0, -4, 0],
                }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <path
              d="M260 92 Q266 85 272 92 Q278 85 284 92"
              stroke="#121212"
              strokeOpacity="0.55"
              strokeWidth="1.2"
            />

            <path
              d="M530 105 Q535 99 540 105 Q545 99 550 105"
              stroke="#121212"
              strokeOpacity="0.5"
              strokeWidth="1.1"
            />
          </motion.g>
        </motion.g>

        {/* =====================================================
            SUN
        ====================================================== */}

        <motion.g
          initial={
            reducedMotion
              ? undefined
              : {
                opacity: 0,
                scale: 0.94,
              }
          }
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.45,
            ease,
          }}
          style={{
            transformOrigin: '530px 160px',
          }}
        >
          <circle
            cx="530"
            cy="160"
            r="110"
            fill="url(#companiesSun)"
          />

          <motion.circle
            cx="530"
            cy="160"
            r="86"
            stroke="#EB5725"
            strokeOpacity="0.13"
            strokeWidth="1"
            animate={
              reducedMotion
                ? undefined
                : {
                  scale: [1, 1.035, 1],
                }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <circle
            cx="530"
            cy="160"
            r="56"
            fill="#EB5725"
            fillOpacity="0.72"
          />
        </motion.g>

        {/* =====================================================
            DISTANT CITY
        ====================================================== */}

        <motion.g
          style={
            reducedMotion
              ? undefined
              : {
                x: sceneX,
                y: sceneY,
              }
          }
          initial={
            reducedMotion
              ? undefined
              : {
                opacity: 0,
                y: 15,
              }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.55,
            ease,
          }}
        >
          {/* Tall buildings */}
          <g
            stroke="#121212"
            strokeOpacity="0.38"
            strokeWidth="1"
            fill="#FBF7F0"
          >
            <rect x="455" y="195" width="35" height="110" />
            <rect x="500" y="220" width="28" height="85" />
            <rect x="540" y="205" width="42" height="100" />
          </g>

          {/* Building details */}
          <g
            stroke="#E4E4E0"
            strokeWidth="1"
          >
            <path d="M465 208v85M477 208v85" />
            <path d="M509 232v62M519 232v62" />
            <path d="M551 218v75M566 218v75" />
          </g>
        </motion.g>

        {/* =====================================================
            MAIN ECOSYSTEM SCENE
        ====================================================== */}

        <motion.g
          style={
            reducedMotion
              ? undefined
              : {
                x: sceneX,
                y: sceneY,
              }
          }
          initial={
            reducedMotion
              ? undefined
              : {
                opacity: 0,
                y: 25,
              }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.72,
            ease,
          }}
        >
          {/* Ground */}
          <path
            d="M75 470 C220 450 350 456 490 458 C605 460 680 455 730 448"
            stroke="#121212"
            strokeOpacity="0.6"
            strokeWidth="1.3"
          />

          <path
            d="M110 476 C245 455 355 462 470 465"
            stroke="#E4E4E0"
            strokeWidth="1"
          />

          {/* =================================================
              LEFT TREES
          ================================================== */}

          <g>
            <path
              d="M135 465V335"
              stroke="#121212"
              strokeWidth="2"
            />

            <path
              d="M135 390L105 365M135 405L164 380"
              stroke="#121212"
              strokeWidth="1"
            />

            <path
              d="
                M98 355
                C98 330 113 316 135 320
                C157 316 173 333 171 355
                C171 376 155 389 135 387
                C114 389 98 376 98 355Z
              "
              fill="#FBF7F0"
              stroke="#121212"
              strokeWidth="1.2"
            />

            <path
              d="M111 351L121 342M148 368L158 357"
              stroke="#EB5725"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Small orange tree */}
          <g>
            <path
              d="M205 468V392"
              stroke="#121212"
              strokeWidth="1.6"
            />

            <path
              d="M205 415L190 400M205 425L219 409"
              stroke="#121212"
              strokeWidth="1"
            />

            <path
              d="
                M184 401
                C184 386 194 376 206 379
                C219 377 228 388 228 401
                C228 414 218 421 205 421
                C192 421 184 414 184 401Z
              "
              fill="#EB5725"
              fillOpacity="0.8"
            />
          </g>

          {/* =================================================
              RIGHT LARGE TREE
          ================================================== */}

          <g>
            <path
              d="M650 466V300"
              stroke="#121212"
              strokeWidth="2.2"
            />

            <path
              d="M650 355L615 325M650 375L686 340"
              stroke="#121212"
              strokeWidth="1.1"
            />

            <path
              d="
                M592 324
                C592 291 612 270 642 274
                C669 262 696 283 698 313
                C719 334 704 365 676 368
                C647 382 610 365 606 344
                C597 340 592 333 592 324Z
              "
              fill="#FBF7F0"
              stroke="#121212"
              strokeWidth="1.4"
            />

            <path
              d="
                M620 315
                L632 304
                M670 341
                L686 327
                M648 290
                L658 301
              "
              stroke="#EB5725"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* =================================================
              AIC BUILDING
          ================================================== */}

          <motion.g
            initial={
              reducedMotion
                ? undefined
                : {
                  opacity: 0,
                  y: 20,
                }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.95,
              ease,
            }}
          >
            {/* Main building */}
            <path
              d="
                M270 466
                L270 340
                L305 318
                L430 318
                L468 340
                L468 466
                Z
              "
              fill="#FBF7F0"
              stroke="#121212"
              strokeWidth="1.5"
            />

            {/* Roof */}
            <path
              d="M260 340L367 286L478 340"
              fill="#FBF7F0"
              stroke="#121212"
              strokeWidth="1.5"
            />

            {/* Roof construction */}
            <path
              d="M367 286V318"
              stroke="#121212"
              strokeWidth="1"
            />

            <path
              d="M290 333L367 296L450 333"
              stroke="#E4E4E0"
              strokeWidth="1"
            />

            {/* AIC label */}
            <text
              x="367"
              y="330"
              textAnchor="middle"
              fill="#121212"
              fontSize="12"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="2.5"
            >
              AIC-JKLU
            </text>

            {/* Windows */}
            <g
              fill="#FFF2ED"
              stroke="#E4E4E0"
              strokeWidth="0.8"
            >
              <rect x="292" y="350" width="18" height="18" />
              <rect x="320" y="350" width="18" height="18" />
              <rect x="348" y="350" width="18" height="18" />

              <rect x="376" y="350" width="18" height="18" />
              <rect x="404" y="350" width="18" height="18" />
              <rect x="432" y="350" width="18" height="18" />
            </g>

            {/* Entrance frame */}
            <path
              d="
                M326 466
                L326 397
                L367 374
                L412 397
                L412 466
              "
              fill="url(#companiesEntrance)"
              stroke="#121212"
              strokeWidth="1.4"
            />

            {/* Entrance glass divisions */}
            <path
              d="M367 375V466"
              stroke="#121212"
              strokeOpacity="0.35"
              strokeWidth="1"
            />

            <path
              d="M326 397L367 421L412 397"
              stroke="#121212"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            {/* People inside */}
            <g fill="#121212">
              <circle cx="346" cy="424" r="3" />
              <path
                d="M346 428v22M337 440l9-6 9 6M341 450l-4 12M351 450l4 12"
                stroke="#121212"
                strokeWidth="1.4"
              />

              <circle cx="389" cy="427" r="3" />
              <path
                d="M389 431v20M381 442l8-6 8 6M385 451l-4 11M393 451l4 11"
                stroke="#121212"
                strokeWidth="1.4"
              />
            </g>
          </motion.g>

          {/* =================================================
              PEOPLE OUTSIDE
          ================================================== */}

          <g
            fill="#121212"
            stroke="#121212"
          >
            <circle cx="250" cy="444" r="3" />
            <path
              d="M250 448V463M244 454L250 451L256 454M247 463L244 470M253 463L257 470"
              strokeWidth="1.3"
            />

            <circle cx="475" cy="440" r="3" />
            <path
              d="M475 444V462M469 450L475 447L481 450M472 462L469 469M478 462L482 469"
              strokeWidth="1.3"
            />

            <circle cx="540" cy="449" r="3" />
            <path
              d="M540 453V468M534 458L540 456L546 458M537 468L534 474M543 468L547 474"
              strokeWidth="1.3"
            />
          </g>
        </motion.g>

        {/* =====================================================
            IDEA → AIC → IMPACT PATH
        ====================================================== */}

        <motion.g
          style={
            reducedMotion
              ? undefined
              : {
                x: foregroundX,
                y: foregroundY,
              }
          }
        >
          {/* Idea marker */}
          <motion.g
            initial={
              reducedMotion
                ? undefined
                : {
                  opacity: 0,
                  scale: 0.8,
                }
            }
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.9,
              ease,
            }}
            style={{
              transformOrigin: '190px 190px',
            }}
          >
            <circle
              cx="190"
              cy="190"
              r="27"
              fill="#FBF7F0"
              stroke="#EB5725"
              strokeWidth="1.5"
            />

            <circle
              cx="190"
              cy="190"
              r="20"
              stroke="#EB5725"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            {/* Spark / idea symbol */}
            <circle
              cx="190"
              cy="187"
              r="7"
              stroke="#EB5725"
              strokeWidth="1.5"
            />

            <path
              d="M187 198H193M188 201H192"
              stroke="#EB5725"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            <text
              x="190"
              y="232"
              textAnchor="middle"
              fill="#EB5725"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="2"
            >
              IDEA
            </text>
          </motion.g>

          {/* Main ecosystem path */}
          <motion.path
            d="
              M218 190
              C275 190 305 230 328 272
              C342 296 351 310 367 318
              C425 340 500 310 575 260
            "
            stroke="#EB5725"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            pathLength={1}
            initial={
              reducedMotion
                ? { pathLength: 1, opacity: 1 }
                : {
                  pathLength: 0,
                  opacity: 0,
                }
            }
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              pathLength: {
                duration: 1.6,
                delay: 1.05,
                ease,
              },
              opacity: {
                duration: 0.3,
                delay: 1.05,
              },
            }}
          />

          {/* Secondary dashed path */}
          <path
            d="
              M95 520
              C210 495 300 500 365 480
              C450 455 515 425 610 410
            "
            stroke="#121212"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Moving orange point */}
          {!reducedMotion && (
            <motion.circle
              r="4"
              fill="#EB5725"
              initial={{
                cx: 218,
                cy: 190,
              }}
              animate={{
                cx: [218, 328, 367, 575],
                cy: [190, 272, 318, 260],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: 'easeInOut',
              }}
            />
          )}

          {/* Growth marker */}
          <motion.g
            initial={
              reducedMotion
                ? undefined
                : {
                  opacity: 0,
                  x: 10,
                }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.45,
              ease,
            }}
          >
            <circle
              cx="575"
              cy="260"
              r="7"
              fill="#EB5725"
            />

            <line
              x1="575"
              y1="270"
              x2="575"
              y2="320"
              stroke="#121212"
              strokeOpacity="0.35"
              strokeWidth="1"
            />

            <text
              x="592"
              y="262"
              fill="#121212"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="1.8"
            >
              GROWTH
            </text>

            <text
              x="592"
              y="276"
              fill="#EB5725"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="1.8"
            >
              IMPACT
            </text>
          </motion.g>

          {/* Lower-right editorial annotation */}
          <text
            x="555"
            y="505"
            fill="#71717A"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="700"
            letterSpacing="1.8"
          >
            FROM IDEAS
          </text>

          <text
            x="555"
            y="518"
            fill="#71717A"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="700"
            letterSpacing="1.8"
          >
            TO IMPACT
          </text>

          <circle
            cx="535"
            cy="514"
            r="3"
            fill="#EB5725"
          />
        </motion.g>

        {/* =====================================================
            FLAG / LANDMARK
        ====================================================== */}

        <motion.g
          initial={
            reducedMotion
              ? undefined
              : {
                opacity: 0,
                y: 8,
              }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            ease,
          }}
        >
          <line
            x1="367"
            y1="286"
            x2="367"
            y2="250"
            stroke="#121212"
            strokeWidth="1"
          />

          <path
            d="M367 251L388 258L367 265Z"
            fill="#EB5725"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}