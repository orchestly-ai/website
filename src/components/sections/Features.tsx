import { GitBranch, Workflow, Store, DollarSign, Shield, Zap, Clock, Activity, ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import Link from 'next/link';

const features = [
  {
    icon: Workflow,
    title: 'Visual Workflow Designer',
    description:
      'Design AI workflows with a drag-and-drop canvas or write them in Python, TypeScript, or Java. Switch between visual and code view anytime.',
    href: '/product/workflow-designer',
  },
  {
    icon: GitBranch,
    title: 'Multi-AI Routing & Failover',
    description:
      'Route requests to the optimal model based on cost, latency, and capability. Automatic failover keeps your agents running.',
    href: '/product/ai-routing',
  },
  {
    icon: Clock,
    title: 'Change Control',
    description:
      'Git-like versioning with visual diffs, property diffs, and code diffs. Approval gates and instant rollback for every workflow change.',
    href: '/product/change-control',
  },
  {
    icon: Zap,
    title: 'Integrations',
    description:
      'Connect 57+ services out of the box - LLM providers, databases, SaaS tools, and APIs. Managed OAuth and one-click setup.',
    href: '/product/integrations',
  },
  {
    icon: Store,
    title: 'Agent Marketplace',
    description:
      'Discover, publish, and reuse agents across your organization. Pre-built workflow templates for every team.',
    href: '/product/marketplace',
  },
  {
    icon: Activity,
    title: 'Time-Travel Debugging',
    description:
      'Replay any execution step-by-step with full state inspection. See exactly what happened at every node.',
    href: '/product/time-travel',
  },
  {
    icon: DollarSign,
    title: 'Cost Management',
    description:
      'Real-time visibility into per-model, per-workflow spending. Set budgets, alerts, and optimize costs automatically.',
    href: '/product/cost-management',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'SSO/SAML, RBAC, BYOK encryption, and comprehensive audit logs. Designed with compliance in mind.',
    href: '/product/security',
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
