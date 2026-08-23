'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

import { TEAM_MEMBERS } from '@/data/team';
import TeamCard from './TeamCard';

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isReduced = useReducedMotion();

  // ================================================================
  // SCROLL PROGRESS
  // ================================================================

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  /*
   * Smooth spring prevents the parallax from feeling mechanical.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.2,
    restDelta: 0.0001,
  });

  // ================================================================
  // HEADER PARALLAX
  // ================================================================

  const headerY = useTransform(
    smoothProgress,
    [0, 0.3],
    isReduced ? [0, 0] : [45, 0]
  );

  const headerOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.35],
    isReduced ? [1, 1, 1] : [0, 0.7, 1]
  );

  // ================================================================
  // GIANT BACKGROUND "TEAM"
  // ================================================================

  /*
   * The giant word moves slower than the cards.
   * This creates the editorial depth/parallax effect.
   */

  const bgWordY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    isReduced ? [0, 0, 0] : [110, 0, -90]
  );

  const bgWordScale = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    isReduced ? [1, 1, 1] : [0.94, 1, 1.02]
  );

  const bgWordOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.75, 1],
    isReduced ? [0.8, 0.8, 0.8, 0.8] : [0, 1, 1, 0.7]
  );

  // ================================================================
  // CARDS PARALLAX
  // ================================================================

  /*
   * Cards move slightly faster than the giant typography.
   */

  const cardsY = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    isReduced ? [0, 0, 0] : [80, 0, -25]
  );

  // ================================================================
  // SECTION
  // ================================================================

  return (
    <section
      ref={sectionRef}
      id="team"
      aria-label="Our Team"
      className="
        relative
        overflow-hidden

        bg-canvas

        rounded-t-[32px]
        md:rounded-t-[48px]

        shadow-[0_-20px_50px_rgba(0,0,0,0.06)]

        border-t
        border-hairline/40

        pt-14
        sm:pt-16
        lg:pt-20

        pb-20
        sm:pb-24
        lg:pb-32
      "
    >

      {/* ================================================================
          GIANT BACKGROUND TYPOGRAPHY
      ================================================================= */}

      <div
        className="
          relative

          z-10

          h-[430px]
          sm:h-[480px]
          lg:h-[540px]

          w-full

          overflow-hidden

          pointer-events-none
          select-none

          flex
          justify-center
        "
      >
        <motion.div
          style={{
            y: bgWordY,
            scale: bgWordScale,
            opacity: bgWordOpacity,
          }}
          className="
            absolute

            top-[35px]
            sm:top-[25px]
            lg:top-[10px]

            whitespace-nowrap

            pointer-events-none
            select-none

            will-change-transform
          "
        >
          <span
            className="
              block

              font-marcellus

              text-brand

              text-[clamp(11rem,25vw,29rem)]

              leading-[0.72]

              tracking-[-0.055em]
            "
          >
            Team
          </span>
        </motion.div>
      </div>

      {/* ================================================================
          TEAM MEMBER CARDS
      ================================================================= */}

      <motion.div
        style={{
          y: cardsY,
        }}
        className="
          relative

          z-20

          mx-auto

          -mt-[285px]
          sm:-mt-[310px]
          lg:-mt-[330px]

          max-w-[1180px]

          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid

            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3

            gap-6
            sm:gap-7
            lg:gap-8
            xl:gap-10

            justify-items-center
          "
        >
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}