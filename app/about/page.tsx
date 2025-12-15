'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { fadeInDown, fadeIn, fadeInUp, slideInLeft } from '@/lib/animations';
import { CardSkeleton } from '@/components/SkeletonCard';

const education = [
    {
        degree: "Master of Computer Science (Data Science)",
        institution: "Cochin University of Science and Technology",
        year: "2022 – 2024"
    },
    {
        degree: "Bachelor of Computer Applications",
        institution: "Mahatma Gandhi University",
        year: "2018 – 2021"
    },
    {
        degree: "Higher Secondary Education",
        institution: "Kasturba English Medium School",
        year: "2016 – 2018"
    }
];

export default function About() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto py-10">
                <motion.h1
                    className="text-4xl font-bold mb-8 text-center"
                    {...fadeInDown}
                >
                    About Me
                </motion.h1>

                {isLoading ? (
                    <div className="space-y-6">
                        <CardSkeleton />
                        <div className="h-8 w-32 bg-gray-300/20 dark:bg-gray-300/10 rounded animate-pulse" />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </div>
                ) : (
                    <>
                        {/* Bio Section */}
                        <motion.div
                            className="bg-white/5 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-white/10 mb-12"
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                I am a Data Science Post Graduate with expertise in programming, database administration, web designing, and Android development.
                                I possess strong creative and analytical skills with a proven ability to work collaboratively, pay attention to detail, and solve problems effectively.
                                My journey involves mastering various technologies from full-stack web development to machine learning algorithms.
                            </p>
                        </motion.div>

                        {/* Education Section */}
                        <motion.h2
                            id="education"
                            className="text-2xl font-bold mb-6 text-[#7C4DFF]"
                            {...slideInLeft}
                            transition={{ delay: 0.3 }}
                        >
                            Education
                        </motion.h2>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-[#7C4DFF]/50 transition-colors"
                                    {...fadeInUp}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{edu.institution}</p>
                                    </div>
                                    <span className="mt-2 md:mt-0 px-4 py-1 bg-[#7C4DFF]/10 text-[#7C4DFF] rounded-full text-sm font-medium">
                                        {edu.year}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </PageTransition>
    );
}
