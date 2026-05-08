'use client';

import { GitBranch, Zap, DollarSign, Shield } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';
import { MockupLLMRouting } from '@/components/mockups/MockupLLMRouting';

export default function LLMRoutingPage() {
  return (
    <FeaturePage
      title="LLM Routing"
      tagline="Multi-Model Intelligence"
      description="Route every request to the right model based on cost, latency, and quality requirements. Automatic failover ensures your agents never go down."
      heroMockup={<MockupLLMRouting />}
      capabilities={[
        {
          icon: GitBranch,
          title: 'Intelligent Model Selection',
          description: 'Define routing rules per workflow, endpoint, or request type. Route to GPT-4o for quality-critical tasks and Llama for high-throughput, cost-sensitive workloads.',
        },
        {
          icon: Zap,
          title: 'Automatic Failover',
          description: 'When a provider goes down or hits rate limits, traffic automatically fails over to your configured backup model. Zero downtime, zero manual intervention.',
        },
        {
          icon: DollarSign,
          title: 'Cost-Aware Routing',
          description: 'Set budget constraints per model, per workflow, or per team. The router automatically selects the cheapest model that meets your quality threshold.',
        },
        {
          icon: Shield,
          title: 'Latency-Based Selection',
          description: 'Monitor real-time latency across all providers. Route latency-sensitive requests to the fastest available model automatically.',
        },
      ]}
      sections={[
        {
          title: 'One API, every model',
          description: 'Connect to OpenAI, Anthropic, Google, Meta, Mistral, and more through a single unified API. Swap models without changing a single line of application code. Test new models in minutes, not days.',
          mockup: <MockupLLMRouting />,
        },
      ]}
    />
  );
}
