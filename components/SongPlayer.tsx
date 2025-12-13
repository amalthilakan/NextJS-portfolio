'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaExpandAlt, FaCompressAlt, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const songs = [
    {
        title: "Samuel Kim - Overtaken  Epic Version from One Piece",
        artist: "Samuel Kim",
        src: "/Samuel Kim - Overtaken  Epic Version from One Piec.mp3",
        art: "/onepiececut.jpeg"
    }
];

const SongPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentSong = songs[currentSongIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateTime = () => setCurrentTime(audio.currentTime);
            const updateDuration = () => setDuration(audio.duration);

            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', updateDuration);
            audio.addEventListener('ended', handleNext);

            return () => {
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', updateDuration);
                audio.removeEventListener('ended', handleNext);
            };
        }
    }, [currentSongIndex]);

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch(e => console.log("Playback failed", e));
        }
    }, [currentSongIndex, isPlaying]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleNext = () => {
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);
        setIsPlaying(true);
    };

    const handlePrev = () => {
        setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
        setIsPlaying(true);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <>
            <audio ref={audioRef} src={currentSong.src} />

            <AnimatePresence>
                {/* Mini Player */}
                {!isExpanded && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-4 right-4 z-50"
                    >
                        <div className="bg-black/80 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl flex flex-col gap-3 w-[350px] border border-white/10">

                            {/* Top Row: Art, Info, Controls */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                    <Image src={currentSong.art} alt="Album Art" fill className="object-cover" />
                                </div>

                                <div className="flex-grow overflow-hidden">
                                    <h3 className="font-bold text-base truncate">{currentSong.title}</h3>
                                    <p className="text-sm text-gray-400 truncate">{currentSong.artist}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button onClick={handlePrev} className="text-gray-400 hover:text-white"><FaStepBackward size={16} /></button>
                                    <button onClick={togglePlay} className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                                        {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
                                    </button>
                                    <button onClick={handleNext} className="text-gray-400 hover:text-white"><FaStepForward size={16} /></button>
                                    <button onClick={() => setIsExpanded(true)} className="text-gray-400 hover:text-white ml-2"><FaExpandAlt size={16} /></button>
                                </div>
                            </div>

                            {/* Bottom Row: Volume Slider */}
                            <div className="flex items-center gap-2 w-full px-1">
                                {volume === 0 ? <FaVolumeMute size={14} className="text-gray-400" /> : <FaVolumeUp size={14} className="text-gray-400" />}
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.01}
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                />
                            </div>

                        </div>
                    </motion.div>
                )}

                {/* Full Modal Player */}
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/10 relative">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white"
                            >
                                <FaCompressAlt size={20} />
                            </button>

                            <div className="flex flex-col items-center mt-4">
                                <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl mb-8">
                                    <Image src={currentSong.art} alt="Album Art" fill className="object-cover" />
                                </div>

                                <div className="text-center mb-8 w-full">
                                    <h2 className="text-2xl font-bold mb-2 truncate">{currentSong.title}</h2>
                                    <p className="text-gray-400 text-lg truncate">{currentSong.artist}</p>
                                </div>

                                <div className="w-full mb-6">
                                    <input
                                        type="range"
                                        min={0}
                                        max={duration || 100}
                                        value={currentTime}
                                        onChange={handleSeek}
                                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-8 w-full mb-8">
                                    <button onClick={handlePrev} className="text-gray-400 hover:text-white transition-colors">
                                        <FaStepBackward size={24} />
                                    </button>
                                    <button
                                        onClick={togglePlay}
                                        className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                                    >
                                        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} className="ml-1" />}
                                    </button>
                                    <button onClick={handleNext} className="text-gray-400 hover:text-white transition-colors">
                                        <FaStepForward size={24} />
                                    </button>
                                </div>

                                {/* Volume Control */}
                                <div className="flex items-center gap-3 w-full px-4">
                                    {volume === 0 ? <FaVolumeMute size={16} className="text-gray-400" /> : <FaVolumeUp size={16} className="text-gray-400" />}
                                    <input
                                        type="range"
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SongPlayer;
