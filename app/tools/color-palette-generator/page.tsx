'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiCopy, FiRefreshCw } from 'react-icons/fi';
import { Toaster, toast } from 'react-hot-toast';

interface Color {
    hex: string;
    name: string;
}

interface Palette {
    id: string;
    name: string;
    colors: string[];
}

export default function ColorPaletteGenerator() {
    const [query, setQuery] = useState('');
    const [palettes, setPalettes] = useState<Palette[]>([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const searchPalettes = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setSearched(true);
        setPalettes([]);

        try {
            // Use local API route to avoid CORS issues
            const response = await fetch(`/api/palettes?q=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Failed to fetch palettes');

            const data = await response.json();

            const formattedPalettes = Array.isArray(data) ? data.map((item: any, index: number) => ({
                id: item.id || `palette-${index}`,
                name: item.text || item.name || `Palette ${index + 1}`, // Map 'text' from API to 'name'
                colors: item.colors || item
            })) : [];

            setPalettes(formattedPalettes);
        } catch (error) {
            console.error('Error fetching palettes:', error);
            toast.error('Failed to generate palettes. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (color: string) => {
        navigator.clipboard.writeText(color);
        toast.success(`Copied ${color} to clipboard!`, {
            style: {
                background: '#333',
                color: '#fff',
            },
            iconTheme: {
                primary: '#7C4DFF',
                secondary: '#fff',
            },
        });
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black transition-colors duration-300">
            <Toaster position="bottom-center" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        AI Color Palette <span className="text-[#7C4DFF]">Generator</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Generate beautiful color palettes using AI. Just type a keyword like "ocean", "sunset", or "cyberpunk".
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                        Powered by <a href="https://colormagic.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#7C4DFF]">ColorMagic API</a>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-2xl mx-auto mb-16"
                >
                    <form onSubmit={searchPalettes} className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter a keyword (e.g., 'Forest', 'Vintage', 'Neon')..."
                            className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 outline-none transition-all shadow-lg"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="absolute right-2 top-2 bottom-2 px-6 bg-[#7C4DFF] hover:bg-[#6c3fff] text-white rounded-full font-medium transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <FiRefreshCw className="animate-spin text-xl" />
                            ) : (
                                <FiSearch className="text-xl" />
                            )}
                            <span className="hidden sm:inline">Generate</span>
                        </button>
                    </form>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {palettes.map((palette, index) => (
                        <motion.div
                            key={palette.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-800"
                        >
                            <div className="h-48 flex">
                                {Array.isArray(palette.colors) && palette.colors.map((color, colorIndex) => (
                                    <div
                                        key={colorIndex}
                                        className="h-full flex-1 group relative cursor-pointer"
                                        style={{ backgroundColor: color }}
                                        onClick={() => copyToClipboard(color)}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                            <FiCopy className="text-white text-xl drop-shadow-md" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                                    {palette.name || query} Palette
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(palette.colors) && palette.colors.map((color, colorIndex) => (
                                        <button
                                            key={colorIndex}
                                            onClick={() => copyToClipboard(color)}
                                            className="flex items-center gap-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded transition-colors"
                                        >
                                            <span
                                                className="w-3 h-3 rounded-full border border-gray-300 dark:border-gray-600"
                                                style={{ backgroundColor: color }}
                                            />
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {!loading && searched && palettes.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            No palettes found for "{query}". Try a different keyword.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
