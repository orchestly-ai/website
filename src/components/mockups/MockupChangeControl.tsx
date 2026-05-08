'use client';

export function MockupChangeControl() {
  const versions = [
    { id: 'v3.2.1', author: 'Sarah K.', date: '2 hours ago', status: 'approved', changes: '+12 -3' },
    { id: 'v3.2.0', author: 'Mike R.', date: '1 day ago', status: 'deployed', changes: '+45 -18' },
    { id: 'v3.1.0', author: 'Sarah K.', date: '3 days ago', status: 'deployed', changes: '+8 -2' },
    { id: 'v3.0.0', author: 'Alex T.', date: '1 week ago', status: 'deployed', changes: '+120 -35' },
  ];

  const diffLines = [
    { type: 'context', line: 15, content: 'def process_request(input_data):' },
    { type: 'context', line: 16, content: '    """Process incoming agent request."""' },
    { type: 'removed', line: 17, content: '    model = "gpt-4"' },
    { type: 'removed', line: 18, content: '    max_tokens = 2000' },
    { type: 'added', line: 17, content: '    model = route_to_optimal_model(input_data)' },
    { type: 'added', line: 18, content: '    max_tokens = calculate_token_budget(model)' },
    { type: 'added', line: 19, content: '    fallback = get_failover_model(model)' },
    { type: 'context', line: 20, content: '    response = llm.complete(' },
    { type: 'context', line: 21, content: '        prompt=input_data.prompt,' },
    { type: 'removed', line: 22, content: '        temperature=0.7' },
    { type: 'added', line: 22, content: '        temperature=input_data.get("temp", 0.7),' },
    { type: 'added', line: 23, content: '        retry_config=RetryConfig(fallback=fallback)' },
    { type: 'context', line: 24, content: '    )' },
    { type: 'context', line: 25, content: '    return response' },
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
        <span className="ml-2 text-xs text-gray-500 dark:text-mono-muted font-mono">Change Control - orchestly.ai</span>
      </div>

      <div className="flex">
        {/* Sidebar - version timeline */}
        <div className="hidden md:flex w-56 flex-col border-r border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-[#19181a] p-3">
          <h4 className="text-[10px] font-semibold text-gray-400 dark:text-mono-muted uppercase tracking-wider mb-3">Version History</h4>
          <div className="space-y-1">
            {versions.map((v, i) => (
              <div
                key={v.id}
                className={`relative pl-4 py-2 px-2 rounded-md text-xs cursor-pointer ${
                  i === 0 ? 'bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/30' : ''
                }`}
              >
                {/* Timeline dot and line */}
                <div className={`absolute left-0 top-3 h-2 w-2 rounded-full ${
                  i === 0 ? 'bg-brand-500' : 'bg-gray-300 dark:bg-mono-border'
                }`} />
                {i < versions.length - 1 && (
                  <div className="absolute left-[3px] top-5 w-0.5 h-full bg-gray-200 dark:bg-mono-border" />
                )}
                <div className="font-medium text-gray-900 dark:text-mono-text">{v.id}</div>
                <div className="text-gray-500 dark:text-mono-muted">{v.author} · {v.date}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    v.status === 'approved' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400' :
                    'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400'
                  }`}>{v.status}</span>
                  <span className="text-gray-400 dark:text-mono-muted font-mono">{v.changes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content - diff view */}
        <div className="flex-1 p-4 min-h-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-mono-text">Comparing v3.1.0 → v3.2.1</h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 font-medium">
                Pending Review
              </span>
            </div>
            <div className="flex gap-2">
              <button className="text-[10px] px-2.5 py-1 rounded-md bg-green-500 text-white font-medium">Approve</button>
              <button className="text-[10px] px-2.5 py-1 rounded-md border border-gray-300 dark:border-mono-border text-gray-600 dark:text-mono-body font-medium">Reject</button>
            </div>
          </div>

          {/* File path */}
          <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 dark:text-mono-muted">
            <span className="font-mono bg-gray-100 dark:bg-mono-surface px-2 py-0.5 rounded">workflows/content_agent.py</span>
            <span className="text-green-600 dark:text-green-400 font-medium">+5</span>
            <span className="text-red-600 dark:text-red-400 font-medium">-3</span>
          </div>

          {/* Diff content */}
          <div className="rounded-lg border border-gray-200 dark:border-mono-border overflow-hidden font-mono text-xs">
            {diffLines.map((line, i) => (
              <div
                key={i}
                className={`flex ${
                  line.type === 'added'
                    ? 'bg-green-50 dark:bg-green-500/5'
                    : line.type === 'removed'
                    ? 'bg-red-50 dark:bg-red-500/5'
                    : ''
                }`}
              >
                <span className="w-10 flex-shrink-0 text-right pr-2 py-0.5 text-gray-400 dark:text-mono-muted select-none border-r border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-mono-surface/20">
                  {line.line}
                </span>
                <span className={`w-5 flex-shrink-0 text-center py-0.5 select-none ${
                  line.type === 'added' ? 'text-green-600 dark:text-green-400' :
                  line.type === 'removed' ? 'text-red-600 dark:text-red-400' :
                  'text-gray-300 dark:text-mono-border'
                }`}>
                  {line.type === 'added' ? '+' : line.type === 'removed' ? '−' : ' '}
                </span>
                <span className={`flex-1 py-0.5 pr-3 whitespace-pre ${
                  line.type === 'added' ? 'text-green-800 dark:text-green-300' :
                  line.type === 'removed' ? 'text-red-800 dark:text-red-300' :
                  'text-gray-700 dark:text-mono-body'
                }`}>
                  {line.content}
                </span>
              </div>
            ))}
          </div>

          {/* Approval badges */}
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-mono-muted">
              <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 text-[10px] font-bold">✓</div>
              <span>CI Passed</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-mono-muted">
              <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 text-[10px] font-bold">⏳</div>
              <span>1 of 2 approvals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
