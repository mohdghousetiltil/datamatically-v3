
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';

const MotionDiv = motion.div as any;

interface CaseStudy {
  client: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  metric: string;
  image: string;
}

const ProjectCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shrink-0 w-[85vw] md:w-auto snap-center cursor-pointer"
    >
       {/* Background Image with Zoom Effect */}
       <div className="absolute inset-0 overflow-hidden">
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-110" 
          />
       </div>
       
       {/* Initial Dark Gradient - Anchored at bottom */}
       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

       {/* White Frosted Screen (Hover State) with subtle animation */}
       <div className="absolute inset-0 bg-white/40 dark:bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent dark:from-slate-950/60" />
       </div>
       
       {/* Content Overlay - Always justified to bottom */}
       <div className="absolute inset-0 p-8 flex flex-col justify-end">
          
          {/* Static Info: Logistics, Title, Client (Visible when not hovered) */}
          <div className="relative z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
             <div className="mb-2">
               <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] border border-blue-400/30 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md">
                 {study.industry}
               </span>
             </div>
             
             <h3 className="text-xl md:text-2xl font-space font-bold mb-1 leading-tight text-white">
               {study.title}
             </h3>
             <p className="text-slate-300 text-sm font-sans font-medium">{study.client}</p>
          </div>

          {/* Detailed Info (Revealed on hover with white frosted contrast) */}
          <div className="absolute bottom-8 left-8 right-8 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
             <div className="space-y-4">
               <div>
                  <h3 className="text-xl md:text-2xl font-space font-bold mb-0.5 leading-tight text-slate-900 dark:text-white">
                    {study.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {study.client}
                  </p>
               </div>

               <div className="space-y-3 pt-4 border-t border-slate-900/10 dark:border-white/10">
                 <div>
                    <h4 className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                      <Target className="w-3 h-3" /> Problem
                    </h4>
                    <p className="text-[11px] text-slate-800 dark:text-slate-200 leading-relaxed line-clamp-2">
                      {study.problem}
                    </p>
                 </div>

                 <div>
                    <h4 className="text-[9px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                      <Zap className="w-3 h-3" /> Solution
                    </h4>
                    <p className="text-[11px] text-slate-800 dark:text-slate-200 leading-relaxed line-clamp-2">
                      {study.solution}
                    </p>
                 </div>

                 <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500/20 px-2 py-1 rounded-md border border-green-500/20">
                        <span className="text-[10px] font-bold text-green-700 dark:text-green-400">{study.metric}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-900 dark:text-white group/btn">
                      <span className="text-[10px] font-bold uppercase tracking-widest">Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                 </div>
               </div>
             </div>
          </div>
       </div>
    </MotionDiv>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      client: "Elite FSA",
      industry: "Logistics",
      title: "PODS Extraction System",
      image: "https://plus.unsplash.com/premium_photo-1705091310871-eac4ca9a06b7?q=80&w=735&auto=format&fit=crop",
      metric: "800+ Hours Saved",
      problem: "Manual container tracking created daily bottlenecks and operational gaps.",
      solution: "Built an automated extraction scheduling system that syncs with dispatch.",
      result: "800+ hours saved annually in manual coordination."
    },
    {
      client: "Endless Turf",
      industry: "Landscaping",
      title: "Turf Quote Engine",
      image: "https://plus.unsplash.com/premium_photo-1724701624563-a7bb454393c4?q=80&w=1170&auto=format&fit=crop",
      metric: "Instant Proposals",
      problem: "Manual measuring consumed ~1 hour per lead, causing significant response delays.",
      solution: "Developed an AI quoting engine that automates measurement analysis.",
      result: "Quote turnaround cut from hours to seconds."
    },
    {
      client: "Elite FSA",
      industry: "Logistics",
      title: "Orders Automation",
      image: "https://images.unsplash.com/photo-1584543515885-b8981dbf0b5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      metric: "99.99% Accuracy",
      problem: "Manual order entry led to frequent errors and logistics delays.",
      solution: "Implemented end-to-end order automation with dynamic validation rules.",
      result: "Processing time reduced from 15 minutes to 30 seconds."
    }
  ];

  return (
    <section id="case-studies" className="py-24 md:py-32 px-6 md:px-12 relative z-10 scroll-mt-20 md:scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col mb-12 gap-4">
          <div className="flex items-center gap-6">
            <span className="text-slate-900 dark:text-white font-space font-bold tracking-[0.3em] uppercase text-xs md:text-sm whitespace-nowrap">
              Case Studies
            </span>
            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-2">
            <h2 className="text-3xl md:text-5xl font-space font-bold text-slate-900 dark:text-white tracking-tight max-w-2xl leading-[1.1]">
              From Operational Friction to Automated Scale
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm font-sans text-sm md:text-base leading-relaxed">
              See how we transform manual chaos into reliable systems for real businesses.
            </p>
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-8 md:gap-10 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
           {caseStudies.map((study, idx) => (
             <ProjectCard key={idx} study={study} />
           ))}
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
