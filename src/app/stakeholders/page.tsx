'use client';

import Navbar from '@/components/Navbar';
import StakeholderHero from '@/components/stakeholders/StakeholderHero';
import StakeholderGrid from '@/components/stakeholders/StakeholderGrid';
import { STAKEHOLDERS } from '@/data/stakeholders';

export default function StakeholdersPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      {/* ── Page Content ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <StakeholderHero totalCount={STAKEHOLDERS.length} />

        {/* Stakeholder 5-Column Mentors Grid */}
        <section id="mentors">
          <StakeholderGrid stakeholders={STAKEHOLDERS} />
        </section>
      </div>
    </main>
  );
}
