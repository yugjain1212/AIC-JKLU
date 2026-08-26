'use client';

import Navbar from '@/components/Navbar';
import LeapHero from '@/components/programs/leap/LeapHero';
import LeapAbout from '@/components/programs/leap/LeapAbout';
import LeapEligibilityProcess from '@/components/programs/leap/LeapEligibilityProcess';
import LeapOfferings from '@/components/programs/leap/LeapOfferings';
import LeapTenureCosts from '@/components/programs/leap/LeapTenureCosts';

export default function LeapProgramPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      {/* ── LEAP Program Page Content ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* 1. Hero: Longevity Economy Accelerator, Workspace Layered Art & Floating Badge */}
        <LeapHero />

        {/* 2. About the Program: Collaboration Visual & 6-Month Mission Statement */}
        <LeapAbout />

        {/* 3. Eligibility & Selection Process: Dark Obsidian Layout with Concentric Radar Reticle */}
        <LeapEligibilityProcess />

        {/* 4. What We Offer: 8-Card Offering Grid (Mentorship, AWS, Labs, Govt Schemes, etc.) */}
        <LeapOfferings />

        {/* 5. Program Tenure & Costs: Dark Obsidian Summary (6 Months, 0% Equity, Affordable) */}
        <LeapTenureCosts />
      </div>
    </main>
  );
}
