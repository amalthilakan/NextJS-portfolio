'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaAndroid } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    github: string;
    live: string;
    apk?: string;
}

const projects: Project[] = [
    {
        title: "FoodPin",
        description: "A mobile application to bookmark restaurants from maps to visit later.",
        tags: ["React Native", "Expo", "Google Maps"],
        image: "/splash-art.png",
        github: "https://github.com/amalthilakan",
        live: "#",
        apk: "/foodpin-v-1.0.4.apk"
    },
    {
        title: "Recipe Recommendation System",
        description: "A personalized recommendation system using machine learning algorithms to suggest recipes based on user preferences.",
        tags: ["Machine Learning", "Python", "Data Science"],
        image: "https://picsum.photos/id/292/800/600",
        github: "https://github.com/amalthilakan",
        live: "#"
    },
    {
        title: "Indian Sign Language Detection",
        description: "Sign language detection model using Google Mediapipe and Recurrent Neural Networks.",
        tags: ["Deep Learning", "Computer Vision", "Mediapipe"],
        image: "/Airbrush-OBJECT-REMOVER-1764249577391.jpg",
        github: "https://github.com/amalthilakan",
        live: "#"
    },
    {
        title: "Breast Cancer Detection",
        description: "Predictive models for early detection and classification of breast cancer cases using ML techniques.",
        tags: ["Machine Learning", "Healthcare", "Python"],
        image: "/Mammography.webp",
        github: "https://github.com/amalthilakan",
        live: "#"
    },
    {
        title: "Cable Operator Management",
        description: "Web-based platform to manage cable operator operations efficiently, handling user data and billing.",
        tags: ["Web Dev", "Management", "Database"],
        image: "https://picsum.photos/id/1/800/600",
        github: "https://github.com/amalthilakan",
        live: "#"
    }
];

export default function Projects() {
    return (
        <PageTransition>
            <div className="max-w-6xl mx-auto py-10">
                <motion.h1
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Featured Projects
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group bg-white/5 dark:bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#7C4DFF]/50 transition-all hover:shadow-2xl hover:shadow-[#7C4DFF]/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    {/* <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-black rounded-full hover:bg-[#7C4DFF] hover:text-white transition-colors"
                                    >
                                        <FaGithub size={20} />
                                    </a> */}
                                    {/* <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-black rounded-full hover:bg-[#7C4DFF] hover:text-white transition-colors"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a> */}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-[#7C4DFF]/10 text-[#7C4DFF] rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.apk && (
                                    <div className="mt-6">
                                        <a
                                            href={project.apk}
                                            download
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#7C4DFF] text-white rounded-lg hover:bg-[#6c42e0] transition-colors font-medium text-sm"
                                        >
                                            <FaAndroid size={18} />
                                            Download App
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
