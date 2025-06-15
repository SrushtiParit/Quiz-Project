import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Questions from "./Questions.jsx";
import quizCompletedImg from "../assets/quiz-complete.png";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleAnswerSelect = useCallback(
    (selectedAns) => {
      setUserAnswers((prevAns) => {
        return [...prevAns, selectedAns];
      });
    },
    [activeQuestionIndex]
  );

  const handleSkipQuestion = useCallback(() => {
    handleAnswerSelect(null);
  }, [handleAnswerSelect]);

  if (quizIsCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Questions
        onSelectAnswer={handleAnswerSelect}
        onSkipAnswer={handleSkipQuestion}
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
      />
    </div>
  );
}
