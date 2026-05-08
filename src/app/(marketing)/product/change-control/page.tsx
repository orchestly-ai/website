'use client';

import { GitBranch, History, UserCheck, Shield } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';
import { MockupChangeControl } from '@/components/mockups/MockupChangeControl';

export default function ChangeControlPage() {
  return (
    <FeaturePage
      title="Change Control"
      tagline="Version Everything"
      description="Git-like versioning for your AI workflows. See exactly what changed, who approved it, and roll back to any previous version instantly."
      heroMockup={<MockupChangeControl />}
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
      ]}
      sections={[
        {
          title: 'Move fast without breaking things',
          description: 'Change control gives your team confidence to iterate quickly. Developers can experiment freely in staging while production stays stable behind approval gates. When something slips through, rollback takes seconds.',
          mockup: <MockupChangeControl />,
        },
      ]}
    />
  );
}
