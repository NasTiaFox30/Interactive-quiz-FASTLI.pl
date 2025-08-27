
export default function StartScreen( startQuiz) {
  return (
    <div className="card">
      <h1>Quiz - Znajdź fachowca dla siebie</h1>
      <p>Odpowiedz na kilka pytań - a my pomożemy dopasować ofertę!</p>
      <button className="start" onClick={startQuiz}>Zaczynamy</button>
      </div>
    )
}