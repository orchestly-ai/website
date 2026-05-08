'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ArrowRight, Zap, Lock, Webhook, Code, Search, Plus, Server, MessageSquare, Headset, Bot, Cpu, Route, Image as ImageIcon, Database, Globe, Mail, Newspaper, BarChart3, Calendar, TreePine } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import {
  SiOpenai, SiAnthropic, SiGooglegemini, SiMeta, SiSlack, SiSalesforce, SiHubspot, SiGithub, SiStripe,
  SiZendesk, SiDiscord, SiSendgrid, SiTwilio, SiJira, SiAsana, SiDatadog, SiPagerduty, SiShopify,
  SiPostgresql, SiMongodb, SiGooglebigquery, SiSnowflake, SiAmazons3, SiIntercom, SiMailchimp, SiNotion,
  SiLinear, SiClickup, SiConfluence, SiAirtable, SiGoogledocs, SiGoogledrive, SiDropbox, SiX, SiLinkedin,
  SiReddit, SiFacebook, SiMedium, SiWordpress, SiRedis, SiSupabase, SiMixpanel, SiGooglecloud,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

/* ─── Custom icons ─── */
function MistralIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="4" y="2" width="4" height="4" /><rect x="16" y="2" width="4" height="4" />
      <rect x="4" y="6" width="4" height="4" /><rect x="8" y="6" width="4" height="4" /><rect x="16" y="6" width="4" height="4" />
      <rect x="4" y="10" width="4" height="4" /><rect x="8" y="10" width="4" height="4" /><rect x="12" y="10" width="4" height="4" /><rect x="16" y="10" width="4" height="4" />
      <rect x="4" y="14" width="4" height="4" /><rect x="12" y="14" width="4" height="4" /><rect x="16" y="14" width="4" height="4" />
      <rect x="4" y="18" width="4" height="4" /><rect x="16" y="18" width="4" height="4" />
    </svg>
  );
}

function CohereIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.82 0 3.53-.49 5-1.35V12c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-2.21 1.79-4 4-4s4 1.79 4 4v1.17A9.96 9.96 0 0 0 12 2z" />
    </svg>
  );
}

/* ─── Integration data ─── */
interface Integration {
  name: string;
  icon: IconType | (({ className }: { className?: string }) => JSX.Element);
  brandColor: string;
  category: string;
  description: string;
}

const integrations: Integration[] = [
  // LLM Providers
  { name: 'OpenAI', icon: SiOpenai, brandColor: '#10a37f', category: 'AI Models', description: 'GPT-4o, GPT-4, GPT-3.5 and DALL-E for text generation, analysis, and image creation' },
  { name: 'Anthropic', icon: SiAnthropic, brandColor: '#d4a27f', category: 'AI Models', description: 'Claude 3.5 Sonnet, Claude 3 Opus for AI assistance, analysis, and code generation' },
  { name: 'Google Gemini', icon: SiGooglegemini, brandColor: '#8e75b2', category: 'AI Models', description: 'Gemini Pro and Flash for multimodal AI with text, image, and video understanding' },
  { name: 'Meta Llama', icon: SiMeta, brandColor: '#0082fb', category: 'AI Models', description: 'Llama 3.1 open-source models for on-premise or cloud-hosted AI inference' },
  { name: 'Mistral', icon: MistralIcon, brandColor: '#ff7000', category: 'AI Models', description: 'Mixtral and Mistral models for efficient, high-quality text generation' },
  { name: 'Cohere', icon: CohereIcon, brandColor: '#6b9e8a', category: 'AI Models', description: 'Command and Embed models for enterprise search, RAG, and text generation' },
  { name: 'DeepSeek', icon: Bot, brandColor: '#4d6bfe', category: 'AI Models', description: 'DeepSeek-V2 and Coder models for reasoning and code generation tasks' },
  { name: 'Groq', icon: Cpu, brandColor: '#f55036', category: 'AI Models', description: 'Ultra-fast inference on LPU hardware for low-latency AI workloads' },
  { name: 'OpenRouter', icon: Route, brandColor: '#6366f1', category: 'AI Models', description: 'Unified API gateway to 100+ models with automatic fallback and routing' },
  { name: 'Stability AI', icon: ImageIcon, brandColor: '#ba45f0', category: 'AI Models', description: 'Stable Diffusion and SDXL for image generation and editing workflows' },
  { name: 'Local Models', icon: Server, brandColor: '#8b8b8b', category: 'AI Models', description: 'Run Ollama, vLLM, or any OpenAI-compatible endpoint on your own infrastructure' },

  // Communication
  { name: 'Slack', icon: SiSlack, brandColor: '#e01e5a', category: 'Communication', description: 'Send messages, create channels, manage threads, and trigger workflows from Slack events' },
  { name: 'Discord', icon: SiDiscord, brandColor: '#5865f2', category: 'Communication', description: 'Bot messages, channel management, and event-driven workflow triggers' },
  { name: 'Microsoft Teams', icon: MessageSquare, brandColor: '#6264a7', category: 'Communication', description: 'Post messages, manage channels, and integrate with Teams workflows' },
  { name: 'SendGrid', icon: SiSendgrid, brandColor: '#1a82e2', category: 'Communication', description: 'Transactional and marketing email delivery with templates and analytics' },
  { name: 'Twilio', icon: SiTwilio, brandColor: '#f22f46', category: 'Communication', description: 'SMS, voice calls, and WhatsApp messaging for customer communication' },
  { name: 'Resend', icon: Mail, brandColor: '#000000', category: 'Communication', description: 'Developer-first email API for transactional emails with React templates' },

  // Dev & IT
  { name: 'GitHub', icon: SiGithub, brandColor: '#f0f0f0', category: 'Dev & IT', description: 'Manage repos, PRs, issues, and actions. Trigger workflows on push, PR, or issue events' },
  { name: 'Jira', icon: SiJira, brandColor: '#0052cc', category: 'Dev & IT', description: 'Create and update issues, manage sprints, and sync project status' },
  { name: 'Linear', icon: SiLinear, brandColor: '#5e6ad2', category: 'Dev & IT', description: 'Issue tracking, project management, and cycle planning for engineering teams' },
  { name: 'ClickUp', icon: SiClickup, brandColor: '#7b68ee', category: 'Dev & IT', description: 'Task management, docs, and goals with workflow automation triggers' },
  { name: 'Confluence', icon: SiConfluence, brandColor: '#1868db', category: 'Dev & IT', description: 'Create and update wiki pages, search knowledge bases, and manage spaces' },
  { name: 'Monday', icon: Calendar, brandColor: '#ff3d57', category: 'Dev & IT', description: 'Work management boards, automations, and cross-team project tracking' },
  { name: 'Asana', icon: SiAsana, brandColor: '#f06a6a', category: 'Dev & IT', description: 'Task and project management with timeline, board, and list views' },
  { name: 'Datadog', icon: SiDatadog, brandColor: '#632ca6', category: 'Dev & IT', description: 'Monitor infrastructure metrics, logs, and APM traces from your workflows' },
  { name: 'PagerDuty', icon: SiPagerduty, brandColor: '#06ac38', category: 'Dev & IT', description: 'Incident management, on-call routing, and alert escalation' },
  { name: 'ServiceNow', icon: Headset, brandColor: '#81b5a1', category: 'Dev & IT', description: 'IT service management, ticketing, and enterprise workflow automation' },

  // CRM & Sales
  { name: 'Salesforce', icon: SiSalesforce, brandColor: '#00a1e0', category: 'CRM & Sales', description: 'Manage leads, contacts, opportunities, and custom objects with full CRUD access' },
  { name: 'HubSpot', icon: SiHubspot, brandColor: '#ff7a59', category: 'CRM & Sales', description: 'CRM, marketing automation, and sales pipeline management' },
  { name: 'Stripe', icon: SiStripe, brandColor: '#635bff', category: 'CRM & Sales', description: 'Payment processing, subscription management, and financial reporting' },
  { name: 'Zendesk', icon: SiZendesk, brandColor: '#03363d', category: 'CRM & Sales', description: 'Support ticket management, customer communication, and help center' },
  { name: 'Pipedrive', icon: BarChart3, brandColor: '#1a1a1a', category: 'CRM & Sales', description: 'Sales pipeline management, deal tracking, and activity logging' },
  { name: 'Shopify', icon: SiShopify, brandColor: '#96bf48', category: 'CRM & Sales', description: 'E-commerce order management, product catalog, and customer data' },

  // Data & Storage
  { name: 'PostgreSQL', icon: SiPostgresql, brandColor: '#4169e1', category: 'Data & Storage', description: 'Query, insert, update, and manage relational data with full SQL support' },
  { name: 'MongoDB', icon: SiMongodb, brandColor: '#47a248', category: 'Data & Storage', description: 'Document database operations with aggregation pipelines and change streams' },
  { name: 'Redis', icon: SiRedis, brandColor: '#dc382d', category: 'Data & Storage', description: 'In-memory caching, pub/sub messaging, and session management' },
  { name: 'Supabase', icon: SiSupabase, brandColor: '#3ecf8e', category: 'Data & Storage', description: 'Postgres database, auth, storage, and real-time subscriptions' },
  { name: 'Pinecone', icon: TreePine, brandColor: '#000000', category: 'Data & Storage', description: 'Vector database for similarity search, RAG, and embedding storage' },
  { name: 'Weaviate', icon: Database, brandColor: '#01cc74', category: 'Data & Storage', description: 'Vector search engine with hybrid search and multi-modal support' },
  { name: 'BigQuery', icon: SiGooglebigquery, brandColor: '#4386fa', category: 'Data & Storage', description: 'Serverless data warehouse for large-scale analytics and ML workloads' },
  { name: 'Snowflake', icon: SiSnowflake, brandColor: '#29b5e8', category: 'Data & Storage', description: 'Cloud data platform for warehousing, data lakes, and data sharing' },
  { name: 'AWS S3', icon: SiAmazons3, brandColor: '#569a31', category: 'Data & Storage', description: 'Object storage for files, backups, and data lake operations' },
  { name: 'Google Cloud', icon: SiGooglecloud, brandColor: '#4285f4', category: 'Data & Storage', description: 'GCS, BigTable, Pub/Sub, and other Google Cloud services' },

  // Productivity
  { name: 'Notion', icon: SiNotion, brandColor: '#f0f0f0', category: 'Productivity', description: 'Database queries, page creation, and knowledge base management' },
  { name: 'Airtable', icon: SiAirtable, brandColor: '#18bfff', category: 'Productivity', description: 'Spreadsheet-database hybrid with views, automations, and API access' },
  { name: 'Google Docs', icon: SiGoogledocs, brandColor: '#4285f4', category: 'Productivity', description: 'Create, edit, and manage documents with collaborative editing support' },
  { name: 'Google Drive', icon: SiGoogledrive, brandColor: '#1fa463', category: 'Productivity', description: 'File storage, sharing, and management with folder organization' },
  { name: 'Dropbox', icon: SiDropbox, brandColor: '#0061fe', category: 'Productivity', description: 'Cloud file storage, sharing, and synchronization across teams' },

  // Marketing & Social
  { name: 'Mailchimp', icon: SiMailchimp, brandColor: '#ffe01b', category: 'Marketing & Social', description: 'Email marketing campaigns, audience management, and analytics' },
  { name: 'Intercom', icon: SiIntercom, brandColor: '#6afdef', category: 'Marketing & Social', description: 'Customer messaging, live chat, and product tours' },
  { name: 'Mixpanel', icon: SiMixpanel, brandColor: '#7856ff', category: 'Marketing & Social', description: 'Product analytics, user tracking, and funnel analysis' },
  { name: 'X / Twitter', icon: SiX, brandColor: '#f0f0f0', category: 'Marketing & Social', description: 'Post tweets, monitor mentions, and track engagement metrics' },
  { name: 'LinkedIn', icon: SiLinkedin, brandColor: '#0a66c2', category: 'Marketing & Social', description: 'Post updates, manage company pages, and track professional engagement' },
  { name: 'Reddit', icon: SiReddit, brandColor: '#ff4500', category: 'Marketing & Social', description: 'Monitor subreddits, post content, and track community discussions' },
  { name: 'Facebook', icon: SiFacebook, brandColor: '#1877f2', category: 'Marketing & Social', description: 'Page management, ad campaigns, and audience insights' },
  { name: 'WordPress', icon: SiWordpress, brandColor: '#21759b', category: 'Marketing & Social', description: 'Publish posts, manage content, and update site settings' },
  { name: 'Medium', icon: SiMedium, brandColor: '#f0f0f0', category: 'Marketing & Social', description: 'Publish articles, manage publications, and track reader engagement' },
];

const allCategories = ['All', 'AI Models', 'Communication', 'Dev & IT', 'CRM & Sales', 'Data & Storage', 'Productivity', 'Marketing & Social'];

const capabilities = [
  { icon: Zap, title: '57 Pre-Built Connectors', description: 'Every connector is fully tested and maintained. OAuth flows, rate limiting, retries, and error handling built in.' },
  { icon: Lock, title: 'Managed OAuth & Credentials', description: 'Connect services with OAuth flows - no manual token management. Credentials encrypted at rest with BYOK support.' },
  { icon: Webhook, title: 'Webhook & Event Support', description: 'Trigger workflows from external events via webhooks. Build reactive agent pipelines that respond in real-time.' },
  { icon: Code, title: 'Custom Integrations', description: 'Build custom connectors using the SDK. Define schemas, auth methods, and rate limits. Publish to your org or marketplace.' },
];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return integrations.filter((i) => {
      const matchCategory = activeCategory === 'All' || i.category === activeCategory;
      const matchSearch = !search || i.name.toLowerCase().includes(search.toLowerCase()) || i.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-accent-100 dark:from-brand-950/80 dark:via-mono-bg dark:to-brand-900/40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-brand-600/10 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">Connect Everything</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-mono-text sm:text-5xl">
                Integrations
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-mono-body">
                Connect your AI workflows to {integrations.length} services out of the box. LLM providers, databases, SaaS tools, and custom APIs - all with managed OAuth and one-click setup.
              </p>
              <div className="mt-8">
                <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25">
                  Request Early Access <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-mono-border shadow-2xl">
                <Image src="/images/screenshots/integrations.png" alt="Integrations dashboard" width={1200} height={800} className="w-full h-auto" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-gray-200 dark:border-mono-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <AnimateIn key={cap.title} delay={0.05 + i * 0.05}>
                <div className="rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6 h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 mb-4">
                    <cap.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-mono-text">{cap.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-mono-body leading-relaxed">{cap.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full Integration Catalog */}
      <section className="border-t border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/20 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text">All Integrations</h2>
              <p className="mt-3 text-gray-600 dark:text-mono-body">
                Browse every integration available in Orchestly. Click a category to filter, or search by name.
              </p>
            </div>
          </AnimateIn>

          {/* Search + filter */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-mono-muted" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 pl-10 pr-4 py-2.5 text-sm text-gray-900 dark:text-mono-text placeholder-gray-400 dark:placeholder-mono-muted focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'bg-white dark:bg-mono-surface/40 border border-gray-200 dark:border-mono-border text-gray-600 dark:text-mono-body hover:bg-gray-100 dark:hover:bg-mono-surface/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <p className="mb-6 text-sm text-gray-500 dark:text-mono-muted">
            Showing {filtered.length} integration{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Integration grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateIn key={item.name} delay={0.02 + i * 0.015}>
                  <div className="group flex items-start gap-4 rounded-xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-5 transition-all hover:border-brand-500/30 hover:shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 dark:bg-mono-surface/60" style={{ color: item.brandColor }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900 dark:text-mono-text">{item.name}</h3>
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 dark:bg-mono-surface text-gray-500 dark:text-mono-muted whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-mono-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-gray-500 dark:text-mono-muted">
              No integrations found matching your search.
            </div>
          )}

          {/* Request integration */}
          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href="#cta"
                className="group flex items-center gap-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-mono-border bg-white/50 dark:bg-mono-surface/20 px-8 py-5 transition-all hover:border-brand-500/50 hover:bg-brand-50 dark:hover:bg-brand-500/5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-mono-surface/60 text-gray-400 dark:text-mono-secondary group-hover:bg-brand-100 dark:group-hover:bg-brand-500/10 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  <Plus className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-mono-secondary group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  Don&apos;t see what you need? Request an integration
                </span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Feature sections */}
      <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 space-y-24">
          <AnimateIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text">Every LLM provider in one place</h2>
                <p className="mt-4 text-gray-600 dark:text-mono-body leading-relaxed">
                  Connect to OpenAI, Anthropic, Google Gemini, Meta Llama, Mistral, Cohere, DeepSeek, Groq, and more with a single click. Switch between models without changing your workflow logic. Managed API key rotation and rate limit handling included.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-mono-border shadow-xl">
                <Image src="/images/screenshots/integrations.png" alt="LLM provider integrations" width={1200} height={800} className="w-full h-auto" />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text">Your tools, connected</h2>
                <p className="mt-4 text-gray-600 dark:text-mono-body leading-relaxed">
                  Bring your existing SaaS stack into your AI workflows. Send Slack notifications, create Jira tickets, query databases, update CRM records, and process files - all from within your agent pipelines.
                </p>
              </div>
              <div className="lg:order-1 rounded-xl overflow-hidden border border-gray-200 dark:border-mono-border shadow-xl">
                <Image src="/images/screenshots/marketplace.png" alt="SaaS tool integrations" width={1200} height={800} className="w-full h-auto" />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28 bg-gray-50/50 dark:bg-mono-surface/20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text">Ready to connect your stack?</h2>
            <p className="mt-4 text-gray-600 dark:text-mono-body">
              Get started with {integrations.length} pre-built integrations. Set up in minutes, not days.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-cta-text transition-all hover:bg-cta-hover hover:shadow-lg hover:shadow-cta/25">
                Request Early Access <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
