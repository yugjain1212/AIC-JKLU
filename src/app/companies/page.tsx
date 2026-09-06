'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight, ArrowRight, X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyModal from '@/components/companies/CompanyModal';
import {
  STARTUPS,
  FEATURED_STARTUPS,
  type CompanyItem,
} from '@/data/companies';

type SortOption = 'id-asc' | 'id-desc' | 'name-asc' | 'name-desc' | 'stage';

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('id-asc');
  const [selectedCompany, setSelectedCompany] = useState<CompanyItem | null>(null);

  // Dynamically extract unique stages from JSON
  const stagesList = useMemo(() => {
    const set = new Set<string>();
    STARTUPS.forEach((c) => {
      if (c.stage) set.add(c.stage.trim());
    });
    return ['All', ...Array.from(set)];
  }, []);

  // Dynamically extract unique sectors from JSON
  const sectorsList = useMemo(() => {
    const set = new Set<string>();
    STARTUPS.forEach((c) => {
      c.sector.split('/').forEach((s) => {
        const clean = s.trim();
        if (clean.length > 2) set.add(clean);
      });
    });
    return ['All', ...Array.from(set).sort()];
  }, []);

  // Filter and sort startups dynamically
  const filteredList = useMemo(() => {
    const list = STARTUPS.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.founder.toLowerCase().includes(q) ||
        item.sector.toLowerCase().includes(q) ||
        item.stage.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      const matchesStage =
        selectedStage === 'All' || item.stage.toLowerCase() === selectedStage.toLowerCase();

      const matchesSector =
        selectedSector === 'All' ||
        item.sector.toLowerCase().includes(selectedSector.toLowerCase());

      return matchesQuery && matchesStage && matchesSector;
    });

    // Sorting
    return list.sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'stage') return a.stage.localeCompare(b.stage);
      if (sortBy === 'id-desc') return b.id - a.id;
      return a.id - b.id; // default id-asc
    });
  }, [searchQuery, selectedStage, selectedSector, sortBy]);

  const hasActiveFilters = searchQuery || selectedStage !== 'All' || selectedSector !== 'All';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedStage('All');
    setSelectedSector('All');
    setSortBy('id-asc');
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#121212] flex flex-col justify-between selection:bg-[#121212] selection:text-white">
      {/* ── Sticky Global Navbar ── */}
      <Navbar />

      <div className="flex-1 flex flex-col w-full">
        {/* =========================================================
            EDITORIAL HEADER
        ========================================================== */}
        <section className="pt-14 pb-10 sm:pt-20 sm:pb-14 px-6 lg:px-12 max-w-6xl mx-auto w-full border-b border-[#E4DFD5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-robotoMono text-[11px] uppercase tracking-[0.24em] text-[#737373] mb-3">
                Atal Incubation Centre — JKLU
              </p>
              <h1 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl text-[#121212] leading-[1.1] tracking-tight">
                Portfolio Directory
              </h1>
            </div>

            <div className="flex flex-col md:items-end">
              <span className="font-marcellus text-2xl sm:text-3xl text-[#121212]">
                {STARTUPS.length} COMPANIES
              </span>
              <p className="font-robotoMono text-xs text-[#737373] mt-1">
                Incubated & Accelerated Ventures
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURED COMPANIES (MINIMAL EDITORIAL SECTION)
        ========================================================== */}
        {!hasActiveFilters && (
          <section className="pt-10 pb-12 px-6 lg:px-12 max-w-6xl mx-auto w-full border-b border-[#E4DFD5]">
            <div className="flex items-center justify-between mb-6">
              <span className="font-robotoMono text-[10.5px] uppercase tracking-[0.2em] text-[#737373] font-medium">
                Featured Startups
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_STARTUPS.map((startup) => (
                <div
                  key={startup.id}
                  onClick={() => setSelectedCompany(startup)}
                  className="
                    group py-4 px-5 bg-[#FFFFFF] border border-[#E4DFD5] rounded-lg
                    hover:border-[#121212] transition-colors duration-150 cursor-pointer
                    flex flex-col justify-between
                  "
                >
                  <div>
                    <div className="flex items-center justify-between text-[#888888] font-robotoMono text-[10px] mb-2">
                      <span>{String(startup.id).padStart(2, '0')}</span>
                      <span>{startup.location || 'Jaipur, India'}</span>
                    </div>

                    <h3 className="font-marcellus text-lg text-[#121212] group-hover:text-[#EB5725] transition-colors leading-snug mb-1.5 line-clamp-1">
                      {startup.name}
                    </h3>

                    <p className="font-robotoMono text-[11px] text-[#737373] truncate">
                      {startup.sector}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                    <span className="font-robotoMono text-[10px] uppercase text-[#888888]">
                      {startup.stage}
                    </span>
                    <span className="text-[#737373] group-hover:text-[#121212] group-hover:translate-x-0.5 transition-transform duration-150 text-sm">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================================================
            CONTROLS: SEARCH, FILTERS & SORT
        ========================================================== */}
        <section className="py-6 px-6 lg:px-12 max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E4DFD5]">
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888888]"
              />
              <input
                type="text"
                placeholder="Search startups, founders, sectors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full pl-9 pr-8 py-2 bg-[#FFFFFF] border border-[#DED7CC] rounded-md
                  font-robotoMono text-xs text-[#121212] placeholder-[#888888]
                  focus:outline-none focus:border-[#121212]
                  transition-colors duration-150
                "
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#121212]"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Filter Dropdowns & Sorter */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Stage Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-robotoMono text-[10px] uppercase tracking-wider text-[#737373]">
                  Stage:
                </span>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="
                    bg-[#FFFFFF] border border-[#DED7CC] rounded-md px-2.5 py-1.5
                    font-robotoMono text-xs text-[#121212] focus:outline-none focus:border-[#121212]
                    cursor-pointer
                  "
                >
                  {stagesList.map((st) => (
                    <option key={st} value={st}>
                      {st === 'All' ? 'All Stages' : st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sector Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-robotoMono text-[10px] uppercase tracking-wider text-[#737373]">
                  Sector:
                </span>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="
                    bg-[#FFFFFF] border border-[#DED7CC] rounded-md px-2.5 py-1.5
                    font-robotoMono text-xs text-[#121212] focus:outline-none focus:border-[#121212]
                    cursor-pointer max-w-[160px] truncate
                  "
                >
                  {sectorsList.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec === 'All' ? 'All Sectors' : sec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center gap-1.5">
                <span className="font-robotoMono text-[10px] uppercase tracking-wider text-[#737373]">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="
                    bg-[#FFFFFF] border border-[#DED7CC] rounded-md px-2.5 py-1.5
                    font-robotoMono text-xs text-[#121212] focus:outline-none focus:border-[#121212]
                    cursor-pointer
                  "
                >
                  <option value="id-asc">Original Order (#01-95)</option>
                  <option value="name-asc">Name (A–Z)</option>
                  <option value="name-desc">Name (Z–A)</option>
                  <option value="stage">Stage</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="font-robotoMono text-[11px] text-[#EB5725] hover:underline cursor-pointer ml-1"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Result Count Header */}
          <div className="pt-4 pb-2 flex items-center justify-between font-robotoMono text-xs text-[#737373]">
            <span>
              Showing {filteredList.length} of {STARTUPS.length} Startups
            </span>
          </div>
        </section>

        {/* =========================================================
            MAIN DIRECTORY LIST (EDITORIAL ROWS — NO LOGOS)
        ========================================================== */}
        <section className="px-6 lg:px-12 max-w-6xl mx-auto w-full pb-24">
          {filteredList.length > 0 ? (
            <div className="divide-y divide-[#E4DFD5] border-y border-[#E4DFD5]">
              {filteredList.map((company) => (
                <div
                  key={company.id}
                  onClick={() => setSelectedCompany(company)}
                  className="
                    group py-4 px-2 sm:px-3 hover:bg-[#F2ECE1] transition-colors duration-100
                    cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-6
                  "
                >
                  {/* Left: ID & Name */}
                  <div className="flex items-baseline gap-4 sm:gap-6 min-w-0 sm:w-2/5">
                    <span className="font-robotoMono text-xs text-[#888888] tabular-nums shrink-0">
                      {String(company.id).padStart(2, '0')}
                    </span>
                    <span className="font-marcellus text-base sm:text-lg text-[#121212] group-hover:text-[#EB5725] transition-colors truncate">
                      {company.name}
                    </span>
                  </div>

                  {/* Middle: Location, Sector & Stage */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:w-1/2 text-xs font-robotoMono text-[#737373] pl-8 sm:pl-0">
                    <span className="text-[#888888] shrink-0">
                      {company.location || 'Jaipur, India'}
                    </span>
                    <span className="text-[#C4BCB0]">·</span>
                    <span className="truncate">{company.sector}</span>
                    <span className="text-[#C4BCB0]">·</span>
                    <span className="text-[#121212] shrink-0">{company.stage}</span>
                  </div>

                  {/* Right: Arrow */}
                  <div className="hidden sm:flex items-center justify-end text-[#888888] group-hover:text-[#121212] group-hover:translate-x-1 transition-all duration-150 shrink-0">
                    <span className="text-base leading-none">→</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-y border-[#E4DFD5]">
              <p className="font-marcellus text-lg text-[#121212] mb-1">No startups match your search</p>
              <p className="font-robotoMono text-xs text-[#737373] mb-4">
                Try modifying your query or clearing the active filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-[#121212] text-white rounded font-robotoMono text-xs uppercase tracking-wider hover:bg-[#EB5725] transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </div>

      {/* ── Startup Detail Modal ── */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />

      {/* ── Global Footer ── */}
      <Footer />
    </main>
  );
}
