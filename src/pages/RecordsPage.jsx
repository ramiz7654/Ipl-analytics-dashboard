import { useEffect, useState } from "react";
import QuestionGrid from "../components/QuestionGrid";
import AnswerModal from "../components/AnswerModal";
import { overallQuestions } from "../data/questions";

function RecordsPage() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="app">
      <main className="dashboard">
        <section className="records-section" id="records">
          <div className="records-heading">
            <span className="section-label">IPL RECORDS</span>
            <h2>IPL Records</h2>
            <p>
              Explore IPL batting, bowling and team records
              using the questions below.
            </p>
          </div>

          <QuestionGrid
            questions={overallQuestions}
            onQuestionClick={setSelectedQuestion}
          />
        </section>

        <AnswerModal
          question={selectedQuestion}
          answer={null}
          onClose={() => setSelectedQuestion(null)}
        />
      </main>
    </div>
  );
}

export default RecordsPage;