'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Preloader from '@/components/Preloader';

// ── Parallax section wrapper ───────────────────────────────────────────────
// Each section fades + slides up as it enters the viewport
function ParallaxSection({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small stagger via CSS custom property
          el.style.transitionDelay = `${delay}ms`;
          el.dataset.visible = 'true';
          observer.unobserve(el); // fire once
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`parallax-section ${className}`}>
      {children}
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // Lock scroll while preloader is active
  useEffect(() => {
    document.body.classList.add('is-loading');
  }, []);

  const handlePreloaderComplete = () => {
    document.body.classList.remove('is-loading');
    setLoaded(true);
  };

  return (
    <>
      {/* ── Preloader ── */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* ── Main site — revealed after preloader exits ── */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            key="site"
            initial={{ opacity: 0, y: 24 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <main className="min-h-screen bg-canvas">
              {/* Navbar is outside parallax — it's sticky and should appear instantly */}
              <Navbar />

              {/* Hero — Siena parallax: sticky + scale-down on scroll */}
              <Hero />

              {/* About section slides over the receding hero with seamless overlap */}
              <div className="relative z-10 -mt-[15vh]">
                <About />
              </div>

              <div className="relative z-10 bg-canvas">
              <ParallaxSection delay={0}>
                <footer className="bg-surface border-t border-hairline py-8 px-6">
                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="font-marcellus text-[18px] text-obsidian">
                      AIC-JKLU
                    </div>
                    <div className="font-robotoMono text-[11px] text-slateMuted">
                      © 2026 Atal Incubation Centre – JK Lakshmipat University. Supported by NITI Aayog.
                    </div>
                  </div>
                </footer>
              </ParallaxSection>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
