'use client';

import { ComparisonPage } from '@/components/product/ComparisonPage';

export default function CompareZapierPage() {
  return (
    <ComparisonPage
      competitor="Zapier"
      competitorDescription="Zapier is a no-code automation platform that connects 6,000+ apps with simple trigger-action workflows."
      headline="Orchestly is built for AI agent orchestration. Zapier is built for simple app-to-app automations."
      subheadline="Where Orchestly shines"
      rows={[
        { feature: 'AI-Native Architecture', orchestly: true, competitor: false },
        { feature: 'Multi-LLM Routing', orchestly: true, competitor: false },
        { feature: 'Automatic Failover', orchestly: true, competitor: false },
        { feature: 'DAG Workflows', orchestly: true, competitor: false },
        { feature: 'Parallel Execution', orchestly: true, competitor: false },
        { feature: 'Code View', orchestly: true, competitor: false },
        { feature: 'Time-Travel Debugging', orchestly: true, competitor: false },
        { feature: 'Cost Tracking per Model', orchestly: true, competitor: false },
        { feature: 'Change Control', orchestly: true, competitor: false },
        { feature: 'Prompt Management', orchestly: true, competitor: false },
        { feature: 'Agent Marketplace', orchestly: true, competitor: false },
        { feature: 'Self-Hosted Option', orchestly: true, competitor: false },
        { feature: 'Simple Trigger-Action', orchestly: true, competitor: true },
        { feature: 'App Integrations', orchestly: '40+', competitor: '6,000+' },
        { feature: 'No-Code Builder', orchestly: true, competitor: true },
      ]}
      advantages={[
        {
          title: 'Complex AI workflows, not simple zaps',
          description: 'Zapier connects apps with linear trigger-action flows. Orchestly builds complex, branching AI agent pipelines with parallel execution, loops, conditions, and sub-workflows.',
        },
        {
          title: 'Multi-model AI intelligence',
          description: 'Route requests to GPT-4, Claude, Gemini, and Llama based on cost and quality. Zapier has a basic AI action - not a multi-model orchestration layer.',
        },
        {
          title: 'Full visibility and control',
          description: 'Time-travel debugging, per-model cost tracking, change control, and audit logs give you complete visibility. Zapier shows task history but lacks AI-specific observability.',
        },
        {
          title: 'Enterprise deployment options',
          description: 'Self-host Orchestly in your own infrastructure with BYOK encryption and RBAC. Zapier is SaaS-only with no self-hosting and limited enterprise security controls.',
        },
      ]}
    />
  );
}
