import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cost Management - Orchestly',
  description: 'Track per-model AI spending, set budgets, and optimize costs in real-time across all your workflows.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
