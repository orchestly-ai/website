'use client';

import { useState } from 'react';
import Image from 'next/image';

const views = [
  { id: 'canvas', label: 'Canvas', icon: '🎨', src: '/images/screenshots/workflow-view-canvas.png' },
  { id: 'python', label: 'Python', icon: '🐍', src: '/images/screenshots/workflow-view-python.png' },
  { id: 'typescript', label: 'TypeScript', icon: '📘', src: '/images/screenshots/workflow-view-typescript.png' },
  { id: 'java', label: 'Java', icon: '☕', src: '/images/screenshots/workflow-view-java.png' },
];

export function WorkflowViewSwitcher() {
  const [active, setActive] = useState('canvas');

  return (
    <div>
      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {views.map((view) => (
          <button
            key={view.id}
            onClick={() => setActive(view.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              active === view.id
                ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25'
                : 'bg-gray-100 dark:bg-mono-surface/60 text-gray-600 dark:text-mono-body hover:bg-gray-200 dark:hover:bg-mono-surface/80'
            }`}
          >
            <span className="text-sm">{view.icon}</span>
            {view.label}
          </button>
        ))}
      </div>

      {/* Screenshot */}
      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-mono-border shadow-lg">
        {views.map((view) => (
          <div
            key={view.id}
            className={`transition-opacity duration-300 ${
              active === view.id ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            <Image
              src={view.src}
              alt={`Workflow ${view.label} view`}
              width={2800}
              height={1800}
              className="w-full h-auto"
              priority={view.id === 'canvas'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
