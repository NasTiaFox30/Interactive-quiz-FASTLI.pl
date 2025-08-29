import { specialists } from "./specialists";

export default function ResultScreen({ resultCategory }) {
  if (!resultCategory || !specialists[resultCategory]) {
    return <div>Brak danych o fachowcu ;(</div>;
  }

  const categoryData = specialists[resultCategory];
  const categoryName = categoryData.categ_text;

  return (
    <div className="card">
      <h1>{categoryName}</h1>
      <p>Najlepsi fachowcy w tej kategorii:</p>
          <ul>
              {/* lista fahowców */}
      </ul>
    </div>
  );
}