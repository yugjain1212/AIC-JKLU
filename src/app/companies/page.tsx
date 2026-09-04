'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import CompaniesHero from '@/components/companies/directory/CompaniesHero';
import FeaturedCompanies from '@/components/companies/directory/FeaturedCompanies';
import CompanyDirectory from '@/components/companies/directory/CompanyDirectory';
import EcosystemAtAGlance from '@/components/companies/directory/EcosystemAtAGlance';
import FounderStories from '@/components/companies/directory/FounderStories';
import CompaniesCTA from '@/components/companies/directory/CompaniesCTA';

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      {/* ── Page Content ── */}
      <div className="flex-1 flex flex-col w-full">
        {/* 1. Hero Section & Key Statistics */}
        <CompaniesHero />

        {/* 2. Featured Companies Horizontal Showcase */}
        <FeaturedCompanies />

        {/* 3. Search Bar, Category Chips, Filters & Structured Directory Listing */}
        <CompanyDirectory />

        {/* 4. Ecosystem at a Glance & Founder Testimonials */}
        <section className="relative w-full py-12 sm:py-16 bg-[#FBF7F0] border-t border-[#E4E4E0]/80">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Ecosystem at a Glance (5 cols) */}
              <div className="lg:col-span-5 h-full">
                <EcosystemAtAGlance />
              </div>

              {/* Right Column: Founder Stories (7 cols) */}
              <div className="lg:col-span-7 h-full">
                <FounderStories />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Call-to-Action */}
        <CompaniesCTA />
      </div>
    </main>
  );
}
