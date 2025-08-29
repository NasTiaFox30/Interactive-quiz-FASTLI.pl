import { getTopSpecialists } from "../utils";
import { specialists } from "../data/specialists";

export default function ResultScreen({ resultCategory, resetQuiz }) {

const top = getTopSpecialists(resultCategory, 3);
const readable = specialists[resultCategory]?.label || "Fachowiec";


  return (
    <div className="card">
        <h2>Najlepsze dopasowanie: {readable}</h2>
        <p>Wybraliśmy top-3 wykonawców na podstawie Twoich odpowiedzi:</p>

        <div className="specialists-list">
            {top.map((spec, i) => (
                <div key={i} className="specialist-card">
                    <div className="specialist-row">
                        <span className="icon" style={{ fontSize: 24 }}>{spec.icon}</span>
                        <h3 style={{ margin: 0 }}>{spec.name}</h3>
                    </div>
                    
                    <p>{spec.description}</p>
                        
                    <div className="specialist-row">
                        <span>⭐ {spec.rating.toFixed(1)}</span>
                    </div>

                     <div className="contact-row">
                    <a className="contact_link secondary" href={`tel:${spec.phone}`}>Zadzwoń</a>
                        <a className="contact_link" href={`/kontakt?category=${encodeURIComponent(resultCategory)}&name=${encodeURIComponent(spec.name)}`}>Umów wizytę</a>
                    </div>
                </div>
            ))}</div>
          
        <div className="reset">
            <button className="reset-btn" onClick={resetQuiz}>Powtórz ponownie ↺</button>
        </div>
    </div>
    );
}