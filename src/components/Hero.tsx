'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.2,
    restDelta: 0.0001,
  });

  const scale = useTransform(smoothProgress, [0, 0.85], [1, 0.88]);
  const borderRadius = useTransform(smoothProgress, [0, 0.85], [0, 36]);
  const opacity = useTransform(smoothProgress, [0, 0.6, 1], [1, 0.9, 0.3]);
  const headlineY = useTransform(smoothProgress, [0, 1], [0, -60]);
  const subheadY = useTransform(smoothProgress, [0, 1], [0, -30]);
  const subheadOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const indicatorOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const indicatorScale = useTransform(smoothProgress, [0, 0.25], [1, 0.7]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: '150vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{
            scale,
            borderRadius,
            opacity,
          }}
          className="relative h-full w-full origin-center bg-canvas shadow-2xl transition-shadow duration-500 will-change-transform"
        >
          <section className="relative flex h-full w-full flex-col justify-between px-6 py-12 lg:px-16">
            <div className="my-auto flex w-full justify-center">
              <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center text-center">
                <motion.h1
                  style={{ y: headlineY }}
                  className="max-w-6xl select-none font-marcellus text-[clamp(3rem,5vw,6rem)] leading-[0.95] tracking-[-0.05em] text-obsidian"
                >
                  Innovate Beyond
                  <br />
                  <em className="font-normal text-brand not-italic">
                    Limits
                  </em>
                </motion.h1>

                <motion.p
                  style={{ y: subheadY, opacity: subheadOpacity }}
                  className="mt-8 max-w-5xl font-robotoMono text-lg leading-relaxed text-slateMuted sm:text-xl lg:text-1.5xl"
                >
                  Welcome to Atal Incubation Centre,
                  <br className="hidden sm:block" />
                  Supported by NITI Aayog
                </motion.p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
