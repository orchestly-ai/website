'use client';

import { ComparisonPage } from '@/components/product/ComparisonPage';

export default function CompareLangChainPage() {
  return (
    <ComparisonPage
      competitor="LangChain"
      competitorDescription="LangChain is an open-source framework for building LLM-powered applications with Python and JavaScript SDKs."
      headline="Orchestly is a visual platform with built-in infrastructure. LangChain is a code framework that requires you to build your own."
      subheadline="Where Orchestly shines"
      rows={[
        { feature: 'Visual Workflow Designer', orchestly: true, competitor: false },
        { feature: 'No-Code / Low-Code', orchestly: true, competitor: false },
        { feature: 'Code View / SDK', orchestly: true, competitor: true },
        { feature: 'Multi-LLM Routing', orchestly: true, competitor: 'partial' },
        { feature: 'Automatic Failover', orchestly: true, competitor: false },
        { feature: 'Built-in Cost Tracking', orchestly: true, competitor: false },
        { feature: 'Time-Travel Debugging', orchestly: true, competitor: false },
        { feature: 'Change Control', orchestly: true, competitor: false },
        { feature: 'Managed Hosting', orchestly: true, competitor: false },
        { feature: 'Agent Marketplace', orchestly: true, competitor: false },
        { feature: 'SSO / RBAC', orchestly: true, competitor: false },
        { feature: 'Pre-Built Templates', orchestly: '16+', competitor: 'Examples' },
        { feature: 'Integrations (Managed)', orchestly: '40+', competitor: '100+ (DIY)' },
        { feature: 'Community Size', orchestly: 'Growing', competitor: 'Large' },
        { feature: 'Flexibility', orchestly: 'High', competitor: 'Very High' },
      ]}
      advantages={[
        {
          title: 'Platform, not just a framework',
          description: 'LangChain gives you building blocks - chains, agents, tools. You still need to build hosting, monitoring, versioning, and cost tracking yourself. Orchestly includes all of that out of the box.',
        },
        {
          title: 'Visual builder + code view',
          description: 'Build workflows visually or in Python - switch between both anytime. LangChain is code-only, which limits collaboration between technical and non-technical team members.',
        },
        {
          title: 'Production infrastructure included',
          description: 'Managed hosting, automatic failover, real-time monitoring, cost controls, and change management. With LangChain, you build and maintain all production infrastructure yourself.',
        },
        {
          title: 'Team collaboration built in',
          description: 'RBAC, approval gates, shared templates, and audit logs enable teams to work together safely. LangChain applications are typically single-developer projects without built-in collaboration.',
        },
      ]}
    />
  );
}
