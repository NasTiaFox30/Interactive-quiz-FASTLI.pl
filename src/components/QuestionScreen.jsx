import ProgressBar from "./ProgressBar";

export default function QuestionScreen({ question, onAnswer, step, total }) {
  return (
    <div className="card">
      <h2 className="question">{question.text}</h2>
      <div className="options">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(question.id, option)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
