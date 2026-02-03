import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { modulesData } from '../data/modules';
import Quiz from '../components/Quiz';
import Assignment from '../components/Assignment';

const Module = ({ onComplete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const moduleId = parseInt(id);
    const moduleData = modulesData[moduleId];

    console.log(`Loading Module: ${id}`, moduleData); // DEBUG LOG

    if (!moduleData) {
        console.error(`Module ${moduleId} not found in data.`);
        return <div className="p-8 text-white">Module {moduleId} not found. Check console.</div>;
    }

    // Scroll to top on module change
    React.useEffect(() => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.scrollTo(0, 0);
        }
    }, [id]);

    const handleQuizPass = () => {
        onComplete(moduleId);
        // Optional delay or effect before unlocking
        setTimeout(() => {
            if (moduleId < 5) {
                navigate(`/module/${moduleId + 1}`);
            } else {
                navigate('/certificate');
            }
        }, 2000);
    };

    return (
        <motion.div
            key={`module-${id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:p-8 pb-20 max-w-5xl mx-auto"
        >
            <header className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">{moduleData.title}</h2>
                <p className="text-lg md:text-xl text-[var(--accent-cyan)]">{moduleData.subtitle}</p>
            </header>

            <div className="glass-panel p-4 md:p-8 mb-8">
                <div
                    className="prose-content max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: moduleData.content }}
                />
            </div>

            <section className="mb-12">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="w-2 h-8 bg-[var(--accent-cyan)] mr-3 rounded-full"></span>
                    Practical Application
                </h3>
                <Assignment data={moduleData.assignment} />
            </section>

            <section>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="w-2 h-8 bg-[var(--accent-purple)] mr-3 rounded-full"></span>
                    Module Assessment
                </h3>
                <div className="glass-panel p-8">
                    <Quiz questions={moduleData.quiz} onPass={handleQuizPass} />
                </div>
            </section>
        </motion.div>
    );
};

export default Module;
