'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiX } from 'react-icons/hi';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-100 dark:border-gray-800 relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        >
                            <HiX size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                            >
                                <HiCheckCircle className="text-green-500 text-5xl" />
                            </motion.div>

                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                Email Sent!
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Your message has been received. I’ll get back to you shortly.
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full py-3 px-6 bg-[#7C4DFF] text-white font-bold rounded-xl hover:bg-[#6c42e0] transition-colors shadow-lg shadow-[#7C4DFF]/30"
                            >
                                Awesome
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
