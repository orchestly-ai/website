'use client';

import { Shield, Lock, Users, FileText } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';

export default function SecurityPage() {
  return (
    <FeaturePage
      title="Security"
      tagline="Enterprise Grade"
      description="SSO, RBAC, BYOK encryption, and comprehensive audit logging. Orchestly is built for organizations that take security and compliance seriously."
      heroImage="/images/screenshots/security-audit-logs.png"
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
          description: 'Every action is logged with severity, timestamp, user, and IP address. Filter by time range, search by action or user, and export logs as CSV or JSON. SOC 2 Type II compliant with configurable retention policies.',
        },
      ]}
      sections={[
        {
          title: 'Complete audit trail for every action',
          description: 'The Audit Logs dashboard tracks all system changes and user actions across your organization. See total logs, unique users, success/warning/error counts, and security events at a glance. Search and filter by action type, user, or time range. Click any entry to see the full diff of what changed. Export to CSV or JSON for compliance reporting.',
          image: '/images/screenshots/security-audit-logs.png',
        },
      ]}
    />
  );
}
