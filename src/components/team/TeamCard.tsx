'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import type { TeamMember } from '@/data/team';

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
          MEMBER INFORMATION
      ================================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20

          px-5
          pb-6

          sm:px-6
          sm:pb-7

          text-center
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