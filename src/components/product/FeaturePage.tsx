'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import type { LucideIcon } from 'lucide-react';

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ShowcaseSection {
  title: string;
  description: string;
  image?: string;
  mockup?: ReactNode;
}

interface FeaturePageProps {
  title: string;
  tagline: string;
  description: string;
  heroImage?: string;
  heroMockup?: ReactNode;
  capabilities: Capability[];
  sections: ShowcaseSection[];
  ctaText?: string;
}

export function FeaturePage({
  title,
  tagline,
  description,
  heroImage,
  heroMockup,
  capabilities,
  sections,
  ctaText,
}: FeaturePageProps) {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-brand-600/10 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">{tagline}</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl">
                {title}
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-mono-body leading-relaxed max-w-2xl">
                {description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
                >
                  Request Early Access
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-mono-border bg-white/50 dark:bg-mono-surface/40 px-6 py-3 text-sm font-medium text-gray-700 dark:text-mono-body transition-all hover:bg-gray-100 dark:hover:bg-mono-surface/60"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </AnimateIn>

          {/* Primary visual */}
          <AnimateIn delay={0.2}>
            <div className="mt-14">
              {heroMockup ? (
                heroMockup
              ) : heroImage ? (
                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-mono-border shadow-2xl">
                  <Image
                    src={heroImage}
                    alt={title}
                    width={2560}
                    height={1600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              ) : null}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl text-center">
              Key Capabilities
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <AnimateIn key={cap.title} delay={0.1 + i * 0.08}>
                <div className="group rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 transition-all hover:border-brand-500/30 hover:bg-brand-50 dark:hover:bg-mono-surface/60">
                  <div className="inline-flex rounded-lg bg-brand-100 dark:bg-brand-500/10 p-2.5">
                    <cap.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-mono-text">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{cap.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating sections */}
      {sections.length > 0 && (
        <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="space-y-24">
              {sections.map((section, i) => (
                <div key={section.title}>
                  <AnimateIn delay={0.1}>
                    <div className="max-w-3xl mx-auto text-center mb-10">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-mono-text sm:text-3xl">{section.title}</h3>
                      <p className="mt-4 text-gray-600 dark:text-mono-body leading-relaxed">{section.description}</p>
                    </div>
                  </AnimateIn>
                  <AnimateIn delay={0.2}>
                    {section.mockup ? (
                      section.mockup
                    ) : section.image ? (
                      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-mono-border shadow-lg">
                        <Image
                          src={section.image}
                          alt={section.title}
                          width={2560}
                          height={1600}
                          className="w-full h-auto"
                        />
                      </div>
                    ) : null}
                  </AnimateIn>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28 bg-gray-50/50 dark:bg-mono-surface/20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              {ctaText || `Ready to try ${title}?`}
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
