'use client';

import { ArrowUpDown } from 'lucide-react';

export type SortOrder = 'A-Z' | 'Z-A';

interface StakeholderFiltersProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  sortOrder: SortOrder;
  onToggleSort: () => void;
  resultCount: number;
}

export default function StakeholderFilters({
  categories,
  activeCategory,
  onSelectCategory,
  sortOrder,
  onToggleSort,
  resultCount,
}: StakeholderFiltersProps) {
  const allTabs = ['ALL', ...categories];

  return (
    <div className="sticky top-[82px] z-30 w-full border-b border-[#E4E4E0] bg-[#FBF7F0]/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-6">
          
          {/* ── FILTER BUTTONS (Horizontally scrollable on mobile) ── */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 -my-1">
            {allTabs.map((tab) => {
              const isSelected =
                activeCategory.toUpperCase() === tab.toUpperCase() ||
                (activeCategory === 'ALL' && tab === 'ALL');

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onSelectCategory(tab)}
                  className={`
                    whitespace-nowrap rounded-full px-3.5 sm:px-4 py-2 font-robotoMono text-[10.5px] sm:text-[11.5px] font-medium uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer shrink-0
                    ${
                      isSelected
                        ? 'bg-[#121212] text-[#FBF7F0] shadow-sm'
                        : 'bg-white/70 text-[#52525B] border border-[#E4E4E0] hover:border-[#121212]/30 hover:text-[#121212]'
                    }
                  `}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* ── SORT & COUNT CONTROLS (Right) ── */}
          <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-1 sm:pt-0">
            {/* Result count */}
            <span className="font-robotoMono text-[11px] sm:text-[12px] text-[#52525B] uppercase tracking-[0.12em]">
              Showing <strong className="text-[#121212] font-semibold">{resultCount}</strong>
            </span>

            {/* A–Z Sort Button */}
            <button
              type="button"
              onClick={onToggleSort}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E4E0] bg-white/80 px-3.5 py-1.5 font-robotoMono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#121212] transition-all duration-200 hover:border-[#EB5725] hover:text-[#EB5725] cursor-pointer shadow-sm"
              title={`Sorting: ${sortOrder}. Click to switch.`}
            >
              <ArrowUpDown className="h-3 w-3 text-[#EB5725]" />
              <span>{sortOrder}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
