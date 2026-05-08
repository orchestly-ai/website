import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LLM Routing - Orchestly',
  description: 'Route AI requests to the optimal model based on cost, latency, and capability with automatic failover.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
