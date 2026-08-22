'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const TOTAL_BOXES = 10;
const LOAD_DURATION_MS = 2800; // total fill time

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);        // 0–100
  const [filledCount, setFilledCount] = useState(0);  // 0–TOTAL_BOXES
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Spring-smooth display value for the percentage counter
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, { stiffness: 60, damping: 18 });
  const [displayPct, setDisplayPct] = useState(0);

  useEffect(() => {
    smoothProgress.on('change', (v) => setDisplayPct(Math.round(v)));
  }, [smoothProgress]);

  // Drive the loading bar
  useEffect(() => {
    const stepMs = 60;
    const increment = 100 / (LOAD_DURATION_MS / stepMs);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        rawProgress.set(next);
        setFilledCount(Math.round((next / 100) * TOTAL_BOXES));
        if (next >= 100) {
          clearInterval(intervalRef.current!);
          setTimeout(() => setDone(true), 400);
        }
        return next;
      });
    }, stepMs);

    return () => clearInterval(intervalRef.current!);
  }, [rawProgress]);

  // Once the exit animation finishes, fire onComplete
  const handleExitComplete = () => onComplete();

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#FBF7F0] flex items-center justify-center overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label={`Loading AIC-JKLU — ${displayPct}%`}
        >
          {/* ── Subtle grid texture ── */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgb(255, 246, 246) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* ── Floating sticky notes (mirroring skiper-ui layout) ── */}



          {/* ── Floating logo sticker ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -12, y: 15 }}
            animate={{
            opacity: 1,  
            scale: 1,
            rotate: -12,
            y: 0,
            transition: {
            delay: 0.25,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
         },
        }}
        className="
          absolute
          top-[20%]
          left-[7%]
          w-32
          h-32
          sm:w-36
          sm:h-36
          bg-[#F5F5F0]
          rounded-[10px]
          p-4
          flex
          items-center
          justify-center
          shadow-[0_8px_25px_rgba(0,0,0,0.12)]
         "
        >
          <Image
            src="/logo.svg"
            alt="AIC-JKLU"
            width={100}
            height={100}
            priority
            className="w-full h-full object-contain"
          />
          </motion.div>

          {/* Top-right note */}
          <motion.div
            initial={{ opacity: 0, rotate: 4, y: 20 }}
            animate={{ opacity: 1, rotate: 4, y: 0, transition: { delay: 0.3, duration: 0.6 } }}
            className="absolute top-[14%] right-[12%] w-44 bg-[#f5f5f0] rounded-[13px] p-4 shadow-lg"
          >
            <p className="font-robotoMono text-[11px] uppercase leading-snug text-[#1a1a1a]">
              With ♥ from<br />Jaipur,<br />India
            </p>
          </motion.div>

          {/* Bottom-left note - high contrast white text on Jaipur orange */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, y: 20 }}
            animate={{ opacity: 1, rotate: -5, y: 0, transition: { delay: 0.45, duration: 0.6 } }}
            className="absolute bottom-[18%] left-[9%] w-44 bg-[#EB5725] rounded-[4px] p-4 shadow-lg"
          >
            <p className="font-robotoMono text-[11px] font-medium uppercase leading-snug text-white">
              Startups,<br />Founders,<br />Great Ideas
            </p>
            <p className="font-robotoMono text-[11px] font-medium uppercase leading-snug text-white/90 mt-3">
              Cohort<br />Fall 2026
            </p>
          </motion.div>

          {/* Bottom-right card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.6 } }}
            className="absolute bottom-[18%] right-[10%] w-56 bg-[#141414] border border-white/10 rounded-2xl p-5 shadow-lg"
          >
            <p className="font-robotoMono text-[10px] uppercase tracking-widest text-[#888] mb-2">
              Useful Info
            </p>
            <p className="font-robotoMono text-[12px] text-[#ccc] leading-relaxed">
              Seed capital, lab infrastructure &amp; hands-on mentorship for early-stage founders.
            </p>
          </motion.div>

          {/* ── Centre loader card ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
            className="relative z-10 w-[320px] sm:w-[360px] bg-[#111111] border border-white/[0.08] rounded-2xl px-6 py-5 shadow-2xl"
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-5">
              <span className="font-robotoMono text-[11px] uppercase tracking-widest text-[#ededed]">
                Loader
              </span>
              {/* Two decorative dots (mirroring skiper-ui card chrome) */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Box row */}
            <div className="flex items-center gap-[5px] mb-4">
              {Array.from({ length: TOTAL_BOXES }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={
                    i < filledCount
                      ? { scale: 1, opacity: 1, backgroundColor: '#C84214' }
                      : { scale: 1, opacity: 1, backgroundColor: '#FBF7F0' }
                  }
                  transition={{ duration: 0.18, ease: 'easeOut', delay: i * 0.09 }}
                  className="h-[34px] flex-1 rounded-[6px]"
                />
              ))}
            </div>

            {/* Percentage */}
            <div className="flex justify-end">
              <span className="font-robotoMono text-[13px] text-[#ededed]">
                {displayPct}%
              </span>
            </div>
          </motion.div>

          {/* ── AIC-JKLU wordmark at bottom-centre ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <span className="font-marcellus text-[15px] tracking-widest text-white/20 uppercase">
              AIC-JKLU
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
