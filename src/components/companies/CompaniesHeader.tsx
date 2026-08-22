import { motion } from 'framer-motion';

export default function CompaniesHeader() {
  return (
    <div className="px-6 lg:px-16 pb-12 lg:pb-16 max-w-screen-2xl mx-auto w-full">
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-robotoMono text-[10px] uppercase tracking-[0.22em] text-brand mb-5"
      >
        04 — Companies
      </motion.p>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="
            font-marcellus
            text-[clamp(2.4rem,4.5vw,5rem)]
            leading-[0.95]
            tracking-[-0.035em]
            text-obsidian
            max-w-2xl
          "
        >
          Building companies
          <br />
          that shape tomorrow.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="
            font-robotoMono text-[15px] lg:text-[16px]
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
