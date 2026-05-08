'use client';

export function MockupLLMRouting() {
  const models = [
    { name: 'GPT-4o', provider: 'OpenAI', latency: 820, cost: 0.015, status: 'active', load: 78 },
    { name: 'Claude 3.5 Sonnet', provider: 'Anthropic', latency: 650, cost: 0.012, status: 'active', load: 65 },
    { name: 'Gemini 1.5 Pro', provider: 'Google', latency: 710, cost: 0.007, status: 'active', load: 42 },
    { name: 'Llama 3.1 70B', provider: 'Meta', latency: 380, cost: 0.003, status: 'failover', load: 15 },
    { name: 'Mistral Large', provider: 'Mistral', latency: 450, cost: 0.008, status: 'standby', load: 0 },
  ];

  const routes = [
    { pattern: 'content-generation/*', primary: 'GPT-4o', fallback: 'Claude 3.5 Sonnet', strategy: 'Quality-First' },
    { pattern: 'code-review/*', primary: 'Claude 3.5 Sonnet', fallback: 'GPT-4o', strategy: 'Balanced' },
    { pattern: 'data-extraction/*', primary: 'Gemini 1.5 Pro', fallback: 'Llama 3.1 70B', strategy: 'Cost-Optimized' },
    { pattern: 'chat/*', primary: 'Llama 3.1 70B', fallback: 'Mistral Large', strategy: 'Low-Latency' },
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
        <span className="ml-2 text-xs text-gray-500 dark:text-mono-muted font-mono">LLM Routing - orchestly.ai</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex w-48 flex-col border-r border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-[#19181a] py-3 px-2">
          {['Dashboard', 'Workflows', 'LLM Routing', 'Integrations', 'Cost Mgmt', 'Templates', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`px-3 py-1.5 rounded-md text-xs font-medium mb-0.5 ${
                i === 2
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                  : 'text-gray-500 dark:text-mono-muted hover:text-gray-700'
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
            <h3 className="text-sm font-semibold text-gray-900 dark:text-mono-text">Model Router</h3>
            <div className="flex gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-medium">3 Active</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 font-medium">1 Failover</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-mono-surface text-gray-500 dark:text-mono-muted font-medium">1 Standby</span>
            </div>
          </div>

          {/* Models table */}
          <div className="rounded-lg border border-gray-200 dark:border-mono-border overflow-hidden mb-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50 dark:bg-mono-surface/60 text-gray-500 dark:text-mono-muted">
                  <th className="text-left px-3 py-2 font-medium">Model</th>
                  <th className="text-left px-3 py-2 font-medium hidden md:table-cell">Provider</th>
                  <th className="text-left px-3 py-2 font-medium">Latency</th>
                  <th className="text-left px-3 py-2 font-medium">Cost/1K</th>
                  <th className="text-left px-3 py-2 font-medium hidden sm:table-cell">Load</th>
                  <th className="text-left px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {models.map((m) => (
                  <tr key={m.name} className="border-t border-gray-100 dark:border-mono-border/50">
                    <td className="px-3 py-2 font-medium text-gray-900 dark:text-mono-text">{m.name}</td>
                    <td className="px-3 py-2 text-gray-500 dark:text-mono-muted hidden md:table-cell">{m.provider}</td>
                    <td className="px-3 py-2 text-gray-700 dark:text-mono-body">{m.latency}ms</td>
                    <td className="px-3 py-2 text-gray-700 dark:text-mono-body">${m.cost.toFixed(3)}</td>
                    <td className="px-3 py-2 hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 rounded-full bg-gray-200 dark:bg-mono-border">
                          <div
                            className={`h-1.5 rounded-full ${m.load > 60 ? 'bg-brand-500' : m.load > 30 ? 'bg-accent-500' : 'bg-green-500'}`}
                            style={{ width: `${m.load}%` }}
                          />
                        </div>
                        <span className="text-gray-500 dark:text-mono-muted">{m.load}%</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded ${
                          m.status === 'active'
                            ? 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400'
                            : m.status === 'failover'
                            ? 'bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400'
                            : 'bg-gray-100 dark:bg-mono-surface text-gray-500 dark:text-mono-muted'
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          m.status === 'active' ? 'bg-green-500' : m.status === 'failover' ? 'bg-yellow-500' : 'bg-gray-400'
                        }`} />
                        {m.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Routing rules */}
          <h4 className="text-xs font-semibold text-gray-700 dark:text-mono-body mb-2">Routing Rules</h4>
          <div className="space-y-1.5">
            {routes.map((r) => (
              <div key={r.pattern} className="flex items-center gap-3 rounded-lg bg-gray-50 dark:bg-mono-surface/40 px-3 py-2 text-xs">
                <code className="font-mono text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-1.5 py-0.5 rounded">{r.pattern}</code>
                <span className="text-gray-400 dark:text-mono-muted">→</span>
                <span className="font-medium text-gray-900 dark:text-mono-text">{r.primary}</span>
                <span className="text-gray-400 dark:text-mono-muted">|</span>
                <span className="text-gray-500 dark:text-mono-muted">{r.fallback}</span>
                <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded font-medium ${
                  r.strategy === 'Quality-First' ? 'bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400' :
                  r.strategy === 'Balanced' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400' :
                  r.strategy === 'Cost-Optimized' ? 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400' :
                  'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400'
                }`}>{r.strategy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
