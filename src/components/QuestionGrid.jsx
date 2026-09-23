import QuestionCard from "./QuestionCard";

function QuestionGrid({ questions, onQuestionClick, selectedSeason }) {
  if (!questions.length) {
    return (
      <div className="no-results">
        <div>🔎</div>
        <h3>No questions found</h3>
        <p>Try another search.</p>
      </div>
    );
  }

  return (
    <div className="question-grid">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          onClick={onQuestionClick}
          selectedSeason={selectedSeason}
        />
      ))}
    </div>
  );
}

export default QuestionGrid;