'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { BsSun, BsMoon } from 'react-icons/bs';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (localStorage.theme === 'light') {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        } else {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
        } else {
            setTheme('dark');
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <nav className="fixed w-full z-50 top-0 start-0 transition-all duration-300 bg-white/10 dark:bg-black/10 backdrop-blur-lg border-b border-white/20 dark:border-white/10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-900 dark:text-white">
                        AT<span className="text-[#7C4DFF]">.</span>
                    </span>
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-gray-600" />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                    </button>
                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent dark:border-gray-700">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className={`block py-2 px-3 rounded md:p-0 transition-colors ${isActive
                                            ? 'text-[#7C4DFF] font-bold'
                                            : 'text-gray-900 dark:text-white hover:text-[#7C4DFF] dark:hover:text-[#7C4DFF]'
                                            }`}
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}

                        {/* Tools Dropdown */}
                        <li className="relative group">
                            <button
                                className={`flex items-center py-2 px-3 rounded md:p-0 transition-colors text-gray-900 dark:text-white hover:text-[#7C4DFF] dark:hover:text-[#7C4DFF]`}
                                onClick={() => setIsToolsOpen(!isToolsOpen)}
                                onMouseEnter={() => setIsToolsOpen(true)}
                            >
                                Tools
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            {/* Dropdown menu */}
                            <div
                                className={`absolute z-10 ${isToolsOpen ? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 pt-2`}
                                onMouseLeave={() => setIsToolsOpen(false)}
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link
                                            href="/tools/color-palette-generator"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setIsToolsOpen(false)}
                                        >
                                            Color Palette Generator
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-xl overflow-hidden"
                    >
                        <ul className="flex flex-col p-4 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block py-2 px-3 rounded transition-colors ${pathname === link.path
                                            ? 'text-[#7C4DFF] font-bold bg-gray-100 dark:bg-gray-800'
                                            : 'text-gray-900 dark:text-white hover:text-[#7C4DFF]'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}

                            {/* Mobile Tools Section */}
                            <li>
                                <button
                                    onClick={() => setIsToolsOpen(!isToolsOpen)}
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded dark:text-white hover:text-[#7C4DFF]"
                                >
                                    Tools
                                    <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {isToolsOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="py-2 space-y-2 pl-6"
                                        >
                                            <li>
                                                <Link
                                                    href="/tools/color-palette-generator"
                                                    onClick={() => setIsOpen(false)}
                                                    className="block py-2 px-3 text-gray-900 rounded dark:text-white hover:text-[#7C4DFF] dark:hover:bg-gray-700"
                                                >
                                                    Color Palette Generator
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
