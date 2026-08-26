'use client';

import Navbar from '@/components/Navbar';
import RiseHero from '@/components/programs/rise/RiseHero';
import RisePillars from '@/components/programs/rise/RisePillars';
import RiseOfferings from '@/components/programs/rise/RiseOfferings';
import RiseImpactBanner from '@/components/programs/rise/RiseImpactBanner';

export default function RiseProgramPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      {/* ── RISE Program Page Content ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* 1. Hero: Empowering Rural India & Transmission Grid Orbital Lens Visual */}
        <RiseHero />

        {/* 2. Our Pillars: 01 Renewable Energy, 02 Sustainable Growth, 03 Social Inclusion */}
        <RisePillars />

        {/* 3. Incubation Offerings: Dark Obsidian Card with 4 Offerings */}
        <RiseOfferings />

        {/* 4. Building Sustainable Futures: Panorama & 3 Key Metrics */}
        <RiseImpactBanner />
      </div>
    </main>
  );
}
