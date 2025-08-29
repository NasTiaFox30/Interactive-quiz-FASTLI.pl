import { getTopSpecialists } from "../utils";
import { specialists } from "../data/specialists";

export default function ResultScreen({ resultCategory }) {

const top = getTopSpecialists(resultCategory, 3);
const readable = specialists[resultCategory]?.label || "Fachowiec";


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