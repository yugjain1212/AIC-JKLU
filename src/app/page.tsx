'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CompaniesSection from '@/components/CompaniesSection';
import CompaniesShowcase from '@/components/companies/CompaniesShowcase';
import TeamSection from '@/components/team/TeamSection';
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
          el.style.transitionDelay = `${delay}ms`;
          el.dataset.visible = 'true';
          observer.unobserve(el);
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
  // isLoaded starts false so the main content is opacity-0 from the very
  // first paint — no flash of content before the preloader appears.
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Disable automatic browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    try {
      const seen = sessionStorage.getItem(SESSION_KEY) === 'true';
      if (seen) {
        // Returning visitor — skip loader, reveal content immediately
        setIsLoaded(true);
      } else {
        // First visit / hard reload — show preloader
        document.body.classList.add('is-loading');
        setShowPreloader(true);
      }
    } catch {
      // sessionStorage unavailable — just reveal content
      setIsLoaded(true);
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
    setIsLoaded(true);
  };

  return (
    <>
      {/* ── Preloader ── */}
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {/* ── Main site ──
          opacity-0 + pointer-events-none until isLoaded is true.
          This is enforced from frame zero so the browser never paints
          the hero before the preloader is on screen. ── */}
      <main
        className={`min-h-screen bg-canvas transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Navbar is outside parallax — it's sticky and appears instantly */}
        <Navbar />

        {/* Hero — Siena parallax: sticky + scale-down on scroll */}
        <Hero />

        {/* About section slides over the receding hero with seamless overlap */}
        {/* Overlaps the hero by the established section rhythm without tying spacing to viewport height. */}
        <div className="relative z-10 -mt-24 sm:-mt-32 lg:-mt-40">
          <About />
        </div>

        {/* CompaniesSection — Siena card slides up over the About orange band */}
        <div className="relative z-20 -mt-[40px]">
          <CompaniesSection />
        </div>

        {/* CompaniesShowcase — Siena card slides up over CompaniesSection */}
        <div className="relative z-30 -mt-[40px]">
          <CompaniesShowcase />
        </div>

        {/* TeamSection — Siena card slides up over CompaniesShowcase */}
        <div className="relative z-40 -mt-[40px]">
          <TeamSection />
        </div>
      </main>
    </>
  );
}
