'use client';

import Image from 'next/image';
import { AnimateIn } from '@/components/ui/AnimateIn';

const showcaseItems = [
  {
    title: 'Visual Workflow Designer',
    description:
      'Build complex agent pipelines with a drag-and-drop canvas. Add triggers, workers, conditions, and integrations — then connect them visually.',
    image: '/images/screenshots/workflow-designer.png',
    alt: 'Orchestly Workflow Designer with trigger, worker, condition, and integration nodes',
  },
  {
    title: 'Integrations Marketplace',
    description:
      'Connect 20+ services out of the box — OpenAI, Anthropic, Google AI, Slack, GitHub, Jira, and more. One click to configure.',
    image: '/images/screenshots/integrations.png',
    alt: 'Orchestly Integrations page showing OpenAI, Anthropic, and Google AI connectors',
  },
  {
    title: 'Agent Marketplace',
    description:
      'Discover and install pre-built agents and workflow templates. Content repurposers, ticket routers, code reviewers — ready to deploy.',
    image: '/images/screenshots/marketplace.png',
    alt: 'Orchestly Marketplace with featured agents and workflow templates',
  },
  {
    title: 'Usage & Cost Tracking',
    description:
      'Monitor token usage and LLM spending across every provider. Set budgets, get alerts, and forecast costs before they surprise you.',
    image: '/images/screenshots/cost-management.png',
    alt: 'Orchestly Usage and Cost Tracking dashboard',
  },
];

export function ProductShowcase() {
  return (
    <section className="border-t border-gray-200 dark:border-mono-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-mono-text sm:text-4xl">
              See it in action
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-mono-body">
              A single dashboard to build, connect, and monitor your entire AI agent fleet.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 space-y-20">
          {showcaseItems.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <AnimateIn
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={0.1}
                className="lg:w-2/5"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-mono-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-mono-body leading-relaxed">
                  {item.description}
                </p>
              </AnimateIn>

              <AnimateIn
                direction={i % 2 === 0 ? 'right' : 'left'}
                delay={0.2}
                className="lg:w-3/5"
              >
                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-mono-border shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={2560}
                    height={1600}
                    className="w-full h-auto"
                  />
                </div>
              </AnimateIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
