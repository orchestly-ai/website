'use client';

import { Suspense, useState, useMemo, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, ArrowRight, X, Eye } from 'lucide-react';
import Image from 'next/image';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { templates, categories, difficultyColors, type Template } from '@/data/templates';

function TemplatePreviewModal({ template, onClose }: { template: Template; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative w-full max-w-[90vw] xl:max-w-7xl rounded-2xl bg-white dark:bg-mono-surface border border-gray-200 dark:border-mono-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-mono-border">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{template.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-mono-text">{template.name}</h3>
              <p className="text-sm text-gray-500 dark:text-mono-muted">
                {template.nodeCount} nodes &middot; {template.edgeCount} connections
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:text-gray-600 dark:hover:text-mono-text hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Screenshot */}
        <div className="relative bg-gray-100 dark:bg-[#1a1a1a] overflow-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>
          <Image
            src={template.screenshot}
            alt={`${template.name} workflow`}
            width={1400}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/30">
          <div className="flex gap-2">
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-brand-100 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400">
              {template.category}
            </span>
            {template.team !== template.category && (
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-mono-surface text-gray-600 dark:text-mono-muted">
                {template.team}
              </span>
            )}
            <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${difficultyColors[template.difficulty]}`}>
              {template.difficulty}
            </span>
          </div>
          <button
            onClick={() => {
              onClose();
              setTimeout(() => {
                const cta = document.getElementById('cta');
                if (cta) cta.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-2.5 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
          >
            Use Template <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function TemplatesContent() {
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  const handleClose = useCallback(() => setPreviewTemplate(null), []);

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchCategory = activeCategory === 'All' || t.category === activeCategory || t.team === activeCategory;
      const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

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
              Workflow Templates for Every Team
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-mono-body">
              Browse {templates.length}+ pre-built workflow templates. From lead qualification to incident response - find the right starting point and deploy in minutes.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="border-t border-gray-200 dark:border-mono-border py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
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
                <div
                  className="group h-full rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 hover:border-brand-500/30 hover:bg-brand-50 dark:hover:bg-mono-surface/60 transition-all cursor-pointer"
                  onClick={() => setPreviewTemplate(template)}
                >
                  {/* Screenshot thumbnail */}
                  <div className="relative overflow-hidden rounded-t-xl bg-gray-100 dark:bg-[#1a1a1a] aspect-[16/10]">
                    <Image
                      src={template.screenshot}
                      alt={`${template.name} workflow preview`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-white/90 dark:bg-mono-surface/90 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-mono-text opacity-0 group-hover:opacity-100 transition-opacity shadow-sm backdrop-blur-sm">
                      <Eye className="h-3.5 w-3.5" />
                      Preview
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xl">{template.icon}</span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${difficultyColors[template.difficulty]}`}>
                        {template.difficulty}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-mono-text">{template.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-mono-body line-clamp-2">{template.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400">
                        {template.category}
                      </span>
                      {template.team !== template.category && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-mono-surface text-gray-600 dark:text-mono-muted">
                          {template.team}
                        </span>
                      )}
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-mono-surface text-gray-600 dark:text-mono-muted">
                        {template.nodeCount} steps
                      </span>
                    </div>
                  </div>
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
      <section id="cta" className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28 bg-gray-50/50 dark:bg-mono-surface/20">
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

      {/* Screenshot preview modal */}
      {previewTemplate && (
        <TemplatePreviewModal template={previewTemplate} onClose={handleClose} />
      )}
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
