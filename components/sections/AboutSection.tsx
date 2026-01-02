import { motion } from 'framer-motion';
import { fadeInDown, slideInLeft, panInLeft, panInRight } from '@/lib/animations';
import { CardSkeleton } from '@/components/SkeletonCard';
import { useState, useEffect } from 'react';

// ... (education array remains same, omitted for brevity if I could, but replace_file_content needs full block or precise range)
// I will just replace the Component function body for cleaner edits.

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

export default function AboutSection() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="about" className="py-20 min-h-screen flex items-center overflow-hidden">
            <div className="max-w-4xl mx-auto w-full">
                <motion.h1
                    className="text-4xl font-bold mb-12 text-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInDown}
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
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={panInLeft}
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
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={slideInLeft}
                            transition={{ delay: 0.3 }}
                        >
                            Education
                        </motion.h2>
                        <motion.div
                            className="space-y-6"
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={panInRight}
                        >
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-[#7C4DFF]/50 transition-colors"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{edu.institution}</p>
                                    </div>
                                    <span className="mt-2 md:mt-0 px-4 py-1 bg-[#7C4DFF]/10 text-[#7C4DFF] rounded-full text-sm font-medium">
                                        {edu.year}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    );
}
