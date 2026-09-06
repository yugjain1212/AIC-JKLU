'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import type { CompanyItem } from '@/data/companies';

interface CompanyModalProps {
  company: CompanyItem | null;
  onClose: () => void;
}

export default function CompanyModal({ company, onClose }: CompanyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (company) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [company, onClose]);

  if (!company) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
        />

        {/* Modal Window - Minimal Editorial Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative w-full max-w-xl max-h-[85vh] overflow-y-auto
            bg-[#FAF7F2] border border-[#E4DFD5] rounded-xl
            p-6 sm:p-8 md:p-10 shadow-xl z-10
          "
        >
          {/* Top Bar: Serial & Close */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E4DFD5]">
            <span className="font-robotoMono text-[11px] uppercase tracking-widest text-[#737373]">
              VENTURE / {String(company.id).padStart(2, '0')}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="
                p-1.5 -mr-1.5 text-[#737373] hover:text-[#121212]
                transition-colors duration-150 cursor-pointer
              "
            >
              <X size={18} />
            </button>
          </div>

          {/* Title & Sector */}
          <div className="mb-6">
            <h2 className="font-marcellus text-2xl sm:text-3xl text-[#121212] leading-tight mb-2">
              {company.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2 font-robotoMono text-[11px] text-[#737373]">
              <span>{company.location || 'Jaipur, India'}</span>
              <span>·</span>
              <span className="text-[#EB5725] font-medium">{company.sector}</span>
              <span>·</span>
              <span>{company.stage}</span>
            </div>
          </div>

          {/* Structured Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 my-6 border-y border-[#E4DFD5]">
            <div>
              <span className="block font-robotoMono text-[10px] uppercase tracking-widest text-[#888888] mb-0.5">
                Founder
              </span>
              <span className="font-robotoMono text-xs text-[#121212] font-medium">
                {company.founder || 'Founding Team'}
              </span>
            </div>

            <div>
              <span className="block font-robotoMono text-[10px] uppercase tracking-widest text-[#888888] mb-0.5">
                Stage
              </span>
              <span className="font-robotoMono text-xs text-[#121212] font-medium">
                {company.stage}
              </span>
            </div>

            <div className="sm:col-span-2">
              <span className="block font-robotoMono text-[10px] uppercase tracking-widest text-[#888888] mb-0.5">
                Sector
              </span>
              <span className="font-robotoMono text-xs text-[#121212] font-medium">
                {company.sector}
              </span>
            </div>
          </div>

          {/* About / Description */}
          <div className="mb-8">
            <span className="block font-robotoMono text-[10px] uppercase tracking-widest text-[#888888] mb-2">
              About
            </span>
            <p className="font-robotoMono text-xs leading-relaxed text-[#333333]">
              {company.description}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#E4DFD5] flex items-center justify-between">
            <span className="font-robotoMono text-[10px] uppercase tracking-wider text-[#888888]">
              Atal Incubation Centre — JKLU
            </span>
            <a
              href={`mailto:aic@jklu.edu.in?subject=Inquiry regarding ${encodeURIComponent(company.name)}`}
              className="
                inline-flex items-center gap-1.5 font-robotoMono text-[11px] font-medium
                text-[#EB5725] hover:text-[#121212] transition-colors cursor-pointer
              "
            >
              <span>Connect</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
