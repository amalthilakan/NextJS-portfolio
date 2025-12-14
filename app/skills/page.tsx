'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import {
    FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact,
    FaNodeJs, FaDatabase, FaGitAlt
} from 'react-icons/fa';
import {
    SiTypescript, SiDjango, SiMongodb, SiSqlite,
    SiTensorflow, SiPandas, SiAxios, SiRedux, SiExpress,
    SiC, SiCplusplus
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';

type Skill = {
    name: string;
    icon: React.ElementType | null;
};

const skillGroups: Record<string, Skill[]> = {
    Languages: [
        { name: 'Python', icon: FaPython },
        { name: 'C', icon: SiC },
        { name: 'C++', icon: SiCplusplus },
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: FaJs },
        { name: 'TypeScript', icon: SiTypescript },
    ],
    "Frameworks & Libraries": [
        { name: 'React', icon: FaReact },
        { name: 'React Native', icon: TbBrandReactNative },
        { name: 'NodeJS', icon: FaNodeJs },
        { name: 'ExpressJS', icon: SiExpress },
        { name: 'Django', icon: SiDjango },
    ],
    "Web Technologies": [
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'Redux', icon: SiRedux },
        { name: 'Axios', icon: SiAxios },
        { name: 'REST API', icon: TbApi },
    ],
    Databases: [
        { name: 'SQL', icon: FaDatabase },
        { name: 'SQLite', icon: SiSqlite },
        { name: 'MongoDB', icon: SiMongodb },
    ],

    Tools: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'VS Code', icon: VscVscode },
    ],
    "Data Science": [
        { name: 'Machine Learning', icon: SiTensorflow },
        { name: 'Data Analysis', icon: SiPandas },
    ],
};

export default function Skills() {
    return (
        <PageTransition>
            <section className="max-w-6xl mx-auto px-6 py-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight">
                        Technical Skills
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A curated set of technologies and tools I use to build scalable,
                        maintainable, and user-focused applications.
                    </p>
                </motion.div>

                {/* Skill Groups */}
                <div className="space-y-14">
                    {Object.entries(skillGroups).map(([category, skills], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h2 className="text-xl font-semibold mb-6 border-l-4 border-[#7C4DFF] pl-4">
                                {category}
                            </h2>

                            <div className="flex flex-wrap gap-4 relative z-10">
                                {skills.map((skill, index) => {
                                    // Random positioning to break grid
                                    const marginTop = (index % 3) * 10;
                                    const marginLeft = (index % 4) * 5;
                                    const marginRight = (index % 2) * 5;

                                    return (
                                        <motion.div
                                            key={skill.name}
                                            className="relative group"
                                            style={{
                                                marginTop: `${marginTop}px`,
                                                marginLeft: `${marginLeft}px`,
                                                marginRight: `${marginRight}px`
                                            }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            transition={{
                                                opacity: { duration: 0.5, delay: index * 0.05 },
                                                scale: { duration: 0.5, delay: index * 0.05 },
                                            }}
                                            whileHover={{ scale: 1.15, zIndex: 10 }}
                                        >
                                            <div className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm group-hover:shadow-lg group-hover:border-[#7C4DFF]/50 transition-all cursor-pointer">
                                                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 text-[#7C4DFF] group-hover:scale-110 transition-transform duration-300">
                                                    {skill.icon ? (
                                                        <skill.icon />
                                                    ) : (
                                                        <span className="text-lg font-semibold">{'</>'}</span>
                                                    )}
                                                </div>
                                                <span className="text-xs sm:text-sm font-medium text-center px-2 pointer-events-none select-none text-gray-800 dark:text-gray-200 line-clamp-1">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </PageTransition>
    );
}
