import { Shuffle, TrendingUp, LayoutGrid } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const painPoints = [
  {
    icon: Shuffle,
    title: 'Multi-model management is painful',
    description:
      'Switching LLM providers means rewriting integrations, updating prompts, and retesting everything. Each new model adds complexity.',
  },
  {
    icon: TrendingUp,
    title: 'Costs spiral without visibility',
    description:
      'No way to see per-agent, per-model spending in real time. Token costs pile up across teams with zero accountability.',
  },
  {
    icon: LayoutGrid,
    title: 'No single pane of glass',
    description:
      'Agents scattered across teams, repos, and cloud providers. No unified way to monitor, debug, or govern them.',
  },
];

export function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">Why orchestration is hard</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
              AI agents are powerful individually. But running them at scale across your
              organization? That&apos;s where things break down.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {painPoints.map((point, i) => (
            <AnimateIn key={point.title} delay={0.1 + i * 0.1}>
              <div className="rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 transition-colors hover:border-brand-500/30 hover:bg-brand-50 dark:hover:bg-mono-surface/60">
                <point.icon className="h-8 w-8 text-brand-500 dark:text-brand-400" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-mono-text">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{point.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
