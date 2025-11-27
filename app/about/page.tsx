'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiMongodb, SiSqlite, SiTensorflow, SiPandas, SiAxios } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';

const skills = [
    { name: 'Python', icon: FaPython, category: 'Languages' },
    { name: 'Java', icon: FaJava, category: 'Languages' },
    { name: 'JavaScript', icon: FaJs, category: 'Languages' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Languages' },
    { name: 'C/C++', icon: null, category: 'Languages' }, // No icon for C/C++ in standard set, using text fallback or generic
    { name: 'HTML5', icon: FaHtml5, category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, category: 'Frontend' },
    { name: 'React', icon: FaReact, category: 'Frontend' },
    { name: 'Redux', icon: null, category: 'Frontend' },
    { name: 'Node.js', icon: FaNodeJs, category: 'Backend' },
    { name: 'Express', icon: null, category: 'Backend' },
    { name: 'Django', icon: SiDjango, category: 'Backend' },
    { name: 'SQL', icon: FaDatabase, category: 'Database' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
    { name: 'SQLite', icon: SiSqlite, category: 'Database' },
    { name: 'Git', icon: FaGitAlt, category: 'Tools' },
    { name: 'VS Code', icon: VscVscode, category: 'Tools' },
    { name: 'Machine Learning', icon: SiTensorflow, category: 'Data Science' },
    { name: 'Data Analysis', icon: SiPandas, category: 'Data Science' },
    { name: 'React Native', icon: TbBrandReactNative, category: 'Frontend' },
    { name: 'Axios', icon: SiAxios, category: 'Frontend' },
    { name: 'REST API', icon: TbApi, category: 'Backend' },
];

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
    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto py-10">
                <motion.h1
                    className="text-4xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    About Me
                </motion.h1>

                {/* Bio Section */}
                <motion.div
                    className="bg-white/5 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
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
                    className="text-2xl font-bold mb-6 text-[#7C4DFF]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Education
                </motion.h2>
                <div className="space-y-6 mb-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#7C4DFF]/50 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
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

                {/* Skills Section */}
                <motion.h2
                    className="text-2xl font-bold mb-6 text-[#7C4DFF]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    Skills
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.05 }}
                        >
                            <div className="text-3xl mb-2 text-[#7C4DFF]">
                                {skill.icon ? <skill.icon /> : <span className="text-xl font-bold">{'</>'}</span>}
                            </div>
                            <span className="font-medium text-sm">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
