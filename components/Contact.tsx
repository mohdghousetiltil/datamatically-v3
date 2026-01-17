
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const MotionDiv = motion.div as any;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 1500));

    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Project Details: ${formData.details}\n\n` +
        `Sent via Datamatically.com`
    );
    
    window.location.href = `mailto:hello@datamatically.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-6 md:px-12 bg-slate-50 dark:bg-black border-t border-gray-200 dark:border-gray-900 relative z-10 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <MotionDiv
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
        >
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white tracking-tight font-space">Ready to automate?</h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 mb-10 md:mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can transform your business processes into your most valuable asset.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 md:mb-16">
                <a href="mailto:hello@datamatically.com" className="p-6 rounded-2xl md:rounded-[2rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 transition-colors flex flex-col items-center gap-4 backdrop-blur-sm group shadow-sm">
                    <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-full group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-500" />
                    </div>
                    <span className="text-sm md:text-lg font-bold text-slate-900 dark:text-white truncate max-w-full">hello@datamatically.com</span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Email Us</span>
                </a>

                 <a href="https://calendly.com/datamatically" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl md:rounded-[2rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-green-500 transition-colors flex flex-col items-center gap-4 backdrop-blur-sm group shadow-sm">
                    <div className="p-3 bg-green-100 dark:bg-green-500/20 rounded-full group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-500" />
                    </div>
                    <span className="text-sm md:text-lg font-bold text-slate-900 dark:text-white">Book Consultation</span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Calendly</span>
                </a>

                <div className="p-6 rounded-2xl md:rounded-[2rem] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex flex-col items-center gap-4 backdrop-blur-sm group shadow-sm">
                    <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-full">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-500" />
                    </div>
                    <span className="text-sm md:text-lg font-bold text-slate-900 dark:text-white">Melbourne, AU</span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Location</span>
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                    {status === 'sent' ? (
                        <MotionDiv
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white dark:bg-gray-900/50 p-10 md:p-16 rounded-3xl border border-green-500/30 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl">
                                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Message Sent</h3>
                            <button onClick={() => setStatus('idle')} className="mt-6 text-blue-500 text-xs font-bold uppercase tracking-widest hover:underline">Send another</button>
                        </MotionDiv>
                    ) : (
                        <MotionDiv
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white dark:bg-gray-900/50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 dark:border-gray-800 backdrop-blur-md shadow-xl"
                        >
                            <form className="text-left space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div>
                                        <label className="block text-[9px] font-bold text-gray-500 mb-2 uppercase tracking-widest font-space">Name</label>
                                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-xl p-3.5 outline-none text-slate-900 dark:text-white focus:border-blue-600 transition-colors font-space text-sm md:text-base" />
                                    </div>
                                    <div>
                                        <label className="block text-[9px] font-bold text-gray-500 mb-2 uppercase tracking-widest font-space">Email</label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-xl p-3.5 outline-none text-slate-900 dark:text-white focus:border-blue-600 transition-colors font-space text-sm md:text-base" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[9px] font-bold text-gray-500 mb-2 uppercase tracking-widest font-space">Message</label>
                                    <textarea name="details" value={formData.details} onChange={handleChange} rows={4} className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-xl p-3.5 outline-none text-slate-900 dark:text-white focus:border-blue-600 transition-colors font-space text-sm md:text-base resize-none"></textarea>
                                </div>
                                <button disabled={status === 'sending'} className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3 disabled:opacity-50 text-sm md:text-base">
                                    {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Message'}
                                </button>
                            </form>
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Contact;
