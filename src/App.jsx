import { useState } from 'react';
import Header from "./components/Header";

function App() {
    return (
        <>
            <header>
                <div className="logo"><img src="./assets/logo-vector.svg"/><b> - Znajdź dla siebie fachowca </b></div>
            </header>

            <div className='quiz-container'> </div>    
        </>    
    )
}

export default App;