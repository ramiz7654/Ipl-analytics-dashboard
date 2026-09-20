function QuestionCard({ question, onClick }) {
  return (
    <button
      className="question-card"
      onClick={() => onClick(question)}
    >
      <div className="card-top">
        <span className="category-badge">
          {question.category}
        </span>

        <span className="arrow">→</span>
      </div>

      <h3>{question.title}</h3>

      <p>{question.description}</p>

      <span className="view-answer">
        View Answer
      </span>
    </button>
  );
}

export default QuestionCard;