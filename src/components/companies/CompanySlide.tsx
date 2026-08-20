import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Company } from '@/data/companies';

interface CompanySlideProps {
  company: Company;
  isActive: boolean;
}

export default function CompanySlide({ company, isActive }: CompanySlideProps) {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-2xl lg:rounded-3xl
        border border-black/[0.08]
        transition-all duration-700 ease-out
        cursor-grab active:cursor-grabbing
        select-none
      "
      style={{
        /* Active card is larger; Swiper coverflow handles 3D, we add extra opacity */
        opacity: isActive ? 1 : 0.55,
        transition: 'opacity 0.5s ease',
      }}
    >
      {/* Aspect ratio container */}
      <div className="relative aspect-[16/10] w-full bg-hairline">
        {/* Placeholder when no real image exists */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8e2d9] to-[#cfc8bc] flex items-center justify-center">
          <span className="font-marcellus text-[clamp(1.5rem,3vw,2.5rem)] text-obsidian/30 select-none">
            {company.name}
          </span>
        </div>

        {/* Real company image — shown on top of placeholder when available */}
        <AnimatePresence mode="wait">
          <motion.div
            key={company.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={company.image}
              alt={company.name}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 55vw, 640px"
              className="object-cover"
              // Don't fail if image missing — placeholder div below shows instead
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              priority={isActive}
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom gradient overlay — only on active */}
        {isActive && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.52) 0%, transparent 55%)',
            }}
          />
        )}

        {/* Company name overlay on active */}
        {isActive && (
          <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
            <p className="font-marcellus text-white text-[clamp(1.1rem,2vw,1.6rem)] leading-tight">
              {company.name}
            </p>
            <p className="font-robotoMono text-white/60 text-[10px] uppercase tracking-[0.14em] mt-1">
              {company.industry}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
