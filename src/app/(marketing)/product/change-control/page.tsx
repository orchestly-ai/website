'use client';

import { GitBranch, History, UserCheck, Shield, Eye, FileText } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';

export default function ChangeControlPage() {
  return (
    <FeaturePage
      title="Change Control"
      tagline="Version Everything"
      description="Git-like versioning for your AI workflows. See exactly what changed, who approved it, and roll back to any previous version instantly. Visual diffs, property-level diffs, and code-level diffs - all in one place."
      heroImage="/images/screenshots/change-control-overview.png"
      capabilities={[
        {
          icon: GitBranch,
          title: 'Git-Like Versioning',
          description: 'Every workflow change creates a new version with a full history. Compare any two versions side-by-side with a rich diff view showing exactly what changed.',
        },
        {
          icon: History,
          title: 'Instant Rollback',
          description: 'Something went wrong? Roll back to any previous version with one click. Rollbacks are also versioned so you never lose history.',
        },
        {
          icon: UserCheck,
          title: 'Approval Gates',
          description: 'Require team lead or admin approval before deploying workflow changes to production. Configurable approval chains with Slack and email notifications.',
        },
        {
          icon: Shield,
          title: 'Audit Trail',
          description: 'Complete audit log of every change, approval, deployment, and rollback. Know who changed what and when for compliance and debugging.',
        },
        {
          icon: Eye,
          title: 'Risk & Cost Analysis',
          description: 'Every change request gets an automated risk score and projected cost impact. See how model swaps, new nodes, or config changes affect your budget before merging.',
        },
        {
          icon: FileText,
          title: 'AI-Generated Summaries',
          description: 'Generate plain-English summaries of complex workflow changes with one click. Reviewers can quickly understand the scope and impact without reading every diff line.',
        },
      ]}
      sections={[
        {
          title: 'Visual canvas diff - see exactly what changed',
          description: 'Compare workflow versions side-by-side on the canvas. Added nodes are highlighted in green, removed in red, modified in yellow, and moved in blue. Click any node to drill into its field-level changes. Both base and head versions are rendered with full React Flow canvases.',
          image: '/images/screenshots/change-control-canvas-diff.png',
        },
        {
          title: 'Property-level diffs - every field, every change',
          description: 'The properties lens breaks down changes by category: added nodes, removed nodes, modified nodes, edge changes, variable updates, and trigger modifications. Expand any node to see the exact before/after values for every changed field - model swaps, prompt rewrites, config updates, all shown in red and green.',
          image: '/images/screenshots/change-control-properties-diff.png',
        },
        {
          title: 'Code diff - review changes as Python, TypeScript, or Java',
          description: 'Workflows are decompiled into SDK code and shown as a traditional code diff with line-by-line annotations. Toggle between Python, TypeScript, and Java. Red lines show removed code, green lines show additions. Copy either version to your clipboard, or use it as a reference to reproduce the workflow in your own codebase.',
          image: '/images/screenshots/change-control-code-diff.png',
        },
      ]}
    />
  );
}
