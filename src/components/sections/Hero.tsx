'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-brand-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-600 dark:text-brand-300 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
          Open Source &middot; Apache 2.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl lg:text-6xl"
        >
          Deploy, manage, and scale AI agents{' '}
          <span className="text-gradient from-brand-500 to-accent-500 dark:from-brand-400 dark:to-accent-400">
            without the chaos
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-mono-body sm:text-xl"
        >
          Think Kubernetes for AI agents. One platform to orchestrate every agent,
          model, and workflow across your organization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25"
          >
            Request Early Access
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/orchestly-ai/platform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-mono-border bg-white/50 dark:bg-mono-surface/40 px-6 py-3 text-sm font-medium text-gray-700 dark:text-mono-body transition-all hover:bg-gray-100 dark:hover:bg-mono-surface/60"
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
