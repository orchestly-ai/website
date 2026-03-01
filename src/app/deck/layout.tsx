import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orchestly | Pitch Deck',
  robots: 'noindex, nofollow',
};

export default function DeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
