'use client';

import { useLayoutEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function F6sIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.5 3h17A1.5 1.5 0 0 1 22 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 19.5v-15A1.5 1.5 0 0 1 3.5 3zM6.8 6.5v11h2.5v-4.2h3.8v-2.2H9.3V8.8h4.5V6.5H6.8zm7.8 4.2c-.8 0-1.5.7-1.5 1.5v3.6c0 .8.7 1.5 1.5 1.5h2.8c.8 0 1.5-.7 1.5-1.5v-1.6c0-.8-.7-1.5-1.5-1.5h-2v-.6h2.2V10.7h-3zm.8 3.8h1.2v1.2h-1.2v-1.2z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5V10.13H5.07V18.5h2.79z" />
    </svg>
  );
}

function TwitterIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // ── GSAP ScrollTrigger Transition Choreography ─────────────────────────────
  useLayoutEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const footerEl = footerRef.current;
      const bgEl = bgWrapperRef.current;
      const circleEl = circleRef.current;
      const contentEl = contentRef.current;
      const giantTextEl = giantTextRef.current;

      if (!footerEl || !bgEl || !contentEl || !giantTextEl) return;

      // Master Timeline scrubbed from Team section bottom into Footer
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerEl,
          start: 'top 85%',
          end: 'bottom bottom',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // 1. Team Section subtle elevation & scale
      const teamSection = document.getElementById('team');
      if (teamSection) {
        tl.fromTo(
          teamSection,
          { y: 0, scale: 1, opacity: 1 },
          { y: -35, scale: 0.975, opacity: 0.85, ease: 'power1.out' },
          0
        );
      }

      // 2. Footer background expand and rise
      tl.fromTo(
        bgEl,
        { opacity: 0.5, scaleY: 0.9, transformOrigin: 'top center' },
        { opacity: 1, scaleY: 1, ease: 'none' },
        0
      );

      // 3. Central Ambient Decorative Circle expansion
      if (circleEl) {
        tl.fromTo(
          circleEl,
          { scale: 0.65, opacity: 0.2 },
          { scale: 1.15, opacity: 0.85, ease: 'power2.out' },
          0
        );
      }

      // 4. Footer 3-column content & CTA rise
      tl.fromTo(
        contentEl,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.08
      );

      // 5. Giant Editorial "LET'S BUILD THE FUTURE" rise with clip-path
      tl.fromTo(
        giantTextEl,
        {
          y: 60,
          opacity: 0.2,
          clipPath: 'inset(100% 0% 0% 0%)',
          x: -15,
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          x: 0,
          ease: 'power2.out',
        },
        0.15
      );
    }, footerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      aria-label="Footer & Contact"
      className="relative z-50 w-full overflow-hidden select-none bg-[#EB5725] text-obsidian rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[60px] shadow-[0_-25px_60px_rgba(235,87,37,0.25)] border-t border-black/10 -mt-10 sm:-mt-14"
    >
      {/* ── Background Scale/Wrapper ── */}
      <div
        ref={bgWrapperRef}
        className="relative w-full h-full pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-14 flex flex-col justify-between"
      >
        {/* ── Decorative Subtle Ambient Circle behind CTA ── */}
        <div
          ref={circleRef}
          aria-hidden="true"
          className="absolute top-[-10%] sm:top-[-15%] left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[680px] md:h-[680px] rounded-full bg-gradient-to-b from-black/[0.07] to-transparent pointer-events-none blur-[1px] mix-blend-multiply will-change-transform"
        />

        {/* ── Top Footer Content: Contact, CTA, Location & Socials ── */}
        <div
          ref={contentRef}
          className="relative z-10 max-w-[1360px] mx-auto w-full px-6 sm:px-10 lg:px-14 will-change-transform"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start justify-between">
            {/* ── Left Column: Contact info ── */}
            <div className="md:col-span-4 flex flex-col items-start space-y-4">
              <span className="font-robotoMono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-black/70 font-medium">
                Contact
              </span>

              <div className="space-y-2">
                <div>
                  <a
                    href="mailto:info@aicjklu.in"
                    className="group/link inline-flex flex-col font-robotoMono text-[17px] sm:text-[19px] md:text-[21px] font-medium text-obsidian tracking-tight transition-transform duration-300 hover:translate-x-1 focus-visible:outline-black"
                  >
                    <span>info@aicjklu.in</span>
                    <span className="h-[1.5px] w-0 bg-obsidian transition-all duration-300 ease-out group-hover/link:w-full" />
                  </a>
                </div>

                <div>
                  <a
                    href="tel:0141-7107-589"
                    className="group/phone inline-flex flex-col font-robotoMono text-[15px] sm:text-[17px] md:text-[18px] text-obsidian/90 tracking-tight transition-transform duration-300 hover:translate-x-1 focus-visible:outline-black"
                  >
                    <span>0141-7107-589</span>
                    <span className="h-[1px] w-0 bg-obsidian/60 transition-all duration-300 ease-out group-hover/phone:w-full" />
                  </a>
                </div>
              </div>
            </div>

            {/* ── Center Column: Editorial CTA & Pill Button ── */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-5 md:space-y-6">
              <h2 className="font-marcellus text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-bold leading-[1.16] tracking-[-0.02em] text-[#121212] max-w-[420px]">
                Have a project? Let’s build something amazing.
              </h2>

              <motion.a
                href="mailto:info@aicjklu.in"
                whileHover={{ scale: 1.035 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="group/btn inline-flex items-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#121212] text-[#FBF7F0] font-robotoMono text-[13px] sm:text-[14px] font-medium tracking-wide shadow-[0_8px_20px_rgba(0,0,0,0.22)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.32)] transition-all duration-300"
              >
                <span>Let’s collaborate</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5" />
              </motion.a>
            </div>

            {/* ── Right Column: Location & Social Links ── */}
            <div className="md:col-span-4 flex flex-col md:items-end space-y-7">
              {/* Location */}
              <div className="flex flex-col md:items-end space-y-2">
                <span className="font-robotoMono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-black/70 font-medium">
                  Location
                </span>
                <p className="font-robotoMono text-[13px] sm:text-[14px] font-medium text-obsidian leading-snug md:text-right">
                  JK Lakshmipat University, Jaipur, Rajasthan, 302026
                  <br />
                  India
                </p>
              </div>

              {/* Socials */}
              <div className="flex flex-col md:items-end space-y-3">
                <span className="font-robotoMono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-black/70 font-medium">
                  Follow me
                </span>

                <nav aria-label="Social media profiles" className="flex items-center gap-4 sm:gap-5">
                  {[
                    {
                      name: 'F6s',
                      icon: F6sIcon,
                      url: 'https://www.f6s.com/atalincubation-jklu',
                    },
                    {
                      name: 'LinkedIn',
                      icon: LinkedinIcon,
                      url: 'https://www.linkedin.com/company/aic-jklu/',
                    },
                    {
                      name: 'Youtube',
                      icon: YoutubeIcon,
                      url: 'https://www.youtube.com/@aic-jklufoundation4581',
                    },
                    {
                      name: 'Instagram',
                      icon: InstagramIcon,
                      url: 'https://www.instagram.com/aicjklu_/',
                    },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${social.name}`}
                        className="group/social text-obsidian transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:rotate-[3deg] focus-visible:outline-black"
                      >
                        <Icon className="w-[19px] h-[19px] sm:w-[21px] sm:h-[21px] transition-colors duration-200 group-hover/social:text-black" />
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* ── Metadata Row: Copyright, Purpose, Back to top ── */}
          <div className="mt-14 sm:mt-20 pt-6 sm:pt-7 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="font-robotoMono text-[11px] sm:text-[12px] text-black/75 tracking-tight">
              © Copyright 2026 AIC-JKLU. All rights reserved.
            </div>

            <div className="font-robotoMono text-[11px] sm:text-[12px] text-black/75 tracking-tight font-normal">
              Built with passion & purpose.
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="group/top inline-flex items-center gap-1.5 font-robotoMono text-[11px] sm:text-[12px] text-black/80 font-medium tracking-tight transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-black cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/top:-translate-y-0.5 group-hover/top:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* ── Giant Editorial Centerpiece Typography (Full Viewport Fit) ── */}
        <div
          ref={giantTextRef}
          aria-hidden="true"
          className="relative z-10 w-full select-none pointer-events-none mt-6 sm:mt-10 lg:mt-12 px-4 sm:px-6 md:px-10 text-center will-change-transform"
        >
          <svg
            viewBox="0 0 1440 145"
            className="w-full h-auto max-h-[190px] overflow-visible"
            fill="#121212"
          >
            <text
              x="50%"
              y="82%"
              textAnchor="middle"
              className="font-marcellus uppercase"
              style={{
                fontSize: '110px',
                fontWeight: 900,
                letterSpacing: '-0.035em',
              }}
            >
              LET’S BUILD THE FUTURE
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
