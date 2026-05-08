'use client';

import { Shield, Lock, Users, FileText, Server, Headphones, Zap, Settings, ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { MockupSecurityDashboard } from '@/components/mockups/MockupSecurityDashboard';

const features = [
  { icon: Lock, title: 'SSO / SAML', description: 'Single sign-on with Okta, Azure AD, Google Workspace, and any SAML 2.0 or OIDC provider.' },
  { icon: Users, title: 'Role-Based Access Control', description: 'Granular permissions with custom roles. Control who can build, deploy, run, and view workflows.' },
  { icon: Shield, title: 'BYOK Encryption', description: 'Bring Your Own Key for data encryption. Use AWS KMS, GCP KMS, or Azure Key Vault.' },
  { icon: FileText, title: 'Audit Logs', description: 'Complete audit trail for every action. Configurable retention policies for compliance requirements.' },
  { icon: Headphones, title: 'SLA & Dedicated Support', description: '99.9% uptime SLA with dedicated account manager and priority support channels.' },
  { icon: Server, title: 'On-Premise Deployment', description: 'Deploy Orchestly in your own infrastructure. Air-gapped environments supported.' },
  { icon: Zap, title: 'Custom Integrations', description: 'Build custom connectors for internal systems with dedicated engineering support.' },
  { icon: Settings, title: 'Advanced Configuration', description: 'Custom data retention, IP allowlisting, network policies, and compliance controls.' },
];

export default function EnterprisePage() {
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
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">Enterprise</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl">
              AI orchestration for the enterprise
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-mono-body">
              Security, compliance, and dedicated support for organizations that need to scale AI agents with confidence.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="mailto:sales@orchestly.ai?subject=Enterprise%20Inquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
              >
                Talk to Sales
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

      {/* Enterprise features */}
      <section className="border-t border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text text-center sm:text-4xl">
              Built for enterprise requirements
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-mono-body">
              Everything your security and compliance teams need to approve AI agent deployment.
            </p>
          </AnimateIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <AnimateIn key={feature.title} delay={0.1 + i * 0.05}>
                <div className="h-full rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 transition-all hover:border-brand-500/30 hover:bg-brand-50 dark:hover:bg-mono-surface/60">
                  <div className="inline-flex rounded-lg bg-brand-100 dark:bg-brand-500/10 p-2.5">
                    <feature.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-mono-text">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{feature.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Security dashboard */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            <AnimateIn direction="left" className="lg:w-2/5">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text">
                Security & compliance at every layer
              </h2>
              <p className="mt-4 text-gray-600 dark:text-mono-body leading-relaxed">
                Every credential encrypted at rest and in transit. Every API call authenticated and authorized. Every action logged and auditable. SOC 2 Type II compliant from day one.
              </p>
              <ul className="mt-6 space-y-3">
                {['SOC 2 Type II certified', 'GDPR & CCPA compliant', 'HIPAA-eligible deployment option', 'Penetration tested quarterly'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-mono-body">
                    <Shield className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn direction="right" delay={0.2} className="lg:w-3/5">
              <MockupSecurityDashboard />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28 bg-gray-50/50 dark:bg-mono-surface/20">
        <div className="mx-auto max-w-xl px-6">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-mono-text text-center mb-2">
              Talk to Sales
            </h2>
            <p className="text-center text-gray-600 dark:text-mono-body mb-8">
              Tell us about your requirements and we&apos;ll get back to you within one business day.
            </p>
            <form
              action="mailto:sales@orchestly.ai"
              method="GET"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-mono-body mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-lg border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 px-4 py-2.5 text-sm text-gray-900 dark:text-mono-text focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-mono-body mb-1">Work Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 px-4 py-2.5 text-sm text-gray-900 dark:text-mono-text focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-mono-body mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-lg border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 px-4 py-2.5 text-sm text-gray-900 dark:text-mono-text focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
                  placeholder="Company name"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
              >
                Contact Sales
              </button>
            </form>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
