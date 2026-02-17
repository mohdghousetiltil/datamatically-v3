import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';
import ContactModal from './ContactModal';

const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  const animatedWord = "Permanently";
  const [typedWord, setTypedWord] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll tracking for background effects if needed
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < animatedWord.length) {
        setTypedWord(animatedWord.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [animatedWord]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-soft-white dark:bg-slate-950">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-[60px] md:blur-[100px] delay-1000 animate-pulse-slow"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start text-left relative">
        {/* Value Badge Pill */}
        <button
          onClick={(e) => scrollToSection(e, 'case-studies')}
          className="mb-6 inline-flex items-center px-4 py-2 md:px-4 md:py-1.5 rounded-full bg-soft-alt dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-purple/50 transition-all cursor-pointer group"
        >
          <span className="text-[10px] md:text-sm font-bold font-space text-slate-700 dark:text-slate-400 tracking-tight">
            ⚡ Automate 50+ Hours of Work
          </span>
        </button>

        {/* Main Header Headline - Reduced size slightly */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-space font-bold leading-tight md:leading-[1.15] max-w-4xl tracking-tight">
          <span className="text-slate-900 dark:text-white">
            Remove 30–70% of Manual Work From Your Operations —{" "}
          </span>
          <span className="text-slate-600 dark:text-slate-400 whitespace-nowrap">
            {typedWord}
            <span className="inline-block w-[2px] h-[0.9em] bg-brand-purple ml-1 translate-y-[0.15em] animate-blink"></span>
          </span>
        </h1>

        {/* Supporting Subheading */}
        <div
          className="mt-6 md:mt-8 max-w-3xl opacity-0 animate-fade-in-up"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 font-sans font-medium leading-relaxed">
            We design and deploy automation systems that eliminate manual work, reduce errors, and give leadership real-time operational control. <span className="text-slate-900 dark:text-white font-semibold">Clients typically save 50–500 hours per month within the first 90 days.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-8 md:mt-10 flex flex-row flex-wrap items-start gap-3 md:gap-4 opacity-0 animate-fade-in-up w-full"
          style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
        >
          {/* Primary CTA */}
          <button
            onClick={handleGetStarted}
            className="group w-fit px-6 md:px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm md:text-base hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 font-space shadow-md"
          >
            <span className="whitespace-nowrap">Get Free Audit</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Secondary CTA */}
          <a
            href="tel:0418172882"
            className="group w-fit px-6 md:px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-sm md:text-base hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 font-space shadow-sm"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-400 group-hover:text-brand-purple" />
            <span className="whitespace-nowrap">Call 0418 172 882</span>
          </a>
        </div>

        {/* Trust Line */}
        <div
          className="mt-10 md:mt-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
        >
          <p className="text-[10px] md:text-xs font-space font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] leading-relaxed max-w-xl">
            Trusted by Elite Freight Solutions Australia, Who Goes Where, and many other Australian businesses.
          </p>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;