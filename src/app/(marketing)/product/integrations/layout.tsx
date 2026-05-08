import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations - Orchestly',
  description: 'Connect 40+ services including LLM providers, databases, SaaS tools, and APIs to your AI workflows.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
