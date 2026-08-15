export default function FooterCTA() {
  return (
    <section className="bg-canvas py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* CTA Box */}
        <div className="bg-brandTint border border-brand rounded-xl p-10 text-center">
          <h2 className="font-marcellus text-[32px] text-obsidian mb-6">
            Turn Your Innovation Into a Scalable Venture.
          </h2>
          <p className="font-inter text-[16px] text-slateMuted max-w-xl mx-auto mb-8">
            Join the next cohort of visionary founders building the future from Jaipur.
          </p>
          <button className="bg-brand hover:bg-brandHover text-white font-roboto-mono text-[14px] font-bold px-8 py-3 rounded transition-colors duration-200">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}