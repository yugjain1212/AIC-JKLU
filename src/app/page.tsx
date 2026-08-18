'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';

const SESSION_KEY = 'aic_intro_shown';

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
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(SESSION_KEY) === 'true';
      if (!seen) {
        setShowPreloader(true);
        document.body.classList.add('is-loading');
      }
    } catch {
      // ignore
    }

    return () => {
      document.body.classList.remove('is-loading');
    };
  }, []);

  const handlePreloaderComplete = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {
      // ignore
    }
    document.body.classList.remove('is-loading');
    setShowPreloader(false);
  };

  return (
    <>
      {/* ── Preloader (only shown once per browser session, client-mounted) ── */}
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {/* ── Main site — always rendered consistently on server and client ── */}
      <main className="min-h-screen bg-canvas">
        {/* Navbar is outside parallax — it's sticky and appears instantly */}
        <Navbar />

        {/* Each section gets a staggered parallax reveal */}
        <ParallaxSection delay={0}>
          <Hero />
        </ParallaxSection>

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
      </main>
    </>
  );
}
