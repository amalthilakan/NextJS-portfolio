'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Contact', path: '#contact' },
];

export default function Navbar({ className }: { className?: string }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const lenis = useLenis();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' } 
        );

        navLinks.forEach((link) => {
            if (link.path.startsWith('#')) {
                const id = link.path.substring(1);
                const element = document.getElementById(id);
                if (element) observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        if (path.startsWith('#') && lenis) {
            e.preventDefault();
            const target = path === '#home' ? 0 : path;
            lenis.scrollTo(target, {
                duration: 2.5, 
                offset: -60,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Desktop Logo - Fixed Top Left */}
            <Link 
                href="#home" 
                onClick={(e) => handleScroll(e, '#home')}
                className="fixed top-6 left-6 z-50 hidden md:flex items-center ml-6 mt-6"
            >
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    AT<span className="text-[#7C4DFF]">.</span>
                </span>
            </Link>

            {/* Desktop Navbar - Floating Pill Style */}
            <div
                className={cn("fixed top-6 inset-x-0 max-w-3xl mx-auto z-50 px-4 hidden md:block", className)}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="relative rounded-full border border-gray-200 dark:bg-black/50 dark:border-white/10 bg-white/50 backdrop-blur-md flex items-center justify-between px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    {/* Left Side - Navigation Links */}
                    <div className="flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.path.substring(1);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={(e) => handleScroll(e, link.path)}
                                    className={cn(
                                        "relative px-4 py-2 rounded-full cursor-pointer transition-colors text-sm font-medium z-10",
                                        isActive 
                                            ? "text-[#7C4DFF] dark:text-[#a88bff]" 
                                            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav-bg"
                                            className="absolute -inset-x-2 -inset-y-1 bg-[#7C4DFF]/15 dark:bg-[#7C4DFF]/25 backdrop-blur-lg rounded-full -z-10 border border-[#7C4DFF]/30 shadow-[0_0_15px_rgba(124,77,255,0.2)]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 15,
                                                mass: 0.8
                                            }}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side - Theme Toggle */}
                    <div className="pl-4 border-l border-gray-200 dark:border-white/10">
                        <AnimatedThemeToggler
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
                            aria-label="Toggle Theme"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <nav className="fixed w-full z-50 top-0 md:hidden bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <Link 
                        href="#home" 
                        onClick={(e) => handleScroll(e, '#home')}
                        className="flex items-center"
                    >
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            AT<span className="text-[#7C4DFF]">.</span>
                        </span>
                    </Link>

                    {/* Right Section */}
                    <div className="flex items-center gap-2">
                        <AnimatedThemeToggler
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-yellow-400"
                            aria-label="Toggle Theme"
                        />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation"
                        >
                            {mobileMenuOpen ? (
                                <HiX size={24} className="text-gray-900 dark:text-white" aria-hidden="true" />
                            ) : (
                                <HiMenuAlt3 size={24} className="text-gray-900 dark:text-white" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800"
                            id="mobile-navigation"
                            role="navigation"
                            aria-label="Mobile navigation"
                        >
                            <ul className="flex flex-col p-4 pb-6 space-y-2">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.path.substring(1);
                                    return (
                                        <li key={link.name}>
                                            <Link
                                                href={link.path}
                                                onClick={(e) => handleScroll(e, link.path)}
                                                className={cn(
                                                    "block py-3 px-4 rounded-xl transition-colors relative z-10 text-base font-medium",
                                                    isActive
                                                        ? "text-[#7C4DFF] dark:text-[#a88bff]"
                                                        : "text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                                )}
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="active-nav-bg-mobile"
                                                        className="absolute -inset-x-1 -inset-y-0.5 bg-[#7C4DFF]/15 dark:bg-[#7C4DFF]/25 rounded-xl -z-10 border border-[#7C4DFF]/30"
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 200,
                                                            damping: 15,
                                                            mass: 0.8
                                                        }}
                                                    />
                                                )}
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
