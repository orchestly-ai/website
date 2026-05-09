'use client';

import { GitBranch, Zap, DollarSign, Shield, BarChart3, RefreshCw } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';

export default function LLMRoutingPage() {
  return (
    <FeaturePage
      title="LLM Routing"
      tagline="Multi-Model Intelligence"
      description="Route every request to the right model based on cost, latency, and quality requirements. Automatic failover ensures your agents never go down."
      heroImage="/images/screenshots/llm-routing-health.png"
      capabilities={[
        {
          icon: GitBranch,
          title: 'Five Routing Strategies',
          description: 'Choose from Primary Only, Primary with Backup, Best Available, Cost Optimized, or Latency Optimized. Each strategy can be configured with quality thresholds, latency limits, and cost caps.',
        },
        {
          icon: Zap,
          title: 'Automatic Failover & Circuit Breakers',
          description: 'When a provider goes down or hits rate limits, traffic automatically fails over to your configured backup. Circuit breakers open after consecutive failures and auto-recover when the provider is healthy again.',
        },
        {
          icon: DollarSign,
          title: 'Cost-Aware Routing',
          description: 'Set budget constraints per model, per workflow, or per team. The Cost Optimized strategy selects the cheapest model that meets your minimum quality score and maximum latency threshold.',
        },
        {
          icon: Shield,
          title: 'Scope-Based Configuration',
          description: 'Set a default routing strategy for your organization, then override it at the workflow or individual agent level. Organization > Workflow > Agent hierarchy gives you precise control.',
        },
        {
          icon: BarChart3,
          title: 'Routing Analytics',
          description: 'Track total requests, cost savings, average latency, and P99 latency in real time. See the breakdown of routing decisions across primary, backup, cost-optimized, and latency-optimized paths.',
        },
        {
          icon: RefreshCw,
          title: 'Provider Health Monitoring',
          description: 'Monitor the health of every connected LLM provider. See success rates, circuit breaker state, and current load. Reset providers or switch strategies with one click.',
        },
      ]}
      sections={[
        {
          title: 'Configure routing strategies at every scope',
          description: 'The Model Router Configuration panel lets you set routing strategies at the organization, workflow, or agent level. Choose Cost Optimized, Latency Optimized, Quality First, or Weighted Round-Robin. Configure constraints like minimum quality score (0-100%), maximum latency, and cost per request. Changes take effect immediately.',
          image: '/images/screenshots/llm-routing-strategy.png',
        },
        {
          title: 'Real-time routing analytics and cost tracking',
          description: 'The Analytics tab shows total requests, cost savings, average latency, and P99 latency across all providers. See how routing decisions break down between primary, backup, cost-optimized, and latency-optimized paths. Track provider usage distribution and latency percentiles (P50, P95, P99) over time.',
          image: '/images/screenshots/llm-routing-analytics.png',
        },
      ]}
    />
  );
}
