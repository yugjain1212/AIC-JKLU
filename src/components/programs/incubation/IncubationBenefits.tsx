'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Box,
  IndianRupee,
  UserCheck,
  Share2,
  FileText,
} from 'lucide-react';

const BENEFITS = [
  {
    icon: Users,
    title: 'Business Plan Development',
    description: 'Mentorship to craft scalable business models and go-to-market strategies.',
  },
  {
    icon: Box,
    title: 'Product Development',
    description: 'Access to labs, tools and expertise to build MVP and prototypes.',
  },
  {
    icon: IndianRupee,
    title: 'Funding Access',
    description: 'Connect with investors and get funding opportunities up to ₹50 Lakhs.',
  },
  {
    icon: UserCheck,
    title: 'Mentor Matching',
    description: '1:1 guidance from industry leaders and successful entrepreneurs.',
  },
  {
    icon: Share2,
    title: 'Networking Events',
    description: 'Pitch events, investor meets and workshops to expand your network.',
  },
  {
    icon: FileText,
    title: 'Auxiliary Services',
    description: 'Legal, IPR, compliance and operational support when you need.',
  },
];

export default function IncubationBenefits() {
  return (
    <section id="benefits" className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#E4E4E0]/80 overflow-hidden select-none bg-[#FBF7F0]">
      
      {/* ── Left Edge Vertical Margin Rail ── */}
      <div className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 select-none pointer-events-none">
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">01</span>
        <div className="relative h-28 w-[1px] bg-[#D8D2C6] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#71717A] absolute top-3" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#EB5725] absolute" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#71717A] absolute bottom-3" />
        </div>
        <span className="font-robotoMono text-[10px] font-bold tracking-[0.28em] text-[#71717A] uppercase whitespace-nowrap -rotate-90 origin-center my-4">
          EMPOWERING RURAL INDIA
        </span>
        <span className="font-marcellus text-[13px] text-[#EB5725] font-bold">02</span>
      </div>

      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14 xl:pl-20">
        
        {/* =========================================================
            HEADER SECTION (Headline Left | Subtitle & Dot Matrix Right)
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
                PROGRAM BENEFITS
              </span>
              <div className="w-8 h-[1.5px] bg-[#EB5725]" />
            </div>

            <h2 className="font-marcellus text-[44px] sm:text-[54px] lg:text-[62px] leading-[0.98] tracking-[-0.035em] text-[#121212]">
              Benefits
              <br />
              <span className="text-[#EB5725]">That Accelerate</span>.
            </h2>
          </motion.div>

          {/* Right Subtitle & Dot Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex items-start gap-8 max-w-md pb-2"
          >
            <p className="font-robotoMono text-[12.5px] sm:text-[13px] leading-[1.8] text-[#52525B]">
              Designed to give startups everything they need to build, grow and scale with confidence.
            </p>

            {/* Dot Matrix Pattern (6x6) */}
            <div className="hidden sm:block shrink-0 opacity-30 select-none">
              <svg width="66" height="66" viewBox="0 0 66 66" fill="#EB5725">
                {Array.from({ length: 6 }).map((_, col) =>
                  Array.from({ length: 6 }).map((_, row) => (
                    <circle key={`ben-dm-${col}-${row}`} cx={col * 11 + 5} cy={row * 11 + 5} r="1" />
                  ))
                )}
              </svg>
            </div>
          </motion.div>

        </div>


        {/* =========================================================
            6-CARD GRID (3 Columns x 2 Rows)
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {BENEFITS.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="
                  group
                  relative
                  bg-white
                  border border-[#E4E4E0]
                  rounded-2xl
                  p-6 sm:p-7
                  shadow-[0_2px_14px_rgba(0,0,0,0.02)]
                  hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]
                  hover:border-[#EB5725]/40
                  hover:-translate-y-1
                  transition-all duration-300
                  flex flex-col justify-between
                  min-h-[220px]
                "
              >
                <div>
                  {/* Soft Peach Circle Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#FFF2ED] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    <IconComp className="w-5 h-5 text-[#EB5725]" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="font-marcellus text-[18px] sm:text-[19px] text-[#121212] leading-tight font-medium mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-robotoMono text-[11.5px] sm:text-[12px] text-[#52525B] leading-[1.75]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Plus Accent */}
                <div className="mt-5 font-mono text-[#EB5725] text-xs font-bold transition-transform duration-200 group-hover:scale-125">
                  +
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
