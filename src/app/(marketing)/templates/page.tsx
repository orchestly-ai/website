'use client';

import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, ArrowRight, X } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { templates, categories, difficultyColors } from '@/data/templates';

const useCaseLabels: Record<string, string> = {
  'content-creation': 'Content Creation',
  'customer-support': 'Customer Support',
  'data-pipeline': 'Data Pipeline',
  'document-processing': 'Document Processing',
  'code-review': 'Code Review',
  'lead-qualification': 'Lead Qualification',
  'recruitment': 'Recruitment',
  'incident-response': 'Incident Response',
  'compliance': 'Compliance',
};

const industryLabels: Record<string, string> = {
  'financial-services': 'Financial Services',
  'healthcare': 'Healthcare',
  'technology': 'Technology',
};

function TemplatesContent() {
  const searchParams = useSearchParams();
  const useCaseParam = searchParams.get('useCase');
  const industryParam = searchParams.get('industry');

  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const hasUrlFilter = !!(useCaseParam || industryParam);

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      if (useCaseParam && t.useCase !== useCaseParam) return false;
      if (industryParam && t.industry !== industryParam) return false;

      const matchCategory = activeCategory === 'All' || t.category === activeCategory || t.team === activeCategory;
      const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [useCaseParam, industryParam, activeCategory, search]);

  const activeFilterLabel = useCaseParam
    ? useCaseLabels[useCaseParam] || useCaseParam
    : industryParam
    ? industryLabels[industryParam] || industryParam
    : null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40" />
        </div>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimateIn>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">Templates</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl">
              {activeFilterLabel
                ? `${activeFilterLabel} Templates`
                : 'Workflow Templates for Every Team'}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-mono-body">
              Browse pre-built workflow templates. From lead qualification to incident response - find the right starting point and deploy in minutes.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="border-t border-gray-200 dark:border-mono-border py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Active URL filter indicator */}
          {hasUrlFilter && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-mono-muted">Filtering by:</span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-100 dark:bg-brand-500/10 px-3 py-1.5 text-sm font-medium text-brand-700 dark:text-brand-400">
                {useCaseParam ? 'Use Case' : 'Industry'}: {activeFilterLabel}
                <a
                  href="/templates"
                  className="ml-1 rounded-full p-0.5 hover:bg-brand-200 dark:hover:bg-brand-500/20 transition-colors"
                  aria-label="Clear filter"
                >
                  <X className="h-3.5 w-3.5" />
                </a>
              </span>
            </div>
          )}

          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-mono-muted" />
              <input
                type="text"
                placeholder="Search templates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 pl-10 pr-4 py-2.5 text-sm text-gray-900 dark:text-mono-text placeholder-gray-400 dark:placeholder-mono-muted focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
              />
            </div>
          </div>

          {/* Category tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'bg-gray-100 dark:bg-mono-surface/40 text-gray-600 dark:text-mono-body hover:bg-gray-200 dark:hover:bg-mono-surface/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Template grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((template, i) => (
              <AnimateIn key={template.id} delay={0.05 + i * 0.03}>
                <div className="group h-full rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 transition-all hover:border-brand-500/30 hover:bg-brand-50 dark:hover:bg-mono-surface/60">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{template.icon}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${difficultyColors[template.difficulty]}`}>
                      {template.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-mono-text">{template.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-mono-body">{template.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400">
                      {template.category}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-mono-surface text-gray-600 dark:text-mono-muted">
                      {template.team}
                    </span>
                  </div>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
                    Use Template <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </AnimateIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-gray-500 dark:text-mono-muted">
              No templates found matching your filters.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28 bg-gray-50/50 dark:bg-mono-surface/20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text">
              Don&apos;t see what you need?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-mono-body">
              Build your own workflows with the visual designer, or request a custom template from our team.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
              >
                Request Early Access
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

export default function TemplatesPage() {
  return (
    <Suspense>
      <TemplatesContent />
    </Suspense>
  );
}
