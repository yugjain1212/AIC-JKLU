'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import type { TeamMember } from '@/data/team';

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({
  member,
  index,
}: TeamCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        w-full
        max-w-[360px]
        aspect-[0.72]
        overflow-hidden
        rounded-[20px]
        sm:rounded-[22px]
        bg-[#121212]
        shadow-[0_20px_45px_rgba(18,18,18,0.14)]
        cursor-pointer
      "
    >
      {/* ================================================================
          IMAGE
      ================================================================= */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="
            relative
            h-full
            w-full
          "
          whileHover={{
            scale: 1.045,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="
              (max-width: 768px) 90vw,
              (max-width: 1024px) 45vw,
              30vw
            "
            className="
              object-cover

              grayscale
              group-hover:grayscale-0

              transition-[filter]
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
          />
        </motion.div>
      </div>

      {/* ================================================================
          IMAGE DARK GRADIENT
      ================================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          h-[48%]

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

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`View ${member.name}'s LinkedIn profile`}
          title={`View ${member.name}'s LinkedIn`}
          className="
            group/btn
            absolute
            bottom-5
            left-5
            sm:bottom-6
            sm:left-6
            z-30

            flex
            items-center
            justify-center

            w-9
            h-9
            sm:w-10
            sm:h-10

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
              w-4
              h-4
              sm:w-[18px]
              sm:h-[18px]
              transition-transform
              duration-300
              group-hover/btn:scale-110
            "
          />
        </a>
      )}

      {/* ================================================================
          MEMBER INFORMATION
      ================================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20

          px-14
          pb-6

          sm:px-14
          sm:pb-7

          text-center
          pointer-events-none
        "
      >
        <h3
          className="
            font-marcellus

            text-[1.35rem]
            sm:text-[1.5rem]
            lg:text-[1.55rem]

            leading-tight
            tracking-[-0.02em]

            text-brand

            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:-translate-y-1
          "
        >
          {member.name}
        </h3>

        <p
          className="
            mt-2

            font-robotoMono

            text-[8.5px]
            sm:text-[9px]
            lg:text-[9.5px]

            uppercase
            tracking-[0.15em]
            leading-relaxed

            text-canvas
          "
        >
          {member.role}
        </p>
      </div>
    </motion.article>
  );
}