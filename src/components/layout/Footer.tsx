import { Layers } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-mono-border bg-gray-50 dark:bg-mono-bg-alt">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-mono-secondary">
          <Layers className="h-4 w-4 text-brand-500" />
          <span>&copy; {new Date().getFullYear()} Orchestly.ai. All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-400 dark:text-mono-muted">
          <a href="#features" className="transition-colors hover:text-gray-700 dark:hover:text-mono-body">Features</a>
          <a href="#how-it-works" className="transition-colors hover:text-gray-700 dark:hover:text-mono-body">How It Works</a>
          <a href="#integrations" className="transition-colors hover:text-gray-700 dark:hover:text-mono-body">Integrations</a>
          <a href="#cta" className="transition-colors hover:text-gray-700 dark:hover:text-mono-body">Contact</a>
          <a href="https://github.com/orchestly-ai/platform" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gray-700 dark:hover:text-mono-body">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
