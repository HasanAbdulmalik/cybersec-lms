import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Assignment = ({ data }) => {
    const [completed, setCompleted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState(null);

    const checkAnswer = (option, index) => {
        if (completed) return;

        setSelectedOption(index);

        // If data has a 'correctAnswer' index, check it. Otherwise default to success (introductory modules)
        const isCorrect = data.correctAnswer !== undefined ? index === data.correctAnswer : true;

        if (isCorrect) {
            setCompleted(true);
            setFeedback({ type: 'success', text: data.successMessage || "Correct! Good job." });
        } else {
            setFeedback({ type: 'error', text: data.failureMessage || "Incorrect. Try again." });
        }
    };

    return (
        <div className="my-8 glass-panel p-6 border border-[var(--accent-cyan)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 bg-[var(--accent-cyan)] text-black text-xs font-bold uppercase rounded-bl-lg">
                Interactive Threat Sim
            </div>

            <h3 className="text-xl font-bold mb-2 text-[var(--accent-cyan)]">{data.title}</h3>
            <p className="text-gray-300 mb-6 font-light">{data.description}</p>

            <div className="bg-[rgba(0,0,0,0.3)] p-6 rounded-xl border border-gray-700/50">
                {/* Scenario Display */}
                {data.scenario && (
                    <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border-l-4 border-blue-500">
                        <h4 className="text-xs text-blue-400 uppercase font-bold mb-2">Scenario</h4>
                        <pre className="whitespace-pre-wrap font-mono text-sm text-slate-300">{data.scenario}</pre>
                    </div>
                )}

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {data.options && data.options.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => checkAnswer(opt, i)}
                            disabled={completed}
                            className={`p-4 rounded-lg text-left transition-all duration-200 border relative overflow-hidden group
                                ${completed && i === data.correctAnswer
                                    ? 'bg-green-500/10 border-green-500 text-green-100'
                                    : selectedOption === i && feedback?.type === 'error'
                                        ? 'bg-red-500/10 border-red-500 text-red-100'
                                        : 'bg-slate-800 border-slate-700 hover:border-[var(--accent-cyan)] hover:bg-slate-700'
                                }
                            `}
                        >
                            <span className="relative z-10 flex items-center justify-between">
                                {opt}
                                {completed && i === data.correctAnswer && <span>✓</span>}
                                {selectedOption === i && feedback?.type === 'error' && <span>✗</span>}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Feedback Message */}
                {feedback && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-6 p-4 rounded-lg border flex items-start gap-3
                            ${feedback.type === 'success' ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}
                        `}
                    >
                        <div className={`text-xl ${feedback.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                            {feedback.type === 'success' ? '✓' : '⚠'}
                        </div>
                        <div>
                            <h4 className={`font-bold text-sm uppercase mb-1 ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                {feedback.type === 'success' ? 'Mission Success' : 'Mission Failed'}
                            </h4>
                            <p className="text-sm text-slate-300">{feedback.text}</p>
                            {feedback.type === 'error' && (
                                <button
                                    onClick={() => setFeedback(null)}
                                    className="mt-2 text-xs text-slate-400 hover:text-white underline"
                                >
                                    Reset Simulation
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>


        </div>
    );
};

export default Assignment;
