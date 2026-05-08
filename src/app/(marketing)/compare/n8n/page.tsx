'use client';

import { ComparisonPage } from '@/components/product/ComparisonPage';

export default function CompareN8nPage() {
  return (
    <ComparisonPage
      competitor="n8n"
      competitorDescription="n8n is an open-source workflow automation platform for general-purpose integrations and data flows."
      headline="Orchestly is purpose-built for AI agent orchestration. n8n is a general automation tool adapted for AI use cases."
      subheadline="Where Orchestly shines"
      rows={[
        { feature: 'AI-Native Architecture', orchestly: true, competitor: false },
        { feature: 'Visual Workflow Designer', orchestly: true, competitor: true },
        { feature: 'Multi-LLM Routing', orchestly: true, competitor: false },
        { feature: 'Automatic Failover', orchestly: true, competitor: false },
        { feature: 'Cost Tracking per Model', orchestly: true, competitor: false },
        { feature: 'Time-Travel Debugging', orchestly: true, competitor: false },
        { feature: 'Agent Marketplace', orchestly: true, competitor: 'partial' },
        { feature: 'Change Control & Versioning', orchestly: true, competitor: 'partial' },
        { feature: 'Prompt Management', orchestly: true, competitor: false },
        { feature: 'SSO / SAML', orchestly: true, competitor: true },
        { feature: 'BYOK Encryption', orchestly: true, competitor: 'partial' },
        { feature: 'Self-Hosted Option', orchestly: true, competitor: true },
        { feature: 'Pre-Built Integrations', orchestly: '57+', competitor: '400+' },
        { feature: 'AI-Specific Templates', orchestly: '74+', competitor: '50+' },
      ]}
      advantages={[
        {
          title: 'Built for AI, not adapted for it',
          description: 'Orchestly was designed from the ground up for AI agent workflows. Multi-LLM routing, prompt versioning, token cost tracking, and time-travel debugging are first-class features - not plugins bolted on later.',
        },
        {
          title: 'Multi-model routing & failover',
          description: 'Route requests to the optimal model based on cost, latency, and quality. Automatic failover keeps your agents running when providers go down. n8n requires manual model configuration per node.',
        },
        {
          title: 'Real-time cost visibility',
          description: 'Track LLM spending per model, per workflow, per team in real-time. Set budgets and alerts. n8n has no built-in LLM cost tracking - you need external monitoring.',
        },
        {
          title: 'Enterprise-grade AI governance',
          description: 'Change control with approval gates, BYOK encryption, comprehensive audit logs, and RBAC designed for AI workflows. n8n Enterprise offers SSO/SAML and RBAC, but lacks AI-specific governance like prompt versioning and model cost controls.',
        },
      ]}
    />
  );
}
