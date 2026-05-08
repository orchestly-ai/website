import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security - Orchestly',
  description: 'Enterprise-grade security with SSO, RBAC, BYOK encryption, audit logging, and compliance controls.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
