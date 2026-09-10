'use client';

import { motion } from 'framer-motion';
import type { MediaItem } from '@/data/library';
import MediaPlaceholder from './MediaPlaceholder';

interface LibraryMediaGridProps {
  items: MediaItem[];
}

export default function LibraryMediaGrid({ items }: LibraryMediaGridProps) {
  return (
    <section
      id="archive-grid"
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-4 pb-16 select-none"
    >
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-4 sm:gap-5
          items-stretch
        "
      >
        {items.map((item, idx) => {
          // ── Portrait / Tall Photo Card ──
          if (item.aspectRatio === 'portrait') {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.03,
                }}
                className="
                  relative lg:row-span-2 rounded-2xl overflow-hidden
                  bg-surface border border-black/10
                  shadow-[0_12px_32px_rgba(0,0,0,0.06)]
                  flex flex-col group cursor-pointer
                  min-h-[230px] lg:min-h-[470px]
                "
              >
                <div
                  className="
                    relative flex-1 w-full overflow-hidden
                    min-h-[170px] lg:min-h-[380px]
                  "
                >
                  <MediaPlaceholder
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="p-3.5 sm:p-4 bg-surface border-t border-black/5">
                  <h4
                    className="
                      font-marcellus
                      text-[15px] sm:text-[16px]
                      text-obsidian
                      leading-snug
                      group-hover:text-brand
                      transition-colors
                    "
                  >
                    {item.title}
                  </h4>

                  {item.date && (
                    <p
                      className="
                        font-robotoMono
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-slateMuted
                        mt-0.5
                      "
                    >
                      {item.date}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          }

          // ── Standard Clean Photo Card ──
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.03,
              }}
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
                <h4
                  className="
                    font-marcellus
                    text-[14.5px] sm:text-[15px]
                    text-obsidian
                    leading-snug
                    line-clamp-1
                    group-hover:text-brand
                    transition-colors
                  "
                >
                  {item.title}
                </h4>

                {item.date && (
                  <p
                    className="
                      font-robotoMono
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-slateMuted
                      mt-0.5
                    "
                  >
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