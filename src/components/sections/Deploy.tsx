import { AnimateIn } from '@/components/ui/AnimateIn';
import { Monitor, Container } from 'lucide-react';

const deployOptions = [
  {
    icon: Monitor,
    title: 'Local Development',
    description: 'SQLite, no Docker — up and running in 4 commands.',
    commands: [
      'git clone https://github.com/orchestly-ai/platform.git && cd platform',
      'python3 -m venv venv && source venv/bin/activate',
      'pip install -r backend/requirements.txt',
      'ADMIN_PASSWORD=admin123 USE_SQLITE=true python -m uvicorn backend.api.main:app',
    ],
  },
  {
    icon: Container,
    title: 'Docker Compose',
    description: 'Full stack with PostgreSQL, Redis, and monitoring.',
    commands: [
      'git clone https://github.com/orchestly-ai/platform.git && cd platform',
      'cp .env.example .env',
      'docker compose up',
    ],
  },
];

function TerminalBlock({ commands }: { commands: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-950">
      <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="px-5 py-4 font-mono text-sm leading-relaxed text-gray-300">
        {commands.map((cmd, i) => (
          <p key={i}>
            <span className="text-green-400">$</span> {cmd}
          </p>
        ))}
      </div>
    </div>
  );
}

export function Deploy() {
  return (
    <section id="deploy" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              Self-hosted. Your infrastructure.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
              Run Orchestly on your own servers. No vendor lock-in, no data leaving your network.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {deployOptions.map((option, idx) => {
            const Icon = option.icon;
            return (
              <AnimateIn key={option.title} delay={idx * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/40 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10">
                      <Icon className="h-5 w-5 text-brand-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-mono-text">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-mono-secondary">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <TerminalBlock commands={option.commands} />
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
