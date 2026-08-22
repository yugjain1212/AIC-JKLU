'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

// ── Configurable stat ──────────────────────────────────────────────────────
const COMBINED_VALUATION = '₹350 Cr+';
const VALUATION_LABEL = 'Combined Valuation';

// ── Company data ───────────────────────────────────────────────────────────
interface Company {
  name: string;
  logo: string;
}

const COMPANIES: Company[] = [
  { name: 'BAS',      logo: '/companies/BAS.svg' },
  { name: 'Bowlers',     logo: '/companies/bowlers_acadmey.svg' },
  { name: 'CaviSafe', logo: '/companies/CaviSafe.svg' },
  { name: 'FinQuanta',  logo: '/companies/FinQuanata.svg' },
  { name: 'Marketing_Chai',     logo: '/companies/Marketing_chai.svg' },
  { name: 'Papair',     logo: '/companies/Papair.svg' },
  { name: 'Plant_Protector',    logo: '/companies/plant_protector.svg' },
  { name: 'SunEmission',       logo: '/companies/SunEmission.svg' },
  { name: 'Telemed',     logo: '/companies/Telemedonwheels.svg' },
  { name: 'Snas',   logo: '/companies/Snas IoT.svg' },
  { name: 'star',   logo: '/companies/Starfiree Logo.svg' },
  { name: 'SunBirds',    logo: '/companies/Sunbirds.svg' },
];

// ── Split companies into 4 rows × 3 logos per side ────────────────────────
function buildRows(companies: Company[]): {
  leftRows: Company[][];
  rightRows: Company[][];
} {
  // Always build 4 rows × 3 logos per side, cycling through the list
  const makeRows = (pool: Company[], rowCount: number, perRow: number): Company[][] =>
    Array.from({ length: rowCount }, (_, r) =>
      Array.from({ length: perRow }, (__, c) => pool[(r * perRow + c) % pool.length])
    );

  const half = Math.ceil(companies.length / 2);
  const left  = companies.slice(0, half);
  const right = companies.slice(half);

  return {
    leftRows:  makeRows(left.length  ? left  : companies, 4, 3),
    rightRows: makeRows(right.length ? right : companies, 4, 3),
  };
}

// ── LogoCell ───────────────────────────────────────────────────────────────
function LogoCell({ company }: { company: Company }) {
  return (
    <div
      className="
        flex items-center justify-center
        w-[110px] sm:w-[130px] lg:w-[150px]
        h-[48px] sm:h-[54px] lg:h-[58px]
        shrink-0
      "
    >
      <Image
        src={company.logo}
        alt={company.name}
        width={140}
        height={52}
        className="max-w-full max-h-full object-contain select-none"
        draggable={false}
      />
    </div>
  );
}

// ── LogoRow ────────────────────────────────────────────────────────────────
function LogoRow({ companies }: { companies: Company[] }) {
  return (
    <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
      {companies.map((c, i) => (
        <LogoCell key={`${c.name}-${i}`} company={c} />
      ))}
    </div>
  );
}



// ── Main component ─────────────────────────────────────────────────────────
export default function CompaniesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll tracking across the tall outer section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Smooth physics spring for fluid 60fps motion
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  // ── Motion values (disabled when reduced-motion is preferred) ──

  // Left rows: alternating horizontal movement for layered parallax
  const noMove: string[] = ['0%', '0%'];
  const noPx: string[] = ['0px', '0px'];

  const leftX0 = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noMove : ['0%', '-26%']);
  const leftX1 = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noMove : ['0%', '10%']);
  const leftX2 = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noMove : ['0%', '-32%']);
  const leftX3 = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noMove : ['0%', '14%']);

  // Right rows: mirrored opposing movement
  const rightX0 = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noMove : ['0%', '26%']);
  const rightX1 = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noMove : ['0%', '-10%']);
  const rightX2 = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noMove : ['0%', '32%']);
  const rightX3 = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noMove : ['0%', '-14%']);

  // Subtle vertical parallax per side
  const leftY = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noPx : ['0px', '-50px']);
  const rightY = useTransform(smooth, [0, 0.8], prefersReducedMotion ? noPx : ['0px', '50px']);

  // Center statistic: subtle scale breathing
  const centerScale = useTransform(
    smooth,
    [0, 0.4, 0.8],
    prefersReducedMotion ? [1, 1, 1] : [0.97, 1, 0.97]
  );

  const leftXValues = [leftX0, leftX1, leftX2, leftX3];
  const rightXValues = [rightX0, rightX1, rightX2, rightX3];

  const { leftRows, rightRows } = buildRows(COMPANIES);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      aria-label="Our Portfolio"
      className="
        relative overflow-hidden
        h-[120vh] md:h-[150vh] lg:h-[90vh]
        bg-canvas
        border-t border-hairline/60
      "
    >
      {/* ── STICKY VIEWPORT PANEL ── */}
      <div className="sticky top-0 h-screen overflow-hidden bg-canvas flex flex-col isolate">

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center pt-12 lg:pt-14 pb-6 lg:pb-8 px-6 shrink-0"
        >
          {/* Eyebrow */}
          <p
            className="
              font-robotoMono text-[10px] uppercase tracking-[0.22em]
              text-brand mb-4
            "
          >
            Our Portfolio
          </p>

          {/* Heading */}
          <h2
            className="
              font-marcellus
              text-[clamp(2rem,4vw,3.75rem)]
              leading-[1.05]
              tracking-[-0.025em]
              text-obsidian
              text-center
              mb-4
            "
          >
            Building the future, together.
          </h2>

          {/* Description */}
          <p
            className="
              font-robotoMono text-[15px] leading-relaxed
              text-slateMuted text-center
              max-w-[560px]
            "
          >
            AIC-JKLU supports ambitious founders and innovative companies
            building solutions for the future.
          </p>
        </motion.div>

        {/* ── SHOWCASE: logos + center stat ── */}
        <div className="relative flex-1 overflow-hidden">

          {/* ── Left & right edge fades (both mobile + desktop) ── */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-24 lg:w-36 bg-gradient-to-r from-canvas to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-24 lg:w-36 bg-gradient-to-l from-canvas to-transparent" />

          {/* ── DESKTOP 3-column grid ── */}
          <div className="hidden lg:grid h-full items-center"
            style={{ gridTemplateColumns: '1fr 280px 1fr' }}
          >

            {/* LEFT LOGO GRID */}
            <motion.div style={{ y: leftY }} className="overflow-hidden">
              {leftRows.map((row, i) => (
                <div key={`d-left-${i}`}>
                  <div className="w-full h-px bg-hairline opacity-50" />
                  <motion.div
                    style={{ x: leftXValues[i] }}
                    className="flex items-center justify-end gap-6 xl:gap-10 py-5 pr-6 xl:pr-10"
                  >
                    {row.map((c, j) => (
                      <LogoCell key={`${c.name}-${j}`} company={c} />
                    ))}
                  </motion.div>
                </div>
              ))}
              <div className="w-full h-px bg-hairline opacity-50" />
            </motion.div>

            {/* CENTER STATISTIC — fixed column, never moves */}
            <motion.div
              style={{ scale: centerScale }}
              className="flex flex-col items-center justify-center z-30 px-4"
            >
              <p className="
                font-marcellus
                text-[clamp(2.2rem,3.5vw,4rem)]
                leading-[1]
                tracking-[-0.03em]
                text-obsidian
                text-center
                whitespace-nowrap
              ">
                {COMBINED_VALUATION}
              </p>
              <p className="
                font-robotoMono text-[10px]
                uppercase tracking-[0.2em]
                text-slateMuted
                mt-3 mb-5
                text-center
              ">
                {VALUATION_LABEL}
              </p>
              <div className="flex items-center gap-2 mb-5">
                <div className="h-px w-8 bg-brand/40" />
                <span className="text-brand text-[9px]">✦</span>
                <div className="h-px w-8 bg-brand/40" />
              </div>
              <Link
                href="/companies"
                className="
                  group inline-flex items-center gap-2
                  font-robotoMono text-[11px] font-medium
                  uppercase tracking-[0.14em]
                  text-obsidian hover:text-brand
                  transition-colors duration-300
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm
                "
              >
                All Companies
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

            {/* RIGHT LOGO GRID */}
            <motion.div style={{ y: rightY }} className="overflow-hidden">
              {rightRows.map((row, i) => (
                <div key={`d-right-${i}`}>
                  <div className="w-full h-px bg-hairline opacity-50" />
                  <motion.div
                    style={{ x: rightXValues[i] }}
                    className="flex items-center justify-start gap-6 xl:gap-10 py-5 pl-6 xl:pl-10"
                  >
                    {row.map((c, j) => (
                      <LogoCell key={`${c.name}-${j}`} company={c} />
                    ))}
                  </motion.div>
                </div>
              ))}
              <div className="w-full h-px bg-hairline opacity-50" />
            </motion.div>

          </div>

          {/* ── MOBILE: stat above, rows below ── */}
          <div className="lg:hidden flex flex-col items-center h-full">

            {/* Center stat */}
            <div className="flex flex-col items-center shrink-0 pt-2 pb-5 px-6 relative z-30">
              <p className="
                font-marcellus text-[clamp(2.4rem,8vw,3.5rem)]
                leading-[1] tracking-[-0.03em] text-obsidian text-center
              ">
                {COMBINED_VALUATION}
              </p>
              <p className="
                font-robotoMono text-[10px] uppercase tracking-[0.2em]
                text-slateMuted mt-2 mb-3 text-center
              ">
                {VALUATION_LABEL}
              </p>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-brand/40" />
                <span className="text-brand text-[10px]">✦</span>
                <div className="h-px w-8 bg-brand/40" />
              </div>
              <Link
                href="/companies"
                className="
                  group inline-flex items-center gap-2
                  font-robotoMono text-[11px] font-medium
                  uppercase tracking-[0.14em]
                  text-obsidian hover:text-brand
                  transition-colors duration-300
                "
              >
                All Companies
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Logo rows */}
            <div className="flex-1 w-full overflow-hidden">
              <motion.div style={{ y: leftY }} className="flex flex-col">
                {[...leftRows, ...rightRows].slice(0, 5).map((row, i) => (
                  <div key={`m-${i}`}>
                    <div className="w-full h-px bg-hairline opacity-40" />
                    <motion.div
                      style={{ x: i % 2 === 0 ? leftXValues[i % 4] : rightXValues[i % 4] }}
                      className="flex items-center justify-center gap-4 sm:gap-6 py-3 sm:py-4"
                    >
                      {row.map((c, j) => (
                        <LogoCell key={`${c.name}-${j}`} company={c} />
                      ))}
                    </motion.div>
                  </div>
                ))}
                <div className="w-full h-px bg-hairline opacity-40" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
