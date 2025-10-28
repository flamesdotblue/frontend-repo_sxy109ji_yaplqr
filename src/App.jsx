import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import Features from './components/Features.jsx';
import CommandHelp from './components/CommandHelp.jsx';
import Buckets from './components/Buckets.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <HeroSection />
      <Features />
      <CommandHelp />
      <Buckets />

      {/* CTA Footer */}
      <section id="cta" className="w-full bg-black py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
          <div>
            <h3 className="text-xl font-semibold">Ready to get organized?</h3>
            <p className="mt-1 text-sm text-white/70">Add your first task with a single command. I’ll handle the rest.</p>
          </div>
          <a
            href="#commands"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition hover:brightness-95"
          >
            /add "Plan weekly review" p:High #Work due:Friday 5pm
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
