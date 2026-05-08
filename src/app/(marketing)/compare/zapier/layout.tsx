import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orchestly vs Zapier - Comparison',
  description: 'Compare Orchestly and Zapier for AI automation. Purpose-built AI orchestration vs simple automation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
