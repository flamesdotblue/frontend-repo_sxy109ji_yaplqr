import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bot, Calendar, Shield } from 'lucide-react';

const Badge = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    <Icon className="h-3.5 w-3.5 text-orange-400" />
    {children}
  </span>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* Top navigation */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400 shadow-lg shadow-orange-500/30">
            <Bot className="h-5 w-5 text-black" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Flames Productivity AI</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#commands" className="hover:text-white">Commands</a>
          <a href="#buckets" className="hover:text-white">Buckets</a>
          <a href="#cta" className="rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20">Get Started</a>
        </nav>
      </header>

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient and vignette overlays should not block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(251,146,60,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pt-10 md:grid-cols-2 md:pt-16">
        <div className="relative z-10 flex flex-col items-start gap-5 md:py-16">
          <div className="flex flex-wrap items-center gap-2">
            <Badge icon={Rocket}>Proactive. Precise. Personal.</Badge>
            <Badge icon={Calendar}>Scheduling & Reminders</Badge>
            <Badge icon={Shield}>Secure by Design</Badge>
          </div>
          <h1 className="text-pretty text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Your Personal AI Productivity Assistant
          </h1>
          <p className="max-w-xl text-balance text-base text-white/80 md:text-lg">
            Manage tasks, plan schedules, and sync with your favorite platforms — Google Calendar, Notion, WhatsApp, and Telegram — all from one intelligent assistant.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a href="#commands" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition hover:brightness-95">
              <Rocket className="h-4 w-4" />
              Quick Add Command
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">
              Learn More
            </a>
          </div>
        </div>
        {/* Right column spacer for visual balance */}
        <div className="relative z-10 hidden md:block" />
      </div>
    </section>
  );
}
