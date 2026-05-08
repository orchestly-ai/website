'use client';

import { Shield, Lock, Users, FileText } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';
import { MockupSecurityDashboard } from '@/components/mockups/MockupSecurityDashboard';

export default function SecurityPage() {
  return (
    <FeaturePage
      title="Security"
      tagline="Enterprise Grade"
      description="SSO, RBAC, BYOK encryption, and comprehensive audit logging. Orchestly is built for organizations that take security and compliance seriously."
      heroMockup={<MockupSecurityDashboard />}
      capabilities={[
        {
          icon: Users,
          title: 'Role-Based Access Control',
          description: 'Define granular roles and permissions - Admin, Developer, Operator, Viewer, and custom roles. Control who can build, deploy, run, and view workflows.',
        },
        {
          icon: Lock,
          title: 'SSO & SAML',
          description: 'Enterprise single sign-on with SAML 2.0, OIDC, and OAuth2. Integrate with Okta, Azure AD, Google Workspace, and other identity providers.',
        },
        {
          icon: Shield,
          title: 'BYOK Encryption',
          description: 'Bring Your Own Key encryption for credentials and sensitive data. Keys never leave your infrastructure - use AWS KMS, GCP KMS, or Azure Key Vault.',
        },
        {
          icon: FileText,
          title: 'Audit Logs & Compliance',
          description: 'Every action is logged - deployments, config changes, data access, and API calls. SOC 2 Type II compliant with configurable retention policies.',
        },
      ]}
      sections={[
        {
          title: 'Security from the ground up',
          description: 'Orchestly was designed for enterprise security from day one. Every credential is encrypted at rest and in transit. Every API call is authenticated and authorized. Every action is logged and auditable.',
          mockup: <MockupSecurityDashboard />,
        },
      ]}
    />
  );
}
