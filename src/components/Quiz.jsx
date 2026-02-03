import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const Quiz = ({ questions, onPass }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (optionIndex) => {
        const isCorrect = optionIndex === questions[currentQuestion].correct;
        const newScore = isCorrect ? score + 1 : score;
        setScore(newScore);

        const newAnswers = [...answers, { question: currentQuestion, selected: optionIndex, isCorrect }];
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
            const percentage = (newScore / questions.length) * 100;
            if (percentage >= 70) {
                onPass();
            }
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setAnswers([]);
    };

    if (showResult) {
        const percentage = Math.round((score / questions.length) * 100);
        const passed = percentage >= 70;

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-[rgba(0,0,0,0.3)] rounded-xl border border-[var(--glass-border)]"
            >
                <div className="mb-4 flex justify-center">
                    {passed ? (
                        <CheckCircle size={64} className="text-[var(--accent-green)]" />
                    ) : (
                        <XCircle size={64} className="text-[var(--accent-red)]" />
                    )}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                    {passed ? 'Assessment Passed' : 'Assessment Failed'}
                </h3>

                <p className="text-4xl font-black mb-4 text-gradient-cyan">{percentage}%</p>

                <p className="mb-8 text-gray-400">
                    {passed
                        ? 'Excellent work. The next module has been unlocked.'
                        : 'You need 70% to proceed. Please review the material and try again.'}
                </p>

                {!passed && (
                    <button
                        onClick={resetQuiz}
                        className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded hover:bg-white transition-colors"
                    >
                        Try Again
                    </button>
                )}
            </motion.div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6 text-sm text-gray-500 uppercase tracking-widest">
                <span>Question {currentQuestion + 1} / {questions.length}</span>
                <span>Target: 70%</span>
            </div>

            <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                <h4 className="text-xl font-medium mb-6">{question.question}</h4>

                <div className="space-y-3">
                    {question.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            className="w-full text-left p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] hover:bg-[rgba(0,240,255,0.1)] hover:border-[var(--accent-cyan)] transition-all duration-200"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Quiz;
