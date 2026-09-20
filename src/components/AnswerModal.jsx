function AnswerModal({
  question,
  answer,
  onClose,
}) {
  if (!question) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="answer-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>

        <span className="category-badge">
          {question.category}
        </span>

        <h2>{question.title}</h2>

        <div className="answer-box">
          {answer?.icon && (
            <div className="answer-icon">
              {answer.icon}
            </div>
          )}

          <div className="answer-main">
            <h3>
              {answer?.name || "No data available"}
            </h3>

            {answer?.value !== undefined && (
              <strong>
                {answer.value}
              </strong>
            )}

            {answer?.extra && (
              <p>{answer.extra}</p>
            )}
          </div>
        </div>

        <button
          className="close-button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AnswerModal;