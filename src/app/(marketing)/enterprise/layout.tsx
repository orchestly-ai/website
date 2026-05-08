import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise - Orchestly',
  description: 'Enterprise-grade AI orchestration with SSO, RBAC, BYOK encryption, audit logs, and dedicated support.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
