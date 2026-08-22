'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ── Stats data ─────────────────────────────────────────────────────────────
const STATS = [
  { index: '01', label: 'Startups\nSupported',       value: 200, suffix: '+' },
  { index: '02', label: 'Expert\nMentors',            value: 45,  suffix: '+' },
  { index: '03', label: 'Ecosystem\nPartners',        value: 35,  suffix: '+' },
  { index: '04', label: 'Events &\nEngagements',      value: 550, suffix: '+' },
] as const;

// ── Animated Counter Component ─────────────────────────────────────────────
function AnimatedCounter({ 
  value, 
  suffix = '', 
  delay = 0 
}: { 
  value: number; 
  suffix?: string; 
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    stiffness: 50, 
    damping: 25,
    mass: 0.8 
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(value);
      }, delay * 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

// ── Siena Parallax About Section ─────────────────────────────────────────────
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Raw scroll progress of the about section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Spring physics smoothing for 60fps parallax motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.2,
    restDelta: 0.0001,
  });

  // Left statement panel: slow upward parallax drift
  const leftY = useTransform(smoothProgress, [0, 1], reduced ? ['0px', '0px'] : ['40px', '-40px']);

  // Right panel: rises into position smoothly
  const rightY = useTransform(smoothProgress, [0, 0.5], reduced ? ['0px', '0px'] : ['30px', '0px']);

  // Eyebrow opacity: fades in as section enters
  const eyebrowOpacity = useTransform(smoothProgress, [0, 0.15], reduced ? [1, 1] : [0, 1]);

  // Right content: fade + rise on entry
  const rightOpacity = useTransform(smoothProgress, [0.05, 0.25], reduced ? [1, 1] : [0, 1]);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative bg-canvas rounded-t-[32px] md:rounded-t-[48px] shadow-[0_-20px_50px_rgba(0,0,0,0.06)] border-t border-hairline/80 overflow-hidden"
    >
      {/* ================================================================
          PART 1 — EDITORIAL INTRO
          off-white background, sticky-left / scrolling-right layout
      ================================================================ */}
      <div className="relative px-6 lg:px-16 py-24 lg:py-36">

        {/* Eyebrow */}
        <motion.div
          style={{ opacity: eyebrowOpacity }}
          className="
            mb-10
            font-robotoMono
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-slateMuted
          "
        >
          01 — About AIC-JKLU
        </motion.div>

        {/* 2-col grid: left sticky headline / right scrolling body */}
        <div className="
          mx-auto
          max-w-screen-2xl
          grid
          grid-cols-1
          gap-16
          lg:grid-cols-[1fr_1fr]
          lg:gap-24
        ">

          {/* ── LEFT — Big statement ── */}
          <motion.div
            style={{ y: leftY }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2
              id="about-heading"
              className="
                font-marcellus
                text-[clamp(2.6rem,4.5vw,5.5rem)]
                leading-[1.0]
                tracking-[-0.03em]
                text-obsidian
                text-balance
              "
            >
              We build the
              <br />
              ecosystem
              <br />
              where ideas
              <br />
              become
              <br />
              <em className="font-marcellus text-brand not-italic italic">ventures.</em>
            </h2>
          </motion.div>

          {/* ── RIGHT — Body copy ── */}
          <motion.div
            style={{ y: rightY, opacity: rightOpacity }}
            className="flex flex-col justify-center gap-7 lg:pt-4"
          >
            {/* Para 1 */}
            <p className="font-robotoMono text-[17px] leading-[1.75] text-obsidian">
              AIC-JKLU is a platform for innovators, entrepreneurs and early-stage
              startups to turn ambitious ideas into meaningful ventures.
            </p>

            {/* Para 2 */}
            <p className="font-robotoMono text-[16px] leading-[1.75] text-slateMuted">
              Backed by Atal Innovation Mission, NITI Aayog and JK Lakshmipat
              University, AIC-JKLU brings together mentorship, technology, design,
              industry connections and incubation support to help founders move from
              ideation to execution and growth.
            </p>

            {/* Para 3 */}
            <p className="font-robotoMono text-[16px] leading-[1.75] text-slateMuted">
              From building the first prototype to finding the right mentors,
              resources and market opportunities — we help founders take the next
              step.
            </p>

            {/* CTA link with Lucide Icon */}
            <Link
              href="/apply"
              className="
                group
                inline-flex
                items-center
                gap-2.5
                font-robotoMono
                text-[12px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-brand
                transition-colors
                duration-300
                hover:text-brandHover
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand
                focus-visible:ring-offset-2
                rounded-sm
                w-fit
                mt-2
                cursor-pointer
              "
            >
              Explore AIC-JKLU
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ================================================================
          PART 2 — BY THE NUMBERS BAND
          brand orange (#EB5725) background — metrics grid
      ================================================================ */}
      <div className="bg-brand px-6 lg:px-16 pt-12 pb-20 sm:pt-10 sm:pb-20 lg:pt-10 lg:pb-24">
        <div className="mx-auto max-w-screen-2xl">

          {/* Band heading */}
          <h3 className="
            font-marcellus
            text-[clamp(2rem,3.5vw,3.5rem)]
            leading-[1.1]
            tracking-[-0.025em]
            text-white
            mb-10
            lg:mb-12
          ">
            AIC-JKLU<br className="sm:hidden" />{' '}
            by the numbers.
          </h3>

          {/* Stats grid */}
          <div className="
            grid
            grid-cols-2
            gap-x-6
            gap-y-10
            lg:grid-cols-4
            lg:gap-x-0
          ">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                className="
                  relative
                  flex
                  flex-col
                  gap-3
                  lg:border-r
                  lg:border-white/20
                  lg:last:border-r-0
                  lg:pr-10
                  lg:pl-2
                  first:lg:pl-0
                "
              >
                {/* Index */}
                <span className="
                  font-robotoMono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/60
                ">
                  {stat.index}
                </span>

                {/* Label */}
                <span className="
                  font-robotoMono
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  text-white/70
                  whitespace-pre-line
                  leading-[1.6]
                ">
                  {stat.label}
                </span>

                {/* Value */}
                <span className="
                  font-marcellus
                  text-[clamp(3rem,5vw,5.5rem)]
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                ">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={i * 0.15}
                  />
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
