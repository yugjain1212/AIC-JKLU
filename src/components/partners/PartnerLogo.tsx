'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Partner } from '@/data/partners';
export function PartnerLogoSlot({ partner }: { partner: Partner }) {
  if (partner.image) {
    const isSvg = partner.image.endsWith('.svg');
    return (
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <Image
          src={partner.image}
          alt={partner.name}
          width={130}
          height={48}
          unoptimized={isSvg}
          className="max-h-[38px] sm:max-h-[42px] max-w-[115px] sm:max-w-[130px] w-auto h-auto object-contain"
        />
      </div>
    );
  }

  switch (partner.logoType) {
    // ── INVESTORS ──
    case 'sinbex':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <span className="font-sans font-black text-[#121212] text-[15px] tracking-tight lowercase">
            sinbe
          </span>
          <span className="w-5 h-5 rounded-full border-[2.5px] border-[#EB5725] flex items-center justify-center -ml-1 text-[#EB5725] font-black text-[10px]">
            ∞
          </span>
        </div>
      );

    // ── TECHNOLOGY & CORPORATE ──
    case 'springboard':
      return (
        <div className="flex flex-col items-center select-none text-center">
          <div className="w-6 h-6 rounded-full border-[1.5px] border-[#EB5725] flex items-center justify-center mb-0.5">
            <span className="text-[#121212] text-[10px] font-black leading-none">
              ✱
            </span>
          </div>
          <span className="font-sans font-bold text-[#121212] text-[8.5px] tracking-[0.14em] uppercase leading-tight">
            SPRINGBOARD
          </span>
        </div>
      );

    case 'bank-of-india':
      return (
        <div className="flex flex-col items-center justify-center select-none">
          <div className="flex items-center gap-1">
            <span className="font-sans font-black text-[#00539B] text-[14px] leading-none">
              BOI
            </span>
            <span className="text-[#EB5725] text-[13px] leading-none">★</span>
          </div>
          <span className="font-sans font-bold text-[#00539B] text-[8.5px] tracking-tight leading-tight mt-0.5">
            Bank of India
          </span>
        </div>
      );

    case 'bloom-ventures':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-5 h-5 flex items-center justify-center text-[#00539B] text-[14px] font-black">
            ✦
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#121212] text-[10px] leading-tight tracking-wider uppercase">
              BLOOM
            </span>
            <span className="font-robotoMono text-[7.5px] font-semibold text-[#00539B] leading-none tracking-widest uppercase">
              VENTURES
            </span>
          </div>
        </div>
      );

    case 'mentor':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-6 h-6 rounded-md bg-[#E11D48] text-white flex items-center justify-center font-serif font-black text-[13px] italic shadow-sm">
            m.
          </div>
          <span className="font-sans font-black text-[#121212] text-[11px] tracking-wider uppercase">
            MENTOR
          </span>
        </div>
      );

    case 'suits':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-5 h-5 rounded bg-[#EB5725] text-white flex items-center justify-center font-bold text-[9px]">
            ❖
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#121212] text-[11px] leading-none uppercase tracking-tight">
              SUITS
            </span>
            <span className="font-robotoMono text-[7px] text-[#52525B] leading-tight uppercase tracking-wider">
              Coaching Spaces
            </span>
          </div>
        </div>
      );

    // ── ECOSYSTEM ──
    case 'aic':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-7 h-7 rounded-full bg-[#EB5725] text-white flex items-center justify-center font-black text-[10px] shadow-sm">
            AIC
          </div>
        </div>
      );

    case 'iimb':
      return (
        <div className="flex flex-col items-center justify-center text-center select-none">
          <div className="w-8 h-4 bg-[#C41230] rounded-t-full flex items-center justify-center text-white text-[7px] font-bold">
            IIMB
          </div>
          <span className="font-sans font-black text-[#121212] text-[9.5px] tracking-tight uppercase mt-0.5">
            IIMB
          </span>
          <span className="font-robotoMono text-[6px] text-[#71717A] tracking-tighter">
            तेजस्वि नावधीतमस्तु
          </span>
        </div>
      );

    case 'campus-crest':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-6 h-7 border-[1.5px] border-[#1E3A8A] rounded-b-lg bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] font-serif font-black text-[10px]">
            🛡
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#1E3A8A] text-[10px] leading-tight uppercase">
              CAMPUS
            </span>
            <span className="font-robotoMono text-[7px] text-[#52525B] leading-none uppercase">
              NETWORK
            </span>
          </div>
        </div>
      );

    case 'rajasthan-startup-cell':
      return (
        <div className="flex items-center gap-1.5 select-none">
          <div className="w-6 h-6 bg-[#121212] text-white flex flex-col items-center justify-center font-mono font-bold text-[7px] leading-none rounded-sm">
            <span>RA</span>
            <span>TH</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-black text-[#121212] text-[9.5px] leading-tight uppercase">
              RAJASTHAN
            </span>
            <span className="font-robotoMono text-[7px] font-bold text-[#EB5725] leading-none uppercase">
              STARTUP CELL
            </span>
          </div>
        </div>
      );

    default:
      return (
        <span className="font-robotoMono font-bold text-[12px] text-[#121212] uppercase tracking-wider select-none text-center px-2">
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
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="
        group/tile
        relative
        w-full
        h-[72px] sm:h-[78px]
        rounded-[12px]
        bg-white
        border border-[#121212]/[0.08]
        hover:border-[#EB5725]/50
        px-2 sm:px-3 py-1.5
        flex items-center justify-center
        shadow-[0_2px_8px_rgba(0,0,0,0.02)]
        hover:shadow-[0_6px_18px_rgba(235,87,37,0.09)]
        transition-all duration-200
        cursor-pointer
      "
    >
      {/* ── LOGO CONTENT ── */}
      <div className="
        w-full h-full
        flex items-center justify-center
        opacity-90 group-hover/tile:opacity-100 group-hover/tile:scale-[1.03]
        transition-all duration-200 ease-out
      ">
        <PartnerLogoSlot partner={partner} />
      </div>

    </motion.div>
  );
}
