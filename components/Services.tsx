
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Activity, Shield, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div as any;

const ServiceCard = ({ icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <MotionDiv
    variants={fadeInUp}
    transition={{ delay }}
    className="group p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-blue/50 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
  >
    <div className="mb-4 md:mb-6 p-2.5 md:p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl md:rounded-2xl w-fit group-hover:scale-110 transition-transform text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900 dark:text-white tracking-tight font-space">{title}</h3>
    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">{desc}</p>
  </MotionDiv>
);

const OutcomeItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 py-1.5 md:py-1">
    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-500 shrink-0 mt-0.5" />
    <span className="text-slate-800 dark:text-slate-200 font-medium text-xs md:text-base font-space tracking-tight">
      {text}
    </span>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Database className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Data Architecture",
      desc: "Unified data sources creating a single source of truth for real-time analysis."
    },
    {
      icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
      title: "AI Integration",
      desc: "Custom LLMs and machine learning models to automate complex decision making."
    },
    {
      icon: <Activity className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Workflow Automation",
      desc: "End-to-end bots that handle invoicing, inventory, and logistics automatically."
    },
    {
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Compliance & Security",
      desc: "Privacy Act compliant data handling with robust, enterprise-grade security."
    }
  ];

  const outcomes = [
    "30–70% reduction in manual processing",
    "Faster turnaround times without hiring",
    "Fewer errors and bottlenecks",
    "Less dependency on individuals",
    "Operations that scale seamlessly"
  ];

  return (
    <section id="services" className="py-16 md:py-32 px-6 md:px-12 relative z-10 scroll-mt-28 bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        
        {/* New Header Section - Consistent with Case Studies */}
        <div className="flex flex-col mb-12 gap-4">
          <div className="flex items-center gap-6">
            <span className="text-slate-900 dark:text-white font-space font-bold tracking-[0.3em] uppercase text-xs md:text-sm whitespace-nowrap">
              Our Services
            </span>
            <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>

        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start"
        >
          <div className="lg:col-span-5">
            <MotionDiv variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white tracking-tighter leading-[1.1] font-space">
                What we do
              </h2>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 font-light leading-relaxed">
                We design and implement automation systems that allow work to move <span className="text-slate-900 dark:text-white font-medium">without constant human intervention.</span>
              </p>

              <div className="space-y-3 md:space-y-4 pt-6 border-t border-slate-200 dark:border-white/10">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 md:mb-4">Measurable Outcomes</h4>
                <div className="grid grid-cols-1 gap-1">
                  {outcomes.map((text, i) => (
                    <OutcomeItem key={i} text={text} />
                  ))}
                </div>
              </div>
            </MotionDiv>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <ServiceCard 
                  icon={services[0].icon} 
                  title={services[0].title} 
                  desc={services[0].desc} 
                  delay={0.1}
                />
                <ServiceCard 
                  icon={services[2].icon} 
                  title={services[2].title} 
                  desc={services[2].desc} 
                  delay={0.2}
                />
              </div>
              <div className="space-y-4 md:space-y-6 sm:pt-12">
                <ServiceCard 
                  icon={services[1].icon} 
                  title={services[1].title} 
                  desc={services[1].desc} 
                  delay={0.3}
                />
                <ServiceCard 
                  icon={services[3].icon} 
                  title={services[3].title} 
                  desc={services[3].desc} 
                  delay={0.4}
                />
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Services;
