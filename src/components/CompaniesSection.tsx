'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
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
  { name: 'BAS', logo: '/companies/images/BAS.png' },
  { name: "Bowler's Academy", logo: '/companies/images/bowlers_acadmey.png' },
  { name: 'CaviSafe', logo: '/companies/images/CaviSafe.png' },
  { name: 'FinQuanata', logo: '/companies/images/FinQuanata.png' },
  { name: 'Marketing Chai', logo: '/companies/images/Marketing_chai.png' },
  { name: 'Papair', logo: '/companies/images/Papair.png' },
  { name: 'Plant Protector', logo: '/companies/images/plant_protector.png' },
  { name: 'SunEmission', logo: '/companies/images/SunEmission.png' },
  { name: 'Telemed on Wheels', logo: '/companies/images/Telemedonwheels.png' },
  { name: 'Snas IoT', logo: '/companies/images/Snas IoT.jpg' },
  { name: 'Starfire', logo: '/companies/images/Starfiree Logo.png' },
  { name: 'Sunbirds', logo: '/companies/images/Sunbirds.png' },
];

// ── Row builder — 4 rows × 6 per side for a rich continuous wall of startups ──
function buildRows(list: Company[]) {
  const make = (pool: Company[], rows: number, perRow: number, offset = 0) =>
    Array.from({ length: rows }, (_, r) =>
      Array.from({ length: perRow }, (__, c) => pool[(r * 3 + c + offset) % pool.length])
    );
  return {
    leftRows: make(list, 4, 6, 0),
    rightRows: make(list, 4, 6, 6),
  };
}

// ── Logo cell — clean, no border, no background ───────────────────────────
function LogoCell({ company }: { company: Company }) {
  return (
    <div className="flex items-center justify-center w-[140px] xl:w-[160px] h-[54px] shrink-0">
      <Image
        src={company.logo}
        alt={company.name}
        width={150}
        height={54}
        className="w-full h-full object-contain select-none transition-transform duration-300 hover:scale-105"
        draggable={false}
      />
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────
export default function CompaniesSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Spring physics for smooth 60fps parallax motion with natural inertia
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 26,
    mass: 0.18,
    restDelta: 0.0001,
  });

  const nm = ['0%', '0%'] as string[];

  // ── Symmetrical Row Parallax Speeds ─────────────────────────────────────
  // Row 0 & 2: Left drifts LEFT (-15%), Right drifts RIGHT (+15%)
  // Row 1 & 3: Left drifts RIGHT (+10%), Right drifts LEFT (-10%)
  const lx0 = useTransform(smoothProgress, [0, 1], reduced ? nm : ['0%', '-15%']);
  const lx1 = useTransform(smoothProgress, [0, 1], reduced ? nm : ['0%', '10%']);
  const lx2 = useTransform(smoothProgress, [0, 1], reduced ? nm : ['0%', '-15%']);
  const lx3 = useTransform(smoothProgress, [0, 1], reduced ? nm : ['0%', '10%']);

  const rx0 = useTransform(smoothProgress, [0, 1], reduced ? nm : ['0%', '15%']);
  const rx1 = useTransform(smoothProgress, [0, 1], reduced ? nm : ['0%', '-10%']);
  const rx2 = useTransform(smoothProgress, [0, 1], reduced ? nm : ['0%', '15%']);
  const rx3 = useTransform(smoothProgress, [0, 1], reduced ? nm : ['0%', '-10%']);

  const lxv: MotionValue<string>[] = [lx0, lx1, lx2, lx3];
  const rxv: MotionValue<string>[] = [rx0, rx1, rx2, rx3];
  const { leftRows, rightRows } = buildRows(COMPANIES);

  return (
    <section
      ref={ref}
      id="portfolio"
      aria-label="Our Portfolio"
      className="
        relative overflow-hidden
        h-[150vh] md:h-[160vh] lg:h-[160vh]
        bg-canvas
        rounded-t-[36px] md:rounded-t-[52px]
        shadow-[0_-24px_60px_rgba(0,0,0,0.07)]
      "
    >
      {/* ── STICKY PANEL ── */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden bg-canvas py-8 lg:py-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center pt-2 pb-3 px-6 shrink-0 text-center"
        >
          <p className="font-robotoMono text-[10px] uppercase tracking-[0.24em] text-brand mb-2.5">
            Our Portfolio
          </p>
          <h2 className="
            font-marcellus
            text-[clamp(1.85rem,3.4vw,3.25rem)]
            leading-[1.08] tracking-[-0.025em]
            text-obsidian mb-2.5
          ">
            Building the future, together.
          </h2>
          <p className="font-robotoMono text-[13px] leading-relaxed text-slateMuted max-w-[480px]">
            AIC-JKLU supports ambitious founders and innovative companies
            building solutions for the future.
          </p>
        </motion.div>

        {/* ── SHOWCASE ── */}
        <div className="relative flex-1 min-h-0 flex items-center overflow-hidden">

          {/* Edge fades — smooth multi-stop mask so logos dissolve naturally at boundaries */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 sm:w-36 lg:w-48 bg-gradient-to-r from-canvas via-canvas/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 sm:w-36 lg:w-48 bg-gradient-to-l from-canvas via-canvas/90 to-transparent" />

          {/* ── DESKTOP: 3-column CSS grid ── */}
          <div
            className="hidden lg:grid w-full h-full items-center"
            style={{ gridTemplateColumns: '1fr 230px 1fr' }}
          >
            {/* LEFT */}
            <div className="overflow-hidden h-full flex flex-col justify-center">
              <div className="flex flex-col">
                {leftRows.map((row, i) => (
                  <div key={i}>
                    <div className="h-px bg-hairline/60" />
                    <motion.div
                      style={{ x: lxv[i] }}
                      className="flex items-center justify-end gap-7 xl:gap-10 py-4 xl:py-5 pr-2 xl:pr-4 will-change-transform"
                    >
                      {row.map((c, j) => <LogoCell key={j} company={c} />)}
                    </motion.div>
                  </div>
                ))}
                <div className="h-px bg-hairline/60" />
              </div>
            </div>

            {/* CENTER */}
            <motion.div
              className="flex flex-col items-center justify-center z-30 px-2 py-4"
            >
              <p className="
                font-marcellus
                text-[clamp(2.1rem,2.8vw,3.5rem)]
                leading-none tracking-[-0.035em]
                text-obsidian text-center whitespace-nowrap
              ">
                {COMBINED_VALUATION}
              </p>
              <p className="font-robotoMono text-[10px] uppercase tracking-[0.2em] text-slateMuted mt-3 mb-5 text-center">
                {VALUATION_LABEL}
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-brand/35" />
                <span className="text-brand/70 text-[10px]">✦</span>
                <div className="h-px w-8 bg-brand/35" />
              </div>
              <Link
                href="#showcase"
                className="
                  group inline-flex items-center gap-2
                  font-robotoMono text-[10px] font-medium
                  uppercase tracking-[0.16em]
                  text-obsidian hover:text-brand
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm
                  cursor-pointer
                "
              >
                All Companies
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>

            {/* RIGHT */}
            <div className="overflow-hidden h-full flex flex-col justify-center">
              <div className="flex flex-col">
                {rightRows.map((row, i) => (
                  <div key={i}>
                    <div className="h-px bg-hairline/60" />
                    <motion.div
                      style={{ x: rxv[i] }}
                      className="flex items-center justify-start gap-7 xl:gap-10 py-4 xl:py-5 pl-2 xl:pl-4 will-change-transform"
                    >
                      {row.map((c, j) => <LogoCell key={j} company={c} />)}
                    </motion.div>
                  </div>
                ))}
                <div className="h-px bg-hairline/60" />
              </div>
            </div>
          </div>

          {/* ── MOBILE ── */}
          <div className="lg:hidden flex flex-col items-center justify-between h-full w-full py-2">
            {/* Stat */}
            <div className="flex flex-col items-center shrink-0 py-2 px-6 z-30">
              <p className="font-marcellus text-[clamp(2rem,7vw,2.8rem)] leading-none tracking-[-0.03em] text-obsidian text-center">
                {COMBINED_VALUATION}
              </p>
              <p className="font-robotoMono text-[9px] uppercase tracking-[0.2em] text-slateMuted mt-2 mb-2.5 text-center">
                {VALUATION_LABEL}
              </p>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="h-px w-7 bg-brand/35" />
                <span className="text-brand/70 text-[9px]">✦</span>
                <div className="h-px w-7 bg-brand/35" />
              </div>
              <Link
                href="#showcase"
                className="group inline-flex items-center gap-2 font-robotoMono text-[10px] uppercase tracking-[0.14em] text-obsidian hover:text-brand transition-colors duration-200 cursor-pointer"
              >
                All Companies
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
            {/* Logo rows */}
            <div className="flex-1 w-full overflow-hidden flex flex-col justify-center">
              <div className="flex flex-col">
                {[...leftRows, ...rightRows].slice(0, 4).map((row, i) => (
                  <div key={i}>
                    <div className="h-px bg-hairline/50" />
                    <motion.div
                      style={{ x: i % 2 === 0 ? lxv[i % 4] : rxv[i % 4] }}
                      className="flex items-center justify-center gap-4 py-2.5 will-change-transform"
                    >
                      {row.map((c, j) => (
                        <div key={j} className="flex items-center justify-center w-[100px] h-[44px] shrink-0">
                          <Image src={c.logo} alt={c.name} width={100} height={44} className="w-full h-full object-contain select-none" draggable={false} />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                ))}
                <div className="h-px bg-hairline/50" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
