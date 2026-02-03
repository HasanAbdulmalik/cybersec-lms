import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Shield, AlertTriangle, Target, Users, Settings, Menu, X } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const SidebarItem = ({ to, icon: Icon, label, locked, index, onClick }) => {
    return (
        <div className="mb-2">
            {locked ? (
                <div className="flex items-center p-3 rounded-lg text-gray-500 cursor-not-allowed opacity-50 bg-[rgba(255,255,255,0.02)]">
                    <Lock size={18} className="mr-3" />
                    <span className="font-medium text-sm">Module {index}: {label}</span>
                </div>
            ) : (
                <NavLink
                    to={to}
                    onClick={onClick}
                    className={({ isActive }) =>
                        `flex items-center p-3 rounded-lg transition-all duration-300 ${isActive
                            ? 'bg-[rgba(0,240,255,0.1)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)] shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                            : 'text-gray-300 hover:bg-[var(--glass-bg-hover)] hover:text-white'
                        }`
                    }
                >
                    <Unlock size={18} className="mr-3" />
                    <span className="font-medium text-sm">Module {index}: {label}</span>
                </NavLink>
            )}
        </div>
    );
};

const Layout = ({ completedModules }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const modules = [
        { id: 1, path: '/module/1', label: 'The Essentials', icon: Shield },
        { id: 2, path: '/module/2', label: 'The Arsenal', icon: AlertTriangle },
        { id: 3, path: '/module/3', label: 'The Pathways', icon: Target },
        { id: 4, path: '/module/4', label: 'The Adversaries', icon: Users },
        { id: 5, path: '/module/5', label: 'The Shield', icon: Settings },
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="flex min-h-screen bg-[var(--bg-primary)] overflow-hidden relative">
            <ParticleBackground />

            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 w-full z-50 glass-panel border-b border-gray-700/50 flex items-center justify-between p-4 bg-[#0f172a]/90 backdrop-blur-xl">
                <div className="flex items-center">
                    <Shield className="text-[var(--accent-cyan)] mr-2" size={24} />
                    <span className="font-bold text-white tracking-wider">CYBER<span className="text-[var(--accent-cyan)]">SEC</span></span>
                </div>
                <button onClick={toggleSidebar} className="text-white p-1 hover:bg-white/10 rounded">
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeSidebar}
                        className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={`
                glass-panel flex flex-col p-4 border-r border-slate-700/30
                transition-transform duration-300 ease-in-out z-40
                fixed top-4 left-4 bottom-4 w-64
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[200%]'}
                md:translate-x-0 md:relative md:inset-auto md:h-[calc(100vh-2rem)]
            `}>
                <div className="mb-8 p-2 hidden md:block">
                    <h1 className="text-xl font-bold text-white tracking-wider flex items-center">
                        <Shield className="text-[var(--accent-cyan)] mr-2" />
                        CYBER<span className="text-[var(--accent-cyan)]">SEC</span>
                    </h1>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest pl-8">Awareness LMS</p>
                </div>

                {/* Mobile Sidebar Header */}
                <div className="md:hidden mb-6 pb-4 border-b border-gray-700/50">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Navigation</p>
                </div>

                <nav className="flex-1 overflow-y-auto">
                    <NavLink
                        to="/"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `flex items-center p-3 mb-6 rounded-lg transition-all duration-300 ${isActive
                                ? 'bg-[rgba(255,255,255,0.1)] text-white'
                                : 'text-gray-400 hover:text-white'
                            }`
                        }
                    >
                        <span className="font-medium">Dashboard</span>
                    </NavLink>

                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pl-2">Training Modules</div>

                    {modules.map((mod) => (
                        <SidebarItem
                            key={mod.id}
                            to={mod.path}
                            label={mod.label}
                            icon={mod.icon}
                            index={mod.id}
                            onClick={closeSidebar}
                            // Module 1 is always unlocked. Module N is locked if Module N-1 is not completed.
                            locked={mod.id > 1 && !completedModules.includes(mod.id - 1)}
                        />
                    ))}
                </nav>

                <div className="pt-4 border-t border-[var(--glass-border)]">
                    <div className="text-xs text-gray-500 text-center">
                        {Math.min(completedModules.length, 5)} / 5 Modules Completed
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 mt-2 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[var(--accent-cyan)] transition-all duration-1000 ease-out"
                            style={{ width: `${(Math.min(completedModules.length, 5) / 5) * 100}%` }}
                        />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main id="main-content" className="flex-1 p-4 pl-0 relative overflow-y-auto h-screen mt-16 md:mt-0">
                <div className="md:pr-4"> {/* Add right padding on desktop only to balance layout */}
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
