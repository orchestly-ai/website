'use client';

import { DollarSign, TrendingUp, Bell, BarChart3 } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';

export default function CostManagementPage() {
  return (
    <FeaturePage
      title="Cost Management"
      tagline="Spend Control"
      description="Real-time visibility into per-agent, per-model LLM spending. Set budgets, get alerts, forecast costs, and automatically optimize for the best price-to-performance ratio."
      heroImage="/images/screenshots/cost-management.png"
      capabilities={[
        {
          icon: DollarSign,
          title: 'Per-Model Cost Tracking',
          description: 'Track spending by model, workflow, team, and time period. See exactly where your LLM budget is going - down to the individual request level.',
        },
        {
          icon: Bell,
          title: 'Budgets & Alerts',
          description: 'Set spending limits per workflow, per team, or per model. Get Slack and email alerts when spending approaches thresholds. Auto-pause workflows that exceed budgets.',
        },
        {
          icon: TrendingUp,
          title: 'Cost Forecasting',
          description: 'Predict future spending based on current trends and scheduled workflows. Plan capacity and negotiate provider contracts with data-driven insights.',
        },
        {
          icon: BarChart3,
          title: 'Optimization Recommendations',
          description: 'Automatic suggestions to reduce costs - switch to cheaper models for low-stakes tasks, batch requests, cache repeated queries, and eliminate waste.',
        },
      ]}
      sections={[
        {
          title: 'Optimize without compromising quality',
          description: 'Our cost optimization engine analyzes your usage patterns and suggests model swaps that maintain output quality while reducing costs. Route routine tasks to cheaper models and reserve premium models for complex work.',
          image: '/images/screenshots/dashboard-overview.png',
        },
      ]}
    />
  );
}
