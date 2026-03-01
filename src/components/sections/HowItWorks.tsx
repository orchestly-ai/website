import { Cable, Store, Rocket } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const steps = [
  {
    step: '01',
    icon: Cable,
    title: 'Connect your LLM providers',
    description:
      'Bring your existing API keys for OpenAI, Anthropic, Google AI, or any supported provider. Orchestly handles routing, failover, and load balancing.',
  },
  {
    step: '02',
    icon: Store,
    title: 'Build or install agents',
    description:
      'Create custom agents with our workflow builder, or install pre-built agents from the marketplace. Configure triggers, approvals, and data sources.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Deploy, monitor, and optimize',
    description:
      'Launch agents to production with one click. Monitor performance, track costs, and continuously optimize with built-in analytics.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">How it works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
              Get from zero to production-ready AI agents in three steps.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((item, i) => (
            <AnimateIn key={item.step} delay={0.1 + i * 0.15}>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-brand-500/40 to-transparent sm:block" />
                )}
                <div className="relative rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
                    Step {item.step}
                  </span>
                  <div className="mt-4 inline-flex rounded-lg bg-brand-100 dark:bg-brand-500/10 p-2.5">
                    <item.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-mono-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{item.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
