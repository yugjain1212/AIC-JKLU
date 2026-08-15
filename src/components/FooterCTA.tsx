export default function FooterCTA() {
  return (
    <section className="bg-canvas py-20 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brandTint border border-brand rounded-xl p-10 text-center">
          <h2 className="font-marcellus text-[32px] text-obsidian mb-4 leading-snug">
            Turn Your Innovation Into a Scalable Venture.
          </h2>
          <p className="font-inter text-[16px] text-slateMuted max-w-xl mx-auto mb-8 leading-relaxed">
            Join the next cohort of visionary founders building the future from Jaipur.
          </p>
          <button
            type="button"
            className="bg-brand hover:bg-brandHover text-white font-robotoMono text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-md transition-colors duration-200"
          >
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}
