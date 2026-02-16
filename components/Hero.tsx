import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';

const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  const animatedWord = "Scale.";
  const [typedWord, setTypedWord] = useState("");
  
  // Scroll tracking for the hero image effect
  const { scrollY } = useScroll();
  
  // Transform scroll position into opacity for desktop effect
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

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-soft-white dark:bg-slate-950">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-[60px] md:blur-[100px] delay-1000 animate-pulse-slow"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start text-left relative md:static">
        {/* Value Badge Pill */}
        <button 
          onClick={(e) => scrollToSection(e, 'case-studies')}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-alt dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-brand-purple/50 transition-colors cursor-pointer group"
        >
          <span className="text-[10px] md:text-sm font-bold font-space text-slate-700 dark:text-slate-400">
            ⚡ Save 50+ Hours of Manual Work Every Month – <span className="text-brand-grey dark:text-grey-400 underline group-hover:underline">View Case Studies</span>
          </span>
        </button>

        {/* Main Header Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-space font-bold leading-tight md:leading-[1.15] max-w-4xl tracking-tight">
          <span className="text-slate-900 dark:text-white">
            Eliminate Operational Friction. Build Systems That{" "}
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

        {/* AI Support Line */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-4 max-w-2xl"
        >
          <p className="text-sm md:text-lg font-medium font-sans italic text-slate-500 dark:text-slate-400 tracking-tight leading-relaxed">
            Turn AI into a true business partner — embedded into your operations, not bolted on.
          </p>
        </MotionDiv>

        {/* CTA Buttons */}
        <div 
          className="mt-8 md:mt-10 flex flex-row flex-wrap items-start gap-3 md:gap-4 opacity-0 animate-fade-in-up w-full" 
          style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
        >
          <a 
            href="tel:0418172882" 
            className="group w-fit px-4 md:px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm md:text-base hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 md:gap-3 font-space shadow-md"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <span className="whitespace-nowrap">0418 172 882</span> 
          </a>
          
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group w-fit px-4 md:px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-sm md:text-base hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 font-space shadow-sm"
          >
            <span className="whitespace-nowrap">Get started with us</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div> 

        {/* Hero Image */}
        <MotionDiv
          style={{ opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="relative mt-12 w-full max-w-[320px] hidden md:block md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] md:absolute md:mt-0 md:bottom-0 md:right-0 pointer-events-none z-10"
        >
          <img 
            src="/9895435.png" 
            alt="Operational Systems Illustration" 
            className="w-full h-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.1)] dark:drop-shadow-[0_0_50px_rgba(147,51,234,0.2)]"
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;