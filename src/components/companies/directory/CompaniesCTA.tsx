'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CompaniesCTA() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#FFF2ED] overflow-hidden border-t border-[#E4E4E0]">
      {/* ── Background Subtle Line-Art Vectors ── */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none text-[#EB5725]/12"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1" />
        <path d="M 20 200 L 380 200 M 200 20 L 200 380" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12">
          {/* Left: Heading & Eyebrow */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EB5725]" />
              <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
                BE PART OF WHAT&apos;S NEXT
              </span>
            </div>

            <h2 className="font-marcellus text-[38px] sm:text-[48px] lg:text-[52px] leading-[1.02] tracking-[-0.03em] text-[#121212] mb-4 font-bold">
              Join the AIC-JKLU <span className="text-[#EB5725]">Ecosystem.</span>
            </h2>

            <p className="font-robotoMono text-[13px] sm:text-[14px] leading-[1.8] text-[#52525B] max-w-xl">
              Apply, collaborate, or support startups building for a better tomorrow. Whether you are a founder, mentor, or investor, there is a place for you.
            </p>
          </div>

          {/* Right: CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/apply"
              className="
                group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl
                bg-[#EB5725] hover:bg-[#C84214] text-white
                font-robotoMono text-[12px] font-bold uppercase tracking-[0.16em]
                shadow-[0_6px_20px_rgba(235,87,37,0.28)] hover:shadow-[0_8px_26px_rgba(235,87,37,0.4)]
                hover:-translate-y-0.5 transition-all duration-200 cursor-pointer
              "
            >
              <span>Get Involved</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/#contact"
              className="
                inline-flex items-center gap-2 px-6 py-4 rounded-xl
                border border-[#121212]/20 hover:border-[#121212] bg-transparent
                font-robotoMono text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#121212]
                hover:bg-white transition-all duration-200 cursor-pointer
              "
            >
              Contact Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
