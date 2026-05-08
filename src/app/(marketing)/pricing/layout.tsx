import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Orchestly',
  description: 'Simple, transparent pricing for AI workflow orchestration. Start free, scale as you grow with Pro and Enterprise plans.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
