import React from 'react';
import { CheckCircle2, Calendar, Bell, Repeat, MessageSquare, Shield, Zap, Bot } from 'lucide-react';

const features = [
  {
    icon: CheckCircle2,
    title: 'Task Management',
    desc: 'Create, categorize, and prioritize tasks with intelligent defaults and recurrence detection.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Suggest realistic due dates, detect conflicts, and add buffer time automatically.'
  },
  {
    icon: Bell,
    title: 'Intelligent Reminders',
    desc: 'Default reminders at 24h, 2h, and due time with escalation for overdue tasks.'
  },
  {
    icon: Repeat,
    title: 'Recurring Automation',
    desc: 'Automatically regenerate completed recurring tasks and learn preferred patterns.'
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel',
    desc: 'Interact via WhatsApp, Telegram, and email summaries with real-time updates.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade Security',
    desc: 'MFA, encryption, and privacy-first design aligned with GDPR and CCPA.'
  },
  {
    icon: Bot,
    title: 'Bot Commands',
    desc: 'Fast command interface for adding, listing, updating, and scheduling tasks.'
  },
  {
    icon: Zap,
    title: 'Integrations',
    desc: 'Deep sync with Google Calendar, Notion, Outlook, Trello, and Asana.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0a0a0a] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white/90 md:text-3xl">Built for focus and follow-through</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              A proactive assistant that keeps you organized with clear priorities, smart schedules, and calm reminders.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-400/40 hover:bg-white/[0.07]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                <f.icon className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
