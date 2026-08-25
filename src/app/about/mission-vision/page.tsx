'use client';

import { motion, type Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const MISSION_PILLARS = [
  {
    number: '01',
    title: 'Empower Founders',
    description:
      'Provide early-stage entrepreneurs with the resources, guidance, and strategic support necessary to build and scale with clarity and confidence.',
  },
  {
    number: '02',
    title: 'Enable Innovation',
    description:
      'Cultivate an environment where ground-up ideas, technical ingenuity, and design-led thinking turn into scalable solutions for real-world challenges.',
  },
  {
    number: '03',
    title: 'Build Meaningful Connections',
    description:
      'Bridge founders with industry leaders, investors, academic researchers, and peers to foster long-term, high-impact collaborations.',
  },
  {
    number: '04',
    title: 'Support Sustainable Growth',
    description:
      'Guide startups toward strong unit economics, product-market validation, and resilient business models built for long-term endurance.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      <div>
        {/* Sticky Navbar */}
        <Navbar />

        {/* ============================================================
            MAIN CONTENT AREA
        ============================================================= */}
        <main className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-12 pt-16 pb-24 sm:pt-24 sm:pb-32">
          
          {/* ── 1. Page Header & Editorial Intro ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="mb-4 font-robotoMono text-xs font-semibold uppercase tracking-[0.25em] text-[#52525B]">
              Guiding Principles
            </p>

            <h1 className="font-marcellus text-[44px] leading-[1.02] tracking-[-0.04em] sm:text-[56px] md:text-[68px] text-[#121212]">
              Mission &amp; Vision
            </h1>

            <div className="mx-auto mt-6 h-0.5 w-14 rounded-full bg-[#EB5725]" />

            <p className="mx-auto mt-8 max-w-2xl font-robotoMono text-[16px] sm:text-[18px] leading-relaxed text-[#52525B] font-normal">
              AIC-JKLU is driven by a vision to create an ecosystem where ideas
              can become meaningful, sustainable ventures.
            </p>
          </motion.section>


          {/* ── 2. Vision Section ── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 sm:mt-28 border-t border-[#E4E4E0] pt-14 sm:pt-20"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-robotoMono text-xs font-semibold uppercase tracking-[0.2em] text-[#EB5725]">
                  01 — Purpose
                </span>
              </div>

              <h2 className="font-marcellus text-[32px] sm:text-[42px] tracking-[-0.03em] text-[#121212] leading-tight">
                Vision
              </h2>

              <blockquote className="mt-2 font-robotoMono text-[17px] sm:text-[20px] leading-[1.65] text-[#121212] font-normal">
                To build an enduring ecosystem that transforms ambitious ideas into scalable, impactful ventures—fostering innovation, entrepreneurship, and sustainable growth from Jaipur to the world.
              </blockquote>

              <p className="font-robotoMono text-[15px] sm:text-[16px] leading-[1.75] text-[#52525B] max-w-3xl">
                We envision a future where high-potential innovators receive the institutional backing, strategic mentorship, and market connectivity needed to solve tangible problems and build enduring institutions.
              </p>
            </div>
          </motion.section>


          {/* ── 3. Mission Section ── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 sm:mt-28 border-t border-[#E4E4E0] pt-14 sm:pt-20"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-robotoMono text-xs font-semibold uppercase tracking-[0.2em] text-[#EB5725]">
                  02 — Commitment
                </span>
              </div>

              <h2 className="font-marcellus text-[32px] sm:text-[42px] tracking-[-0.03em] text-[#121212] leading-tight">
                Mission
              </h2>

              <p className="font-robotoMono text-[16px] sm:text-[18px] leading-[1.65] text-[#121212]">
                To empower early-stage founders by providing an integration of robust mentorship, strategic resources, industry networks, and state-of-the-art incubation infrastructure.
              </p>
            </div>

            {/* ── 4. Numbered Mission Pillars ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-14 space-y-0 divide-y divide-[#E4E4E0] border-y border-[#E4E4E0]"
            >
              {MISSION_PILLARS.map((pillar) => (
                <motion.div
                  key={pillar.number}
                  variants={itemVariants}
                  className="group py-8 sm:py-9 transition-colors duration-200"
                >
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-[60px_1fr_2fr] sm:gap-6 items-baseline">
                    {/* Number */}
                    <span className="font-robotoMono text-sm font-semibold text-[#EB5725] tracking-wider">
                      {pillar.number}
                    </span>

                    {/* Pillar Title */}
                    <h3 className="font-marcellus text-[20px] sm:text-[22px] text-[#121212] tracking-tight">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="font-robotoMono text-[14px] sm:text-[15px] leading-[1.7] text-[#52525B]">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ── 5. Editorial Footer Callout ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 sm:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-[#E4E4E0] bg-white/70 backdrop-blur-sm p-8 sm:p-10"
          >
            <div>
              <p className="font-robotoMono text-[11px] uppercase tracking-[0.18em] text-[#52525B]">
                Join The Movement
              </p>
              <h4 className="font-marcellus text-[24px] sm:text-[28px] text-[#121212] mt-1">
                Ready to build with us?
              </h4>
            </div>

            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#EB5725] px-6 py-3.5 font-robotoMono text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#C84214] shrink-0 shadow-sm cursor-pointer"
            >
              Apply Now
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </motion.div>

        </main>
      </div>
    </div>
  );
}
