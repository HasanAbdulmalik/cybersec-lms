import React from 'react';
import { motion } from 'framer-motion';
import LockAnimation from '../components/LockAnimation';
import { Shield, Download } from 'lucide-react';

const Certificate = () => {
    const handleDownload = () => {
        alert("Downloading Certificate...");
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white text-black p-2 max-w-4xl w-full shadow-[0_0_50px_rgba(255,215,0,0.3)] rotate-0 md:rotate-0"
            >
                {/* Gold Border Container */}
                <div className="border-8 border-double border-[#d4af37] p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">

                    {/* Watermark/Background Decoration */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                        <Shield size={400} />
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <div className="inline-block p-4 rounded-full border-4 border-[#d4af37] mb-4">
                            <Shield size={48} className="text-[#d4af37]" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-black tracking-widest text-[#1a1a1a] uppercase mb-2">
                            Certificate
                        </h1>
                        <span className="text-xl md:text-2xl font-serif text-[#d4af37] tracking-[0.2em] uppercase block">
                            Of Completion
                        </span>
                    </div>

                    {/* Content */}
                    <div className="mb-8 w-full">
                        <p className="text-gray-500 font-serif italic text-lg mb-4">This honors are hereby awarded to</p>

                        <div className="relative inline-block min-w-[300px] border-b-2 border-black pb-2 mb-6">
                            <span className="text-3xl md:text-5xl font-serif font-bold text-[#d4af37] block" style={{ fontFamily: 'Georgia, serif' }}>
                                Jane Doe
                            </span>
                        </div>

                        <p className="text-gray-500 font-serif italic text-lg mb-6">
                            For demonstrating excellence and mastery in the field of
                        </p>

                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-wide mb-2">
                            Corporate Cybersecurity Defense
                        </h2>
                        <p className="text-sm font-mono text-gray-500">
                            Covering: The 5 Pillars of Defense Strategy
                        </p>
                    </div>

                    {/* Signatures */}
                    <div className="flex justify-between w-full max-w-2xl mt-12 pt-8">
                        <div className="text-center">
                            <div className="font-serif italic text-2xl mb-2 text-black" style={{ fontFamily: 'cursive' }}>Admin User</div>
                            <div className="border-t border-black w-48 mx-auto pt-2 text-xs uppercase tracking-widest text-gray-500">
                                Program Director
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl mb-2 text-black">{new Date().toLocaleDateString()}</div>
                            <div className="border-t border-black w-48 mx-auto pt-2 text-xs uppercase tracking-widest text-gray-500">
                                Date Issued
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="mt-8 flex gap-4">
                <button
                    onClick={handleDownload}
                    className="flex items-center px-6 py-3 bg-[#d4af37] text-black font-bold rounded hover:bg-[#c5a028] transition-all shadow-lg"
                >
                    <Download size={20} className="mr-2" />
                    Print / Download
                </button>
            </div>
        </div>
    );
};

export default Certificate;
