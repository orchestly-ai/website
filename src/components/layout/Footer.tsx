import { Layers } from 'lucide-react';
import Link from 'next/link';

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Platform Overview', href: '/product' },
      { label: 'Workflow Designer', href: '/product/workflow-designer' },
      { label: 'AI Routing', href: '/product/ai-routing' },
      { label: 'Integrations', href: '/product/integrations' },
      { label: 'Templates', href: '/templates' },
      { label: 'Marketplace', href: '/product/marketplace' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Content Creation', href: '/templates?useCase=content-creation' },
      { label: 'Customer Support', href: '/templates?useCase=customer-support' },
      { label: 'Data Pipeline', href: '/templates?useCase=data-pipeline' },
      { label: 'Financial Services', href: '/templates?industry=financial-services' },
      { label: 'Healthcare', href: '/templates?industry=healthcare' },
    ],
  },
  {
    heading: 'Developers',
    links: [
      { label: 'API Docs (Coming soon)', href: '#' },
      { label: 'Python SDK (Coming soon)', href: '#' },
      { label: 'REST API (Coming soon)', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog (Coming soon)', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Contact', href: 'mailto:hello@orchestly.ai' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-mono-border bg-gray-50 dark:bg-mono-bg-alt">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold text-gray-900 dark:text-mono-text uppercase tracking-wider mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 dark:text-mono-muted transition-colors hover:text-gray-700 dark:hover:text-mono-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-mono-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-mono-secondary">
            <Layers className="h-4 w-4 text-brand-500" />
            <span>&copy; {new Date().getFullYear()} Orchestly.ai. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/company/orchestly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-mono-muted hover:text-gray-600 dark:hover:text-mono-body transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://x.com/orchestly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-mono-muted hover:text-gray-600 dark:hover:text-mono-body transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
