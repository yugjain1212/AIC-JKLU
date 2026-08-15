export default function Hero() {
  return (
    <section className="bg-canvas py-20 lg:py-28 px-6 lg:px-16">
      <div className="flex flex-col items-center text-center max-w-screen-2xl mx-auto">

        {/* ── Status Badge ── */}
        <div
          className="
            inline-flex items-center gap-2
            bg-brandTint border border-[rgba(235,87,37,0.2)]
            px-3.5 py-1.5 rounded-full
            mb-8
          "
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse shrink-0" />
          <span className="font-robotoMono text-xs font-medium uppercase tracking-widest text-brand">
            [ Applications Open — Cohort 2026 ]
          </span>
        </div>

        {/* ── Main Headline ── */}
        <h1
          className="
            font-marcellus
            text-4xl sm:text-5xl lg:text-6xl
            leading-[1.15] tracking-tight
            text-obsidian
            max-w-4xl
            mb-6
          "
        >
          Backing Visionary Founders Building the Future from Jaipur.
        </h1>

        {/* ── Subhead ── */}
        <p
          className="
            font-inter
            text-base sm:text-lg
            leading-relaxed
            text-slateMuted
            max-w-2xl
            mb-10
          "
        >
          Supported by NITI Aayog &amp; JK Lakshmipat University. We provide seed
          capital, hands-on mentorship, and world-class lab infrastructure.
        </p>

        {/* ── CTA Button Group ── */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary */}
          <button
            type="button"
            className="
              w-full sm:w-auto
              font-robotoMono text-xs font-bold uppercase tracking-wider
              bg-brand hover:bg-brandHover text-white
              px-6 py-3.5 rounded-md
              transition-colors duration-200
            "
          >
            Apply for Incubation
          </button>

          {/* Secondary */}
          <button
            type="button"
            className="
              w-full sm:w-auto
              font-robotoMono text-xs font-bold uppercase tracking-wider
              bg-surface border border-hairline hover:border-obsidian text-obsidian
              px-6 py-3.5 rounded-md
              transition-colors duration-200
            "
          >
            Explore Startups
          </button>
        </div>

      </div>
    </section>
  );
}
