'use client';

import Navbar from '@/components/Navbar';
import StakeholderHero from '@/components/stakeholders/StakeholderHero';
import StakeholderGrid from '@/components/stakeholders/StakeholderGrid';
import { STAKEHOLDERS } from '@/data/stakeholders';

export default function StakeholdersPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      <div>
        {/* Sticky Global Navbar */}
        <Navbar />

        {/* Hero Section */}
        <StakeholderHero totalCount={STAKEHOLDERS.length} />

        {/* Stakeholder 5-Column Grid */}
        <StakeholderGrid stakeholders={STAKEHOLDERS} />
      </div>
    </div>
  );
}
