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
  // null = not yet determined (server/first paint), true = show preloader, false = skip it
  const [showPreloader, setShowPreloader] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(SESSION_KEY) === 'true';
      if (!seen) {
        document.body.classList.add('is-loading');
        setShowPreloader(true);
      } else {
        setShowPreloader(false);
      }
    } catch {
      setShowPreloader(true);
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

  // Still determining — render nothing so there is zero flash of the hero
  if (showPreloader === null) return null;

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
    </>
  );
}
