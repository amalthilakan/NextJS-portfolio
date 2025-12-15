'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Menu, MenuItem, HoveredLink } from '@/components/ui/navbar-menu';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();

    return (
        <>
            {/* Desktop Logo - Fixed Top Left */}
            <Link href="/" className="fixed top-6 left-6 z-50 hidden md:flex items-center ml-6 mt-6">
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
                <Menu setActive={setActive}>
                    {/* Left Side - Navigation Links */}
                    <div className="flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={cn(
                                    "cursor-pointer hover:opacity-[0.9] transition-colors",
                                    pathname === link.path
                                        ? "text-[#7C4DFF] font-bold"
                                        : "text-black dark:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}


                    </div>

                    {/* Right Side - Theme Toggle */}
                    <AnimatedThemeToggler
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-yellow-400"
                        aria-label="Toggle Theme"
                    />
                </Menu>
            </div>

            {/* Mobile Navbar */}
            <nav className="fixed w-full z-50 top-0 md:hidden bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
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
                            <ul className="flex flex-col p-4 space-y-1">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "block py-3 px-4 rounded-lg transition-colors",
                                                pathname === link.path
                                                    ? "text-[#7C4DFF] font-bold bg-[#7C4DFF]/10"
                                                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}


                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
