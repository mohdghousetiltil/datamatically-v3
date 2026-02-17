import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle } from 'lucide-react';

const MotionDiv = motion.div as any;

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const API_BASE_URL =
    (import.meta as any).env?.VITE_API_BASE_URL?.replace(/\/+$/, '') || 'https://email-cmjj7.datamatically.com';

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        setStatus('sending');
        setErrorMsg('');

        try {
            // Your backend model expects: { name, email, message, phone }
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone || '',
                message:
                    `${formData.details}\n\n` +
                    `Sent via Get Started Modal on Datamatically.com`,
            };

            const res = await fetch(`${API_BASE_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                let detail = 'Failed to send message.';
                try {
                    const data = await res.json();
                    detail = data?.detail || detail;
                } catch { }
                throw new Error(detail);
            }

            setStatus('sent');

            // Auto close after success
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', email: '', phone: '', details: '' });
            }, 3000);
        } catch (err: any) {
            setStatus('error');
            setErrorMsg(err?.message || 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-10">
                            {status === 'sent' ? (
                                <div className="py-12 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-space font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-slate-500 dark:text-slate-400">We'll be in touch shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl md:text-3xl font-space font-bold text-slate-900 dark:text-white mb-2">Get Started</h2>
                                    <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm md:text-base">Fill out the details below and we'll be in touch shortly.</p>

                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-widest font-space">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 outline-none text-slate-900 dark:text-white focus:border-brand-purple transition-colors font-space text-sm"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-widest font-space">Email Address</label>
                                                    <input
                                                        required
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 outline-none text-slate-900 dark:text-white focus:border-brand-purple transition-colors font-space text-sm"
                                                        placeholder="Your Email"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-widest font-space">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 outline-none text-slate-900 dark:text-white focus:border-brand-purple transition-colors font-space text-sm"
                                                        placeholder="Optional"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase tracking-widest font-space">How can we help?</label>
                                                <textarea
                                                    name="details"
                                                    value={formData.details}
                                                    onChange={handleChange}
                                                    rows={3}
                                                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 outline-none text-slate-900 dark:text-white focus:border-brand-purple transition-colors font-space text-sm resize-none"
                                                    placeholder="Tell us about your operational challenges..."
                                                ></textarea>
                                            </div>
                                        </div>

                                        {status === 'error' && errorMsg && (
                                            <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                                                {errorMsg}
                                            </div>
                                        )}

                                        <button
                                            disabled={status === 'sending'}
                                            className="w-full mt-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3 disabled:opacity-50 text-sm md:text-base font-space shadow-lg"
                                        >
                                            {status === 'sending' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Message'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </MotionDiv>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;