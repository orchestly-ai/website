'use client';

import { Zap, Lock, Webhook, Code } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';

export default function IntegrationsPage() {
  return (
    <FeaturePage
      title="Integrations"
      tagline="Connect Everything"
      description="Connect your AI workflows to 40+ services out of the box. LLM providers, databases, SaaS tools, and custom APIs - all with managed OAuth and one-click setup."
      heroImage="/images/screenshots/integrations.png"
      capabilities={[
        {
          icon: Zap,
          title: '40+ Pre-Built Connectors',
          description: 'OpenAI, Anthropic, Google AI, Slack, GitHub, Jira, PostgreSQL, Pinecone, and more. Each connector is fully tested and maintained by the Orchestly team.',
        },
        {
          icon: Lock,
          title: 'Managed OAuth & Credentials',
          description: 'Connect services with OAuth flows - no manual token management. Credentials are encrypted at rest with BYOK support for enterprise customers.',
        },
        {
          icon: Webhook,
          title: 'Webhook & Event Support',
          description: 'Trigger workflows from external events via webhooks. Subscribe to events from GitHub, Stripe, Intercom, and more to build reactive agent pipelines.',
        },
        {
          icon: Code,
          title: 'Custom Integrations',
          description: 'Build custom connectors using our SDK. Define input/output schemas, authentication methods, and rate limits. Publish to your org or the marketplace.',
        },
      ]}
      sections={[
        {
          title: 'Every LLM provider in one place',
          description: 'Connect to OpenAI, Anthropic, Google Gemini, Meta Llama, Mistral, and Cohere with a single click. Switch between models without changing your workflow logic. Managed API key rotation and rate limit handling included.',
          image: '/images/screenshots/integrations.png',
        },
        {
          title: 'Your tools, connected',
          description: 'Bring your existing SaaS stack into your AI workflows. Send Slack notifications, create Jira tickets, query databases, update CRM records, and process files - all from within your agent pipelines.',
          image: '/images/screenshots/marketplace.png',
        },
      ]}
    />
  );
}
