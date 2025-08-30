import { useState, useEffect } from 'react';
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import { calculateResult } from "./utils";

import './index.css';
import './App.css';

export default function App() {
    const [step, setStep] = useState(0);
    const totalSteps = questions.length;

    const [answers, saveAnswers] = useState([]);

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
    }

    const resultCategory = step > totalSteps ? calculateResult(answers) : null;

    return (
        <>
            <Header />
            <div className='quiz-container'>
                {step === 0 && <StartScreen startQuiz={handleStart} />}
                {step > 0 && step <= totalSteps && (
                    <QuestionScreen
                        question={questions[step - 1]}
                        onAnswer={handleAnswer}
                        step={step}
                        total={totalSteps}
                    />
                )}
                {step > totalSteps && (
                    <ResultScreen resultCategory={resultCategory} resetQuiz={handleRestart} />)
                }

            </div>
        </>
    );
}