
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Diagnose the Friction",
      description: "We map where time, money, and attention are leaking across your operations. No guesswork—just data-driven insight.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      )
    },
    {
      title: "Design the System",
      description: "We redesign workflows so information moves automatically between people, tools, and decisions. This is where strategy meets structure.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      )
    },
    {
      title: "Implement & Harden",
      description: "Automations are deployed, documented, and stress-tested in real operating conditions. We ensure reliability from day one.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.5-1 1-4c2 0 3 1 3 1" />
          <path d="M15 12v5c0 3-1 4-1 4h-4" />
        </svg>
      )
    },
    {
      title: "Compound the Result",
      description: "Once in place, systems continue to deliver value every day without additional effort. This is where automation earns its keep.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/30 overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-sm md:text-base font-space font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase mb-4">
            HOW WE WORK
          </h2>
          <h3 className="text-3xl md:text-5xl font-space font-bold text-slate-900 dark:text-white mb-6">
            The Automation Blueprint
          </h3>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
            From diagnosis to compounding value, our systematic approach turns operational friction into scalable infrastructure.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Fading Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8">
                
                {/* Icon Container */}
                <div className="shrink-0 relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-900 dark:text-white shadow-sm group-hover:shadow-2xl group-hover:scale-110 group-hover:ring-2 group-hover:ring-brand-blue/50 group-hover:border-brand-blue/30 transition-all duration-500 z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Content - Side by side on mobile, centered on desktop */}
                <div className="flex flex-col gap-2 md:gap-4 lg:text-center">
                  <h4 className="text-lg md:text-2xl font-space font-bold text-slate-900 dark:text-white leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector Line */}
                {idx !== steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
