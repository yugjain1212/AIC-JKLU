export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-90px)] bg-canvas px-6 lg:px-16">
      
      {/* ── Hero Content ── */}
      <div className="flex min-h-[calc(100vh-90px)] items-center justify-center">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center text-center">

          {/* ── Main Headline ── */}
          <h1
            className="
              font-marcellus
              text-[clamp(4rem,5vw,6.5rem)]
              leading-[0.95]
              tracking-[-0.045em]
              text-obsidian
              max-w-6xl
            "
          >
            Innovate Beyond
            <br />
            <em className="font-normal">
              Limits
            </em>
          </h1>

          {/* ── Subhead ── */}
          <p
            className="
              mt-10
              max-w-3xl
              font-inter
              text-lg
              leading-relaxed
              text-slateMuted
              sm:text-xl
              lg:text-xl
            "
          >
            Welcome to Atal Incubation Centre, Supported by NITI Aayog &amp;
            <br className="hidden sm:block" />
            JK Lakshmipat University.
          </p>

        </div>
      </div>
    </section>
  );
}