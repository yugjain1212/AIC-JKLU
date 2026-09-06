import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { STARTUPS, type CompanyItem } from '@/data/companies';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return STARTUPS.map((startup) => ({
    slug: String(startup.id),
  }));
}

export default function CompanyDetailPage({ params }: PageProps) {
  const startup = STARTUPS.find(
    (s) =>
      String(s.id) === params.slug ||
      s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === params.slug.toLowerCase()
  );

  if (!startup) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#121212] flex flex-col justify-between selection:bg-[#121212] selection:text-white">
      <Navbar />

      <div className="flex-1 w-full py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 font-robotoMono text-xs uppercase tracking-wider text-[#737373] hover:text-[#121212] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Directory</span>
            </Link>
          </div>

          {/* Minimal Editorial Detail Card */}
          <div className="bg-[#FFFFFF] border border-[#E4DFD5] rounded-xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E4DFD5]">
              <span className="font-robotoMono text-[11px] uppercase tracking-widest text-[#737373]">
                VENTURE / {String(startup.id).padStart(2, '0')}
              </span>
              <span className="font-robotoMono text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#F0EBE1] text-[#121212]">
                {startup.stage}
              </span>
            </div>

            <h1 className="font-marcellus text-3xl sm:text-4xl text-[#121212] leading-tight mb-2">
              {startup.name}
            </h1>

            <div className="flex flex-wrap items-center gap-2 font-robotoMono text-xs text-[#737373] mb-8">
              <span>{startup.location || 'Jaipur, India'}</span>
              <span>·</span>
              <span className="text-[#EB5725] font-medium">{startup.sector}</span>
            </div>

            {/* Grid Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 my-6 border-y border-[#E4DFD5]">
              <div>
                <span className="block font-robotoMono text-[10px] uppercase tracking-widest text-[#888888] mb-0.5">
                  Founder(s)
                </span>
                <span className="font-robotoMono text-xs text-[#121212] font-medium">
                  {startup.founder || 'Founding Team'}
                </span>
              </div>

              <div>
                <span className="block font-robotoMono text-[10px] uppercase tracking-widest text-[#888888] mb-0.5">
                  Stage
                </span>
                <span className="font-robotoMono text-xs text-[#121212] font-medium">
                  {startup.stage}
                </span>
              </div>

              <div className="sm:col-span-2">
                <span className="block font-robotoMono text-[10px] uppercase tracking-widest text-[#888888] mb-0.5">
                  Sector
                </span>
                <span className="font-robotoMono text-xs text-[#121212] font-medium">
                  {startup.sector}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <span className="block font-robotoMono text-[10px] uppercase tracking-widest text-[#888888] mb-2">
                About
              </span>
              <p className="font-robotoMono text-xs sm:text-sm leading-relaxed text-[#333333]">
                {startup.description}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-[#E4DFD5] flex items-center justify-between">
              <span className="font-robotoMono text-[10px] uppercase tracking-wider text-[#888888]">
                Atal Incubation Centre — JKLU
              </span>
              <a
                href={`mailto:aic@jklu.edu.in?subject=Inquiry regarding ${encodeURIComponent(startup.name)}`}
                className="
                  inline-flex items-center gap-1.5 font-robotoMono text-xs font-medium
                  text-[#EB5725] hover:text-[#121212] transition-colors cursor-pointer
                "
              >
                <span>Connect</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
