import React from 'react';
import { TerminalSquare, Copy, Check, Info } from 'lucide-react';

function CommandRow({ command, desc }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
      <code className="text-sm text-orange-200">{command}</code>
      <span className="text-sm text-white/70">{desc}</span>
    </div>
  );
}

export default function CommandHelp() {
  const commands = [
    { command: '/add "Pay electricity bill" p:High #Finance due:2025-11-02T17:00:00Z', desc: 'Add a task with priority, category and due date' },
    { command: '/list #Work priority:High status:pending', desc: 'List tasks filtered by category, priority and status' },
    { command: '/update 8f2a status:in_progress', desc: 'Update a task field quickly' },
    { command: '/complete 8f2a', desc: 'Mark a task as completed' },
    { command: '/recurring "Weekly review" frequency:weekly', desc: 'Create a recurring task' }
  ];

  return (
    <section id="commands" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400">
            <TerminalSquare className="h-5 w-5 text-black" />
          </div>
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">Command Interface</h2>
            <p className="text-sm text-white/70">Fast, consistent, and expressive controls for power users.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {commands.map((c, i) => (
            <CommandRow key={i} command={c.command} desc={c.desc} />
          ))}
        </div>

        <div className="mt-5 flex items-start gap-2 text-xs text-white/60">
          <Info className="mt-0.5 h-4 w-4 text-orange-300" />
          <p>
            Tip: Use natural language — the assistant auto-detects categories, priorities, due dates, and recurrence patterns.
          </p>
        </div>
      </div>
    </section>
  );
}
