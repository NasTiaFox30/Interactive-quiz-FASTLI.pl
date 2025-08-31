import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import { calculateResult } from "./utils";
import  BG_animation  from './components/Animation_BG';

import './index.css';
import './App.css';

export default function App() {
    const [step, setStep] = useState(0);
    const totalSteps = questions.length;

    const [answers, saveAnswers] = useState([]);

    const [showResult, setShowResult] = useState(false);

    function handleStart() { setStep(1); }
    const handleAnswer = (questionId, option) => {
        saveAnswers((prev) => [
            ...prev.filter((a) => a.key !== questionId),
            { key: questionId, ...option },
        ]);

        // next question
        if (step <= totalSteps) {
            setStep(step + 1);
        }   
    }

    function handleRestart() {
        setStep(0);
        saveAnswers([]);
        setShowResult(false);
    }

    useEffect(() => {
        if (step > totalSteps) {
            const timer = setTimeout(() => {
                setShowResult(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [step, totalSteps]);

    const resultCategory = step > totalSteps ? calculateResult(answers) : null;

    return (
        <>
            <BG_animation />
            <Header />
            <div className='quiz-container'>
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="start"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                        >
                            <StartScreen startQuiz={handleStart} />
                        </motion.div>
                    )}

                    {step > 0 && !showResult && (
                        <motion.div
                            key={`question-${step}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={
                                step > totalSteps
                                    ? { display: "none" }
                                    : { opacity: 1, x: 0 }
                            }
                            exit={
                             step >= totalSteps
                                    ? {
                                        transition: { duration: 0.6, ease: "easeInOut" },
                                        opacity: 0
                                    }
                                : { opacity: 0, x: -50 }
                            }
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <QuestionScreen
                                question={questions[Math.min(step - 1, totalSteps - 1)]}
                                onAnswer={handleAnswer}
                                step={step}
                                total={totalSteps}
                            />
                        </motion.div>
                    )}
                
                    {step > totalSteps && showResult && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: "easeOut"}}
                        >
                            <ResultScreen resultCategory={resultCategory} resetQuiz={handleRestart} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}