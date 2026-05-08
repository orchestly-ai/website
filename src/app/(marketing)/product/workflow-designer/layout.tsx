import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workflow Designer - Orchestly',
  description: 'Visual drag-and-drop workflow designer for AI agents. Build workflows without coding, or switch to Python code view.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
