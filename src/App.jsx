import { useState } from 'react';
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";

import './index.css';
import './App.css';

function App() {
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