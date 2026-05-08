import type { Metadata } from 'next';
import { ArrowRight, Layers, Users, Eye, Blocks, Zap } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

export const metadata: Metadata = {
  title: 'About - Orchestly',
  description: 'Orchestly unifies AI workflow design, multi-model routing, cost management, and enterprise security into one platform.',
};

const beliefs = [
  {
    icon: Users,
    title: 'Built for Every Team',
    description: 'Not just engineers. Anyone on your team can design, build, and deploy AI workflows with a visual canvas. No coding required. Power users who want code have full Python access too.',
  },
  {
    icon: Eye,
    title: 'Radical Visibility',
    description: 'You can\'t manage what you can\'t see. Every model call, every token, every dollar, every decision your agents make should be observable, traceable, and auditable.',
  },
  {
    icon: Blocks,
    title: 'One Platform, Not Ten Point Solutions',
    description: 'The AI tooling landscape is fragmented by design. Each product creates lock-in. We\'re building one platform that does the work of many, because that\'s what teams actually need.',
  },
  {
    icon: Zap,
    title: 'Production-Grade by Default',
    description: 'Demos are easy. Production is hard. Every feature we ship is built for production from day one - failover, versioning, rollback, cost controls, and security included.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-brand-600/10 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 mb-6">
              <Layers className="h-8 w-8 text-brand-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-mono-text">Orchestly</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl">
              AI orchestration should work as hard as the{' '}
              <span className="text-gradient from-brand-500 to-accent-500 dark:from-brand-400 dark:to-accent-400">
                teams who use it
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-mono-body leading-relaxed">
              Orchestly is an AI agent orchestration platform that unifies workflow design, multi-model routing, cost management, and enterprise security. Built by people who believe AI infrastructure should reduce complexity, not add to it.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-mono-text mb-6">
              Our mission
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-mono-body leading-relaxed text-lg">
              <p>
                We&apos;re building Orchestly because engineering teams shouldn&apos;t need five different tools to build, route, monitor, secure, and optimize their AI agents.
              </p>
              <p>
                The average team deploying AI agents manages a patchwork of LLM providers, custom glue code, separate monitoring tools, manual cost tracking, and ad-hoc security reviews. Data gets lost between tools. Costs spiral without visibility. Debugging means reading raw logs. Deploying means crossing your fingers.
              </p>
              <p>
                Orchestly replaces that patchwork with a single platform where workflows flow into routing, routing flows into cost controls, and monitoring ties it all together. One interface, one workflow, one source of truth.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-gray-200 dark:border-mono-border py-16 bg-gray-50/50 dark:bg-mono-surface/20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '7+', label: 'LLM Providers' },
              { value: '40+', label: 'Integrations' },
              { value: '16+', label: 'Templates' },
              { value: '4', label: 'Pricing Tiers' },
            ].map((stat, i) => (
              <AnimateIn key={stat.label} delay={0.1 + i * 0.08}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-500 dark:text-mono-muted">{stat.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-mono-text mb-12">
              What we believe
            </h2>
          </AnimateIn>
          <div className="grid gap-8 sm:grid-cols-2">
            {beliefs.map((belief, i) => (
              <AnimateIn key={belief.title} delay={0.1 + i * 0.08}>
                <div>
                  <div className="inline-flex rounded-lg bg-brand-100 dark:bg-brand-500/10 p-2.5 mb-4">
                    <belief.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-mono-text">{belief.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-mono-body leading-relaxed">{belief.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28 bg-gray-50/50 dark:bg-mono-surface/20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text">
              Interested in what we&apos;re building?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-mono-body">
              Join the waitlist for early access, or reach out to learn more about how Orchestly can work for your team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
              >
                Join the Waitlist
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@orchestly.ai"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-mono-border bg-white/50 dark:bg-mono-surface/40 px-6 py-3 text-sm font-medium text-gray-700 dark:text-mono-body transition-all hover:bg-gray-100 dark:hover:bg-mono-surface/60"
              >
                Get in Touch
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
