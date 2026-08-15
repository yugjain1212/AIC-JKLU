export default function Hero() {
  return (
    <section className="bg-canvas py-20 lg:py-28 px-6 lg:px-16">
      <div className="flex flex-col items-center text-center max-w-screen-2xl mx-auto">

       

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
        </div>

      </div>
    </section>
  );
}
