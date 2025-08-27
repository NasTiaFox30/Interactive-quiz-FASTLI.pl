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

    function handleStart() { setStep(1); }

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