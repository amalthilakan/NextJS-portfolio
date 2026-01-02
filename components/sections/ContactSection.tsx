import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SuccessModal from '@/components/SuccessModal';
import { sendEmail } from '@/app/actions/sendEmail';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ContactFormData } from '@/types/contact';
import { fadeInDown, panInLeft, panInRight } from '@/lib/animations';
import { useState } from 'react';

export default function ContactSection() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
    const [isSending, setIsSending] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onSubmit = async (data: ContactFormData) => {
        setIsSending(true);

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('message', data.message);

        const result = await sendEmail(formData);

        setIsSending(false);

        if (result.success) {
            setShowModal(true);
            reset();
        } else {
            toast.error(result.error || 'Failed to send email. Please try again.');
        }
    };
    return (
        <section id="contact" className="py-20 min-h-screen flex items-center overflow-hidden">
            <div className="max-w-6xl mx-auto w-full px-4">
                <motion.h1
                    className="text-4xl font-bold mb-12 text-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInDown}
                >
                    Get In Touch
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={panInLeft}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
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
                        </div>

                        <div className="pt-8">
                            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/amalthilakan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-[#7C4DFF] hover:text-white transition-all hover:scale-110"
                                    aria-label="Visit GitHub profile"
                                >
                                    <FaGithub size={24} aria-hidden="true" />
                                </a>
                                {/* Add LinkedIn if available */}
                                <a
                                    href="https://linkedin.com/in/amalthilakan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110"
                                    aria-label="Visit LinkedIn profile"
                                >
                                    <FaLinkedin size={24} aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={panInRight}
                        className="bg-white/5 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-white/10"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    id="contact-name"
                                    {...register("name", { required: true })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all"
                                    placeholder="Your Name"
                                />
                                {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    id="contact-email"
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                                {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="contact-message"
                                    {...register("message", { required: true })}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-[#7C4DFF] focus:ring-1 focus:ring-[#7C4DFF] outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                                {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full py-3 px-6 bg-[#7C4DFF] text-white font-bold rounded-lg hover:bg-[#6c42e0] transition-colors shadow-lg shadow-[#7C4DFF]/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSending ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
                <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
            </div>
        </section>
    );
}
