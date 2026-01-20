
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  const animatedWord = "Permanently.";
  const [typedWord, setTypedWord] = useState("");
  
  // Scroll tracking for the hero image effect
  const { scrollY } = useScroll();
  
  // Transform scroll position into opacity
  // From 0px to 500px of scroll: Opacity goes from 1 to 0
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
  }, []);

  const scrollToCaseStudies = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-[60px] md:blur-[100px] delay-1000 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center md:items-start text-center md:text-left relative">
        {/* Value Badge Pill */}
        <div 
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
        >
          <span className="text-xs md:text-sm font-bold font-space text-slate-700 dark:text-slate-400">
            ⚡ Eliminate 50+ Hours of Manual Work
          </span>
        </div>

        {/* Main Header Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-space font-bold leading-tight md:leading-[1.15] max-w-4xl tracking-tight">
          <span className="text-slate-900 dark:text-white">
            We Remove Operational friction From Growing Businesses.{" "}
          </span>
          <span className="text-slate-600 dark:text-slate-400 whitespace-nowrap">
            {typedWord}
            <span className="inline-block w-[2px] h-[0.9em] bg-brand-purple ml-1 translate-y-[0.15em] animate-blink"></span>
          </span>
        </h1>

        {/* Supporting Subheading */}
        <div 
          className="mt-6 md:mt-8 max-w-2xl opacity-0 animate-fade-in-up" 
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 font-sans font-medium leading-relaxed">
            We provide automation systems that reduce spreadsheets, human error, and friction, transforming messy workflows into clean, scalable infrastructure. <span className="text-slate-900 dark:text-white font-semibold">Grow without pains.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in-up w-full sm:w-auto" 
          style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
        >
          <a 
            href="https://calendly.com/datamatically" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm md:text-base hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 font-space"
          >
            <span>Get a Free Audit</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
          
          <button 
            onClick={scrollToCaseStudies}
            className="group w-full sm:w-auto px-6 py-3.5 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-sm md:text-base hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 font-space"
          >
            <span>View Case Studies</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Image (Bottom Right) - Desktop Only, Larger, Aligned to edges */}
      <MotionDiv
        style={{ opacity }}
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        // className="absolute bottom-0 right-0 hidden md:block md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] pointer-events-none z-10"
        className="absolute bottom-0 right-0 hidden md:block md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] pointer-events-none z-10"
      >
        <img 
          src="/9895435.png" 
          alt="Operational Systems Illustration" 
          className="w-full h-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.15)] dark:drop-shadow-[0_0_50px_rgba(147,51,234,0.2)]"
        />
      </MotionDiv>
    </section>
  );
};

export default Hero;
