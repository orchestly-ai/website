import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Orchestly - AI Workflow Orchestration Platform',
  description:
    'Build, deploy, and manage AI agent workflows visually. Multi-AI routing, cost optimization, drag-and-drop workflow designer, and enterprise security in one platform.',
  metadataBase: new URL('https://orchestly.ai'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Orchestly - AI Workflow Orchestration Platform',
    description:
      'Build, deploy, and manage AI agent workflows visually. One platform to orchestrate every agent, model, and workflow.',
    type: 'website',
    url: 'https://orchestly.ai',
    siteName: 'Orchestly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orchestly - AI Workflow Orchestration Platform',
    description:
      'Build, deploy, and manage AI agent workflows visually. One platform to orchestrate every agent, model, and workflow.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('orchestly-theme');
                if (t === 'light') document.documentElement.classList.remove('dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
