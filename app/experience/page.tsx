'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const experiences = [
    {
        role: "Python Django Internship",
        company: "AY Tech",
        duration: "Sep 2025 – Ongoing",
        description: [
            "Developing scalable web applications using Python and Django.",
            "Collaborating with the team to design and implement new features.",
            "Gaining hands-on experience in backend development and database management."
        ]
    },
    {
        role: "Software Engineer (Intern)",
        company: "Centgrade Labs, Kalamassery",
        duration: "Oct 2024 – Feb 2025",
        description: [
            "Assisted in software development projects using modern web technologies.",
            "Collaborated with senior engineers on full-stack development tasks.",
            "Participated in code reviews and agile meetings."
        ]
    },
    {
        role: "MEARN Stack Development",
        company: "Right Soft Options, Kaloor, Kerala",
        duration: "Jun 2024 – Sep 2024",
        description: [
            "Developed full-stack web applications using MongoDB, Express, React, and Node.js.",
            "Implemented RESTful APIs and database schemas.",
            "Optimized frontend performance and user experience."
        ]
    },
    {
        role: "Android Development Using Java",
        company: "Acmegrade, Bengaluru",
        duration: "Jun 2023 – Jul 2023",
        description: [
            "Built native Android applications using Java and Android Studio.",
            "Learned about mobile app lifecycle, UI design, and data storage.",
            "Completed a capstone project demonstrating core Android concepts."
        ]
    }
];

export default function Experience() {
    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto py-10">
                <motion.h1
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Work Experience
                </motion.h1>

                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4 md:ml-0">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="mb-10 ml-6 md:ml-12"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-[#7C4DFF] rounded-full -left-3 ring-8 ring-white dark:ring-[#0a0a0a]">
                                <svg className="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>

                            <div className="p-6 bg-white/5 dark:bg-white/5 rounded-2xl border border-white/10 hover:border-[#7C4DFF]/50 transition-colors shadow-lg">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                    <span className="text-sm font-medium text-[#7C4DFF] bg-[#7C4DFF]/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                                        {exp.duration}
                                    </span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">{exp.company}</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
