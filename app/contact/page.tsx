'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        const { name, email, message } = data;
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=amalthilakan111@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    };

    return (
        <PageTransition>
            <div className="max-w-6xl mx-auto py-10">
                <motion.h1
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Get In Touch
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-[#7C4DFF]/10 text-[#7C4DFF] rounded-full">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-gray-500 dark:text-gray-400">8921654839</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-[#7C4DFF]/10 text-[#7C4DFF] rounded-full">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amalthilakan111@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-[#7C4DFF] transition-colors">
                                        amalthilakan111@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-[#7C4DFF]/10 text-[#7C4DFF] rounded-full">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Thuruthelil House, Muppatadam P.O, 683110</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/amalthilakan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#7C4DFF] hover:text-white transition-all hover:scale-110"
                                >
                                    <FaGithub size={24} />
                                </a>
                                {/* Add LinkedIn if available */}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all"
                                    placeholder="Your Name"
                                />
                                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                                {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    {...register("message", { required: true })}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                                {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-[#7C4DFF] text-white font-bold rounded-lg hover:bg-[#6c42e0] transition-colors shadow-lg shadow-[#7C4DFF]/30"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
}
