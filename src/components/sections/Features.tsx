import { GitBranch, Workflow, Store, DollarSign, UserCheck, Shield, BookOpen, Code, ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import Link from 'next/link';

const features = [
  {
    icon: GitBranch,
    title: 'Multi-LLM Routing & Failover',
    description:
      'Route requests to the optimal model based on cost, latency, and capability. Automatic failover keeps your agents running.',
    href: '/product/llm-routing',
  },
  {
    icon: Workflow,
    title: 'Visual Workflow Builder',
    description:
      'Design your own AI workflows with a drag-and-drop canvas. No coding required. Chain agents, add conditions, and handle errors - anyone on your team can build.',
    href: '/product/workflow-designer',
  },
  {
    icon: Store,
    title: 'Agent Marketplace & Registry',
    description:
      'Discover, publish, and reuse agents across your organization. Version control and rollback built in.',
    href: '/product/marketplace',
  },
  {
    icon: DollarSign,
    title: 'Cost Tracking & Optimization',
    description:
      'Real-time visibility into per-agent, per-model spending. Set budgets, alerts, and automatically optimize for cost.',
    href: '/product/cost-management',
  },
  {
    icon: UserCheck,
    title: 'Human-in-the-Loop Approvals',
    description:
      'Define approval gates for high-stakes decisions. Agents pause and wait for human review when it matters.',
    href: '/product/change-control',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'SSO, RBAC, and BYOK encryption. Audit logs for every agent action. Designed with compliance in mind.',
    href: '/product/security',
  },
  {
    icon: BookOpen,
    title: 'Template Catalog',
    description:
      'Pre-built workflow templates organized by team, use case, and industry. Sales, Engineering, HR, Support - find the right workflow in seconds.',
    href: '/templates',
  },
  {
    icon: Code,
    title: 'Workflow Code View',
    description:
      'Build visually or in Python. Switch between drag-and-drop canvas and code view. Import, export, and version-control workflows as code.',
    href: '/product/workflow-designer',
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={0.1 + i * 0.08}>
              <Link href={feature.href} className="block group">
                <div className="h-full rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 transition-all hover:border-brand-500/30 hover:bg-brand-50 dark:hover:bg-mono-surface/60">
                  <div className="inline-flex rounded-lg bg-brand-100 dark:bg-brand-500/10 p-2.5">
                    <feature.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-mono-text">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{feature.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
