import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, MapPin, Calendar, Building, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { companies, type Company } from '@/data/companies';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return companies.map((comp) => ({
    slug: comp.slug,
  }));
}

export default function CompanyDetailPage({ params }: PageProps) {
  const company = companies.find((c) => c.slug === params.slug);

  if (!company) {
    notFound();
  }

  // Related startups from same industry
  const relatedCompanies = companies
    .filter((c) => c.id !== company.id && c.industries.some((ind) => company.industries.includes(ind)))
    .slice(0, 3);

  const badgeColors: Record<string, string> = {
    Incubated: 'bg-[#FFF2ED] text-[#EB5725] border-[#EB5725]/30',
    Alumni: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#93C5FD]',
    Supported: 'bg-[#F0FDF4] text-[#15803D] border-[#86EFAC]',
    Accelerated: 'bg-[#FAF5FF] text-[#7E22CE] border-[#D8B4FE]',
    Partner: 'bg-[#F4F4F5] text-[#3F3F46] border-[#D4D4D8]',
  };

  return (
    <main className="min-h-screen bg-[#FBF7F0] text-[#121212] flex flex-col justify-between selection:bg-[#EB5725] selection:text-white">
      <Navbar />

      <div className="flex-1 w-full py-8 sm:py-12">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-12">
          {/* ── Back Navigation ── */}
          <div className="mb-8">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 font-robotoMono text-[12px] font-bold uppercase tracking-[0.16em] text-[#71717A] hover:text-[#EB5725] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Directory</span>
            </Link>
          </div>

          {/* ── Company Header Card ── */}
          <div className="p-8 sm:p-10 rounded-2xl border border-[#E4E4E0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#E4E4E0]">
              <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                {/* Logo Box */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-[#E4E4E0] bg-[#FAF7F2] p-3 flex items-center justify-center shrink-0">
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
                    <span className="font-marcellus text-[28px] font-bold text-[#121212]">
                      {company.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Company Name & Metadata */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`inline-block px-3 py-0.5 rounded-full font-robotoMono text-[11px] font-bold border ${
                        badgeColors[company.relationship] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {company.relationship}
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full font-robotoMono text-[10.5px] font-semibold bg-[#FAF7F2] text-[#52525B] border border-[#E4E4E0]">
                      {company.stage} Stage
                    </span>
                  </div>

                  <h1 className="font-marcellus text-[32px] sm:text-[44px] font-bold text-[#121212] leading-tight">
                    {company.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-[#71717A] font-robotoMono text-[12px] mt-2">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#EB5725]" />
                      Founded {company.foundedYear}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#EB5725]" />
                      {company.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Website CTA */}
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                    bg-[#121212] hover:bg-[#EB5725] text-white font-robotoMono text-[12px]
                    font-bold uppercase tracking-wider transition-all duration-200 shrink-0
                  "
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Industry Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-6">
              <span className="font-robotoMono text-[11px] font-bold uppercase tracking-wider text-[#71717A] mr-2">
                Industries:
              </span>
              {company.industries.map((ind) => (
                <span
                  key={ind}
                  className="px-3 py-1 rounded-lg bg-[#FAF7F2] font-robotoMono text-[11px] font-medium text-[#121212] border border-[#E4E4E0]"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* ── Key Metrics Grid ── */}
          {company.metrics && company.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {company.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[#E4E4E0] bg-white text-center shadow-sm"
                >
                  <div className="font-marcellus text-[36px] sm:text-[42px] font-bold text-[#EB5725] mb-1">
                    {metric.value}
                  </div>
                  <div className="font-robotoMono text-[11px] font-bold uppercase tracking-[0.14em] text-[#71717A]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Two Column Overview & Focus Areas ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            {/* Left 8 cols: Story & About */}
            <div className="lg:col-span-8 space-y-8">
              {/* Mission */}
              <div className="p-8 rounded-2xl border border-[#E4E4E0] bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#EB5725]" />
                  <h2 className="font-robotoMono text-[11px] font-bold uppercase tracking-[0.18em] text-[#121212]">
                    About {company.name}
                  </h2>
                </div>
                <p className="font-robotoMono text-[14px] leading-[1.9] text-[#52525B] mb-6">
                  {company.description}
                </p>

                {company.story && (
                  <div className="pt-6 border-t border-[#E4E4E0]">
                    <h3 className="font-marcellus text-[20px] font-bold text-[#121212] mb-3">
                      The AIC-JKLU Journey
                    </h3>
                    <p className="font-robotoMono text-[13px] leading-[1.8] text-[#52525B]">
                      {company.story}
                    </p>
                  </div>
                )}
              </div>

              {/* Founders Section */}
              {company.founders && company.founders.length > 0 && (
                <div className="p-8 rounded-2xl border border-[#E4E4E0] bg-white shadow-sm">
                  <h2 className="font-robotoMono text-[11px] font-bold uppercase tracking-[0.18em] text-[#121212] mb-6">
                    Leadership & Founders
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {company.founders.map((founder, idx) => (
                      <div key={idx} className="p-5 rounded-xl border border-[#E4E4E0] bg-[#FAF7F2]">
                        <div className="font-marcellus text-[18px] font-bold text-[#121212] mb-1">
                          {founder.name}
                        </div>
                        {founder.role && (
                          <div className="font-robotoMono text-[11px] font-semibold text-[#EB5725] uppercase tracking-wider mb-3">
                            {founder.role}
                          </div>
                        )}
                        {founder.bio && (
                          <p className="font-robotoMono text-[12px] leading-[1.7] text-[#52525B]">
                            {founder.bio}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 cols: Technical Specifications & Ecosystem Context */}
            <div className="lg:col-span-4 space-y-6">
              {/* Focus Areas Card */}
              <div className="p-6 sm:p-7 rounded-2xl border border-[#E4E4E0] bg-white shadow-sm">
                <h3 className="font-robotoMono text-[11px] font-bold uppercase tracking-[0.16em] text-[#121212] mb-4">
                  Core Focus Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {company.focusAreas.split(',').map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] font-robotoMono text-[11px] text-[#52525B] border border-[#E4E4E0]"
                    >
                      {area.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Incubation Snapshot */}
              <div className="p-6 sm:p-7 rounded-2xl border border-[#EB5725]/30 bg-[#FFF2ED] shadow-sm">
                <h3 className="font-marcellus text-[20px] font-bold text-[#121212] mb-2">
                  AIC-JKLU Support
                </h3>
                <p className="font-robotoMono text-[12px] leading-[1.7] text-[#52525B] mb-5">
                  This startup benefited from university prototyping labs, seed grants, intellectual property filing support, and venture network access.
                </p>
                <Link
                  href="/programs/incubation"
                  className="inline-flex items-center gap-1.5 font-robotoMono text-[11px] font-bold uppercase tracking-wider text-[#EB5725] hover:underline"
                >
                  <span>Explore Incubation Program</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Related Ecosystem Startups ── */}
          {relatedCompanies.length > 0 && (
            <div className="pt-8 border-t border-[#E4E4E0]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-marcellus text-[24px] font-bold text-[#121212]">
                  Related Ecosystem Startups
                </h3>
                <Link
                  href="/companies"
                  className="font-robotoMono text-[11.5px] font-bold text-[#EB5725] hover:underline uppercase tracking-wider"
                >
                  View All Companies →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCompanies.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/companies/${rel.slug}`}
                    className="p-6 rounded-xl border border-[#E4E4E0] bg-white hover:border-[#EB5725]/40 hover:-translate-y-0.5 transition-all shadow-sm"
                  >
                    <div className="font-marcellus text-[18px] font-bold text-[#121212] mb-1">
                      {rel.name}
                    </div>
                    <div className="font-robotoMono text-[10.5px] text-[#EB5725] font-semibold uppercase tracking-wider mb-2">
                      {rel.relationship} · {rel.foundedYear}
                    </div>
                    <p className="font-robotoMono text-[11.5px] text-[#52525B] line-clamp-2">
                      {rel.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
