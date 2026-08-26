'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PartnershipsFeature() {
  return (
    <section className="relative w-full py-12 sm:py-16 overflow-hidden select-none">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            rounded-[28px]
            bg-[#121212]
            text-white
            p-8 sm:p-12 lg:p-14
            overflow-hidden
            shadow-[0_20px_50px_rgba(0,0,0,0.2)]
            border border-white/10
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ── LEFT COLUMN: Collaborative Hands Artwork from public/library ── */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[240px] sm:h-[290px] flex items-center justify-center select-none overflow-hidden">
                
                {/* Official Transparent Hands Illustration with Smooth Radial Feathering */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0) 72%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0) 72%)',
                  }}
                >
                  <Image
                    src="/library/transparent-image (1).png"
                    alt="Partnership Collaborative Hands Illustration"
                    width={450}
                    height={380}
                    className="w-full h-full object-contain opacity-95"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Content & CTA ── */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start lg:pl-6">
              {/* Eyebrow */}
              <p className="font-robotoMono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#EB5725] mb-3">
                STRONGER TOGETHER
              </p>

              {/* Heading */}
              <h2 className="font-marcellus text-[32px] sm:text-[42px] lg:text-[46px] leading-[1.08] tracking-[-0.03em] text-white mb-5 sm:mb-6">
                Partnerships that
                <br />
                <span className="text-[#EB5725]">drive progress.</span>
              </h2>

              {/* Paragraph */}
              <p className="font-robotoMono text-[13px] sm:text-[14px] leading-[1.8] text-white/80 max-w-lg mb-8">
                By collaborating with the right partners, we accelerate ideas, scale impact and create lasting change.
              </p>

              {/* Action Button / Link */}
              <div>
                <Link
                  href="/apply?type=partner"
                  className="
                    group inline-flex items-center gap-2
                    font-robotoMono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em]
                    text-[#EB5725] hover:text-white
                    transition-colors duration-200
                  "
                >
                  <span>JOIN THE NETWORK</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
