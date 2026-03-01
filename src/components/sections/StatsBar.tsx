import { AnimateIn } from '@/components/ui/AnimateIn';

const stats = [
  { value: '7+', label: 'LLM Providers Supported' },
  { value: '20-40%', label: 'Target Cost Reduction' },
  { value: '6+', label: 'Integration Connectors' },
  { value: 'Enterprise', label: 'Security First' },
];

export function StatsBar() {
  return (
    <section className="border-y border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <AnimateIn key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-600 dark:text-brand-400 sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-mono-secondary">{stat.label}</div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
