'use client';

import Navbar from '@/components/Navbar';
import PartnersHero from '@/components/partners/PartnersHero';
import PartnersLogoSection from '@/components/partners/PartnersLogoSection';
import PartnershipsFeature from '@/components/partners/PartnershipsFeature';
import PartnersFutureSection from '@/components/partners/PartnersFutureSection';

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      {/* ── Page Content ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* 1. Hero Section ("The network behind the ecosystem.") with Central Visualization */}
        <PartnersHero />

        {/* 2. Asymmetric Filterable Logo Network (Categories: Industry, Academia, Gov, Investors, Enablers) */}
        <PartnersLogoSection />

        {/* 3. Dark Obsidian Card ("Partnerships that drive progress.") */}
        <PartnershipsFeature />

        {/* 4. Final Section ("Building the future, together.") with 4-Column Metrics & Campus Art */}
        <PartnersFutureSection />
      </div>
    </main>
  );
}
