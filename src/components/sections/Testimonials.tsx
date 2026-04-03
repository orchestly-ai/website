import { AlertTriangle, DollarSign, Clock } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Infrastructure overhead',
    desc: 'Engineering teams report spending more time managing AI infrastructure than building products — juggling multiple LLM providers, each with separate APIs and billing.',
  },
  {
    icon: DollarSign,
    title: 'No cost visibility',
    desc: 'Most teams have no idea what each AI agent actually costs them. Monthly invoices are a surprise, with no way to attribute spend to specific agents or workflows.',
  },
  {
    icon: Clock,
    title: 'Slow time to production',
    desc: 'Getting an AI agent from prototype to production takes months of DevOps work — custom integrations, monitoring, failover handling, and compliance checks.',
  },
];

const proofPoints = [
  { value: '30+', label: 'Native integrations' },
  { value: '60+', label: 'Workflow templates' },
  { value: '7+', label: 'LLM providers supported' },
];

export function Testimonials() {
  return (
    <section className="border-t border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              Built for engineering teams
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
              The challenges teams face when scaling AI agents today.
            </p>
          </div>
        </AnimateIn>

        {/* Proof points */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          {proofPoints.map((point, i) => (
            <AnimateIn key={point.label} delay={0.1 + i * 0.1}>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600 dark:text-brand-400 sm:text-3xl">{point.value}</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-mono-secondary">{point.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Pain points */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {painPoints.map((point, i) => (
            <AnimateIn key={point.title} delay={0.3 + i * 0.15}>
              <div className="rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 h-full">
                <div className="inline-flex rounded-lg bg-brand-100 dark:bg-brand-500/10 p-2.5 mb-4">
                  <point.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-mono-text">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{point.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
