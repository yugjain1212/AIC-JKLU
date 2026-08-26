'use client';

import Navbar from '@/components/Navbar';
import IncubationHero from '@/components/programs/incubation/IncubationHero';
import IncubationBenefits from '@/components/programs/incubation/IncubationBenefits';
import IncubationEligibility from '@/components/programs/incubation/IncubationEligibility';
import IncubationStructure from '@/components/programs/incubation/IncubationStructure';
import IncubationFinancialSupport from '@/components/programs/incubation/IncubationFinancialSupport';

export default function IncubationProgramPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      {/* ── Incubation Program Page Content ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* 1. Hero Section: Editorial Typography & Smooth Feathered LRC Visual */}
        <IncubationHero />

        {/* 2. Program Benefits: 6-Card Grid (Business Plan, Product, Funding, Mentors, Network, Auxiliary) */}
        <IncubationBenefits />

        {/* 3. Eligibility & Selection: Fair Criteria, Focus Areas & 4-Step Selection Process */}
        <IncubationEligibility />

        {/* 4. Program Structure: Built for Growth (Graduation -> Workspace -> Scalability) */}
        <IncubationStructure />

        {/* 5. Financial Support: Fuel for Impact (₹20L Grant, ₹50L OCD/CCD, ₹12.5L Co-Investment) & Quote */}
        <IncubationFinancialSupport />
      </div>
    </main>
  );
}
