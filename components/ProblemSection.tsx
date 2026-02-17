import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ContactModal from './ContactModal';

const MotionDiv = motion.div as any;

const ProblemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderY, setSliderY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const points = [
    { id: "01", text: "Staff stuck doing manual admin" },
    { id: "02", text: "Spreadsheet chaos" },
    { id: "03", text: "Data errors costing money" },
    { id: "04", text: "No real-time operational visibility" },
    { id: "05", text: "Systems that don’t talk to each other" }
  ];

  // Auto-rotate points
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [points.length]);

  // Robust slider alignment logic
  useLayoutEffect(() => {
    const updatePosition = () => {
      const el = itemRefs.current[activeIndex];
      if (!el) return;

      // Align to the vertical center of the row
      const sliderHeight = 32;
      const y = el.offsetTop + (el.offsetHeight / 2) - (sliderHeight / 2);
      setSliderY(y);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [activeIndex]);

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section id="problem" className="py-20 md:py-32 px-6 md:px-12 bg-soft-white dark:bg-slate-950 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">

        {/* Main Content Container */}
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <span className="text-xs md:text-sm font-space font-bold tracking-[0.3em] uppercase text-brand-purple mb-4 block">
            THE REAL PROBLEM
          </span>

          {/* Headline & Context */}
          <div className="space-y-6 mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-space font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              Most businesses don’t have a growth problem. <span className="text-slate-400 dark:text-slate-600">They have a systems problem.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-sans font-light leading-relaxed max-w-2xl">
              Operational friction hides in plain sight, quietly capping your ability to scale.
            </p>
          </div>

          {/* List of Friction Points with Vertical Progress Line */}
          <div className="relative pl-8 md:pl-10 mb-8 md:mb-10">

            {/* The Track (Thin background line) */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-slate-800" />

            {/* The Moving Accent Segment - Measured and Optimized */}
            <MotionDiv
              className="absolute left-[-1.5px] w-[4px] bg-brand-purple rounded-full z-10 shadow-[0_0_12px_rgba(147,51,234,0.5)]"
              initial={false}
              animate={{
                height: 32,
                y: sliderY
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              style={{ top: 0 }}
            />

            <div className="space-y-2 md:space-y-4">
              {points.map((point, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    ref={(el) => { itemRefs.current[index] = el; }}
                    key={point.id}
                    className="relative flex items-center gap-5 md:gap-7 transition-all duration-500 min-h-[32px] md:min-h-[40px] cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Number - Reduced size per request */}
                    <span className={`text-lg md:text-2xl font-space font-extralight tracking-tighter transition-all duration-700 w-8 md:w-12 ${isActive ? 'text-brand-purple opacity-100' : 'text-slate-200 dark:text-slate-800 opacity-50'}`}>
                      {point.id}
                    </span>

                    {/* Text Content */}
                    <MotionDiv
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        x: isActive ? 0 : -2,
                        fontWeight: isActive ? 700 : 400
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`text-base md:text-xl font-space leading-tight ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}
                    >
                      {point.text}
                    </MotionDiv>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contextual Warning Message - Updated per request */}
          <div className="mb-10 space-y-4">
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-sans italic leading-relaxed max-w-2xl">
              These aren’t minor inefficiencies.
              <br />
              They compound into missed revenue, preventable errors, and unnecessary headcount.
            </p>
            <p className="text-sm md:text-base text-slate-900 dark:text-white font-space font-bold leading-relaxed md:whitespace-nowrap">
              Datamatically eliminates the friction at the system level — permanently.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <button
              onClick={handleGetStarted}
              className="group flex items-center gap-3 px-8 py-4 text-sm md:text-base font-space font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl"
            >
              <span>Work with us</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ProblemSection;