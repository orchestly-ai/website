'use client';

import { Store, Upload, GitBranch, Users } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';

export default function MarketplacePage() {
  return (
    <FeaturePage
      title="Marketplace"
      tagline="Agent Registry"
      description="Discover, publish, and reuse pre-built agents and workflow templates. Build once, share across your organization, and leverage community contributions."
      heroImage="/images/screenshots/marketplace.png"
      capabilities={[
        {
          icon: Store,
          title: 'Agent Registry',
          description: 'Browse a curated catalog of pre-built agents for sales, support, engineering, and more. Install and customize any agent with a single click.',
        },
        {
          icon: Upload,
          title: 'Publish & Share',
          description: 'Package your workflows as reusable agents and share them with your team or the community. Define input schemas, documentation, and usage examples.',
        },
        {
          icon: GitBranch,
          title: 'Version Management',
          description: 'Every marketplace agent supports semantic versioning. Pin to specific versions for stability or auto-update for the latest improvements.',
        },
        {
          icon: Users,
          title: 'Community Agents',
          description: 'Access a growing library of community-contributed agents. Review ratings, usage stats, and source code before installing.',
        },
      ]}
      sections={[
        {
          title: 'From marketplace to production in seconds',
          description: 'Find the right agent for your use case, install it with one click, configure your credentials, and deploy. No building from scratch - start with battle-tested workflows and customize from there.',
          image: '/images/screenshots/marketplace.png',
        },
        {
          title: 'Standardize across your organization',
          description: 'Publish approved agents to your private registry. Enforce best practices, ensure compliance, and reduce duplication by giving every team access to a shared library of production-ready workflows.',
          image: '/images/screenshots/template-catalog.png',
        },
      ]}
    />
  );
}
