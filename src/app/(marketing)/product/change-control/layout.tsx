import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Change Control - Orchestly',
  description: 'Git-like versioning for AI workflows with diff views, approval gates, and instant rollback.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
