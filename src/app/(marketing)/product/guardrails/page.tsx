'use client';

import { ShieldCheck, ScanEye, FlaskConical, ScrollText } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';

export default function GuardrailsPage() {
  return (
    <FeaturePage
      title="Guardrails"
      tagline="Safety & Compliance"
      description="Configurable safety layer for LLM inputs and outputs. Block prompt injection, redact PII, filter toxic content, and validate format compliance across all your AI workflows."
      heroImage="/images/screenshots/guardrails-configs.png"
      capabilities={[
        {
          icon: ShieldCheck,
          title: 'Multi-Layer Safety Checks',
          description: 'Stack multiple guardrail rules per config: PII redaction, prompt injection blocking, toxicity filtering, hallucination detection, blocklist matching, and format validation. Apply to inputs, outputs, or both.',
        },
        {
          icon: ScanEye,
          title: 'Scope-Based Targeting',
          description: 'Apply guardrails at the organization level for blanket protection, or scope them to individual workflows for fine-grained control. Active/inactive toggle for instant enable/disable.',
        },
        {
          icon: FlaskConical,
          title: 'Built-In Test Panel',
          description: 'Test guardrail configurations against sample inputs before deploying. See exactly which rules trigger, what gets blocked or redacted, and verify your safety checks work as expected.',
        },
        {
          icon: ScrollText,
          title: 'Execution Log & Version History',
          description: 'Every guardrail execution is logged with full context. Version-tracked configurations let you see what changed, who changed it, and roll back instantly if needed.',
        },
      ]}
      sections={[
        {
          title: 'Test guardrails before you deploy them',
          description: 'The built-in Test Panel lets you run sample inputs through your guardrail configurations and see exactly which rules trigger. Verify PII redaction patterns, test prompt injection detection, and validate format rules before they go live.',
          image: '/images/screenshots/guardrails-test-panel.png',
        },
        {
          title: 'Complete execution log for every check',
          description: 'The Execution Log tracks every guardrail evaluation across your workflows. See which configs were applied, which rules triggered, and what action was taken (block, redact, flag). Filter by time range, config, or rule type for compliance reporting.',
          image: '/images/screenshots/guardrails-execution-log.png',
        },
        {
          title: 'Version-tracked configurations with full history',
          description: 'Every guardrail config change creates an immutable version snapshot. Browse the full version history, see who made each change, and compare snapshots side by side. Content-hash deduplication ensures no-op edits don\'t create spurious versions.',
          image: '/images/screenshots/guardrails-version-history.png',
        },
      ]}
      ctaText="Ready to add safety guardrails?"
    />
  );
}
