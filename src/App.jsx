import { useState } from 'react';
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";

import './index.css';
import './App.css';

function App() {
    const [step, setStep] = useState(0);

    function handleStart() { setStep(1); }

    return (
        <>
            <Header />
            <div className='quiz-container'>
                <div className='card'></div>
            </div>    
        </>    
    )
}

export default App;