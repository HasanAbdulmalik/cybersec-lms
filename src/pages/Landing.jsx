import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LockAnimation from '../components/LockAnimation';

const Landing = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-8 gap-12">
            {/* Text Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 max-w-xl"
            >
                <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                    SECURE <br />
                    <span className="text-gradient-cyan text-6xl md:text-7xl">THE FUTURE</span>
                </h1>

                <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                    Corporate cybersecurity isn't just IT's problem—it's yours.
                    Master the <span className="text-[var(--accent-cyan)] font-mono">5 Pillars of Defense</span>.
                </p>

                <Link
                    to="/module/1"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-cyan)] text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.6)]"
                >
                    <span className="relative z-10">INITIATE PROTOCOL</span>
                    <div className="absolute inset-0 bg-[var(--accent-green)] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </Link>
            </motion.div>

            {/* Animation Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex-1 flex justify-center items-center"
            >
                <LockAnimation state="locked" />
            </motion.div>
        </div>
    );
};

export default Landing;
