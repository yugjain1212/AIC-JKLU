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
        h-[210px] sm:h-[245px] lg:h-[280px] xl:h-[300px] w-full
        rounded-2xl lg:rounded-3xl
        border border-black/[0.08]
        bg-[#F7F2EA] shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        transition-all duration-700 ease-out
        cursor-grab active:cursor-grabbing
        select-none
      "
      style={{
        /* Active card is prominent; side cards have lower opacity */
        opacity: isActive ? 1 : 0.42,
        transition: 'opacity 0.45s ease',
      }}
    >
      {/* Company card image — edge-to-edge graphic */}
      <AnimatePresence mode="wait">
        <motion.div
          key={company.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 0.8, 0.36, 0.8] }}
          className="relative w-full h-full"
        >
          <Image
            src={company.image}
            alt={company.name}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 650px"
            className="object-cover w-full h-full select-none"
            draggable={false}
            priority={isActive}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
