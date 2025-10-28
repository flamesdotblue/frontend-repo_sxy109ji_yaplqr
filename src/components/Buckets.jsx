import React from 'react';
import { Clock, AlertTriangle, Repeat, CalendarDays, PauseCircle } from 'lucide-react';

const buckets = [
  {
    name: 'Today',
    icon: Clock,
    desc: 'Due within 24 hours',
    badge: 'Real-time'
  },
  {
    name: 'This Week',
    icon: CalendarDays,
    desc: 'Due within 7 days',
    badge: 'Daily refresh'
  },
  {
    name: 'Overdue',
    icon: AlertTriangle,
    desc: 'Past due date, incomplete',
    badge: 'Immediate'
  },
  {
    name: 'Recurring',
    icon: Repeat,
    desc: 'Auto-generated repeating tasks',
    badge: 'On completion'
  },
  {
    name: 'Waiting',
    icon: PauseCircle,
    desc: 'Dependent on external factors',
    badge: 'Manual review'
  }
];

export default function Buckets() {
  return (
    <section id="buckets" className="relative w-full bg-[#0a0a0a] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-white/90 md:text-3xl">Dynamic Task Buckets</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Your tasks organize themselves automatically based on due dates, recurrence, and dependencies.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {buckets.map((b) => (
            <div key={b.name} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                    <b.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{b.name}</h3>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{b.badge}</span>
              </div>
              <p className="text-sm text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
