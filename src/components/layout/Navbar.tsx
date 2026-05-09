'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Layers, Sun, Moon, ChevronDown, ChevronRight,
  Workflow, GitBranch, Clock, Zap, Store, Activity, DollarSign, Shield,
  BookOpen, Code, FileText, Briefcase, Building2, Stethoscope, Cpu, ArrowRight,
  Users, Globe
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/ui/ThemeProvider';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  icon?: typeof Workflow;
  external?: boolean;
}

interface NavDropdown {
  label: string;
  columns?: { heading?: string; items: DropdownItem[] }[];
  href?: string;
}

const productFeatures: DropdownItem[] = [
  { label: 'Workflow Designer', href: '/product/workflow-designer', description: 'Visual drag-and-drop canvas', icon: Workflow },
  { label: 'LLM Routing', href: '/product/llm-routing', description: 'Multi-model routing & failover', icon: GitBranch },
  { label: 'Change Control', href: '/product/change-control', description: 'Versioning & approval gates', icon: Clock },
  { label: 'Integrations', href: '/product/integrations', description: '57+ pre-built connectors', icon: Zap },
  { label: 'Marketplace', href: '/product/marketplace', description: 'Agent registry & templates', icon: Store },
  { label: 'Time-Travel', href: '/product/time-travel', description: 'Execution replay & debugging', icon: Activity },
  { label: 'Cost Management', href: '/product/cost-management', description: 'Budget tracking & alerts', icon: DollarSign },
  { label: 'Security', href: '/product/security', description: 'SSO, RBAC, encryption', icon: Shield },
];

const navItems: NavDropdown[] = [
  {
    label: 'Product',
    columns: [
      {
        heading: 'Platform',
        items: productFeatures,
      },
    ],
  },
  {
    label: 'Templates',
    href: '/templates',
  },
  {
    label: 'Solutions',
    columns: [
      {
        heading: 'By Use Case',
        items: [
          { label: 'Content Creation', href: '/templates?useCase=content-creation', icon: FileText },
          { label: 'Customer Support', href: '/templates?useCase=customer-support', icon: Users },
          { label: 'Data Pipeline', href: '/templates?useCase=data-pipeline', icon: Code },
          { label: 'Document Processing', href: '/templates?useCase=document-processing', icon: BookOpen },
          { label: 'Code Review', href: '/templates?useCase=code-review', icon: GitBranch },
          { label: 'Lead Qualification', href: '/templates?useCase=lead-qualification', icon: Briefcase },
        ],
      },
      {
        heading: 'By Industry',
        items: [
          { label: 'Financial Services', href: '/templates?industry=financial-services', icon: DollarSign },
          { label: 'Healthcare', href: '/templates?industry=healthcare', icon: Stethoscope },
          { label: 'Technology', href: '/templates?industry=technology', icon: Cpu },
        ],
      },
    ],
  },
  {
    label: 'Developers',
    columns: [
      {
        items: [
          { label: 'API Reference', href: '#', description: 'Coming soon', icon: Code, external: true },
          { label: 'Python SDK', href: '#', description: 'Coming soon', icon: FileText, external: true },
          { label: 'REST API', href: '#', description: 'Coming soon', icon: Globe, external: true },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    columns: [
      {
        items: [
          { label: 'About', href: '/about', description: 'Our story & mission', icon: Users },
          { label: 'Blog', href: '#', description: 'Coming soon', icon: BookOpen },
          { label: 'vs n8n', href: '/compare/n8n', icon: ArrowRight },
          { label: 'vs Dify', href: '/compare/dify', icon: ArrowRight },
          { label: 'vs LangChain', href: '/compare/langchain', icon: ArrowRight },
          { label: 'vs Zapier', href: '/compare/zapier', icon: ArrowRight },
          { label: 'vs Portkey', href: '/compare/portkey', icon: ArrowRight },
        ],
      },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Enterprise',
    href: '/enterprise',
  },
];

function DesktopDropdown({ item, isOpen, onOpen, onClose }: { item: NavDropdown; isOpen: boolean; onOpen: () => void; onClose: () => void }) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onOpen();
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(onClose, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="text-sm text-gray-600 dark:text-mono-body transition-colors hover:text-gray-900 dark:hover:text-mono-text"
      >
        {item.label}
      </Link>
    );
  }

  const isWide = item.label === 'Product' || item.label === 'Solutions';

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className="flex items-center gap-1 text-sm text-gray-600 dark:text-mono-body transition-colors hover:text-gray-900 dark:hover:text-mono-text">
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && item.columns && (
        <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 ${isWide ? 'w-[520px]' : 'w-[280px]'}`}>
          <div className="rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-bg shadow-xl backdrop-blur-xl p-4">
            <div className={`${isWide && item.columns.length > 1 ? 'grid grid-cols-2 gap-4' : ''}`}>
              {item.columns.map((col, ci) => (
                <div key={ci}>
                  {col.heading && (
                    <p className="text-[10px] font-semibold text-gray-400 dark:text-mono-muted uppercase tracking-wider mb-2 px-2">
                      {col.heading}
                    </p>
                  )}
                  <div className="space-y-0.5">
                    {col.items.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-brand-50 dark:hover:bg-mono-surface/60 group"
                      >
                        {link.icon && (
                          <div className="flex-shrink-0 mt-0.5 rounded-md bg-brand-100 dark:bg-brand-500/10 p-1.5">
                            <link.icon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-mono-text">{link.label}</p>
                          {link.description && (
                            <p className="text-xs text-gray-500 dark:text-mono-muted mt-0.5">{link.description}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ item, onClose }: { item: NavDropdown; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (item.href) {
    return (
      <Link
        href={item.href}
        className="block text-sm text-gray-600 dark:text-mono-body transition-colors hover:text-gray-900 dark:hover:text-mono-text py-2"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between text-sm text-gray-600 dark:text-mono-body transition-colors hover:text-gray-900 dark:hover:text-mono-text py-2"
      >
        {item.label}
        <ChevronRight className={`h-4 w-4 transition-transform ${expanded ? 'rotate-90' : ''}`} />
      </button>
      {expanded && item.columns && (
        <div className="pl-4 pb-2 space-y-1">
          {item.columns.map((col, ci) => (
            <div key={ci}>
              {col.heading && (
                <p className="text-[10px] font-semibold text-gray-400 dark:text-mono-muted uppercase tracking-wider mt-2 mb-1">
                  {col.heading}
                </p>
              )}
              {col.items.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 py-1.5 text-sm text-gray-500 dark:text-mono-muted hover:text-gray-900 dark:hover:text-mono-text"
                  onClick={onClose}
                >
                  {link.icon && <link.icon className="h-3.5 w-3.5 text-brand-500" />}
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-mono-border bg-white/80 dark:bg-mono-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-mono-text">
          <Layers className="h-6 w-6 text-brand-500" />
          <span>Orchestly</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <DesktopDropdown
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onOpen={() => setOpenDropdown(item.label)}
              onClose={() => setOpenDropdown(null)}
            />
          ))}
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-gray-500 dark:text-mono-secondary hover:bg-gray-100 dark:hover:bg-mono-surface/60 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href="#cta"
            className="rounded-lg bg-cta px-4 py-2 text-sm font-semibold text-cta-text transition-colors hover:bg-cta-hover"
          >
            Request Early Access
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 dark:border-mono-border bg-white/95 dark:bg-mono-bg/95 backdrop-blur-xl lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <MobileAccordion
                key={item.label}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            <Link
              href="#cta"
              className="mt-3 rounded-lg bg-cta px-4 py-2.5 text-center text-sm font-semibold text-cta-text transition-colors hover:bg-cta-hover"
              onClick={() => setMobileOpen(false)}
            >
              Request Early Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
