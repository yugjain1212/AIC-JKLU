'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Partner } from '@/data/partners';

export function PartnerLogoSlot({ partner }: { partner: Partner }) {
  if (partner.image) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-1">
        <Image
          src={partner.image}
          alt={partner.name}
          width={130}
          height={45}
          className="max-h-[34px] sm:max-h-[38px] max-w-[115px] sm:max-w-[130px] w-auto h-auto object-contain mix-blend-multiply"
        />
      </div>
    );
  }

  switch (partner.logoType) {
    // ── GOVERNMENT ──
    case 'niti-aayog':
      return (
        <div className="flex items-center gap-2 select-none">
          <div className="w-8 h-8 rounded-full border-[2px] border-[#003366] flex items-center justify-center shrink-0 bg-[#003366]/5">
            <span className="font-serif font-black text-[#003366] text-[11px] leading-none">
              नीति
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#003366] text-[12.5px] leading-tight tracking-wide">
              NITI Aayog
            </span>
            <span className="font-robotoMono text-[7.5px] font-semibold text-[#52525B] leading-tight tracking-wider uppercase">
              Govt. of India
            </span>
          </div>
        </div>
      );

    case 'atal-innovation-mission':
      return (
        <div className="flex items-center gap-2 select-none">
          <div className="w-7 h-7 rounded-sm bg-[#EB5725] text-white flex items-center justify-center font-sans font-black text-[13px] shadow-sm shrink-0">
            ▲
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#121212] text-[11.5px] leading-none tracking-tight uppercase">
              AIM
            </span>
            <span className="font-robotoMono text-[8px] font-bold text-[#EB5725] leading-tight tracking-wider uppercase">
              Atal Innovation Mission
            </span>
          </div>
        </div>
      );

    case 'startup-india':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="flex items-baseline font-sans font-black text-[14.5px] tracking-tight text-[#00539B]">
            <span>Startup</span>
            <span className="text-[#EB5725] ml-0.5">India</span>
          </div>
          <span className="text-[9px] font-bold text-[#52525B] px-1 py-0.5 rounded bg-gray-100 uppercase tracking-wider font-mono">
            DPIIT
          </span>
        </div>
      );

    case 'startup-rajasthan':
      return (
        <div className="flex items-center gap-2 select-none">
          <div className="w-6 h-6 rounded bg-gradient-to-tr from-[#FF6F00] via-[#FF8F00] to-[#FFC107] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
            ★
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#121212] text-[11px] leading-tight uppercase tracking-wider">
              STARTUP
            </span>
            <span className="font-robotoMono text-[8px] font-bold text-[#FF6F00] leading-tight uppercase tracking-widest">
              RAJASTHAN
            </span>
          </div>
        </div>
      );

    case 'doitc':
      return (
        <div className="flex flex-col items-center text-center select-none">
          <span className="font-sans font-black text-[#1A365D] text-[13px] tracking-wider leading-none uppercase">
            DoIT&amp;C
          </span>
          <span className="font-robotoMono text-[8px] font-medium text-[#52525B] tracking-widest uppercase mt-0.5">
            RAJASTHAN
          </span>
        </div>
      );

    case 'msme':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-6 h-6 rounded-full bg-[#2B6CB0] flex items-center justify-center text-white font-bold text-[9px] shrink-0">
            M
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-extrabold text-[#121212] text-[12px] leading-none uppercase tracking-wide">
              MSME
            </span>
            <span className="font-robotoMono text-[7.5px] text-[#71717A] leading-tight uppercase tracking-wider">
              Ministry of MSME
            </span>
          </div>
        </div>
      );

    case 'seed-fund':
      return (
        <div className="flex flex-col items-center text-center select-none">
          <span className="font-sans font-black text-[#121212] text-[12px] tracking-tight uppercase leading-none">
            SEED FUND
          </span>
          <span className="font-robotoMono text-[8px] font-bold text-[#EB5725] tracking-widest uppercase mt-0.5">
            SCHEME
          </span>
        </div>
      );

    case 'istart':
      return (
        <div className="flex items-baseline font-sans font-bold text-[15px] tracking-tight select-none">
          <span className="text-[#EB5725] font-black italic">i</span>
          <span className="text-[#121212] font-black tracking-tight">START</span>
          <span className="font-robotoMono text-[8px] text-[#52525B] ml-1 font-normal uppercase">
            RAJASTHAN
          </span>
        </div>
      );

    // ── INVESTORS ──
    case 'ian':
      return (
        <div className="flex items-center gap-1.5 font-sans font-bold text-[#C41230] select-none">
          <span className="text-[20px] font-serif italic text-[#C41230] leading-none">iA</span>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[10.5px] text-[#C41230] leading-tight uppercase tracking-wide">
              Indian Angel
            </span>
            <span className="font-robotoMono text-[8.5px] text-[#121212] tracking-wider uppercase leading-none">
              Network
            </span>
          </div>
        </div>
      );

    case 'social-alpha':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-5 h-5 rounded-full bg-[#E65100] flex items-center justify-center text-white font-serif font-black text-[10px] shrink-0">
            α
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#121212] text-[11.5px] leading-tight uppercase tracking-tight">
              Social Alpha
            </span>
            <span className="font-robotoMono text-[7.5px] text-[#71717A] leading-none uppercase">
              Venture Platform
            </span>
          </div>
        </div>
      );

    case 'warmup-ventures':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <span className="font-sans font-black text-[#EB5725] text-[13.5px] tracking-tight">
            WARMUP
          </span>
          <span className="font-robotoMono text-[9.5px] font-semibold text-[#121212] uppercase tracking-wider">
            Ventures
          </span>
        </div>
      );

    case 'arthayan':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <span className="font-serif font-bold text-[#1E3A8A] text-[15px] tracking-wider">
            ARTHAYAN
          </span>
        </div>
      );

    case 'sinbex':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0D9488]" />
          <span className="font-sans font-black text-[#0D9488] text-[14px] tracking-wider uppercase">
            SINBEX
          </span>
        </div>
      );

    // ── TECHNOLOGY & CORPORATE ──

    case 'aws':
      return (
        <div className="flex flex-col items-center select-none">
          <span className="font-sans font-extrabold text-[#232F3E] text-[16px] tracking-tighter leading-none lowercase">
            aws
          </span>
          <svg width="32" height="7" viewBox="0 0 40 9" fill="none" className="-mt-0.5">
            <path
              d="M 2 3 Q 20 10 38 3"
              stroke="#FF9900"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path d="M 35 1 L 38 3 L 34 5 Z" fill="#FF9900" />
          </svg>
        </div>
      );

    case 'hdfc-bank':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-5 h-5 bg-[#004C8F] text-white flex items-center justify-center font-bold text-[9px] rounded-sm shrink-0">
            H
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#004C8F] text-[11px] leading-none uppercase">
              HDFC BANK
            </span>
            <span className="font-robotoMono text-[7.5px] text-[#EB5725] font-semibold tracking-wider uppercase">
              Parivartan
            </span>
          </div>
        </div>
      );

    case 'wadhwani':
      return (
        <div className="flex flex-col items-center text-center select-none">
          <span className="font-serif font-black text-[#B91C1C] text-[12px] tracking-wider uppercase leading-tight">
            WADHWANI
          </span>
          <span className="font-robotoMono text-[7.5px] text-[#52525B] tracking-widest uppercase">
            FOUNDATION
          </span>
        </div>
      );

    case 'iima-ventures':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-6 h-6 rounded-full bg-[#991B1B] text-white flex items-center justify-center font-bold text-[9px] shrink-0">
            IIMA
          </div>
          <span className="font-sans font-black text-[#121212] text-[11.5px] uppercase tracking-tight">
            VENTURES
          </span>
        </div>
      );

    case 'springboard':
      return (
        <div className="flex items-center gap-1 font-sans font-extrabold text-[#2563EB] text-[13px] tracking-tight select-none">
          <span className="text-base leading-none">↗</span>
          <span>Springboard</span>
        </div>
      );

    case 'bank-of-india':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-5 h-5 bg-[#C2410C] text-white flex items-center justify-center font-bold text-[8px] rounded-full shrink-0">
            BOI
          </div>
          <span className="font-sans font-black text-[#121212] text-[11px] uppercase tracking-tight">
            Bank of India
          </span>
        </div>
      );

    // ── ECOSYSTEM ──
    case 'bits':
      return (
        <div className="flex items-center gap-2 select-none">
          <div className="w-6 h-6 rounded-full bg-[#002B49] text-[#FFCC00] flex items-center justify-center font-bold text-[8.5px] shrink-0">
            BITS
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-extrabold text-[#002B49] text-[11.5px] leading-tight">
              BITS Pilani
            </span>
            <span className="font-robotoMono text-[7.5px] text-[#71717A] leading-tight">
              Pilani Campus
            </span>
          </div>
        </div>
      );

    case 'iiit':
      return (
        <div className="flex flex-col items-center text-center select-none">
          <div className="flex items-center gap-0.5 font-sans font-black text-[#003B70] text-[16px] tracking-tighter leading-none">
            <span className="text-[#008080]">ii</span>
            <span>iT</span>
          </div>
          <span className="font-robotoMono text-[7.5px] font-bold text-[#003B70] tracking-[0.18em] uppercase mt-0.5">
            ALLAHABAD
          </span>
        </div>
      );

    case 'nasscom':
      return (
        <div className="flex items-baseline font-sans font-black text-[#ED1C24] text-[14px] tracking-wider uppercase select-none">
          <span>NASSCOM</span>
          <span className="text-[8px] font-normal align-top ml-0.5">®</span>
        </div>
      );

    case 'tie':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-6 h-6 bg-[#ED1B2D] text-white flex items-center justify-center font-sans font-black text-[11px] rounded-sm shrink-0">
            TiE
          </div>
          <span className="font-robotoMono text-[8.5px] font-bold text-[#121212] uppercase tracking-widest">
            RAJASTHAN
          </span>
        </div>
      );

    case 'headstart':
      return (
        <div className="flex items-center gap-1.5 font-sans font-bold text-[#F26522] text-[12.5px] tracking-wider uppercase select-none">
          <span className="text-sm font-black">✦</span>
          <span>HEADSTART</span>
        </div>
      );

    case 'aic-raise':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-6 h-6 rounded bg-[#0284C7] text-white flex items-center justify-center font-black text-[9px] shrink-0">
            AIC
          </div>
          <span className="font-sans font-black text-[#0284C7] text-[12px] uppercase tracking-wide">
            RAISE
          </span>
        </div>
      );

    case 'fitt':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <span className="font-sans font-black text-[#1E293B] text-[13.5px] tracking-widest uppercase">
            FITT
          </span>
          <span className="font-robotoMono text-[8px] text-[#EB5725] font-bold uppercase tracking-wider">
            IIT DELHI
          </span>
        </div>
      );

    case 'aic-gtu':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-6 h-6 rounded bg-[#4F46E5] text-white flex items-center justify-center font-black text-[8.5px] shrink-0">
            GTU
          </div>
          <span className="font-sans font-black text-[#121212] text-[12px] uppercase tracking-wide">
            AIC-GTU
          </span>
        </div>
      );

    case 'nsrcel':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <span className="font-sans font-black text-[#991B1B] text-[13px] tracking-wider uppercase">
            NSRCEL
          </span>
          <span className="font-robotoMono text-[8px] text-[#52525B] font-semibold uppercase">
            IIM-B
          </span>
        </div>
      );

    default:
      return (
        <span className="font-robotoMono font-bold text-[12.5px] text-[#121212] uppercase tracking-wider select-none text-center">
          {partner.name}
        </span>
      );
  }
}

interface PartnerLogoProps {
  partner: Partner;
}

export default function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="
        group/tile
        relative
        w-full
        min-w-[130px] sm:min-w-[150px]
        h-[70px] sm:h-[76px]
        rounded-[10px]
        bg-white/60 hover:bg-white/95
        backdrop-blur-[2px]
        border border-[#121212]/[0.07]
        hover:border-[#EB5725]/40
        px-3 sm:px-4 py-2
        flex items-center justify-center
        shadow-[0_2px_10px_rgba(0,0,0,0.02)]
        hover:shadow-[0_8px_20px_rgba(235,87,37,0.08)]
        transition-colors duration-300
        cursor-pointer
      "
    >
      {/* ── LOGO SLOT (Grayscale by default → Color on hover) ── */}
      <div className="
        w-full h-full
        flex items-center justify-center
        grayscale opacity-70
        group-hover/tile:grayscale-0 group-hover/tile:opacity-100 group-hover/tile:scale-[1.03]
        transition-all duration-300 ease-out
      ">
        <PartnerLogoSlot partner={partner} />
      </div>

      {/* ── Subtitle / Category Tooltip on Hover ── */}
      {partner.description && (
        <div
          className="
            absolute -bottom-8 left-1/2 -translate-x-1/2
            bg-[#121212] text-white text-[9px] font-robotoMono
            px-2.5 py-1 rounded shadow-lg
            opacity-0 group-hover/tile:opacity-100
            transition-all duration-200 pointer-events-none whitespace-nowrap z-30
            hidden md:block
          "
        >
          {partner.name}
        </div>
      )}

      {/* ── Subtle Top-Right Accent Dot on Hover ── */}
      <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#EB5725] opacity-0 group-hover/tile:opacity-100 transition-opacity duration-200" />
    </motion.div>
  );
}
