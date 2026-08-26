'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  PARTNER_CATEGORIES,
  PARTNERS_DATA,
  type Partner,
  type PartnerCategory,
} from '@/data/partners';

// =========================================================================
// VECTOR BRAND LOGO PLACEHOLDER BADGES
// High-precision vector typography / SVG marks matching the reference logos
// =========================================================================
function PartnerLogoSlot({ partner }: { partner: Partner }) {
  if (partner.image) {
    return (
      <Image
        src={partner.image}
        alt={partner.name}
        width={140}
        height={50}
        className="max-h-11 w-auto object-contain"
      />
    );
  }

  // Render stylized, accurate vector logo placeholders matching reference
  switch (partner.logoType) {
    case 'tata':
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full border-[2.5px] border-[#00539B] flex items-center justify-center mb-1">
            <span className="font-sans font-black text-[#00539B] text-[13px] leading-none tracking-tighter">
              T
            </span>
          </div>
          <span className="font-sans font-bold text-[#00539B] text-[15px] tracking-[0.25em] leading-none uppercase">
            TATA
          </span>
        </div>
      );

    case 'microsoft':
      return (
        <div className="flex items-center gap-2.5">
          <div className="grid grid-cols-2 gap-1 w-5 h-5 shrink-0">
            <div className="bg-[#F25022] w-full h-full" />
            <div className="bg-[#7FBA00] w-full h-full" />
            <div className="bg-[#00A4EF] w-full h-full" />
            <div className="bg-[#FFB900] w-full h-full" />
          </div>
          <span className="font-sans font-semibold text-[#5E5E5E] text-[17px] tracking-tight">
            Microsoft
          </span>
        </div>
      );

    case 'google':
      return (
        <div className="flex items-center font-sans font-semibold text-[21px] tracking-tight">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
      );

    case 'aws':
      return (
        <div className="flex flex-col items-center">
          <span className="font-sans font-extrabold text-[#232F3E] text-[20px] tracking-tighter leading-none lowercase">
            aws
          </span>
          <svg width="40" height="9" viewBox="0 0 40 9" fill="none" className="-mt-0.5">
            <path
              d="M 2 3 Q 20 10 38 3"
              stroke="#FF9900"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M 35 1 L 38 3 L 34 5 Z" fill="#FF9900" />
          </svg>
        </div>
      );

    case 'iiit':
      return (
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 font-sans font-black text-[#003B70] text-[22px] tracking-tighter leading-none">
            <span className="text-[#008080]">ii</span>
            <span>iT</span>
          </div>
          <span className="font-robotoMono text-[8.5px] font-bold text-[#003B70] tracking-[0.18em] uppercase">
            ALLAHABAD
          </span>
        </div>
      );

    case 'bits':
      return (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#002B49] text-[#FFCC00] flex items-center justify-center font-bold text-[10px] shrink-0">
            BITS
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-extrabold text-[#002B49] text-[13px] leading-tight">
              BITS Pilani
            </span>
            <span className="font-robotoMono text-[8.5px] text-[#71717A] leading-tight">
              Pilani Campus
            </span>
          </div>
        </div>
      );

    case 'deloitte':
      return (
        <div className="flex items-baseline font-sans font-bold text-[#121212] text-[20px] tracking-tight">
          <span>Deloitte</span>
          <span className="text-[#86BC25] text-[24px] leading-none ml-0.5">.</span>
        </div>
      );

    case 'sequoia':
      return (
        <div className="flex items-center gap-2">
          <span className="font-serif font-black text-[#005A36] text-[18px] tracking-wider uppercase">
            SEQUOIA
          </span>
          <span className="text-emerald-700 text-lg">🌲</span>
        </div>
      );

    case 'ian':
      return (
        <div className="flex items-center gap-1.5 font-sans font-bold text-[#C41230] text-[13px] tracking-tight">
          <span className="text-[22px] font-serif italic text-[#C41230]">iA</span>
          <span className="font-robotoMono text-[10px] text-[#121212] tracking-wider uppercase">
            Indian Angel Network
          </span>
        </div>
      );

    case 'nasscom':
      return (
        <div className="flex items-baseline font-sans font-black text-[#ED1C24] text-[17px] tracking-wider uppercase">
          <span>NASSCOM</span>
          <span className="text-[10px] font-normal align-top ml-0.5">®</span>
        </div>
      );

    case 'startup-rajasthan':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-gradient-to-tr from-[#FF6F00] via-[#FF8F00] to-[#FFC107] flex items-center justify-center text-white text-[10px] font-bold">
            ★
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#121212] text-[11.5px] leading-tight uppercase tracking-wider">
              STARTUP
            </span>
            <span className="font-robotoMono text-[8.5px] font-bold text-[#FF6F00] leading-tight uppercase tracking-widest">
              RAJASTHAN
            </span>
          </div>
        </div>
      );

    case 'tie':
      return (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#ED1B2D] text-white flex items-center justify-center font-sans font-black text-[13px] rounded-sm">
            TiE
          </div>
          <span className="font-robotoMono text-[9.5px] font-bold text-[#121212] uppercase tracking-widest">
            RAJASTHAN
          </span>
        </div>
      );

    case 'headstart':
      return (
        <div className="flex items-center gap-2 font-sans font-bold text-[#F26522] text-[14px] tracking-wider uppercase">
          <span className="text-base font-black">✦</span>
          <span>HEADSTART</span>
        </div>
      );

    default:
      return (
        <span className="font-robotoMono font-bold text-[14px] text-[#121212] uppercase tracking-wider">
          {partner.name}
        </span>
      );
  }
}

export default function PartnersLogoSection() {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>('ALL');

  const filteredPartners =
    selectedCategory === 'ALL'
      ? PARTNERS_DATA
      : PARTNERS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden select-none">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        
        {/* ── MAIN CONTENT AREA (Left Headline + Asymmetric Logo Network) ── */}
        <div className="relative">
          
          {/* ── GIANT BACKGROUND WATERMARK "TOGETHER" ── */}
          <div
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              pointer-events-none select-none z-0 overflow-hidden w-full text-center
            "
            aria-hidden="true"
          >
            <span
              className="
                font-marcellus
                text-[clamp(5rem,15vw,14rem)]
                leading-none
                tracking-[0.14em]
                text-[#121212]/[0.025]
                whitespace-nowrap uppercase font-light
              "
              style={{
                WebkitTextStroke: '1px rgba(18, 18, 18, 0.04)',
              }}
            >
              TOGETHER
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
            
            {/* ── LEFT SIDEBAR: Heading & Dot Matrix ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-3 flex flex-col items-start"
            >
              <h2 className="font-marcellus text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.04] tracking-[-0.03em] text-[#121212] mb-4 sm:mb-5">
                Our
                <br />
                <span className="text-[#EB5725]">Partners</span>
              </h2>

              <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.75] text-[#52525B] max-w-[280px] mb-8">
                A diverse network of partners who share our vision of impact, innovation and inclusive growth.
              </p>

              {/* 5x3 Dot Matrix Pattern */}
              <div className="grid grid-cols-5 gap-2.5 opacity-55" aria-hidden="true">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-[#EB5725]' : 'bg-[#D1C7B7]'}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT MAIN AREA: Asymmetric Editorial Network Logo Grid ── */}
            <div className="lg:col-span-9">
              <motion.div
                layout
                className="
                  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                  gap-4 sm:gap-5 lg:gap-6
                  items-stretch
                "
              >
                <AnimatePresence mode="popLayout">
                  {filteredPartners.map((partner, index) => {
                    // Staggering spans for an asymmetric network aesthetic
                    const isWide = index === 1 || index === 6 || index === 9;

                    return (
                      <motion.div
                        key={partner.id}
                        layout
                        initial={{ opacity: 0, scale: 0.92, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`
                          ${isWide ? 'sm:col-span-2' : 'col-span-1'}
                          group
                          relative
                          rounded-[20px]
                          bg-white/90
                          backdrop-blur-sm
                          border border-[#E4E4E0]
                          p-6 sm:p-7
                          h-[130px] sm:h-[140px]
                          flex flex-col items-center justify-center
                          shadow-[0_4px_20px_rgba(0,0,0,0.025)]
                          hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]
                          hover:border-[#EB5725]/50
                          hover:-translate-y-1
                          transition-all duration-300
                          cursor-pointer
                        `}
                      >
                        {/* ── LOGO SLOT (Grayscale by default → Original color on hover) ── */}
                        <div className="
                          w-full h-full
                          flex items-center justify-center
                          grayscale opacity-80
                          group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105
                          transition-all duration-300
                        ">
                          <PartnerLogoSlot partner={partner} />
                        </div>

                        {/* ── SUBTLE HOVER TOOLTIP / CATEGORY INDICATOR ── */}
                        <div className="
                          absolute bottom-2.5 inset-x-4
                          flex items-center justify-center
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-200
                          pointer-events-none
                        ">
                          <span className="
                            font-robotoMono text-[9px] font-bold uppercase tracking-[0.2em]
                            text-[#EB5725]
                          ">
                            {partner.category}
                          </span>
                        </div>

                        {/* Subtle Corner Crosshairs Accent */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-60 text-[#EB5725] text-[10px] font-mono transition-opacity duration-200">
                          +
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>

              {/* ── BOTTOM LINK: Explore All Partners ── */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-12 sm:pt-14 flex items-center justify-center"
              >
                <Link
                  href="/apply?type=partner"
                  className="
                    group inline-flex items-center gap-2
                    font-robotoMono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em]
                    text-[#EB5725] hover:text-[#C84214]
                    transition-colors duration-200
                  "
                >
                  <span>EXPLORE ALL PARTNERS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
