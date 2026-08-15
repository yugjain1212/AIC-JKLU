interface Startup {
  name: string;
  sector: string;
  description: string;
  batch: string;
}

const startups: Startup[] = [
  {
    name: 'AgriTech Dynamics',
    sector: 'AGRI / CLIMATE',
    description: 'AI-powered precision farming helping farmers optimize crop yields and reduce resource usage through IoT sensors.',
    batch: 'FALL_2025',
  },
  {
    name: 'MediCore AI',
    sector: 'HEALTHTECH / AI',
    description: 'Machine learning platform for early disease detection using medical imaging and patient data analysis.',
    batch: 'FALL_2025',
  },
  {
    name: 'FinEdge',
    sector: 'FINTECH',
    description: 'Blockchain-based cross-border payment solution for MSMEs with instant settlement and low transaction fees.',
    batch: 'SPRING_2025',
  },
  {
    name: 'EduVerse',
    sector: 'EDTECH / AI',
    description: 'Immersive VR learning platform creating virtual classrooms and interactive educational experiences.',
    batch: 'FALL_2024',
  },
  {
    name: 'GreenCharge',
    sector: 'CLEANTECH / EV',
    description: 'Smart EV charging network with AI-optimised load balancing and renewable energy integration.',
    batch: 'SPRING_2025',
  },
  {
    name: 'LogiChain',
    sector: 'DEEPTECH / AI',
    description: 'AI-driven supply chain platform predicting disruptions and optimising logistics routes in real time.',
    batch: 'FALL_2025',
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-canvas py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="font-marcellus text-[32px] text-obsidian mb-12">
          Featured Portfolio
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, i) => (
            <div
              key={i}
              className="bg-surface border border-hairline rounded-lg p-6 hover:border-slate-400 transition-colors duration-200 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="font-marcellus text-[20px] text-obsidian leading-snug">
                  {startup.name}
                </h3>
                <span className="shrink-0 bg-[#EFF6FF] text-[#1D4ED8] font-robotoMono text-[10px] px-2 py-1 rounded whitespace-nowrap">
                  [ {startup.sector} ]
                </span>
              </div>

              {/* Description */}
              <p className="font-inter text-[14px] text-slateMuted leading-relaxed flex-1 mb-6">
                {startup.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="font-robotoMono text-[11px] text-slateMuted">
                  [ {startup.batch} ]
                </span>
                <a
                  href="#"
                  className="font-robotoMono text-[12px] text-brand hover:text-brandHover transition-colors duration-200"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
