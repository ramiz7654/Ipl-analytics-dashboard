function QuestionCard({ question, onClick, selectedSeason }) {
  
    const winnerThemes = {
    "2007/08": "theme-rr",
    "2009": "theme-deccan",
    "2009/10": "theme-mi",
    "2011": "theme-csk",
    "2012": "theme-kkr",
    "2013": "theme-mi",
    "2014": "theme-kkr",
    "2015": "theme-mi",
    "2016": "theme-srh",
    "2017": "theme-mi",
    "2018": "theme-csk",
    "2019": "theme-mi",
    "2020/21": "theme-mi",
    "2021": "theme-csk",
    "2022": "theme-gt",
    "2023": "theme-csk",
    "2024": "theme-kkr",
    "2025": "theme-rcb",
  };

  const isWinnerQuestion =
  question.id === "season-winner" ||
  question.id === "overall-most-titles";

  const winnerTheme =
    isWinnerQuestion && selectedSeason !== "Overall"
      ? winnerThemes[selectedSeason] || ""
      : "";

      
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