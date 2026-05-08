import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orchestly vs Portkey - Comparison',
  description: 'Compare Orchestly and Portkey for AI infrastructure. Full orchestration platform vs LLM gateway.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
