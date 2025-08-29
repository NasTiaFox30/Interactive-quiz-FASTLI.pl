import { useState } from 'react';
import { questions } from './data';
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";

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

            </div>    
        </>    
    )
}