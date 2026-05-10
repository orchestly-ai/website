'use client';

export function MockupSecurityDashboard() {
  const roles = [
    { name: 'Admin', users: 2, permissions: 'Full access', color: 'red' },
    { name: 'Developer', users: 8, permissions: 'Build, deploy, monitor', color: 'blue' },
    { name: 'Viewer', users: 15, permissions: 'Read-only dashboards', color: 'green' },
    { name: 'Operator', users: 5, permissions: 'Run workflows, view logs', color: 'yellow' },
  ];

  const auditLog = [
    { time: '14:32:01', user: 'sarah@acme.com', action: 'Deployed workflow', target: 'content-agent v3.2', level: 'info' },
    { time: '14:28:45', user: 'mike@acme.com', action: 'Rotated API key', target: 'OpenAI Production', level: 'warning' },
    { time: '14:15:22', user: 'alex@acme.com', action: 'Modified RBAC role', target: 'Developer → +delete', level: 'warning' },
    { time: '13:58:10', user: 'system', action: 'Auto-failover triggered', target: 'GPT-4o → Claude 3.5', level: 'info' },
    { time: '13:45:00', user: 'sarah@acme.com', action: 'Approved change request', target: 'billing-agent v2.1', level: 'info' },
  ];

  const securityItems = [
    { label: 'SSO / SAML', status: 'Enabled', provider: 'Okta', ok: true },
    { label: 'BYOK Encryption', status: 'Active', provider: 'AWS KMS', ok: true },
    { label: 'Audit Logging', status: 'Enabled', provider: '90-day retention', ok: true },
    { label: 'MFA', status: 'Enforced', provider: 'All users', ok: true },
    { label: 'IP Allowlisting', status: 'Configured', provider: '3 CIDR ranges', ok: true },
    { label: 'SOC 2 Type II', status: 'Compliant', provider: 'Last audit: Jan 2025', ok: true },
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
        <span className="ml-2 text-xs text-gray-500 dark:text-mono-muted font-mono">Security & Compliance - orchestly.ai</span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex w-48 flex-col border-r border-gray-200 dark:border-mono-border bg-gray-50/50 dark:bg-[#19181a] py-3 px-2">
          {['Dashboard', 'Workflows', 'AI Routing', 'Integrations', 'Cost Mgmt', 'Security', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`px-3 py-1.5 rounded-md text-xs font-medium mb-0.5 ${
                i === 5
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* RBAC Panel */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 dark:text-mono-body mb-2">Role-Based Access Control</h4>
              <div className="rounded-lg border border-gray-200 dark:border-mono-border overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-mono-surface/60 text-gray-500 dark:text-mono-muted">
                      <th className="text-left px-3 py-1.5 font-medium">Role</th>
                      <th className="text-left px-3 py-1.5 font-medium">Users</th>
                      <th className="text-left px-3 py-1.5 font-medium">Permissions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map((r) => (
                      <tr key={r.name} className="border-t border-gray-100 dark:border-mono-border/50">
                        <td className="px-3 py-1.5">
                          <span className={`font-medium px-1.5 py-0.5 rounded text-[10px] ${
                            r.color === 'red' ? 'bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400' :
                            r.color === 'blue' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400' :
                            r.color === 'green' ? 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400' :
                            'bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400'
                          }`}>{r.name}</span>
                        </td>
                        <td className="px-3 py-1.5 text-gray-700 dark:text-mono-body">{r.users}</td>
                        <td className="px-3 py-1.5 text-gray-500 dark:text-mono-muted">{r.permissions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Security status */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 dark:text-mono-body mb-2">Security Configuration</h4>
              <div className="space-y-1.5">
                {securityItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg bg-gray-50 dark:bg-mono-surface/40 px-3 py-1.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 text-[8px] font-bold">✓</span>
                      <span className="font-medium text-gray-900 dark:text-mono-text">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 dark:text-mono-muted">{item.provider}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-medium">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Audit log */}
          <div className="mt-4">
            <h4 className="text-xs font-semibold text-gray-700 dark:text-mono-body mb-2">Audit Log</h4>
            <div className="rounded-lg border border-gray-200 dark:border-mono-border overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 dark:bg-mono-surface/60 text-gray-500 dark:text-mono-muted">
                    <th className="text-left px-3 py-1.5 font-medium">Time</th>
                    <th className="text-left px-3 py-1.5 font-medium">User</th>
                    <th className="text-left px-3 py-1.5 font-medium">Action</th>
                    <th className="text-left px-3 py-1.5 font-medium hidden sm:table-cell">Target</th>
                  </tr>
                </thead>
                <tbody>
                  {auditLog.map((entry, i) => (
                    <tr key={i} className="border-t border-gray-100 dark:border-mono-border/50">
                      <td className="px-3 py-1.5 font-mono text-gray-400 dark:text-mono-muted">{entry.time}</td>
                      <td className="px-3 py-1.5 text-gray-700 dark:text-mono-body">{entry.user}</td>
                      <td className="px-3 py-1.5">
                        <span className={`${entry.level === 'warning' ? 'text-yellow-700 dark:text-yellow-400' : 'text-gray-700 dark:text-mono-body'}`}>
                          {entry.action}
                        </span>
                      </td>
                      <td className="px-3 py-1.5 text-gray-500 dark:text-mono-muted hidden sm:table-cell font-mono">{entry.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
