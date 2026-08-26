'use client';

import Navbar from '@/components/Navbar';
import ProgramHero from '@/components/programs/ProgramHero';
import ProgramProblemStatements from '@/components/programs/ProgramProblemStatements';
import ProgramTimeline from '@/components/programs/ProgramTimeline';
import ProgramBuildScaleImpact from '@/components/programs/ProgramBuildScaleImpact';
import ProgramBioBanner from '@/components/programs/ProgramBioBanner';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      {/* ── Recreated Programs Content ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* 1. Hero Section with 01 Accelerator Program, Rocket Art & 3 Stat Cards */}
        <ProgramHero />

        {/* 2. Problem Statements Section (2 Editorial Cards & Vector Illustrations) */}
        <ProgramProblemStatements />

        {/* 3. Timeline & Benefits Section (6 Connected Step Nodes) */}
        <ProgramTimeline />

        {/* 4. Build. Scale. Impact. (Dark Feature Box) & 2x2 Program Metrics Grid */}
        <ProgramBuildScaleImpact />

        {/* 5. Final Bio-based Banner Section ("The future is bio-based.") */}
        <ProgramBioBanner />
      </div>
    </main>
  );
}
