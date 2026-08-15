export default function MetricsBar() {
  const metrics = [
    { value: '50+', label: 'INCUBATED STARTUPS' },
    { value: '₹25Cr+', label: 'FOLLOW-ON FUNDING' },
    { value: '100+', label: 'INDUSTRY MENTORS' },
    { value: '85%', label: 'SURVIVAL RATE' },
  ];

  return (
    <section className="bg-surface border-y border-hairline">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
          {metrics.map((metric, index) => (
            <div key={index} className="py-8 px-6 text-center">
              <div className="font-marcellus text-[36px] text-obsidian mb-1">
                {metric.value}
              </div>
              <div className="font-roboto-mono text-[11px] uppercase tracking-wider text-slateMuted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}