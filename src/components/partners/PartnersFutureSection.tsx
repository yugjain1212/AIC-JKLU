'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, Globe, Building2, Infinity as InfinityIcon } from 'lucide-react';

const PARTNER_METRICS = [
  {
    id: 1,
    icon: Handshake,
    value: '40+',
    label: 'Partner Organizations',
  },
  {
    id: 2,
    icon: Globe,
    value: '6+',
    label: 'Countries Connected',
  },
  {
    id: 3,
    icon: Building2,
    value: '10+',
    label: 'Industry Collaborations',
  },
  {
    id: 4,
    icon: InfinityIcon,
    value: '∞',
    label: 'Possibilities Together',
  },
];

export default function PartnersFutureSection() {
  return (
    <section className="relative w-full pt-6 pb-20 sm:pb-28 overflow-hidden select-none">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            rounded-[28px]
            bg-white/95
            backdrop-blur-md
            border border-[#E4E4E0]
            shadow-[0_8px_30px_rgba(0,0,0,0.035)]
            overflow-hidden
            p-8 sm:p-12 lg:p-14
          "
        >
          {/* ── TOP 2-COLUMN SECTION: Editorial Headline & 4-Column Metrics ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start pb-10 border-b border-[#E4E4E0]/80">

            {/* ── Left Column: Editorial Headline & Link ── */}
            <div className="lg:col-span-5 flex flex-col justify-center items-start">
              <h2 className="font-marcellus text-[34px] sm:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.03em] text-[#121212] mb-4 sm:mb-5">
                Building the future,
                <br />
                <span className="text-[#EB5725]">together.</span>
              </h2>

              <p className="font-robotoMono text-[12.5px] sm:text-[13.5px] leading-[1.8] text-[#52525B] max-w-sm mb-7 sm:mb-8">
                Our partners are at the heart of everything we do. Thank you for being a part of our journey.
              </p>

              <Link
                href="/apply?type=partner"
                className="
                  group inline-flex items-center gap-2
                  font-robotoMono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.18em]
                  text-[#EB5725] hover:text-[#C84214]
                  border-b border-[#EB5725] pb-0.5
                  transition-colors duration-200
                "
              >
                <span>VIEW PARTNERSHIP OPPORTUNITIES</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* ── Right Column: 4 Stat Metrics with Hairline Dividers ── */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E4E4E0]/80 items-center">
              {PARTNER_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.id}
                    className="p-4 sm:p-5 flex flex-col items-center text-center group hover:bg-[#FBF7F0]/40 transition-colors duration-200"
                  >
                    {/* Orange Badge Icon */}
                    <div className="w-10 h-10 rounded-full bg-[#FFF2ED] flex items-center justify-center text-[#EB5725] mb-3 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>

                    {/* Metric Number */}
                    <span className="font-marcellus text-[34px] sm:text-[38px] lg:text-[42px] text-[#121212] leading-none mb-1.5 font-medium">
                      {metric.value}
                    </span>

                    {/* Metric Label */}
                    <span className="font-robotoMono text-[10.5px] sm:text-[11px] text-[#71717A] leading-tight">
                      {metric.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ── BOTTOM PANORAMA: Campus Architecture Line Art with Orange Sun ── */}
          <div className="relative w-full h-[120px] sm:h-[150px] lg:h-[170px] mt-6 flex items-center justify-center overflow-hidden opacity-90">
            <Image
              src="/library/campus-illustration.svg"
              alt="AIC-JKLU Campus Architecture Illustration"
              width={800}
              height={260}
              className="w-full h-full object-contain object-bottom select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              priority
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
