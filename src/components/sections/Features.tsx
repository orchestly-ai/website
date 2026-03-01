import { GitBranch, Workflow, Store, DollarSign, UserCheck, Shield } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const features = [
  {
    icon: GitBranch,
    title: 'Multi-LLM Routing & Failover',
    description:
      'Route requests to the optimal model based on cost, latency, and capability. Automatic failover keeps your agents running.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Build complex agent pipelines with a DAG-based workflow engine. Chain agents, add conditions, and handle errors gracefully.',
  },
  {
    icon: Store,
    title: 'Agent Marketplace & Registry',
    description:
      'Discover, publish, and reuse agents across your organization. Version control and rollback built in.',
  },
  {
    icon: DollarSign,
    title: 'Cost Tracking & Optimization',
    description:
      'Real-time visibility into per-agent, per-model spending. Set budgets, alerts, and automatically optimize for cost.',
  },
  {
    icon: UserCheck,
    title: 'Human-in-the-Loop Approvals',
    description:
      'Define approval gates for high-stakes decisions. Agents pause and wait for human review when it matters.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'SSO, RBAC, and BYOK encryption. Audit logs for every agent action. Designed with compliance in mind.',
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              Everything you need to{' '}
              <span className="text-gradient from-brand-500 to-accent-500 dark:from-brand-400 dark:to-accent-400">orchestrate AI</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
              A complete platform for deploying, managing, and scaling AI agents across your organization.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={0.1 + i * 0.08}>
              <div className="group rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 transition-all hover:border-brand-500/30 hover:bg-brand-50 dark:hover:bg-mono-surface/60">
                <div className="inline-flex rounded-lg bg-brand-100 dark:bg-brand-500/10 p-2.5">
                  <feature.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-mono-text">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{feature.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
