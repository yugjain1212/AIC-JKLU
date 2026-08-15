import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import PortfolioGrid from '@/components/PortfolioGrid';
import FooterCTA from '@/components/FooterCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <Hero />
      <MetricsBar />
      <PortfolioGrid />
      <FooterCTA />
      
      {/* Simple Footer */}
      <footer className="bg-surface border-t border-hairline py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-marcellus text-[18px] text-obsidian">
            AIC-JKLU
          </div>
          <div className="font-roboto-mono text-[11px] text-slateMuted">
            © 2026 Atal Incubation Centre - JK Lakshmipat University. Supported by NITI Aayog.
          </div>
        </div>
      </footer>
    </main>
  );
}