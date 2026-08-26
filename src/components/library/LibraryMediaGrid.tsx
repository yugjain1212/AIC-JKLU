'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import type { MediaItem } from '@/data/library';
import MediaPlaceholder from './MediaPlaceholder';

interface LibraryMediaGridProps {
  items: MediaItem[];
}

export default function LibraryMediaGrid({ items }: LibraryMediaGridProps) {
  return (
    <section id="archive-grid" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-4 pb-16 select-none">
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-4 sm:gap-5
          items-stretch
        "
      >
        {items.map((item, idx) => {
          // ── 1. Interactive Submit CTA Card ──
          if (item.isSubmitCard) {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className="
                  relative rounded-2xl overflow-hidden
                  bg-[#FAF7F0] border border-black/10
                  shadow-[0_8px_24px_rgba(0,0,0,0.04)]
                  p-5 sm:p-6 flex flex-col justify-between
                  group cursor-pointer h-[230px]
                "
              >
                <div>
                  <div className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-obsidian mb-2.5">
                    <MessageSquare size={14} className="text-obsidian" />
                  </div>

                  <h4 className="font-serif italic text-[1.35rem] sm:text-[1.45rem] leading-tight text-obsidian">
                    Have a moment
                    <br />
                    to share?
                  </h4>
                </div>

                <div>
                  <p className="font-robotoMono text-[10.5px] leading-relaxed text-slateMuted mb-2.5">
                    {item.description}
                  </p>

                  <a
                    href={item.ctaLink || '/apply'}
                    className="
                      inline-flex items-center gap-1.5
                      font-robotoMono text-[10.5px] font-bold uppercase tracking-[0.16em]
                      text-brand group-hover:text-brandHover
                      transition-colors
                    "
                  >
                    <span>{item.ctaText || 'SUBMIT HERE'}</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          }

          // ── 2. Portrait / Tall Photo Card ──
          if (item.aspectRatio === 'portrait') {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className="
                  relative lg:row-span-2 rounded-2xl overflow-hidden
                  bg-surface border border-black/10
                  shadow-[0_12px_32px_rgba(0,0,0,0.06)]
                  flex flex-col group cursor-pointer
                  min-h-[230px] lg:min-h-[470px]
                "
              >
                <div className="relative flex-1 w-full overflow-hidden min-h-[170px] lg:min-h-[380px]">
                  <MediaPlaceholder
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="p-3.5 sm:p-4 bg-surface border-t border-black/5">
                  <h4 className="font-marcellus text-[15px] sm:text-[16px] text-obsidian leading-snug group-hover:text-brand transition-colors">
                    {item.title}
                  </h4>
                  {item.date && (
                    <p className="font-robotoMono text-[10px] uppercase tracking-[0.12em] text-slateMuted mt-0.5">
                      {item.date}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          }

          // ── 3. Standard Clean Photo Card ──
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="
                relative rounded-2xl overflow-hidden
                bg-surface border border-black/10
                shadow-[0_8px_24px_rgba(0,0,0,0.04)]
                flex flex-col group cursor-pointer
                h-[230px]
              "
            >
              <div className="relative flex-1 w-full overflow-hidden">
                <MediaPlaceholder
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="p-3.5 bg-surface border-t border-black/5">
                <h4 className="font-marcellus text-[14.5px] sm:text-[15px] text-obsidian leading-snug line-clamp-1 group-hover:text-brand transition-colors">
                  {item.title}
                </h4>
                {item.date && (
                  <p className="font-robotoMono text-[10px] uppercase tracking-[0.12em] text-slateMuted mt-0.5">
                    {item.date}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
