'use client';

import { ArrowRight, Check, X, Minus } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

interface ComparisonRow {
  feature: string;
  orchestly: string | boolean;
  competitor: string | boolean;
}

interface Advantage {
  title: string;
  description: string;
}

interface ComparisonPageProps {
  competitor: string;
  competitorDescription: string;
  headline: string;
  subheadline: string;
  rows: ComparisonRow[];
  advantages: Advantage[];
}

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-5 w-5 text-green-500" />
    ) : (
      <X className="h-5 w-5 text-red-400" />
    );
  }
  if (value === 'partial') {
    return <Minus className="h-5 w-5 text-yellow-500" />;
  }
  return <span className="text-sm text-gray-700 dark:text-mono-body">{value}</span>;
}

export function ComparisonPage({
  competitor,
  competitorDescription,
  headline,
  subheadline,
  rows,
  advantages,
}: ComparisonPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">Comparison</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl">
              Orchestly vs {competitor}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-mono-body">
              {headline}
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-mono-muted">
              {competitorDescription}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-mono-text mb-8 text-center">
              Feature Comparison
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="rounded-xl border border-gray-200 dark:border-mono-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-mono-surface/60">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-mono-text w-2/5">Feature</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-brand-600 dark:text-brand-400 w-[30%]">Orchestly</th>
                    <th className="text-center px-6 py-4 text-sm font-semibold text-gray-500 dark:text-mono-muted w-[30%]">{competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-mono-border/50">
                      <td className="px-6 py-3 text-sm font-medium text-gray-900 dark:text-mono-text">{row.feature}</td>
                      <td className="px-6 py-3 text-center">
                        <div className="flex justify-center">
                          <CellValue value={row.orchestly} />
                        </div>
                      </td>
                      <td className="px-6 py-3 text-center">
                        <div className="flex justify-center">
                          <CellValue value={row.competitor} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Advantages */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28 bg-gray-50/50 dark:bg-mono-surface/20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-mono-text mb-8 text-center">
              {subheadline}
            </h2>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {advantages.map((adv, i) => (
              <AnimateIn key={adv.title} delay={0.1 + i * 0.08}>
                <div className="rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 transition-all hover:border-brand-500/30">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-mono-text">{adv.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{adv.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text">
              Ready to switch from {competitor}?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-mono-body">
              Try Orchestly free. No credit card required.
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
