'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CompaniesSection from '@/components/CompaniesSection';
import CompaniesShowcase from '@/components/companies/CompaniesShowcase';
import TeamSection from '@/components/team/TeamSection';
import Preloader from '@/components/Preloader';

const SESSION_KEY = 'aic_intro_shown';

// ── Parallax section wrapper ───────────────────────────────────────────────
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

// ── sessionStorage helper (client-only) ───────────────────────────────────
function hasSeenPreloader(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function Home() {
  // Render the loader in the initial HTML. Previously, the main site was
  // rendered transparent while the loader was only mounted in an effect,
  // which left a visible blank page until JavaScript had started running.
  const [showPreloader, setShowPreloader] = useState(true);

  // Remove it for a returning visitor before the browser can paint it.
  useLayoutEffect(() => {
    if (hasSeenPreloader()) {
      setShowPreloader(false);
      return;
    }

    // First visit: keep the loader already present in the initial HTML.
    document.body.classList.add('is-loading');
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (!window.location.hash) window.scrollTo(0, 0);
    return () => document.body.classList.remove('is-loading');
  }, []);

  const handlePreloaderComplete = () => {
    try { sessionStorage.setItem(SESSION_KEY, 'true'); } catch { /* ignore */ }
    document.body.classList.remove('is-loading');
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <main
        className="min-h-screen bg-canvas"
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
