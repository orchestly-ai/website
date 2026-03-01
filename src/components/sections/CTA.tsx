'use client';

import { useState } from 'react';
import { ArrowRight, Mail, CheckCircle, Loader2 } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';

export function CTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-mono-border bg-gradient-to-br from-brand-50 via-white to-accent-50 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40 p-10 text-center sm:p-16">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-brand-600/10 blur-[100px]" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              Ready to orchestrate your AI agents?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600 dark:text-mono-body">
              Join the early access program and be among the first to experience
              the control plane for AI agents.
            </p>

            {submitted ? (
              <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent-500/30 bg-accent-500/10 px-6 py-3 text-sm text-accent-600 dark:text-accent-300">
                <CheckCircle className="h-4 w-4" />
                Thanks! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-lg flex-col gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-lg border border-gray-300 dark:border-mono-border bg-white dark:bg-mono-surface/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 placeholder:text-gray-400 dark:placeholder:text-mono-muted text-gray-900 dark:text-mono-text"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg border border-gray-300 dark:border-mono-border bg-white dark:bg-mono-surface/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 placeholder:text-gray-400 dark:placeholder:text-mono-muted text-gray-900 dark:text-mono-text"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="rounded-lg border border-gray-300 dark:border-mono-border bg-white dark:bg-mono-surface/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-500 placeholder:text-gray-400 dark:placeholder:text-mono-muted text-gray-900 dark:text-mono-text"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25 disabled:opacity-50"
                >
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Request Early Access
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-mono-secondary">
              <Mail className="h-4 w-4" />
              hello@orchestly.ai
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
