
import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Manual data entry between tools",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-500">
          <rect x="3" y="4" width="6" height="6" rx="1" />
          <rect x="15" y="14" width="6" height="6" rx="1" />
          <path d="M12 7h2a1 1 0 0 1 1 1v2" />
          <path d="M9 13v-2a1 1 0 0 1 1-1h2" />
          <path d="M11 6l1 1-1 1M13 14l-1-1 1-1" />
        </svg>
      )
    },
    {
      title: "Email-based approvals and handoffs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-purple-500">
          <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
          <path d="M3 7l9 6 9-6" />
          <circle cx="18" cy="15" r="4" className="fill-white dark:fill-slate-900" />
          <path d="M16.5 15l1 1 2-2" stroke="currentColor" />
        </svg>
      )
    },
    {
      title: "Staff re-keying same information",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-500">
          <rect x="3" y="10" width="18" height="10" rx="2" />
          <path d="M7 14h.01M11 14h.01M15 14h.01M7 17h.01M11 17h.01M15 17h.01" />
          <path d="M20 7c0-2.209-1.791-4-4-4s-4 1.791-4 4" />
          <path d="M4 7c0-2.209 1.791-4 4-4s4 1.791 4 4" />
        </svg>
      )
    },
    {
      title: "Processes dependent on individuals",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-purple-500">
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" />
        </svg>
      )
    }
  ];

  return (
    <section id="problem" className="py-12 md:py-16 px-6 md:px-12 bg-white dark:bg-slate-950 overflow-hidden scroll-mt-32 md:scroll-mt-48">
      <div className="max-w-7xl mx-auto">
        
        {/* Headline Hook - Centered for mobile */}
        <div className="text-center md:text-left mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-space font-bold leading-tight tracking-tight max-w-3xl md:mx-0 mx-auto">
            <span className="text-slate-900 dark:text-white block">Most businesses don’t have a growth problem.</span>
            <span className="text-brand-purple block mt-1">They have a systems problem.</span>
          </h2>
        </div>

        {/* Core Insight - Centered for mobile */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 font-sans max-w-3xl leading-relaxed md:mx-0 mx-auto">
            Operational friction hides in plain sight — in manual handoffs, spreadsheets, and processes that only work because <span className="text-slate-900 dark:text-slate-200 font-semibold italic">“someone knows how.”</span>
          </p>
        </div>

        {/* Visual Problem Manifesto - 2x2 grid on mobile */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-slate-200 dark:border-slate-800 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {problems.map((prob, idx) => (
              <div 
                key={idx}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center gap-3 md:gap-6 cursor-default"
              >
                <div className="shrink-0 p-2.5 md:p-3 rounded-xl bg-slate-50 dark:bg-slate-800 transition-transform group-hover:scale-105">
                  {prob.icon}
                </div>
                <h3 className="text-xs md:text-lg font-space font-bold text-slate-800 dark:text-slate-200 leading-snug">
                  {prob.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Consequences Panel - Left aligned CTA */}
        <div className="mt-12 md:mt-20 flex flex-col items-start gap-8">
          <div className="max-w-2xl space-y-2">
            <p className="text-sm md:text-lg text-slate-900 dark:text-slate-100 font-sans">
              These issues do not just waste time.
            </p>
            <p className="text-sm md:text-lg text-slate-500 dark:text-slate-500 font-sans font-normal leading-relaxed">
              They silently cap scale, increase errors, and force unnecessary headcount.
            </p>
            <p className="text-sm md:text-lg font-space font-bold text-slate-900 dark:text-white leading-tight pt-1">
              Datamatically exists to remove this friction permanently.
            </p>
          </div>
          
          <a 
            href="https://calendly.com/datamatically" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-2.5 text-sm md:text-base font-space font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl hover:border-brand-purple dark:hover:border-purple-400 hover:text-brand-purple dark:hover:text-purple-400 transition-all duration-300"
          >
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
