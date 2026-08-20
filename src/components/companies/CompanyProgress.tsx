import { motion } from 'framer-motion';

interface CompanyProgressProps {
  activeIndex: number;
  total: number;
}

export default function CompanyProgress({ activeIndex, total }: CompanyProgressProps) {
  const progress = (activeIndex + 1) / total;

  return (
    <div className="flex flex-col items-center gap-3 py-6">
      {/* Counter */}
      <p className="font-robotoMono text-[11px] text-slateMuted tracking-[0.12em]">
        <span className="text-obsidian font-medium">
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        {' / '}
        {String(total).padStart(2, '0')}
      </p>

      {/* Track */}
      <div className="relative w-48 h-[2px] bg-hairline rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-brand rounded-full"
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
