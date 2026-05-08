import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orchestly vs LangChain - Comparison',
  description: 'Compare Orchestly and LangChain for AI workflows. Visual platform vs code-only framework.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
