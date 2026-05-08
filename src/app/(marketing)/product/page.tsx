import type { Metadata } from 'next';
import { GitBranch, Workflow, Store, DollarSign, Shield, BookOpen, Code, Clock, Activity, Zap, ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform Overview - Orchestly',
  description: 'The complete AI orchestration platform with visual workflow design, multi-model routing, cost management, and enterprise security.',
};

const features = [
  {
    icon: Workflow,
    title: 'Workflow Designer',
    description: 'Design your own workflows visually. No coding required. Drag, drop, and connect.',
    href: '/product/workflow-designer',
  },
  {
    icon: GitBranch,
    title: 'LLM Routing',
    description: 'Route requests to the optimal model based on cost, latency, and capability.',
    href: '/product/llm-routing',
  },
  {
    icon: Clock,
    title: 'Change Control',
    description: 'Git-like versioning with diff views, approval gates, and instant rollback.',
    href: '/product/change-control',
  },
  {
    icon: Zap,
    title: 'Integrations',
    description: 'Connect 40+ services - LLM providers, databases, SaaS tools, and APIs.',
    href: '/product/integrations',
  },
  {
    icon: Store,
    title: 'Marketplace',
    description: 'Discover and share pre-built agents and workflow templates.',
    href: '/product/marketplace',
  },
  {
    icon: Activity,
    title: 'Time-Travel Debugging',
    description: 'Replay any execution step-by-step with full state inspection.',
    href: '/product/time-travel',
  },
  {
    icon: DollarSign,
    title: 'Cost Management',
    description: 'Track per-model spending, set budgets, and optimize costs in real-time.',
    href: '/product/cost-management',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade SSO, RBAC, BYOK encryption, and audit logging.',
    href: '/product/security',
  },
  {
    icon: Activity,
    title: 'Runs & Monitoring',
    description: 'Real-time visibility into every workflow run with detailed logs and metrics.',
    href: '#',
  },
  {
    icon: BookOpen,
    title: 'Scheduled Workflows',
    description: 'Cron-based scheduling with timezone support and dependency chains.',
    href: '#',
  },
  {
    icon: Code,
    title: 'Prompt Management',
    description: 'Version-controlled prompts with A/B testing and performance tracking.',
    href: '#',
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-brand-600/10 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimateIn>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">Platform</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl">
              The complete platform for{' '}
              <span className="text-gradient from-brand-500 to-accent-500 dark:from-brand-400 dark:to-accent-400">
                AI orchestration
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-mono-body">
              Design your own AI workflows with a visual canvas - no coding required. Multi-model routing, enterprise security, and real-time cost controls built in.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mx-auto mt-14 max-w-5xl">
              <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-mono-border shadow-2xl">
                <Image
                  src="/images/screenshots/dashboard-overview.png"
                  alt="Orchestly Platform Dashboard"
                  width={2560}
                  height={1600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="border-t border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
                Core Capabilities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
                Everything you need to orchestrate AI agents at scale.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <AnimateIn key={feature.title} delay={0.1 + i * 0.05}>
                {feature.href !== '#' ? (
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
                ) : (
                  <div className="h-full rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6">
                    <div className="inline-flex rounded-lg bg-brand-100 dark:bg-brand-500/10 p-2.5">
                      <feature.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-mono-text">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{feature.description}</p>
                  </div>
                )}
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              Ready to orchestrate your AI agents?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-mono-body">
              Start building with Orchestly today. No credit card required.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
              >
                Request Early Access
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-mono-border bg-white/50 dark:bg-mono-surface/40 px-6 py-3 text-sm font-medium text-gray-700 dark:text-mono-body transition-all hover:bg-gray-100 dark:hover:bg-mono-surface/60"
              >
                View Pricing
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
