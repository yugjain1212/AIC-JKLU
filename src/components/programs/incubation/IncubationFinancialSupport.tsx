'use client';

import { motion } from 'framer-motion';
import { FileText, Coins, IndianRupee } from 'lucide-react';

// =========================================================================
// VECTOR ARTWORK: Stacking Coins with Sparkle Stars & Growing Sprout
// =========================================================================
function CoinsAndSproutArtwork() {
  return (
    <div className="relative w-full max-w-[200px] h-[95px] select-none flex items-center justify-end">
      <svg viewBox="0 0 160 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        {/* Soft Peach Background Aura */}
        <circle cx="110" cy="45" r="28" fill="#FFF2ED" opacity="0.85" />

        {/* Plus Reticle */}
        <text x="35" y="32" fill="#EB5725" fontSize="11" fontFamily="monospace" fontWeight="bold">+</text>
        <text x="145" y="30" fill="#EB5725" fontSize="10" fontFamily="monospace" fontWeight="bold">+</text>

        {/* Floating Sparkle Stars */}
        <motion.text
          x="75"
          y="20"
          fill="#EB5725"
          fontSize="12"
          fontFamily="sans-serif"
          animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '80px 18px' }}
        >
          ✦
        </motion.text>

        {/* Growing Plant Sprig out of Coin Stack */}
        <motion.g
          animate={{ rotate: [-2, 2, -2], scaleY: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '128px 25px' }}
          stroke="#121212"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#FAF7F0"
        >
          <path d="M 128 25 Q 128 10 122 2" fill="none" />
          <path d="M 122 2 C 114 -2 112 8 123 10 Z" />
          <path d="M 123 4 C 131 0 133 10 125 12 Z" />
        </motion.g>

        {/* Coin Stack 1 (Left Short Stack) */}
        <g stroke="#121212" strokeWidth="1.1" strokeLinejoin="round" fill="#FAF7F0">
          <ellipse cx="60" cy="65" rx="16" ry="6" fill="#FAF7F0" />
          <ellipse cx="60" cy="58" rx="16" ry="6" fill="#FAF7F0" />
          <ellipse cx="60" cy="51" rx="16" ry="6" fill="#FED7AA" />
          <circle cx="60" cy="51" r="2.5" fill="#EB5725" stroke="#121212" strokeWidth="0.8" />
        </g>

        {/* Coin Stack 2 (Right Tall Stack) */}
        <g stroke="#121212" strokeWidth="1.1" strokeLinejoin="round" fill="#FAF7F0">
          <ellipse cx="105" cy="72" rx="18" ry="7" fill="#FAF7F0" />
          <ellipse cx="105" cy="64" rx="18" ry="7" fill="#FAF7F0" />
          <ellipse cx="105" cy="56" rx="18" ry="7" fill="#FAF7F0" />
          <ellipse cx="105" cy="48" rx="18" ry="7" fill="#FAF7F0" />
          <ellipse cx="105" cy="40" rx="18" ry="7" fill="#FAF7F0" />
          <ellipse cx="105" cy="32" rx="18" ry="7" fill="#FED7AA" />
          <circle cx="105" cy="32" r="3" fill="#EB5725" stroke="#121212" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

const FUNDING_TIERS = [
  {
    icon: FileText,
    tag: 'PROTOTYPE STAGE',
    amount: '₹20 Lakh',
    isHighlight: false,
    title: 'Non-Dilutive Grant',
    description: 'For early-stage prototype development and validation.',
  },
  {
    icon: Coins,
    tag: 'GROWTH STAGE',
    amount: '₹50 Lakh',
    isHighlight: true,
    title: 'OCD / CCD Investment',
    description: 'For high-potential startups for scaling and product-market fit.',
  },
  {
    icon: IndianRupee,
    tag: 'SCALE STAGE',
    amount: '₹12.5 Lakh',
    isHighlight: false,
    title: 'Co-Investment',
    description: 'For market expansion, pilot launches and commercialization.',
  },
];

export default function IncubationFinancialSupport() {
  return (
    <section id="funding" className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── Left Edge Vertical Margin Rail ── */}
      <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 select-none pointer-events-none">
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">06</span>
        <div className="relative h-28 w-[1px] bg-[#D8D2C6] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#71717A] absolute top-3" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#EB5725] absolute" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#71717A] absolute bottom-3" />
        </div>
        <span className="font-robotoMono text-[10px] font-bold tracking-[0.28em] text-[#71717A] uppercase whitespace-nowrap -rotate-90 origin-center my-4">
          EMPOWERING RURAL INDIA
        </span>
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">07</span>
      </div>

      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:pl-20">
        
        {/* =========================================================
            HEADER SECTION (Headline Left | Subtitle & Artwork Right)
        ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 relative">
          
          {/* Left Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725]">
                FINANCIAL SUPPORT
              </span>
              <div className="w-8 h-[1.5px] bg-[#EB5725]" />
            </div>

            <h2 className="font-marcellus text-[44px] sm:text-[54px] lg:text-[62px] leading-[0.98] tracking-[-0.035em] text-[#121212]">
              Fuel for Impact.
              <br />
              <span className="text-[#EB5725]">Support for Scale</span>.
            </h2>
          </motion.div>

          {/* Right Subtitle & Coins Artwork */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center gap-6 max-w-lg pb-2"
          >
            <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.8] text-[#52525B] max-w-xs">
              Financial support to help you build, launch and grow your venture.
            </p>

            <div className="shrink-0">
              <CoinsAndSproutArtwork />
            </div>
          </motion.div>

        </div>


        {/* =========================================================
            3 FINANCIAL TIER CARDS
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch mb-16 sm:mb-20">
          {FUNDING_TIERS.map((tier, idx) => {
            const IconComp = tier.icon;

            return (
              <motion.div
                key={tier.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  group
                  relative
                  bg-white
                  border
                  ${tier.isHighlight ? 'border-[#EB5725]/50 shadow-[0_8px_28px_rgba(235,87,37,0.08)]' : 'border-[#E4E4E0] shadow-[0_2px_14px_rgba(0,0,0,0.02)]'}
                  rounded-2xl
                  p-7 sm:p-8
                  hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]
                  hover:border-[#EB5725]/60
                  hover:-translate-y-1
                  transition-all duration-300
                  flex flex-col justify-between
                  min-h-[290px]
                `}
              >
                <div>
                  {/* Top Row: Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#FFF2ED] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <IconComp className="w-6 h-6 text-[#EB5725]" strokeWidth={1.75} />
                  </div>

                  {/* Stage Tag */}
                  <span className="font-robotoMono text-[10.5px] font-bold tracking-[0.2em] text-[#EB5725] uppercase block mb-2">
                    {tier.tag}
                  </span>

                  {/* Big Funding Amount */}
                  <div className={`font-marcellus text-[34px] sm:text-[38px] leading-tight font-bold tracking-[-0.03em] mb-2 ${tier.isHighlight ? 'text-[#EB5725]' : 'text-[#121212]'}`}>
                    {tier.amount}
                  </div>

                  {/* Funding Title */}
                  <h3 className="font-robotoMono text-[13px] font-bold text-[#121212] mb-2">
                    {tier.title}
                  </h3>

                  {/* Description */}
                  <p className="font-robotoMono text-[11px] sm:text-[11.5px] text-[#52525B] leading-[1.7]">
                    {tier.description}
                  </p>
                </div>

                {/* Bottom Plus Accent */}
                <div className="mt-6 font-mono text-[#EB5725] text-xs font-bold transition-transform duration-200 group-hover:scale-125">
                  +
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* =========================================================
            BOTTOM CALLOUT QUOTE BANNER
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-[#E4E4E0]/80 flex items-center justify-center text-center px-4"
        >
          <p className="font-robotoMono text-[12px] sm:text-[13px] tracking-wide text-[#52525B] max-w-2xl">
            <span className="text-[#EB5725] text-base font-serif font-bold mr-2">“</span>
            We don&apos;t just incubate startups, we build the{' '}
            <span className="text-[#EB5725] font-semibold">future</span> of rural innovation.
            <span className="text-[#EB5725] text-base font-serif font-bold ml-2">”</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
