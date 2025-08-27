import { useState } from 'react';
import { questions } from './data';
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";

import './index.css';
import './App.css';

function App() {
    const [step, setStep] = useState(0);
    const totalSteps = questions.length;
    let idxquestion = step - 1;

    const [answers, saveAnswers] = useState([]);

    function handleStart() { setStep(1); }
    const handleAnswer = (questionId, option) => {
        saveAnswers((prev) => [
            ...prev.filter((a) => a.key !== questionId),
            { key: questionId, ...option },
        ]);
    }

    return (
        <>
            <Header />
            <div className='quiz-container'>
                {step === 0 && <StartScreen startQuiz={handleStart} />}
            </div>    
        </>    
    )
}

export default App;