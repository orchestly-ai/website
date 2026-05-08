'use client';

import { ComparisonPage } from '@/components/product/ComparisonPage';

export default function ComparePortkeyPage() {
  return (
    <ComparisonPage
      competitor="Portkey"
      competitorDescription="Portkey is an AI gateway that provides LLM routing to 1,600+ models, caching, guardrails, and observability for LLM API calls. Being acquired by Palo Alto Networks in 2026."
      headline="Orchestly is a complete AI orchestration platform. Portkey is an LLM gateway layer focused on API management."
      subheadline="Where Orchestly shines"
      rows={[
        { feature: 'Visual Workflow Designer', orchestly: true, competitor: false },
        { feature: 'DAG-Based Pipelines', orchestly: true, competitor: false },
        { feature: 'Multi-LLM Routing', orchestly: true, competitor: true },
        { feature: 'Automatic Failover', orchestly: true, competitor: true },
        { feature: 'LLM Caching', orchestly: true, competitor: true },
        { feature: 'Cost Tracking', orchestly: true, competitor: true },
        { feature: 'Prompt Management', orchestly: true, competitor: true },
        { feature: 'Workflow Templates', orchestly: '74+', competitor: false },
        { feature: 'Agent Marketplace', orchestly: true, competitor: false },
        { feature: 'SaaS Integrations', orchestly: '57+', competitor: false },
        { feature: 'Time-Travel Debugging', orchestly: true, competitor: false },
        { feature: 'Change Control', orchestly: true, competitor: false },
        { feature: 'Human-in-the-Loop', orchestly: true, competitor: false },
        { feature: 'SSO / RBAC', orchestly: true, competitor: true },
        { feature: 'Self-Hosted Option', orchestly: true, competitor: true },
      ]}
      advantages={[
        {
          title: 'Full platform, not just a gateway',
          description: 'Portkey routes and monitors LLM API calls. Orchestly does that and also lets you build, version, deploy, and manage complete multi-step AI agent workflows with a visual builder.',
        },
        {
          title: 'End-to-end workflow orchestration',
          description: 'Build complex agent pipelines with triggers, conditions, parallel execution, human approvals, and sub-workflows. Portkey handles LLM calls but not the orchestration around them.',
        },
        {
          title: 'SaaS integrations built in',
          description: 'Connect your AI workflows to Slack, GitHub, Jira, databases, and 57+ services. Portkey integrates with 45+ AI providers and 8+ agent frameworks, but focuses on the LLM layer - you need additional tools for SaaS connectivity.',
        },
        {
          title: 'Templates and marketplace',
          description: 'Production-ready workflow templates and a marketplace of pre-built agents. Get started in minutes instead of building from scratch. Portkey provides API routing only.',
        },
      ]}
    />
  );
}
