import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orchestly vs n8n - Comparison',
  description: 'Compare Orchestly and n8n for AI workflow orchestration. See how AI-native orchestration differs from general automation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
