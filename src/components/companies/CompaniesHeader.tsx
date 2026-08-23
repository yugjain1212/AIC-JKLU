import { motion } from 'framer-motion';

export default function CompaniesHeader() {
  return (
    <div className="px-6 lg:px-8 pb-2 lg:pb-2.5 max-w-screen-2xl mx-auto w-full">
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-robotoMono text-[10px] uppercase tracking-[0.22em] text-brand mb-1 lg:mb-1.5"
      >
        04 — Companies
      </motion.p>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2.5 lg:gap-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
          className="
            font-marcellus
            text-[clamp(1.6rem,2.5vw,2.4rem)]
            leading-[1.04]
            tracking-[-0.03em]
            text-obsidian
            max-w-xl
          "
        >
          Building companies
          <br />
          that shape tomorrow.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="
            font-robotoMono text-[12px] lg:text-[13px]
            leading-relaxed text-slateMuted
            max-w-sm lg:text-right
            shrink-0
          "
        >
          AIC-JKLU supports ambitious founders and
          startups transforming ideas into impactful ventures.
        </motion.p>
      </div>
    </div>
  );
}
