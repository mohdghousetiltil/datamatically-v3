
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div as any;

const TeamMember = ({ name }: { name: string }) => (
  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group hover:border-brand-blue/50 transition-all duration-300">
    <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Users className="w-8 h-8 text-slate-400 group-hover:text-brand-blue" />
    </div>
    <h4 className="text-lg font-space font-bold text-slate-900 dark:text-white">{name}</h4>
    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Founding Partner</p>
  </div>
);

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-12 relative z-10 scroll-mt-20 md:scroll-mt-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 gap-4">
          <div className="flex items-center gap-6">
            <span className="text-slate-900 dark:text-white font-space font-bold tracking-[0.3em] uppercase text-xs md:text-sm whitespace-nowrap">
              About Us
            </span>
          </div>
        </div>

        {/* Section: The Philosophy Pivot */}
        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16 md:mb-24"
        >
          <MotionDiv variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-space font-bold text-slate-900 dark:text-white tracking-tight mb-8">
              Why Datamatically
            </h2>
            <div className="space-y-6 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              <p>
                Most automation fails because it focuses on tools instead of operations. 
                We start with how your business actually runs, then design systems that fit the reality on the ground.
              </p>
              <p>
                Our work is practical, built for real teams, and designed to scale with your business. 
                The goal isn't automation for its own sake. <span className="text-slate-900 dark:text-white font-bold">The goal is operational calm.</span>
              </p>
            </div>
          </MotionDiv>
          
          <MotionDiv variants={fadeInUp} className="relative">
             <div className="p-8 md:p-12 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <ShieldCheck className="w-32 h-32 text-brand-blue" />
                </div>
                <blockquote className="relative z-10">
                  <p className="text-xl md:text-2xl font-space italic text-slate-800 dark:text-slate-200">
                    "Datamatically builds automation infrastructure for businesses that want scale without chaos."
                  </p>
                </blockquote>
             </div>
          </MotionDiv>
        </MotionDiv>

        {/* Section: The Team */}
        <MotionDiv 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-space font-bold text-slate-900 dark:text-white mb-4">The Team</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">Our multi-disciplinary team combines operational expertise with deep technical mastery.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MotionDiv variants={fadeInUp}><TeamMember name="Mohammed Ghouse Tiltil" /></MotionDiv>
            <MotionDiv variants={fadeInUp}><TeamMember name="Charlie Guthrie" /></MotionDiv>
            <MotionDiv variants={fadeInUp}><TeamMember name="Craig Haydon" /></MotionDiv>
          </div>
        </MotionDiv>

      </div>
    </section>
  );
}
