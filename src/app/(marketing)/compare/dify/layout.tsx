import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orchestly vs Dify - Comparison',
  description: 'Compare Orchestly and Dify for AI agent orchestration. Enterprise-grade platform vs open-source LLM app builder.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
