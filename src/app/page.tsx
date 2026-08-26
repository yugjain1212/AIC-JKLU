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
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Disable automatic browser scroll restoration to prevent landing halfway down on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Ensure initial scroll position is strictly 0 on fresh load without anchor hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    try {
      const seen = sessionStorage.getItem(SESSION_KEY) === 'true';
      if (!seen) {
        document.body.classList.add('is-loading');
        setShowPreloader(true);
      }
    } catch {
      // sessionStorage unavailable
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

        {/* Hero — Siena parallax: sticky + scale-down on scroll */}
        <Hero />

        {/* About section slides over the receding hero with seamless overlap */}
        <div className="relative z-10 -mt-[15vh]">
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
