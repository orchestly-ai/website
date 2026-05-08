'use client';

import { ComparisonPage } from '@/components/product/ComparisonPage';

export default function CompareDifyPage() {
  return (
    <ComparisonPage
      competitor="Dify"
      competitorDescription="Dify is an open-source platform for building LLM applications with visual prompt engineering and RAG pipeline tools."
      headline="Orchestly is an enterprise AI orchestration platform. Dify is an open-source LLM app builder focused on RAG and chatbots."
      subheadline="Where Orchestly shines"
      rows={[
        { feature: 'Visual Workflow Designer', orchestly: true, competitor: true },
        { feature: 'DAG-Based Pipeline Engine', orchestly: true, competitor: 'partial' },
        { feature: 'Multi-LLM Routing', orchestly: true, competitor: 'partial' },
        { feature: 'Automatic Failover', orchestly: true, competitor: false },
        { feature: 'Cost Management', orchestly: true, competitor: false },
        { feature: 'Change Control', orchestly: true, competitor: false },
        { feature: 'Time-Travel Debugging', orchestly: true, competitor: false },
        { feature: 'Agent Marketplace', orchestly: true, competitor: true },
        { feature: 'SSO / SAML', orchestly: true, competitor: true },
        { feature: 'RBAC', orchestly: true, competitor: true },
        { feature: 'BYOK Encryption', orchestly: true, competitor: false },
        { feature: 'Audit Logs', orchestly: true, competitor: true },
        { feature: 'SaaS Integrations', orchestly: '57+', competitor: '20+' },
        { feature: 'RAG Pipeline', orchestly: true, competitor: true },
        { feature: 'Enterprise Support', orchestly: true, competitor: true },
      ]}
      advantages={[
        {
          title: 'Beyond chatbots - full workflow orchestration',
          description: 'Dify excels at building RAG-powered chatbots. Orchestly orchestrates entire multi-step agent pipelines with triggers, conditions, parallel execution, sub-workflows, and human-in-the-loop approvals.',
        },
        {
          title: 'Enterprise-ready from day one',
          description: 'BYOK encryption, change control with approval gates, and AI-specific governance features like prompt versioning and model cost controls. Dify Enterprise offers SSO and RBAC, but lacks AI workflow-specific governance tools.',
        },
        {
          title: 'Production-grade cost controls',
          description: 'Track spending per model, set budgets per team, and get automated optimization recommendations. Dify has no built-in cost management - you discover overruns after the fact.',
        },
        {
          title: 'Deep SaaS integrations',
          description: 'Connect your AI workflows to Slack, GitHub, Jira, Salesforce, and 57+ services with managed OAuth. Dify supports MCP protocol integrations and has a plugin marketplace, but offers fewer pre-built SaaS connectors for business tools.',
        },
      ]}
    />
  );
}
