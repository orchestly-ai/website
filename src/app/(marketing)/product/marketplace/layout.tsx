import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketplace - Orchestly',
  description: 'Discover, publish, and reuse AI agents and workflow templates across your organization.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
