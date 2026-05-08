import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Time-Travel Debugging - Orchestly',
  description: 'Replay any workflow execution step-by-step with full state inspection for faster debugging.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
