'use client';

export function MockupTimeTravel() {
  const steps = [
    { id: 1, name: 'Trigger: Webhook', time: '0ms', status: 'completed', data: '{ "ticket_id": 4521, "priority": "high" }' },
    { id: 2, name: 'Extract: Parse Ticket', time: '120ms', status: 'completed', data: '{ "category": "billing", "sentiment": -0.72 }' },
    { id: 3, name: 'Route: LLM Classification', time: '845ms', status: 'completed', data: '{ "model": "claude-3.5", "tokens": 342, "label": "refund" }' },
    { id: 4, name: 'Action: CRM Lookup', time: '1.2s', status: 'active', data: '{ "customer": "Acme Corp", "tier": "Enterprise" }' },
    { id: 5, name: 'Decision: Approval Gate', time: '-', status: 'pending', data: null },
    { id: 6, name: 'Action: Resolve Ticket', time: '-', status: 'pending', data: null },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-mono-border shadow-2xl bg-white dark:bg-[#1e1c1f]">
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-gray-200 dark:border-mono-border px-4 py-2.5 bg-gray-50 dark:bg-[#221f22]">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="ml-2 text-xs text-gray-500 dark:text-mono-muted font-mono">Time-Travel Debugger - orchestly.ai</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex w-48 flex-col border-r border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-[#19181a] py-3 px-2">
          {['Dashboard', 'Workflows', 'LLM Routing', 'Integrations', 'Cost Mgmt', 'Templates', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`px-3 py-1.5 rounded-md text-xs font-medium mb-0.5 ${
                i === 1
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                  : 'text-gray-500 dark:text-mono-muted'
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 min-h-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-mono-text">Run #8,247 - Ticket Auto-Resolver</h3>
              <p className="text-[10px] text-gray-500 dark:text-mono-muted mt-0.5">Started 2.1s ago · Step 4 of 6</p>
            </div>
            <div className="flex gap-1.5">
              <button className="text-[10px] px-2 py-1 rounded bg-gray-100 dark:bg-mono-surface text-gray-600 dark:text-mono-body font-medium">⏮ Restart</button>
              <button className="text-[10px] px-2 py-1 rounded bg-gray-100 dark:bg-mono-surface text-gray-600 dark:text-mono-body font-medium">⏪ Prev</button>
              <button className="text-[10px] px-2 py-1 rounded bg-brand-500 text-white font-medium">⏩ Next</button>
              <button className="text-[10px] px-2 py-1 rounded bg-gray-100 dark:bg-mono-surface text-gray-600 dark:text-mono-body font-medium">⏭ End</button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mb-4">
            <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-mono-border">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" style={{ width: '58%' }} />
            </div>
            <div className="flex justify-between mt-1">
              {steps.map((s) => (
                <div
                  key={s.id}
                  className={`h-3 w-3 rounded-full border-2 -mt-[9px] ${
                    s.status === 'completed'
                      ? 'bg-brand-500 border-brand-500'
                      : s.status === 'active'
                      ? 'bg-white dark:bg-mono-bg border-brand-500 ring-2 ring-brand-500/30'
                      : 'bg-gray-200 dark:bg-mono-border border-gray-300 dark:border-mono-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Steps list */}
          <div className="space-y-1.5">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`rounded-lg border px-3 py-2 text-xs ${
                  step.status === 'active'
                    ? 'border-brand-500/50 bg-brand-50 dark:bg-brand-500/5 dark:border-brand-500/30'
                    : step.status === 'completed'
                    ? 'border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface/20'
                    : 'border-gray-200 dark:border-mono-border bg-gray-50 dark:bg-mono-surface/10 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      step.status === 'completed'
                        ? 'bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400'
                        : step.status === 'active'
                        ? 'bg-brand-100 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 animate-pulse'
                        : 'bg-gray-100 dark:bg-mono-surface text-gray-400 dark:text-mono-muted'
                    }`}>
                      {step.status === 'completed' ? '✓' : step.status === 'active' ? '▶' : step.id}
                    </span>
                    <span className={`font-medium ${
                      step.status === 'pending' ? 'text-gray-400 dark:text-mono-muted' : 'text-gray-900 dark:text-mono-text'
                    }`}>{step.name}</span>
                  </div>
                  <span className="text-gray-400 dark:text-mono-muted font-mono">{step.time}</span>
                </div>
                {step.data && step.status !== 'pending' && (
                  <div className="mt-1.5 ml-7 font-mono text-[10px] text-gray-500 dark:text-mono-muted bg-gray-50 dark:bg-mono-surface/40 rounded px-2 py-1 overflow-x-auto">
                    {step.data}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
