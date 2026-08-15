interface Startup {
  name: string;
  sector: string;
  description: string;
  batch: string;
  website?: string;
}

const startups: Startup[] = [
  {
    name: 'AgriTech Dynamics',
    sector: 'AGRI / CLIMATE',
    description: 'AI-powered precision farming solutions helping farmers optimize crop yields and reduce resource usage through IoT sensors.',
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
    description: 'Smart EV charging infrastructure network with AI-optimized load balancing and renewable energy integration.',
    batch: 'SPRING_2025',
  },
  {
    name: 'LogiChain',
    sector: 'DEEPTECH / AI',
    description: 'AI-driven supply chain optimization platform predicting disruptions and optimizing logistics routes.',
    batch: 'FALL_2025',
  },
];

export default function PortfolioGrid() {
  return (
    <section className="bg-canvas py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="font-marcellus text-[32px] text-obsidian mb-12">
          Featured Portfolio
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, index) => (
            <div
              key={index}
              className="bg-surface border border-hairline rounded-lg p-6 hover:border-slate-400 transition-colors duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-marcellus text-[20px] text-obsidian">
                  {startup.name}
                </h3>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-roboto-mono text-[10px] px-2 py-1 rounded">
                  [ {startup.sector} ]
                </span>
              </div>

              {/* Description */}
              <p className="font-inter text-[14px] text-slateMuted leading-relaxed mb-6">
                {startup.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="font-roboto-mono text-[11px] text-slateMuted">
                  [ {startup.batch} ]
                </span>
                <a
                  href="#"
                  className="font-roboto-mono text-[12px] text-brand hover:text-brandHover transition-colors duration-200"
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