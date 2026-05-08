import { AnimateIn } from '@/components/ui/AnimateIn';
import { Server, MessageSquare, Headset, Bot, Cpu, Route, Image, Database, Globe, Mail, Newspaper, BarChart3, Calendar, TreePine, Plus } from 'lucide-react';
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
  SiDiscord,
  SiSendgrid,
  SiTwilio,
  SiJira,
  SiAsana,
  SiDatadog,
  SiPagerduty,
  SiShopify,
  SiPostgresql,
  SiMongodb,
  SiGooglebigquery,
  SiSnowflake,
  SiAmazons3,
  SiIntercom,
  SiMailchimp,
  SiNotion,
  SiLinear,
  SiClickup,
  SiConfluence,
  SiAirtable,
  SiGoogledocs,
  SiGoogledrive,
  SiDropbox,
  SiX,
  SiLinkedin,
  SiReddit,
  SiFacebook,
  SiMedium,
  SiWordpress,
  SiRedis,
  SiSupabase,
  SiMixpanel,
  SiGooglecloud,
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
  { name: 'DeepSeek', icon: Bot, brandColor: '#4d6bfe' },
  { name: 'Groq', icon: Cpu, brandColor: '#f55036' },
  { name: 'OpenRouter', icon: Route, brandColor: '#6366f1' },
  { name: 'Stability AI', icon: Image, brandColor: '#ba45f0' },
  { name: 'Local Models', icon: Server, brandColor: '#8b8b8b' },
];

interface ConnectorCategory {
  label: string;
  items: Integration[];
}

const connectorCategories: ConnectorCategory[] = [
  {
    label: 'Communication',
    items: [
      { name: 'Slack', icon: SiSlack, brandColor: '#e01e5a' },
      { name: 'Discord', icon: SiDiscord, brandColor: '#5865f2' },
      { name: 'Microsoft Teams', icon: MessageSquare, brandColor: '#6264a7' },
      { name: 'SendGrid', icon: SiSendgrid, brandColor: '#1a82e2' },
      { name: 'Twilio', icon: SiTwilio, brandColor: '#f22f46' },
      { name: 'Resend', icon: Mail, brandColor: '#000000' },
    ],
  },
  {
    label: 'Dev & IT',
    items: [
      { name: 'GitHub', icon: SiGithub, brandColor: '#f0f0f0' },
      { name: 'Jira', icon: SiJira, brandColor: '#0052cc' },
      { name: 'Linear', icon: SiLinear, brandColor: '#5e6ad2' },
      { name: 'ClickUp', icon: SiClickup, brandColor: '#7b68ee' },
      { name: 'Confluence', icon: SiConfluence, brandColor: '#1868db' },
      { name: 'Monday', icon: Calendar, brandColor: '#ff3d57' },
      { name: 'Asana', icon: SiAsana, brandColor: '#f06a6a' },
      { name: 'Datadog', icon: SiDatadog, brandColor: '#632ca6' },
      { name: 'PagerDuty', icon: SiPagerduty, brandColor: '#06ac38' },
      { name: 'ServiceNow', icon: Headset, brandColor: '#81b5a1' },
    ],
  },
  {
    label: 'CRM & Sales',
    items: [
      { name: 'Salesforce', icon: SiSalesforce, brandColor: '#00a1e0' },
      { name: 'HubSpot', icon: SiHubspot, brandColor: '#ff7a59' },
      { name: 'Stripe', icon: SiStripe, brandColor: '#635bff' },
      { name: 'Zendesk', icon: SiZendesk, brandColor: '#03363d' },
      { name: 'Pipedrive', icon: BarChart3, brandColor: '#1a1a1a' },
      { name: 'Shopify', icon: SiShopify, brandColor: '#96bf48' },
    ],
  },
  {
    label: 'Data & Storage',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, brandColor: '#4169e1' },
      { name: 'MongoDB', icon: SiMongodb, brandColor: '#47a248' },
      { name: 'Redis', icon: SiRedis, brandColor: '#dc382d' },
      { name: 'Supabase', icon: SiSupabase, brandColor: '#3ecf8e' },
      { name: 'Pinecone', icon: TreePine, brandColor: '#000000' },
      { name: 'Weaviate', icon: Database, brandColor: '#01cc74' },
      { name: 'BigQuery', icon: SiGooglebigquery, brandColor: '#4386fa' },
      { name: 'Snowflake', icon: SiSnowflake, brandColor: '#29b5e8' },
      { name: 'AWS S3', icon: SiAmazons3, brandColor: '#569a31' },
      { name: 'Google Cloud', icon: SiGooglecloud, brandColor: '#4285f4' },
    ],
  },
  {
    label: 'Productivity',
    items: [
      { name: 'Notion', icon: SiNotion, brandColor: '#f0f0f0' },
      { name: 'Airtable', icon: SiAirtable, brandColor: '#18bfff' },
      { name: 'Google Docs', icon: SiGoogledocs, brandColor: '#4285f4' },
      { name: 'Google Drive', icon: SiGoogledrive, brandColor: '#1fa463' },
      { name: 'Dropbox', icon: SiDropbox, brandColor: '#0061fe' },
    ],
  },
  {
    label: 'Marketing & Social',
    items: [
      { name: 'Mailchimp', icon: SiMailchimp, brandColor: '#ffe01b' },
      { name: 'Intercom', icon: SiIntercom, brandColor: '#6afdef' },
      { name: 'Mixpanel', icon: SiMixpanel, brandColor: '#7856ff' },
      { name: 'X / Twitter', icon: SiX, brandColor: '#f0f0f0' },
      { name: 'LinkedIn', icon: SiLinkedin, brandColor: '#0a66c2' },
      { name: 'Reddit', icon: SiReddit, brandColor: '#ff4500' },
      { name: 'Facebook', icon: SiFacebook, brandColor: '#1877f2' },
      { name: 'WordPress', icon: SiWordpress, brandColor: '#21759b' },
      { name: 'Medium', icon: SiMedium, brandColor: '#f0f0f0' },
    ],
  },
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
              40+ native integrations. Connect any LLM provider and integrate with the tools your team already uses.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 space-y-12">
          <AnimateIn delay={0.1}>
            <div>
              <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-mono-secondary">
                LLM Providers
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                {llmProviders.map((item) => (
                  <IntegrationCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          </AnimateIn>

          {connectorCategories.map((category, catIdx) => (
            <AnimateIn key={category.label} delay={0.15 + catIdx * 0.05}>
              <div>
                <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-mono-secondary">
                  {category.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                  {category.items.map((item) => (
                    <IntegrationCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Request an Integration */}
          <AnimateIn delay={0.5}>
            <div className="flex flex-col items-center gap-4 pt-4">
              <a
                href="#cta"
                className="group flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-mono-border bg-white/50 dark:bg-mono-surface/20 px-10 py-6 transition-all hover:border-brand-500/50 hover:bg-brand-50 dark:hover:bg-brand-500/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-mono-surface/60 text-gray-400 dark:text-mono-secondary group-hover:bg-brand-100 dark:group-hover:bg-brand-500/10 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  <Plus className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-mono-secondary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Request an Integration
                </span>
              </a>
              <p className="text-xs text-gray-400 dark:text-mono-secondary">
                Don&apos;t see what you need? We&apos;re adding new integrations every week.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
