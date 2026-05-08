'use client';

import { Workflow, Layers, Code, GitBranch, Sparkles, Play } from 'lucide-react';
import { FeaturePage } from '@/components/product/FeaturePage';
import { MockupAICopilot } from '@/components/mockups/MockupAICopilot';
import { WorkflowViewSwitcher } from '@/components/mockups/WorkflowViewSwitcher';

export default function WorkflowDesignerPage() {
  return (
    <FeaturePage
      title="Workflow Designer"
      tagline="Visual Builder"
      description="Three ways to build AI workflows: drag-and-drop on a visual canvas, write Python code with full SDK access, or describe what you want and let AI Copilot build it for you. All three stay in sync - switch between them anytime."
      heroImage="/images/screenshots/workflow-builder-postmortem.png"
      capabilities={[
        {
          icon: Layers,
          title: 'No-Code Visual Canvas',
          description: 'Anyone on your team can build workflows. Drag triggers, LLM calls, conditions, and integrations onto the canvas and connect them visually. No coding or engineering background required.',
        },
        {
          icon: Code,
          title: 'Full Python Code View',
          description: 'Switch to Python code view for full programmatic control. The code and canvas stay bidirectionally synced - edit in one, see changes in the other. Import, export, and version-control workflows as code files.',
        },
        {
          icon: Sparkles,
          title: 'AI Copilot Builder',
          description: 'Describe what you want in plain English and AI Copilot builds the workflow for you. Refine iteratively - ask it to add steps, change routing logic, or swap models. Then edit the result in canvas or code.',
        },
        {
          icon: Workflow,
          title: 'DAG-Based Pipeline Engine',
          description: 'Model complex workflows as directed acyclic graphs. Support parallel execution, conditional branching, loops, and error handling out of the box. Fan-out to multiple LLMs and merge results.',
        },
        {
          icon: GitBranch,
          title: 'Sub-Workflows & Reuse',
          description: 'Compose workflows from smaller building blocks. Create sub-workflows that can be shared, versioned, and reused across your organization. Nest up to 3 levels deep.',
        },
        {
          icon: Play,
          title: 'Test & Deploy from the Same Interface',
          description: 'Run your workflow with test data directly in the designer. Inspect every step, check outputs, and debug issues before deploying. One-click deploy to production when ready.',
        },
      ]}
      sections={[
        {
          title: 'Write it in Python, TypeScript, or Java - see it on the canvas',
          description: 'The code view gives you full SDK access to define workflows programmatically in your language of choice. Every code change is reflected on the visual canvas in real-time. Engineers can use their preferred editor, commit workflow files to git, and run them in CI/CD pipelines - while the rest of the team follows along on the canvas.',
          mockup: <WorkflowViewSwitcher />,
        },
        {
          title: 'Describe it, and AI Copilot builds it',
          description: 'Tell AI Copilot what you want in natural language. It generates a complete workflow with the right nodes, connections, and configurations. Ask follow-up questions to refine - add error handling, swap LLM providers, adjust routing logic. When you are happy, apply it to the canvas or export as code.',
          mockup: <MockupAICopilot />,
        },
        {
          title: 'From idea to production in minutes',
          description: 'Start from a template, build from scratch on the canvas, write code, or describe it to AI Copilot. Test with real data in the designer. Deploy to production with one click. No context switching between tools - everything happens in the same interface.',
          image: '/images/screenshots/template-catalog.png',
        },
      ]}
    />
  );
}
