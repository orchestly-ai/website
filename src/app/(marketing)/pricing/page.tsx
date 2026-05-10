'use client';

import { useState, Fragment } from 'react';
import { Check, Minus, ArrowRight, ChevronDown } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'For solo developers and evaluation. Get started with no commitment.',
    cta: 'Start Free',
    ctaStyle: 'border border-gray-300 dark:border-mono-border bg-white dark:bg-mono-surface/40 text-gray-700 dark:text-mono-body hover:bg-gray-100 dark:hover:bg-mono-surface/60',
    features: [
      '1 user',
      '3 active workflows',
      '100 executions/month',
      'All 40+ node types',
      '5 starter templates',
      '2 LLM providers',
      '3 integrations',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$79',
    period: '/month',
    annual: '$59/mo billed annually',
    description: 'For small teams building production AI workflows.',
    cta: 'Start Free Trial',
    ctaStyle: 'bg-cta text-cta-text hover:bg-cta-hover shadow-lg shadow-cta/25',
    popular: true,
    features: [
      '5 users (+ $15/extra)',
      '50 workflows',
      '10,000 executions/month',
      'All LLM providers & routing strategies',
      'Full code-canvas sync',
      'All templates',
      'Time-travel debugging',
      'Cost tracking per provider',
      'SDK & CLI access',
      'Email support (24h SLA)',
    ],
  },
  {
    name: 'Business',
    price: '$399',
    period: '/month',
    annual: '$299/mo billed annually',
    description: 'For growing teams that need governance, compliance, and advanced features.',
    cta: 'Start Free Trial',
    ctaStyle: 'border border-brand-500 bg-white dark:bg-mono-surface/40 text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-mono-surface/60',
    features: [
      '25 users (+ $25/extra)',
      '200 workflows',
      '50,000 executions/month',
      'Change control with approval gates',
      'SSO / SAML / OIDC',
      'Custom RBAC (80+ permissions)',
      'A/B testing (5 concurrent)',
      'Human-in-the-loop approvals',
      '90-day audit logs',
      'Anomaly detection & forecasting',
      'Priority support (4h SLA)',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For regulated enterprises needing VPC, compliance certifications, and dedicated support.',
    cta: 'Talk to Sales',
    ctaStyle: 'border border-gray-300 dark:border-mono-border bg-white dark:bg-mono-surface/40 text-gray-700 dark:text-mono-body hover:bg-gray-100 dark:hover:bg-mono-surface/60',
    features: [
      'Custom users & executions',
      'Everything in Business',
      'SOC 2, HIPAA, GDPR, ISO 27001',
      'BYOK encryption',
      'VPC / on-premise deployment',
      'White-label & custom domain',
      'Custom integrations & connectors',
      'Reseller program (10-30%)',
      '99.9% uptime SLA',
      'Dedicated CSM (1h SLA)',
    ],
  },
];

interface ComparisonRow {
  feature: string;
  free: boolean | string;
  pro: boolean | string;
  business: boolean | string;
  enterprise: boolean | string;
}

interface ComparisonGroup {
  category: string;
  rows: ComparisonRow[];
}

const comparisonGroups: ComparisonGroup[] = [
  {
    category: 'Usage & Limits',
    rows: [
      { feature: 'Active Workflows', free: '3', pro: '50', business: '200', enterprise: 'Custom' },
      { feature: 'Executions / month', free: '100', pro: '10,000', business: '50,000', enterprise: 'Custom' },
      { feature: 'Team Members', free: '1', pro: '5', business: '25', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Build',
    rows: [
      { feature: 'Visual Workflow Designer', free: true, pro: true, business: true, enterprise: true },
      { feature: 'Code View', free: 'View only', pro: 'Bidirectional', business: 'Bidirectional', enterprise: 'Bidirectional' },
      { feature: 'Workflow Templates', free: '5 starter', pro: 'All', business: 'All + publish', enterprise: '+ Private catalog' },
      { feature: 'SDK & CLI', free: false, pro: true, business: true, enterprise: true },
    ],
  },
  {
    category: 'Route',
    rows: [
      { feature: 'LLM Providers', free: '2', pro: 'All 6', business: 'All + custom', enterprise: 'All + private' },
      { feature: 'Routing Strategies', free: '2 basic', pro: 'All 7', business: 'All 7 + ML', enterprise: 'All + custom' },
      { feature: 'Integrations', free: '3', pro: 'All 12+', business: 'All + custom HTTP', enterprise: 'Dedicated' },
      { feature: 'HITL Approvals', free: false, pro: false, business: true, enterprise: '+ Escalation chains' },
    ],
  },
  {
    category: 'Observe',
    rows: [
      { feature: 'Cost Tracking', free: 'Total only', pro: 'Per-provider', business: '+ Forecasting', enterprise: '+ Budget enforcement' },
      { feature: 'Time-Travel Debug', free: false, pro: 'Last 10 runs', business: '30-day window', enterprise: 'Custom retention' },
      { feature: 'A/B Testing', free: false, pro: false, business: '5 concurrent', enterprise: 'Unlimited' },
      { feature: 'Log Retention', free: '7 days', pro: '30 days', business: '90 days', enterprise: '1 year+' },
    ],
  },
  {
    category: 'Govern',
    rows: [
      { feature: 'Change Control', free: false, pro: false, business: true, enterprise: '+ Risk scoring' },
      { feature: 'SSO / SAML', free: false, pro: 'Google / GitHub', business: 'SAML / OIDC', enterprise: '+ Okta / custom IdP' },
      { feature: 'RBAC', free: '3 fixed roles', pro: '3 fixed roles', business: 'Custom roles', enterprise: '+ Conditional access' },
      { feature: 'Audit Logs', free: false, pro: false, business: '90-day', enterprise: '7-year' },
      { feature: 'BYOK Encryption', free: false, pro: false, business: false, enterprise: true },
      { feature: 'VPC / On-Premise', free: false, pro: false, business: false, enterprise: true },
      { feature: 'Compliance Certs', free: false, pro: false, business: false, enterprise: 'SOC 2, HIPAA, GDPR' },
      { feature: 'White-Label', free: false, pro: false, business: false, enterprise: true },
      { feature: 'SLA', free: false, pro: false, business: false, enterprise: '99.9% uptime' },
    ],
  },
];

const faqs = [
  {
    q: 'Can I try Pro or Business features before committing?',
    a: 'Yes - every new account gets a 14-day free trial of Pro with full access to all features. No credit card required. Contact sales for a Business trial.',
  },
  {
    q: 'What counts as an "execution"?',
    a: 'An execution is a single run of a workflow from trigger to completion. Sub-workflow calls within the same parent execution count as one execution.',
  },
  {
    q: 'Can I switch plans anytime?',
    a: 'Yes, you can upgrade or downgrade at any time. When upgrading, you get immediate access. When downgrading, the change takes effect at the end of your billing cycle.',
  },
  {
    q: 'Do you offer discounts for startups or non-profits?',
    a: 'Yes - we offer 50% off Pro for startups (under $5M raised) and 40% off for registered non-profits. Contact sales to apply.',
  },
  {
    q: 'What happens when I exceed my execution limit?',
    a: 'We notify you at 80% and 100% of your limit. Workflows continue running, and overages are billed at $5 per 1,000 extra executions. You can also set hard limits to prevent overages.',
  },
  {
    q: 'What is the difference between Business and Enterprise?',
    a: 'Business includes governance features like change control, SSO/SAML, custom RBAC, and audit logs. Enterprise adds compliance certifications (SOC 2, HIPAA), BYOK encryption, VPC/on-premise deployment, white-labeling, an SLA, and dedicated support.',
  },
];

function CellValue({ val, highlight }: { val: boolean | string; highlight?: boolean }) {
  if (typeof val === 'boolean') {
    return val ? (
      <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${highlight ? 'bg-green-100 dark:bg-green-500/15' : 'bg-green-50 dark:bg-green-500/10'}`}>
        <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
      </span>
    ) : (
      <Minus className="h-4 w-4 text-gray-300 dark:text-mono-border mx-auto" />
    );
  }
  const isUnlimited = val.toLowerCase().includes('unlimited') || val.toLowerCase().includes('all');
  return (
    <span className={`text-xs font-medium ${isUnlimited ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-mono-body'}`}>
      {val}
    </span>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimateIn>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-mono-body">
              Start free, scale as you grow. No hidden fees, no surprise charges.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="border-t border-gray-200 dark:border-mono-border py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            {tiers.map((tier, i) => (
              <AnimateIn key={tier.name} delay={0.1 + i * 0.08}>
                <div className={`relative h-full rounded-xl border p-6 ${
                  tier.popular
                    ? 'border-brand-500 bg-white dark:bg-mono-surface/60 shadow-xl shadow-brand-500/10'
                    : 'border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40'
                }`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-mono-text">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900 dark:text-mono-text">{tier.price}</span>
                    {tier.period && <span className="text-gray-500 dark:text-mono-muted">{tier.period}</span>}
                  </div>
                  {tier.annual && (
                    <p className="mt-1 text-xs text-brand-600 dark:text-brand-400">{tier.annual}</p>
                  )}
                  <p className="mt-3 text-sm text-gray-600 dark:text-mono-body">{tier.description}</p>
                  <a
                    href={tier.name === 'Enterprise' ? '/enterprise' : '#cta'}
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${tier.ctaStyle}`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <ul className="mt-6 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-mono-body">
                        <Check className="h-4 w-4 flex-shrink-0 text-brand-500 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28 bg-gray-50/50 dark:bg-mono-surface/20">
        <div className="mx-auto max-w-5xl px-6">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-mono-text text-center mb-3">
              Compare plans in detail
            </h2>
            <p className="text-center text-gray-500 dark:text-mono-muted text-sm mb-10">
              Everything you get at every tier, organized by capability.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="rounded-2xl border border-gray-200 dark:border-mono-border overflow-hidden bg-white dark:bg-mono-surface/40 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  {/* Sticky-style header with tier names + prices */}
                  <thead>
                    <tr className="bg-gray-50/80 dark:bg-mono-surface/60 border-b border-gray-200 dark:border-mono-border">
                      <th className="text-left px-5 py-4 w-[220px]" />
                      <th className="text-center px-3 py-4 w-[120px]">
                        <div className="text-sm font-semibold text-gray-900 dark:text-mono-text">Free</div>
                        <div className="text-xs text-gray-400 dark:text-mono-muted mt-0.5">$0</div>
                      </th>
                      <th className="text-center px-3 py-4 w-[120px] bg-brand-50/50 dark:bg-brand-500/5 border-x border-brand-100 dark:border-brand-500/10">
                        <div className="text-sm font-bold text-brand-600 dark:text-brand-400">Pro</div>
                        <div className="text-xs text-brand-500 dark:text-brand-400/70 mt-0.5">$79/mo</div>
                      </th>
                      <th className="text-center px-3 py-4 w-[120px]">
                        <div className="text-sm font-semibold text-gray-900 dark:text-mono-text">Business</div>
                        <div className="text-xs text-gray-400 dark:text-mono-muted mt-0.5">$399/mo</div>
                      </th>
                      <th className="text-center px-3 py-4 w-[120px]">
                        <div className="text-sm font-semibold text-gray-900 dark:text-mono-text">Enterprise</div>
                        <div className="text-xs text-gray-400 dark:text-mono-muted mt-0.5">Custom</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonGroups.map((group, gi) => (
                      <Fragment key={gi}>
                        {/* Category header row */}
                        <tr className="border-t-2 border-gray-200 dark:border-mono-border">
                          <td colSpan={5} className="px-5 pt-5 pb-2">
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                              <span className="h-px w-4 bg-brand-400 dark:bg-brand-500/50" />
                              {group.category}
                            </span>
                          </td>
                        </tr>
                        {group.rows.map((row, ri) => (
                          <tr key={`${gi}-${ri}`} className="border-t border-gray-100 dark:border-mono-border/30 hover:bg-gray-50/50 dark:hover:bg-mono-surface/30 transition-colors">
                            <td className="px-5 py-3 text-sm text-gray-700 dark:text-mono-body">{row.feature}</td>
                            <td className="px-3 py-3 text-center"><CellValue val={row.free} /></td>
                            <td className="px-3 py-3 text-center bg-brand-50/30 dark:bg-brand-500/[0.03] border-x border-brand-100/50 dark:border-brand-500/5"><CellValue val={row.pro} highlight /></td>
                            <td className="px-3 py-3 text-center"><CellValue val={row.business} /></td>
                            <td className="px-3 py-3 text-center"><CellValue val={row.enterprise} /></td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom CTA strip */}
              <div className="border-t border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/30">
                <div className="grid grid-cols-5 min-w-[700px]">
                  <div className="px-5 py-4" />
                  <div className="px-3 py-4 text-center">
                    <a href="#cta" className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-200 dark:border-mono-border px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-mono-body hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors">
                      Get started
                    </a>
                  </div>
                  <div className="px-3 py-4 text-center bg-brand-50/30 dark:bg-brand-500/[0.03] border-x border-brand-100/50 dark:border-brand-500/5">
                    <a href="#cta" className="inline-flex items-center justify-center gap-1 rounded-lg bg-cta px-3 py-1.5 text-xs font-semibold text-cta-text hover:bg-cta-hover transition-colors shadow-sm">
                      Start trial
                    </a>
                  </div>
                  <div className="px-3 py-4 text-center">
                    <a href="#cta" className="inline-flex items-center justify-center gap-1 rounded-lg border border-brand-500 px-3 py-1.5 text-xs font-medium text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">
                      Start trial
                    </a>
                  </div>
                  <div className="px-3 py-4 text-center">
                    <a href="/enterprise" className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-200 dark:border-mono-border px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-mono-body hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors">
                      Contact sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-mono-text text-center mb-8">
              Frequently Asked Questions
            </h2>
          </AnimateIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={0.05 + i * 0.05}>
                <div className="rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-mono-text">{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 text-gray-400 dark:text-mono-muted transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-sm text-gray-600 dark:text-mono-body leading-relaxed">
                      {faq.a}
                    </div>
                  )}
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
              Start building for free
            </h2>
            <p className="mt-4 text-gray-600 dark:text-mono-body">
              No credit card required. Upgrade when you&apos;re ready.
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
                href="/enterprise"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-mono-border bg-white/50 dark:bg-mono-surface/40 px-6 py-3 text-sm font-medium text-gray-700 dark:text-mono-body transition-all hover:bg-gray-100 dark:hover:bg-mono-surface/60"
              >
                Talk to Sales
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
