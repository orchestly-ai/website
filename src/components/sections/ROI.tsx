import { ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const metrics = [
  {
    metric: 'Model routing & failover',
    before: 'Manual switching, downtime risk',
    after: 'Automated routing & failover',
  },
  {
    metric: 'Cost visibility',
    before: 'Monthly surprise invoices',
    after: 'Real-time per-agent tracking',
  },
  {
    metric: 'Agent deployment',
    before: 'Days of DevOps work',
    after: 'Streamlined deployment',
  },
  {
    metric: 'LLM spend optimization',
    before: 'No visibility or control',
    after: 'Targeting 20-40% savings',
  },
];

export function ROI() {
  return (
    <section id="roi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              The <span className="text-gradient from-brand-500 to-accent-500 dark:from-brand-400 dark:to-accent-400">ROI</span> is clear
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
              See how Orchestly transforms your AI operations from chaotic to controlled.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {metrics.map((item, i) => (
            <AnimateIn key={item.metric} delay={0.1 + i * 0.1}>
              <div className="rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 h-full">
                <div className="text-sm font-medium text-gray-500 dark:text-mono-secondary uppercase tracking-wider">
                  {item.metric}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 dark:text-mono-muted mb-1">Before</div>
                    <div className="text-base font-semibold text-red-500 dark:text-red-400">{item.before}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-accent-500 shrink-0" />
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 dark:text-mono-muted mb-1">After</div>
                    <div className="text-base font-semibold text-accent-600 dark:text-accent-400">{item.after}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5}>
          <div className="mt-8 text-center">
            <span className="inline-block rounded-lg bg-accent-100 dark:bg-accent-500/10 border border-accent-200 dark:border-accent-500/20 px-4 py-2 text-sm font-medium text-accent-700 dark:text-accent-400">
              Our goal: help teams cut AI ops overhead and optimize model costs significantly
            </span>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
