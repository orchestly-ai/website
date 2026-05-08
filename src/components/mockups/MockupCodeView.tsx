'use client';

// Python SDK representation of real workflow: Incident Post-Mortem Generator
const codeLines = [
  { num: 1, text: 'from orchestly import Workflow, Trigger, LLM, Integration', color: 'text-blue-400' },
  { num: 2, text: '', color: '' },
  { num: 3, text: 'workflow = Workflow("incident-post-mortem-generator")', color: 'text-gray-300' },
  { num: 4, text: '', color: '' },
  { num: 5, text: '# Trigger when a PagerDuty incident resolves', color: 'text-gray-500 italic' },
  { num: 6, text: 'trigger = Trigger.webhook("/api/pagerduty/resolved")', color: 'text-gray-300' },
  { num: 7, text: '', color: '' },
  { num: 8, text: '# Fetch incident context in parallel', color: 'text-gray-500 italic' },
  { num: 9, text: 'pd_timeline = Integration.pagerduty("get_incident_timeline",', color: 'text-amber-400' },
  { num: 10, text: '    incident_id="{{trigger.incident_id}}")', color: 'text-amber-400' },
  { num: 11, text: 'error_logs = Integration.datadog("search_logs",', color: 'text-amber-400' },
  { num: 12, text: '    query="service:{{trigger.service}} level:error",', color: 'text-amber-400' },
  { num: 13, text: '    time_range="incident_window")', color: 'text-amber-400' },
  { num: 14, text: '', color: '' },
  { num: 15, text: '# Generate structured post-mortem document', color: 'text-gray-500 italic' },
  { num: 16, text: 'postmortem = LLM("claude-3.5-sonnet",', color: 'text-green-400' },
  { num: 17, text: '    prompt=POSTMORTEM_PROMPT,', color: 'text-green-400' },
  { num: 18, text: '    temperature=0.3,', color: 'text-green-400' },
  { num: 19, text: '    sections=["summary", "impact", "timeline",', color: 'text-green-400' },
  { num: 20, text: '              "root_cause", "action_items"])', color: 'text-green-400' },
  { num: 21, text: '', color: '' },
  { num: 22, text: '# Extract action items and share in parallel', color: 'text-gray-500 italic' },
  { num: 23, text: 'actions = LLM("gpt-4o-mini",', color: 'text-green-400' },
  { num: 24, text: '    prompt=EXTRACT_ACTIONS_PROMPT, temperature=0.2)', color: 'text-green-400' },
  { num: 25, text: 'jira = Integration.jira("create_tickets",', color: 'text-amber-400' },
  { num: 26, text: '    project="SRE", issue_type="Task")', color: 'text-amber-400' },
  { num: 27, text: 'slack = Integration.slack("send_message",', color: 'text-amber-400' },
  { num: 28, text: '    channel="#incidents", template=POSTMORTEM_TPL)', color: 'text-amber-400' },
  { num: 29, text: '', color: '' },
  { num: 30, text: '# Build the DAG - two parallel fan-outs', color: 'text-gray-500 italic' },
  { num: 31, text: 'workflow.add_edge(trigger, [pd_timeline, error_logs])', color: 'text-gray-300' },
  { num: 32, text: 'workflow.add_edge([pd_timeline, error_logs], postmortem)', color: 'text-gray-300' },
  { num: 33, text: 'workflow.add_edge(postmortem, [actions, slack])', color: 'text-gray-300' },
  { num: 34, text: 'workflow.add_edge(actions, jira)', color: 'text-gray-300' },
  { num: 35, text: '', color: '' },
  { num: 36, text: 'workflow.deploy(version="1.2")', color: 'text-cyan-400' },
];

export function MockupCodeView() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-mono-border shadow-2xl bg-[#1e1e1e]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-gray-700 bg-[#252525] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="h-4 w-px bg-gray-600" />
          <div className="flex items-center gap-1">
            <span className="text-[10px] px-2 py-1 rounded text-gray-400 font-medium">Canvas</span>
            <span className="text-[10px] px-2 py-1 rounded bg-gray-700 text-gray-200 font-medium">Code</span>
            <span className="text-[10px] px-2 py-1 rounded text-gray-400 font-medium">AI Copilot</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-500">incident_post_mortem.py</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-medium">Python</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-500/15 text-green-400 font-medium">Synced with canvas</span>
        </div>
      </div>

      {/* Code area */}
      <div className="flex">
        {/* Line numbers */}
        <div className="flex-shrink-0 px-3 py-3 text-right select-none border-r border-gray-800 bg-[#1a1a1a]">
          {codeLines.map((line) => (
            <div key={line.num} className="text-[11px] leading-5 text-gray-600 font-mono">
              {line.num}
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="flex-1 px-4 py-3 overflow-x-auto">
          {codeLines.map((line) => (
            <div key={line.num} className={`text-[11px] leading-5 font-mono whitespace-pre ${line.color || 'text-gray-300'}`}>
              {line.text || '\u00A0'}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between border-t border-gray-700 bg-[#252525] px-4 py-1.5">
        <div className="flex items-center gap-3 text-[10px] text-gray-500">
          <span>36 lines</span>
          <span>8 nodes</span>
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Valid DAG</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-500">
          <span>UTF-8</span>
          <span>Python 3.11</span>
        </div>
      </div>
    </div>
  );
}
