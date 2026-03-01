'use client';

import { useState } from 'react';
import { Menu, X, Layers, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Integrations', href: '#integrations' },
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
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-mono-body transition-colors hover:text-gray-900 dark:hover:text-mono-text"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-gray-500 dark:text-mono-secondary hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#cta"
            className="rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-cta-text transition-colors hover:bg-cta-hover"
          >
            Request Early Access
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
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
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 dark:text-mono-body transition-colors hover:text-gray-900 dark:hover:text-mono-text"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="rounded-lg bg-cta px-4 py-2 text-center text-sm font-semibold text-cta-text transition-colors hover:bg-cta-hover"
              onClick={() => setMobileOpen(false)}
            >
              Request Early Access
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
