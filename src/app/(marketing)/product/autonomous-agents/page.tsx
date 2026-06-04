'use client';

import { Bot, Shield, Key, Users, ScrollText, GitBranch } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';

export default function AutonomousAgentsPage() {
  return (
    <FeaturePage
      title="Autonomous Agents"
      tagline="Autonomous Agent Runtime"
      description="Deploy goal-driven AI agents that reason, use tools, and iterate autonomously. Full lifecycle management with policies, teams, credentials, and version-tracked sessions."
      heroImage="/images/screenshots/agent-sessions-list.png"
      capabilities={[
        {
          icon: Bot,
          title: 'Goal-Driven Sessions',
          description: 'Give agents a goal and let them reason through it. Each session tracks iterations, tool calls, token usage, and costs in real time with a full execution timeline.',
        },
        {
          icon: Shield,
          title: 'Budget & Permission Policies',
          description: 'Define policies that control iteration limits, token budgets, cost caps, time limits, code execution, and network access. Assign versioned policies to any session.',
        },
        {
          icon: Users,
          title: 'Agent Teams',
          description: 'Organize agents into teams with shared policies and coordinated task execution. Manage multi-agent workflows from a single dashboard.',
        },
        {
          icon: Key,
          title: 'Credential Broker',
          description: 'Agents never see secrets. The Credential Broker resolves opaque references server-side and logs every usage to an audit trail. Zero-trust credential management.',
        },
        {
          icon: ScrollText,
          title: 'Agent Registry',
          description: 'Register, version, and discover agents across your organization. Track definition changes with immutable version snapshots and content-hash deduplication.',
        },
        {
          icon: GitBranch,
          title: 'Version History',
          description: 'Every policy, guardrail config, and agent definition is version-tracked. Browse the full history, compare snapshots, and know exactly what changed and when.',
        },
      ]}
      sections={[
        {
          title: 'Full visibility into every agent session',
          description: 'The session detail view shows each iteration with the agent\'s reasoning, tool calls, observations, and final actions. A sidebar tracks budget consumption for iterations, tokens, cost, and time against configured limits. See the exact policy version and model configuration used.',
          image: '/images/screenshots/agent-session-detail.png',
        },
        {
          title: 'Granular policies for every use case',
          description: 'Start from built-in templates (Restrictive, Standard, Permissive, Code Execution, Research Only) or create custom policies. Each policy controls iteration limits, token budgets, cost caps, wall-clock time, code execution, network access, file system permissions, sandbox resources, credential access, PII handling, and observability settings. The table shows all active policies with their limits at a glance.',
          image: '/images/screenshots/agent-policies-custom.png',
        },
        {
          title: 'Fine-grained policy configuration',
          description: 'The policy editor exposes every control surface: Budget Controls (iterations, tokens, cost, time), Permissions (code execution, network, delegation), Network Controls (allowed/denied domains, ports, TLS), File System (writable/denied paths, file type allowlists), Sandbox Resources (memory, CPU, disk, blocked modules), Credentials, Content Safety (PII action, blocked topics), HITL gates, and Observability (log level, retention, tracing).',
          image: '/images/screenshots/agent-policy-create-form.png',
        },
        {
          title: 'Version-tracked policies with full audit trail',
          description: 'Every policy edit creates an immutable version snapshot. Browse the full version history, see who made each change, and compare JSON snapshots side by side. Content-hash deduplication prevents spurious versions when nothing actually changed.',
          image: '/images/screenshots/agent-policy-versions.png',
        },
        {
          title: 'Secure credential management for agents',
          description: 'The Credential Broker ensures agents never see raw secrets. Credentials are registered with opaque reference IDs, resolved server-side at runtime, and every usage is logged. Revoke access instantly without redeploying agents.',
          image: '/images/screenshots/agent-credentials.png',
        },
        {
          title: 'Organize agents into collaborative teams',
          description: 'Group agents into teams with shared configurations and coordinated execution. Assign team-wide policies, monitor aggregate performance, and manage multi-agent workflows from a unified view.',
          image: '/images/screenshots/agent-teams.png',
        },
        {
          title: 'Discover and manage agents in the registry',
          description: 'The Agent Registry is the single source of truth for all agents in your organization. Register new agents, track definition versions, and see which agents are active. Every definition change is versioned with content-hash deduplication to prevent duplicate snapshots.',
          image: '/images/screenshots/agent-registry.png',
        },
      ]}
      ctaText="Ready to deploy autonomous agents?"
    />
  );
}
