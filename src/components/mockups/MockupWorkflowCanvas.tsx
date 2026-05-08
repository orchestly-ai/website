'use client';

// Based on real workflow: Incident Post-Mortem Generator (50d9ff98-e5dd-464b-b080-aeb248df630b)
const nodes = [
  { id: 'trigger', label: 'Incident Resolved', type: 'trigger', x: 15, y: 135, icon: '⚡', subtitle: 'PagerDuty Webhook' },
  { id: 'pagerduty', label: 'PagerDuty Timeline', type: 'integration', x: 175, y: 45, icon: '📟', subtitle: 'Get incident timeline' },
  { id: 'logs', label: 'Fetch Error Logs', type: 'integration', x: 175, y: 225, icon: '📊', subtitle: 'Datadog search' },
  { id: 'postmortem', label: 'Generate Post-Mortem', type: 'worker', x: 360, y: 130, icon: '🤖', subtitle: 'Claude 3.5 Sonnet' },
  { id: 'actions', label: 'Extract Actions', type: 'worker', x: 530, y: 40, icon: '📝', subtitle: 'GPT-4o-mini' },
  { id: 'jira', label: 'Create Jira Tickets', type: 'integration', x: 690, y: 40, icon: '🎫', subtitle: 'SRE project' },
  { id: 'slack', label: 'Share Post-Mortem', type: 'integration', x: 530, y: 225, icon: '💬', subtitle: 'Slack #incidents' },
  { id: 'done', label: 'Complete', type: 'output', x: 830, y: 130, icon: '✅', subtitle: 'Workflow done' },
];

const edges = [
  { from: 'trigger', to: 'pagerduty', fromX: 145, fromY: 155, toX: 175, toY: 70 },
  { from: 'trigger', to: 'logs', fromX: 145, fromY: 160, toX: 175, toY: 250 },
  { from: 'pagerduty', to: 'postmortem', fromX: 305, fromY: 70, toX: 360, toY: 150 },
  { from: 'logs', to: 'postmortem', fromX: 305, fromY: 250, toX: 360, toY: 160 },
  { from: 'postmortem', to: 'actions', fromX: 490, fromY: 148, toX: 530, toY: 65 },
  { from: 'postmortem', to: 'slack', fromX: 490, fromY: 162, toX: 530, toY: 250 },
  { from: 'actions', to: 'jira', fromX: 660, fromY: 65, toX: 690, toY: 65 },
  { from: 'jira', to: 'done', fromX: 820, fromY: 65, toX: 830, toY: 150 },
  { from: 'slack', to: 'done', fromX: 660, fromY: 250, toX: 830, toY: 160 },
];

const typeColors: Record<string, { bg: string; border: string; badge: string }> = {
  trigger: { bg: 'bg-amber-50 dark:bg-amber-500/10', border: 'border-amber-300 dark:border-amber-500/30', badge: 'Trigger' },
  worker: { bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-300 dark:border-blue-500/30', badge: 'LLM' },
  integration: { bg: 'bg-green-50 dark:bg-green-500/10', border: 'border-green-300 dark:border-green-500/30', badge: 'Integration' },
  output: { bg: 'bg-gray-50 dark:bg-gray-500/10', border: 'border-gray-300 dark:border-gray-500/30', badge: 'Output' },
};

const badgeColors: Record<string, string> = {
  trigger: 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400',
  worker: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400',
  integration: 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400',
  output: 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400',
};

export function MockupWorkflowCanvas() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-mono-border shadow-2xl bg-white dark:bg-[#1e1e1e]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-mono-border bg-gray-50 dark:bg-[#252525] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="h-4 w-px bg-gray-200 dark:bg-mono-border" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Incident Post-Mortem Generator</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400 font-medium">v1.2 - Live</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-[10px] px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">Canvas</button>
          <button className="text-[10px] px-2 py-1 rounded text-gray-400 dark:text-gray-500 font-medium">Code</button>
          <button className="text-[10px] px-2 py-1 rounded text-gray-400 dark:text-gray-500 font-medium">AI Copilot</button>
          <div className="h-4 w-px bg-gray-200 dark:bg-mono-border" />
          <button className="text-[10px] px-2.5 py-1 rounded bg-brand-500 text-white font-semibold">Deploy</button>
        </div>
      </div>

      {/* Canvas area */}
      <div className="relative" style={{ height: 340 }}>
        {/* Left sidebar - node palette */}
        <div className="absolute left-0 top-0 bottom-0 w-10 border-r border-gray-100 dark:border-mono-border/50 bg-gray-50/50 dark:bg-[#222] flex flex-col items-center gap-3 pt-3">
          {['⚡', '🤖', '👤', '◆', '🔌', '🛡️'].map((icon, i) => (
            <div key={i} className="h-6 w-6 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px] cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              {icon}
            </div>
          ))}
        </div>

        {/* Canvas with grid background */}
        <div className="absolute left-10 top-0 right-0 bottom-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(156,163,175,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />

          {/* SVG edges */}
          <svg className="absolute inset-0 w-full h-full" style={{ minWidth: 960 }}>
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" className="fill-gray-300 dark:fill-gray-600" />
              </marker>
            </defs>
            {edges.map((edge, i) => {
              const midX = (edge.fromX + edge.toX) / 2;
              return (
                <path
                  key={i}
                  d={`M ${edge.fromX} ${edge.fromY} C ${midX} ${edge.fromY}, ${midX} ${edge.toY}, ${edge.toX} ${edge.toY}`}
                  fill="none"
                  className="stroke-gray-300 dark:stroke-gray-600"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
            {/* Parallel fan-out labels */}
            <text x="148" y="118" className="fill-blue-400 dark:fill-blue-500" fontSize="8" fontWeight="500">parallel</text>
            <text x="493" y="118" className="fill-blue-400 dark:fill-blue-500" fontSize="8" fontWeight="500">parallel</text>
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const colors = typeColors[node.type];
            return (
              <div
                key={node.id}
                className={`absolute rounded-lg border ${colors.border} ${colors.bg} shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
                style={{ left: node.x, top: node.y, width: 130, padding: '8px 10px' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">{node.icon}</span>
                  <span className="text-[10px] font-semibold text-gray-800 dark:text-gray-200 truncate">{node.label}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 truncate">{node.subtitle}</span>
                  <span className={`text-[8px] px-1 py-0.5 rounded font-medium ${badgeColors[node.type]}`}>
                    {typeColors[node.type].badge}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Mini-map indicator */}
          <div className="absolute bottom-3 right-3 w-24 h-16 rounded border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-[#2a2a2a]/80 backdrop-blur-sm p-1">
            <div className="w-full h-full relative">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className="absolute rounded-sm bg-brand-400/40 dark:bg-brand-400/30"
                  style={{
                    left: `${(node.x / 960) * 100}%`,
                    top: `${(node.y / 320) * 100}%`,
                    width: 8,
                    height: 4,
                  }}
                />
              ))}
              <div className="absolute border border-brand-500/50 rounded-sm" style={{ left: '0%', top: '0%', width: '70%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between border-t border-gray-200 dark:border-mono-border bg-gray-50 dark:bg-[#252525] px-4 py-1.5">
        <div className="flex items-center gap-3 text-[10px] text-gray-400 dark:text-gray-500">
          <span>8 nodes</span>
          <span>9 connections</span>
          <span>2 parallel fan-outs</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-400 dark:text-gray-500">
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> All nodes valid</span>
          <span>Zoom: 85%</span>
        </div>
      </div>
    </div>
  );
}
