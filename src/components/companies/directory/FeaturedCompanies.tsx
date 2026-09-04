'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { companies, type Company } from '@/data/companies';

export default function FeaturedCompanies() {
  const featuredList = companies.filter((c) => c.featured);
  // Fallback to first 3 companies if none marked featured
  const displayPool = featuredList.length >= 3 ? featuredList : companies.slice(0, 6);

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, displayPool.length - itemsPerPage) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= displayPool.length ? 0 : prev + 1));
  };

  const visibleCompanies = displayPool.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative w-full py-12 sm:py-16 border-b border-[#E4E4E0]/80 bg-[#FBF7F0]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-24">
        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EB5725]" />
              <span className="font-robotoMono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#121212]">
                FEATURED COMPANIES
              </span>
            </div>
            <p className="font-robotoMono text-[12.5px] text-[#52525B]">
              A few of the many startups building from AIC-JKLU.
            </p>
          </div>

          {/* Navigation Arrows for Slider */}
          {displayPool.length > itemsPerPage && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous featured companies"
                className="w-9 h-9 rounded-full border border-[#E4E4E0] bg-white flex items-center justify-center text-[#121212] hover:border-[#EB5725] hover:text-[#EB5725] transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next featured companies"
                className="w-9 h-9 rounded-full border border-[#E4E4E0] bg-white flex items-center justify-center text-[#121212] hover:border-[#EB5725] hover:text-[#EB5725] transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* ── 3 Horizontal Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visibleCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="h-full"
              >
                <Link
                  href={`/companies/${company.slug}`}
                  className="
                    group relative flex flex-col justify-between h-full p-6 sm:p-7
                    bg-white rounded-xl border border-[#E4E4E0]
                    shadow-[0_2px_12px_rgba(0,0,0,0.03)]
                    hover:border-[#121212]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                    transition-all duration-300 ease-out hover:-translate-y-1 overflow-hidden
                  "
                >
                  {/* Subtle Background Generative Linework Decoration */}
                  <svg
                    className="absolute right-0 bottom-0 w-36 h-36 pointer-events-none text-[#EB5725]/10 group-hover:text-[#EB5725]/20 transition-colors duration-300"
                    viewBox="0 0 160 160"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 160 80 C 120 70, 80 110, 60 160 M 160 50 C 100 40, 60 90, 30 160 M 160 20 C 80 10, 40 70, 0 160"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeDasharray="2 3"
                    />
                    <circle cx="120" cy="120" r="3" fill="currentColor" />
                  </svg>

                  <div>
                    {/* Top: Logo & Header */}
                    <div className="flex items-start gap-4 mb-5">
                      {/* Normalized Logo Box */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl border border-[#E4E4E0] bg-[#FAF7F2] p-2.5 flex items-center justify-center shrink-0 group-hover:border-[#EB5725]/40 transition-colors duration-300">
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
                          <span className="font-marcellus text-[18px] font-bold text-[#121212]">
                            {company.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>

                      {/* Name & Industry Tags */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <h3 className="font-marcellus text-[19px] sm:text-[20px] font-bold text-[#121212] truncate group-hover:text-[#EB5725] transition-colors duration-200">
                          {company.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                          {company.industries.slice(0, 2).map((ind) => (
                            <span
                              key={ind}
                              className="inline-block px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#52525B] font-robotoMono text-[10px] font-medium border border-[#E4E4E0]"
                            >
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-robotoMono text-[12px] leading-[1.7] text-[#52525B] line-clamp-3 mb-6">
                      {company.description}
                    </p>
                  </div>

                  {/* Card Footer: Metadata & Arrow Button */}
                  <div className="pt-4 border-t border-[#E4E4E0]/70 flex items-center justify-between gap-2 mt-auto">
                    <span className="font-robotoMono text-[11px] text-[#71717A] tracking-wider truncate">
                      <strong className="text-[#121212] font-semibold">{company.relationship}</strong> · {company.foundedYear} · {company.location}
                    </span>

                    <div className="w-8 h-8 rounded-full border border-[#E4E4E0] flex items-center justify-center text-[#121212] group-hover:bg-[#EB5725] group-hover:border-[#EB5725] group-hover:text-white transition-all duration-200 shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
