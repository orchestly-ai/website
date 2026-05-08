'use client';

export function MockupPromptManagement() {
  const versions = [
    { version: 'v4 (current)', date: 'Today', accuracy: '94.2%', latency: '1.1s' },
    { version: 'v3', date: '3 days ago', accuracy: '91.8%', latency: '1.3s' },
    { version: 'v2', date: '1 week ago', accuracy: '87.5%', latency: '1.5s' },
  ];

  const variables = [
    { name: '{{customer_name}}', type: 'string', example: 'Acme Corp' },
    { name: '{{ticket_history}}', type: 'array', example: '[3 items]' },
    { name: '{{sentiment_score}}', type: 'float', example: '-0.72' },
    { name: '{{priority_level}}', type: 'enum', example: 'high' },
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
        <span className="ml-2 text-xs text-gray-500 dark:text-mono-muted font-mono">Prompt Management - orchestly.ai</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex w-48 flex-col border-r border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-[#19181a] py-3 px-2">
          {['Dashboard', 'Workflows', 'Prompts', 'LLM Routing', 'Integrations', 'Cost Mgmt', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`px-3 py-1.5 rounded-md text-xs font-medium mb-0.5 ${
                i === 2
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
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-mono-text">support-ticket-classifier</h3>
              <p className="text-[10px] text-gray-500 dark:text-mono-muted mt-0.5">Used by 3 workflows · 12,450 invocations this week</p>
            </div>
            <div className="flex gap-2">
              <select className="text-[10px] px-2 py-1 rounded border border-gray-200 dark:border-mono-border bg-white dark:bg-mono-surface text-gray-700 dark:text-mono-body">
                <option>v4 (current)</option>
                <option>v3</option>
                <option>v2</option>
              </select>
              <button className="text-[10px] px-2.5 py-1 rounded bg-brand-500 text-white font-medium">Save New Version</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Prompt editor */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-semibold text-gray-400 dark:text-mono-muted uppercase tracking-wider mb-1.5">Prompt Template</h4>
              <div className="rounded-lg border border-gray-200 dark:border-mono-border bg-gray-50 dark:bg-mono-surface/40 p-3 font-mono text-xs text-gray-700 dark:text-mono-body leading-relaxed min-h-[140px]">
                <span className="text-gray-400 dark:text-mono-muted">system:</span>
                <br />
                You are a support ticket classifier for{' '}
                <span className="bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-400 px-1 rounded">{'{{customer_name}}'}</span>.
                <br /><br />
                Analyze the following ticket and classify it into one of: billing, technical, feature_request, bug_report, general.
                <br /><br />
                Consider the customer&apos;s sentiment score ({' '}
                <span className="bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-400 px-1 rounded">{'{{sentiment_score}}'}</span>
                {' '}) and priority level ({' '}
                <span className="bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-400 px-1 rounded">{'{{priority_level}}'}</span>
                {' '}) when routing.
                <br /><br />
                Previous tickets:{' '}
                <span className="bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-400 px-1 rounded">{'{{ticket_history}}'}</span>
              </div>

              {/* Template variables */}
              <h4 className="text-[10px] font-semibold text-gray-400 dark:text-mono-muted uppercase tracking-wider mt-3 mb-1.5">Template Variables</h4>
              <div className="grid grid-cols-2 gap-1.5">
                {variables.map((v) => (
                  <div key={v.name} className="flex items-center justify-between rounded bg-gray-50 dark:bg-mono-surface/40 px-2 py-1 text-[10px]">
                    <code className="text-brand-600 dark:text-brand-400 font-medium">{v.name}</code>
                    <span className="text-gray-400 dark:text-mono-muted">{v.type} · {v.example}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Version performance */}
            <div>
              <h4 className="text-[10px] font-semibold text-gray-400 dark:text-mono-muted uppercase tracking-wider mb-1.5">Version Performance</h4>
              <div className="space-y-2">
                {versions.map((v, i) => (
                  <div key={v.version} className={`rounded-lg border px-3 py-2 text-xs ${
                    i === 0
                      ? 'border-brand-500/30 bg-brand-50 dark:bg-brand-500/5 dark:border-brand-500/30'
                      : 'border-gray-200 dark:border-mono-border'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-mono-text">{v.version}</span>
                      <span className="text-gray-400 dark:text-mono-muted">{v.date}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1.5">
                      <div>
                        <span className="text-[10px] text-gray-500 dark:text-mono-muted">Accuracy</span>
                        <div className={`font-semibold ${
                          parseFloat(v.accuracy) > 93 ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-mono-body'
                        }`}>{v.accuracy}</div>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 dark:text-mono-muted">Latency</span>
                        <div className="text-gray-700 dark:text-mono-body font-semibold">{v.latency}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* A/B test section */}
              <h4 className="text-[10px] font-semibold text-gray-400 dark:text-mono-muted uppercase tracking-wider mt-3 mb-1.5">A/B Test</h4>
              <div className="rounded-lg border border-gray-200 dark:border-mono-border px-3 py-2 text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-medium text-gray-900 dark:text-mono-text">v4 vs v3</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-medium">Running</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex-1 h-2 rounded-full bg-gray-200 dark:bg-mono-border overflow-hidden">
                    <div className="h-full bg-brand-500 rounded-full" style={{ width: '70%' }} />
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-mono-muted">70/30</span>
                </div>
                <p className="text-[10px] text-gray-400 dark:text-mono-muted mt-1">2,340 / 3,500 samples collected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
