'use client';

import { ComparisonPage } from '@/components/product/ComparisonPage';

export default function CompareLangChainPage() {
  return (
    <ComparisonPage
      competitor="LangChain"
      competitorDescription="LangChain is an open-source framework for building LLM-powered applications with Python and JavaScript SDKs. The ecosystem includes LangGraph for agent orchestration, LangSmith for observability, and LangFlow for visual building."
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
        { feature: 'Managed Hosting', orchestly: true, competitor: 'partial' },
        { feature: 'Agent Marketplace', orchestly: true, competitor: false },
        { feature: 'SSO / RBAC', orchestly: true, competitor: false },
        { feature: 'Pre-Built Templates', orchestly: '74+', competitor: 'Examples' },
        { feature: 'Integrations (Managed)', orchestly: '57+', competitor: '100+ (DIY)' },
        { feature: 'Community Size', orchestly: 'Growing', competitor: 'Large' },
        { feature: 'Flexibility', orchestly: 'High', competitor: 'Very High' },
      ]}
      advantages={[
        {
          title: 'Platform, not just a framework',
          description: 'LangChain gives you building blocks - chains, agents, tools. LangGraph Platform now offers managed hosting, and LangSmith provides observability, but you still need to build versioning, cost tracking, and SaaS integrations yourself. Orchestly includes all of that out of the box.',
        },
        {
          title: 'Visual builder + code view',
          description: 'Build workflows visually or in Python, TypeScript, or Java - switch between both anytime. LangFlow offers visual building in the LangChain ecosystem, but it is a separate tool. Orchestly unifies visual and code views in a single platform.',
        },
        {
          title: 'Production infrastructure included',
          description: 'Managed hosting, automatic failover, real-time monitoring, cost controls, and change management included. LangGraph Platform now offers managed deployment and LangSmith provides tracing, but cost controls, change management, and SaaS integrations require additional tooling.',
        },
        {
          title: 'Team collaboration built in',
          description: 'RBAC, approval gates, shared templates, and audit logs enable teams to work together safely. LangChain applications are typically single-developer projects without built-in collaboration.',
        },
      ]}
    />
  );
}
