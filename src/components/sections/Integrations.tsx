import { AnimateIn } from '@/components/ui/AnimateIn';
import { Server } from 'lucide-react';
import {
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiMeta,
  SiSlack,
  SiSalesforce,
  SiHubspot,
  SiGithub,
  SiStripe,
  SiZendesk,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

/* ─── Mistral icon (not in react-icons) ─── */
function MistralIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="4" y="2" width="4" height="4" />
      <rect x="16" y="2" width="4" height="4" />
      <rect x="4" y="6" width="4" height="4" />
      <rect x="8" y="6" width="4" height="4" />
      <rect x="16" y="6" width="4" height="4" />
      <rect x="4" y="10" width="4" height="4" />
      <rect x="8" y="10" width="4" height="4" />
      <rect x="12" y="10" width="4" height="4" />
      <rect x="16" y="10" width="4" height="4" />
      <rect x="4" y="14" width="4" height="4" />
      <rect x="12" y="14" width="4" height="4" />
      <rect x="16" y="14" width="4" height="4" />
      <rect x="4" y="18" width="4" height="4" />
      <rect x="16" y="18" width="4" height="4" />
    </svg>
  );
}

/* ─── Cohere icon (not in react-icons) ─── */
function CohereIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.82 0 3.53-.49 5-1.35V12c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-2.21 1.79-4 4-4s4 1.79 4 4v1.17A9.96 9.96 0 0 0 12 2z" />
    </svg>
  );
}

/* ─── Brand data ─── */

interface Integration {
  name: string;
  icon: IconType | (({ className }: { className?: string }) => JSX.Element);
  brandColor: string;
}

const llmProviders: Integration[] = [
  { name: 'OpenAI', icon: SiOpenai, brandColor: '#10a37f' },
  { name: 'Anthropic', icon: SiAnthropic, brandColor: '#d4a27f' },
  { name: 'Google Gemini', icon: SiGooglegemini, brandColor: '#8e75b2' },
  { name: 'Meta Llama', icon: SiMeta, brandColor: '#0082fb' },
  { name: 'Mistral', icon: MistralIcon, brandColor: '#ff7000' },
  { name: 'Cohere', icon: CohereIcon, brandColor: '#6b9e8a' },
  { name: 'Local Models', icon: Server, brandColor: '#8b8b8b' },
];

const connectors: Integration[] = [
  { name: 'Slack', icon: SiSlack, brandColor: '#e01e5a' },
  { name: 'Salesforce', icon: SiSalesforce, brandColor: '#00a1e0' },
  { name: 'HubSpot', icon: SiHubspot, brandColor: '#ff7a59' },
  { name: 'GitHub', icon: SiGithub, brandColor: '#f0f0f0' },
  { name: 'Stripe', icon: SiStripe, brandColor: '#635bff' },
  { name: 'Zendesk', icon: SiZendesk, brandColor: '#17494d' },
];

function IntegrationCard({ item }: { item: Integration }) {
  const Icon = item.icon;
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 px-6 py-5 transition-all hover:border-brand-500/30 hover:scale-105">
      <div style={{ color: item.brandColor }}>
        <Icon className="h-8 w-8" />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-mono-body">
        {item.name}
      </span>
    </div>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="border-t border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              Works with your stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
              Connect any LLM provider and integrate with the tools your team already uses.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 space-y-12">
          <AnimateIn delay={0.1}>
            <div>
              <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-mono-secondary">
                LLM Providers
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                {llmProviders.map((item) => (
                  <IntegrationCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div>
              <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-mono-secondary">
                Connects To
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {connectors.map((item) => (
                  <IntegrationCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
