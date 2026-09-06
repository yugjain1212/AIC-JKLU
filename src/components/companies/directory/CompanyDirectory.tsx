'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  X,
  RotateCcw,
  ChevronDown,
} from 'lucide-react';
import {
  companies,
  DIRECTORY_INDUSTRIES,
  RELATIONSHIP_TYPES,
  STAGES,
  type Company,
} from '@/data/companies';

interface CompanyDirectoryProps {
  initialIndustry?: string;
}

export default function CompanyDirectory({ initialIndustry = 'All' }: CompanyDirectoryProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialIndustry);
  const [selectedRelationship, setSelectedRelationship] = useState<string>('All');
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'oldest' | 'name'>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Pagination
  const [visibleCount, setVisibleCount] = useState(10);

  // Global Keyboard Shortcut: ⌘K / Ctrl+K to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute Active Advanced Filter Count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedRelationship !== 'All') count++;
    if (selectedStage !== 'All') count++;
    if (selectedLocation !== 'All') count++;
    return count;
  }, [selectedRelationship, selectedStage, selectedLocation]);

  // Unique locations from data
  const locationsList = useMemo(() => {
    const locs = new Set(companies.map((c) => c.location));
    return ['All', ...Array.from(locs)];
  }, []);

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedRelationship('All');
    setSelectedStage('All');
    setSelectedLocation('All');
    setSortBy('featured');
    setVisibleCount(10);
  };

  // Filter & Sort Logic
  const filteredCompanies = useMemo(() => {
    return companies
      .filter((comp) => {
        // Search across name, founder, industries, description, location
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = comp.name.toLowerCase().includes(q);
          const matchFounder = comp.founder?.toLowerCase().includes(q) || comp.founders?.some((f) => f.name.toLowerCase().includes(q));
          const matchIndustry = comp.industries.some((ind) => ind.toLowerCase().includes(q));
          const matchDesc = comp.description.toLowerCase().includes(q);
          const matchLoc = comp.location.toLowerCase().includes(q);

          if (!matchName && !matchFounder && !matchIndustry && !matchDesc && !matchLoc) {
            return false;
          }
        }

        // Category filter
        if (selectedCategory !== 'All') {
          const hasInd = comp.industries.includes(selectedCategory);
          if (!hasInd) return false;
        }

        // Relationship filter
        if (selectedRelationship !== 'All' && comp.relationship !== selectedRelationship) {
          return false;
        }

        // Stage filter
        if (selectedStage !== 'All' && comp.stage !== selectedStage) {
          return false;
        }

        // Location filter
        if (selectedLocation !== 'All' && comp.location !== selectedLocation) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.foundedYear - a.foundedYear;
        }
        if (sortBy === 'newest') return b.foundedYear - a.foundedYear;
        if (sortBy === 'oldest') return a.foundedYear - b.foundedYear;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedRelationship, selectedStage, selectedLocation, sortBy]);

  // Reset pagination when filter criteria change
  useEffect(() => {
    setVisibleCount(10);
  }, [searchQuery, selectedCategory, selectedRelationship, selectedStage, selectedLocation, sortBy]);

  // Sliced items for display
  const paginatedCompanies = filteredCompanies.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCompanies.length;

  return (
    <section id="directory" className="relative w-full py-12 sm:py-16 bg-[#FBF7F0]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-24">
        {/* ============================================================
            1. SEARCH BAR & FILTER TOGGLE ROW
        ============================================================= */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
          {/* Main Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717A] pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, founders, industries, location..."
              className="
                w-full pl-11 pr-24 py-3.5 rounded-xl border border-[#E4E4E0] bg-white
                font-robotoMono text-[13px] text-[#121212] placeholder:text-[#71717A]
                shadow-[0_2px_8px_rgba(0,0,0,0.02)]
                focus:outline-none focus:border-[#EB5725] focus:ring-2 focus:ring-[#EB5725]/15
                transition-all duration-200
              "
            />
            {/* Keyboard shortcut badge / Clear button */}
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="text-[#71717A] hover:text-[#121212] p-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded border border-[#E4E4E0] bg-[#FAF7F2] font-robotoMono text-[10px] text-[#71717A]">
                ⌘ K
              </kbd>
            </div>
          </div>

          {/* Filters Button */}
          <button
            type="button"
            onClick={() => setIsFilterOpen((prev) => !prev)}
            aria-expanded={isFilterOpen}
            className={`
              inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl
              font-robotoMono text-[12px] font-bold tracking-[0.14em] uppercase
              transition-all duration-200 cursor-pointer shrink-0
              ${
                activeFilterCount > 0 || isFilterOpen
                  ? 'bg-[#EB5725] text-white shadow-[0_4px_16px_rgba(235,87,37,0.25)]'
                  : 'bg-[#121212] hover:bg-[#27272A] text-white shadow-sm'
              }
            `}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters ({activeFilterCount})</span>
          </button>
        </div>

        {/* ============================================================
            2. HORIZONTAL CATEGORY PILLS
        ============================================================= */}
        <div className="relative w-full mb-8 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 pb-2 min-w-max">
            {DIRECTORY_INDUSTRIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-lg font-robotoMono text-[11px] sm:text-[11.5px] font-semibold tracking-[0.08em]
                    transition-all duration-200 cursor-pointer shrink-0
                    ${
                      isActive
                        ? 'bg-[#EB5725] text-white shadow-sm hover:bg-[#C84214]'
                        : 'bg-white text-[#52525B] border border-[#E4E4E0] hover:border-[#121212]/30 hover:text-[#121212]'
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            3. ADVANCED FILTER PANEL (EXPANDABLE / DRAWER)
        ============================================================= */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mb-8"
            >
              <div className="p-6 sm:p-8 rounded-2xl border border-[#E4E4E0] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E4E4E0]">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[#EB5725]" />
                    <h4 className="font-robotoMono text-[12px] font-bold uppercase tracking-[0.16em] text-[#121212]">
                      Filter Companies
                    </h4>
                  </div>
                  <div className="flex items-center gap-4">
                    {activeFilterCount > 0 && (
                      <button
                        type="button"
                        onClick={handleResetFilters}
                        className="inline-flex items-center gap-1.5 font-robotoMono text-[11px] font-semibold text-[#EB5725] hover:underline cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset All</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsFilterOpen(false)}
                      className="text-[#71717A] hover:text-[#121212] p-1 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Filter: AIC Relationship */}
                  <div>
                    <label className="block font-robotoMono text-[11px] font-bold uppercase tracking-[0.14em] text-[#71717A] mb-3">
                      AIC Relationship
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {RELATIONSHIP_TYPES.map((rel) => {
                        const isSel = selectedRelationship === rel;
                        return (
                          <button
                            key={rel}
                            type="button"
                            onClick={() => setSelectedRelationship(rel)}
                            className={`
                              px-3 py-1.5 rounded-md font-robotoMono text-[11px] font-medium border transition-colors cursor-pointer
                              ${
                                isSel
                                  ? 'bg-[#121212] text-white border-[#121212]'
                                  : 'bg-[#FAF7F2] text-[#52525B] border-[#E4E4E0] hover:border-[#121212]/30'
                              }
                            `}
                          >
                            {rel}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Filter: Stage */}
                  <div>
                    <label className="block font-robotoMono text-[11px] font-bold uppercase tracking-[0.14em] text-[#71717A] mb-3">
                      Maturity Stage
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {STAGES.map((stg) => {
                        const isSel = selectedStage === stg;
                        return (
                          <button
                            key={stg}
                            type="button"
                            onClick={() => setSelectedStage(stg)}
                            className={`
                              px-3 py-1.5 rounded-md font-robotoMono text-[11px] font-medium border transition-colors cursor-pointer
                              ${
                                isSel
                                  ? 'bg-[#121212] text-white border-[#121212]'
                                  : 'bg-[#FAF7F2] text-[#52525B] border-[#E4E4E0] hover:border-[#121212]/30'
                              }
                            `}
                          >
                            {stg}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Filter: Location */}
                  <div>
                    <label className="block font-robotoMono text-[11px] font-bold uppercase tracking-[0.14em] text-[#71717A] mb-3">
                      Base Location
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {locationsList.map((loc) => {
                        const isSel = selectedLocation === loc;
                        return (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => setSelectedLocation(loc)}
                            className={`
                              px-3 py-1.5 rounded-md font-robotoMono text-[11px] font-medium border transition-colors cursor-pointer
                              ${
                                isSel
                                  ? 'bg-[#121212] text-white border-[#121212]'
                                  : 'bg-[#FAF7F2] text-[#52525B] border-[#E4E4E0] hover:border-[#121212]/30'
                              }
                            `}
                          >
                            {loc}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================
            4. RESULTS HEADER & SORTING
        ============================================================= */}
        <div className="flex items-center justify-between pb-4 mb-2 border-b border-[#E4E4E0]">
          {/* Result Count */}
          <div className="flex items-center gap-2">
            <span className="font-robotoMono text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#121212]">
              {filteredCompanies.length} COMPANIES
            </span>
            {(searchQuery || selectedCategory !== 'All' || activeFilterCount > 0) && (
              <span className="font-robotoMono text-[11px] text-[#EB5725]">
                (Filtered)
              </span>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <span className="font-robotoMono text-[11px] text-[#71717A] hidden sm:inline">
              Sort by:
            </span>
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort companies by"
                className="
                  appearance-none pl-3 pr-7 py-1.5 rounded-lg border border-[#E4E4E0] bg-white
                  font-robotoMono text-[11.5px] font-semibold text-[#121212]
                  focus:outline-none focus:border-[#EB5725] cursor-pointer
                "
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name A–Z</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#71717A] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ============================================================
            5. STRUCTURED EDITORIAL LIST ROWS
        ============================================================= */}
        {paginatedCompanies.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-[#E4E4E0] bg-white my-6">
            <p className="font-marcellus text-[22px] text-[#121212] mb-2">
              No startups found
            </p>
            <p className="font-robotoMono text-xs text-[#121212]/50 max-w-sm mb-6 leading-relaxed">
            We couldn&apos;t find any companies matching your current search or filter combination.
          </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#EB5725] text-white font-robotoMono text-[12px] font-semibold tracking-wider uppercase hover:bg-[#C84214] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="divide-y divide-[#E4E4E0]">
            {paginatedCompanies.map((company, index) => {
              const displayIndex = String(index + 1).padStart(2, '0');

              // Status badge styling
              const badgeColors: Record<string, string> = {
                Incubated: 'bg-[#FFF2ED] text-[#EB5725] border-[#EB5725]/30',
                Alumni: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#93C5FD]',
                Supported: 'bg-[#F0FDF4] text-[#15803D] border-[#86EFAC]',
                Accelerated: 'bg-[#FAF5FF] text-[#7E22CE] border-[#D8B4FE]',
                Partner: 'bg-[#F4F4F5] text-[#3F3F46] border-[#D4D4D8]',
              };

              return (
                <Link
                  key={company.id}
                  href={`/companies/${company.slug}`}
                  className="
                    group relative block py-5 sm:py-6 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-xl
                    transition-all duration-200 ease-out hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                  "
                >
                  {/* Subtle Left Orange Accent Strip on Hover */}
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#EB5725] rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  {/* Desktop Columns Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                    {/* Col 1: Index + Logo + Company Name & Tags (lg:col-span-5) */}
                    <div className="lg:col-span-5 flex items-center gap-4 sm:gap-5 min-w-0">
                      {/* Index Number */}
                      <span className="font-robotoMono text-[12px] sm:text-[13px] font-semibold text-[#71717A] w-6 shrink-0">
                        {displayIndex}
                      </span>

                      {/* Logo Container */}
                      <div className="w-12 h-12 rounded-xl border border-[#E4E4E0] bg-[#FAF7F2] p-2 flex items-center justify-center shrink-0 group-hover:border-[#EB5725]/40 transition-all duration-200 group-hover:scale-[1.03]">
                        {company.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <span className="font-marcellus text-[15px] font-bold text-[#121212]">
                            {company.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>

                      {/* Name & Industry Tags */}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-marcellus text-[18px] sm:text-[19px] font-bold text-[#121212] group-hover:text-[#EB5725] transition-all duration-200 group-hover:translate-x-0.5 truncate">
                          {company.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          {company.industries.map((ind) => (
                            <span
                              key={ind}
                              className="inline-block px-2 py-0.5 rounded bg-[#FAF7F2] text-[#52525B] font-robotoMono text-[10px] font-medium border border-[#E4E4E0]"
                            >
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Col 2: Short Description (lg:col-span-4) */}
                    <div className="lg:col-span-4 pl-11 lg:pl-0">
                      <p className="font-robotoMono text-[12px] leading-[1.65] text-[#52525B] line-clamp-2">
                        {company.description}
                      </p>
                    </div>

                    {/* Col 3: Metadata: Status Badge, Year, Location, Arrow (lg:col-span-3) */}
                    <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-3 sm:gap-5 pl-11 lg:pl-0 shrink-0">
                      {/* Relationship Pill */}
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full font-robotoMono text-[10.5px] font-bold tracking-wide border ${
                          (company.relationship && badgeColors[company.relationship]) || 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {company.relationship}
                      </span>

                      {/* Founded Year */}
                      <span className="font-robotoMono text-[12px] text-[#71717A] shrink-0">
                        {company.foundedYear}
                      </span>

                      {/* Location */}
                      <span className="font-robotoMono text-[11.5px] text-[#71717A] hidden sm:inline shrink-0">
                        {company.location}
                      </span>

                      {/* Details Arrow */}
                      <div className="w-8 h-8 rounded-full border border-[#E4E4E0] flex items-center justify-center text-[#121212] group-hover:border-[#EB5725] group-hover:bg-[#EB5725] group-hover:text-white transition-all duration-200 shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* ============================================================
            6. LOAD MORE BUTTON
        ============================================================= */}
        {hasMore && (
          <div className="flex items-center justify-center pt-10">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="
                group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl
                border border-[#E4E4E0] bg-white hover:border-[#EB5725]
                font-robotoMono text-[12px] font-bold uppercase tracking-[0.16em] text-[#121212]
                hover:text-[#EB5725] shadow-sm hover:shadow transition-all duration-200
                cursor-pointer
              "
            >
              <span>Load More Companies</span>
              <span className="text-[#EB5725] transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
              <span className="text-[#71717A] text-[11px] font-normal">
                ({filteredCompanies.length - visibleCount} remaining)
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
