'use client';

import { useState } from 'react';
import { Menu, X, Layers, Sun, Moon, Github } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Docs', href: 'https://github.com/orchestly-ai/platform/tree/main/docs', external: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-mono-border bg-white/80 dark:bg-mono-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-mono-text">
          <Layers className="h-6 w-6 text-brand-500" />
          <span>Orchestly</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...('external' in link && link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm text-gray-600 dark:text-mono-body transition-colors hover:text-gray-900 dark:hover:text-mono-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/orchestly-ai/platform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-gray-500 dark:text-mono-secondary hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://discord.gg/orchestly"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-gray-500 dark:text-mono-secondary hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="Discord"
          >
            <DiscordIcon className="h-4 w-4" />
          </a>
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-gray-500 dark:text-mono-secondary hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="https://github.com/orchestly-ai/platform#quick-start"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-cta-text transition-colors hover:bg-cta-hover"
          >
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://github.com/orchestly-ai/platform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-gray-500 dark:text-mono-secondary hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://discord.gg/orchestly"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-gray-500 dark:text-mono-secondary hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="Discord"
          >
            <DiscordIcon className="h-4 w-4" />
          </a>
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-gray-500 dark:text-mono-secondary hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="text-gray-900 dark:text-mono-text"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 dark:border-mono-border bg-white/95 dark:bg-mono-bg/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...('external' in link && link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm text-gray-600 dark:text-mono-body transition-colors hover:text-gray-900 dark:hover:text-mono-text"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/orchestly-ai/platform#quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cta px-4 py-2 text-center text-sm font-semibold text-cta-text transition-colors hover:bg-cta-hover"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
