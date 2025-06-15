import quizCompletedImg from "../assets/quiz-complete.png";
import questions from "../questions.js";
export default function Summary({ userAnswers }) {
  const skipedAnswers = userAnswers.filter((answer) => answer === null);
  const CorrectAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );

  const skippedAnsShare = Math.round(
    (skipedAnswers.length / userAnswers.length) * 100
  );
  const correctAnsShare = Math.round(
    (CorrectAnswers.length / userAnswers.length) * 100
  );
  const wrongAnsShare = 100 - skippedAnsShare - correctAnsShare;
  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Trophy Image" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnsShare}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (questions[index].answers[0] === answer) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
