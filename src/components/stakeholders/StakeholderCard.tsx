'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Stakeholder } from '@/data/stakeholders';

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );
}

// Generate initials (e.g. "Aakarshan (AK) Sethi" -> "AS", "Prof. Dr. Saurabh Trivedi" -> "ST")
function getInitials(name: string): string {
  const clean = name.replace(/[().]/g, '').replace(/prof|dr|mr|ms|mrs/gi, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return 'AK';
}

interface StakeholderCardProps {
  stakeholder: Stakeholder;
  index: number;
}

export default function StakeholderCard({ stakeholder, index }: StakeholderCardProps) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(stakeholder.name);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.6,
        delay: Math.min((index % 10) * 0.05, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
      }}
      className="
        group
        relative
        w-full
        aspect-[0.74]
        overflow-hidden
        rounded-[18px]
        sm:rounded-[20px]
        bg-[#121212]
        shadow-[0_16px_36px_rgba(18,18,18,0.12)]
        cursor-pointer
      "
    >
      {/* ================================================================
          IMAGE (GRAYSCALE -> COLORFUL ON HOVER)
      ================================================================= */}
      {!imageError ? (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.045 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={stakeholder.image}
              alt={stakeholder.name}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
              onError={() => setImageError(true)}
              className="
                object-cover
                object-top
                grayscale
                group-hover:grayscale-0
                transition-[filter]
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
              "
            />
          </motion.div>
        </div>
      ) : (
        /* Neutral Monogram Fallback */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#2A2A2A] to-[#121212] p-4 text-center select-none">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 border border-white/20 mb-3">
            <span className="font-marcellus text-xl font-bold text-brand">
              {initials}
            </span>
          </div>
          <span className="font-robotoMono text-[9px] uppercase tracking-[0.18em] text-white/50">
            AIC — JKLU
          </span>
        </div>
      )}

      {/* ================================================================
          BOTTOM DARK GRADIENT OVERLAY (FOR TEXT LEGIBILITY)
      ================================================================= */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          h-[52%]
          bg-gradient-to-t
          from-[#121212]
          via-[#121212]/75
          to-transparent
          pointer-events-none
        "
      />

      {/* ================================================================
          LINKEDIN ICON (BOTTOM-LEFT HOVER)
      ================================================================= */}
      {stakeholder.linkedin && (
        <a
          href={stakeholder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`View ${stakeholder.name}'s LinkedIn profile`}
          title={`View ${stakeholder.name}'s LinkedIn`}
          className="
            group/btn
            absolute
            bottom-4
            left-4
            sm:bottom-5
            sm:left-5
            z-30

            flex
            items-center
            justify-center

            w-8
            h-8
            sm:w-9
            sm:h-9

            rounded-full
            bg-black/60
            hover:bg-[#0077b5]
            text-[#FBF7F0]
            hover:text-white

            backdrop-blur-md
            border
            border-white/20
            hover:border-[#0077b5]

            shadow-[0_4px_16px_rgba(0,0,0,0.4)]
            hover:shadow-[0_0_20px_rgba(0,119,181,0.6)]

            opacity-0
            scale-75
            translate-y-2
            group-hover:opacity-100
            group-hover:scale-100
            group-hover:translate-y-0

            transition-all
            duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]

            hover:scale-110
            active:scale-95
          "
        >
          <LinkedInIcon
            className="
              w-3.5
              h-3.5
              sm:w-4
              sm:h-4
              transition-transform
              duration-300
              group-hover/btn:scale-110
            "
          />
        </a>
      )}

      {/* ================================================================
          MEMBER INFORMATION OVER IMAGE (NAME IN ORANGE, ROLE IN WHITE)
      ================================================================= */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          px-3
          pb-4
          sm:px-4
          sm:pb-5
          text-center
          pointer-events-none
        "
      >
        <h3
          className="
            font-marcellus
            text-[1.12rem]
            sm:text-[1.25rem]
            lg:text-[1.32rem]
            leading-tight
            tracking-[-0.02em]
            text-brand
            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:-translate-y-0.5
          "
        >
          {stakeholder.name}
        </h3>

        <p
          className="
            mt-1.5
            font-robotoMono
            text-[8px]
            sm:text-[8.5px]
            lg:text-[9px]
            uppercase
            tracking-[0.14em]
            leading-relaxed
            text-canvas/90
            line-clamp-2
          "
        >
          {stakeholder.role}
        </p>
      </div>
    </motion.article>
  );
}

