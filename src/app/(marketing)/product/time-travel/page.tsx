'use client';

import { Clock, Play, Database, Search } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';
import { MockupTimeTravel } from '@/components/mockups/MockupTimeTravel';

export default function TimeTravelPage() {
  return (
    <FeaturePage
      title="Time-Travel Debugging"
      tagline="Replay & Inspect"
      description="Replay any workflow execution step-by-step. Inspect the full state at every node, compare runs, and debug agent behavior with complete visibility."
      heroMockup={<MockupTimeTravel />}
      capabilities={[
        {
          icon: Play,
          title: 'Execution Replay',
          description: 'Replay any workflow run from start to finish. Step forward and backward through each node, seeing inputs, outputs, and timing at every stage.',
        },
        {
          icon: Database,
          title: 'State Snapshots',
          description: 'Every step captures a full state snapshot - model inputs, raw responses, transformed outputs, and metadata. Nothing is lost.',
        },
        {
          icon: Search,
          title: 'Step-by-Step Debugging',
          description: 'Pause on any step to inspect the complete context. See the exact prompt sent to the LLM, the raw response, and how it was processed by downstream nodes.',
        },
        {
          icon: Clock,
          title: 'Run Comparison',
          description: 'Compare two runs side-by-side to understand what changed. Identify regressions, debug non-deterministic behavior, and validate prompt changes.',
        },
      ]}
      sections={[
        {
          title: 'Debug AI agents like software',
          description: 'AI agents are notoriously hard to debug. Time-travel gives you the same debugging experience you expect from traditional software - breakpoints, state inspection, and deterministic replay - applied to non-deterministic AI workflows.',
          mockup: <MockupTimeTravel />,
        },
      ]}
    />
  );
}
